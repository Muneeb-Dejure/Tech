(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3927],{40548:function(e,t,n){var r=n(24007),l=n(86040);e.exports=function(e,t){t=r(t,e);for(var n=0,o=t.length;null!=e&&n<o;)e=e[l(t[n++])];return n&&n==o?e:void 0}},24007:function(e,t,n){var r=n(55589),l=n(5130),o=n(44041),a=n(99835);e.exports=function(e,t){return r(e)?e:l(e,t)?[e]:o(a(e))}},5130:function(e,t,n){var r=n(55589),l=n(52624),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!!("number"==n||"symbol"==n||"boolean"==n||null==e||l(e))||a.test(e)||!o.test(e)||null!=t&&e in Object(t)}},32924:function(e,t,n){var r=n(67997);e.exports=function(e){var t=r(e,function(e){return 500===n.size&&n.clear(),e}),n=t.cache;return t}},44041:function(e,t,n){var r=n(32924),l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=r(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(l,function(e,n,r,l){t.push(r?l.replace(o,"$1"):n||e)}),t});e.exports=a},86040:function(e,t,n){var r=n(52624),l=1/0;e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-l?"-0":t}},13546:function(e,t,n){var r=n(40548);e.exports=function(e,t,n){var l=null==e?void 0:r(e,t);return void 0===l?n:l}},67997:function(e,t,n){var r=n(95678);function l(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var n=function(){var r=arguments,l=t?t.apply(this,r):r[0],o=n.cache;if(o.has(l))return o.get(l);var a=e.apply(this,r);return n.cache=o.set(l,a)||o,a};return n.cache=new(l.Cache||r),n}l.Cache=r,e.exports=l},31002:function(e,t,n){"use strict";n.r(t);var r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EntryGroupRailComponentsTheVerge_entryGroup",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"railComponents",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Newsletter",kind:"LinkedField",name:"newsletter",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null}],storageKey:null}],type:"EntryGroupRailNewsletter",abstractKey:null}],storageKey:null}],type:"EntryGroup",abstractKey:null};r.hash="c68b935308fbcdf7f007fe9e46815c97",t.default=r},95796:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(97458),l=n(36851),o=n(61198),a=n(44359),i=n(28934),s=n(92833),c={"command-line":{name:"Command Line",description:"A newsletter from Alex Heath about the tech industry’s inside conversation.",url:"/subscriptions/command-line",groups:["/meta","/facebook","/instagram","/whatsApp","/ar","/vr","/snap","/twitter","/tiktok","/policy","/labor","/command-line-newsletter"]},"hot-pod":{name:"Hot Pod",description:"News and analysis on the biggest events in audio.",url:"/subscriptions/hot-pod",groups:["/converge","/ctrl-walt-delete","/decoder-podcast-with-nilay-patel","/hot-pod-newsletter","/land-of-the-giants-podcast","/music","/spotify","/the-verge-book-club","/the-verge-mobile-podcast","/the-vergecast","/whatstech","/whyd-you-push-that-button"]},installer:{name:"Installer",description:"A weekly newsletter about the best and Verge-iest stuff you should know about.",url:"",groups:["/reviews","/tech","/gadgets","/apple-ios","/android","/apple-mac-os","/iphone","/ipad","/apps","/chrome","/usb-c","/wearables","/smartwatch"]}},u="installer",d=n(36935),m=n(20672),p=n(37782),h={dark:{text:"text-franklin",fill:"fill-franklin",underline:"shadow-underline-franklin",color:"franklin"},light:{text:"text-blurple",fill:"fill-blurple",underline:"shadow-underline-blurple",color:"blurple"}},f=(0,p.n)(function(e){var t=h[e.colorTheme],n=t.text,l=t.fill,o=t.underline,a=c[e.id],u=a.name,p=a.description,f=a.url,g=(0,d.z$)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:(0,i.Z)(m.Z.Newsletter,"flex w-full flex-col border-t px-12 pt-16 font-polysans-mono font-light leading-130 -tracking-2 md:text-15","entryBodyComponent"===e.source&&"mb-20 md:flex-row",n),children:[(0,r.jsxs)("p",{className:"mb-12 text-15",children:[(0,r.jsx)("span",{className:"font-semibold",children:u})," / ",p]}),(0,r.jsxs)("span",{className:"flex flex-row",children:[(0,r.jsx)("a",{className:(0,i.Z)("w-fit text-12 font-semibold uppercase tracking-15",o),onClick:function(){null==g||g.emit({event:"newsletter",newsletter:{action:"newsletter_signup",name:u,component:"sidebar"}})},href:f,children:"Subscribe here"}),(0,r.jsx)(s.Z,{className:(0,i.Z)("ml-12 font-bold",l),width:16,height:16})]})]})})},{context:"NewsletterErrorBoundary"}),g=n(11098),x=function(e){var t=(0,o.useFragment)(n(31002),e.entryGroup).railComponents,i=(0,l.useRouter)();return(0,r.jsx)("div",{className:"sticky top-40 pb-40",children:t.map(function(e,t){if(!e||"EntryGroupRailNewsletter"!==e.__typename)return null;var n=(0,g.hb)(e.newsletter.slug)?g.ZP[e.newsletter.slug]:null;return c["command-line"].groups.includes(i.asPath.toLowerCase())?(0,r.jsx)("div",{className:"mb-8 hidden md:block",children:(0,r.jsx)(f,{id:"command-line",source:"sidebar",colorTheme:"dark"})},t):c["hot-pod"].groups.includes(i.asPath.toLowerCase())?(0,r.jsx)("div",{className:"mb-8 hidden md:block",children:(0,r.jsx)(f,{id:"hot-pod",source:"sidebar",colorTheme:"dark"})},t):c[u].groups.includes(i.asPath.toLowerCase())?(0,r.jsx)("div",{className:"mb-8 hidden md:block",children:(0,r.jsx)(a.Z,{name:c[u].name,text:c[u].description,lists:["Installer"],source:"sidebar",colorTheme:"dark"})},t):n?(0,r.jsx)("div",{className:"mb-8 hidden md:block",children:(0,r.jsx)(a.Z,{name:n.name,text:n.text,lists:[n.listId],source:"sidebar",colorTheme:"dark"})},t):null})})}},44359:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(53520),l=n(97458),o=n(28934),a=n(56503),i=n.n(a),s=n(52983),c=n(60980),u=n(36935),d=n(70094),m=n(20672),p=n(37782),h={dark:{textColor:"text-franklin",borderColor:"border-franklin",placeholderTextColor:"placeholder:text-franklin",buttonHoverColor:"hover:bg-franklin hover:text-black",inputBackgroundColor:"bg-black"},light:{textColor:"text-blurple",borderColor:"border-blurple",placeholderTextColor:"placeholder:text-blurple",buttonHoverColor:"hover:bg-blurple hover:text-white",inputBackgroundColor:"bg-white"}},f=(0,p.n)(function(e){var t=e.name,n=e.text,a=e.lists,p=e.source,f=h[e.colorTheme],g=f.textColor,x=f.borderColor,b=f.placeholderTextColor,y=f.buttonHoverColor,v=f.inputBackgroundColor,w=(0,u.z$)(),k=(0,r._)((0,s.useState)(null),2),C=k[0],N=k[1],j=(0,r._)((0,s.useState)(null),2),T=j[0],Z=j[1],_=(0,s.useRef)(null),E=(0,s.createRef)(),A=(0,s.useMemo)(function(){return"https://www.google.com/recaptcha/api.js?render=".concat("6LeCFmwfAAAAAA4qBtkgg3WVJWVYGkt05yKT6gi1")},[]);return(0,s.useEffect)(function(){var e=E.current;if("undefined"!=typeof IntersectionObserver&&e){var n=new IntersectionObserver(function(e){var n=(0,r._)(e,1)[0];(null==n?void 0:n.isIntersecting)&&!C&&(null==w||w.emit({event:"newsletter",newsletter:{action:"newsletter_view",name:t,component:p}}))});return n.observe(e),function(){n.unobserve(e)}}},[E,C,w,t,p]),(0,l.jsxs)("div",{children:[A&&(0,l.jsx)(i(),{strategy:"lazyOnload",src:A}),(0,l.jsx)("form",{onSubmit:function(e){e.preventDefault();var n,r="".concat(p,"_NewsletterComponent"),l=(null===(n=_.current)||void 0===n?void 0:n.value)||"";(0,c.Z)(l,a,r,window.location.href).then(function(){N(l),null==w||w.emit({event:"newsletter",newsletter:{action:"newsletter_signup",name:t,component:r}})}).catch(function(e){e instanceof Error&&Z(e.message)})},className:"",children:(0,l.jsx)("div",{className:(0,o.Z)(m.Z.Newsletter,"flex w-full flex-col border-t px-12 pt-16 font-polysans-mono text-14 font-light leading-130 -tracking-2 md:text-15","entryBodyComponent"===p&&"mb-20 md:flex-row",g,x),ref:E,children:null!==C?(0,l.jsxs)("div",{className:"my-16 w-full text-center",children:["Thanks for signing up for ",t,"!",(0,l.jsx)("br",{}),"Check your inbox for a confirmation message."]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:(0,o.Z)("mb-10","entryBodyComponent"===p&&"md:pr-10"),children:[(0,l.jsx)("h2",{className:"inline font-medium",children:t}),(0,l.jsxs)("p",{className:"inline",children:[" / ",(0,l.jsx)(d.Z,{html:n,component:"span"})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("fieldset",{children:[(0,l.jsxs)("div",{className:"mb-4 flex",children:[(0,l.jsx)("label",{className:"sr-only",htmlFor:"email",children:"Email (required)"}),(0,l.jsx)("input",{id:"email",type:"email",name:"email",ref:_,placeholder:"Enter your email",className:(0,o.Z)("mr-8 rounded-sm border px-10 font-polysans text-15 font-light focus:outline-none",T&&"border-hot-brick","entryBodyComponent"===p?"w-full md:w-[175px]":"w-full",b,v)}),(0,l.jsx)("button",{type:"submit",className:(0,o.Z)("whitespace-nowrap rounded-sm border px-18 py-12 text-12 font-medium uppercase tracking-12 no-underline",x,y),children:"Sign up"})]}),T&&(0,l.jsx)("div",{className:"mb-[6px] mt-2 font-polysans text-12 font-light text-hot-brick",children:T})]}),(0,l.jsxs)("div",{className:"mt-2 font-polysans text-11 leading-110",children:["By submitting your email, you agree to our"," ",(0,l.jsx)("a",{href:"https://www.voxmedia.com/legal/terms-of-use",className:"underline",children:"Terms"})," and ",(0,l.jsx)("a",{href:"https://www.voxmedia.com/legal/privacy-notice",className:"underline",children:"Privacy Notice"}),". ","This site is protected by reCAPTCHA and the Google"," ",(0,l.jsx)("a",{href:"https://policies.google.com/privacy",className:"underline",children:"Privacy Policy"})," ","and"," ",(0,l.jsx)("a",{href:"https://policies.google.com/terms",className:"underline",children:"Terms of Service"})," ","apply."]})]})]})})})]})},{context:"NewsletterErrorBoundary"})},92833:function(e,t,n){"use strict";var r=n(97458);t.Z=function(e){var t=e.className,n=e.width,l=e.height;return(0,r.jsx)("svg",{className:void 0===t?"fill-white":t,width:void 0===n?12:n,height:void 0===l?12:l,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",tabIndex:-1,"aria-hidden":"true",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.85017 5.58349L5.68241 2.38336L6.25987 1.79999L10.5 6.05807L6.39998 10.2L5.82251 9.61662L8.99818 6.40849L1.5 6.40849V5.58349L8.85017 5.58349Z"})})}},50886:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(97458),l=n(28934);n(52983);var o=n(36935),a=n(70802),i=n(20672),s={white:{backgroundColor:"bg-white",foregroundColor:"text-black hover:text-blurple",borderColor:"border-b-blurple",sideTextColor:"text-franklin opacity-50",numberColor:"text-blurple",stickyPosition:"top-90"},black:{backgroundColor:"bg-gray-13",foregroundColor:"text-white hover:text-franklin",borderColor:"border-b-gray-5a",sideTextColor:"text-blurple",numberColor:"text-franklin",stickyPosition:"top-40"}},c=function(e){var t=e.colorTheme,n=e.entries,c=e.quickpostRiver,u=void 0!==c&&c,d=(0,o.z$)();if(0===n.length)return null;var m=s[t],p=m.backgroundColor,h=m.foregroundColor,f=m.borderColor,g=m.sideTextColor,x=m.numberColor,b=m.stickyPosition;return(0,r.jsxs)("div",{className:(0,l.Z)(i.Z.ListBreakerStandard,"sticky m-auto my-50 rounded-[4px] lg:mb-40 lg:mt-0",p,b,u?"p-0 md:p-20":"w-mobile-breaker p-20"),children:[(0,r.jsx)("div",{className:(0,l.Z)("absolute right-[-25px] top-0 h-full rotate-180 whitespace-nowrap text-center font-manuka text-[168px] font-ultra leading-100",g),style:{writingMode:"vertical-rl",textOrientation:"sideways"},children:"Most Popular"}),(0,r.jsx)("div",{className:"relative z-10 mb-20 flex justify-between font-polysans text-11 font-medium uppercase tracking-15 text-blurple",children:"Most Popular"}),(0,r.jsx)("ol",{className:(0,l.Z)("styled-counter styled-counter-standard md:w-full",u?"w-2/3":"w-full"),children:n.map(function(e,t){return e&&(0,r.jsxs)("li",{className:(0,l.Z)("leading-120",x),children:[e.url&&(0,r.jsx)(a.Z,{href:e.url,className:h,onClick:function(){var n;return null==d?void 0:d.emit({event:"article_click",article_click:{index:t,article_uri:e.url,article_title:e.title,author:null===(n=e.author)||void 0===n?void 0:n.fullName,article_component_name:"breaker_popular"}})},children:(0,r.jsx)("h2",{className:"mb-4 inline w-[181px] font-polysans text-16 font-bold tracking-1",children:e.promoHeadline||e.title})}),(0,r.jsx)("hr",{className:(0,l.Z)("-mx-28 my-20 w-[calc(50%+14px)] border text-black/0",f)})]},e.uid)})})]})}},60980:function(e,t,n){"use strict";var r,l=n(80762),o=n(92869),a=(r=(0,l._)(function(e,t,n,r){var l,a;return(0,o.Jh)(this,function(o){switch(o.label){case 0:return l=null,[4,grecaptcha.execute("6LeCFmwfAAAAAA4qBtkgg3WVJWVYGkt05yKT6gi1",{action:"NEWSLETTER_SUBSCRIBE"})];case 1:l=o.sent(),o.label=2;case 2:return[4,fetch("/api/newsletter",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:l,email:e,source:n,pageUrl:r,lists:t.reduce(function(e,t){return e[t]=!0,e},{})})})];case 3:return a=o.sent(),[2,new Promise(function(e,t){a.ok||t("Could not subscribe"),e()})]}})}),function(e,t,n,l){return r.apply(this,arguments)});t.Z=a},4826:function(e,t,n){"use strict";var r;n.r(t);let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EntryGroupAnalytics_entryGroup",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:"groupType",args:null,kind:"ScalarField",name:"type",storageKey:null},{alias:"groupCommunity",args:null,concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:[r={alias:null,args:null,kind:"ScalarField",name:"domain",storageKey:null},{alias:null,args:null,concreteType:"Network",kind:"LinkedField",name:"network",plural:!1,selections:[r],storageKey:null}],storageKey:null}],type:"EntryGroup",abstractKey:null};l.hash="2576d4b4ae2326c1dd56c400f56c8830",t.default=l},14788:function(e,t,n){"use strict";var r,l=n(52983),o=n(61198),a=n(80821),i=n(24714),s=n(2868),c=n(81284),u=n(36935),d=n(29565),m=n(37782),p=n(87514);t.Z=(0,m.n)(e=>{let t=(0,o.useFragment)((void 0!==r||(r=n(4826)).hash&&"2576d4b4ae2326c1dd56c400f56c8830"!==r.hash&&console.error("The definition of 'EntryGroupAnalytics_entryGroup' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."),r),e.group),m=(0,u.z$)(),h=(0,d.aC)(),f=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{if(!m||!h||f.current)return;let e=t.groupCommunity?.domain.replace(/\.com$/,"")||c.PC,n=t.groupCommunity?.network.domain.replace(/\.com$/,"")||c.CF,r={event:"dataLayer-initalized",Community:e,Network:n,"All Categories":`${n},${e}`,"Page Type":t.name?.toLowerCase()==="front page"?"homepage":t.groupType?.toLowerCase(),"Page Type Category":"aggregation","Unique Pageload ID":(0,a.m3)(),"User ID":h.viewer?.id??"Logged Out",...i.HW,...(0,s.A)()},l=(0,p.e)("sailthru_hid");l&&(r["Sailthru User ID"]=l),r["Scroll Subscription"]=!!(0,p.e)("scroll0");let o=(0,s.X)();o&&(r={...r,...o}),f.current=!0,m.emit(r)},[m,t,h]),null},{context:"EntryGroupAnalyticsErrorBoundary"})},79408:function(e,t,n){"use strict";var r=n(52983),l=n(74623);t.Z=function(){let e=(0,r.useContext)(l.Z);if(!e||!e.routeInfo)throw Error("Make sure to use <RouteInfoProvider />");return e.routeInfo}}}]);