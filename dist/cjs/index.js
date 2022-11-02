"use strict";var e=require("react"),r=require("@chakra-ui/react"),t=require("@above-lending/prelude"),n=function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},n.apply(this,arguments)};function o(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}function l(t){var l=t.label,a=o(t,["label"]);return l?e.createElement(r.Text,n({"data-testid":"secondary-label",fontSize:"xs",color:"gray.500",fontWeight:"semibold"},a)," ","- ",l):e.createElement(e.Fragment,null)}function a(t){var n=t.error,o=t.helperText;return n?e.createElement(r.FormErrorMessage,{color:"red.500",fontSize:"xs",lineHeight:"small"},n):e.createElement(r.Box,{"data-testid":"form-field-error-placeholder",minHeight:"18px"},e.createElement(r.FormHelperText,{fontSize:"xs",lineHeight:"small"},o))}function i(t){var i=t.children,c=t.error,u=t.helperText,p=t.label,d=t.name,s=t.secondaryLabel,m=o(t,["children","error","helperText","label","name","secondaryLabel"]),f=Boolean(c);return e.createElement(r.FormControl,n({as:"fieldset",isInvalid:f},m),e.createElement(r.Flex,null,e.createElement(r.FormLabel,{color:"inherit",fontSize:"xs",fontWeight:"medium",htmlFor:d,lineHeight:"small",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},p),e.createElement(l,{label:s})),i,e.createElement(a,{error:c,helperText:u}))}function c(t){var n=t.ariaLabel,o=t.fill,l=t.onClick;return"password"!==t.type?e.createElement(e.Fragment,null):e.createElement(r.InputRightElement,{height:"100%",mr:"2"},e.createElement(r.Box,{"aria-label":n,as:"button",type:"button",onClick:l,pr:"1px",pt:"1px"},e.createElement(r.Box,{as:"svg","data-testid":"password-toggle-svg",fill:o,viewBox:"0 0 24 24",width:"5"},e.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"}))))}var u={currency:"text",number:"text",phone:"text"},p={currency:/[^0-9.$,]+/g,number:/[^0-9.]+/g,phone:/[^0-9.\-()+ ]+/g};function d(e,r){var t;return e?"text":null!==(t=u[r])&&void 0!==t?t:r}function s(e){return!e}exports.ALFieldset=i,exports.ALFieldsetBelowControl=a,exports.ALFieldsetSecondaryLabel=l,exports.ALInputGroup=function(l){var a,u=l.error,m=l.label,f=l.name,g=l.type,h=void 0===g?"text":g,b=l.inputProps,y=void 0===b?{}:b,x=o(l,["error","label","name","type","inputProps"]),v=function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,l=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=l.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return a}(e.useState(!1),2),C=v[0],E=v[1],w=y.onChange?t.compose(y.onChange,function(e){return function(r){var t=p[e];return t?n(n({},r),{target:n(n({},r.target),{value:r.target.value.replace(t,"")})}):r}}(h)):t.noop,F=function(e){return e?{inputBackgroundColor:"red.200",inputBorderColor:"red.500",toggleIconFill:"red.500"}:{inputBackgroundColor:"gray.200",inputBorderColor:"gray.400",toggleIconFill:"gray.500"}}(u),O=F.inputBackgroundColor,S=F.inputBorderColor,B=F.toggleIconFill;return e.createElement(i,n({error:u,label:m,name:f},x),e.createElement(r.InputGroup,null,e.createElement(r.Input,n({autoComplete:(a=y.autoComplete,null!=a?a:"on"),backgroundColor:O,border:"1px solid",borderColor:S,"data-testid":"".concat(f,"-input"),fontSize:"md",id:f,lineHeight:"6",name:f,onChange:w,outline:"none",px:"2",py:"1",type:d(C,h),width:"full"},y)),e.createElement(c,{ariaLabel:"".concat(C?"Hide":"Show"," Password"),fill:B,onClick:function(){return E(s)},type:h})))};
//# sourceMappingURL=index.js.map
