(function(){"use strict";var e={9451:function(e,t,n){var o=n(9242),r=n(3396),i=n.p+"img/github.4dbd91b3.svg",a=n.p+"img/linkedin.c74745ab.svg",s=n.p+"img/infojobs.4955cc37.svg";const l=(0,r._)("h4",{class:"title"},"EDMO",-1),c={id:"links"},d=(0,r._)("a",{href:"https://github.com/edmaor",target:"_blank",rel:"noopener noreferrer",class:"link-img"},[(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,r._)("image",{"xlink:href":i,width:"100%",height:"100%"})])],-1),p=(0,r.uE)('<p class="invisible">CONTACT</p><div id="links"><a href="mailto:edmaor128@gmail.com" class="link material-symbols-outlined">mail</a><a href="https://www.linkedin.com/in/eduardo-martorell-ortu%C3%B1o/" target="_blank" rel="noopener noreferrer" class="link-img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><image xlink:href="'+a+'" width="100%" height="100%"></image></svg></a><a href="https://www.linkedin.com/in/eduardo-martorell-ortu%C3%B1o/" target="_blank" rel="noopener noreferrer" class="link-img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><image xlink:href="'+s+'" width="100%" height="100%"></image></svg></a></div>',2),h={id:"content"};function u(e,t,n,o,i,a){const s=(0,r.up)("router-link"),u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[l,(0,r._)("div",c,[(0,r.Wm)(s,{to:"/",class:"link material-symbols-outlined"},{default:(0,r.w5)((()=>[(0,r.Uk)("home")])),_:1}),(0,r.Wm)(s,{to:"/projects",class:"link material-symbols-outlined"},{default:(0,r.w5)((()=>[(0,r.Uk)("view_cozy")])),_:1}),d]),p]),(0,r._)("div",h,[(0,r.Wm)(u)])],64)}var g={data(){return{expanded:!0}},methods:{toggle_menu(){this.expanded=!this.expanded},menuToggled(){return this.expanded?"expanded":"collapsed"}}},m=n(89);const f=(0,m.Z)(g,[["render",u]]);var v=f,w=n(2483);const k=(0,r.uE)('<h1>Edu Martorell Ortuño</h1><div id="presentation"><h4 style="text-align:center;">Software Developer</h4><p>Hey there! I&#39;m Edu, a budding software developer with a fresh perspective and a hunger for knowledge. I&#39;m ready to tackle different projects and adapt to new technologies.</p><p>I have always seen myself as a blend of creative and logical thinking. From a young age, my fascination with understanding how things work, particularly computers and applications, has drawn me towards this field. Programming isn&#39;t just a career path for me; it&#39;s a genuine passion. I spend my free time exploring different coding concepts, experimenting with new languages, and delving into various frameworks and libraries. Whether it&#39;s reading programming books, following online tutorials, or participating in coding challenges, I&#39;m always looking for ways to improve and expand my knowledge.</p><p>Looking ahead, I want to master both front-end and back-end development, seamlessly bringing ideas to life. Becoming a full-stack developer will give me the versatility to tackle any project and contribute throughout the entire software development lifecycle.</p></div><div id="knowledge"><div class="knowledge"><h3 class="kn-title">Programming Languages</h3><h4>Java</h4><p></p><h4>Python</h4><p></p><hr><hr><h4>JavaScript</h4><p></p><h4>HTML</h4><p></p><h4>CSS</h4><p></p></div><div class="knowledge"><h3 class="kn-title">Databases</h3><h4>MongoDB</h4><p></p><h4>MySQL</h4></div><div class="knowledge"><h3 class="kn-title">Cloud Frameworks</h3><h4>Docker</h4><p></p><h4>AWS</h4><p>EC2</p></div><div class="knowledge"><h3 class="kn-title">Other Frameworks</h3><h4>VUE</h4><p></p></div><div class="knowledge"><h3 class="kn-title">Languages</h3><h4>Spanish</h4><p>Native</p><h4>Catalan</h4><p>Native</p><h4>English</h4><p>B2</p></div></div><hr><h2>My Github contributions last year</h2><img class="chart" src="https://ghchart.rshah.org/edmaor" alt="Edu&#39;s Github chart">',6);function b(e,t,n,o,r,i){return k}var y={};const j=(0,m.Z)(y,[["render",b]]);var _=j;const x=(0,r._)("h1",null,"My projects",-1),O={id:"myprojects"},D=(0,r._)("hr",null,null,-1),E=(0,r._)("h1",null,"Other Programs",-1),C={id:"myprojects"};function L(e,t,n,o,i,a){const s=(0,r.up)("ProjectCard");return(0,r.wg)(),(0,r.iD)(r.HY,null,[x,(0,r._)("div",O,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.projectList,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id},[(0,r.Wm)(s,{project:e},null,8,["project"])])))),128))]),D,E,(0,r._)("div",C,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.programs,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id})))),128))])],64)}var P=n(7139);const S={class:"project-card"},T={class:"pc-title"},M={class:"pc-description"},B=["src"],H=["href"];function I(e,t,n,o,i,a){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("h2",T,(0,P.zw)(n.project.id),1),(0,r._)("p",M,(0,P.zw)(n.project.description),1),(0,r._)("img",{src:n.project.img,alt:""},null,8,B),(0,r.Wm)(s,{class:"pc-button",to:"/project/"+n.project.id},{default:(0,r.w5)((()=>[(0,r.Uk)("DETAILS")])),_:1},8,["to"]),n.project.url?((0,r.wg)(),(0,r.iD)("a",{key:0,class:"pc-button",href:n.project.url,target:"_blank",rel:"noopener noreferrer"},"SITE",8,H)):(0,r.kq)("",!0)])}var W={props:["project"]};const Y=(0,m.Z)(W,[["render",I]]);var z=Y,A=JSON.parse('[{"id":"COCTELEA","img":"https://www.coctelea.app/img/icon.87510a95.png","url":"https://www.coctelea.app","description":"Discover, learn, create and share cocktails with everyone","documentation":"coctelea.pdf"},{"id":"MYCOCTELEA","description":"Discover, learn, create and share cocktails with everyone"}]'),R={components:{ProjectCard:z},data(){return{projectList:A,programs:[]}}};const U=(0,m.Z)(R,[["render",L]]);var Z=U;const q={class:"app-header"},F={key:0},N={id:"p-documentation"};function J(e,t,n,o,i,a){const s=(0,r.up)("vue-pdf-embed");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",q,[i.isLoading?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Uk)(" Loading... ")],64)):(0,r.kq)("",!0)]),i.project?((0,r.wg)(),(0,r.iD)("div",F,[(0,r._)("h1",null,(0,P.zw)(i.project.id),1),(0,r._)("h3",null,(0,P.zw)(i.project.description),1),(0,r._)("div",N,[(0,r.Wm)(s,{source:i.documentationPath,onRendered:a.handleDocumentRender,width:720},null,8,["source","onRendered"])])])):(0,r.kq)("",!0)],64)}var G=n(3627),K=n.n(G),V={data(){return{project:null,isLoading:!0,documentationPath:""}},components:{VuePdfEmbed:K()},mounted(){const e=this.$route.params.pid.toLowerCase();this.project=A.find((t=>t.id.toLowerCase()===e)),this.documentationPath="https://raw.githubusercontent.com/edmaor/porfolio/d681b7701c48d0a96aabadfb6c2a5e61aa21c96c/resources/data/documentation/"+this.project.documentation},methods:{handleDocumentRender(e){console.log(e),this.isLoading=!1},handlePasswordRequest(e,t){e(prompt(t?"Enter password again":"Enter password"))}}};const Q=(0,m.Z)(V,[["render",J]]);var $=Q;const X=[{path:"/",name:"home",component:_},{path:"/projects",name:"projects",component:Z},{path:"/project/:pid",name:"project",component:$}],ee=(0,w.p7)({history:(0,w.PO)("/"),routes:X});var te=ee;(0,o.ri)(v).use(te).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var d=l(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkporfolio"]=self["webpackChunkporfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9451)}));o=n.O(o)})();
//# sourceMappingURL=app.e7678c66.js.map