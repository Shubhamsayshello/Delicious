(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__1I0Wt",control:"Checkout_control__vv4jQ",actions:"Checkout_actions__1Enal",submit:"Checkout_submit__1Yao5",invalid:"Checkout_invalid__m16GD"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__vgfdg",total:"Cart_total__2qASJ",actions:"Cart_actions__2sD3x",ordertext:"Cart_ordertext__1Ylen","button--alt":"Cart_button--alt__3GKBj",button:"Cart_button__3j5yJ"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1nvHW",summary:"CartItem_summary__1xQHE",price:"CartItem_price__1Q0pC",amount:"CartItem_amount__2wDaL",actions:"CartItem_actions__1pQN9"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2Ythk",icon:"HeaderCartButton_icon__B2Dmo",badge:"HeaderCartButton_badge__3lj4e",bump:"HeaderCartButton_bump__3n-KN"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__OU3Px",description:"MealItem_description__tzWlr",price:"MealItem_price__tqwwq"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1N-zz","meals-appear":"AvailableMeals_meals-appear__3ozQN",MealsLoading:"AvailableMeals_MealsLoading__fDkAL",MealsError:"AvailableMeals_MealsError__3YjRA"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2EDzu",modal:"Modal_modal__1yhNC","slide-down":"Modal_slide-down__3Mdg0"}},,function(e,t,n){e.exports={header:"Header_header__eFqKW","main-image":"Header_main-image__HS21o"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__NjVoe"}},function(e,t,n){e.exports={card:"Card_card__RHKfC"}},function(e,t,n){e.exports={input:"Input_input__2hzp2"}},function(e,t,n){e.exports={form:"MealItemForm_form__25iVM"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),d=n(10),j=n.n(d),m=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(u).items,d=s.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(a?j.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:d})]})},b=n.p+"static/media/meals.f4d64d16.jpg",O=n(17),x=n.n(O),h=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)("header",{className:x.a.header,children:[Object(o.jsx)("h1",{children:"Delicious."}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:x.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},f=n(19),p=n.n(f),_=function(){return Object(o.jsxs)("section",{className:p.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n.n(v),N=n(12),y=n(20),g=n.n(y),A=function(e){return Object(o.jsx)("div",{className:g.a.card,children:e.children})},k=n(4),w=n(21),M=n.n(w),I=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:M.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(k.a)({ref:t},e.input))]})})),S=n(22),E=n.n(S),D=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{className:E.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(I,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},F=n(13),H=n.n(F),R=function(e){var t=Object(i.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:H.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:H.a.description,children:e.description}),Object(o.jsx)("div",{className:H.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(D,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},z=n(14),B=n.n(z),L=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),l=s[0],u=s[1],d=Object(i.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,c,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-ae77c-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong. Try again Later.");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{e().catch((function(e){u(!1),b(e.message)}))}catch(t){u(!1),b(t.message)}}),[]),l)return Object(o.jsx)("section",{className:B.a.MealsLoading,children:Object(o.jsx)("p",{children:"Loading.."})});if(m)return Object(o.jsx)("section",{className:B.a.MealsError,children:Object(o.jsx)("p",{children:m})});var O=n.map((function(e){return Object(o.jsx)(R,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:B.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:O})})})},P=function(){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(L,{})]})},T=n(15),Y=n.n(T),q=function(e){return Object(o.jsx)("div",{className:Y.a.backdrop,onClick:e.onClose})},J=function(e){return Object(o.jsx)("div",{className:Y.a.modal,children:Object(o.jsx)("div",{className:Y.a.content,children:e.children})})},Q=document.getElementById("overlays"),V=function(e){return Object(o.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(o.jsx)(q,{onClose:e.onClose}),Q),c.a.createPortal(Object(o.jsx)(J,{children:e.children}),Q)]})},K=n(7),W=n.n(K),$=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:W.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:W.a.summary,children:[Object(o.jsx)("span",{className:W.a.price,children:t}),Object(o.jsxs)("span",{className:W.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:W.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},G=n(5),U=n.n(G),X=n(3),Z=n.n(X),ee=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=function(e){return""===e.trim()},l=Object(i.useRef)(),u=Object(i.useRef)(),d=Object(i.useRef)(),j=Object(i.useRef)();return Object(o.jsxs)("form",{className:Z.a.form,onSubmit:function(t){t.preventDefault();var n=l.current.value,a=u.current.value,r=d.current.value,i=j.current.value,o=!s(n),m=!s(a),b=6===r.trim().length,O=!s(i);c({name:o,street:m,city:O,postalCode:b}),o&&m&&b&&O&&e.onConfirm({name:n,street:a,city:i,postalCode:r})},children:[Object(o.jsxs)("div",{className:"".concat(Z.a.control,"  ").concat(a.name?"":Z.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:l}),!a.name&&Object(o.jsx)("p",{children:"Enter a valid name."})]}),Object(o.jsxs)("div",{className:"".concat(Z.a.control,"  ").concat(a.street?"":Z.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:u}),!a.street&&Object(o.jsx)("p",{children:"Enter a valid street."})]}),Object(o.jsxs)("div",{className:"".concat(Z.a.control,"  ").concat(a.city?"":Z.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:j}),!a.city&&Object(o.jsx)("p",{children:"Enter a valid city."})]}),Object(o.jsxs)("div",{className:"".concat(Z.a.control,"  ").concat(a.postalCode?"":Z.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:d}),!a.postalCode&&Object(o.jsx)("p",{children:"Enter a valid Postal Code(6 characters long)."})]}),Object(o.jsxs)("div",{className:Z.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:Z.a.submit,children:"Confirm"})]})]})},te=n.p+"static/media/thumbs.03862cb5.png",ne=function(e){var t=Object(i.useContext)(u),n=Object(i.useState)(!1),a=Object(r.a)(n,2),c=a[0],l=a[1],d=Object(i.useState)(!1),j=Object(r.a)(d,2),m=j[0],b=j[1],O=Object(i.useState)(!1),x=Object(r.a)(O,2),h=x[0],f=x[1],p="$".concat(t.totalAmount.toFixed(2)),_=t.items.length>0,v=function(e){t.removeItem(e)},y=function(e){t.addItem(Object(k.a)(Object(k.a)({},e),{},{amount:1}))},g=function(){var e=Object(N.a)(C.a.mark((function e(n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch("https://react-http-ae77c-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:n,orderItems:t.items})});case 3:l(!1),b(!0),t.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(o.jsx)("ul",{className:U.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)($,{name:e.name,amount:e.amount,price:e.price,onRemove:v.bind(null,e.id),onAdd:y.bind(null,e)},e.id)}))}),w=Object(o.jsxs)("div",{className:U.a.actions,children:[Object(o.jsx)("button",{className:U.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:U.a.button,onClick:function(){f(!0)},children:"Order"})]}),M=Object(o.jsxs)(s.a.Fragment,{children:[A,Object(o.jsxs)("div",{className:U.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:p})]}),h&&Object(o.jsx)(ee,{onConfirm:g,onCancel:e.onClose}),!h&&w]}),I=Object(o.jsx)("p",{children:"Confirming order..."}),S=Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("p",{className:U.a.ordertext,children:"Order Confirmed."}),Object(o.jsx)("div",{className:U.a.ordertext,children:Object(o.jsx)("img",{src:te,alt:"Delicious food on your way!"})}),Object(o.jsx)("div",{className:U.a.actions,children:Object(o.jsx)("button",{className:U.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(V,{onClose:e.onClose,children:[!c&&!m&&M,c&&I,!c&&m&&S]})},ae=n(18),ce={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(k.a)(Object(k.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(k.a)(Object(k.a)({},l),{},{amount:l.amount-1});(s=Object(ae.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,ce},ie=function(e){var t=Object(i.useReducer)(re,ce),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var se=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ie,{children:[n&&Object(o.jsx)(ne,{onClose:function(){a(!1)}}),Object(o.jsx)(h,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(P,{})})]})};c.a.render(Object(o.jsx)(se,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.a145a509.chunk.js.map