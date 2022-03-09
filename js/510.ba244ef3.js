(self["webpackChunknotes"]=self["webpackChunknotes"]||[]).push([[510],{5481:(e,t,o)=>{"use strict";o.d(t,{Z:()=>g});var n=o(3673);function r(e,t,o,r,s,a){const l=(0,n.up)("q-btn"),d=(0,n.up)("q-color"),m=(0,n.up)("q-btn-dropdown"),i=(0,n.up)("q-markdown"),u=(0,n.up)("q-tooltip"),c=(0,n.up)("q-icon");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(m,{flat:"",dense:"",class:"rounded-borders q-mr-xs",label:"Theme","no-caps":""},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{flat:"",size:"xs",padding:"xs",label:"Reset",onClick:t[0]||(t[0]=e=>a.themeColor="#1976d2")}),(0,n.Wm)(d,{modelValue:a.themeColor,"onUpdate:modelValue":t[1]||(t[1]=e=>a.themeColor=e),"no-header-tabs":"",class:"my-picker"},null,8,["modelValue"])])),_:1}),(0,n.Wm)(l,{flat:"",round:"",class:"q-mr-sm",size:"md",padding:"sm",icon:a.darkMode?"light_mode":"dark_mode",onClick:a.toggleDarkMode},null,8,["icon","onClick"]),(0,n.Wm)(c,{class:"q-mr-sm",name:"info",size:"sm"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{ref:"TODOS",id:"TODOS",class:"text-no-wrap","hide-delay":1e3},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{class:"q-px-sm",src:r.ABOUT},null,8,["src"])])),_:1},512)])),_:1})],64)}var s=o(4398),a=o(1038);const l="### Fonctionnalités à venir\n---\nWord -> markdown, [Library](https://github.com/mwilliamson/mammoth.js/)\nmarkdown -> Word\nmarkdown -> PDF (real PDF, no ugly canvas)\nimport markdown\nfull markdown command set (bold, italic, underline, ...)\nmultiples files with dedicated page to manage them\ndynamic Table Of Content (TOC)\nLaTeX implementation ?\n\n### Bibliothèques utilisées\n---\nVue JS\nQuasar\nMD -> HTML [Showdown JS](https://github.com/showdownjs/showdown)\n",d={name:"ToolbarActions",components:{QMarkdown:a.QMarkdown},setup(){return{ABOUT:l}},mounted(){this.$q.dark.set(this.darkMode),(0,s.Z)("primary",this.themeColor)},computed:{fileName:{get(){return this.$store.state.markdown.fileName},set(e){this.$store.commit("markdown/setFileName",e)}},darkMode(){return this.$store.state.user.darkMode},themeColor:{get(){return this.$store.state.user.themeColor},set(e){this.$store.commit("user/setThemeColor",e)}}},methods:{toggleDarkMode(){this.$store.commit("user/toggleDarkMode")}},watch:{darkMode(){this.$q.dark.set(this.darkMode)},themeColor(e){(0,s.Z)("primary",e)}}};var m=o(4260),i=o(4858),u=o(2165),c=o(3075),p=o(4554),h=o(8870),w=o(7518),f=o.n(w);const k=(0,m.Z)(d,[["render",r],["__scopeId","data-v-ff81698e"]]),g=k;f()(d,"components",{QBtnDropdown:i.Z,QBtn:u.Z,QColor:c.Z,QIcon:p.Z,QTooltip:h.Z})},5048:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>g});var n=o(3673);const r=(0,n._)("div",null,"Julien C.",-1);function s(e,t,o,s,a,l){const d=(0,n.up)("q-icon"),m=(0,n.up)("router-link"),i=(0,n.up)("q-space"),u=(0,n.up)("toolbar-actions"),c=(0,n.up)("q-toolbar"),p=(0,n.up)("q-header"),h=(0,n.up)("router-view"),w=(0,n.up)("q-page-container"),f=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(f,{view:"lHh Lpr lFf"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{to:"/",class:"flex column justify-center q-ml-xs q-mr-md text-weight-thin text-white",style:{"text-decoration":"none"}},{default:(0,n.w5)((()=>[r,(0,n.Wm)(d,{name:"person"})])),_:1}),(0,n.Wm)(i),(0,n.Wm)(u)])),_:1})])),_:1}),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h)])),_:1})])),_:1})}var a=o(5481);const l=(0,n.aZ)({name:"MainLayout",components:{ToolbarActions:a.Z},computed:{fileName:{get(){return this.$store.state.markdown.fileName},set(e){this.$store.commit("markdown/setFileName",e)}},darkMode(){return this.$store.state.user.darkMode}}});var d=o(4260),m=o(9214),i=o(3812),u=o(9570),c=o(4554),p=o(2025),h=o(8039),w=o(7518),f=o.n(w);const k=(0,d.Z)(l,[["render",s]]),g=k;f()(l,"components",{QLayout:m.Z,QHeader:i.Z,QToolbar:u.Z,QIcon:c.Z,QSpace:p.Z,QPageContainer:h.Z})},5240:(e,t,o)=>{var n={"./bmp":2505,"./bmp.js":2505,"./gif":518,"./gif.js":518,"./jpg":7290,"./jpg.js":7290,"./png":7362,"./png.js":7362,"./psd":6857,"./psd.js":6857,"./svg":50,"./svg.js":50,"./tiff":9146,"./tiff.js":9146,"./webp":5171,"./webp.js":5171};function r(e){var t=s(e);return o(t)}function s(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=5240},6098:()=>{},6981:()=>{},7103:()=>{}}]);