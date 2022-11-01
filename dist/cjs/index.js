"use strict";var e=require("react"),r=require("@chakra-ui/react"),t=require("@above-lending/prelude"),n=function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},n.apply(this,arguments)};function o(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}function l(t){var l=t.message,a=o(t,["message"]);return l?e.createElement(r.Box,null,e.createElement(r.Tooltip,n({label:l,padding:"3",hasArrow:!0,bg:"white",maxWidth:"300px",fontSize:"sm",boxShadow:"0px 1px 9.5px #ccc",placement:"top"},a),e.createElement(r.Image,{alt:"tooltip",marginLeft:"2",src:"/lander/images/information-icon.svg",width:"16px"}))):e.createElement(e.Fragment,null)}function a(t){var l=t.label,a=o(t,["label"]);return l?e.createElement(r.Text,n({"data-testid":"secondary-label",fontSize:"xs",color:"gray.500",fontWeight:"semibold"},a)," ","- ",l):e.createElement(e.Fragment,null)}function i(t){var n=t.error,o=t.helperMessage;return n?e.createElement(r.FormErrorMessage,{color:"red.500",fontSize:{base:"xs",lg:"xxs"}},n):o?e.createElement(r.Box,{"data-testid":"form-field-error-placeholder",minHeight:"4"},e.createElement(r.Text,{fontSize:"xs"},o)):e.createElement(e.Fragment,null)}function c(t){var c=t.children,p=t.error,u=t.helperMessage,s=t.label,m=t.name,d=t.secondaryLabel,g=t.tooltipMessage,f=o(t,["children","error","helperMessage","label","name","secondaryLabel","tooltipMessage"]),h=Boolean(p);return e.createElement(r.FormControl,n({as:"fieldset",isInvalid:h},f),e.createElement(r.Flex,null,e.createElement(r.FormLabel,{color:"inherit",fontSize:"xs",fontWeight:"medium",htmlFor:m,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},s),e.createElement(a,{label:d}),e.createElement(l,{message:g,marginLeft:"3"})),c,e.createElement(i,{error:p,helperMessage:u}))}function p(t){var n=t.ariaLabel,o=t.fill,l=t.onClick;return"password"!==t.type?e.createElement(e.Fragment,null):e.createElement(r.InputRightElement,{height:"100%",mr:"2"},e.createElement(r.Box,{"aria-label":n,as:"button",type:"button",onClick:l,pr:"1px",pt:"1px"},e.createElement(r.Box,{as:"svg","data-testid":"password-toggle-svg",fill:o,viewBox:"0 0 24 24",width:"5"},e.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"}))))}var u={currency:"text",number:"text",phone:"text"},s={currency:/[^0-9.$,]+/g,number:/[^0-9.]+/g,phone:/[^0-9.\-()+ ]+/g};function m(e,r){var t;return e?"text":null!==(t=u[r])&&void 0!==t?t:r}function d(e){return!e}exports.ALInput=function(l){var a,i=l.autocomplete,u=l.label,g=l.name,f=l.type,h=void 0===f?"text":f,b=l.onChange,x=void 0===b?t.noop:b,y=l.wrapperProps,v=void 0===y?{}:y,C=o(l,["autocomplete","label","name","type","onChange","wrapperProps"]),E=function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,l=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=l.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return a}(e.useState(!1),2),w=E[0],F=E[1],S=t.compose(x,function(e){return function(r){var t=s[e];return t?n(n({},r),{target:n(n({},r.target),{value:r.target.value.replace(t,"")})}):r}}(h)),O=v.error?{inputBackgroundColor:"red.200",inputBorderColor:"red.500",toggleIconFill:"red.500"}:{inputBackgroundColor:"gray.200",inputBorderColor:"gray.400",toggleIconFill:"gray.500"},B=O.inputBackgroundColor,M=O.inputBorderColor,I=O.toggleIconFill;return e.createElement(c,n({label:u,name:g},v),e.createElement(r.InputGroup,null,e.createElement(r.Input,n({autoComplete:(a=i,null!=a?a:"on"),backgroundColor:B,border:"1px solid",borderColor:M,"data-testid":"".concat(g,"-input"),fontSize:"md",id:g,lineHeight:"7",name:g,onChange:S,outline:"none",px:"2",type:m(w,h),width:"full"},C)),e.createElement(p,{ariaLabel:"".concat(w?"Hide":"Show"," Password"),fill:I,onClick:function(){return F(d)},type:h})))},exports.FormFieldHelperMessage=i,exports.FormFieldWrapper=c,exports.SecondaryLabel=a,exports.Tooltip=l;
//# sourceMappingURL=index.js.map
