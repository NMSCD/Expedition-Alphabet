(this["webpackJsonpnomanssky-expeditions-alphabet"]=this["webpackJsonpnomanssky-expeditions-alphabet"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"name":"nomanssky-expeditions-alphabet","homepage":"https://alphabet.nmscd.com","version":"0.2.5","private":false,"scripts":{"start":"react-scripts start","predeploy":"npm run build","deploy":"gh-pages -d build","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"dependencies":{"classnames":"^2.3.1","node-sass":"^6.0.0","query-string":"^4.3.4","react":"^17.0.2","react-dom":"^17.0.2","react-image-lightbox":"^5.1.1","react-router-dom":"^5.2.0","react-router-hash-link":"^2.4.3","react-scripts":"4.0.3","react-tippy":"^1.4.0","sweetalert2":"^10.1.0","typescript":"^4.2.4","web-vitals":"^1.1.2"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@testing-library/jest-dom":"^5.12.0","@testing-library/react":"^11.2.7","@testing-library/user-event":"^12.8.3","@types/jest":"^26.0.23","@types/node":"^12.20.13","@types/query-string":"^6.3.0","@types/react":"^17.0.5","@types/react-dom":"^17.0.5","@types/react-router-dom":"^5.1.7","@types/react-router-hash-link":"^2.0.0","gh-pages":"^3.1.0"}}')},62:function(e,t,s){},63:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(22),c=s.n(n),l=s(8),r=s(3),o="/alphabet",d=s(20),m=s(10),h=s(13),j=s(17),b=s(15),p=s(0),g=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(m.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),s}(a.Component),u=Object(r.f)((function(e){return Object(p.jsx)(g,Object(d.a)({},e))})),O=function(){return Object(p.jsx)("div",{className:"darkmode-toggle",onClick:function(){return function(){var e,t=document.querySelector("#app-wrapper"),s=document.querySelector("body");if(null==t)return!1;var a,i,n,c,l,r,o,d,m=t.className.split(" ").indexOf("dark")>-1||(null!==(e=null===s||void 0===s?void 0:s.className)&&void 0!==e?e:"").split(" ").indexOf("dark")>-1;localStorage.setItem("dark-mode",m?"light":"dark"),m?(null===s||void 0===s||null===(a=s.classList)||void 0===a||null===(i=a.add)||void 0===i||i.call(a,"light"),null===s||void 0===s||null===(n=s.classList)||void 0===n||null===(c=n.remove)||void 0===c||c.call(n,"dark"),t.classList.add("light"),t.classList.remove("dark")):(null===s||void 0===s||null===(l=s.classList)||void 0===l||null===(r=l.remove)||void 0===r||r.call(l,"light"),null===s||void 0===s||null===(o=s.classList)||void 0===o||null===(d=o.add)||void 0===d||d.call(o,"dark"),t.classList.remove("light"),t.classList.add("dark"))}()}})},x="nmsAlphabet",v={fullName:"Assistant for No Man's Sky",nickName:"AssistantNMS",website:"https://nmsassistant.com",twitter:"https://twitter.com/AssistantNMS",github:"https://github.com/AssistantNMS"},f={fullName:"No Man's Sky Community Developers",nickName:"NMSCD",website:"https://www.nmscd.com/",github:"https://github.com/NMSCD"},y={nickName:"seontonppa",website:"http://seontonppa.com"},N=s(11),w=s.n(N),k=function(e){var t,s;return Object(p.jsx)("a",{id:e.id,href:(s=e.href,s.includes("patreonbanner.com")||s.includes("@")?s:s.includes("?")?s+"&ref=".concat(x):s+"?ref=".concat(x)),target:"_blank",rel:"noopener noreferrer",className:w()(null!==(t=e.additionalClassNames)&&void 0!==t?t:""),onClick:function(t){null!=e.onClick&&(t.preventDefault(),e.onClick())},draggable:!1,children:e.children})},C=function(e){var t;return Object(p.jsx)(l.b,{to:e.href,title:e.title,className:w()(null!==(t=e.additionalClassNames)&&void 0!==t?t:""),draggable:!1,children:e.children})},S=s(23),M=function(){var e;return Object(p.jsx)("footer",{id:"footer",children:Object(p.jsx)("section",{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-12 ta-center",children:Object(p.jsx)("h2",{children:f.nickName})}),Object(p.jsx)("div",{className:"col-2 col-lg-12"}),Object(p.jsx)("div",{className:"col-4 col-lg-12",children:Object(p.jsxs)("p",{children:["This site was designed by ",Object(p.jsx)(k,{href:v.website,children:v.nickName})," and the font was designed by ",Object(p.jsx)(k,{href:y.website,children:y.nickName})," as part of the collection of tools created by the ",Object(p.jsx)("br",{}),Object(p.jsx)(k,{href:f.website,children:f.fullName})]})}),Object(p.jsx)("div",{className:"col-4 col-lg-12",style:{textAlign:"right"},children:Object(p.jsxs)("ul",{className:"icons",children:[Object(p.jsx)("li",{style:{display:"block"},children:Object(p.jsx)(k,{href:f.website,additionalClassNames:"mt1",children:"View Home page"})}),Object(p.jsx)("li",{style:{display:"block"},children:Object(p.jsx)(k,{href:f.github,additionalClassNames:"mt1",children:"View our Github Organisation"})})]})}),Object(p.jsx)("div",{className:"col-2 col-lg-12"}),Object(p.jsx)("div",{className:"col-12 ta-center",children:Object(p.jsxs)("i",{children:[Object(p.jsxs)(k,{href:v.website,children:["\xa9 ",v.fullName]})," - ",Object(p.jsx)(k,{href:f.website,children:f.nickName})," - ",null!==(e=null===S||void 0===S?void 0:S.version)&&void 0!==e?e:"1.0.0"]})})]})})})},T=s(34),A=function(e){return Object(p.jsx)("section",{id:"header",children:Object(p.jsxs)("div",{className:"inner",children:[Object(p.jsxs)("h1",{children:["No Man's Sky",Object(p.jsx)("br",{}),"Expedition alphabet"]}),Object(p.jsxs)("p",{children:["Want to encode and decode messages?",Object(p.jsx)("br",{}),"With this tool you can easily use the NMS Expedition Alphabet"]}),Object(p.jsx)("ul",{className:"special mt2",children:Object(p.jsx)("li",{children:Object(p.jsx)(C,{href:o,additionalClassNames:"primary button scrolly",children:"Skip straight to alphabet"})})}),Object(p.jsx)("ul",{className:"actions special",children:Object(p.jsx)("li",{children:Object(p.jsx)(T.a,{to:"#whatStarted",className:"primary button scrolly",children:"Read More & download"})})})]})})},E=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)(A,{}),Object(p.jsx)("section",{id:"whatStarted",className:"main style1",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row gtr-150",children:[Object(p.jsxs)("div",{className:"col-6 col-12-medium",children:[Object(p.jsx)("header",{className:"major",children:Object(p.jsx)("h2",{children:"Want to use this font in your own projects?"})}),Object(p.jsxs)("p",{children:["Follow the instructions ",Object(p.jsx)("a",{href:"https://github.com/NMSCD/Expedition-Alphabet",title:"Expedition Alphabet readme.md",children:"here"})," to import the stylesheet and font files into your project! \ud83d\udcaa Font designed by ",Object(p.jsx)(k,{href:y.website,children:y.nickName})," \ud83c\udf89"]}),Object(p.jsx)(k,{href:"https://raw.githubusercontent.com/NMSCD/Expedition-Alphabet/main/public/assets/font/nms-alphabet.ttf",additionalClassNames:"button",children:"Download .ttf"})]}),Object(p.jsx)("div",{className:"col-6 col-12-medium imp-medium",children:Object(p.jsx)("span",{className:"image fit",children:Object(p.jsx)("img",{src:"assets/font/example.png",alt:""})})})]})})}),Object(p.jsx)("section",{id:"currentInfo",className:"main style2 special",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("header",{className:"major",children:Object(p.jsx)("h2",{children:"Examples of where the font has been used"})}),Object(p.jsxs)("div",{className:"row gtr-150",style:{justifyContent:"center"},children:[Object(p.jsxs)("div",{className:"col-4 col-12-medium",children:[Object(p.jsx)("span",{className:"image fit",children:Object(p.jsx)("img",{src:"assets/img/pioneer.png",alt:""})}),Object(p.jsx)("h3",{children:"Pioneers"}),Object(p.jsxs)("p",{children:["Season 1 of Expeditions, which ran from ",Object(p.jsx)("b",{children:"31st March 2021"})," to ",Object(p.jsx)("b",{children:"16 May 2021"})]}),Object(p.jsx)("ul",{className:"actions special",children:Object(p.jsx)("li",{children:Object(p.jsx)(k,{href:"https://www.nomanssky.com/expeditions-update/",additionalClassNames:"button",children:"View on nomanssky.com"})})})]}),Object(p.jsxs)("div",{className:"col-4 col-12-medium",children:[Object(p.jsx)("span",{className:"image fit",children:Object(p.jsx)("img",{src:"assets/img/beachhead.png",alt:""})}),Object(p.jsx)("h3",{children:"Beachhead"}),Object(p.jsxs)("p",{children:["Season 2 of Expeditions, which is currently running as of ",Object(p.jsx)("b",{children:"17 May 2021"})]}),Object(p.jsx)("ul",{className:"actions special",children:Object(p.jsx)("li",{children:Object(p.jsx)(k,{href:"https://www.nomanssky.com/2021/05/no-mans-sky-expedition-2/",additionalClassNames:"button",children:"View on nomanssky.com"})})})]}),Object(p.jsxs)("div",{className:"col-4 col-12-medium",children:[Object(p.jsx)("span",{className:"image fit",children:Object(p.jsx)("img",{src:"assets/img/rayRenoldsFirstSentence.jpg",alt:""})}),Object(p.jsx)("h3",{children:"@RayReynoldsNMS"}),Object(p.jsx)("p",{children:"Ray Renolds translated an entire sentence!"}),Object(p.jsx)("ul",{className:"actions special",children:Object(p.jsx)("li",{children:Object(p.jsx)(k,{href:"https://twitter.com/RayReynoldsNMS/status/1394259724317646852/photo/1",additionalClassNames:"button",children:"View on Twitter"})})})]}),Object(p.jsxs)("div",{className:"col-4 col-12-medium",children:[Object(p.jsx)("span",{className:"image fit",children:Object(p.jsx)("img",{src:"assets/img/nolindor.png",alt:""})}),Object(p.jsx)("h3",{children:"Nolindor"}),Object(p.jsx)("p",{children:"No Man's Sky Decryption Youtube Video"}),Object(p.jsx)("ul",{className:"actions special",children:Object(p.jsx)("li",{children:Object(p.jsx)(k,{href:"https://www.youtube.com/watch?v=YpfpN9iX2WA",additionalClassNames:"button",children:"View on Youtube"})})})]}),Object(p.jsxs)("div",{className:"col-4 col-12-medium",children:[Object(p.jsx)("span",{className:"image fit",children:Object(p.jsx)("img",{src:"assets/img/nmsMessage.jpg",alt:""})}),Object(p.jsx)("h3",{children:"@NoMansSky"}),Object(p.jsx)("p",{children:"NMS tweeted a longer sentence, giving us a few missing characters!"}),Object(p.jsx)("ul",{className:"actions special",children:Object(p.jsx)("li",{children:Object(p.jsx)(k,{href:"https://twitter.com/NoMansSky/status/1395371596764876808",additionalClassNames:"button",children:"View on Twitter"})})})]}),Object(p.jsxs)("div",{className:"col-4 col-12-medium",children:[Object(p.jsx)("span",{className:"image fit",children:Object(p.jsx)("img",{src:"assets/img/jackpotninja.png",alt:""})}),Object(p.jsx)("h3",{children:"@JackPotNinja1"}),Object(p.jsx)("p",{children:"JackPotNinja getting us the letter V and possibly 9 & 0"}),Object(p.jsx)("ul",{className:"actions special",children:Object(p.jsx)("li",{children:Object(p.jsx)(k,{href:"https://twitter.com/JackPotNinja1/status/1395378352140214276",additionalClassNames:"button",children:"View on Twitter"})})})]}),Object(p.jsxs)("div",{className:"col-4 col-12-medium",children:[Object(p.jsx)("span",{className:"image fit",children:Object(p.jsx)("img",{src:"assets/img/captStevePanel.jpg",alt:""})}),Object(p.jsx)("h3",{children:"@NCaptainsteve"}),Object(p.jsx)("p",{children:"Captain Steve sharing a screenshot from update 3.5"}),Object(p.jsx)("ul",{className:"actions special",children:Object(p.jsx)("li",{children:Object(p.jsx)(k,{href:"https://twitter.com/NCaptainsteve/status/1400042909546782721",additionalClassNames:"button",children:"View on Twitter"})})})]})]})]})}),Object(p.jsx)("section",{id:"viewCurrentAlphabet",className:"main style1",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row gtr-150",children:[Object(p.jsx)("div",{className:"col-6 col-12-medium imp-medium",children:Object(p.jsx)("span",{className:"image fit",children:Object(p.jsx)("img",{src:"assets/img/currentlyKnown.png",alt:""})})}),Object(p.jsxs)("div",{className:"col-6 col-12-medium",children:[Object(p.jsx)("header",{className:"major",children:Object(p.jsx)("h2",{children:"View currently known alphabet"})}),Object(p.jsx)("p",{children:"Thanks to the community we now know all the characters used in the Expedition Alphabet!"}),Object(p.jsx)("ul",{className:"actions special",children:Object(p.jsx)("li",{children:Object(p.jsx)(C,{href:o,additionalClassNames:"button",children:"View alphabet"})})})]})]})})}),Object(p.jsx)(M,{})]}),Object(p.jsx)(O,{})]})},R=s(18),q=s(9),V=[{name:"a",img:"/assets/img/alphabet/a.svg"},{name:"b",img:"/assets/img/alphabet/b.svg"},{name:"c",img:"/assets/img/alphabet/c.svg"},{name:"d",img:"/assets/img/alphabet/d.svg"},{name:"e",img:"/assets/img/alphabet/e.svg"},{name:"f",img:"/assets/img/alphabet/f.svg"},{name:"g",img:"/assets/img/alphabet/g.svg"},{name:"h",img:"/assets/img/alphabet/h.svg"},{name:"i",img:"/assets/img/alphabet/i.svg"},{name:"j",img:"/assets/img/alphabet/j.svg"},{name:"k",img:"/assets/img/alphabet/k.svg"},{name:"l",img:"/assets/img/alphabet/l.svg"},{name:"m",img:"/assets/img/alphabet/m.svg"},{name:"n",img:"/assets/img/alphabet/n.svg"},{name:"o",img:"/assets/img/alphabet/o.svg"},{name:"p",img:"/assets/img/alphabet/p.svg"},{name:"q",img:"/assets/img/alphabet/q.svg"},{name:"r",img:"/assets/img/alphabet/r.svg"},{name:"s",img:"/assets/img/alphabet/s.svg"},{name:"t",img:"/assets/img/alphabet/t.svg"},{name:"u",img:"/assets/img/alphabet/u.svg"},{name:"v",img:"/assets/img/alphabet/v.svg"},{name:"w",img:"/assets/img/alphabet/w.svg"},{name:"x",img:"/assets/img/alphabet/x.svg"},{name:"y",img:"/assets/img/alphabet/y.svg"},{name:"z",img:"/assets/img/alphabet/z.svg"},{name:"0",img:"/assets/img/alphabet/0.svg"},{name:"1",img:"/assets/img/alphabet/1.svg"},{name:"2",img:"/assets/img/alphabet/2.svg"},{name:"3",img:"/assets/img/alphabet/3.svg"},{name:"4",img:"/assets/img/alphabet/4.svg"},{name:"5",img:"/assets/img/alphabet/5.svg"},{name:"6",img:"/assets/img/alphabet/6.svg"},{name:"7",img:"/assets/img/alphabet/7.svg"},{name:"8",img:"/assets/img/alphabet/8.svg"},{name:"9",img:"/assets/img/alphabet/9.svg"},{name:".",display:"Period",img:"/assets/img/alphabet/period.svg"},{name:":",display:"Colon",img:"/assets/img/alphabet/colon.svg"},{name:" ",display:"Space",img:"/assets/img/alphabet/space.svg"},{name:"?",display:"?",img:"/assets/img/alphabet/unknown1.svg"},{name:"\ud83e\udd69",display:"???",unknown:!0,img:"/assets/img/alphabet/unknown1.svg"},{name:"\ud83e\udd50",display:"???",unknown:!0,img:"/assets/img/alphabet/unknown2.svg"}],I=[".",":","?"," ","\ud83e\udd69","\ud83e\udd50"],D=["0","1","2","3","4","5","6","7","8","9"],P=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],F=["q","w","e","r","t","y","u","i","o","p","[","]","a","s","d","f","g","h","j","k","l",";","'","\\","z","x","c","v","b","n","m",",",".","/"],J=[",",".","p","y","f","g","c","r","l","?","a","o","e","u","i","d","h","t","n","s","q","j","k","x","b","m","w","v","z"],L=[{id:"alphabet",name:"Alphabetical",layout:[].concat(Object(q.a)(P),Object(q.a)(D),Object(q.a)(I))},{id:"qwerty",name:"QWERTY",layout:[].concat(Object(q.a)(F),Object(q.a)(D),Object(q.a)(I))},{id:"dvorak",name:"DVORAK",layout:[].concat(Object(q.a)(J),Object(q.a)(D),Object(q.a)(I))}],U=s(16),z=s(35),K=s.n(z),W=function e(){Object(m.a)(this,e)};W.logo100="assets/img/logo100.png",W.unknownImage="assets/img/unknown.svg",W.errorImage="assets/img/error.png",W.notFoundImage="assets/img/404.png",W.usage=[{image:"assets/img/usage/pioneer.png",translation:"pioneer"},{image:"assets/img/usage/beachhead.png",translation:"beachhead"},{image:"assets/img/usage/nmsMessage.png",translation:"look too the monolith... the weapon is coming"},{image:"assets/img/usage/station.png",translation:"online error station status : nominal ai mode slumber"},{image:"assets/img/usage/eggSequencerTank.png",translation:"korvet 20 treat your egg to a fresh pair of genes"},{image:"assets/img/usage/eggSequencer.png",translation:"treat your egg to a fresh pair of genes"},{image:"assets/img/usage/goldenGekHelmet.png",translation:"season f 1st"},{image:"assets/img/usage/atlasRace.png",translation:"23 rd atlas race"},{image:"assets/img/usage/callNum.png",translation:"call 0 \ud83e\udd69\ud83e\udd50"},{image:"assets/img/usage/entireAlphabet.png",translation:"0987654321qwertyuiopasdfghjklzxcvbnm,.?"}];var H,Y=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(m.a)(this,s),(a=t.call(this,e)).onError=function(){a.state.errored||a.setState((function(){var e;return{srcUrl:null!==(e=a.props.fallbackSrc)&&void 0!==e?e:a.props.imageUrl,errored:!0}}))},a.state={srcUrl:e.imageUrl,errored:!1},a}return Object(h.a)(s,[{key:"render",value:function(){var e,t,s=this.state,a=s.srcUrl,i=s.errored;return Object(p.jsx)("img",{src:a,className:w()(this.props.classNames,{error:i}),style:this.props.style,onError:this.onError,onClick:this.props.onClick,alt:null!==(e=null!==(t=this.props.alt)&&void 0!==t?t:this.props.imageName)&&void 0!==e?e:"Emote button",draggable:!1})}}]),s}(i.a.Component),G=s(36),_=function(e){return Object(p.jsx)(G.Tooltip,{title:e.content,position:"top",trigger:"mouseenter",arrow:!0,className:w()(e.classNames),children:e.children})},B=s(37),Q=function(e){var t=Object(a.useState)(0),s=Object(U.a)(t,2),i=s[0],n=s[1],c=e.images.length>1;return Object(p.jsx)(B.a,{mainSrc:e.images[i],nextSrc:c?e.images[(i+1)%e.images.length]:void 0,prevSrc:c?e.images[(i+e.images.length-1)%e.images.length]:void 0,onCloseRequest:e.onClose,onMovePrevRequest:function(){return n((i+e.images.length-1)%e.images.length)},onMoveNextRequest:function(){return n((i+1)%e.images.length)}})},X=function(e){var t=Object(a.useState)([]),s=Object(U.a)(t,2),i=s[0],n=s[1],c=function(t){return function(){var s,a=e.typedChars+t;null===e||void 0===e||null===(s=e.updateTypedChars)||void 0===s||s.call(e,a)}};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("section",{id:"header",children:Object(p.jsxs)("div",{className:"inner",children:[Object(p.jsx)("h1",{children:"Expedition alphabet"}),Object(p.jsx)("p",{children:"Currently known alphabet"})]})}),Object(p.jsxs)("section",{className:"main style1 no-padding ta-center",children:[Object(p.jsxs)("div",{className:"keyboard",style:{display:"none"},children:[Object(p.jsx)("span",{children:"Keyboard Layout"}),Object(p.jsx)("select",{id:"keyboard-dropdown",onChange:e.changeCharacterOrder,children:L.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(p.jsx)("p",{style:{textAlign:"center",fontStyle:"italic"},children:"Hover over a character and click on the question icon to view the places we got the characters from"}),Object(p.jsx)("div",{className:"alphabet-grid",children:e.alphabetCharacters.map((function(e){var t,s,a,i;return Object(p.jsxs)("div",{className:"alphabet-block no-select",children:[Object(p.jsx)("p",{children:null!==(t=e.display)&&void 0!==t?t:e.name}),!0===e.unknown?Object(p.jsx)(Y,{imageUrl:e.img,fallbackSrc:"/".concat(W.unknownImage),classNames:"alphabet pointer",imageName:null!==(s=e.display)&&void 0!==s?s:e.name,onClick:c("?")}):Object(p.jsx)("h1",{className:"alphabet expedition-font pointer",onClick:c(e.name),children:e.name}),Object(p.jsx)(_,{content:"View usage",classNames:"view-usage",children:Object(p.jsx)(Y,{imageUrl:"/assets/img/uses.png",fallbackSrc:"/".concat(W.unknownImage),classNames:"tiny pointer",imageName:null!==(a=e.display)&&void 0!==a?a:e.name,onClick:(i=e.name,function(){var e,t=[],s=Object(R.a)(W.usage);try{for(s.s();!(e=s.n()).done;){var a=e.value;a.translation.replace(/ /g,"").includes(i)&&t.push(a.image)}}catch(c){s.e(c)}finally{s.f()}t.length>0?n(t):K.a.fire({title:"No images found",text:"There seems to be no evidence of the character being used",icon:"warning"})})})})]},"all-".concat(e.name))}))})]}),i.length>0&&Object(p.jsx)(Q,{images:i,onClose:function(){return n([])}}),Object(p.jsx)("section",{className:"main style3",style:{paddingTop:"4em"},children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-12 ta-center mb1",children:[Object(p.jsx)("span",{children:"Type something!"}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"expedition-font",children:e.typedChars})]}),Object(p.jsx)("div",{className:"col-12 ta-center",children:Object(p.jsx)("input",{type:"text",id:"sentence",name:"sentence",style:{width:"80%",margin:"0 auto"},placeholder:"Secret text...",value:e.typedChars,onChange:function(t){var s,a,i,n=null!==(s=t.target)&&void 0!==s?s:{},c=null!==(a=null===n||void 0===n?void 0:n.value)&&void 0!==a?a:"";null===e||void 0===e||null===(i=e.updateTypedChars)||void 0===i||i.call(e,c)}})})]})}),Object(p.jsx)("section",{className:"main style1",children:Object(p.jsxs)("div",{className:"inner ta-center",children:[Object(p.jsx)("h2",{children:"If you have evidence of other characters"}),Object(p.jsx)("p",{style:{margin:0},children:"Please mention one of us on Twitter"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{style:{display:"block"},children:Object(p.jsx)(k,{href:v.twitter,additionalClassNames:"mt1",children:"@AssistantNMS"})}),Object(p.jsx)("li",{style:{display:"block"},children:Object(p.jsx)(k,{href:"https://twitter.com/RayReynoldsNMS",additionalClassNames:"mt1",children:"@RayReynoldsNMS"})}),Object(p.jsx)("li",{style:{display:"block"},children:Object(p.jsx)(k,{href:"https://twitter.com/JackPotNinja1",additionalClassNames:"mt1",children:"@JackPotNinja1"})}),Object(p.jsx)("li",{style:{display:"block"},children:Object(p.jsx)(k,{href:"https://twitter.com/Ja77Punk",additionalClassNames:"mt1",children:"@Ja77Punk"})})]}),Object(p.jsxs)("p",{children:["Or talk about the alphabet in the ",Object(p.jsx)("a",{href:"https://forums.atlas-65.com/t/expeditions-alphabet/7618",target:"_blank",rel:"noopener noreferrer",children:"Atlas forum"})]})]})})]}),Object(p.jsx)(M,{}),Object(p.jsx)(O,{})]})},Z=s(32),$=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(m.a)(this,s),(a=t.call(this,e)).updateTypedChars=function(e){a.setState({typedChars:e})},a.getCharObjsFromKeyboardId=function(e){var t,s,a,i=[],n=null===(t=null!==(s=L.find((function(t){return t.id===e})))&&void 0!==s?s:L[0])||void 0===t?void 0:t.layout,c=Object(R.a)(n);try{for(c.s();!(a=c.n()).done;){var l,r=a.value,o=Object(R.a)(V);try{for(o.s();!(l=o.n()).done;){var d=l.value;d.name!==r||i.push(d)}}catch(m){o.e(m)}finally{o.f()}}}catch(m){c.e(m)}finally{c.f()}return i},a.changeCharacterOrder=function(e){var t,s;null===e||void 0===e||null===(t=e.persist)||void 0===t||t.call(e);var i=null===e||void 0===e||null===(s=e.target)||void 0===s?void 0:s.value,n=a.getCharObjsFromKeyboardId(i);a.setState({alphabetCharacters:n})},a.state={typedChars:"",alphabetCharacters:a.getCharObjsFromKeyboardId(L[0].id)},a}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e,t,s=Z.parse(null!==(e=null===(t=this.props.location)||void 0===t?void 0:t.search)&&void 0!==e?e:"");null!=s.text&&this.setState({typedChars:s.text.split("")})}},{key:"render",value:function(){return Object(p.jsx)(X,Object(d.a)(Object(d.a)({},this.state),{},{updateTypedChars:this.updateTypedChars,changeCharacterOrder:this.changeCharacterOrder}))}}]),s}(i.a.Component),ee=Object(r.f)($),te=s(32),se=Object(r.f)((function(e){var t=Object(a.useState)(""),s=Object(U.a)(t,2),i=s[0],n=s[1];Object(a.useEffect)((function(){var t,s,a=te.parse(null!==(t=null===(s=e.location)||void 0===s?void 0:s.search)&&void 0!==t?t:"");null!=a.text&&n(a.text)}),[]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("section",{id:"header",style:{padding:"1em",maxHeight:"5em"},children:Object(p.jsx)("div",{className:"inner",children:Object(p.jsx)("h2",{children:"Expedition alphabet"})})}),Object(p.jsxs)("section",{className:"main style3",style:{paddingTop:"4em"},children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-12 ta-center mb1",children:[Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"expedition-font",children:i})]}),Object(p.jsx)("div",{className:"col-12 ta-center",children:Object(p.jsx)("input",{type:"text",id:"sentence",name:"sentence",style:{width:"80%",margin:"0 auto"},placeholder:"Text to be converted...",defaultValue:i,onChange:function(e){var t,s,a=null!==(t=e.target)&&void 0!==t?t:{},i=null!==(s=null===a||void 0===a?void 0:a.value)&&void 0!==s?s:"";null===n||void 0===n||n(i)}})})]}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-12",style:{width:"80%",margin:"0 auto"},children:[Object(p.jsx)("br",{}),Object(p.jsx)(C,{href:o,title:"Alphabet page",children:"<<Go to full alphabet page"})]})})]})]}),Object(p.jsx)(M,{}),Object(p.jsx)(O,{})]})})),ae=function(e){return Object(p.jsx)("div",{id:"app-wrapper",className:e.darkMode,children:Object(p.jsx)(l.a,{children:Object(p.jsx)(u,{children:Object(p.jsxs)(r.c,{children:[Object(p.jsx)(r.a,{exact:!0,path:"/",component:E}),Object(p.jsx)(r.a,{path:o,component:ee}),Object(p.jsx)(r.a,{path:"/display",component:se})]})})})})},ie=(s(62),s(63),s(64),s(65),null!==(H=localStorage.getItem("dark-mode"))&&void 0!==H?H:"");c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(ae,{darkMode:ie})}),document.getElementById("alphabet"))}},[[66,1,2]]]);
//# sourceMappingURL=main.31cc8982.chunk.js.map