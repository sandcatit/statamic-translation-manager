function v(a,e,t,i,n,o,u,d){var r=typeof a=="function"?a.options:a;e&&(r.render=e,r.staticRenderFns=t,r._compiled=!0),i&&(r.functional=!0),o&&(r._scopeId="data-v-"+o);var l;if(u?(l=function(s){s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!s&&typeof __VUE_SSR_CONTEXT__<"u"&&(s=__VUE_SSR_CONTEXT__),n&&n.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(u)},r._ssrRegister=l):n&&(l=d?function(){n.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(r.functional){r._injectStyles=l;var p=r.render;r.render=function(f,c){return l.call(c),p(f,c)}}else{var _=r.beforeCreate;r.beforeCreate=_?[].concat(_,l):[l]}return{exports:a,options:r}}const h={props:{value:{type:Object,default:()=>({})},config:{type:Object,default:()=>({})}},data(){return{rows:this.parseInitialValue(this.value)}},computed:{configOptions(){return Object.values(this.$attrs.meta.options).map(a=>({label:a,value:a}))}},watch:{rows:{handler(){this.$emit("input",this.transformToDatabaseFormat())},deep:!0}},methods:{parseInitialValue(a){return Object.entries(a).map(([e,t])=>({key:{label:e,value:e},value:t}))},transformToDatabaseFormat(){return this.rows.reduce((a,e)=>(e.key&&e.key.value&&(a[e.key.value]=e.value),a),{})},addRow(){this.rows.push({key:{label:"",value:""},value:""})},removeRow(a){this.rows.splice(a,1)}}};var y=function(){var e=this,t=e._self._c;return t("div",[t("table",{staticClass:"data-table"},[t("thead",[t("tr",[t("th",[e._v(e._s(e.__("Locale")))]),t("th",[e._v(e._s(e.__("Value")))]),t("th",[e._v(e._s(e.__("Actions")))])])]),t("tbody",e._l(e.rows,function(i,n){return t("tr",{key:n},[t("td",[t("v-select",{attrs:{options:e.configOptions,label:"label","value-field":"value",placeholder:e.__("Select a key")},model:{value:i.key,callback:function(o){e.$set(i,"key",o)},expression:"row.key"}})],1),t("td",[t("text-input",{attrs:{placeholder:e.__("Enter value"),name:"value-"+n},model:{value:i.value,callback:function(o){e.$set(i,"value",o)},expression:"row.value"}})],1),t("td",[t("button",{attrs:{type:"button"},on:{click:function(o){return e.removeRow(n)}}},[e._v(e._s(e.__("Remove")))])])])}),0)]),t("button",{staticClass:"btn-primary",attrs:{type:"button"},on:{click:e.addRow}},[e._v(e._s(e.__("Add Row")))])])},m=[],b=v(h,y,m,!1,null,null,null,null);const k=b.exports,$={props:{value:{type:[Object,Array],default:()=>({})}},computed:{parsedKeys(){return Array.isArray(this.value)?this.value.map(a=>{var e;return((e=a.key)==null?void 0:e.value)||a.key}):typeof this.value=="object"?Object.keys(this.value):[]}}};var R=function(){var e=this,t=e._self._c;return e.parsedKeys.length?t("span",[e._v(" "+e._s(e.parsedKeys.join(", "))+" ")]):t("span",[t("em",[e._v("No keys")])])},C=[],O=v($,R,C,!1,null,null,null,null);const g=O.exports;Statamic.booting(()=>{Statamic.$components.register("locale_select_array-fieldtype",k),Statamic.$components.register("locale_select_array-fieldtype-index",g)});
