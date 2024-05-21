(()=>{var e={};e.id=1327,e.ids=[1327],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},41115:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>d,routeModule:()=>g,tree:()=>o});var r=s(67096),i=s(16132),a=s(37284),n=s.n(a),l=s(32564),A={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(A[e]=()=>l[e]);s.d(t,A);let o=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,68934)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\contact\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,54062)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,21499)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\app\\contact\\page.js"],c="/contact/page",u={require:s,loadChunk:()=>Promise.resolve()},g=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},39651:(e,t,s)=>{Promise.resolve().then(s.bind(s,37875)),Promise.resolve().then(s.bind(s,55325)),Promise.resolve().then(s.t.bind(s,88469,23)),Promise.resolve().then(s.bind(s,72975))},55325:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(53854),i=s(34218),a=s(30266);let n=({successMessage:e,isVisible:t,setIsVisible:s})=>((0,i.useEffect)(()=>{if(e){s(!0);let e=setTimeout(()=>{s(!1)},9e3);return()=>clearTimeout(e)}},[e]),r.jsx(r.Fragment,{children:t&&r.jsx("div",{className:e.status?"success-popup":"error-popup",children:r.jsx("p",{children:e.message})})}));function l(){let[e,t]=(0,i.useState)(!1),[s,l]=(0,i.useState)(""),[A,o]=(0,i.useState)(""),[d,c]=(0,i.useState)(""),[u,g]=(0,i.useState)(""),[h,p]=(0,i.useState)(""),[m,x]=(0,i.useState)(null),[f,w]=(0,i.useState)(!1),v=async e=>{e.preventDefault(),t(!0);let r=JSON.stringify({name:s,email:A,tel:h,subject:u,message:d}),i=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:r});i.ok&&(t(!1),x({status:!0,message:"Message sent successfully, We will get in touch."}),l(""),o(""),c(""),g(""),p("")),i.ok||(t(!1),x({status:!1,message:"Message sending failed, Try again later"}))};return(0,r.jsxs)(r.Fragment,{children:[e&&r.jsx(a.Z,{}),r.jsx(n,{successMessage:m,isVisible:f,setIsVisible:w}),r.jsx("div",{id:"form",className:"bg-gray-200 rounded-md py-16",children:(0,r.jsxs)("div",{children:[r.jsx("div",{className:"flex justify-center w-full",children:r.jsx("span",{className:"bg-as text-white p-2 rounded-lg",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-9 h-9",children:[r.jsx("path",{d:"M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"}),r.jsx("path",{d:"M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"})]})})}),(0,r.jsxs)("div",{className:"text-center mb-5",children:[r.jsx("h1",{className:"text-3xl font-bold",children:"Get in touch"}),r.jsx("p",{className:"font-semibold text-gray-500 mb-0",children:"We'd love to hear from you"})]}),r.jsx("div",{className:"flex justify-center text-yellow-900 w-full py-9 px-5 md:px-24",children:(0,r.jsxs)("form",{onSubmit:v,className:"flex flex-col gap-9 w-full",children:[(0,r.jsxs)("div",{className:"grid md:flex gap-5",children:[(0,r.jsxs)("div",{className:"grid gap-5 w-full",children:[r.jsx("label",{children:"Name"}),r.jsx("input",{type:"text",className:"bg-slate-100 w-full py-2 px-3 outline-none rounded border-l-2 border-as",name:"name",value:s,onChange:e=>l(e.target.value),required:!0})]}),(0,r.jsxs)("div",{className:"grid gap-5 w-full",children:[r.jsx("label",{children:"Email"}),r.jsx("input",{type:"email",className:"bg-slate-100 w-full py-2 px-3 outline-none rounded border-l-2 border-as",name:"email",value:A,onChange:e=>o(e.target.value),required:!0})]})]}),(0,r.jsxs)("div",{className:"grid gap-5 w-full",children:[r.jsx("label",{children:"Phone"}),r.jsx("input",{type:"text",className:"bg-slate-100 w-full py-2 px-3 outline-none rounded border-l-2 border-as",name:"phone",value:h,onChange:e=>p(e.target.value),required:!0})]}),(0,r.jsxs)("div",{className:"grid gap-5 w-full",children:[r.jsx("label",{children:"Subject"}),r.jsx("input",{type:"text",className:"bg-slate-100 w-full py-2 px-3 outline-none rounded border-l-2 border-as",name:"subject",value:u,onChange:e=>g(e.target.value),required:!0})]}),(0,r.jsxs)("div",{className:"grid gap-5 w-full",children:[r.jsx("label",{children:"Message"}),r.jsx("textarea",{className:"bg-slate-100 h-56 w-full py-2 px-3 outline-none rounded border-l-2 border-as",value:d,onChange:e=>c(e.target.value),required:!0})]}),r.jsx("div",{className:"w-full flex justify-end",children:r.jsx("button",{type:"submit",className:"px-5 py-2.5 text-sm rounded-lg duration-300 hover:-translate-y-1 text-white bg-as",children:"Submit"})})]})})]})})]})}},30266:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(53854);function i(){return r.jsx("div",{style:{zIndex:5},className:"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/30",children:(0,r.jsxs)("div",{className:"lds-roller",children:[r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{})]})})}},68934:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h,metadata:()=>g});var r=s(4656),i=s(58639),a=s.n(i);let n={src:"/_next/static/media/contactHero.86df417f.jpg",height:1141,width:1682,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABqEv/xAAWEAEBAQAAAAAAAAAAAAAAAAADAhP/2gAIAQEAAQUCpEz/AP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABcQAQADAAAAAAAAAAAAAAAAAAEAAhH/2gAIAQEABj8CEumqT//EABcQAQADAAAAAAAAAAAAAAAAAAEAEWH/2gAIAQEAAT8hbdQAyf/aAAwDAQACAAMAAAAQD//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxDVBv/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxBDUv/EABkQAQACAwAAAAAAAAAAAAAAAAEhMQARQf/aAAgBAQABPxAU+hJWWx5dZ//Z",blurWidth:8,blurHeight:5};var l=s(95153);let A=(0,l.createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\ANALOGUESHIFTS\www\components\application\contact-form.js`),{__esModule:o,$$typeof:d}=A,c=A.default;var u=s(17172);let g={title:"24/7 Contact Center | AnalogueShift",description:"Have a question for Analogueshifts? Our team is here to help. Contact us today to learn more about our recruitment services or to discuss your organization's hiring needs",openGraph:{title:"24/7 Contact Center | AnalogueShift",description:"Have a question for Analogueshifts? Our team is here to help. Contact us today to learn more about our recruitment services or to discuss your organization's hiring needs",url:"https://www.analogueshifts.com/contact",siteName:"AnalogueShifts",images:[{url:"/images/a4.jpg",width:800,height:600}],locale:"en_US",type:"website"},alternates:{canonical:"/contact"}};function h(){return(0,r.jsxs)(u.ZP,{children:[r.jsx("section",{className:"",children:r.jsx("div",{className:"container mx-auto py-5 px-3 md:px-9 xl:px-20",children:r.jsx("div",{className:"bg-white border-0 shadow rounded-lg overflow-hidden",children:(0,r.jsxs)("div",{className:"grid lg:grid-cols-12",children:[r.jsx("div",{className:"grid lg:col-span-6 p-7 lg:p-14",children:(0,r.jsxs)("div",{className:"grid justify-center lg:justify-start gap-5 lg:col-span-6",children:[r.jsx("h1",{className:"text-3xl md:text-4xl font-bold lg:leading-[50px] tracking-normal",children:"AnalogueShifts featured Contacts."}),r.jsx("h2",{className:"",children:"Thank you for your interest in Analogue Shifts! We are committed to providing exceptional talent recruitment and technical support services to help your business thrive. Whether you have inquiries, require assistance, or want to discuss potential collaboration, our team is here to assist you."})]})}),r.jsx("div",{className:"grid lg:col-span-6",children:r.jsx(a(),{className:"object-cover w-full",src:n,alt:"landing"})})]})})})}),r.jsx("section",{className:"",children:(0,r.jsxs)("div",{className:"container mx-auto py-5 px-3 md:px-9 xl:px-20",children:[r.jsx(c,{}),(0,r.jsxs)("div",{className:"grid lg:grid-cols-4 gap-5 py-20 px-5",children:[(0,r.jsxs)("div",{id:"card",className:"bg-white grid lg:col-span-1 p-5 gap-2 items-start h-full w-full shadow rounded",children:[r.jsx("div",{className:"flex justify-start items-start pb-2",children:r.jsx("span",{className:"bg-as text-white rounded p-2",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"})})})}),r.jsx("div",{className:"flex items-start text-lg font-bold",children:"Chat with us"}),r.jsx("p",{className:"flex items-start text-gray-500",children:"Chat live with one of our support specialists."})]}),(0,r.jsxs)("div",{id:"card",className:"bg-white grid lg:col-span-1 p-5 gap-2 items-start h-full w-full shadow rounded",children:[r.jsx("div",{className:"flex justify-start items-start pb-2",children:r.jsx("span",{className:"bg-as text-white rounded p-2",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})})})}),r.jsx("div",{className:"flex items-start text-lg font-bold",children:"Ask the community"}),r.jsx("p",{className:"flex items-start text-gray-500",children:"Explore our community forums and communicate with users."})]}),(0,r.jsxs)("div",{id:"card",className:"bg-white grid lg:col-span-1 p-5 gap-2 items-start h-full w-full shadow rounded",children:[r.jsx("div",{className:"flex justify-start items-start pb-2",children:r.jsx("span",{className:"bg-as text-white rounded p-2",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"})})})}),r.jsx("div",{className:"flex items-start text-lg font-bold",children:"Support center"}),r.jsx("p",{className:"flex items-start text-gray-500",children:"Browse FAQ's and support articles to find solutions."})]}),(0,r.jsxs)("div",{id:"card",className:"bg-white grid lg:col-span-1 p-5 gap-2 items-start h-full w-full shadow rounded",children:[r.jsx("div",{className:"flex justify-start items-start pb-2",children:r.jsx("span",{className:"bg-as text-white rounded p-2",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})})}),r.jsx("div",{className:"flex items-start text-lg font-bold",children:"Call us"}),(0,r.jsxs)("p",{className:"grid items-start text-gray-500",children:["Call us during normal business hours at",r.jsx("a",{href:"tel:+2348066708343",children:"+2348066708343"})]})]})]})]})})]})}},17172:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>A});var r=s(95153);let i=(0,r.createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\ANALOGUESHIFTS\www\app\layouts\guest-layout.js`),{__esModule:a,$$typeof:n}=i,l=i.default,A=l},58849:(e,t,s)=>{"use strict";let{createProxy:r}=s(95153);e.exports=r("C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\www\\node_modules\\next\\dist\\client\\image-component.js")},13144:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),s(99968);let r=s(51083),i=s(78684);function a(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var s;let l,A,o,{src:d,sizes:c,unoptimized:u=!1,priority:g=!1,loading:h,className:p,quality:m,width:x,height:f,fill:w=!1,style:v,onLoad:j,onLoadingComplete:b,placeholder:y="empty",blurDataURL:E,fetchPriority:N,layout:B,objectFit:C,objectPosition:S,lazyBoundary:z,lazyRoot:Q,...O}=e,{imgConf:P,showAltText:D,blurComplete:_,defaultLoader:I}=t,k=P||i.imageConfigDefault;if("allSizes"in k)l=k;else{let e=[...k.deviceSizes,...k.imageSizes].sort((e,t)=>e-t),t=k.deviceSizes.sort((e,t)=>e-t);l={...k,allSizes:e,deviceSizes:t}}let M=O.loader||I;delete O.loader,delete O.srcSet;let L="__next_img_default"in M;if(L){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=M;M=t=>{let{config:s,...r}=t;return e(r)}}if(B){"fill"===B&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[B];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[B];t&&!c&&(c=t)}let U="",q=n(x),H=n(f);if("object"==typeof(s=d)&&(a(s)||void 0!==s.src)){let e=a(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(A=e.blurWidth,o=e.blurHeight,E=E||e.blurDataURL,U=e.src,!w){if(q||H){if(q&&!H){let t=q/e.width;H=Math.round(e.height*t)}else if(!q&&H){let t=H/e.height;q=Math.round(e.width*t)}}else q=e.width,H=e.height}}let T=!g&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(u=!0,T=!1),l.unoptimized&&(u=!0),L&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(u=!0),g&&(N="high");let R=n(m),W=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:S}:{},D?{}:{color:"transparent"},v),F=_||"empty"===y?null:"blur"===y?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:q,heightInt:H,blurWidth:A,blurHeight:o,blurDataURL:E||"",objectFit:W.objectFit})+'")':'url("'+y+'")',G=F?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:F}:{},V=function(e){let{config:t,src:s,unoptimized:r,width:i,quality:a,sizes:n,loader:l}=e;if(r)return{src:s,srcSet:void 0,sizes:void 0};let{widths:A,kind:o}=function(e,t,s){let{deviceSizes:r,allSizes:i}=e;if(s){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(s);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:a,kind:"x"}}(t,i,n),d=A.length-1;return{sizes:n||"w"!==o?n:"100vw",srcSet:A.map((e,r)=>l({config:t,src:s,quality:a,width:e})+" "+("w"===o?e:r+1)+o).join(", "),src:l({config:t,src:s,quality:a,width:A[d]})}}({config:l,src:d,unoptimized:u,width:q,quality:R,sizes:c,loader:M}),J={...O,loading:T?"lazy":h,fetchPriority:N,width:q,height:H,decoding:"async",className:p,style:{...W,...G},sizes:V.sizes,srcSet:V.srcSet,src:V.src},Y={unoptimized:u,priority:g,placeholder:y,fill:w};return{props:J,meta:Y}}},51083:(e,t)=>{"use strict";function s(e){let{widthInt:t,heightInt:s,blurWidth:r,blurHeight:i,blurDataURL:a,objectFit:n}=e,l=r?40*r:t,A=i?40*i:s,o=l&&A?"viewBox='0 0 "+l+" "+A+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+o+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(o?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return s}})},78684:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{VALID_LOADERS:function(){return s},imageConfigDefault:function(){return r}});let s=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},35234:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{unstable_getImgProps:function(){return A},default:function(){return o}});let r=s(95196),i=s(13144),a=s(99968),n=s(58849),l=r._(s(55542)),A=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},o=n.Image},55542:(e,t)=>{"use strict";function s(e){let{config:t,src:s,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(s)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),s.__next_img_default=!0;let r=s},99968:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return s}});let s=e=>{}},58639:(e,t,s)=>{"use strict";e.exports=s(35234)},72975:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/_next/static/media/contactHero.86df417f.jpg",height:1141,width:1682,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABqEv/xAAWEAEBAQAAAAAAAAAAAAAAAAADAhP/2gAIAQEAAQUCpEz/AP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABcQAQADAAAAAAAAAAAAAAAAAAEAAhH/2gAIAQEABj8CEumqT//EABcQAQADAAAAAAAAAAAAAAAAAAEAEWH/2gAIAQEAAT8hbdQAyf/aAAwDAQACAAMAAAAQD//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxDVBv/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxBDUv/EABkQAQACAwAAAAAAAAAAAAAAAAEhMQARQf/aAAgBAQABPxAU+hJWWx5dZ//Z",blurWidth:8,blurHeight:5}},95196:(e,t,s)=>{"use strict";function r(e){return e&&e.__esModule?e:{default:e}}s.r(t),s.d(t,{_:()=>r,_interop_require_default:()=>r})}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[3271,7237,5548,8469,1830,4550],()=>s(41115));module.exports=r})();