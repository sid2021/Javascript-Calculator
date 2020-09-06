import React from "react";
import "./App.css";

let regOperator = /[*/+-]/,
  regOperatorAtEnd = /[*/+-]$/,
  regOperatorZero = /([^.0-9]0|^0)$/,
  regLastSubstring = /(-?\d+\.?\d*)$/,
  regEndsWithNegativeSign = /[*/+]-$/;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: "0",
      formula: "",
      evaluated: false,
      lastAnswer: "0",
    };

    this.start = this.start.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
  }

  start() {
    this.setState({
      currentVal: "0",
      formula: "",
      evaluated: false,
      lastAnswer: "0",
    });
  }

  handleBackspace() {
    this.setState({
      currentVal:
        this.state.currentVal.length > 0
          ? this.state.currentVal.slice(0, this.state.currentVal.length - 1)
          : this.state.currentVal,
      formula:
        this.state.formula.length > 0
          ? this.state.formula.slice(0, this.state.formula.length - 1)
          : this.state.formula,
    });
  }

  handleNumbers(e) {
    const { currentVal, formula, evaluated } = this.state;
    const value = e.target.value;
    this.setState({ evaluated: false });
    // If evaluated is set to true (i.e. after pressing evaluate button)
    // "clear up" currentVal and formula and add entered value
    if (evaluated === true) {
      this.setState({
        currentVal: value,
        formula: value !== "0" ? value : 0,
      });
    } else {
      this.setState({
        currentVal:
          currentVal === "0" || regOperator.test(currentVal)
            ? value
            : currentVal + value,
        formula:
          // If currentVal is 0 and entered value is 0 do not allow
          // to add additionl zeros
          currentVal === "0" && value === "0"
            ? formula === ""
              ? value
              : formula
            : // Check for "+0", "-0" etc. patterns, if such pattern
            // is found slice the last zero and add entered value
            regOperatorZero.test(formula)
            ? formula.slice(0, -1) + value
            : formula + value,
      });
    }
  }

  handleOperator(e) {
    const value = e.target.value;
    const { formula, lastAnswer, evaluated } = this.state;
    this.setState({ currentVal: value, evaluated: false });
    // If evaluated is set to true (i.e. after pressing evaluate button)
    // take the result of evaluation (lastAnswer) and add to it the operator
    // e.g formula: "2+2=4" -> "4+2", currentVal: "4" -> "+"
    if (evaluated) {
      this.setState({ formula: lastAnswer + value });
    }
    // Else if formula does not end with operator (+-*/)
    // add the value (operator)  to the formula and store it in lastAnswer
    // Last Answer will be used later if user clicks operator numerous times
    else if (!regOperatorAtEnd.test(formula)) {
      this.setState({
        lastAnswer: formula,
        formula: formula + value,
      });
    }
    // Else if formula ends with an operator but does not end with negative sign
    else if (!regEndsWithNegativeSign.test(formula)) {
      this.setState({
        formula:
          // If formula + value ends with negative sign
          // set formula to formula + value e.g. "23+" + "-" = "23+-"
          // Else set formula to lastAnswer + value e.g. "23+" => "23/"
          (regEndsWithNegativeSign.test(formula + value)
            ? formula
            : lastAnswer) + value,
      });
    }
    // Handles cases like: formula: "2+-" + value: "+" => "2+"
    // i.e. formula ends with negative sign but value is not negative
    else if (value !== "‑") {
      this.setState({
        formula: lastAnswer + value,
      });
    }
  }

  handleDecimal() {
    // If evaluated is set to true (i.e. after pressing evaluate button)
    // set currentVal and formula to "0".
    if (this.state.evaluated === true) {
      this.setState({
        currentVal: "0.",
        formula: "0.",
        evaluated: false,
      });
      // Pressing decimal button won't have any effect if currentVal
      // already includes "."
    } else if (!this.state.currentVal.includes(".")) {
      this.setState({ evaluated: false });
      // If inside formula there is an operator at the end e.g. "25+"
      // produce "25+0."
      if (
        regOperatorAtEnd.test(this.state.formula) ||
        (this.state.currentVal === "0" && this.state.formula === "")
      ) {
        this.setState({
          currentVal: "0.",
          formula: this.state.formula + "0.",
        });
      } else {
        this.setState({
          // Else add the "." to the end of currentVal and formula
          currentVal: this.state.formula.match(regLastSubstring)[0] + ".",
          formula: this.state.formula + ".",
        });
      }
    }
  }

  handleEvaluate() {
    if (!this.state.evaluated) {
      let expression = this.state.formula;
      while (regOperator.test(expression[expression.length - 1])) {
        expression = expression.slice(0, -1);
      }
      let result = Math.round(1000000000000 * eval(expression)) / 1000000000000;
      this.setState({
        currentVal: result.toString(),
        formula: expression + "=" + result,
        evaluated: true,
        lastAnswer: result,
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <h1>JavaScript Calculator</h1>
        <div className="calculator">
          <Formula formula={this.state.formula} />
          <Display currentVal={this.state.currentVal} />
          <Buttons
            start={this.start}
            backspace={this.handleBackspace}
            numbers={this.handleNumbers}
            operator={this.handleOperator}
            evaluate={this.handleEvaluate}
            decimal={this.handleDecimal}
          />
        </div>
        <footer>
          by{" "}
          <a
            href="https://codepen.io/sid2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            sid2021{" "}
          </a>
        </footer>
      </div>
    );
  }
}

class Formula extends React.Component {
  render() {
    return <div className="formula">{this.props.formula}</div>;
  }
}

class Display extends React.Component {
  render() {
    return <div id="display">{this.props.currentVal}</div>;
  }
}

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button id="clear" onClick={this.props.start} className="big-button AC">
          AC
        </button>
        <button id="backspace" onClick={this.props.backspace}>
          &lArr;
        </button>
        <button id="divide" onClick={this.props.operator} value="/">
          /
        </button>
        <button id="seven" onClick={this.props.numbers} value="7">
          7
        </button>
        <button id="eight" onClick={this.props.numbers} value="8">
          8
        </button>
        <button id="nine" onClick={this.props.numbers} value="9">
          9
        </button>
        <button id="multiply" onClick={this.props.operator} value="*">
          x
        </button>
        <button id="four" onClick={this.props.numbers} value="4">
          4
        </button>
        <button id="five" onClick={this.props.numbers} value="5">
          5
        </button>
        <button id="six" onClick={this.props.numbers} value="6">
          6
        </button>
        <button id="subtract" onClick={this.props.operator} value="-">
          -
        </button>
        <button id="one" onClick={this.props.numbers} value="1">
          1
        </button>
        <button id="two" onClick={this.props.numbers} value="2">
          2
        </button>
        <button id="three" onClick={this.props.numbers} value="3">
          3
        </button>
        <button id="add" onClick={this.props.operator} value="+">
          +
        </button>
        <button id="zero" onClick={this.props.numbers} value="0">
          0
        </button>
        <button id="decimal" onClick={this.props.decimal}>
          .
        </button>
        <button
          id="equals"
          onClick={this.props.evaluate}
          className="big-button"
        >
          =
        </button>
      </div>
    );
  }
}

export default App;
