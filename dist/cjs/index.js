"use strict";var e=require("react"),r=require("@chakra-ui/react"),o=require("react-icons/ri"),t=require("@above-lending/prelude"),n=function(){return n=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var n in r=arguments[o])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},n.apply(this,arguments)};function i(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]])}return o}function l(o){var t=o.label,l=i(o,["label"]);return t?e.createElement(r.Text,n({"data-testid":"secondary-label",fontSize:"xs",color:"gray.500",fontWeight:"semibold"},l)," ","- ",t):e.createElement(e.Fragment,null)}function a(t){var n=t.error,i=t.helperText,l=t.warning,a=Boolean(i||n||l)?3:void 0;return n?e.createElement(r.Flex,{alignItems:"center",color:"red.500",fontSize:"xs",mb:a,mt:1},e.createElement(o.RiErrorWarningFill,{style:{fontSize:"inherit"}}),e.createElement(r.FormErrorMessage,{fontSize:"inherit",lineHeight:"small",pl:1,m:0},n)):e.createElement(r.Box,{"data-testid":"form-field-error-placeholder",minHeight:4,mt:1,mb:a},e.createElement(r.FormHelperText,{fontSize:"xs",lineHeight:"small",mt:0},e.createElement(r.Box,{color:"purple.500",fontSize:"inherit",fontWeight:"medium",lineHeight:"small",mb:i?1:void 0},l),i))}function d(o){var t=o.children,d=o.error,c=o.helperText,u=o.label,s=o.name,p=o.secondaryLabel,g=o.warning,m=i(o,["children","error","helperText","label","name","secondaryLabel","warning"]);return e.createElement(r.FormControl,n({as:"fieldset",isInvalid:Boolean(d)},m),e.createElement(r.Flex,null,e.createElement(r.FormLabel,{color:"inherit",fontSize:"xs",fontWeight:"medium",htmlFor:s,lineHeight:"small",mb:1,mt:0,mx:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},u),e.createElement(l,{label:p})),t,e.createElement(a,{error:d,helperText:c,warning:g}))}function c(o){var t=o.ariaLabel,n=o.fill,i=o.onClick;return"password"!==o.type?e.createElement(e.Fragment,null):e.createElement(r.InputRightElement,{height:"100%",mr:"2"},e.createElement(r.Box,{"aria-label":t,as:"button",type:"button",onClick:i,pr:"1px",pt:"1px"},e.createElement(r.Box,{as:"svg","data-testid":"password-toggle-svg",fill:n,viewBox:"0 0 24 24",width:"5"},e.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"}))))}var u={currency:"text",number:"text",phone:"text"},s={currency:/[^0-9.$,]+/g,number:/[^0-9.]+/g,phone:/[^0-9.\-()+ ]+/g};function p(e,r){var o;return e?"text":null!==(o=u[r])&&void 0!==o?o:r}var g={borderRadius:"4px",minWidth:"250px",paddingX:8,paddingY:3,fontWeight:"semibold",height:"45px"},m={defaultProps:{variant:"primary"},variants:{none:{},primary:{_focus:{backgroundColor:"teal.700"},_hover:{backgroundColor:"teal.700"},backgroundColor:"teal.600",borderRadius:"5",color:"white",fontWeight:"600",minWidth:"250px",paddingX:"6",paddingY:"3",textAlign:"center"},primaryV2:n(n({},g),{backgroundColor:"blue.500",color:"white"}),outlineV2:n(n({},g),{backgroundColor:"white",color:"blue.500",border:"2px solid",borderColor:"blue.500"}),secondary:{_focus:{backgroundColor:"blue.500"},_hover:{backgroundColor:"blue.500"},_disabled:{backgroundColor:"gray.400",cursor:"not-allowed"},backgroundColor:"blue.500",borderRadius:"5",color:"white",fontWeight:"600",minWidth:"250px",paddingX:"6",paddingY:"3",textAlign:"center"},muted:{_focus:{backgroundColor:"gray.500"},_hover:{backgroundColor:"gray.500"},backgroundColor:"gray.300",borderRadius:"5",fontWeight:"600",minWidth:"250px",paddingX:"6",paddingY:"3",textAlign:"center"},link:{_focus:{color:"teal.800"},_hover:{color:"teal.800"},color:"teal.700",fontWeight:"500",minWidth:"250px",paddingX:"6",paddingY:"3",textAlign:"center",textDecoration:"underline"}}},x=m.variants||{},b={defaultProps:{variant:"primary"},variants:{button:n(n({},x.primary),{textDecoration:"none"}),buttonMuted:n(n({},x.muted),{textDecoration:"none"}),buttonPrimary:n(n({},x.muted),{textDecoration:"none"}),buttonSecondary:n(n({},x.secondary),{textDecoration:"none"}),primary:{_focus:{textDecoration:"underline"},_hover:{textDecoration:"underline"},color:"teal.600",fontSize:"inherit"},secondary:{_focus:{textDecoration:"underline"},_hover:{textDecoration:"underline"},color:"blue.500",fontSize:"inherit"},outlineV2:{_hover:{textDecoration:"none"},display:"inline-block",textAlign:"center",borderRadius:"4px",minWidth:"250px",pt:2,pb:3,px:8,fontWeight:"semibold",height:"45px",backgroundColor:"white",color:"blue.500",border:"2px solid",borderColor:"blue.500"},strong:{_focus:{textDecoration:"underline"},_hover:{textDecoration:"underline"},color:"teal.700",fontSize:"inherit",fontWeight:"600",textDecoration:"underline"},disclosure:{_focus:{textDecoration:"underline"},_hover:{textDecoration:"underline"},color:"gray.500",fontSize:"xs"},muted:{_focus:{textDecoration:"underline"},_hover:{textDecoration:"underline"},color:"gray.700",fontSize:"inherit"},menuitem:{_focus:{textDecoration:"underline"},_hover:{textDecoration:"underline"},color:"gray.700",fontSize:"lg"},pill:{backgroundColor:"teal.400",borderRadius:"16px",boxShadow:"rgb(2 176 175 / 22%) 0px -1px 0px inset",color:"teal.800",fontSize:"xs",fontWeight:"600",padding:"4px 8px",textAlign:"center",textDecoration:"underline",whiteSpace:"nowrap"}}},h={position:"relative",cursor:"pointer",marginLeft:"22px","&::before":{content:'""',position:"absolute",left:"-20px",top:"50%",transform:"translateY(-50%)",width:"16px",height:"16px",borderRadius:"50%",background:"transparent",border:"1px solid",borderColor:"gray.300"},"&::after":{content:'""',position:"absolute",left:"-16px",top:"calc(50% + 4px)",transform:"translateY(calc(-50% - 4px))",borderRadius:"50%",width:"8px",height:"8px"}},f={parts:["container","control","icon","label","input"],defaultProps:{variant:"primary"},variants:{primary:{label:n(n({},h),{"&[data-checked]::after":{background:"teal.600"}})},primaryV2:{label:n(n({},h),{"&[data-checked]::after":{background:"blue.500"}})}}},y=Object.freeze({__proto__:null,Alert:{parts:["icon","container","title","description","inner"],defaultProps:{container:{variant:"primary"}},baseStyle:{icon:{marginRight:"2",width:"5"},container:{alignItems:"center",backgroundColor:"teal.800",color:"white",padding:"3",button:{padding:"2"},"&":{maxWidth:"790px",width:"calc(100vw - 3rem)"}},title:{fontWeight:"600",fontSize:["sm","md"]},description:{fontSize:["xs","sm"]}},variants:{primary:{container:{backgroundColor:"blue.500",color:"white"}},secondary:{container:{backgroundColor:"teal.700",color:"white"}},error:{container:{backgroundColor:"red.500",color:"white"}}}},Button:m,Checkbox:{parts:["container","control","icon","label"],defaultProps:{variant:"primary"},variants:{primary:{icon:{color:"teal.600"},control:{_active:{outline:"1px solid",outlineColor:"teal.200"},_focus:{outline:"1px solid",outlineColor:"teal.200"},alignSelf:"flex-start",backgroundColor:"white",border:"1px solid",borderColor:"teal.400",borderRadius:"3",marginTop:"1",minHeight:"6",minWidth:"6","&[data-invalid]":{_active:{outline:"1px solid",outlineColor:"red.500"},_focus:{outline:"1px solid",outlineColor:"red.500"},backgroundColor:"red.200",borderColor:"red.500",color:"red"}},label:{marginLeft:"3"},container:{alignItems:"flex-start"}},primaryV2:{icon:{color:"teal.600"},control:{_active:{outline:"1px solid",outlineColor:"teal.200"},_focus:{outline:"1px solid",outlineColor:"teal.200"},alignSelf:"flex-start",border:"1px solid",borderColor:"gray.400",background:"gray.200",minHeight:"6",minWidth:"6","&[data-invalid]":{_active:{outline:"1px solid",outlineColor:"red.500"},_focus:{outline:"1px solid",outlineColor:"red.500"},backgroundColor:"red.200",borderColor:"red.500",color:"red"}},label:{marginLeft:"3"},container:{alignItems:"flex-start"}}}},Text:{variants:{disclosure:{color:"gray.500",fontSize:"xs"},error:{color:"red.500",fontSize:"xs"},link:{cursor:"pointer",color:"teal.600",textDecoration:"underline"}}},Heading:{defaultProps:{variant:"primary"},variants:{primary:{color:"teal.800",fontWeight:"600"},secondary:{color:"blue.500",fontWeight:"600"},muted:{color:"gray.700",fontWeight:"500"},disclosure:{color:"gray.500",fontSize:"xs",fontWeight:"bold",paddingY:"2",textTransform:"uppercase"}}},Link:b,Modal:{parts:["overlay","dialog","dialogContainer","closeButton"],baseStyle:{overlay:{backgroundColor:"modalOverlay",zIndex:1e4},dialogContainer:{zIndex:1e4},dialog:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"white",padding:6,borderRadius:"4px",margin:"auto",boxShadow:"0 0 12px overlay.500",width:"fit-content",maxWidth:{base:"90%",lg:"1300px"}},closeButton:{position:"absolute",top:"3",right:"3",width:"12px",height:"12px","& svg":{width:"100%",height:"100%"}}}},Radio:f}),v="Montserrat, Roboto, 'Helvetica Neue', Arial, sans-serif",C=n(n({},r.theme.fonts),{body:v,heading:v}),w=n(n({},r.theme.lineHeights),{small:"1.125rem"}),F=r.extendTheme({breakpoints:{base:"0em",sm:"480px",md:"668px",lg:"900px",xl:"1024","2xl":"1440px"},colors:{white:"#FFF",black:"#000",transparent:"transparent",modalOverlay:"rgba(0, 40, 80, 0.4)",overlay:{100:"rgba(0, 0, 0, 0.2)",150:"rgba(0, 0, 0, 0.5)",200:"rgba(0, 0, 0, 0.4)",300:"rgba(0, 0, 0, 0.6)",400:"rgba(0, 0, 0, 0.8)"},primary:{400:"#59D4D4",500:"#02B0AF",700:"#106564"},gray:{100:"#FFFFFF",200:"#FAFAFA",300:"#DDD",400:"#CCC",500:"#999",600:"#666",700:"#333",800:"#222222",900:"#000000"},green:{200:"#D8FBEE",500:"#03A64A",800:"#034923"},teal:{200:"#E8F8F8",300:"#D3F3F1",400:"#B6EEEE",500:"#59D4D4",600:"#02B0AF",700:"#158E8E",800:"#106564"},blue:{200:"#D1EBF9",500:"#066CA7",800:"#014063"},purple:{200:"#EEE9FC",500:"#442E83",800:"#2D1D5A"},red:{200:"#FFF5F5",500:"#DC1E1E",800:"#630F0F"}},components:y,config:{initialColorMode:"light"},fonts:C,fontSizes:{xxs:"0.688rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.25rem","5xl":"2.75rem","6xl":"4rem"},lineHeights:w,styles:{global:{"*":{boxSizing:"border-box",fontFamily:"body",fontSize:["sm","md"],margin:0,padding:0,h1:{fontSize:{base:"3xl",md:"4xl","2xl":"5xl"}},h2:{fontSize:{base:"2xl",md:"3xl","2xl":"4xl"}},h3:{fontSize:{base:"xl",md:"2xl","2xl":"3xl"}},h4:{fontSize:{base:"lg",md:"xl","2xl":"2xl"}}},body:{minHeight:"100vh",minWidth:"320px",overflowX:"hidden","&.loading":{cursor:"wait"},WebkitFontSmoothing:"antialiased",".chakra-toast__inner":{display:"flex",justifyContent:"center",margin:"auto",maxWidth:"calc(100vw - 3rem) !important",width:"calc(100vw - 3rem)"}},label:{'span[aria-hidden=true][role="presentation"]':{color:"red.500",fontSize:["xs"],fontWeight:"600",marginLeft:"2px"}}}}});exports.ALFieldset=d,exports.ALFieldsetBelowControl=a,exports.ALFieldsetSecondaryLabel=l,exports.ALInputGroup=function(o){var l,a,u=o.error,g=o.label,m=o.name,x=o.type,b=void 0===x?"text":x,h=o.inputProps,f=void 0===h?{}:h,y=i(o,["error","label","name","type","inputProps"]),v=function(e,r){var o="function"==typeof Symbol&&e[Symbol.iterator];if(!o)return e;var t,n,i=o.call(e),l=[];try{for(;(void 0===r||r-- >0)&&!(t=i.next()).done;)l.push(t.value)}catch(e){n={error:e}}finally{try{t&&!t.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}return l}(e.useState(!1),2),C=v[0],w=v[1],F=t.compose(null!==(l=f.onChange)&&void 0!==l?l:t.noop,function(e){return function(r){var o=s[e];return o?n(n({},r),{target:n(n({},r.target),{value:r.target.value.replace(o,"")})}):r}}(b)),S=function(e){return e?{inputBorderColor:"red.500",toggleIconFill:"red.500"}:{inputBorderColor:"gray.400",toggleIconFill:"gray.500"}}(u),k=S.inputBorderColor,E=S.toggleIconFill,_=e.useCallback((function(){return w((function(e){return!e}))}),[]);return e.createElement(d,n({error:u,label:g,name:m},y),e.createElement(r.InputGroup,null,e.createElement(r.Input,n({_focus:{outline:"1px solid",outlineColor:"blue.500",outlineOffset:"1px"},autoComplete:null!==(a=f.autoComplete)&&void 0!==a?a:"on",border:"1px solid",borderColor:k,borderRadius:"none","data-testid":"".concat(m,"-input"),fontSize:"md",height:"auto",id:m,lineHeight:"6",name:m,onChange:F,px:"2",py:"1",type:p(C,b),width:"full"},f)),e.createElement(c,{ariaLabel:"".concat(C?"Hide":"Show"," Password"),fill:E,onClick:_,type:b})))},exports.theme=F;
//# sourceMappingURL=index.js.map
