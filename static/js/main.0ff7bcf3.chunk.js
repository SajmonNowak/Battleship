(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{42:function(n,e,t){"use strict";t.r(e);var i,r,a,o,c,s,u,h,l,p=t(0),d=t.n(p),f=t(26),g=t.n(f),b=t(6),x=t(9),m=t(5),j=function(n){var e=[],t=[],i=function(n){n.forEach((function(n){return r(n)}))},r=function(n){n.getPosition().forEach((function(t){return e[t].hasShip=n})),t.push(n)};!function(){for(var n=[],t=0;t<100;t++)n.push({hasShip:!1,isHitted:!1});e=n}();var a="undefined"===typeof n?0:n.length,o=0;a>0&&i(n);var c=function(){return t};return{placeShips:i,placeShip:r,getBoard:function(){return e},getField:function(n){return e[n]},getShips:c,receiveAttack:function(n){var t=e[n].hasShip;e[n].isHitted=!0,t&&(t.hit(n),t.isSunk()&&o++)},checkIfAllDestroyed:function(){if(a===o)return!0},replaceShip:function(n,t){c().find((function(e){return n.getId()===e.getId()})).getPosition().forEach((function(n){return e[n].hasShip=!1})),n.setPosition(t),t.forEach((function(t){return e[t].hasShip=n}))},getShipCount:function(){return a-o}}},v=function(n,e){var t=n,i=0,r=e,a=j(r);return{attack:function(n,e){n.getField(e).isHitted||n.receiveAttack(e)},increaseScore:function(){i++},getScore:function(){return i},getGameboard:function(){return a},getShips:function(){return r},getType:function(){return t}}},O=[{name:"Carrier",length:5,amount:1},{name:"Battleship",length:4,amount:1},{name:"Cruiser",length:3,amount:2},{name:"Destroyer",length:2,amount:2}],y=function(n){var e=function(n){return[n-11,n-10,n-9]},t=function(n){return[n-11,n-1,n+9]},i=function(n){return[n+9,n+10,n+11]},r=function(n){return[n-9,n+1,n+11]},a=[0,1,2,3,4,5,6,7,8,9],o=[0,10,20,30,40,50,60,70,80,90],c=[90,91,92,93,94,95,96,97,98,99],s=[9,19,29,39,49,59,69,79,89,99],u=[];n.forEach((function(n){var h,l=function(n){var e=[];return a.includes(n)&&e.push("top"),o.includes(n)&&e.push("left"),c.includes(n)&&e.push("bot"),s.includes(n)&&e.push("right"),e}(n);(h=u).push.apply(h,Object(x.a)(e(n)).concat(Object(x.a)(t(n)),Object(x.a)(r(n)),Object(x.a)(i(n)))),l.includes("top")&&(u=u.filter((function(t){return!e(n).includes(t)}))),l.includes("bot")&&(u=u.filter((function(e){return!i(n).includes(e)}))),l.includes("left")&&(u=u.filter((function(e){return!t(n).includes(e)}))),l.includes("right")&&(u=u.filter((function(e){return!r(n).includes(e)})))}));var h=[];return u.forEach((function(e){h.includes(e)||n.includes(e)||h.push(e)})),h},S=function(n,e,t){var i=[];if(e.getShips().forEach((function(n){var e;return(e=i).push.apply(e,Object(x.a)(n.getNearbyCoordinates()))})),void 0!==t&&0!==t.getPosition().length){var r=i.filter((function(n,e){return i.indexOf(n)!==e}));i=i.filter((function(n){return!t.getNearbyCoordinates().includes(n)})).concat(r)}return!!i.includes(n)},w=function(n,e){return n.some((function(n){return e.getField(n).hasShip}))},k=function(n,e){if("horizontal"===e){var t=10*parseInt(n[0]/10,10);if(10*parseInt(n[n.length-1]/10,10)>t)return!0}return n[0]<0||n[n.length-1]>99},C=function(n,e,t){return!!n.some((function(n){return S(n,e,t)}))},z=function(n,e,t,i){var r=j();return r.placeShips(e.getShips()),void 0!==i&&i.getPosition().forEach((function(n){return r.getField(n).hasShip=!1})),!(k(n,t)||C(n,e,i)||w(n,r))},A=function(n,e,t,i){var r=n,a=e,o="horizontal",c=t,s=y(e),u=[],h=i;return{hit:function(n){u.push(n)},isSunk:function(){return a.every((function(n){return u.includes(n)}))},getHits:function(){return u},getPosition:function(){return a},setPosition:function(n){a=n,s=y(n)},getName:function(){return r},getNearbyCoordinates:function(){return s},setNearbyCoordinates:function(n){s=n},getLength:function(){return c},getId:function(){return h},rotate:function(n){var e,t=a[0];"horizontal"===o?(e=a.map((function(n,e){return t+10*e})),o="vertical"):(e=a.map((function(n,e){return t+e})),o="horizontal"),z(e,n,o,this)?(n.replaceShip(this,e),s=y(a)):o="horizontal"===o?"vertical":"horizontal"},getAlignment:function(){return o}}},N=function n(e,t){for(var i=Math.floor(100*Math.random()),r=[i],a=1;a<e;a++)r.push(i+a);return z(r,t,"horizontal",void 0)||(r=n(e,t)),r},F=function(){var n=[],e=j();return O.forEach((function(t){for(var i=0;i<t.amount;i++){var r=Math.random(),a=A(t.name,N(t.length,e),t.length,1e3*Math.random());e.placeShip(a),r>.5&&a.rotate(e),n.push(a)}})),n},B=t(1),D=Object(p.createContext)(),P=D.Provider,E="Set players",I="Set message",H="Reset message",L="Restart game",M="Change game phase",T="set the winner of the game",G="set who can play this turn",R=function(n,e){var t,i=e.type,r=e.payload;switch(i){case E:return Object(m.a)(Object(m.a)({},n),{},{phase:"Play",players:{player:v("Human",Object(x.a)(r)),ai:v("AI",F())}});case I:return Object(m.a)(Object(m.a)({},n),{},{message:r});case H:return Object(m.a)(Object(m.a)({},n),{},{message:""});case L:return{phase:"Selection",players:{player:"",ai:""},turn:"player",message:"",winner:""};case M:return Object(m.a)(Object(m.a)({},n),{},{phase:r});case T:return Object(m.a)(Object(m.a)({},n),{},{winner:r});case G:return Object(m.a)(Object(m.a)({},n),{},{turn:r,message:"-- "+(t=r,("ai"===t?"Computer's":"Your")+" turn --")});default:return n}},W=function(n){var e=n.children,t=Object(p.useReducer)(R,{phase:"Selection",players:{},turn:"player",message:"",winner:""}),i=Object(b.a)(t,2),r=i[0],a=i[1];return Object(B.jsx)(P,{value:{state:r,dispatch:a},children:e})},U=!1,J=function(n){var e=n.getShips().find((function(n){return n.getHits().length>0&&!n.isSunk()}));return e||!1},X=function(n){var e=[];n.getBoard().forEach((function(n,t){!1===n.isHitted&&e.push(t)}));var t=Y(n,e);n.receiveAttack(t),tn(n,t)},Y=function n(e,t){var i=t[Math.floor(Math.random()*(t.length-1))];return q(e,t,i)?n(e,t):i},q=function(n,e,t){var i=[-10,-1,1,10];return t<10&&(i=[-1,1,10]),t>89&&(i=[-10,-1,1]),0===t&&(i=[1,10]),99===t&&(i=[-1,-10]),!!i.every((function(e){return n.getField(t+e).isHitted}))},K=function(n){var e=J(n),t=e.getHits().sort((function(n,e){return n-e})),i=e.getAlignment();"horizontal"===i?Q(n,t,i):V(n,t,i),nn(n,e)},Q=function(n,e,t){var i=e[0]-1,r=e[e.length-1]+1;Z(i,n,t)?(n.receiveAttack(i),tn(n,i)):(n.receiveAttack(r),tn(n,r))},V=function(n,e,t){var i=e[0]-10,r=e[e.length-1]+10;Z(i,n,t)?(n.receiveAttack(i),tn(n,i)):(n.receiveAttack(r),tn(n,r))},Z=function(n,e,t){var i=e.getField(n);return!($(n)||i.isHitted||_(n,t))},$=function(n){return n<0||n>99},_=function(n,e){if("horizontal"===e){var t=10*parseInt(n/10,10);if(10*parseInt((n+1)/10,10)>t)return!0}return!1},nn=function(n,e){e.isSunk()&&en(n,e.getPosition()[0])},en=function(n,e){n.getField(e).hasShip.getNearbyCoordinates().forEach((function(e){return n.receiveAttack(e)}))},tn=function(n,e){U=!!n.getField(e).hasShip},rn=function(n,e){if(n.checkIfAllDestroyed())return e({type:M,payload:"End"}),e({type:T,payload:"Computer"}),!0},an=function(n,e,t){var i=n.getGameboard();J(i)?K(i):X(i),rn(i,t)||on(U?"ai":"player",n,e,t)},on=function(n,e,t,i){"ai"===n?(i({type:G,payload:"ai"}),setTimeout((function(){return an(e,t,i)}),1250)):i({type:G,payload:"player"})},cn=function(n,e){n.getField(e).hasShip.isSunk()&&un(n,e)},sn=function(n,e){n.checkIfAllDestroyed()&&(e({type:M,payload:"End"}),e({type:T,payload:"player"}))},un=function(n,e){n.getField(e).hasShip.getNearbyCoordinates().forEach((function(e){return n.receiveAttack(e)}))},hn=function(n,e,t,i){var r=e.getGameboard();r.receiveAttack(t),r.getField(t).hasShip?(cn(r,t),sn(r,i),on("player",n,e,i)):on("ai",n,e,i)},ln=t(3),pn=t(4),dn=pn.b.div(i||(i=Object(ln.a)(["\n  width: 50px;\n  height: 50px;\n  border: 1px solid;\n  background-color: ",";\n  font-size: 50px;\n  text-align: center;\n\n  .flame {\n    width: 50px;\n    height: 50px;\n    animation: grow 1s;\n  }\n  @keyframes grow {\n    0% {\n      transform: scale(0);\n    }\n    75% {\n      transform: scale(1.25);\n    }\n\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  .missed {\n    animation: shake 0.5s;\n  }\n\n  @keyframes shake {\n    10%,\n    90% {\n      transform: translate3d(-0.5px, 0, 0);\n    }\n\n    20%,\n    80% {\n      transform: translate3d(1px, 0, 0);\n    }\n\n    30%,\n    50%,\n    70% {\n      transform: translate3d(-2px, 0, 0);\n    }\n\n    40%,\n    60% {\n      transform: translate3d(2px, 0, 0);\n    }\n  }\n\n  @media (max-width: 1135px) {\n    width: 25px;\n    height: 25px;\n    font-size: 25px;\n\n    .flame {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])),(function(n){return n.hasShip?"#f02d3a":n.hasWater?"#62b4cf":"white"})),fn=t.p+"static/media/flame.56be189b.png",gn=function(n){var e=n.field,t=n.coordinates,i=n.belongsTo,r=Object(p.useState)(!1),a=Object(b.a)(r,2),o=a[0],c=a[1],s=Object(p.useContext)(D),u=s.state,h=s.dispatch,l=u.players.player,d=u.players.ai,f=function(){return Object(B.jsx)("img",{className:"flame",alt:"X",src:fn})},g=function(){return Object(B.jsx)("div",{className:"missed",children:"\u2022"})};return"Human"===i?Object(B.jsx)(dn,{hasShip:e.hasShip,hasWater:!0,children:e.isHitted&&Object(B.jsx)("div",{children:e.hasShip?f():g()})}):Object(B.jsx)(dn,{hasShip:e.isHitted&&e.hasShip,hasWater:!e.hasShip&&e.isHitted,onClick:"player"===u.turn?function(){!1===o&&(h({type:H}),hn(l,d,t,h),c(!0))}:void 0,className:"cell",children:e.isHitted&&Object(B.jsx)("div",{children:e.hasShip?f():g()})})},bn=pn.b.div(r||(r=Object(ln.a)(["\n  width: 100%;\n  margin-top: 5px;\n  font-size: 24px;\n  color: #f4a261;\n  text-align: center;\n  font-weight: bold;\n\n  @media (max-width: 650px){\n    font-size: 16px;\n  }\n"]))),xn=function(n){var e=n.player,t=e.getGameboard();return Object(B.jsxs)("div",{className:"gameBoard",children:[t.getBoard().map((function(n,t){return Object(B.jsx)(gn,{field:n,coordinates:t,belongsTo:e.getType()},t)})),Object(B.jsxs)(bn,{children:[t.getShipCount()," ships left"]})]})},mn=pn.b.div(a||(a=Object(ln.a)(["\n  position: relative;\n  padding: 50px;\n  background-color: #006494;\n\n  .gameboardsContainer {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    justify-content: space-around;\n  }\n\n  .gameBoard {\n    width: 500px;\n    height: 500px;\n    border: 1px solid;\n    display: flex;\n    flex-wrap: wrap;\n    box-sizing: content-box;\n    border: 3px solid black;\n  }\n\n  .button {\n    font-size: 20px;\n    background-color: #e67a00;\n    font-weight: bold;\n    height: 50px;\n    border: 3px solid black;\n\n    &:hover {\n      background-color: #ff8800;\n    }\n  }\n\n  @media (max-width: 1135px) {\n    .gameBoard {\n      width: 250px;\n      height: 250px;\n    }\n  }\n\n  @media (max-width: 650px) {\n\n    .gameboardsContainer {\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .gameBoard {\n      margin-bottom: 50px;\n    }\n  }\n"]))),jn=pn.b.div(o||(o=Object(ln.a)(["\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 50px;\n  color: white;\n  background-color: #006494;\n\n  button {\n    margin-top: 20px;\n    width: 200px;\n    height: 50px;\n  }\n\n  @media (max-width: 650px){\n    font-size: 26px;\n  }\n"]))),vn=function(n){var e=n.winner,t=n.dispatch;return Object(B.jsxs)(jn,{children:[Object(B.jsxs)("h2",{children:[e," wins"]}),Object(B.jsx)("button",{className:"button",onClick:function(){t({type:L})},children:"Play again!"})]})},On=pn.b.div(c||(c=Object(ln.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .shipList {\n    margin-left: 50px;\n    max-width: 300px;\n  }\n\n  .ship {\n    display: flex;\n    flex-direction: row;\n    margin: 20px;\n  }\n\n  .moveable {\n    cursor: move;\n  }\n\n  .isOver {\n    position: "absolute";\n    top: 0;\n    left: 0;\n    height: "100%";\n    width: "100%";\n    z-index: 1;\n    opacity: 0.5;\n    background-color: "yellow";\n  }\n\n  .mainUI {\n    display: flex;\n    justify-content: center;\n  }\n\n  .buttonContainer {\n    margin: 0 auto;\n    margin-top: 50px;\n    display: flex;\n  }\n\n  .randomButton {\n    width: 150px;\n  }\n\n  .playButton {\n    margin-left: 50px;\n    width: 400px;\n    height: 50px;\n    font-weight: bold;\n\n    &.deactivated {\n      background-color: grey;\n    }\n\n    &.active {\n      &:hover {\n        background-color: #ff8800;\n      }\n    }\n\n    &:hover {\n      background-color: none;\n    }\n  }\n\n  @media (max-width: 660px) {\n    .mainUI {\n      flex-direction: column;\n    }\n\n    .playButton {\n      width: 200px;\n      margin-left: 0px;\n      margin-top: 10px;\n    }\n\n    .randomButton {\n      width: 200px;\n    }\n\n    .buttonContainer {\n      flex-direction: column;\n    }\n  }\n']))),yn=t(48),Sn=t(49),wn=function(n){var e=n.field,t=n.coordinates,i=n.board,r=n.render,a=n.selectedShip,o=n.changeSelectedNumber,c=n.setSelectedShip,s=function(n,e){var i=[];if("horizontal"===n)for(var r=0;r<e;r++)i.push(t+r);else for(var a=0;a<e;a++)i.push(t+10*a);return i},u=Object(yn.a)({accept:["ship","cell"],canDrop:function(n){var e=s(n.ship.getAlignment(),n.ship.getLength());return z(e,i,n.ship.getAlignment(),n.ship)},drop:function(n,e){var t=s(n.ship.getAlignment(),n.ship.getLength());void 0!==n.shipIsOnField?i.replaceShip(n.ship,t):(n.ship.setPosition(t),i.placeShip(n.ship)),r(),n.changeNumber&&n.changeNumber()},collect:function(n){return{isOver:!!n.isOver(),canDrop:!!n.canDrop()}}}),h=Object(b.a)(u,2),l=h[0],p=l.isOver,d=l.canDrop,f=h[1],g=Object(Sn.a)({type:"cell",item:{ship:i.getField(t).hasShip,shipIsOnField:!0},collect:function(n){return{isDragging:!!n.isDragging()}}}),x=Object(b.a)(g,2),m=x[0].isDragging,j=x[1],v=f;i.getField(t).hasShip&&(v=j);return Object(B.jsx)(dn,{ref:v,hasShip:e.hasShip,hasWater:!e.hasShip,isOver:p,style:{opacity:m?.5:1,backgroundColor:d&&p?"green":""},onClick:e.hasShip?function(){var n=i.getField(t).hasShip;n.rotate(i),i.replaceShip(n,n.getPosition()),r()}:void 0!==a?function(){var n=s(a.getAlignment(),a.getLength());z(n,i,a.getAlignment(),a)&&(a.setPosition(n),i.placeShip(a),o(),c(void 0),r())}:void 0,children:S(t,i)&&Object(B.jsx)("div",{children:"\u2022"})})},kn=function(){return Object(B.jsx)(dn,{hasShip:!0})},Cn=function(n){var e=n.shipArray,t=n.shipData,i=n.Gameboard,r=n.selectToPosition,a=Object(p.useState)(t.amount),o=Object(b.a)(a,2),c=o[0],s=o[1],u=function(){s(c-1)},h=Object(Sn.a)({type:"ship",item:{ship:e[c-1],changeNumber:u},collect:function(n){return{isDragging:!!n.isDragging()}}}),l=Object(b.a)(h,2),d=l[0].isDragging,f=l[1];(c<1||6===i.getShips().length)&&(f=void 0);return Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{children:c}),Object(B.jsx)("div",{ref:f,onClick:c>0?function(){return r(e[c-1],u)}:void 0,style:{opacity:d?.5:1,fontSize:25,fontWeight:"bold"},className:"ship ".concat(c>0?"moveable":""),children:function(){for(var n=[],t=0;t<e[0].getLength();t++)n.push(Object(B.jsx)(kn,{},t));return n}()})]})},zn=t(47),An=t(31),Nn=function(n){var e=n.children;return Object(B.jsx)(zn.a,{backend:An.a,children:e})},Fn=pn.b.div(s||(s=Object(ln.a)(["\n  display: flex;\n  color: #ff8800;\n  font-weight: bold;\n  font-size: 20px;\n  margin-top: 50px;\n  margin-left: 20px;\n  img {\n    width: 50px;\n    height: 50px;\n    margin-right: 10px;\n  }\n\n   @media (max-width:1140px){\n     font-size: 12px;\n\n     img {\n       width: 25px;\n       height: 25px;\n     }\n   }\n"]))),Bn=t.p+"static/media/light-bulb.27cc7f2e.png",Dn=function(){return Object(B.jsxs)(Fn,{children:[Object(B.jsx)("div",{children:Object(B.jsx)("img",{src:Bn,alt:""})}),Object(B.jsxs)("div",{children:[Object(B.jsx)("p",{children:" Drag&Drop the ships on the right position"}),Object(B.jsx)("p",{children:"Click on the ship when placed to rotate"})]})]})},Pn=void 0,En=function(){var n=Object(p.useContext)(D).dispatch,e=Object(p.useState)(j()),t=Object(b.a)(e,2),i=t[0],r=t[1],a=Object(p.useState)(0),o=Object(b.a)(a,2),c=o[0],s=o[1],u=Object(p.useState)(!1),h=Object(b.a)(u,2),l=h[0],d=h[1],f=Object(p.useState)(void 0),g=Object(b.a)(f,2),x=g[0],m=g[1],v=function(){s(c+1)},y=function(n,e){m(n),Pn=e,s(c+1)};return Object(p.useEffect)((function(){6===i.getShips().length&&d(!0)}),[i.getShips().length]),Object(B.jsx)(Nn,{children:Object(B.jsxs)(On,{children:[Object(B.jsxs)("div",{className:"mainUI",children:[Object(B.jsx)("div",{className:"gameBoard",children:i.getBoard().map((function(n,e){return Object(B.jsx)(wn,{field:n,coordinates:e,board:i,render:v,selectedShip:x,setSelectedShip:m,changeSelectedNumber:Pn},e)}))}),Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{className:"shipList",children:O.map((function(n,e){for(var t=[],r=0;r<n.amount;r++)t.push(A(n.name,[],n.length,10*e+r));return Object(B.jsx)(Cn,{shipArray:t,shipData:n,Gameboard:i,selectToPosition:y},e)}))}),Object(B.jsx)(Dn,{})]})]}),Object(B.jsxs)("div",{className:"buttonContainer",children:[Object(B.jsx)("button",{className:" button randomButton",onClick:function(){r(j(F())),s(c+1)},children:"Random"}),Object(B.jsx)("button",{onClick:l?function(){n({type:E,payload:i.getShips()})}:void 0,className:"button playButton ".concat(l?"active":"deactivated"),children:"Play"})]})]})})},In=pn.b.div(u||(u=Object(ln.a)(["\n  margin: 0 auto;\n  width: fit-content;\n  min-height: 40px;\n  text-align: center;\n  color: #f4a261;\n  font-size: 32px;\n  font-weight: bold;\n  border-top: 4px solid black;\n  border-bottom: 4px solid black;\n  margin-top: 50px;\n\n  @media (max-width: 650px){\n    font-size: 24px;\n    margin-top: 20px;\n  }\n"]))),Hn=function(){var n=Object(p.useContext)(D),e=n.state,t=n.dispatch;return Object(B.jsx)("div",{children:Object(B.jsxs)(mn,{children:["Selection"===e.phase&&Object(B.jsx)(En,{}),"Play"===e.phase&&Object(B.jsxs)(d.a.Fragment,{children:[Object(B.jsxs)("div",{className:"gameboardsContainer",children:[Object(B.jsx)(xn,{player:e.players.player}),Object(B.jsx)(xn,{player:e.players.ai})]}),Object(B.jsx)(In,{color:e.messageColor,children:e.message})]}),"End"===e.phase&&Object(B.jsx)(vn,{winner:e.winner,dispatch:t})]})})},Ln=pn.b.div(h||(h=Object(ln.a)(["\n  background-color: #006494;\n  h1 {\n    font-size: 124px;\n    text-align: center;\n    color: #f4a261;\n    text-transform: uppercase;\n  }\n\n  @media (max-width: 1100px){\n    h1 {\n      font-size: 62px;\n    }\n  }\n\n  @media (max-width: 600px){\n    h1 {\n      font-size: 36px;\n    }\n  }\n"]))),Mn=function(){return Object(B.jsx)(Ln,{children:Object(B.jsx)("h1",{children:"Battleships"})})},Tn=pn.b.div(l||(l=Object(ln.a)(["\n  background-color: #006494;\n  height: 100vh;\n"])));var Gn,Rn=function(){return Object(B.jsx)(Tn,{children:Object(B.jsxs)(W,{children:[Object(B.jsx)(Mn,{}),Object(B.jsx)(Hn,{})]})})},Wn=Object(pn.a)(Gn||(Gn=Object(ln.a)(['\n@import url(\'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto&display=swap\');;\n  * {\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n    font-family: "Roboto", sans-serif ;\n  }\n  \n\n  h1,h2 {\n    font-family: "Abril Fatface"\n  }\n\n'])));g.a.render(Object(B.jsxs)(d.a.StrictMode,{children:[Object(B.jsx)(Wn,{}),Object(B.jsx)(Rn,{})]}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.0ff7bcf3.chunk.js.map