(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{184:function(e,t,a){},185:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(16),c=a.n(s),r=a(2),o=a(3),l=a(6),u=a(4),d=a(5),m=a(24),p=a.n(m),h=a(79),v=a(80),b=a(81),f=a.n(b),E="http://www.omdbapi.com?apikey=".concat("3968beae"),g=function(){var e=Object(v.a)(p.a.mark(function e(t){var a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(h.a)({},t),n=Object.keys(a).map(function(e){return"".concat(e,"=").concat(a[e])}).join("&"),e.next=4,f.a.get("".concat(E,"&").concat(n));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),O=a(17),j=a(187),k=a(186),N=a(89),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getRating=function(e){return Object.entries(e).length?i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,{type:"star",theme:"filled"})," ",e[0].Value):null},a.toggleSidebar=function(){a.setState(function(e){return{isOpen:!e.isOpen}})},a.state={isOpen:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"renderSidebar",value:function(){var e=this.props.content,t={backgroundImage:"url(/images/episode-".concat(e.Episode,".jpeg)")};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"episode-cover",style:t}),i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container sidebar-reviews"},i.a.createElement("span",null,"Episode ".concat(e.Episode)," - ",e.Year),i.a.createElement("span",null,this.getRating(e.Ratings)))),i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container sidebar-meta"},i.a.createElement("h3",{className:"title is-3"},e.Title),i.a.createElement("p",{className:"subtitle"},e.Plot))))}},{key:"render",value:function(){return i.a.createElement("div",{className:"sidebar-container"},this.renderSidebar())}}]),t}(n.Component),S=document.getElementById("sidebar"),w=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){document.addEventListener("click",e.handleClickOutside,!0),S.appendChild(e.el),S.classList.add("active"),e.setState({visible:!0})},e.componentWillUnmount=function(){document.removeEventListener("click",e.handleClickOutside,!0),S.removeChild(e.el),S.classList.remove("active"),e.setState({visible:!1})},e.handleClickOutside=function(t){var a=c.a.findDOMNode(Object(O.a)(e));a&&a.contains(t.target)||(e.setState({visible:!1}),S.classList.remove("active"))},e.state={visible:!1},e.el=document.createElement("div"),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state.visible?c.a.createPortal(i.a.createElement(y,this.props),this.el):null}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggleSidebar=function(){if(a.setState(function(e){return{isOpen:!e.isOpen}}),a.state.isOpen)return i.a.createElement(w,null)},a.state={loading:!0,isOpen:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.episode&&this.getEpisodeMetaData(this.props.episode)}},{key:"renderEpisodeMeta",value:function(){if(!this.state.loading){var e=this.state.meta,t=this.props.episode.Title;return i.a.createElement("div",{className:"card",onClick:this.toggleSidebar},i.a.createElement("div",{className:"card-image"},i.a.createElement("span",{className:"card__episode-number"},e.Episode),this.getThumb(e.Episode)),i.a.createElement("div",{className:"card-content"},i.a.createElement("h5",{className:"title is-6"},t),i.a.createElement("div",{className:"subtitle is-6"},i.a.createElement(N.a,{lines:3},e.Plot))),this.state.isOpen?i.a.createElement(w,{content:e}):null)}}},{key:"getThumb",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&(t={backgroundImage:"url(/images/episode-".concat(e,".jpeg)"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}),i.a.createElement("figure",{className:"image",style:t})}},{key:"getEpisodeMetaData",value:function(e){var t=this,a=e.seriesTitle,n=e.season,i=e.Episode;g({t:a,season:n,episode:i}).then(function(e){t.setState({meta:e.data,loading:!1},function(){})}).catch(function(e){return console.log(e),null})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.renderEpisodeMeta())}}]),t}(n.Component),C=(a(157),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={episodes:null,media:null,loading:!0,dotPosition:"top"},a.next=a.next.bind(Object(O.a)(a)),a.previous=a.previous.bind(Object(O.a)(a)),a.carousel=i.a.createRef(),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"next",value:function(){this.carousel.next()}},{key:"previous",value:function(){this.carousel.prev()}},{key:"componentDidMount",value:function(){var e=this,t={t:this.props.title,season:this.props.season};g(t).then(function(t){e.setState({episodes:t.data.Episodes,loading:!1},function(){})}).catch(function(e){return console.log(e),null})}},{key:"render",value:function(){var e=this;if(this.state.loading)return i.a.createElement("div",null,"Loading episodes...");var t=this.state.episodes;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"columns"},i.a.createElement(j.a,Object.assign({ref:function(t){return e.carousel=t}},{dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,dots:!0,slidesToScroll:1}}]},{dotPosition:this.state.dotPosition}),t.map(function(t,a){return t.season=e.props.season,t.seriesTitle=e.props.title,i.a.createElement("div",{key:a,className:"column is-one-quarter"},i.a.createElement(T,{episode:t}))}))),i.a.createElement("div",{className:"icon-holder"},i.a.createElement(k.a,{type:"arrow-left",onClick:this.previous}),i.a.createElement(k.a,{type:"arrow-right",onClick:this.next})))}}]),t}(n.Component)),M=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={media:{}},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.search){var t={t:this.props.search};g(t).then(function(t){e.setState({media:t.data})})}}},{key:"render",value:function(){return i.a.createElement("section",{className:"media"},i.a.createElement("div",{className:"level"},i.a.createElement("div",{className:"level-left"},i.a.createElement("p",{className:"subtitle is-5"},"Season ".concat(this.props.season)),i.a.createElement("h1",{className:"title is-1"},this.state.media.Title),i.a.createElement("p",{className:"subtitle is-4"},this.state.media.Plot))),Object.entries(this.state.media).length>0&&i.a.createElement(C,{title:this.state.media.Title,season:this.props.season}))}}]),t}(n.Component);M.defaultProps={search:""};a(184);var P=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"app-bg"}),i.a.createElement("div",{className:"container vcentered"},i.a.createElement(M,{search:"insecure",season:"1"})))}}]),t}(n.Component);Object(s.render)(i.a.createElement(P,null),document.getElementById("root"))},92:function(e,t,a){e.exports=a(185)}},[[92,1,2]]]);
//# sourceMappingURL=main.9f41a4d7.chunk.js.map