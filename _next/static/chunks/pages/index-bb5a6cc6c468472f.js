(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1919:function(e,n,i){"use strict";i.d(n,{Z:function(){return N}});var r=i(9008),l=i(29),t=i(7794),o=i.n(t),a=i(9876),s=i(5113),c=i(7375),d=i(8527),u=i(6369),h=i(1110),x=i(5684),f=i(1664),v=JSON.parse('{"L":[{"pageName":"Main Page","path":"/"},{"pageName":"Github Repos","path":"/github"}]}'),m=i(2888),p=i(884),j=i(5893);function g(e){var n=(0,u.If)(),i=n.colorMode,r=n.toggleColorMode;return(0,j.jsx)(s.hU,{onClick:r,children:"dark"===i?(0,j.jsx)(m.m,{}):(0,j.jsx)(p.H,{})})}var _=i(7294),b=v.L,w=function(e){var n=e.path,i=e.children;return(0,j.jsx)(f.default,{href:n,children:(0,j.jsx)(s.zx,{px:4,py:1,rounded:"md",children:i})},(new Date).getTime())};function z(e){var n=e.home,i=(e.data,(0,c.qY)()),r=i.isOpen,t=i.onOpen,f=i.onClose,v=(0,_.useState)(null),m=v[0],p=v[1];return(0,_.useEffect)((function(){m||setTimeout((0,l.Z)(o().mark((function e(){var n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/endalbe");case 2:return n=e.sent,e.next=5,n.json();case 5:i=e.sent,localStorage.setItem("profileData",i),p(i);case 8:case"end":return e.stop()}}),e)}))))}),[m]),(0,j.jsx)(d.xu,{children:(0,j.jsxs)(d.xu,{bg:(0,u.ff)("gray.100","gray.900"),px:4,children:[(0,j.jsxs)(d.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,j.jsxs)(d.Ug,{spacing:8,alignItems:"center",marginRight:"auto",children:[(0,j.jsxs)(h.v2,{children:[(0,j.jsx)(h.j2,{as:s.zx,rounded:null!==m&&void 0!==m&&m.avatar_url?"full":"",variant:"link",cursor:"pointer",minW:0,children:null!==m&&void 0!==m&&m.avatar_url?(0,j.jsx)(x.qE,{size:"md",src:(null===m||void 0===m?void 0:m.avatar_url)||"https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/272182244_708371740568035_2131386680590510043_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=8BjCnarGTngAX_qRMdL&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_HEcgKz7JdIeNbMlaPKWuCxVGge_uAPndkn5cr5GNGTA&oe=62129859&_nc_sid=7bff83"}):(0,j.jsx)(s.hU,{ml:2,size:"md",icon:r?(0,j.jsx)(a.Tw,{}):(0,j.jsx)(a.Uq,{}),"aria-label":"Open Menu"})}),(0,j.jsxs)(h.qy,{children:[(0,j.jsx)("a",{href:(null===m||void 0===m?void 0:m.html_url)||"https://github.com/endalbe",rel:"noreferrer",target:"_blank",children:(0,j.jsxs)(h.sN,{children:["Github @",(null===m||void 0===m?void 0:m.login)||"endalbe"]})}),(0,j.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://t.me/front_endalbe",children:(0,j.jsx)(h.sN,{children:"Telegram @front_endalbe"})})]})]}),(0,j.jsx)(d.xu,{children:(0,j.jsxs)("a",{href:(null===m||void 0===m?void 0:m.html_url)||"https://github.com/endalbe",rel:"noreferrer",target:"_blank",children:["Github @",(null===m||void 0===m?void 0:m.login)||"endalbe"]})}),(0,j.jsx)(d.Ug,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:b.map((function(e){return(0,j.jsx)("div",{children:"/"===e.path&&n?"":(0,j.jsx)(w,{path:e.path,children:e.pageName})},e.path)}))})]}),(0,j.jsx)(g,{}),(0,j.jsx)(s.hU,{ml:2,size:"md",icon:r?(0,j.jsx)(a.Tw,{}):(0,j.jsx)(a.Uq,{}),"aria-label":"Open Menu",display:{md:"none"},onClick:r?f:t})]}),r?(0,j.jsx)(d.xu,{pb:4,display:{md:"none"},children:(0,j.jsx)(d.Kq,{as:"nav",spacing:4,children:b.map((function(e){return(0,j.jsx)(d.xu,{children:"/"===e.path&&n?"":(0,j.jsx)(w,{path:e.path,children:e.pageName})},e.path)}))})}):null]})})}var N=function(e){var n=e.home,i=e.children;return(0,j.jsxs)("div",{children:[(0,j.jsxs)(r.default,{children:[(0,j.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,j.jsx)("meta",{name:"description",content:"Portfolio site"}),(0,j.jsx)("meta",{name:"theme-color"})]}),(0,j.jsx)(z,{home:n}),(0,j.jsx)("main",{children:i})]})}},2748:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSG:function(){return h},default:function(){return x}});var r=i(8527),l=i(6369),t=i(5113),o=i(6356),a=i(1664),s=i(1919),c=i(8186),d=i.n(c),u=i(5893),h=!0;function x(e){var n=e.profile;return(0,u.jsx)(s.Z,{home:!0,className:d().container,children:n?(0,u.jsxs)(r.xu,{flex:2,flexDirection:"row",marginX:10,marginY:14,children:[(null===n||void 0===n?void 0:n.name)&&(0,u.jsx)(r.X6,{size:"lg",fontSize:"50px",children:null===n||void 0===n?void 0:n.name}),(null===n||void 0===n?void 0:n.location)&&(0,u.jsx)(r.xv,{mt:1,color:(0,l.ff)("gray.500","cyan.300"),fontSize:"sm",children:null===n||void 0===n?void 0:n.location}),(null===n||void 0===n?void 0:n.email)&&(0,u.jsx)(r.xv,{mt:4,fontSize:"md",color:(0,l.ff)("cyan.500","cyan.100"),children:(0,u.jsx)("a",{href:"mailto:"+(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.email})}),(null===n||void 0===n?void 0:n.twitter_username)&&(0,u.jsx)(r.xv,{fontSize:"md",color:"cyan.500",children:(0,u.jsx)("a",{href:"https://twitter.com/"+(null===n||void 0===n?void 0:n.twitter_username),children:"Twitter:"})}),(null===n||void 0===n?void 0:n.bio)&&(0,u.jsx)(r.xv,{fontSize:"xl",mt:12,children:null===n||void 0===n?void 0:n.bio}),(null===n||void 0===n?void 0:n.public_repos)&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.iz,{my:8}),(0,u.jsx)(r.kC,{flexDirection:"row",alignItems:"center",children:(null===n||void 0===n?void 0:n.public_repos)&&(0,u.jsx)(a.default,{href:"/github",children:(0,u.jsxs)(t.zx,{bg:(0,l.ff)("blue.400","blue.400"),px:4,py:1,rounded:"md",_hover:{bg:"blue.500"},_focus:{bg:"blue.500"},_active:{bg:"blue.700"},children:[(0,u.jsx)(r.xv,{color:(0,l.ff)("white","white"),children:"Public repositories"}),(0,u.jsx)(r.Ug,{spacing:4,ml:2,children:(0,u.jsx)(o.Vp,{size:"lg",variant:"subtle",bg:(0,l.ff)("blue.300","blue.700"),color:(0,l.ff)("white","white"),fontSize:20,children:(0,u.jsx)(o.Sn,{children:null===n||void 0===n?void 0:n.public_repos})})})]})})})]})]}):(0,u.jsx)(r.M5,{mt:10,children:(0,u.jsx)(r.xv,{fontSize:20,children:"No data"})})})}},8581:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2748)}])},8186:function(){}},function(e){e.O(0,[797,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);