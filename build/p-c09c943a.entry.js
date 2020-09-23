import{e as t,r as a,h as s,H as e,g as i}from"./p-38f9299d.js";import{g as n}from"./p-ddb7bee1.js";const r={},o={},c={s:16,m:24,l:32};const l=class{constructor(t){a(this,t),this.icon=null,this.mirrored=!1,this.scale="m",this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null)}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,mirrored:a,pathData:i,scale:r,textLabel:o}=this,l=n(t),p=c[r],m=!!o,h=[].concat(i||"");return s(e,{"aria-label":m?o:null,role:m?"img":null},s("svg",{class:{mirrored:"rtl"===l&&a,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${p} ${p}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},h.map(t=>s("path","string"==typeof t?{d:t}:{d:t.d,opacity:"opacity"in t?t.opacity:1}))))}async loadIconPathData(){const{icon:a,scale:s,visible:e}=this;a&&e&&(this.pathData=await async function({icon:a,scale:s}){const e=c[s],i=function(t){const a=!isNaN(Number(t.charAt(0))),s=t.split("-");return 1===s.length?a?"i"+t:t:s.map((t,s)=>0===s?a?"i"+t.toUpperCase():t:t.charAt(0).toUpperCase()+t.slice(1)).join("")}(a),n="F"===i.charAt(i.length-1),l=`${n?i.substring(0,i.length-1):i}${e}${n?"F":""}`;if(r[l])return r[l];o[l]||(o[l]=fetch(t(`./assets/${l}.json`)).then(t=>t.json()).catch(()=>(console.error(`"${l}" is not a valid calcite-ui-icon name`),"")));const p=await o[l];return r[l]=p,p}({icon:a,scale:s}))}waitUntilVisible(t){"undefined"!=typeof window&&window.IntersectionObserver?(this.intersectionObserver=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),this.intersectionObserver.observe(this.el)):t()}static get assetsDirs(){return["assets"]}get el(){return i(this)}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}};l.style="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){height:16px;min-height:16px;width:16px;min-width:16px}:host([scale=m]){height:24px;min-height:24px;width:24px;min-width:24px}:host([scale=l]){height:32px;min-height:32px;width:32px;min-width:32px}.mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";export{l as calcite_icon}