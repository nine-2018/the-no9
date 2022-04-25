(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8d3f8f8"],{3035:function(e,t,c){"use strict";var n=c("7a23"),l={class:"d-flex justify-content-center"},a={"aria-label":"Page navigation example"},r={class:"pagination"},o=Object(n["createElementVNode"])("span",{"aria-hidden":"true"},"«",-1),d=[o],i={key:0,class:"page-link"},s=["onClick"],b=Object(n["createElementVNode"])("span",{"aria-hidden":"true"},"»",-1),O=[b];function m(e,t,c,o,b,m){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[Object(n["createElementVNode"])("nav",a,[Object(n["createElementVNode"])("ul",r,[Object(n["createElementVNode"])("li",{class:Object(n["normalizeClass"])([{disabled:!c.pages.has_pre},"page-item"])},[Object(n["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=Object(n["withModifiers"])((function(e){return m.updatePage(c.pages.current_page-1)}),["prevent"]))},d)],2),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.pages.total_pages,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{class:Object(n["normalizeClass"])(["page-item",{active:e===c.pages.current_page}]),key:e},[e===c.pages.current_page?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",i,Object(n["toDisplayString"])(e),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{key:1,class:"page-link",href:"#",onClick:Object(n["withModifiers"])((function(t){return m.updatePage(e)}),["prevent"])},Object(n["toDisplayString"])(e),9,s))],2)})),128)),Object(n["createElementVNode"])("li",{class:Object(n["normalizeClass"])(["page-item",{disabled:!c.pages.has_next}])},[Object(n["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=Object(n["withModifiers"])((function(e){return m.updatePage(c.pages.current_page+1)}),["prevent"]))},O)],2)])])])}var u={props:["pages"],methods:{updatePage:function(e){this.$emit("emitPages",e)}}},p=c("d959"),j=c.n(p);const h=j()(u,[["render",m]]);t["a"]=h},"5be2":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),l={class:"div-backend-top"},a={class:"table mt-4"},r=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",null,"購買時間"),Object(n["createElementVNode"])("th",null,"Email"),Object(n["createElementVNode"])("th",null,"購買款項"),Object(n["createElementVNode"])("th",null,"應付金額"),Object(n["createElementVNode"])("th",null,"是否付款"),Object(n["createElementVNode"])("th",null,"編輯")])],-1),o=["textContent"],d={class:"list-unstyled"},i={class:"form-check form-switch"},s=["id","onUpdate:modelValue","onChange"],b=["for"],O={key:0},m={key:1},u=["onClick"],p=["onClick"];function j(e,t,c,j,h,E){var g=Object(n["resolveComponent"])("Loading"),k=Object(n["resolveComponent"])("OrderModal"),N=Object(n["resolveComponent"])("DeleteProduct"),V=Object(n["resolveComponent"])("Pagination");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[Object(n["createVNode"])(g,{active:h.isLoading,"z-index":1060},null,8,["active"]),Object(n["createElementVNode"])("table",a,[r,Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(h.orders,(function(t,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:c},[Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.$filters.date(t.create_at)),1),Object(n["createElementVNode"])("td",null,[t.user?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",{key:0,textContent:Object(n["toDisplayString"])(t.user.email)},null,8,o)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("ul",d,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t.products,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:t},[Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.product.title)+" 　　數量："+Object(n["toDisplayString"])(e.qty)+" "+Object(n["toDisplayString"])(e.product.unit),1)])})),128))])]),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.total),1),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",i,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",id:"flexSwitchCheckChecked","onUpdate:modelValue":function(e){return t.is_paid=e},onChange:function(e){return E.updateOrder(t)},checked:""},null,40,s),[[n["vModelCheckbox"],t.is_paid]]),Object(n["createElementVNode"])("label",{class:"form-check-label",for:"flexSwitchCheckChecked"},[t.is_paid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",O,"已付款")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",m,"未付款"))],8,b)])]),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-sm btn-outline-secondary border-end-0 rounded-0",onClick:function(e){return E.openModal(t)}}," 檢視 ",8,u),Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-sm btn-outline-danger rounded-0",onClick:function(e){return E.delOrderModal(t)}}," 刪除 ",8,p)])])})),128))])]),Object(n["createVNode"])(k,{order:h.tempOrder,onUpdateOrder:E.updateOrder,ref:"orderModal"},null,8,["order","onUpdateOrder"]),Object(n["createVNode"])(N,{item:h.tempOrder,onDelProduct:E.delOrder,ref:"deleteProduct"},null,8,["item","onDelProduct"]),Object(n["createVNode"])(V,{pages:h.pagination,onEmitPages:E.getOrders},null,8,["pages","onEmitPages"])])}var h=c("5530"),E=(c("99af"),c("3035")),g=(c("b0c0"),{class:"modal fade",id:"orderModal",ref:"modal","aria-hidden":"true","aria-labelledby":"exampleModalToggleLabel",tabindex:"-1"}),k={class:"modal-dialog modal-dialog-centered modal-xl"},N={class:"modal-content"},V=Object(n["createElementVNode"])("div",{class:"modal-header bg-dark"},[Object(n["createElementVNode"])("h5",{class:"modal-title text-light",id:"exampleModalToggleLabel"},"訂單細節"),Object(n["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),f={class:"modal-body"},y={class:"row"},v={class:"col-md-4"},B=Object(n["createElementVNode"])("h4",null,"用戶資料",-1),C={class:"table"},x={key:0},D=Object(n["createElementVNode"])("th",null,"姓名",-1),M=Object(n["createElementVNode"])("th",null,"Email",-1),S=Object(n["createElementVNode"])("th",null,"電話",-1),P=Object(n["createElementVNode"])("th",null,"地址",-1),_={class:"col-md-8"},w=Object(n["createElementVNode"])("h4",null,"訂單細節",-1),L={class:"table"},$=Object(n["createElementVNode"])("th",null,"訂單編號",-1),U=Object(n["createElementVNode"])("th",null,"下單時間",-1),z=Object(n["createElementVNode"])("th",null,"付款時間",-1),F={key:0},q={key:1},J=Object(n["createElementVNode"])("th",null,"付款狀態",-1),T={key:0,class:"text-success"},A={key:1,class:"text-secondary"},G=Object(n["createElementVNode"])("th",null,"總金額",-1),H=Object(n["createElementVNode"])("h4",null,"選購商品",-1),I={class:"table"},K={class:"d-flex justify-content-end"},Q={class:"form-check"},R={class:"form-check-label",for:"flexCheckChecked"},W={key:0},X={key:1},Y={class:"modal-footer"},Z=Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ee(e,t,c,l,a,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("div",g,[Object(n["createElementVNode"])("div",k,[Object(n["createElementVNode"])("div",N,[V,Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("div",y,[Object(n["createElementVNode"])("div",v,[B,Object(n["createElementVNode"])("table",C,[a.tempOrder.user?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tbody",x,[Object(n["createElementVNode"])("tr",null,[D,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(a.tempOrder.user.name),1)]),Object(n["createElementVNode"])("tr",null,[M,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(a.tempOrder.user.email),1)]),Object(n["createElementVNode"])("tr",null,[S,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(a.tempOrder.user.tel),1)]),Object(n["createElementVNode"])("tr",null,[P,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(a.tempOrder.user.address),1)])])):Object(n["createCommentVNode"])("",!0)])]),Object(n["createElementVNode"])("div",_,[w,Object(n["createElementVNode"])("table",L,[Object(n["createElementVNode"])("tbody",null,[Object(n["createElementVNode"])("tr",null,[$,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(a.tempOrder.id),1)]),Object(n["createElementVNode"])("tr",null,[U,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.$filters.date(a.tempOrder.create_at)),1)]),Object(n["createElementVNode"])("tr",null,[z,Object(n["createElementVNode"])("td",null,[a.tempOrder.is_paid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",F,Object(n["toDisplayString"])(e.$filters.date(a.tempOrder.is_paid)),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",q,"時間不正確"))])]),Object(n["createElementVNode"])("tr",null,[J,Object(n["createElementVNode"])("td",null,[a.tempOrder.is_paid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",T,"已付款")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",A,"未付款"))])]),Object(n["createElementVNode"])("tr",null,[G,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(a.tempOrder.total),1)])])]),H,Object(n["createElementVNode"])("table",I,[Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(a.tempOrder.products,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:e.id},[Object(n["createElementVNode"])("th",null,Object(n["toDisplayString"])(e.product.title),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.qty)+" / "+Object(n["toDisplayString"])(e.product.unit),1)])})),128))])]),Object(n["createElementVNode"])("div",K,[Object(n["createElementVNode"])("div",Q,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckChecked","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.tempOrder.is_paid=e}),checked:""},null,512),[[n["vModelCheckbox"],a.tempOrder.is_paid]]),Object(n["createElementVNode"])("label",R,[a.tempOrder.is_paid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",W,"已付款")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",X,"未付款"))])])])])])]),Object(n["createElementVNode"])("div",Y,[Z,Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-secondary",onClick:t[1]||(t[1]=function(t){return e.$emit("update-order",a.tempOrder)})}," 修改付款狀態 ")])])])],512)])}var te=c("e0ae"),ce={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{modal:"",tempOrder:{},isPaid:!1}},emits:["update-order"],mixins:[te["a"]],inject:["emitter"],watch:{order:function(){this.tempOrder=this.order}}},ne=c("d959"),le=c.n(ne);const ae=le()(ce,[["render",ee]]);var re=ae,oe=c("7f56"),de={data:function(){return{orders:{},isNew:!1,isLoading:!1,pagination:{},tempOrder:{},currentPage:1}},components:{Pagination:E["a"],OrderModal:re,DeleteProduct:oe["a"]},methods:{getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jemmanine","/admin/orders?page=").concat(t);this.isLoading=!0,this.$http.get(c,this.tempProduct).then((function(t){e.orders=t.data.orders,e.pagination=t.data.pagination,e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"錯誤訊息")}))},openModal:function(e){this.tempOrder=Object(h["a"])({},e),this.isNew=!1;var t=this.$refs.orderModal;t.openModal()},delOrderModal:function(e){this.tempOrder=Object(h["a"])({},e);var t=this.$refs.deleteProduct;t.openModal()},updateOrder:function(e){var t=this,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jemmanine","/admin/order/").concat(e.id);this.isLoading=!0;var n={is_paid:e.is_paid};this.$http.put(c,{data:n}).then((function(e){t.isLoading=!1;var c=t.$refs.orderModal;c.hideModal(),t.getOrders(t.currentPage),t.$httpMessageState(e,"更新付款狀態")})).catch((function(e){t.isLoading=!1,t.$httpMessageState(e.response,"錯誤訊息")}))},delOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jemmanine","/admin/order/").concat(this.tempOrder.id);this.isLoading=!0,this.$http.delete(t).then((function(){var t=e.$refs.deleteProduct;t.hideModal(),e.isLoading=!1,e.getOrders(e.currentPage)})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"錯誤訊息")}))}},created:function(){this.getOrders()}};const ie=le()(de,[["render",j]]);t["default"]=ie}}]);
//# sourceMappingURL=chunk-e8d3f8f8.83e6aba9.js.map