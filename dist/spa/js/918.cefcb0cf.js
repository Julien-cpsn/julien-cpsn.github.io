(self["webpackChunknotes"]=self["webpackChunknotes"]||[]).push([[918],{8003:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>H});l(71);var o=l(3673),i=l(2323),a=l(8880);const r={class:"q-mx-xs"},s=(0,o.Uk)("Écrire en gras"),n=(0,o.Uk)("Écrire en italique"),d=(0,o.Uk)("Souligner du texte"),c={class:"q-mx-xs"},m=(0,o.Uk)("Insérer un type de texte"),p=(0,o.Uk)("Titre 1"),u=(0,o.Uk)("Titre 2"),w=(0,o.Uk)("Titre 3"),f=(0,o.Uk)("Insérer un bloc de code"),x=(0,o.Uk)("Insérer une citation"),g={class:"q-mx-xs"},k=(0,o.Uk)("Copier"),_=(0,o.Uk)("Télécharger le fichier"),h=(0,o.Uk)("Importer un fichier"),b={class:"q-mx-xs"},v=(0,o.Uk)("Télécharger en PDF");function S(e,t,l,S,W,q){const y=(0,o.up)("q-tooltip"),C=(0,o.up)("q-btn"),M=(0,o.up)("q-separator"),T=(0,o.up)("q-item-label"),Z=(0,o.up)("q-item-section"),U=(0,o.up)("q-item"),D=(0,o.up)("q-list"),j=(0,o.up)("q-btn-dropdown"),Q=(0,o.up)("q-markdown"),z=(0,o.up)("q-scroll-area"),F=(0,o.up)("q-splitter"),A=(0,o.up)("q-page"),V=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(A,{class:"flex column"},{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,i.C_)(["full-width flex row items-center q-py-xs q-px-sm",e.$q.dark.isActive?"bg-grey-10":"bg-grey-2"]),style:{height:"5vh"}},[(0,o._)("div",r,[(0,o.Wm)(C,{flat:"",size:"sm",padding:"xs",icon:"format_bold",onClick:t[0]||(t[0]=t=>e.formatSelectionDouble("**"))},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"text-no-wrap"},{default:(0,o.w5)((()=>[s])),_:1})])),_:1}),(0,o.Wm)(C,{flat:"",size:"sm",padding:"xs",icon:"format_italic",onClick:t[1]||(t[1]=t=>e.formatSelectionDouble("_"))},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"text-no-wrap"},{default:(0,o.w5)((()=>[n])),_:1})])),_:1}),(0,o.Wm)(C,{flat:"",size:"sm",padding:"xs",icon:"format_underline",onClick:t[2]||(t[2]=t=>e.formatSelectionDouble("~~"))},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"text-no-wrap"},{default:(0,o.w5)((()=>[d])),_:1})])),_:1})]),(0,o.Wm)(M,{vertical:"",class:"q-mx-xs",style:{width:"0.5px"}}),(0,o._)("div",c,[(0,o.Wm)(j,{flat:"",size:"sm",padding:"xs",icon:"format_size","no-caps":""},{label:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"text-no-wrap"},{default:(0,o.w5)((()=>[m])),_:1})])),default:(0,o.w5)((()=>[(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[(0,o.wy)(((0,o.wg)(),(0,o.j4)(U,{clickable:"",onClick:t[3]||(t[3]=t=>e.formatSelectionSimple("#"))},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,{class:"text-h5"},{default:(0,o.w5)((()=>[p])),_:1})])),_:1})])),_:1})),[[V]]),(0,o.wy)(((0,o.wg)(),(0,o.j4)(U,{clickable:"",onClick:t[4]||(t[4]=t=>e.formatSelectionSimple("##"))},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,{class:"text-h6"},{default:(0,o.w5)((()=>[u])),_:1})])),_:1})])),_:1})),[[V]]),(0,o.wy)(((0,o.wg)(),(0,o.j4)(U,{clickable:"",onClick:t[5]||(t[5]=t=>e.formatSelectionSimple("###"))},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,{class:"text-subtitle2"},{default:(0,o.w5)((()=>[w])),_:1})])),_:1})])),_:1})),[[V]])])),_:1})])),_:1}),(0,o.Wm)(C,{flat:"",size:"sm",padding:"xs",icon:"code",onClick:t[6]||(t[6]=t=>e.formatSelectionDouble("\n```\n"))},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"text-no-wrap"},{default:(0,o.w5)((()=>[f])),_:1})])),_:1}),(0,o.Wm)(C,{flat:"",size:"sm",padding:"xs",icon:"format_quote",onClick:t[7]||(t[7]=t=>e.formatSelectionSimple(">"))},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"text-no-wrap"},{default:(0,o.w5)((()=>[x])),_:1})])),_:1})]),(0,o.Wm)(M,{vertical:"",class:"q-mx-xs",style:{width:"0.5px"}}),(0,o._)("div",g,[(0,o.Wm)(C,{flat:"",size:"sm",padding:"xs",icon:"content_copy",onClick:e.copyMarkdownToClipboard},{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[k])),_:1})])),_:1},8,["onClick"]),(0,o.Wm)(C,{flat:"",size:"sm",padding:"xs",icon:"file_download",onClick:e.saveMarkdownFile,disable:!e.$store.getters["markdown/isFileNameValid"]},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"text-no-wrap"},{default:(0,o.w5)((()=>[_])),_:1})])),_:1},8,["onClick","disable"]),(0,o.Wm)(C,{flat:"",size:"sm",padding:"xs",icon:"file_upload"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[h])),_:1})])),_:1})]),(0,o.Wm)(M,{vertical:"",class:"q-mx-xs",style:{width:"0.5px"}}),(0,o._)("div",b,[(0,o.Wm)(C,{flat:"",size:"sm",padding:"xs",icon:"picture_as_pdf",disable:!e.$store.getters["markdown/isFileNameValid"]},{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[v])),_:1})])),_:1},8,["disable"])])],2),(0,o.Wm)(F,{modelValue:e.splitterModel,"onUpdate:modelValue":[t[13]||(t[13]=t=>e.splitterModel=t),e.roundSplitterModel],limits:[25,75],class:"full-width flex row",style:{height:"88vh"},"separator-style":{width:"1px"}},{before:(0,o.w5)((()=>[(0,o.wy)((0,o._)("textarea",{ref:"editorArea",placeholder:"Texte","onUpdate:modelValue":t[8]||(t[8]=t=>e.editorText=t),class:"full-width editor q-pt-lg q-pb-lg q-pl-lg",style:{"min-height":"88.1vh"},type:"textarea",onKeydown:[t[9]||(t[9]=(0,a.D2)((0,a.iM)((t=>e.formatSelectionDouble("**")),["ctrl","prevent","stop"]),["b"])),t[10]||(t[10]=(0,a.D2)((0,a.iM)((t=>e.formatSelectionDouble("_")),["ctrl","prevent","stop"]),["i"])),t[11]||(t[11]=(0,a.D2)((0,a.iM)((t=>e.formatSelectionDouble("~~")),["ctrl","prevent","stop"]),["u"])),t[12]||(t[12]=(0,a.D2)((0,a.iM)(((...t)=>e.saveMarkdownFile&&e.saveMarkdownFile(...t)),["ctrl","prevent","stop"]),["s"]))]},null,544),[[a.nr,e.editorText]])])),after:(0,o.w5)((()=>[(0,o.Wm)(z,{ref:"markdownScrollArea",style:{height:"88vh",border:"1px solid rgba(0, 0, 0, 0.12)","border-left":"none !important"},visible:!1,"thumb-style":{display:"none"}},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{src:e.editorText,class:"full-width full-height markdown text-left q-pt-sm q-px-lg"},null,8,["src"])])),_:1},512)])),_:1},8,["modelValue","onUpdate:modelValue"])])),_:1})}var W=l(1959),q=l(1038),y=l(1914),C=l(2841),M=l(6417);const T=(0,o.aZ)({name:"MarkdownEditor",components:{QMarkdown:q.QMarkdown},setup(){const e=(0,W.iH)(null);return{splitterModel:(0,W.iH)(45),markdownScrollArea:e}},mounted(){this.$refs.editorArea.addEventListener("scroll",(e=>{this.markdownScrollArea.setScrollPosition("vertical",.995*e.target.scrollTop*this.markdownScrollArea.getScroll().verticalSize/e.target.scrollHeight)}),!0)},computed:{editorText:{get(){return this.$store.state.markdown.editorText},set(e){this.$store.commit("markdown/setEditorText",e)}}},methods:{formatSelectionSimple(e){window.getSelection()&&document.execCommand("insertText",!1,e+" "+window.getSelection().toString())},formatSelectionDouble(e){window.getSelection()&&document.execCommand("insertText",!1,e+window.getSelection().toString()+e)},copyMarkdownToClipboard(){(0,y.Z)(this.editorText).then((()=>{M.Z.create({type:"positive",message:"Texte Markdown copié",timeout:400})})).catch((()=>{M.Z.create({type:"negative",message:"Le Markdown n'a pas pu être copié",timeout:400})}))},saveMarkdownFile(){if(!this.$store.getters["markdown/isFileNameValid"])return;const e=(0,C.Z)(this.$store.state.markdown.fileName+".md",this.editorText);!0!==e&&M.Z.create({type:"positive",message:"Le fichier n'a pas pu être enregistré",time:400})},roundSplitterModel(e){e<=47.5&&e>=42.5&&(this.splitterModel=45)}}});var Z=l(4260),U=l(4379),D=l(2165),j=l(8870),Q=l(5869),z=l(4858),F=l(7011),A=l(3414),V=l(2035),$=l(2350),I=l(218),L=l(7704),N=l(677),E=l(7518),O=l.n(E);const P=(0,Z.Z)(T,[["render",S]]),H=P;O()(T,"components",{QPage:U.Z,QBtn:D.Z,QTooltip:j.Z,QSeparator:Q.Z,QBtnDropdown:z.Z,QList:F.Z,QItem:A.Z,QItemSection:V.Z,QItemLabel:$.Z,QSplitter:I.Z,QScrollArea:L.Z}),O()(T,"directives",{ClosePopup:N.Z})},5240:(e,t,l)=>{var o={"./bmp":2505,"./bmp.js":2505,"./gif":518,"./gif.js":518,"./jpg":7290,"./jpg.js":7290,"./png":7362,"./png.js":7362,"./psd":6857,"./psd.js":6857,"./svg":50,"./svg.js":50,"./tiff":9146,"./tiff.js":9146,"./webp":5171,"./webp.js":5171};function i(e){var t=a(e);return l(t)}function a(e){if(!l.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=5240},6098:()=>{},6981:()=>{},7103:()=>{}}]);