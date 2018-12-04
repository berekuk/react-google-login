!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.GoogleLogin=t(require("react")):e.GoogleLogin=t(e.react)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(1),s=n.n(a),u=n(2),c=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.signIn=n.signIn.bind(n),n.state={disabled:!0},n}return r(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.clientId,o=t.cookiePolicy,i=t.loginHint,r=t.hostedDomain,a=t.autoLoad,s=t.isSignedIn,u=t.fetchBasicProfile,c=t.redirectUri,l=t.discoveryDocs,p=t.onFailure,f=t.uxMode,d=t.scope,g=t.responseType;!function(e,t,n,o){var i=e.getElementsByTagName(t)[0],r=i,a=i;a=e.createElement(t),a.id="google-login",a.src="//apis.google.com/js/client:platform.js",r.parentNode.insertBefore(a,r),a.onload=o}(document,"script",0,function(){var t={client_id:n,cookie_policy:o,login_hint:i,hosted_domain:r,fetch_basic_profile:u,discoveryDocs:l,ux_mode:f,redirect_uri:c,scope:d};"code"===g&&(t.access_type="offline"),window.gapi.load("auth2",function(){e.setState({disabled:!1}),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(t).then(function(t){s&&t.isSignedIn.get()&&e._handleSigninSuccess(t.currentUser.get())},function(e){return p(e)}),a&&e.signIn()})})}},{key:"signIn",value:function(e){var t=this;if(e&&e.preventDefault(),!this.state.disabled){var n=window.gapi.auth2.getAuthInstance(),o=this.props,i=o.onSuccess,r=o.onRequest,a=o.onFailure,s=o.prompt,u=o.responseType,c={prompt:s};r(),"code"===u?n.grantOfflineAccess(c).then(function(e){return i(e)},function(e){return a(e)}):n.signIn(c).then(function(e){return t._handleSigninSuccess(e)},function(e){return a(e)})}}},{key:"_handleSigninSuccess",value:function(e){var t=e.getBasicProfile(),n=e.getAuthResponse();e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},this.props.onSuccess(e)}},{key:"render",value:function(){var e=this.props,t=e.tag,n=e.type,o=e.style,i=e.className,r=e.disabledStyle,a=e.buttonText,u=e.children,c=e.render,l=this.state.disabled||this.props.disabled;if(c)return c({onClick:this.signIn});var p={display:"inline-block",background:"#d14836",color:"#fff",width:190,paddingTop:10,paddingBottom:10,borderRadius:2,border:"1px solid transparent",fontSize:16,fontWeight:"bold",fontFamily:"Roboto"},f=function(){return o||(i&&!o?{}:p)}(),d=function(){return l?Object.assign({},f,r):f}();return s.a.createElement(t,{onClick:this.signIn,style:d,type:n,disabled:l,className:i},u||a)}}]),t}(a.Component);l.defaultProps={type:"button",tag:"button",buttonText:"Login with Google",scope:"profile email",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},onRequest:function(){}},t.a=l},function(t,n){t.exports=e},function(e,t,n){"function"==typeof Symbol&&Symbol.iterator,e.exports=n(5)()},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);n.d(t,"default",function(){return o.a}),n.d(t,"GoogleLogin",function(){return o.a});var i=n(9);n.d(t,"GoogleLogout",function(){return i.a})},function(e,t,n){"use strict";var o=n(6),i=n(7),r=n(8);e.exports=function(){function e(e,t,n,o,a,s){s!==r&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";function o(e){return function(){return e}}var i=function(){};i.thatReturns=o,i.thatReturnsFalse=o(!1),i.thatReturnsTrue=o(!0),i.thatReturnsNull=o(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e},e.exports=i},function(e,t,n){"use strict";function o(e,t,n,o,r,a,s,u){if(i(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,r,a,s,u],p=0;c=new Error(t.replace(/%s/g,function(){return l[p++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var i=function(e){};e.exports=o},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(1),s=n.n(a),u=n(2),c=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={disabled:!0},n.signOut=n.signOut.bind(n),n}return r(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this;!function(e,t,n,o){var i=e.getElementsByTagName(t)[0],r=i,a=i;a=e.createElement(t),a.id="google-login",a.src="//apis.google.com/js/client:platform.js",r.parentNode.insertBefore(a,r),a.onload=o}(document,"script",0,function(){window.gapi.load("auth2",function(){if(e.setState({disabled:!1}),!window.gapi.auth2.getAuthInstance()){var t={client_id:e.props.clientId,cookie_policy:"single_host_origin",fetch_basic_profile:!1,scope:"profile email",ux_mode:"popup"};window.gapi.auth2.init(t)}})})}},{key:"signOut",value:function(){var e=window.gapi.auth2.getAuthInstance();e?e.signOut().then(this.props.onLogoutSuccess):(console.error("auth2 is not initialized!"),this.props.onLogoutSuccess())}},{key:"render",value:function(){var e=this.props,t=e.tag,n=e.style,o=e.className,i=e.disabledStyle,r=e.buttonText,a=e.children,u=this.state.disabled||this.props.disabled,c={display:"inline-block",background:"#d14836",color:"#fff",width:190,paddingTop:10,paddingBottom:10,borderRadius:2,border:"1px solid transparent",fontSize:16,fontWeight:"bold",fontFamily:"Roboto"},l=function(){return n||(o&&!n?{}:c)}(),p=function(){return u?Object.assign({},l,i):l}();return s.a.createElement(t,{onClick:this.signOut,style:p,disabled:u,className:o},a||r)}}]),t}(a.Component);l.defaultProps={tag:"button",buttonText:"Logout",responseType:"permission",disabledStyle:{opacity:.6},onRequest:function(){}},t.a=l}])});