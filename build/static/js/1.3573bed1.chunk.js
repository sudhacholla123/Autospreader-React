webpackJsonp([1],{3110:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var o=t(44),r=t(3111),a=Object(r.a)(o.j),i=o.j.Group;e.b=a},3111:function(n,e,t){"use strict";var o=t(57),r=t(79),a=(t.n(r),function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-checkbox {\n      top: inherit;\n    }\n\n    .ant-checkbox-checked .ant-checkbox-inner,\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ",";\n      border-color: ",";\n    }\n\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ",";\n    }\n\n    &:hover {\n      .ant-checkbox-inner {\n        border-color: ",";\n      }\n    }\n  }\n"],["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-checkbox {\n      top: inherit;\n    }\n\n    .ant-checkbox-checked .ant-checkbox-inner,\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ",";\n      border-color: ",";\n    }\n\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ",";\n    }\n\n    &:hover {\n      .ant-checkbox-inner {\n        border-color: ",";\n      }\n    }\n  }\n"])),i=function(n){return Object(o.b)(n)(a,Object(r.palette)("text",1),Object(r.palette)("primary",0),Object(r.palette)("primary",0),Object(r.palette)("primary",0),Object(r.palette)("primary",0))};e.a=i},3455:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function a(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var i=t(0),c=t.n(i),l=t(481),s=t(229),p=t(868),d=t(489),u=t(875),g=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),h=function(n){function e(){var n,t,a,i;o(this,e);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return t=a=r(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(l))),a.state={visible:!1,email:"demo@gmail.com",password:"demodemo",confirmLoading:!1},a.showModal=function(){a.setState({visible:!0})},a.handleCancel=function(n){a.setState({visible:!1})},a.handleLogin=function(){var n=a.state,e=n.email,t=n.password;if(!e||!t)return void Object(d.c)("error","Please fill in email. and password");a.setState({confirmLoading:!0});var o=a,r=!1;u.a.login(u.a.EMAIL,{email:e,password:t}).catch(function(n){var e=n&&n.message?n.message:"Sorry Some error occurs";Object(d.c)("error",e),o.setState({confirmLoading:!1}),r=!0}).then(function(n){if(!r)if(!n||n.message){var e=n&&n.message?n.message:"Sorry Some error occurs";Object(d.c)("error",e),o.setState({confirmLoading:!1})}else o.setState({visible:!1,confirmLoading:!1}),a.props.login()})},a.resetPassword=function(){var n=a.state.email;if(!n)return void Object(d.c)("error","Please fill in email.");u.a.resetPassword(n).then(function(){return Object(d.c)("success","Password reset email sent to "+n+".")}).catch(function(n){return Object(d.c)("error","Email address not found.")})},i=t,r(a,i)}return a(e,n),g(e,[{key:"render",value:function(){var n=this;return c.a.createElement("div",null,c.a.createElement(l.b,{type:"primary",onClick:this.showModal,className:"btnFirebase"},this.props.signup?"Sign up with Firebase":"Sign in with Firebase"),c.a.createElement(p.a,{title:"Sign in with Firebase",visible:this.state.visible,confirmLoading:this.state.confirmLoading,onCancel:this.handleCancel,onOk:this.handleLogin,className:"isoFirebaseLoginModal",cancelText:"Cancel",okText:"Login"},c.a.createElement("form",null,c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement("label",null,"Email"),c.a.createElement(s.d,{ref:function(e){return n.email=e},size:"large",placeholder:"Email",value:this.state.email,onChange:function(e){n.setState({email:e.target.value})}})),c.a.createElement("div",{className:"isoInputWrapper",style:{marginBottom:10}},c.a.createElement("label",null,"Password"),c.a.createElement(s.d,{type:"password",size:"large",placeholder:"Password",value:this.state.password,onChange:function(e){n.setState({password:e.target.value})}})),c.a.createElement("span",{className:"isoResetPass",onClick:this.resetPassword},"Reset Password"))))}}]),e}(i.Component);e.a=h},4272:function(n,e,t){"use strict";var o=t(57),r=t(79),a=(t.n(r),t(4273)),i=t.n(a),c=t(92),l=function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(",") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: ",";\n    right: ",";\n  }\n\n  .isoLoginContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoLoginContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 50px;\n      justify-content: center;\n      flex-shrink: 0;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ",";\n      }\n    }\n\n    .isoSignInForm {\n      width: 100%;\n      display: flex;\n      flex-shrink: 0;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 15px;\n\n        &:last-of-type {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ",";\n          }\n\n          &:-moz-placeholder {\n            color: ",";\n          }\n\n          &::-moz-placeholder {\n            color: ",";\n          }\n          &:-ms-input-placeholder {\n            color: ",";\n          }\n        }\n      }\n\n      .isoHelperText {\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 1.2;\n        color: ",";\n        padding-left: ",";\n        padding-right: ",";\n        margin: 15px 0;\n        position: relative;\n        display: flex;\n        align-items: center;\n\n        &:before {\n          content: '*';\n          color: ",";\n          padding-right: 3px;\n          font-size: 14px;\n          line-height: 1;\n          position: absolute;\n          top: 2px;\n          left: ",";\n          right: ",";\n        }\n      }\n\n      .isoHelperWrapper {\n        margin-top: 35px;\n        flex-direction: column;\n      }\n\n      .isoOtherLogin {\n        padding-top: 40px;\n        margin-top: 35px;\n        border-top: 1px dashed ",";\n\n        > a {\n          display: flex;\n          margin-bottom: 10px;\n\n          &:last-child {\n            margin-bottom: 0;\n          }\n        }\n\n        button {\n          width: 100%;\n          height: 42px;\n          border: 0;\n          font-weight: 500;\n\n          &.btnFacebook {\n            background-color: #3b5998;\n\n            &:hover {\n              background-color: darken(#3b5998, 5%);\n            }\n          }\n\n          &.btnGooglePlus {\n            background-color: #dd4b39;\n            margin-top: 15px;\n\n            &:hover {\n              background-color: darken(#dd4b39, 5%);\n            }\n          }\n\n          &.btnAuthZero {\n            background-color: #e14615;\n            margin-top: 15px;\n\n            &:hover {\n              background-color: darken(#e14615, 5%);\n            }\n          }\n\n          &.btnFirebase {\n            background-color: ",";\n            margin-top: 15px;\n\n            &:hover {\n              background-color: ",";\n            }\n          }\n        }\n      }\n\n      .isoForgotPass {\n        font-size: 12px;\n        color: ",";\n        margin-bottom: 10px;\n        text-decoration: none;\n\n        &:hover {\n          color: ",";\n        }\n      }\n\n      button {\n        font-weight: 500;\n      }\n    }\n  }\n"],["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(",") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: ",";\n    right: ",";\n  }\n\n  .isoLoginContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoLoginContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 50px;\n      justify-content: center;\n      flex-shrink: 0;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ",";\n      }\n    }\n\n    .isoSignInForm {\n      width: 100%;\n      display: flex;\n      flex-shrink: 0;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 15px;\n\n        &:last-of-type {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ",";\n          }\n\n          &:-moz-placeholder {\n            color: ",";\n          }\n\n          &::-moz-placeholder {\n            color: ",";\n          }\n          &:-ms-input-placeholder {\n            color: ",";\n          }\n        }\n      }\n\n      .isoHelperText {\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 1.2;\n        color: ",";\n        padding-left: ",";\n        padding-right: ",";\n        margin: 15px 0;\n        position: relative;\n        display: flex;\n        align-items: center;\n\n        &:before {\n          content: '*';\n          color: ",";\n          padding-right: 3px;\n          font-size: 14px;\n          line-height: 1;\n          position: absolute;\n          top: 2px;\n          left: ",";\n          right: ",";\n        }\n      }\n\n      .isoHelperWrapper {\n        margin-top: 35px;\n        flex-direction: column;\n      }\n\n      .isoOtherLogin {\n        padding-top: 40px;\n        margin-top: 35px;\n        border-top: 1px dashed ",";\n\n        > a {\n          display: flex;\n          margin-bottom: 10px;\n\n          &:last-child {\n            margin-bottom: 0;\n          }\n        }\n\n        button {\n          width: 100%;\n          height: 42px;\n          border: 0;\n          font-weight: 500;\n\n          &.btnFacebook {\n            background-color: #3b5998;\n\n            &:hover {\n              background-color: darken(#3b5998, 5%);\n            }\n          }\n\n          &.btnGooglePlus {\n            background-color: #dd4b39;\n            margin-top: 15px;\n\n            &:hover {\n              background-color: darken(#dd4b39, 5%);\n            }\n          }\n\n          &.btnAuthZero {\n            background-color: #e14615;\n            margin-top: 15px;\n\n            &:hover {\n              background-color: darken(#e14615, 5%);\n            }\n          }\n\n          &.btnFirebase {\n            background-color: ",";\n            margin-top: 15px;\n\n            &:hover {\n              background-color: ",";\n            }\n          }\n        }\n      }\n\n      .isoForgotPass {\n        font-size: 12px;\n        color: ",";\n        margin-bottom: 10px;\n        text-decoration: none;\n\n        &:hover {\n          color: ",";\n        }\n      }\n\n      button {\n        font-weight: 500;\n      }\n    }\n  }\n"]),s=o.b.div(l,i.a,function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(r.palette)("secondary",2),Object(r.palette)("grayscale",0),Object(r.palette)("grayscale",0),Object(r.palette)("grayscale",0),Object(r.palette)("grayscale",0),Object(r.palette)("grayscale",1),function(n){return"rtl"===n["data-rtl"]?"inherit":"13px"},function(n){return"rtl"===n["data-rtl"]?"13px":"inherit"},Object(r.palette)("error",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(r.palette)("grayscale",2),Object(r.palette)("color",5),Object(r.palette)("color",6),Object(r.palette)("text",3),Object(r.palette)("primary",0));e.a=Object(c.a)(s)},4273:function(n,e,t){n.exports=t.p+"static/media/sign.adf5846b.jpg"},921:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function a(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),c=t.n(i),l=t(185),s=t(65),p=t(229),d=t(3110),u=t(481),g=t(186),h=t(233),b=t(898),f=t(875),m=t(3455),x=t(103),v=t(4272),y=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),k=g.a.login,w=h.a.clearMenu,O=function(n){function e(){var n,t,a,i;o(this,e);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return t=a=r(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(l))),a.state={redirectToReferrer:!1},a.handleLogin=function(){var n=a.props,e=n.login,t=n.clearMenu;e(),t(),a.props.history.push("/dashboard")},i=t,r(a,i)}return a(e,n),y(e,[{key:"componentWillReceiveProps",value:function(n){this.props.isLoggedIn!==n.isLoggedIn&&!0===n.isLoggedIn&&this.setState({redirectToReferrer:!0})}},{key:"render",value:function(){var n=this,e={pathname:"/dashboard"};return this.state.redirectToReferrer?c.a.createElement(l.b,{to:e}):c.a.createElement(v.a,{className:"isoSignInPage"},c.a.createElement("div",{className:"isoLoginContentWrapper"},c.a.createElement("div",{className:"isoLoginContent"},c.a.createElement("div",{className:"isoLogoWrapper"},c.a.createElement(l.a,{to:"/dashboard"},c.a.createElement(x.a,{id:"page.signInTitle"}))),c.a.createElement("div",{className:"isoSignInForm"},c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(p.d,{size:"large",placeholder:"Username"})),c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(p.d,{size:"large",type:"password",placeholder:"Password"})),c.a.createElement("div",{className:"isoInputWrapper isoLeftRightComponent"},c.a.createElement(d.b,null,c.a.createElement(x.a,{id:"page.signInRememberMe"})),c.a.createElement(u.b,{type:"primary",onClick:this.handleLogin},c.a.createElement(x.a,{id:"page.signInButton"}))),c.a.createElement("p",{className:"isoHelperText"},c.a.createElement(x.a,{id:"page.signInPreview"})),c.a.createElement("div",{className:"isoInputWrapper isoOtherLogin"},c.a.createElement(u.b,{onClick:this.handleLogin,type:"primary btnFacebook"},c.a.createElement(x.a,{id:"page.signInFacebook"})),c.a.createElement(u.b,{onClick:this.handleLogin,type:"primary btnGooglePlus"},c.a.createElement(x.a,{id:"page.signInGooglePlus"})),b.a.isValid&&c.a.createElement(u.b,{onClick:function(){b.a.login(n.handleLogin)},type:"primary btnAuthZero"},c.a.createElement(x.a,{id:"page.signInAuth0"})),f.a.isValid&&c.a.createElement(m.a,{login:this.handleLogin})),c.a.createElement("div",{className:"isoCenterComponent isoHelperWrapper"},c.a.createElement(l.a,{to:"/forgotpassword",className:"isoForgotPass"},c.a.createElement(x.a,{id:"page.signInForgotPass"})),c.a.createElement(l.a,{to:"/signup"},c.a.createElement(x.a,{id:"page.signInCreateAccount"})))))))}}]),e}(i.Component);e.default=Object(s.b)(function(n){return{isLoggedIn:null!==n.Auth.idToken}},{login:k,clearMenu:w})(O)}});