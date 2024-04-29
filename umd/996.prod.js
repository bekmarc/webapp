"use strict";(globalThis.webpackChunktinode_webapp=globalThis.webpackChunktinode_webapp||[]).push([[996],{3996:(e,a,d)=>{d.r(a),d.d(a,{default:()=>g});var l=d(1594),t=d.n(l),i=d(8181),o=d(221),c=d(9418),s=d(1166),n=d(4956),r=d(6789),h=d(8262),m=d(6110),u=d(3540),p=d(9027);class g extends t().PureComponent{constructor(e){super(e),this.state={login:"",password:"",meth:"",email:"",tel:"",fn:"",imageUrl:null,uploadUrl:null,newAvatar:null,newAvatarMime:null,buttonDisabled:!1,saveToken:h.A.getObject("keep-logged-in")},this.handleLoginChange=this.handleLoginChange.bind(this),this.handlePasswordChange=this.handlePasswordChange.bind(this),this.handleEmailChange=this.handleEmailChange.bind(this),this.handlePhoneChange=this.handlePhoneChange.bind(this),this.handleFnChange=this.handleFnChange.bind(this),this.handleImageChanged=this.handleImageChanged.bind(this),this.handleToggleSaveToken=this.handleToggleSaveToken.bind(this),this.handleAvatarCropped=this.handleAvatarCropped.bind(this),this.handleAvatarCropCancel=this.handleAvatarCropCancel.bind(this),this.uploadAvatar=this.uploadAvatar.bind(this),this.handleSubmit=this.handleSubmit.bind(this),e.tinode.connect().catch((e=>{this.props.onError(e.message,"err")}))}handleLoginChange(e){this.setState({login:e.target.value})}handlePasswordChange(e){this.setState({password:e})}handleEmailChange(e){this.setState({meth:"email",email:e.target.value})}handlePhoneChange(e){this.setState({meth:"tel",tel:e})}handleFnChange(e){this.setState({fn:e.target.value})}handleImageChanged(e,a){this.setState({newAvatar:a,newAvatarMime:e})}handleToggleSaveToken(){h.A.setObject("keep-logged-in",!this.state.saveToken),this.setState({saveToken:!this.state.saveToken})}handleSubmit(e){e.preventDefault(),this.props.onCreateAccount(this.state.login.trim(),this.state.password.trim(),(0,u.k6)(this.state.fn.trim().substring(0,p.tS),this.state.uploadUrl),{meth:this.state.meth,val:"email"==this.state.meth?this.state.email:"tel"==this.state.meth?this.state.tel:null})}handleAvatarCropped(e,a,d,l){const t=a?URL.createObjectURL(a):null;this.setState({avatar:t,newAvatar:null,newAvatarMime:null}),a&&this.uploadAvatar(e,a,d,l)}handleAvatarCropCancel(){this.setState({newAvatar:null,newAvatarMime:null})}uploadAvatar(e,a,d,l){const t=e=>{let{mime:a,blob:d}=e;if(this.setState({imageUrl:URL.createObjectURL(d),buttonDisabled:!0}),d.size>p.Z7){this.props.tinode.getLargeFileHelper().upload(d,"newacc").then((e=>this.setState({uploadUrl:e}))).catch((e=>this.props.onError(e.message,"err"))).finally((e=>this.setState({buttonDisabled:!1})))}else(0,m.Sk)(d).then((e=>this.setState({uploadUrl:(0,m.to)({data:e.bits,type:a})}))).finally((e=>this.setState({buttonDisabled:!1})))};d>p.eQ||l>p.eQ||d!=l?(0,m.ag)(a,p.eQ,p.eQ,p.qy,!0).then((e=>t(e))).catch((e=>this.props.onError(e.message,"err"))):t({mime:e,blob:a,width:d,height:l})}render(){if(this.state.newAvatar)return t().createElement(o.A,{avatar:this.state.newAvatar,mime:this.state.newAvatarMime,onSubmit:this.handleAvatarCropped,onCancel:this.handleAvatarCropCancel,onError:this.props.onError});let e="primary";return this.props.disabled&&(e+=" disabled"),t().createElement("form",{className:"panel-form-column",onSubmit:this.handleSubmit},t().createElement("div",{className:"panel-form-row"},t().createElement("div",{className:"umn"},t().createElement(i.FormattedMessage,{id:"login_prompt",defaultMessage:[{type:0,value:"Login"}]},(e=>t().createElement("input",{type:"text",placeholder:e,autoComplete:"user-name",value:this.state.login,onChange:this.handleLoginChange,required:!0,autoFocus:!0}))),t().createElement(i.FormattedMessage,{id:"password_prompt",defaultMessage:[{type:0,value:"Password"}]},(e=>t().createElement(r.A,{placeholder:e,autoComplete:"new-password",value:this.state.password,onFinished:this.handlePasswordChange,required:!0})))),t().createElement(c.A,{tinode:this.props.tinode,avatar:this.state.imageUrl,onImageUpdated:this.handleImageChanged,onError:this.props.onError})),t().createElement("div",{className:"panel-form-row"},t().createElement(i.FormattedMessage,{id:"full_name_prompt",defaultMessage:[{type:0,value:"Full name, e.g. John Doe"}]},(e=>t().createElement("input",{type:"text",placeholder:e,autoComplete:"name",value:this.state.fn,onChange:this.handleFnChange,required:!0})))),"email"==this.props.reqCredMethod?t().createElement("div",{className:"panel-form-row"},t().createElement(i.FormattedMessage,{id:"email_prompt",defaultMessage:[{type:0,value:"Email, e.g. jdoe@example.com"}]},(e=>t().createElement("input",{type:"email",placeholder:e,autoComplete:"email",value:this.state.email,onChange:this.handleEmailChange,required:!0})))):"tel"==this.props.reqCredMethod?t().createElement(t().Fragment,null,t().createElement("div",{className:"panel-form-row"},t().createElement("label",{className:"small gray"},t().createElement(i.FormattedMessage,{id:"mobile_phone_number",defaultMessage:[{type:0,value:"Mobile phone number"}]}))),t().createElement("div",{className:"panel-form-row"},t().createElement(n.A,{autoFocus:!1,onShowCountrySelector:this.props.onShowCountrySelector,onSubmit:this.handlePhoneChange}))):null,t().createElement("div",{className:"panel-form-row"},t().createElement(s.A,{id:"save-token",name:"save-token",checked:this.state.saveToken,onChange:this.handleToggleSaveToken}),t().createElement(i.FormattedMessage,{id:"stay_logged_in",defaultMessage:[{type:0,value:"Stay logged in"}]},(e=>t().createElement("label",{htmlFor:"save-token"}," ",e)))),t().createElement("div",{className:"dialog-buttons"},t().createElement("button",{className:e,type:"submit",disabled:this.state.buttonDisabled},t().createElement(i.FormattedMessage,{id:"button_sign_up",defaultMessage:[{type:0,value:"Sign up"}]}))))}}},4956:(e,a,d)=>{d.d(a,{A:()=>p});var l=d(1594),t=d.n(l),i=d(8181),o=d(4724),c=d(8892),s=d(6187),n=d(4701),r=d(111),h=d(8589);const m=(0,i.defineMessages)({mobile_number_required:{id:"mobile_number_required",defaultMessage:[{type:0,value:"Mobile phone number required"}]}});class u extends t().PureComponent{constructor(e){super(e),this.codeMap={},r.forEach((e=>{this.codeMap[e.code]=e.dial}));const a=e.countryCode||"US",d=this.codeMap[a];this.state={countryCode:a,dialCode:d,localNumber:"",placeholderNumber:this.placeholderNumber(a,d)},this.handleChange=this.handleChange.bind(this),this.handleFinished=this.handleFinished.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.showCountrySelector=this.showCountrySelector.bind(this)}handleChange(e){const a=`+${this.state.dialCode}`;let d=(new o.Q).input(`${a}${this.filterNumber(e.target.value)}`);d=d.substring(a.length).trim(),this.setState({localNumber:d})}handleFinished(e){e.preventDefault();const a=`${this.state.dialCode}${this.state.localNumber.trim()}`.replace(/[^\d]/g,"");let d=null;try{d=(0,c.L)(`+${a}`)}catch(e){}d&&d.isValid()?(this.inputField.setCustomValidity(""),this.props.onSubmit(d.format("E.164"))):this.inputField.setCustomValidity(this.props.intl.formatMessage(m.mobile_number_required))}handleKeyDown(e){"Enter"===e.key&&this.handleFinished(e)}showCountrySelector(){this.props.onShowCountrySelector(this.state.countryCode,this.state.dialCode,((e,a)=>{this.setState({countryCode:e,dialCode:a,placeholderNumber:this.placeholderNumber(e,a)})}))}filterNumber(e){return e?e.replace(/[^-\s().\d]/g,""):e}placeholderNumber(e,a){const d=(0,s.a)(e,n.A);return d?d.formatInternational().substring(a.length+1).trim():"123 0123"}render(){return t().createElement(t().Fragment,null,t().createElement("span",{className:"dial-code",onClick:this.showCountrySelector},t().createElement("span",{className:"country-flag"},(0,h.lb)(this.state.countryCode)," "),"+",this.state.dialCode," "),t().createElement("input",{type:"tel",ref:e=>{this.inputField=e},placeholder:this.state.placeholderNumber,value:this.state.localNumber,onChange:this.handleChange,maxLength:17,onKeyDown:this.handleKeyDown,onBlur:this.handleFinished,required:!0,autoFocus:this.props.autoFocus}))}}const p=(0,i.injectIntl)(u)},111:e=>{e.exports=JSON.parse('[{"dial":"93","code":"AF"},{"dial":"355","code":"AL"},{"dial":"213","code":"DZ"},{"dial":"1-684","code":"AS"},{"dial":"376","code":"AD"},{"dial":"244","code":"AO"},{"dial":"1-264","code":"AI"},{"dial":"672","code":"AQ"},{"dial":"1-268","code":"AG"},{"dial":"54","code":"AR"},{"dial":"374","code":"AM"},{"dial":"297","code":"AW"},{"dial":"61","code":"AU"},{"dial":"43","code":"AT"},{"dial":"994","code":"AZ"},{"dial":"1-242","code":"BS"},{"dial":"973","code":"BH"},{"dial":"880","code":"BD"},{"dial":"1-246","code":"BB"},{"dial":"375","code":"BY"},{"dial":"32","code":"BE"},{"dial":"501","code":"BZ"},{"dial":"229","code":"BJ"},{"dial":"1-441","code":"BM"},{"dial":"975","code":"BT"},{"dial":"591","code":"BO"},{"dial":"387","code":"BA"},{"dial":"267","code":"BW"},{"dial":"55","code":"BR"},{"dial":"246","code":"IO"},{"dial":"1-284","code":"VG"},{"dial":"673","code":"BN"},{"dial":"359","code":"BG"},{"dial":"226","code":"BF"},{"dial":"257","code":"BI"},{"dial":"855","code":"KH"},{"dial":"237","code":"CM"},{"dial":"1","code":"CA"},{"dial":"238","code":"CV"},{"dial":"1-345","code":"KY"},{"dial":"236","code":"CF"},{"dial":"235","code":"TD"},{"dial":"56","code":"CL"},{"dial":"86","code":"CN"},{"dial":"61","code":"CX"},{"dial":"61","code":"CC"},{"dial":"57","code":"CO"},{"dial":"269","code":"KM"},{"dial":"682","code":"CK"},{"dial":"506","code":"CR"},{"dial":"385","code":"HR"},{"dial":"53","code":"CU"},{"dial":"599","code":"CW"},{"dial":"357","code":"CY"},{"dial":"420","code":"CZ"},{"dial":"243","code":"CD"},{"dial":"45","code":"DK"},{"dial":"253","code":"DJ"},{"dial":"1-767","code":"DM"},{"dial":"1-809, 1-829, 1-849","code":"DO"},{"dial":"670","code":"TL"},{"dial":"593","code":"EC"},{"dial":"20","code":"EG"},{"dial":"503","code":"SV"},{"dial":"240","code":"GQ"},{"dial":"291","code":"ER"},{"dial":"372","code":"EE"},{"dial":"251","code":"ET"},{"dial":"500","code":"FK"},{"dial":"298","code":"FO"},{"dial":"679","code":"FJ"},{"dial":"358","code":"FI"},{"dial":"33","code":"FR"},{"dial":"689","code":"PF"},{"dial":"241","code":"GA"},{"dial":"220","code":"GM"},{"dial":"995","code":"GE"},{"dial":"49","code":"DE"},{"dial":"233","code":"GH"},{"dial":"350","code":"GI"},{"dial":"30","code":"GR"},{"dial":"299","code":"GL"},{"dial":"1-473","code":"GD"},{"dial":"1-671","code":"GU"},{"dial":"502","code":"GT"},{"dial":"44-1481","code":"GG"},{"dial":"224","code":"GN"},{"dial":"245","code":"GW"},{"dial":"592","code":"GY"},{"dial":"509","code":"HT"},{"dial":"504","code":"HN"},{"dial":"852","code":"HK"},{"dial":"36","code":"HU"},{"dial":"354","code":"IS"},{"dial":"91","code":"IN"},{"dial":"62","code":"ID"},{"dial":"98","code":"IR"},{"dial":"964","code":"IQ"},{"dial":"353","code":"IE"},{"dial":"44-1624","code":"IM"},{"dial":"972","code":"IL"},{"dial":"39","code":"IT"},{"dial":"225","code":"CI"},{"dial":"1-876","code":"JM"},{"dial":"81","code":"JP"},{"dial":"44-1534","code":"JE"},{"dial":"962","code":"JO"},{"dial":"7, 997","code":"KZ"},{"dial":"254","code":"KE"},{"dial":"686","code":"KI"},{"dial":"383","code":"XK"},{"dial":"965","code":"KW"},{"dial":"996","code":"KG"},{"dial":"856","code":"LA"},{"dial":"371","code":"LV"},{"dial":"961","code":"LB"},{"dial":"266","code":"LS"},{"dial":"231","code":"LR"},{"dial":"218","code":"LY"},{"dial":"423","code":"LI"},{"dial":"370","code":"LT"},{"dial":"352","code":"LU"},{"dial":"853","code":"MO"},{"dial":"389","code":"MK"},{"dial":"261","code":"MG"},{"dial":"265","code":"MW"},{"dial":"60","code":"MY"},{"dial":"960","code":"MV"},{"dial":"223","code":"ML"},{"dial":"356","code":"MT"},{"dial":"692","code":"MH"},{"dial":"222","code":"MR"},{"dial":"230","code":"MU"},{"dial":"262","code":"YT"},{"dial":"52","code":"MX"},{"dial":"691","code":"FM"},{"dial":"373","code":"MD"},{"dial":"377","code":"MC"},{"dial":"976","code":"MN"},{"dial":"382","code":"ME"},{"dial":"1-664","code":"MS"},{"dial":"212","code":"MA"},{"dial":"258","code":"MZ"},{"dial":"95","code":"MM"},{"dial":"264","code":"NA"},{"dial":"674","code":"NR"},{"dial":"977","code":"NP"},{"dial":"31","code":"NL"},{"dial":"599","code":"CW"},{"dial":"687","code":"NC"},{"dial":"64","code":"NZ"},{"dial":"505","code":"NI"},{"dial":"227","code":"NE"},{"dial":"234","code":"NG"},{"dial":"683","code":"NU"},{"dial":"850","code":"KP"},{"dial":"1-670","code":"MP"},{"dial":"47","code":"NO"},{"dial":"968","code":"OM"},{"dial":"92","code":"PK"},{"dial":"680","code":"PW"},{"dial":"970","code":"PS"},{"dial":"507","code":"PA"},{"dial":"675","code":"PG"},{"dial":"595","code":"PY"},{"dial":"51","code":"PE"},{"dial":"63","code":"PH"},{"dial":"64","code":"PN"},{"dial":"48","code":"PL"},{"dial":"351","code":"PT"},{"dial":"1-787, 1-939","code":"PR"},{"dial":"974","code":"QA"},{"dial":"242","code":"CG"},{"dial":"262","code":"RE"},{"dial":"40","code":"RO"},{"dial":"7","code":"RU"},{"dial":"250","code":"RW"},{"dial":"590","code":"BL"},{"dial":"290","code":"SH"},{"dial":"1-869","code":"KN"},{"dial":"1-758","code":"LC"},{"dial":"590","code":"MF"},{"dial":"508","code":"PM"},{"dial":"1-784","code":"VC"},{"dial":"685","code":"WS"},{"dial":"378","code":"SM"},{"dial":"239","code":"ST"},{"dial":"966","code":"SA"},{"dial":"221","code":"SN"},{"dial":"381","code":"RS"},{"dial":"248","code":"SC"},{"dial":"232","code":"SL"},{"dial":"65","code":"SG"},{"dial":"1-721","code":"SX"},{"dial":"421","code":"SK"},{"dial":"386","code":"SI"},{"dial":"677","code":"SB"},{"dial":"252","code":"SO"},{"dial":"27","code":"ZA"},{"dial":"82","code":"KR"},{"dial":"211","code":"SS"},{"dial":"34","code":"ES"},{"dial":"94","code":"LK"},{"dial":"249","code":"SD"},{"dial":"597","code":"SR"},{"dial":"47","code":"SJ"},{"dial":"268","code":"SZ"},{"dial":"46","code":"SE"},{"dial":"41","code":"CH"},{"dial":"963","code":"SY"},{"dial":"886","code":"TW"},{"dial":"992","code":"TJ"},{"dial":"255","code":"TZ"},{"dial":"66","code":"TH"},{"dial":"228","code":"TG"},{"dial":"690","code":"TK"},{"dial":"676","code":"TO"},{"dial":"1-868","code":"TT"},{"dial":"216","code":"TN"},{"dial":"90","code":"TR"},{"dial":"993","code":"TM"},{"dial":"1-649","code":"TC"},{"dial":"688","code":"TV"},{"dial":"1-340","code":"VI"},{"dial":"256","code":"UG"},{"dial":"380","code":"UA"},{"dial":"971","code":"AE"},{"dial":"44","code":"GB"},{"dial":"1","code":"US"},{"dial":"598","code":"UY"},{"dial":"998","code":"UZ"},{"dial":"678","code":"VU"},{"dial":"379","code":"VA"},{"dial":"58","code":"VE"},{"dial":"84","code":"VN"},{"dial":"681","code":"WF"},{"dial":"212","code":"EH"},{"dial":"967","code":"YE"},{"dial":"260","code":"ZM"},{"dial":"263","code":"ZW"}]')}}]);
//# sourceMappingURL=996.prod.js.map