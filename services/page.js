(()=>{var e={};e.id=469,e.ids=[469],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5861:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>l}),i(2441),i(6547),i(5133);var s=i(9193),n=i(1854),a=i(3997),r=i.n(a),o=i(3320),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);i.d(t,c);let l=["",{children:["services",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,2441)),"C:\\Users\\whims\\OneDrive\\Desktop\\nextjs_portfolio\\src\\app\\services\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,5529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,6547)),"C:\\Users\\whims\\OneDrive\\Desktop\\nextjs_portfolio\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,5133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,5529))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\whims\\OneDrive\\Desktop\\nextjs_portfolio\\src\\app\\services\\page.jsx"],p="/services/page",m={require:i,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/services/page",pathname:"/services",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},6538:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2322,23)),Promise.resolve().then(i.bind(i,806)),Promise.resolve().then(i.bind(i,5941))},5941:(e,t,i)=>{"use strict";i.d(t,{MotionDiv:()=>a,MotionImage:()=>r});var s=i(7552),n=i(2761);let a=(0,s.E)(s.E.div),r=(0,s.E)(n.default)},2441:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var s=i(9703),n=i(3330),a=i(3561),r=i(543),o=i(4148),c=i(9741);function l(){return s.jsx("div",{className:"container min-h-screen grid place-items-center pb-7 pt-32",children:(0,s.jsxs)("div",{children:[(0,s.jsxs)(c.y,{initial:"initial",animate:"animate",variants:o.o.moveUp,transition:o.e.moveUp,className:"text-center",children:[(0,s.jsxs)("h3",{children:["Services ",s.jsx("span",{children:"Offered"})]}),s.jsx("p",{className:"text-accent-foreground mt-5 sm:w-2/3 mx-auto"})]}),s.jsx("div",{className:"flex flex-wrap justify-center gap-8 mt-11",children:a.AU.map((e,t)=>(0,s.jsxs)(c.y,{initial:"initial",animate:"animate",variants:o.o.moveRight,transition:{...o.o.moveRight,delay:.6*t},className:"bg-accent p-5 cursor-pointer  overflow-hidden group h-80 rounded-3xl w-64 flex flex-col justify-between",children:[s.jsx(r.default,{src:e.icon,width:55,height:55,alt:"3d",className:"group-hover:scale-125 duration-200"}),(0,s.jsxs)("div",{className:"translate-y-16 group-hover:translate-y-0 duration-500 ease-out",children:[(0,s.jsxs)("h3",{className:"mb-2",children:[s.jsx("span",{children:e.name?.split(" ")[0]})," ",e.name?.split(" ")[1]]}),s.jsx("small",{className:"text-accent-foreground",children:e.description}),s.jsx(n.zx,{variant:"plain",className:"block ml-auto mt-7  ",size:"sm",children:"Learn More"})]})]},e.id))})]})})}},3561:(e,t,i)=>{"use strict";i.d(t,{AU:()=>n,hQ:()=>s});let s=Object.freeze([{id:1,icon:"/int.png",name:"Instagram"},{id:2,icon:"/face.png",name:"Facebook"},{id:3,icon:"/in.png",name:"LinkedIn"},{id:4,icon:"/x.png",name:"X"}]);Object.freeze([{id:1,name:"Home",path:"/"},{id:2,name:"Resume",path:"/resume"},{id:3,name:"Services",path:"/services"},{id:4,name:"Projects",path:"/projects"},{id:5,name:"Contact Us",path:"/contact"}]);let n=Object.freeze([{id:1,name:"Front-end",icon:"/design.png",description:"Crafting Stunning, User-Centric Websites with Modern Front-End Technologies."},{id:2,name:"Back-end",icon:"/brand.png",description:"Powering Your Online Success with Robust, Scalable, and Secure Back-End Solutions."},{id:3,name:"On-Page SEO",icon:"/3d.png",description:"Optimize Your Website for Search Engines and Attract More Organic Traffic."}])},4148:(e,t,i)=>{"use strict";i.d(t,{e:()=>n,o:()=>s});let s={scale:{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1}},moveUp:{initial:{y:20,opacity:0},animate:{y:0,opacity:1}},moveDown:{initial:{y:-20,opacity:0},animate:{y:0,opacity:1}},moveLeft:{initial:{x:860,opacity:0},animate:{x:0,opacity:1}},moveRight:{initial:{x:-20,opacity:0},animate:{x:0,opacity:1}},rise:{initial:{opacity:0},animate:{opacity:1}}},n={scale:{duration:.9},moveUp:{duration:.9,delay:1},moveDown:{duration:.9,delay:1},moveLeft:{duration:.9},moveRight:{duration:.9},rise:{duration:2}}},9741:(e,t,i)=>{"use strict";i.d(t,{J:()=>c,y:()=>o});var s=i(2334);let n=(0,s.createProxy)(String.raw`C:\Users\whims\OneDrive\Desktop\nextjs_portfolio\src\utils\motionTags.jsx`),{__esModule:a,$$typeof:r}=n;n.default;let o=(0,s.createProxy)(String.raw`C:\Users\whims\OneDrive\Desktop\nextjs_portfolio\src\utils\motionTags.jsx#MotionDiv`),c=(0,s.createProxy)(String.raw`C:\Users\whims\OneDrive\Desktop\nextjs_portfolio\src\utils\motionTags.jsx#MotionImage`)},5529:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var s=i(9614);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),s=t.X(0,[357,507,614,273],()=>i(5861));module.exports=s})();