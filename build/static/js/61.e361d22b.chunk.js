webpackJsonp([61],{2311:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function i(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function a(n){var e=n.Todos;return{todos:e.todos,colors:e.colors}}Object.defineProperty(e,"__esModule",{value:!0});var l=t(0),c=t.n(l),d=t(65),p=t(44),s=t(229),f=t(495),h=t(3785),u=t(3503),b=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),x=f.a.addTodo,g=f.a.edittodo,m=f.a.deleteTodo,y=f.a.allCompleted,k=f.a.deleteCompleted,j=p.s.Header,w=p.s.Content,O=function(n){function e(n){o(this,e);var t=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return t.state={newTodo:""},t}return i(e,n),b(e,[{key:"render",value:function(){var n=this,e=this.props,t=e.todos,o=e.colors,r=e.addTodo,i=e.edittodo,a=e.deleteTodo,l=e.allCompleted,d=e.deleteCompleted;return c.a.createElement(p.s,{style:{background:"none"}},c.a.createElement(u.b,{className:"isomorphicTodoComponent"},c.a.createElement(j,{className:"isoTodoHeader"},c.a.createElement(s.d,{placeholder:"Type here for add a new todo",value:this.state.newTodo,className:"isoTodoInput",onChange:function(e){return n.setState({newTodo:e.target.value})},onPressEnter:function(e){n.setState({newTodo:""}),r(e.target.value)}})),c.a.createElement(w,{className:"isoTodoContentBody"},c.a.createElement(h.a,{todos:t,deleteTodo:a,edittodo:i,colors:o,allCompleted:l,deleteCompleted:d}))))}}]),e}(l.Component);e.default=Object(d.b)(a,{addTodo:x,edittodo:g,deleteTodo:m,deleteCompleted:k,allCompleted:y})(O)},3110:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var o=t(44),r=t(3111),i=Object(r.a)(o.j),a=o.j.Group;e.b=i},3111:function(n,e,t){"use strict";var o=t(57),r=t(79),i=(t.n(r),function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-checkbox {\n      top: inherit;\n    }\n\n    .ant-checkbox-checked .ant-checkbox-inner,\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ",";\n      border-color: ",";\n    }\n\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ",";\n    }\n\n    &:hover {\n      .ant-checkbox-inner {\n        border-color: ",";\n      }\n    }\n  }\n"],["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-checkbox {\n      top: inherit;\n    }\n\n    .ant-checkbox-checked .ant-checkbox-inner,\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ",";\n      border-color: ",";\n    }\n\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ",";\n    }\n\n    &:hover {\n      .ant-checkbox-inner {\n        border-color: ",";\n      }\n    }\n  }\n"])),a=function(n){return Object(o.b)(n)(i,Object(r.palette)("text",1),Object(r.palette)("primary",0),Object(r.palette)("primary",0),Object(r.palette)("primary",0),Object(r.palette)("primary",0))};e.a=a},3124:function(n,e,t){"use strict";t.d(e,"b",function(){return a}),t.d(e,"a",function(){return l});var o=t(44),r=t(3125),i=Object(r.a)(o.B),a=Object(r.a)(o.B.Group),l=Object(r.a)(o.B.Button);e.c=i},3125:function(n,e,t){"use strict";var o=t(57),r=t(79),i=(t.n(r),function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  &.ant-radio-wrapper,\n  .ant-radio-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-radio-inner {\n      &:after {\n        width: 6px;\n        height: 6px;\n        top: 4px;\n        left: 4px;\n        background-color: ",";\n        border-radius: 50%;\n      }\n    }\n\n    .ant-radio-checked .ant-radio-inner,\n    .ant-radio-indeterminate .ant-radio-inner {\n      border-color: ",";\n    }\n\n    .ant-radio:hover .ant-radio-inner,\n    .ant-radio-input:focus + .ant-radio-inner {\n      border-color: ",";\n    }\n\n    .ant-radio-disabled .ant-radio-inner:after {\n      background-color: #ccc;\n    }\n\n    &:hover {\n      .ant-radio-inner {\n        border-color: ",";\n      }\n    }\n\n    .ant-radio-checked {\n      .ant-radio-inner {\n        &:after {\n          transform: scale(1);\n        }\n      }\n    }\n  }\n"],["\n  &.ant-radio-wrapper,\n  .ant-radio-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-radio-inner {\n      &:after {\n        width: 6px;\n        height: 6px;\n        top: 4px;\n        left: 4px;\n        background-color: ",";\n        border-radius: 50%;\n      }\n    }\n\n    .ant-radio-checked .ant-radio-inner,\n    .ant-radio-indeterminate .ant-radio-inner {\n      border-color: ",";\n    }\n\n    .ant-radio:hover .ant-radio-inner,\n    .ant-radio-input:focus + .ant-radio-inner {\n      border-color: ",";\n    }\n\n    .ant-radio-disabled .ant-radio-inner:after {\n      background-color: #ccc;\n    }\n\n    &:hover {\n      .ant-radio-inner {\n        border-color: ",";\n      }\n    }\n\n    .ant-radio-checked {\n      .ant-radio-inner {\n        &:after {\n          transform: scale(1);\n        }\n      }\n    }\n  }\n"])),a=function(n){return Object(o.b)(n)(i,Object(r.palette)("text",1),Object(r.palette)("primary",0),Object(r.palette)("primary",0),Object(r.palette)("primary",0),Object(r.palette)("primary",0))};e.a=a},3503:function(n,e,t){"use strict";function o(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,"b",function(){return f}),t.d(e,"a",function(){return h});var r=t(57),i=t(79),a=(t.n(i),t(104)),l=t(92),c=o(["\n  padding: 50px 35px;\n\n  @media only screen and (max-width: 767px) {\n    padding: 30px 20px;\n  }\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    padding: 40px 20px;\n  }\n\n  .isoTodoHeader {\n    height: auto;\n    line-height: inherit;\n    padding: 0;\n    margin-bottom: 40px;\n    background: none;\n\n    @media only screen and (max-width: 767px) {\n      margin-bottom: 20px;\n    }\n\n    .isoTodoInput {\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      height: 50px;\n      padding: 0 15px;\n      margin: 0;\n      border: 1px solid ",";\n      outline: 0 !important;\n      overflow: hidden;\n      background-color: #ffffff;\n      ",";\n      ",";\n      ",";\n\n      &:focus {\n        border-color: ",";\n        ",";\n        outline: 0;\n      }\n\n      &:hover {\n        border-color: ",";\n      }\n\n      &::-webkit-input-placeholder {\n        color: ",";\n      }\n\n      &:-moz-placeholder {\n        color: ",";\n      }\n\n      &::-moz-placeholder {\n        color: ",";\n      }\n      &:-ms-input-placeholder {\n        color: ",";\n      }\n    }\n  }\n\n  .isoTodoContentBody {\n    width: 100%;\n  }\n"],["\n  padding: 50px 35px;\n\n  @media only screen and (max-width: 767px) {\n    padding: 30px 20px;\n  }\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    padding: 40px 20px;\n  }\n\n  .isoTodoHeader {\n    height: auto;\n    line-height: inherit;\n    padding: 0;\n    margin-bottom: 40px;\n    background: none;\n\n    @media only screen and (max-width: 767px) {\n      margin-bottom: 20px;\n    }\n\n    .isoTodoInput {\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      height: 50px;\n      padding: 0 15px;\n      margin: 0;\n      border: 1px solid ",";\n      outline: 0 !important;\n      overflow: hidden;\n      background-color: #ffffff;\n      ",";\n      ",";\n      ",";\n\n      &:focus {\n        border-color: ",";\n        ",";\n        outline: 0;\n      }\n\n      &:hover {\n        border-color: ",";\n      }\n\n      &::-webkit-input-placeholder {\n        color: ",";\n      }\n\n      &:-moz-placeholder {\n        color: ",";\n      }\n\n      &::-moz-placeholder {\n        color: ",";\n      }\n      &:-ms-input-placeholder {\n        color: ",";\n      }\n    }\n  }\n\n  .isoTodoContentBody {\n    width: 100%;\n  }\n"]),d=o(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  .isoTodoStatusTab {\n    margin-bottom: 20px;\n    display: flex;\n\n    .isoTodoStatus {\n      margin-left: ",";\n      margin-right: ",";\n\n      .ant-radio-button-wrapper {\n        margin: 0;\n        height: auto;\n        line-height: 1.5;\n        color: rgba(0, 0, 0, 0.65);\n        display: inline-block;\n        transition: all 0.3s ease;\n        cursor: pointer;\n        border: 0;\n        background: transparent;\n        padding: 0 15px;\n        ",";\n\n        &:last-child {\n          padding-right: ",";\n          padding-left: ",";\n        }\n\n        &:first-child {\n          padding-left: ",";\n          padding-right: ",";\n        }\n\n        &:not(:first-child)::before {\n          left: ",";\n          right: ",";\n        }\n\n        span {\n          font-size: 14px;\n          font-weight: 400;\n          color: ",";\n        }\n      }\n\n      .ant-radio-button-wrapper-checked {\n        span {\n          color: ",";\n        }\n      }\n    }\n  }\n\n  .isoTodoListWrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    .isoTodoList {\n      width: 100%;\n      padding: ",";\n      overflow: hidden;\n      margin: 0 0 15px;\n      background: #ffffff;\n      border: 1px solid ",";\n      display: flex;\n      align-items: flex-start;\n      text-align: ",";\n      position: relative;\n\n      .isoColorChooser {\n        width: 5px;\n        height: 100%;\n        padding: 0;\n        border: 0;\n        outline: 0;\n        flex-shrink: 0;\n        margin-right: ",";\n        margin-left: ",";\n        position: absolute;\n        top: 0;\n        left: ",";\n        right: ",";\n        ",";\n        ",";\n      }\n\n      .ant-checkbox-wrapper {\n        line-height: 1;\n        margin-right: ",";\n        margin-left: ",";\n\n        .ant-checkbox-inner {\n          width: 15px;\n          height: 15px;\n        }\n      }\n\n      .isoTodoContentWrapper {\n        width: 100%;\n        padding: ",";\n        position: relative;\n\n        .isoTodoDate {\n          font-size: 12px;\n          font-weight: 400;\n          color: ",";\n          line-height: inherit;\n          display: flex;\n          margin-bottom: 10px;\n          text-transform: capitalize;\n        }\n\n        .isoNoteContent {\n          width: 100%;\n          display: flex;\n\n          .isoNoteTextWrapper {\n            font-size: 14px;\n            font-weight: 400;\n            color: ",";\n            line-height: 24px;\n          }\n\n          .isoNoteEditWrapper {\n            width: 100%;\n            display: flex;\n\n            textarea {\n              font-size: 14px;\n              font-weight: 400;\n              color: ",";\n              line-height: 24px;\n              height: 210px;\n              padding: 10px 15px;\n              margin: 0;\n              border: 0;\n              outline: 0 !important;\n              background-color: #ffffff;\n              ",";\n              ",";\n              box-sizing: content-box;\n              resize: vertical;\n              ",";\n\n              &:focus {\n                border: 1px solid ",";\n                outline: 0;\n                ",";\n              }\n\n              &:hover {\n                border-color: ",";\n              }\n\n              &::-webkit-input-placeholder {\n                color: ",";\n              }\n\n              &:-moz-placeholder {\n                color: ",";\n              }\n\n              &::-moz-placeholder {\n                color: ",";\n              }\n              &:-ms-input-placeholder {\n                color: ",";\n              }\n            }\n          }\n        }\n      }\n\n      .isoTodoDelete,\n      .isoNoteEditIcon {\n        font-size: 16px;\n        color: ",";\n        width: 30px;\n        height: 30px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        background-color: #ffffff;\n        outline: 0;\n        padding: 0;\n        border: 1px solid ",";\n        margin-left: ",";\n        margin-right: ",";\n        cursor: pointer;\n        ",";\n        ",";\n\n        &:first-child {\n          margin-left: ",";\n          margin-right: ",";\n        }\n\n        &:hover {\n          color: ",";\n          background-color: ",";\n        }\n      }\n\n      .isoNoteEditIcon {\n        position: absolute;\n        top: 0;\n        right: ",";\n        left: ",";\n      }\n    }\n\n    .isoNoTodoFound {\n      font-size: 21px;\n      font-weight: 300;\n      padding: 0;\n      text-transform: uppercase;\n      color: ",";\n      width: 100%;\n      text-align: center;\n      margin: 50px 0;\n    }\n  }\n\n  .isoTodoFooter {\n    margin-top: 5px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n\n    .isoTodoCheckAll {\n      display: -webkit-inline-flex;\n      display: -ms-inline-flex;\n      display: inline-flex;\n      align-items: center;\n\n      .ant-checkbox {\n        .ant-checkbox-inner {\n          width: 15px;\n          height: 15px;\n        }\n\n        &.ant-checkbox-disabled {\n          .ant-checkbox-inner {\n            border-color: ",";\n\n            &:after {\n              border-color: ",";\n            }\n          }\n        }\n      }\n\n      span {\n        font-size: 13px;\n        line-height: 1;\n        color: ",";\n      }\n    }\n\n    .isoDeleteAll {\n      background-color: ",";\n      border: 0;\n      height: 30px;\n      padding: 0 15px;\n      ",";\n      ",";\n\n      span {\n        font-size: 12px;\n        font-weight: 400;\n        padding: 0;\n        text-transform: uppercase;\n        color: #ffffff;\n      }\n\n      &:hover {\n        background-color: ",";\n      }\n    }\n  }\n"],["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  .isoTodoStatusTab {\n    margin-bottom: 20px;\n    display: flex;\n\n    .isoTodoStatus {\n      margin-left: ",";\n      margin-right: ",";\n\n      .ant-radio-button-wrapper {\n        margin: 0;\n        height: auto;\n        line-height: 1.5;\n        color: rgba(0, 0, 0, 0.65);\n        display: inline-block;\n        transition: all 0.3s ease;\n        cursor: pointer;\n        border: 0;\n        background: transparent;\n        padding: 0 15px;\n        ",";\n\n        &:last-child {\n          padding-right: ",";\n          padding-left: ",";\n        }\n\n        &:first-child {\n          padding-left: ",";\n          padding-right: ",";\n        }\n\n        &:not(:first-child)::before {\n          left: ",";\n          right: ",";\n        }\n\n        span {\n          font-size: 14px;\n          font-weight: 400;\n          color: ",";\n        }\n      }\n\n      .ant-radio-button-wrapper-checked {\n        span {\n          color: ",";\n        }\n      }\n    }\n  }\n\n  .isoTodoListWrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    .isoTodoList {\n      width: 100%;\n      padding: ",";\n      overflow: hidden;\n      margin: 0 0 15px;\n      background: #ffffff;\n      border: 1px solid ",";\n      display: flex;\n      align-items: flex-start;\n      text-align: ",";\n      position: relative;\n\n      .isoColorChooser {\n        width: 5px;\n        height: 100%;\n        padding: 0;\n        border: 0;\n        outline: 0;\n        flex-shrink: 0;\n        margin-right: ",";\n        margin-left: ",";\n        position: absolute;\n        top: 0;\n        left: ",";\n        right: ",";\n        ",";\n        ",";\n      }\n\n      .ant-checkbox-wrapper {\n        line-height: 1;\n        margin-right: ",";\n        margin-left: ",";\n\n        .ant-checkbox-inner {\n          width: 15px;\n          height: 15px;\n        }\n      }\n\n      .isoTodoContentWrapper {\n        width: 100%;\n        padding: ",";\n        position: relative;\n\n        .isoTodoDate {\n          font-size: 12px;\n          font-weight: 400;\n          color: ",";\n          line-height: inherit;\n          display: flex;\n          margin-bottom: 10px;\n          text-transform: capitalize;\n        }\n\n        .isoNoteContent {\n          width: 100%;\n          display: flex;\n\n          .isoNoteTextWrapper {\n            font-size: 14px;\n            font-weight: 400;\n            color: ",";\n            line-height: 24px;\n          }\n\n          .isoNoteEditWrapper {\n            width: 100%;\n            display: flex;\n\n            textarea {\n              font-size: 14px;\n              font-weight: 400;\n              color: ",";\n              line-height: 24px;\n              height: 210px;\n              padding: 10px 15px;\n              margin: 0;\n              border: 0;\n              outline: 0 !important;\n              background-color: #ffffff;\n              ",";\n              ",";\n              box-sizing: content-box;\n              resize: vertical;\n              ",";\n\n              &:focus {\n                border: 1px solid ",";\n                outline: 0;\n                ",";\n              }\n\n              &:hover {\n                border-color: ",";\n              }\n\n              &::-webkit-input-placeholder {\n                color: ",";\n              }\n\n              &:-moz-placeholder {\n                color: ",";\n              }\n\n              &::-moz-placeholder {\n                color: ",";\n              }\n              &:-ms-input-placeholder {\n                color: ",";\n              }\n            }\n          }\n        }\n      }\n\n      .isoTodoDelete,\n      .isoNoteEditIcon {\n        font-size: 16px;\n        color: ",";\n        width: 30px;\n        height: 30px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        background-color: #ffffff;\n        outline: 0;\n        padding: 0;\n        border: 1px solid ",";\n        margin-left: ",";\n        margin-right: ",";\n        cursor: pointer;\n        ",";\n        ",";\n\n        &:first-child {\n          margin-left: ",";\n          margin-right: ",";\n        }\n\n        &:hover {\n          color: ",";\n          background-color: ",";\n        }\n      }\n\n      .isoNoteEditIcon {\n        position: absolute;\n        top: 0;\n        right: ",";\n        left: ",";\n      }\n    }\n\n    .isoNoTodoFound {\n      font-size: 21px;\n      font-weight: 300;\n      padding: 0;\n      text-transform: uppercase;\n      color: ",";\n      width: 100%;\n      text-align: center;\n      margin: 50px 0;\n    }\n  }\n\n  .isoTodoFooter {\n    margin-top: 5px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n\n    .isoTodoCheckAll {\n      display: -webkit-inline-flex;\n      display: -ms-inline-flex;\n      display: inline-flex;\n      align-items: center;\n\n      .ant-checkbox {\n        .ant-checkbox-inner {\n          width: 15px;\n          height: 15px;\n        }\n\n        &.ant-checkbox-disabled {\n          .ant-checkbox-inner {\n            border-color: ",";\n\n            &:after {\n              border-color: ",";\n            }\n          }\n        }\n      }\n\n      span {\n        font-size: 13px;\n        line-height: 1;\n        color: ",";\n      }\n    }\n\n    .isoDeleteAll {\n      background-color: ",";\n      border: 0;\n      height: 30px;\n      padding: 0 15px;\n      ",";\n      ",";\n\n      span {\n        font-size: 12px;\n        font-weight: 400;\n        padding: 0;\n        text-transform: uppercase;\n        color: #ffffff;\n      }\n\n      &:hover {\n        background-color: ",";\n      }\n    }\n  }\n"]),p=r.b.div(c,Object(i.palette)("text",2),Object(i.palette)("border",0),Object(a.b)("none"),Object(a.a)("3px"),Object(a.c)(),Object(i.palette)("primary",0),Object(a.b)("0 0 0 2px rgba(68, 130, 255, 0.2)"),Object(i.palette)("primary",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0)),s=r.b.div(d,function(n){return"rtl"===n["data-rtl"]?"inherit":"auto"},function(n){return"rtl"===n["data-rtl"]?"auto":"inherit"},Object(a.b)("none"),function(n){return"rtl"===n["data-rtl"]?"15px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"15px"},function(n){return"rtl"===n["data-rtl"]?"inherit":"-1px"},function(n){return"rtl"===n["data-rtl"]?"-1px":"inherit"},Object(i.palette)("text",3),Object(i.palette)("primary",0),function(n){return"rtl"===n["data-rtl"]?"20px 0 20px 15px":"20px 15px 20px 0"},Object(i.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"right":"left"},function(n){return"rtl"===n["data-rtl"]?"inherit":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"inherit"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(a.a)(0),Object(a.c)(.25),function(n){return"rtl"===n["data-rtl"]?"25px":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"25px"},function(n){return"rtl"===n["data-rtl"]?"0 0 0 30px":"0 30px 0 0"},Object(i.palette)("grayscale",0),Object(i.palette)("text",4),Object(i.palette)("text",4),Object(a.b)("none"),Object(a.a)("3px"),Object(a.c)(),Object(i.palette)("primary",0),Object(a.b)("0 0 0 2px rgba(68, 130, 255, 0.2)"),Object(i.palette)("primary",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("secondary",0),Object(i.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"-1px"},function(n){return"rtl"===n["data-rtl"]?"-1px":"inherit"},Object(a.c)(),Object(a.a)(),function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(i.palette)("primary",0),Object(i.palette)("grayscale",7),function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(i.palette)("text",3),Object(i.palette)("grayscale",2),Object(i.palette)("grayscale",2),Object(i.palette)("text",3),Object(i.palette)("primary",0),Object(a.a)("3px"),Object(a.c)(),Object(i.palette)("primary",1)),f=Object(l.a)(p),h=Object(l.a)(s)},3785:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function i(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function a(n,e){var t="All"===e?n:n.filter(function(n){return n.completed===("Completed"===e)}),o=0;return t.forEach(function(n){n.completed&&(o+=1)}),{selectedTodos:t,completed:o}}var l=t(0),c=t.n(l),d=t(481),p=t(3110),s=t(3124),f=t(871),h=t(489),u=t(3503),b=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),x=function(n){function e(n){o(this,e);var t=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return t.singleTodo=t.singleTodo.bind(t),t.onChange=t.onChange.bind(t),t.state={search:"All"},t}return i(e,n),b(e,[{key:"singleTodo",value:function(n){var e=this,t=this.props,o=t.deleteTodo,r=t.colors,i=function(){return o(n.id)},a=function(t,o){n[t]=o,e.props.edittodo(n)};return c.a.createElement("div",{className:"isoTodoList",key:n.id},c.a.createElement(h.a,{colors:r,changeColor:function(n){return a("color",n)},seectedColor:n.color}),c.a.createElement(p.b,{className:"isoTodoCheck",checked:n.completed,onChange:function(e){return a("completed",!n.completed)}}),c.a.createElement("div",{className:"isoTodoContentWrapper"},c.a.createElement("span",{className:"isoTodoDate"},Object(f.d)(n.createTime)),c.a.createElement(h.b,{value:n.todo,itemKey:"todo",onChange:a})),c.a.createElement(d.b,{className:"isoTodoDelete",icon:"close",type:"button",onClick:i}))}},{key:"onChange",value:function(n){this.setState({search:n.target.value})}},{key:"render",value:function(){var n=this,e=this.state.search,t=a(this.props.todos,e),o=t.selectedTodos,r=t.completed;return c.a.createElement(u.a,{className:"isoTodoContent"},c.a.createElement("div",{className:"isoTodoStatusTab"},c.a.createElement(s.b,{value:this.state.search,onChange:this.onChange,className:"isoTodoStatus"},c.a.createElement(s.a,{value:"All"},"All"),c.a.createElement(s.a,{value:"Uncompleted"},"Uncompleted"),c.a.createElement(s.a,{value:"Completed"},"Completed"))),c.a.createElement("div",{className:"isoTodoListWrapper"},o.length>0?o.map(function(e){return n.singleTodo(e)}):c.a.createElement("h3",{className:"isoNoTodoFound"},"No todo found")),c.a.createElement("div",{className:"isoTodoFooter"},c.a.createElement(p.b,{className:"isoTodoCheckAll",checked:r===o.length,disabled:r===o.length,onChange:function(e){Object(h.c)("success","All Todos are Completed!!!",""),n.props.allCompleted()}},"Mark all as completed"),o.length>0&&r===o.length?c.a.createElement(d.b,{type:"button",className:"isoDeleteAll",onClick:function(e){Object(h.c)("success","All Completed Todos are Deleted",""),n.props.deleteCompleted()}},"Delete Completed ("+r+")"):""))}}]),e}(l.Component);e.a=x}});