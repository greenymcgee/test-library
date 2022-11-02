import e,{useState as r}from"react";import{Text as t,Flex as n,FormErrorMessage as l,Box as o,FormHelperText as a,FormControl as i,FormLabel as c,InputRightElement as u,InputGroup as p,Input as m}from"@chakra-ui/react";import{RiErrorWarningFill as d}from"react-icons/ri";import{compose as f,noop as g}from"@above-lending/prelude";var s=function(){return s=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e},s.apply(this,arguments)};function h(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)r.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t}function b(r){var n=r.label,l=h(r,["label"]);return n?e.createElement(t,s({"data-testid":"secondary-label",fontSize:"xs",color:"gray.500",fontWeight:"semibold"},l)," ","- ",n):e.createElement(e.Fragment,null)}function y(r){var t=r.error,i=r.helperText,c=r.warning;return t?e.createElement(n,{alignItems:"center",color:"red.500",fontSize:"xs",lineHeight:"small",mt:1},e.createElement(d,{style:{fontSize:"inherit"}}),e.createElement(l,{fontSize:"inherit",pl:1},t)):e.createElement(o,{"data-testid":"form-field-error-placeholder",minHeight:"5",mt:1},e.createElement(a,{fontSize:"xs",lineHeight:"small"},e.createElement(o,{color:"purple.500",fontSize:"inherit",fontWeight:"medium",lineHeight:"small",mb:i?1:void 0},c),i))}function v(r){var t=r.children,l=r.error,o=r.helperText,a=r.label,u=r.name,p=r.secondaryLabel,m=r.warning,d=h(r,["children","error","helperText","label","name","secondaryLabel","warning"]),f=Boolean(l);return e.createElement(i,s({as:"fieldset",isInvalid:f},d),e.createElement(n,null,e.createElement(c,{color:"inherit",fontSize:"xs",fontWeight:"medium",htmlFor:u,lineHeight:"small",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a),e.createElement(b,{label:p})),t,e.createElement(y,{error:l,helperText:o,warning:m}))}function C(r){var t=r.ariaLabel,n=r.fill,l=r.onClick;return"password"!==r.type?e.createElement(e.Fragment,null):e.createElement(u,{height:"100%",mr:"2"},e.createElement(o,{"aria-label":t,as:"button",type:"button",onClick:l,pr:"1px",pt:"1px"},e.createElement(o,{as:"svg","data-testid":"password-toggle-svg",fill:n,viewBox:"0 0 24 24",width:"5"},e.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"}))))}var x={currency:"text",number:"text",phone:"text"},E={currency:/[^0-9.$,]+/g,number:/[^0-9.]+/g,phone:/[^0-9.\-()+ ]+/g};function w(e,r){var t;return e?"text":null!==(t=x[r])&&void 0!==t?t:r}function S(e){return!e}function O(t){var n,l=t.error,o=t.label,a=t.name,i=t.type,c=void 0===i?"text":i,u=t.inputProps,d=void 0===u?{}:u,b=h(t,["error","label","name","type","inputProps"]),y=function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,l,o=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){l={error:e}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(l)throw l.error}}return a}(r(!1),2),x=y[0],O=y[1],k=d.onChange?f(d.onChange,function(e){return function(r){var t=E[e];return t?s(s({},r),{target:s(s({},r.target),{value:r.target.value.replace(t,"")})}):r}}(c)):g,z=function(e){return e?{inputBackgroundColor:"red.200",inputBorderColor:"red.500",toggleIconFill:"red.500"}:{inputBackgroundColor:"gray.200",inputBorderColor:"gray.400",toggleIconFill:"gray.500"}}(l),B=z.inputBackgroundColor,H=z.inputBorderColor,P=z.toggleIconFill;return e.createElement(v,s({error:l,label:o,name:a},b),e.createElement(p,null,e.createElement(m,s({_focus:{outline:"blue.500"},autoComplete:(n=d.autoComplete,null!=n?n:"on"),backgroundColor:B,border:"1px solid",borderColor:H,"data-testid":"".concat(a,"-input"),fontSize:"md",id:a,lineHeight:"6",name:a,onChange:k,px:"2",py:"1",type:w(x,c),width:"full"},d)),e.createElement(C,{ariaLabel:"".concat(x?"Hide":"Show"," Password"),fill:P,onClick:function(){return O(S)},type:c})))}export{v as ALFieldset,y as ALFieldsetBelowControl,b as ALFieldsetSecondaryLabel,O as ALInputGroup};
//# sourceMappingURL=index.js.map
