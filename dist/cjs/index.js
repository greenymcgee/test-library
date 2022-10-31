"use strict";var e=require("react"),t=require("@chakra-ui/react"),r=require("@above-lending/prelude");var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function a(r){var a=r.message,l=o(r,["message"]);return e.createElement(t.Box,null,e.createElement(t.Tooltip,n({label:a,padding:"3",hasArrow:!0,bg:"white",maxWidth:"300px",fontSize:"sm",boxShadow:"0px 1px 9.5px #ccc",placement:"top"},l),e.createElement(t.Image,{marginLeft:"2",src:"/lander/images/information-icon.svg",alt:"tooltip",width:"16px"})))}function l(r){var l=r.children,i=r.error,c=r.isRequired,p=r.label,u=r.name,s=r.tooltipMessage,m=r.secondaryLabel,d=r.helper,h=o(r,["children","error","isRequired","label","name","tooltipMessage","secondaryLabel","helper"]),g=Boolean(i);return e.createElement(t.FormControl,n({},h,{isInvalid:g,isRequired:c}),e.createElement(t.Flex,null,e.createElement(t.FormLabel,{color:"inherit",fontSize:"xs",fontWeight:"medium",htmlFor:u,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},p),m&&e.createElement(t.Text,{fontSize:"xs",color:"gray.500",fontWeight:"semibold"}," ","- ",m),s&&e.createElement(a,{message:s,marginLeft:"3"})),l,g?e.createElement(t.FormErrorMessage,{color:"red.500",fontSize:{base:"xs",lg:"xxs"}},i):e.createElement(t.Box,{minHeight:"17px","data-testid":"form-field-error-placeholder"},e.createElement(t.Text,{fontSize:"xs"},d)))}var i=function(r){var a=r.fill,l=r.height,i=r.width,c=void 0===i?"20px":i,p=o(r,["fill","height","width"]);return e.createElement(t.Box,n({as:"button"},p,{"data-testid":"password-show-hide-icon",type:"button"}),e.createElement(t.Box,{as:"svg",fill:a,height:l,viewBox:"0 0 24 24",width:c},e.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"})))},c={currency:"text",number:"text",phone:"text"},p={currency:/[^0-9.$,]+/g,number:/[^0-9.]+/g,phone:/[^0-9.\-()+ ]+/g};exports.Button=function(t){var r=t.label;return e.createElement("button",null,r)},exports.FormFieldWrapper=l,exports.Input=function(a){var u,s=e.useState(!1),m=s[0],d=s[1],h=a.autocomplete,g=a.error,f=a.name,x=a.type,b=void 0===x?"text":x,v=a.onChange,y=void 0===v?r.noop:v,E=o(a,["autocomplete","error","name","type","onChange"]),w=r.compose(y,function(e){return function(t){var r=p[e];return r&&(t.target.value=t.target.value.replace(r,"")),t}}(b));return e.createElement(l,n({},a),e.createElement(t.InputGroup,null,e.createElement(t.Input,n({autoComplete:null!=h?h:"on",backgroundColor:g?"red.200":"gray.200",border:"1px solid",borderColor:g?"red.500":"gray.400",fontSize:"md",id:f,lineHeight:"1.875rem",name:f,onChange:w,outline:"none",px:"2",type:m?"text":null!==(u=c[b])&&void 0!==u?u:b,width:"full"},E)),"password"===b&&e.createElement(t.InputRightElement,{height:"100%",mr:"2"},e.createElement(i,{fill:g?"red.500":"gray.500",onClick:function(){return d((function(e){return!e}))},pr:"1px",pt:"1px",title:"".concat(m?"Hide":"Show"," Password")}))))},exports.Tooltip=a;
//# sourceMappingURL=index.js.map
