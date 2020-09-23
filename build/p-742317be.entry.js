import{r as t,c as i,h as e,H as s,g as a}from"./p-38f9299d.js";const o=class{constructor(e){t(this,e),this.calcitePaginationUpdate=i(this,"calcitePaginationUpdate",7),this.num=20,this.start=1,this.total=0,this.textLabelNext="next",this.textLabelPrevious="previous",this.scale="m",this.previousClicked=()=>{this.previousPage().then(),this.emitUpdate()},this.nextClicked=()=>{this.nextPage(),this.emitUpdate()}}connectedCallback(){["s","m","l"].includes(this.scale)||(this.scale="m")}async nextPage(){this.start=Math.min(this.getLastStart(),this.start+this.num)}async previousPage(){this.start=Math.max(1,this.start-this.num)}getLastStart(){const{total:t,num:i}=this;return 1+(t%i==0?t-i:Math.floor(t/i)*i)}showLeftEllipsis(){return Math.floor(this.start/this.num)>3}showRightEllipsis(){return(this.total-this.start)/this.num>3}emitUpdate(){this.calcitePaginationUpdate.emit({start:this.start,total:this.total,num:this.num})}renderPages(){const t=this.getLastStart();let i,e;this.total/this.num<=5?(e=1+this.num,i=t-this.num):this.start/this.num<4?(e=1+this.num,i=1+4*this.num):this.start+3*this.num>=this.total?(e=t-4*this.num,i=t-this.num):(e=this.start-this.num,i=this.start+this.num);const s=[];for(;e<=i;)s.push(e),e+=this.num;return s.map(t=>this.renderPage(t))}renderPage(t){const i=Math.floor(t/this.num)+1;return e("button",{class:{page:!0,"is-selected":t===this.start},onClick:()=>{this.start=t,this.emitUpdate()}},i)}renderLeftEllipsis(t){if(this.total/this.num>5&&this.showLeftEllipsis())return e("span",{class:"ellipsis ellipsis--start"},e("calcite-icon",{icon:"ellipsis",scale:t}))}renderRightEllipsis(t){if(this.total/this.num>5&&this.showRightEllipsis())return e("span",{class:"ellipsis ellipsis--end"},e("calcite-icon",{icon:"ellipsis",scale:t}))}render(){const{total:t,num:i,start:a}=this,o="l"===this.scale?"m":"s";return e(s,null,e("button",{"aria-label":this.textLabelPrevious,class:{previous:!0,"is-disabled":a<i},disabled:a<i,onClick:this.previousClicked},e("calcite-icon",{icon:"chevronLeft",scale:o})),t>i?this.renderPage(1):null,this.renderLeftEllipsis(o),this.renderPages(),this.renderRightEllipsis(o),this.renderPage(this.getLastStart()),e("button",{"aria-label":this.textLabelNext,class:{next:!0,"is-disabled":a+i>=t},disabled:a+i>=t,onClick:this.nextClicked},e("calcite-icon",{icon:"chevronRight",scale:o})))}get el(){return a(this)}};o.style="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([scale=s]){--calcite-pagination-spacing:4px 8px}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{font-size:12px}:host([scale=m]){--calcite-pagination-spacing:8px 12px}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{font-size:16px}:host([scale=l]){--calcite-pagination-spacing:12px 16px}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{font-size:20px}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-writing-mode:lr-tb;-webkit-writing-mode:horizontal-tb;writing-mode:horizontal-tb}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.previous,.next,.page{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:transparent;border:none;border-top:3px solid transparent;border-bottom:3px solid transparent;font-family:inherit;font-size:1rem;line-height:1.5;color:var(--calcite-ui-text-3);cursor:pointer}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.page:hover{border-bottom-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:500;color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-blue-1)}.previous,.next{padding:var(--calcite-pagination-spacing)}.previous:hover,.next:hover{color:var(--calcite-ui-blue-1);background-color:var(--calcite-ui-foreground-2)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{background-color:transparent;pointer-events:none}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:0.4}.next{margin-right:0}.page,.ellipsis{padding:var(--calcite-pagination-spacing)}.ellipsis{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;color:var(--calcite-ui-text-3)}";export{o as calcite_pagination}