(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{257:function(e,t,a){e.exports=a(439)},262:function(e,t,a){},439:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(57),l=a.n(i),s=(a(262),a(26)),c=a(27),o=a(28),u=a(29),m=a(31),d=a(69),h=a(51),p=a(35),E=a.n(p);a(279);var g=function(){return r.a.createElement("div",{className:"ui orange inverted three item stackable menu"},r.a.createElement(d.b,{className:"item",to:"/"},"Home"),r.a.createElement(d.b,{className:"item",to:"/menu"},"Menu"),r.a.createElement(d.b,{className:"item",to:"/orders"},"Your orders"))},f=a(20),v=a(112),b=a(246),y=a(450),k=a(25),N=a.n(k),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this))).state={modalOpen:!1,feedback:"",name:" ",image:" ",toppings:[],size:"",crust:"",quantity:1,price:0},a.handleWindowOpen=a.handleWindowOpen.bind(Object(f.a)(a)),a.handleWindowClose=a.handleWindowClose.bind(Object(f.a)(a)),a.handleAddOrder=a.handleAddOrder.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleWindowOpen",value:function(){this.setState({modalOpen:!0,name:this.props.menuItem.name,image:this.props.menuItem.image,toppings:this.props.menuItem.toppings})}},{key:"handleWindowClose",value:function(){this.setState({modalOpen:!1,feedback:"",name:" ",image:" ",toppings:[],size:"",crust:"",quantity:1,price:0})}},{key:"handleAddOrder",value:function(){var e=this.state,t=e.size,a=e.crust,n=e.quantity;return""===t||""===a?this.setState({feedback:"Please choose the size and crust for your pizza"}):n<=0||n>10?this.setState({feedback:"Order quantity cannot be less than 1, or more than 10."}):(this.addOrders(),void this.handleWindowClose())}},{key:"addOrders",value:function(){var e=this;E.a.post("/api/orders",{pizza:this.state.name,image:this.state.image,toppings:this.state.toppings,size:this.state.size,crust:this.state.crust,quantity:this.state.quantity,price:this.state.price}).then((function(t){e.setState({feedback:t.data.status}),N()(e.state.feedback,"Thank you!","success").then((function(){return e.setState({feedback:" ",quantity:1})}))})).catch((function(t){console.log(t),e.setState({feedback:t.response.data.errorMessage}),N()({title:e.state.feedback,text:"Please try again.",icon:"error",dangerMode:!0}).then((function(){return e.setState({feedback:" ",quantity:1})}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"ui piled segment"},r.a.createElement("img",{className:"ui fluid bordered image",src:this.props.menuItem.image,alt:""}),r.a.createElement("div",{className:"ui center aligned segment"},r.a.createElement("h3",null,this.props.menuItem.name)),r.a.createElement("p",null,"Toppings:\xa0",this.props.menuItem.toppings.map((function(e){return r.a.createElement("span",{key:e},e)})).reduce((function(e,t){return[e,", ",t]}))),r.a.createElement("p",null,"Small: $",this.props.menuItem.cost.small," ",r.a.createElement("br",null),"Medium: $",this.props.menuItem.cost.medium," ",r.a.createElement("br",null),"Large: $",this.props.menuItem.cost.large," ",r.a.createElement("br",null)),r.a.createElement(v.a,{trigger:r.a.createElement(b.a,{onClick:this.handleWindowOpen,className:"ui inverted orange button"},"Add to order"),open:this.state.modalOpen,onClose:this.handleWindowClose},r.a.createElement(v.a.Header,null,this.props.menuItem.name),r.a.createElement(v.a.Content,null,r.a.createElement(y.a,{className:"ui form"},r.a.createElement("div",{className:"inline fields"},r.a.createElement(y.a.Field,null,r.a.createElement("h4",null,"Choose your size:")),this.props.menuItem.size.map((function(t){return r.a.createElement(y.a.Field,{key:t},r.a.createElement("div",{className:"ui radio checkbox"},r.a.createElement("input",{type:"radio",name:"size",value:t,onChange:function(t){return e.setState({size:t.target.value})}}),r.a.createElement("label",null,t)))}))),r.a.createElement("br",null),r.a.createElement("div",{className:"inline fields"},r.a.createElement(y.a.Field,null,r.a.createElement("h4",null,"Choose your crust:")),this.props.menuItem.crust.map((function(t){return r.a.createElement(y.a.Field,{key:t},r.a.createElement("div",{className:"ui radio checkbox"},r.a.createElement("input",{type:"radio",name:"crust",value:t,onChange:function(t){return e.setState({crust:t.target.value})}}),r.a.createElement("label",null,t)))}))),r.a.createElement("br",null),r.a.createElement("h4",null,"Quantity (Maximum of 10 orders per pizza only)"),r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"number",name:"quantity",min:"1",max:"10",value:this.state.quantity,onChange:function(t){return e.setState({quantity:t.target.value})}})),r.a.createElement("br",null),r.a.createElement("h4",{className:"ui negative message"},this.state.feedback))),r.a.createElement(v.a.Actions,null,r.a.createElement(b.a,{onClick:this.handleWindowClose},"Cancel"),r.a.createElement(b.a,{onClick:this.handleAddOrder},"Place order")))))}}]),t}(r.a.Component);var w=function(e){var t=e.menu;return r.a.createElement("div",{className:"ui container"},r.a.createElement("h2",{className:"ui header centered"},r.a.createElement("img",{className:"ui image",src:"https://images.vexels.com/media/users/3/157205/isolated/preview/5dd5e3530e81a4d5afdd883d27d43de2-black-and-white-pizza-icon-by-vexels.png",alt:""}),r.a.createElement("div",{className:"content"},"MenuList")),r.a.createElement("div",{className:"ui two column stackable grid container"},t.map((function(e){return r.a.createElement(O,{key:e.id,menuItem:e})}))))},z=a(449),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this))).state={orders:[],total:0,feedback:" ",pizza:" ",open:!1,id:""},a.handleOpenModal=a.handleOpenModal.bind(Object(f.a)(a)),a.handleDeleteItem=a.handleDeleteItem.bind(Object(f.a)(a)),a.handleCancel=a.handleCancel.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"fetchOrders",value:function(){var e=this;E.a.get("/api/orders").then((function(t){e.setState({orders:t.data.order,total:t.data.total})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.fetchOrders()}},{key:"handleOpenModal",value:function(e,t){this.setState({open:!0,id:e,pizza:t})}},{key:"handleDeleteItem",value:function(){var e=this,t="/api/orders/delete/".concat(this.state.id);E.a.post(t,{itemId:this.state.id}).then((function(t){e.setState({feedback:t.data.status}),N()(e.state.feedback,"You may close this window now","success").then((function(){return e.setState({feedback:" "})})),e.fetchOrders()})).catch((function(t){e.setState({feedback:t.response.data.errorMessage}),N()({title:e.state.feedback,text:"Please try again.",icon:"error",dangerMode:!0}).then((function(){return e.setState({feedback:" "})}))})),this.setState({open:!1})}},{key:"handleCancel",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this;return Array.isArray(this.state.orders)&&this.state.orders.length?r.a.createElement("div",{className:"ui container"},r.a.createElement("h2",{className:"ui header centered"},r.a.createElement("img",{className:"ui image",src:"https://images.vexels.com/media/users/3/157205/isolated/preview/5dd5e3530e81a4d5afdd883d27d43de2-black-and-white-pizza-icon-by-vexels.png",alt:""}),r.a.createElement("div",{className:"content"},"Your Orders")),r.a.createElement("div",{className:"ui two column stackable grid container"},this.state.orders.map((function(t){return r.a.createElement("div",{key:t._id,className:"column"},r.a.createElement("div",{className:"ui piled segment"},r.a.createElement("img",{className:"ui fluid bordered image",src:t.image,alt:""}),r.a.createElement("div",{className:"ui center aligned segment"},r.a.createElement("h3",null,t.pizza)),r.a.createElement("p",null,"Toppings:\xa0",t.toppings.map((function(e){return r.a.createElement("span",{key:e},e)})).reduce((function(e,t){return[e,", ",t]}))),r.a.createElement("p",null,"Size: ",t.size),r.a.createElement("p",null,"Quantity: ",t.quantity),r.a.createElement("p",null,"Price: ",t.price),r.a.createElement(b.a,{className:"ui inverted red button",onClick:function(){return e.handleOpenModal(t._id,t.pizza)}},"Remove"),r.a.createElement(z.a,{open:e.state.open,header:"Please confirm to delete item",content:e.state.pizza,onCancel:e.handleCancel,onConfirm:e.handleDeleteItem}),r.a.createElement("br",null)))})),r.a.createElement("div",{className:"ui header centered"},r.a.createElement("h3",null,"Total price: ",this.state.total),r.a.createElement("a",{className:"ui green button",href:"/checkout"},"Proceed to Checkout")))):r.a.createElement("div",{className:"ui text container"},r.a.createElement("div",{className:"ui big warning message"},r.a.createElement("p",null,"Your order queue is currently empty.")))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this))).state={name:"",phone:"",total:0},a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/api/orders").then((function(t){e.setState({total:t.data.total})})).catch((function(e){return console.log(e)}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.name,n=t.phone;""===a||a.length<2?N()({title:"Name is invalid.",text:"Please try again.",icon:"error",dangerMode:!0}):""===n||n.length<10?N()({title:"Phone number is invalid.",text:"Please try again.",icon:"error",dangerMode:!0}):(this.saveCustomer(a,n),this.deleteOrder())}},{key:"saveCustomer",value:function(e,t){E.a.post("/api/customers",{name:e,phone:t}).then((function(e){return N()("Your order is on the way.","Thank you!","success")})).catch((function(e){N()({title:e.response.data.errorMessage,text:"Please try again.",icon:"error",dangerMode:!0})}))}},{key:"deleteOrder",value:function(){E.a.post("/api/orders/delete").then((function(e){N()("Your order is on the way.","Thank you!","success").then((function(){return window.location.replace("/")}))})).catch((function(e){N()({title:"Ooops. There was an error deleeting your order.",text:"Please try again.",icon:"error",dangerMode:!0})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui text container"},r.a.createElement("h2",{className:"ui header centered"},r.a.createElement("img",{className:"ui image",src:"https://images.vexels.com/media/users/3/157205/isolated/preview/5dd5e3530e81a4d5afdd883d27d43de2-black-and-white-pizza-icon-by-vexels.png",alt:""}),r.a.createElement("div",{className:"content"},"Checkout")),r.a.createElement("h3",null,"Your balance is: ",this.state.total),r.a.createElement("br",null),r.a.createElement("form",{className:"ui form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Name: "),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})},required:!0})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Phone"),r.a.createElement("input",{type:"text",name:"phone",value:this.state.phone,onChange:function(t){return e.setState({phone:t.target.value})},required:!0})),r.a.createElement("input",{class:"ui green button",type:"submit",value:"Submit Order"})),r.a.createElement("div",{className:"ui piled segment"},r.a.createElement("p",null,"Please note that this app is only for a testing; not a real app.")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(r.a.Component);var j=function(){return r.a.createElement("div",{className:"ui inverted orange vertical footer segment"},r.a.createElement("div",{className:"ui center aligned container"},"William Gilbert Go \xa9"))};var x=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui text container"},r.a.createElement("img",{className:"ui medium image",src:"https://images.vexels.com/media/users/3/157205/isolated/preview/5dd5e3530e81a4d5afdd883d27d43de2-black-and-white-pizza-icon-by-vexels.png",alt:""}),r.a.createElement("h2",{className:"ui header centered"},r.a.createElement("div",{className:"content"},"Will's Pizzeria")),r.a.createElement("div",{className:"ui piled segment"},r.a.createElement("h2",null,"About this app"),r.a.createElement("p",null,"This pizza ordering app is inspired by an exisisting final project that I completed and submitted in my Node JS course (COMP 2912) at the British Columbia Institute of Technology. I added a React flavour on the front end of the app to enhance user interface and user experience. ",r.a.createElement("br",null),r.a.createElement("br",null),"This app is built in MongoDB, Express, React, and Node (MERN) stack.")),r.a.createElement("div",{className:"ui piled segment"},r.a.createElement("h2",null,"About me"),r.a.createElement("p",null,"Hello everyone,"),r.a.createElement("p",null,"My name is William Gilbert Go. I am a hard-working developer with an aptitude for creating elegant solutions in the least amount of time. Building mobile-first, easy to use, user-friendly web applications is truly a passion of mine. I have developed online booking and registration systems, web portal, and casino-themed online games."),r.a.createElement("p",null,"As someone who is passionate about software architecture and cloud computing, I actively seek out new technologies and stay up-to-date on industry trends and innovations. In addition, I attend web developer meetups and hackathons in Vancouver.")),r.a.createElement("div",{className:"ui orange inverted center aligned circular segment"},r.a.createElement("h2",{className:"ui header"},"Visit my site ",r.a.createElement("a",{className:"ui white",href:"https://devwilliamgo.github.io/williamgo/",target:"_blank",rel:"noopener noreferrer"},"here"))),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(j,null))},I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this))).state={menu:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"fetchMenu",value:function(){var e=this;E.a.get("/api/menu").then((function(t){e.setState({menu:t.data})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.fetchMenu()}},{key:"render",value:function(){var e=this;return this.state.menu.length?r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:x}),r.a.createElement(h.a,{path:"/menu",render:function(t){return r.a.createElement(w,Object.assign({},t,{menu:e.state.menu}))}}),r.a.createElement(h.a,{path:"/orders",component:C}),r.a.createElement(h.a,{path:"/checkout",component:S})))):r.a.createElement("div",{className:"ui icon message"},r.a.createElement("i",{className:"notched circle loading icon"}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},"Just one second"),r.a.createElement("p",null,"We're fetching that content for you.")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[257,1,2]]]);
//# sourceMappingURL=main.cbfcdba1.chunk.js.map