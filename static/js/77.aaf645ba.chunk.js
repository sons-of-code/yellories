"use strict";(self.webpackChunkyellories=self.webpackChunkyellories||[]).push([[77],{714:function(e,t,r){var n=r(540),a=r(767),l=r(696),i=r(437),c=r(847);t.A=function(e){var t=e.active,r=(0,a.Zp)();return n.createElement("ul",{className:"navigation"},n.createElement("li",null,n.createElement("button",{key:"read-button",className:"".concat("read"===t?"active":" secondary"),onClick:function(){return r("/")}},n.createElement(l.A,null))),n.createElement("li",null,n.createElement("button",{key:"profile-button",className:"".concat("profile"===t?"active":"secondary"),onClick:function(){return r("/profile")}},n.createElement(i.A,null))),n.createElement("li",null,n.createElement("button",{key:"write-button",className:"".concat("write"===t?"active":"secondary"),onClick:function(){return r("/write")}},n.createElement(c.A,null))))}},77:function(e,t,r){r.r(t);var n=r(540),a=r(767),l=r(644),i=r(468),c=r(325),o=r(193),u=r(50),s=r(714);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,i,c=[],o=!0,u=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;o=!1}else for(;!(o=(n=l.call(r)).done)&&(c.push(n.value),c.length!==t);o=!0);}catch(e){u=!0,a=e}finally{try{if(!o&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}t.default=(0,i.Ng)((function(e){return{publishedStory:e.stories.publishedStory,publishedStoryPreviewList:e.stories.publishedStoryPreviewList,userInfo:e.stories.userInfo}}),(function(e){return{callPublishedStoryPreviewList:(0,l.zH)(u.o1.callPublishedStoryPreviewList,e)}}))((function(e){var t=e.callPublishedStoryPreviewList,r=e.publishedStory,l=e.publishedStoryPreviewList,i=(0,a.Zp)(),m=d((0,n.useState)(""),2),f=m[0],y=m[1],v=(null==l?void 0:l.items.filter((function(e){var t=(0,u.SJ)(e.titleBase64),r=e.alias,n=(0,u.SJ)(e.introBase64),a=new RegExp(f,"gi");return(0,u.Ie)(e.votes)&&((0,u.Ie)(f)||t&&a.test(t)||r&&a.test(r)||n&&a.test(n))})))||[],h=function(e){var t=e.currentTarget.dataset,r=t.title,n=t.uuid;i("/read/".concat((0,u.SJ)(r),"/r/").concat(n))};return n.createElement(n.Fragment,null,n.createElement("div",{className:"content read"},n.createElement("div",{className:"swiper-container"},n.createElement(c.RC,{initialSlide:Math.max(v.findIndex((function(e){return e.UUID===(null==r?void 0:r.UUID)})),0),effect:"cards",grabCursor:!0,modules:[o.ZD],onReachEnd:function(e){(0,u.Ie)(v)?t(10):(0,u.Ie)(null==l?void 0:l.nextToken)||t(10,l.nextToken)}},v.map((function(e,t){return n.createElement(c.qr,{key:"story-".concat(t)},n.createElement("div",null,n.createElement("div",null,n.createElement("h2",{dangerouslySetInnerHTML:{__html:e.titleBase64?(0,u.SJ)(e.titleBase64).replace(/\n/g,"<br/>"):""}}),n.createElement("h3",{dangerouslySetInnerHTML:{__html:e.alias?e.alias.replace(/\n/g,"<br/>"):""}}),n.createElement("div",{dangerouslySetInnerHTML:{__html:e.introBase64?(0,u.SJ)(e.introBase64).replace(/\n/g,"<br/>"):""}})),n.createElement("button",{className:"outline","data-title":e.titleBase64,"data-uuid":e.UUID,onClick:h},"Read more")))})))),n.createElement("input",{type:"search",name:"search",placeholder:"Search...","aria-label":"search",onChange:function(e){var t=e.currentTarget.value;y(t)}})),n.createElement(s.A,{active:"read"}))}))}}]);