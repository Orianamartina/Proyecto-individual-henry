(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,a){e.exports={container:"detailCard_container__3vlcv",img:"detailCard_img__3VkpH",textContainer:"detailCard_textContainer__3hB5Z",text:"detailCard_text__3Dota",title:"detailCard_title__3eTCc",buttonDiv:"detailCard_buttonDiv__3_aOo",detailButton:"detailCard_detailButton__ZzUOa"}},21:function(e,t,a){e.exports={mainContainer:"landingpage_mainContainer__1iaW3",linkContainer:"landingpage_linkContainer__3iBdL",link:"landingpage_link__1_74N",textContainer:"landingpage_textContainer__1vt8G",text:"landingpage_text__3UOMX"}},22:function(e,t,a){e.exports={cardContainer:"dogcards_cardContainer__3WHXz",cardImage:"dogcards_cardImage__1AZ1a",nameTitle:"dogcards_nameTitle__ZE3AZ",h3Title:"dogcards_h3Title__2Lt1e"}},33:function(e,t,a){e.exports={barContainer:"searchbar_barContainer__2BsIM",barInput:"searchbar_barInput__2vqnS",searchButton:"searchbar_searchButton__1Z0B9"}},34:function(e,t,a){e.exports={text:"notfound_text__3ugHH",img:"notfound_img__3k7rJ"}},48:function(e,t,a){},49:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(28),r=a.n(i),s=(a(48),a(49),a(10)),o=a(21),l=a.n(o),m=a(0);function u(){return Object(m.jsx)("div",{className:l.a.mainContainer,children:Object(m.jsxs)("div",{className:l.a.textContainer,children:[Object(m.jsx)("h1",{className:l.a.text,children:"Welcome to DogHub"}),Object(m.jsx)("div",{className:l.a.linkContainer,children:Object(m.jsx)(s.b,{to:"/dogs",children:Object(m.jsx)("button",{className:l.a.link,children:" Let's go!"})})})]})})}var j=a(5),d=a(9),b=a(16),h=a(12),O=a(19),p="GET_ALL_BREEDS",g="GET_ALL_TEMPERAMENTS",x="GET_DOG_DETAIL",f="GET_DOG_BY_NAME",_="FILTER_BY_TEMPERAMENT",v="ORDER_BY_NAME",N="ORDER_BY_WEIGHT",C="GET_DATABASE_BREEDS",y=a(64),w=function(){return function(){var e=Object(O.a)(Object(h.a)().mark((function e(t){var a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)("/dogs");case 2:return a=e.sent,e.abrupt("return",t({type:p,payload:a.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(){return function(){var e=Object(O.a)(Object(h.a)().mark((function e(t){var a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)("/temperaments");case 2:return a=e.sent,e.abrupt("return",t({type:g,payload:a.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(a){var n;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.a)("/dogs/".concat(e));case 2:return n=t.sent,t.abrupt("return",a({type:x,payload:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(a){var n;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.a)("/dogs/name/?name=".concat(e));case 2:return n=t.sent,t.abrupt("return",a({type:f,payload:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return{type:v,payload:e}},E=function(e){return{type:N,payload:e}},I=function(e){return{type:_,payload:e}},S=function(e){return Object(O.a)(Object(h.a)().mark((function t(){var a;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.post("/dogs",e);case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})))},W=function(e){return{type:C,payload:e}},L=a.p+"static/media/8ixKaobip.a0bcd6d4.gif";function k(){return Object(m.jsxs)("div",{style:{margin:"10%"},children:[Object(m.jsx)("h1",{children:"Loading..."}),Object(m.jsx)("img",{src:L,alt:"loading",style:{width:"30%"}})]})}var A=a(15),F=a.n(A);function P(){var e=Object(j.f)(),t=Object(b.b)(),a=Object(b.c)((function(e){return e.dogDetail}));Object(n.useEffect)((function(){t(H(e.id))}),[]);var c=Object(n.useState)(!0),i=Object(d.a)(c,2),r=i[0],o=i[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){o(!1)}),1500);return function(){return clearTimeout(e)}}),[]),Object(m.jsx)("div",{children:r?Object(m.jsx)(k,{}):Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:F.a.buttonDiv,children:Object(m.jsx)(s.b,{to:"/dogs",children:Object(m.jsx)("button",{className:F.a.detailButton,children:"Home"})})}),Object(m.jsxs)("div",{className:F.a.container,children:[Object(m.jsx)("img",{className:F.a.img,src:a.image,alt:e.id}),Object(m.jsxs)("div",{className:F.a.textContainer,children:[Object(m.jsx)("h1",{className:F.a.title,children:a.name}),Object(m.jsxs)("h2",{className:F.a.text,children:["Id:  ",a.id]}),Object(m.jsxs)("h2",{className:F.a.text,children:["Lifespan:  ",a.lifespan]}),Object(m.jsxs)("h2",{className:F.a.text,children:["weight:  ",a.weight," Kg"]}),Object(m.jsxs)("h2",{className:F.a.text,children:["Height:  ",a.height," Cm"]}),Object(m.jsx)("h2",{className:F.a.text,children:"Temperament: "}),Object(m.jsx)("h2",{className:F.a.text,children:a.temperament})]})]})]})})}var M=a(33),R=a.n(M);function G(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],i=a[1];return Object(m.jsxs)("div",{className:R.a.barContainer,children:[Object(m.jsx)("input",{className:R.a.barInput,type:"search",value:c,onChange:function(e){i(e.target.value)},placeholder:"Search By Name"}),Object(m.jsx)("button",{className:R.a.searchButton,onClick:function(){return e.onSearch(c)},children:"Search"})]})}var Z=a(22),U=a.n(Z),K=function(e){return Object(m.jsx)(m.Fragment,{children:e.currentDogs.map((function(e){var t=e.temperament;return Object(m.jsx)(s.b,{to:"/dogs/".concat(e.id),children:Object(m.jsxs)("div",{className:U.a.cardContainer,children:[Object(m.jsx)("img",{className:U.a.cardImage,src:e.image,alt:e.name}),Object(m.jsx)("h1",{className:U.a.nameTitle,children:e.name}),Object(m.jsxs)("h3",{className:U.a.h3Title,children:[e.weight," kg"]}),Object(m.jsx)("h3",{className:U.a.h3Title,children:t.map((function(e){return" ".concat(e)}))+"."})]})})}))})},Y=a(7),V=a.n(Y),q=a.p+"static/media/logo.c48261f5.png";function z(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.allBreeds})),a=Object(b.c)((function(e){return e.allTemperaments}));Object(n.useEffect)((function(){e(w()),e(B())}),[e]);var c=Object(n.useState)(),i=Object(d.a)(c,2),r=(i[0],i[1]),o=Object(n.useState)(1),l=Object(d.a)(o,2),u=l[0],j=l[1],p=8*u,g=p-8,x=Math.ceil(t.length/8),f=t.slice(g,p),_=function(){u<x&&j(u+1)},v=function(){u>1&&j(u-1)};function N(e){document.getElementById(e).selectedIndex=0}var C=Object(n.useState)(),y=Object(d.a)(C,2),H=(y[0],y[1]),S=function(){var t=Object(O.a)(Object(h.a)().mark((function t(a){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return H(a),t.next=3,e(T(a));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsx)("div",{children:0===f.length?Object(m.jsx)(k,{}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:V.a.nav,children:[Object(m.jsxs)("div",{onClick:function(){window.location.replace("/dogs")},className:V.a.logoContainer,children:[Object(m.jsx)("img",{className:V.a.logo,src:q,alt:"DogHub"}),Object(m.jsx)("h1",{className:V.a.title,children:"DogHub"})]}),Object(m.jsxs)("div",{className:V.a.buttonsAndOptionsContainer,children:[Object(m.jsxs)("div",{className:V.a.buttonsContainer,children:[Object(m.jsx)(s.b,{to:"/about",children:Object(m.jsx)("button",{className:V.a.changePageButton,children:"About"})}),Object(m.jsx)("div",{className:V.a.searchBarContainer,children:Object(m.jsx)(G,{onSearch:S})}),Object(m.jsx)(s.b,{to:"/createDog",children:Object(m.jsx)("button",{className:V.a.changePageButton,children:"Create New Dog"})})]}),Object(m.jsxs)("div",{className:V.a.optionsContainer,children:[Object(m.jsx)("div",{className:V.a.select,children:Object(m.jsxs)("select",{id:"1",className:V.a.options,onChange:function(t){!function(t){t.preventDefault(),e(D(t.target.value)),r(t.target.value),j(1),N(2),N(3),N(4)}(t)},children:[Object(m.jsx)("option",{value:"",disabled:!0,selected:!0,children:" Sort by name "}),Object(m.jsx)("option",{value:"asc",children:"A - Z"}),Object(m.jsx)("option",{value:"desc",children:"Z - A"})]})}),Object(m.jsx)("div",{className:V.a.select,children:Object(m.jsxs)("select",{id:"2",className:V.a.options,onChange:function(t){!function(t){t.preventDefault(),e(E(t.target.value)),r(t.target.value),j(1),N(1),N(3),N(4)}(t)},children:[Object(m.jsx)("option",{value:"",disabled:!0,selected:!0,children:" Sort by weight "}),Object(m.jsx)("option",{value:"light",children:"Light - Heavy"}),Object(m.jsx)("option",{value:"heavy",children:"Heavy - Light"})]})}),Object(m.jsx)("div",{className:V.a.select,children:Object(m.jsxs)("select",{id:"3",className:V.a.options,onChange:function(t){!function(t){t.preventDefault(),e(I(t.target.value)),r(t.target.value),j(1),N(1),N(2),N(4)}(t)},children:[Object(m.jsx)("option",{value:"",disabled:!0,selected:!0,children:" Filter by temperament"}),a.map((function(e){return Object(m.jsx)("option",{value:e.temperamentName,children:e.temperamentName},e.id)}))]})}),Object(m.jsx)("div",{className:V.a.select,children:Object(m.jsxs)("select",{id:"4",className:V.a.options,onChange:function(t){!function(t){t.preventDefault(),e(W(t.target.value)),r(t.target.value),j(1),N(1),N(2),N(3)}(t)},children:[Object(m.jsx)("option",{value:"",disabled:!0,selected:!0,children:" Filter by source "}),Object(m.jsx)("option",{value:"api",children:"Api"}),Object(m.jsx)("option",{value:"db",children:"Created"})]})})]})]})]}),Object(m.jsxs)("div",{className:V.a.displayContainer,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:V.a.pageControlButtons,onClick:v,children:"Previous"}),Object(m.jsx)("button",{className:V.a.pageControlButtons,onClick:_,children:"Next"})]}),Object(m.jsx)("div",{className:V.a.cardsContainer,children:Object(m.jsx)(K,{currentDogs:f})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:V.a.pageControlButtons,onClick:v,children:"Previous"}),Object(m.jsx)("button",{className:V.a.pageControlButtons,onClick:_,children:"Next"})]})]})]})})}var J=a(39),Q=a(26),X=a(4),$=a(8),ee=a.n($),te=function(e){var t={};return e.name&&e.maximumHeight&&e.minimumHeight&&e.minimumWeight&&e.maximumWeight&&e.lifespan||(t.completed="all fields are required"),isNaN(parseInt(e.name))||(t.name="Numbers are not allowed"),isNaN(parseInt(e.minimumHeight))&&(t.minimumHeight="Height must be an integer"),isNaN(parseInt(e.maximumHeight))&&(t.maximumHeight="Height must be an integer"),isNaN(parseInt(e.minimumWeight))&&(t.minimumWeight="Weight must be an integer"),isNaN(parseInt(e.maximumWeight))&&(t.maximumWeight="Weight must be an integer"),isNaN(parseInt(e.lifespan))&&(t.lifespan="Lifespan must be an integer"),parseInt(e.minimumHeight)>parseInt(e.maximumHeight)&&(t.minimumHeight="Minimum height must be smaller than maximum height"),parseInt(e.minimumWeight)>parseInt(e.maximumWeight)&&(t.minimumWeight="Minimum weight must be smaller than maximum weight"),0===e.temperament.length&&(t.temperament="Choose at least one temperament out of the list"),t};function ae(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){var e=setTimeout((function(){c(!1)}),2e3);return function(){return clearTimeout(e)}}),[]);var i=Object(b.b)(),r=Object(b.c)((function(e){return e.allTemperaments}));Object(n.useEffect)((function(){i(B())}),[i]);var o=Object(n.useState)({name:"",minimumHeight:"",maximumHeight:"",minimumWeight:"",maximumWeight:"",lifespan:"",image:"",temperament:[]}),l=Object(d.a)(o,2),u=l[0],j=l[1],h=Object(n.useState)(!0),O=Object(d.a)(h,2),p=O[0],g=O[1],x=Object(n.useState)({name:" ",minimumHeight:" ",maximumHeight:" ",minimumWeight:" ",maximumWeight:" ",lifespan:" ",image:" ",temperament:" "}),f=Object(d.a)(x,2),_=f[0],v=f[1],N=function(e){j(Object(X.a)(Object(X.a)({},u),{},Object(Q.a)({},e.target.name,e.target.value))),v(te(Object(X.a)(Object(X.a)({},u),{},Object(Q.a)({},e.target.name,e.target.value))))};Object(n.useEffect)((function(){g(!0),0===Object.entries(_).length&&g(!1)}),[_,g]);return Object(m.jsx)(m.Fragment,{children:a?Object(m.jsx)(k,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.b,{to:"/dogs",children:Object(m.jsx)("button",{className:ee.a.homeButton,children:"Home"})}),Object(m.jsx)("div",{className:ee.a.formContainer,children:Object(m.jsxs)("form",{id:"form",onSubmit:function(e){e.preventDefault();var t={name:u.name,height:"".concat(u.minimumHeight," - ").concat(u.maximumHeight),weight:"".concat(u.minimumWeight," - ").concat(u.maximumWeight),lifespan:"".concat(u.lifespan," years"),image:u.image,temperament:u.temperament};i(S(t)),alert("The new dog was added successfully"),j({name:"",min_height:"",max_height:"",min_weight:"",max_weight:"",lifespan:"",image:"",temperament:[]}),window.location.replace("/dogs")},action:"",children:[Object(m.jsxs)("div",{className:ee.a.formPart,children:[Object(m.jsx)("h2",{children:"Name"}),Object(m.jsx)("input",{className:ee.a.formInput,name:"name",placeholder:"...",onChange:function(e){N(e)}}),Object(m.jsxs)("div",{children:[" ",_.name&&Object(m.jsx)("p",{children:_.name})]})]}),Object(m.jsxs)("div",{className:ee.a.formPart,children:[Object(m.jsx)("h2",{children:"Minimum Height"}),Object(m.jsx)("input",{className:ee.a.formInput,name:"minimumHeight",placeholder:"...",onChange:function(e){N(e)}}),Object(m.jsx)("div",{children:_.minimumHeight&&Object(m.jsx)("p",{children:_.minimumHeight})})]}),Object(m.jsxs)("div",{className:ee.a.formPart,children:[Object(m.jsx)("h2",{children:"Maximum Height"}),Object(m.jsx)("input",{className:ee.a.formInput,name:"maximumHeight",placeholder:"...",onChange:function(e){N(e)}}),Object(m.jsx)("div",{children:_.maximumHeight&&Object(m.jsx)("p",{children:_.maximumHeight})})]}),Object(m.jsxs)("div",{className:ee.a.formPart,children:[Object(m.jsx)("h2",{children:"Minimum Weight"}),Object(m.jsx)("input",{className:ee.a.formInput,name:"minimumWeight",placeholder:"...",onChange:function(e){N(e)}}),Object(m.jsx)("div",{children:_.minimumWeight&&Object(m.jsx)("p",{children:_.minimumWeight})})]}),Object(m.jsxs)("div",{className:ee.a.formPart,children:[Object(m.jsx)("h2",{children:"Maximum Weight"}),Object(m.jsx)("input",{className:ee.a.formInput,name:"maximumWeight",placeholder:"...",onChange:function(e){N(e)}}),Object(m.jsx)("div",{children:_.maximumWeight&&Object(m.jsx)("p",{children:_.maximumWeight})})]}),Object(m.jsxs)("div",{className:ee.a.formPart,children:[Object(m.jsx)("h2",{children:" Lifespan "}),Object(m.jsx)("input",{className:ee.a.formInput,name:"lifespan",placeholder:"...",onChange:function(e){N(e)}}),Object(m.jsx)("div",{children:_.lifespan&&Object(m.jsx)("p",{children:_.lifespan})})]}),Object(m.jsxs)("div",{className:ee.a.formPart,children:[Object(m.jsx)("h2",{children:" Image "}),Object(m.jsx)("input",{className:ee.a.formInput,name:"image",placeholder:"...",onChange:function(e){N(e)}})]}),Object(m.jsxs)("div",{className:ee.a.formPart,htmlFor:"",children:[Object(m.jsx)("h2",{children:"Temperaments: "}),Object(m.jsx)("div",{className:ee.a.selectContainer,children:Object(m.jsxs)("select",{className:ee.a.select,onChange:function(e){return function(e){j(Object(X.a)(Object(X.a)({},u),{},{temperament:[].concat(Object(J.a)(u.temperament),[e.target.value])})),v(te(Object(X.a)(Object(X.a)({},u),{},{temperament:[].concat(Object(J.a)(u.temperament),[e.target.value])})))}(e)},name:"filter",id:"2",children:[Object(m.jsx)("option",{value:"",children:" Select Option"}),r.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("option",{value:e.temperamentName,children:e.temperamentName},e.id)})}))]})}),Object(m.jsx)("ul",{children:u.temperament.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:ee.a.temperamentDiv,children:[Object(m.jsx)("button",{className:ee.a.deleteButton,onClick:function(){return t=e,void j(Object(X.a)(Object(X.a)({},u),{},{temperament:u.temperament.filter((function(e){return e!==t}))}));var t},children:"x"},e),Object(m.jsx)("li",{children:e})]})})}))})]}),Object(m.jsx)("button",{disabled:p,type:"submit",form:"form",children:"Create Dog"}),Object(m.jsx)("div",{children:_.temperament&&Object(m.jsx)("p",{children:_.temperament})})]})})]})})}var ne=a.p+"static/media/sadDog.890f10ff.jpg",ce=a(34),ie=a.n(ce),re=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:ie.a.text,children:"The page you're looking for was not found"}),Object(m.jsx)(s.b,{to:"/dogs",children:Object(m.jsx)("h1",{className:ie.a.text,children:"Home"})}),Object(m.jsx)("img",{className:ie.a.img,src:ne,alt:"sad dog :C"})]})};var se=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/",children:Object(m.jsx)(u,{})}),Object(m.jsx)(j.a,{exact:!0,path:"/dogs",children:Object(m.jsx)(z,{})}),Object(m.jsx)(j.a,{path:"/dogs/:id",children:Object(m.jsx)(P,{})}),Object(m.jsx)(j.a,{path:"/createDog",children:Object(m.jsx)(ae,{})}),Object(m.jsx)(j.a,{path:"*",children:Object(m.jsx)(re,{})})]})})},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},le=a(38),me=a(42),ue={breedsForFunctions:[],allBreeds:[],allTemperaments:[],dogDetail:[],dogsByName:[]},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(X.a)(Object(X.a)({},e),{},{breedsForFunctions:t.payload,allBreeds:t.payload.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:1}))});case g:return Object(X.a)(Object(X.a)({},e),{},{allTemperaments:t.payload.sort((function(e,t){return e.temperamentName.toLowerCase()<t.temperamentName.toLowerCase()?-1:1}))});case x:return Object(X.a)(Object(X.a)({},e),{},{dogDetail:t.payload});case f:return Object(X.a)(Object(X.a)({},e),{},{allBreeds:t.payload});case v:var a=[];if("asc"===t.payload)return a=e.allBreeds.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a>n?1:a<n?-1:0})),Object(X.a)(Object(X.a)({},e),{},{allBreeds:a});if("desc"===t.payload)return a=e.allBreeds.sort((function(e,t){var a=t.name.toLowerCase(),n=e.name.toLowerCase();return a>n?1:a<n?-1:0})),Object(X.a)(Object(X.a)({},e),{},{allBreeds:a});break;case N:var n=[];if("light"===t.payload)return n=e.allBreeds.sort((function(e,t){var a=Number(e.weight.slice(0,2)),n=Number(t.weight.slice(0,2));return a>n?1:a<n?-1:0})),Object(X.a)(Object(X.a)({},e),{},{allBreeds:n});if("heavy"===t.payload)return n=e.allBreeds.sort((function(e,t){var a=Number(t.weight.slice(5,7)),n=Number(e.weight.slice(5,7));return a>n?1:a<n?-1:0})),Object(X.a)(Object(X.a)({},e),{},{allBreeds:n});break;case _:for(var c=[],i=e.breedsForFunctions,r=0;r<i.length;r++)i[r].temperament.includes(t.payload)&&c.push(i[r]);return Object(X.a)(Object(X.a)({},e),{},{allBreeds:c});case C:var s=[],o=e.breedsForFunctions;if("db"===t.payload)for(var l=0;l<o.length;l++){var m=o[l];m.id.length>3&&s.push(m)}if("api"===t.payload)for(var u=0;u<o.length;u++){var j=o[u];j.id<300&&s.push(j)}return Object(X.a)(Object(X.a)({},e),{},{allBreeds:s});default:return e}},de=Object(le.b)(je,Object(le.a)(me.a));y.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"/Proyecto-individual-henry",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API||"http://localhost:3001",r.a.render(Object(m.jsx)(b.a,{store:de,children:Object(m.jsx)(s.a,{children:Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(se,{})})})}),document.getElementById("root")),oe()},7:function(e,t,a){e.exports={select:"dogs_select__1Wt3s",options:"dogs_options__GGcfi",displayContainer:"dogs_displayContainer__3kyQ6",cardsContainer:"dogs_cardsContainer__1yNa9",logo:"dogs_logo__2_Yg3",title:"dogs_title__1irYU",optionsContainer:"dogs_optionsContainer__cqaqz",searchBarContainer:"dogs_searchBarContainer__1uj13",pageControlButtons:"dogs_pageControlButtons__2IZDf",nav:"dogs_nav__2PKRH",logoContainer:"dogs_logoContainer__2QVkn",buttonsContainer:"dogs_buttonsContainer__3iLV_",buttonsAndOptionsContainer:"dogs_buttonsAndOptionsContainer__1Cw-7"}},8:function(e,t,a){e.exports={formContainer:"createnewdog_formContainer__2RsMF",selectContainer:"createnewdog_selectContainer__3wmMB",select:"createnewdog_select__1lhf0",formInput:"createnewdog_formInput__1hgLy",homeButton:"createnewdog_homeButton__3lR7V",deleteButton:"createnewdog_deleteButton__1vtm_",temperamentDiv:"createnewdog_temperamentDiv__1UDFn"}}},[[63,1,2]]]);
//# sourceMappingURL=main.300ea682.chunk.js.map