(this.webpackJsonpjavascript_calculator=this.webpackJsonpjavascript_calculator||[]).push([[0],{10:function(_,e,a){"use strict";a.r(e);var t=a(0),r=a.n(t),s=a(7),l=a.n(s),n=a(8);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(n.a,null)),document.getElementById("root"))},15:function(_,e,a){},8:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(15),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),regOperator=/[*/+-]/,regOperatorAtEnd=/[*/+-]$/,regOperatorZero=/([^.0-9]0|^0)$/,regLastSubstring=/(-?\d+\.?\d*)$/,regEndsWithNegativeSign=/[*/+]-$/,App=function(_React$Component){Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(_){var e;return Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(e=_super.call(this,_)).state={currentVal:"0",formula:"",evaluated:!1,lastAnswer:"0"},e.start=e.start.bind(Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleBackspace=e.handleBackspace.bind(Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleNumbers=e.handleNumbers.bind(Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleOperator=e.handleOperator.bind(Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleDecimal=e.handleDecimal.bind(Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleEvaluate=e.handleEvaluate.bind(Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e}return Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"start",value:function(){this.setState({currentVal:"0",formula:"",evaluated:!1,lastAnswer:"0"})}},{key:"handleBackspace",value:function(){this.setState({currentVal:this.state.currentVal.length>0?this.state.currentVal.slice(0,this.state.currentVal.length-1):this.state.currentVal,formula:this.state.formula.length>0?this.state.formula.slice(0,this.state.formula.length-1):this.state.formula})}},{key:"handleNumbers",value:function(_){var e=this.state,a=e.currentVal,t=e.formula,r=e.evaluated,s=_.target.value;this.setState({evaluated:!1}),!0===r?this.setState({currentVal:s,formula:"0"!==s?s:0}):this.setState({currentVal:"0"===a||regOperator.test(a)?s:a+s,formula:"0"===a&&"0"===s?""===t?s:t:regOperatorZero.test(t)?t.slice(0,-1)+s:t+s})}},{key:"handleOperator",value:function(_){var e=_.target.value,a=this.state,t=a.formula,r=a.lastAnswer,s=a.evaluated;this.setState({currentVal:e,evaluated:!1}),s?this.setState({formula:r+e}):regOperatorAtEnd.test(t)?regEndsWithNegativeSign.test(t)?"\u2011"!==e&&this.setState({formula:r+e}):this.setState({formula:(regEndsWithNegativeSign.test(t+e)?t:r)+e}):this.setState({lastAnswer:t,formula:t+e})}},{key:"handleDecimal",value:function(){!0===this.state.evaluated?this.setState({currentVal:"0.",formula:"0.",evaluated:!1}):this.state.currentVal.includes(".")||(this.setState({evaluated:!1}),regOperatorAtEnd.test(this.state.formula)||"0"===this.state.currentVal&&""===this.state.formula?this.setState({currentVal:"0.",formula:this.state.formula+"0."}):this.setState({currentVal:this.state.formula.match(regLastSubstring)[0]+".",formula:this.state.formula+"."}))}},{key:"handleEvaluate",value:function handleEvaluate(){if(!this.state.evaluated){for(var expression=this.state.formula;regOperator.test(expression[expression.length-1]);)expression=expression.slice(0,-1);var result=Math.round(1e12*eval(expression))/1e12;this.setState({currentVal:result.toString(),formula:expression+"="+result,evaluated:!0,lastAnswer:result})}}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"wrapper"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",null,"JavaScript Calculator"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Formula,{formula:this.state.formula}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Display,{currentVal:this.state.currentVal}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttons,{start:this.start,backspace:this.handleBackspace,numbers:this.handleNumbers,operator:this.handleOperator,evaluate:this.handleEvaluate,decimal:this.handleDecimal})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer",null,"by"," ",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"https://codepen.io/sid2021",target:"_blank",rel:"noopener noreferrer"}," ","sid2021"," ")))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),Formula=function(_){Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(a,_);var e=Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(a);function a(){return Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,a),e.apply(this,arguments)}return Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(a,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"formula"},this.props.formula)}}]),a}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),Display=function(_){Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(a,_);var e=Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(a);function a(){return Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,a),e.apply(this,arguments)}return Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(a,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"display"},this.props.currentVal)}}]),a}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),Buttons=function(_){Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(a,_);var e=Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(a);function a(){return Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,a),e.apply(this,arguments)}return Object(C_Users_Kuba_Desktop_FreeCodeCamp_Front_End_Libraries_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(a,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"buttons"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"clear",onClick:this.props.start,className:"big-button AC"},"AC"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"backspace",onClick:this.props.backspace},"\u21d0"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"divide",onClick:this.props.operator,value:"/"},"/"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"seven",onClick:this.props.numbers,value:"7"},"7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"eight",onClick:this.props.numbers,value:"8"},"8"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"nine",onClick:this.props.numbers,value:"9"},"9"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"multiply",onClick:this.props.operator,value:"*"},"x"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"four",onClick:this.props.numbers,value:"4"},"4"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"five",onClick:this.props.numbers,value:"5"},"5"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"six",onClick:this.props.numbers,value:"6"},"6"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"subtract",onClick:this.props.operator,value:"-"},"-"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"one",onClick:this.props.numbers,value:"1"},"1"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"two",onClick:this.props.numbers,value:"2"},"2"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"three",onClick:this.props.numbers,value:"3"},"3"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"add",onClick:this.props.operator,value:"+"},"+"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"zero",onClick:this.props.numbers,value:"0"},"0"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"decimal",onClick:this.props.decimal},"."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"equals",onClick:this.props.evaluate,className:"big-button"},"="))}}]),a}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},9:function(_,e,a){_.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.617ac750.chunk.js.map