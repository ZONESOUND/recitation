(this.webpackJsonprecitation=this.webpackJsonprecitation||[]).push([[0],Array(53).concat([function(e,t){e.exports.hsvToRgb=function(e,t,n){var a,o,s,i=Math.floor(6*e),c=6*e-i,r=n*(1-t),p=n*(1-c*t),u=n*(1-(1-c)*t);switch(i%6){case 0:a=n,o=u,s=r;break;case 1:a=p,o=n,s=r;break;case 2:a=r,o=n,s=u;break;case 3:a=r,o=p,s=n;break;case 4:a=u,o=r,s=n;break;case 5:a=n,o=r,s=p}return{r:255*a,g:255*o,b:255*s}},e.exports.rgbToHsv=function(e,t,n){e/=255,t/=255,n/=255;var a,o,s=Math.max(e,t,n),i=Math.min(e,t,n),c=s,r=s-i;if(o=0===s?0:r/s,s===i)a=0;else{switch(s){case e:a=(t-n)/r+(t<n?6:0);break;case t:a=(n-e)/r+2;break;case n:a=(e-t)/r+4}a/=6}return{h:a,s:o,v:c}},e.exports.hslToRgb=function(e,t,n){var a,o,s;if(0==t)a=o=s=n;else{var i=function(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e},c=n<.5?n*(1+t):n+t-n*t,r=2*n-c;a=i(r,c,e+1/3),o=i(r,c,e),s=i(r,c,e-1/3)}return{r:255*a,g:255*o,b:255*s}},e.exports.rgbToHsl=function(e,t,n){e/=255,t/=255,n/=255;var a,o,s=Math.max(e,t,n),i=Math.min(e,t,n),c=(s+i)/2;if(s===i)a=o=0;else{var r=s-i;switch(o=c>.5?r/(2-s-i):r/(s+i),s){case e:a=(t-n)/r+(t<n?6:0);break;case t:a=(n-e)/r+2;break;case n:a=(e-t)/r+4}a/=6}return{h:a,s:o,l:c}}},,,function(e,t,n){e.exports=n(170)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,function(e,t){},,,,function(e,t,n){},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){var a={"./s1/s1_1.mp3":101,"./s1/s1_10.mp3":102,"./s1/s1_11.mp3":103,"./s1/s1_12.mp3":104,"./s1/s1_13.mp3":105,"./s1/s1_14.mp3":106,"./s1/s1_15.mp3":107,"./s1/s1_2.mp3":108,"./s1/s1_3.mp3":109,"./s1/s1_4.mp3":110,"./s1/s1_5.mp3":111,"./s1/s1_6.mp3":112,"./s1/s1_7.mp3":113,"./s1/s1_8.mp3":114,"./s1/s1_9.mp3":115,"./s2/s2_1.mp3":116,"./s2/s2_10.mp3":117,"./s2/s2_11.mp3":118,"./s2/s2_12.mp3":119,"./s2/s2_13.mp3":120,"./s2/s2_14.mp3":121,"./s2/s2_15.mp3":122,"./s2/s2_16.mp3":123,"./s2/s2_17.mp3":124,"./s2/s2_18.mp3":125,"./s2/s2_19.mp3":126,"./s2/s2_2.mp3":127,"./s2/s2_20.mp3":128,"./s2/s2_21.mp3":129,"./s2/s2_3.mp3":130,"./s2/s2_4.mp3":131,"./s2/s2_5.mp3":132,"./s2/s2_6.mp3":133,"./s2/s2_7.mp3":134,"./s2/s2_8.mp3":135,"./s2/s2_9.mp3":136,"./s3/s3_1.mp3":137,"./s3/s3_10.mp3":138,"./s3/s3_11.mp3":139,"./s3/s3_12.mp3":140,"./s3/s3_2.mp3":141,"./s3/s3_3.mp3":142,"./s3/s3_4.mp3":143,"./s3/s3_5.mp3":144,"./s3/s3_6.mp3":145,"./s3/s3_7.mp3":146,"./s3/s3_8.mp3":147,"./s3/s3_9.mp3":148,"./s4/s4_1.mp3":149,"./s4/s4_10.mp3":150,"./s4/s4_2.mp3":151,"./s4/s4_3.mp3":152,"./s4/s4_4.mp3":153,"./s4/s4_5.mp3":154,"./s4/s4_6.mp3":155,"./s4/s4_7.mp3":156,"./s4/s4_8.mp3":157,"./s4/s4_9.mp3":158,"./s5/sample_1-1.mp3":159,"./s5/sample_1-2.mp3":160,"./s5/sample_1-3.mp3":161,"./s5/sample_1-4.mp3":162,"./s5/sample_1-5.mp3":163,"./s5/sample_2-1.mp3":164,"./s5/sample_2-2.mp3":165,"./s5/sample_2-3.mp3":166,"./s5/sample_2-4.mp3":167,"./s5/sample_2-5.mp3":168};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id=100},function(e,t,n){e.exports=n.p+"static/media/s1_1.ea669680.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_10.86731729.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_11.95383e2b.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_12.3062e67b.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_13.b223aab5.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_14.425a4fa9.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_15.fb288ce4.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_2.11641a51.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_3.9a7edbf0.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_4.fd8f3b17.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_5.1715ef81.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_6.eb1c2009.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_7.3fd68304.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_8.137fa916.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_9.58675f81.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_1.61d94d7a.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_10.32934c47.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_11.4525b266.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_12.256207f1.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_13.ce7afcc0.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_14.1bd26a4b.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_15.469f9148.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_16.0dbcbb7b.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_17.b670b4ad.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_18.6abec9c8.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_19.7e1a4507.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_2.97535c05.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_20.7cf882bb.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_21.10b42381.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_3.9d064e7e.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_4.d96ad941.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_5.6f1abd87.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_6.39526b5b.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_7.b3c61a37.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_8.310685bd.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_9.aa5ed891.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_1.c04f3a6c.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_10.8a1bd855.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_11.54e4d9cc.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_12.8ce769a6.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_2.5a06303c.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_3.c47b3e10.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_4.0927eb75.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_5.5a246722.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_6.d5983b6d.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_7.a95f2c4b.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_8.3fb87d75.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_9.eaeeec72.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_1.0392c9c6.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_10.31489083.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_2.fc63c56a.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_3.03a1916a.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_4.1572c20f.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_5.f386648a.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_6.ab563acd.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_7.62744ba7.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_8.bcb0d03f.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_9.b75fdf32.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_1-1.13028553.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_1-2.7650b135.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_1-3.8790d909.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_1-4.f9bb29ba.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_1-5.342b425b.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_2-1.a54a1452.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_2-2.91e0a60f.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_2-3.cbac8904.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_2-4.563c08ed.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_2-5.6922cc24.mp3"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,o=n(0),s=n.n(o),i=n(46),c=n.n(i),r=(n(61),n(1)),p=(n(62),n(47)),u=n.n(p),m="https://stage-effect-server1.herokuapp.com",l=function(){!0,console.log("socket connect to server")},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,n=u()(m+e);return void 0===a&&(a=n),n.on("connect",t),n},d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a;void 0!==a&&n.on(e,t)},h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a;n.emit(e,t)};function b(e,t){var n=Object(o.useRef)();Object(o.useEffect)((function(){n.current=e})),Object(o.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}function g(e){var t=Object(o.useRef)();return Object(o.useEffect)((function(){t.current=e}),[e]),t.current}var v=n(8),_=n(9),x=n(11),O=n(10),y=n(12),j=n(4),k=n(5),E=n(48);n(86);function S(){var e=Object(j.a)(["\n    margin: 0 auto;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    "]);return S=function(){return e},e}function w(){var e=Object(j.a)(["\n    margin: 1em;\n    width: 80%;\n    text-align: center;\n    min-height: 1.2em;\n    font-size: ",";\n    font-weight: ",";\n    ","\n    "]);return w=function(){return e},e}var D=k.a.span(w(),(function(e){return void 0===e.fontSize?"3em":e.fontSize}),(function(e){return void 0===e.fontWeight?"200":e.fontWeight}),(function(e){return void 0===e.color?"":"color:"+e.color+";"})),M=k.a.div(S());var C=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(x.a)(this,Object(O.a)(t).call(this,e))).myRef=s.a.createRef(),n.state={siriWave:null},n}return Object(y.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({siriWave:new E.a({container:this.myRef.current,style:"ios9",width:320,height:100,speed:.2,amplitude:.1,autostart:!0})}),setTimeout((function(){e.state.siriWave&&e.state.siriWave.setAmplitude(0)}),50)}},{key:"shouldComponentUpdate",value:function(e,t){return null!=this.state.siriWave&&(e.start!==this.props.start&&(e.start?this.state.siriWave.setAmplitude(1):this.state.siriWave.setAmplitude(0),!0))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{ref:this.myRef}))}}]),t}(s.a.Component),F=function(e){var t="",n=0;return e.speakingVoice.length>0&&(e.speakingVoice.forEach((function(a){null!=a&&(a=JSON.parse(a)).name&&(n>10||"".concat(a.name," (").concat(a.lang,")")!==e.personName&&(++n>1&&(t+=10==n?" and ":", "),t+=a.name))})),n>0&&(t+=n>1?" are ":" is ",t+="speaking...")),s.a.createElement(M,null,s.a.createElement(D,{color:e.nameColor},e.personName),s.a.createElement(D,{color:"orange",fontSize:"2em"},""===e.sentence?"":'"'.concat(e.sentence,'"')),s.a.createElement(D,{color:"gray",fontSize:"1.5em"},t),s.a.createElement(C,{start:""!==e.sentence}))},T=function(e){var t=e.show,n=e.speed,a=e.children;void 0===n&&(n="0.5s");var i=Object(o.useState)(t),c=Object(r.a)(i,2),p=c[0],u=c[1];Object(o.useEffect)((function(){t&&u(!0)}),[t]);return p&&s.a.createElement("div",{style:{animation:"".concat(t?"fadeIn":"fadeOut"," ").concat(n)},onAnimationEnd:function(){t||u(!1)}},a)};function N(){var e=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  z-index: -10;\n  background: ",";  \n"]);return N=function(){return e},e}var A=k.a.div(N(),(function(e){return void 0===e.bgColor?"white":e.bgColor})),I=new Set(["Amelie","Ioana","Joana","Laura","Sara","Xander","Jorge","Diego"]);new Set(["fr-CA","ro-RO","pt-PT","sk-SK","da-DK","nl-NL"]);function R(e){var t=e.onSubmitF,n=e.voiceIndex,a=e.voiceOnChanged,o=e.voices,i=e.pitch,c=e.rate,r=e.pitchOnChanged,p=e.rateOnChanged;return s.a.createElement("form",{onSubmit:t},s.a.createElement("select",{value:n,onChange:function(e){a(e.target.value)}},o.map((function(e,t){return s.a.createElement("option",{key:t,value:t},"".concat(e.name," (").concat(e.lang,")"))}))),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"pitch"},"pitch"),s.a.createElement("input",{type:"number",step:.01,value:i,onChange:function(e){r(e.target.value)},id:"pitch"}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"rate"},"rate"),s.a.createElement("input",{type:"number",step:.01,value:c,onChange:function(e){p(e.target.value)},id:"rate"}),s.a.createElement("input",{type:"submit"}))}var J=function(e){var t=function(){for(var e=n.getVoices(),t="",a=0;a<e.length;a++){for(;(I.has(e[a].name)||e[a].name===t)&&a<e.length;)e.splice(a,1);t=e[a].name,e[a].default&&p(a)}return e},n=window.speechSynthesis,a=Object(o.useState)(0),i=Object(r.a)(a,2),c=i[0],p=i[1],u=Object(o.useState)((function(){return t()})),m=Object(r.a)(u,2),l=m[0],f=m[1],d=Object(o.useState)(1),h=Object(r.a)(d,2),v=h[0],_=h[1],x=Object(o.useState)(1),O=Object(r.a)(x,2),y=O[0],j=O[1],k=Object(o.useState)(!1),E=Object(r.a)(k,2),S=E[0],w=E[1],D=e.toSpeak,M=e.data,C=e.changeVoice,N=g(D),J=g(C),U=Object(o.useState)(""),W=Object(r.a)(U,2),V=W[0],B=W[1];Object(o.useEffect)((function(){D&&!S&&N!==D&&M.text&&(M.rate&&j(M.rate),M.pitch&&_(M.pitch),z(M.text,M.pitch?M.pitch:v,M.rate?M.rate:y))}),[D,M]),Object(o.useEffect)((function(){J!==C&&p(Math.floor(Math.random()*l.length))}),[C]),Object(o.useEffect)((function(){e.changeVoiceCallback({name:l[c].name,lang:l[c].lang})}),[c]),n.onvoiceschanged=function(){f(t())},b((function(){n.speaking||(e.speakOver(),w(!1),B(""))}),S?100:null);var L=function(e){w(!0),B(e);var t=new SpeechSynthesisUtterance(e);t.voice=l[c],t.pitch=v,t.rate=y,n.speak(t)},z=function(e,t,a){w(!0),B(e);var o=new SpeechSynthesisUtterance(e);o.voice=l[c],o.pitch=t,o.rate=a,n.speak(o)},H={onSubmitF:function(e){e.preventDefault(),L("hello")},voiceIndex:c,voiceOnChanged:p,voices:l,pitch:v,rate:y,pitchOnChanged:_,rateOnChanged:j},P=void 0!==l[c]?"".concat(l[c].name," (").concat(l[c].lang,")"):"";return s.a.createElement(s.a.Fragment,null,e.form&&s.a.createElement(R,H),s.a.createElement(F,{personName:P,sentence:V,speakingVoice:e.nowSpeak,nameColor:S?"black":"white"}),s.a.createElement(T,{show:S,speed:"0.3s"},s.a.createElement(A,null)))},U=n(15),W=n.n(U),V=n(52),B=n.n(V),L=n(2),z=n(53);n(99);function H(){var e=Object(j.a)(["\n\tbackground: rgba(0,0,0,1);\n\tposition: absolute;\n\tmargin: 0;\n\ttop: 0px;\n\tleft: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: -1;\n"]);return H=function(){return e},e}k.a.div(H());var P=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(x.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(o)))).state={defaultProp:{easing:"easeInOutQuad",loop:2,duration:500,direction:"alternate",delay:0,endDelay:0,background:"rgba(0,0,0,1)"}},n}return Object(y.a)(t,e),Object(_.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return"follow"==e.data.mode&&e.opacity!=this.props.opacity||e.refresh!==this.props.refresh}},{key:"computeData",value:function(e){var t=0;return"color"in e&&(e.colorTemp=e.color),"alpha"in e&&(t=e.alpha),"follow"==e.mode&&(t=this.props.opacity),"background"in e||(e.direction="blink"==e.mode?"alternate":"normal",e.loop="light"==e.mode?e.loopTime:2*e.loopTime),e.background="rgba(".concat(e.colorTemp,",").concat(t,")"),delete e.loopTime,delete e.color,delete e.alpha,e}},{key:"genRgbStyle",value:function(e,t){var n=e,a=n.substring(5,n.length-1).split(","),o={stiffness:t,damping:30};return{style:{r:Object(L.spring)(parseFloat(a[0]),o),g:Object(L.spring)(parseFloat(a[1]),o),b:Object(L.spring)(parseFloat(a[2]),o),a:Object(L.spring)(parseFloat(a[3]),o)},motionFunc:this.rgbMotion}}},{key:"rgbMotion",value:function(e){var t=e.r,n=e.g,a=e.b,o=e.a;return s.a.createElement("div",{id:"lightBox",key:Date.now(),style:{background:"rgba(".concat(Math.floor(t),",").concat(Math.floor(n),",").concat(Math.floor(a),",").concat(o,")")}})}},{key:"genHslStyle",value:function(e){var t=e,n=t.substring(5,t.length-1).split(","),a={stiffness:80,damping:20},o=Object(z.rgbToHsl)(parseFloat(n[0]),parseFloat(n[1]),parseFloat(n[2])),s=o.h,i=o.s,c=o.l;return{style:{h:Object(L.spring)(s,a),s:Object(L.spring)(i,a),l:Object(L.spring)(c,a),a:Object(L.spring)(parseFloat(n[3]),a)},motionFunc:this.hslMotion}}},{key:"hslMotion",value:function(e){var t=e.h,n=e.s,a=e.l,o=e.a;return s.a.createElement("div",{id:"lightBox",key:Date.now(),style:{background:"hsla(".concat(360*t,",").concat(100*n,"%,").concat(100*a,"%,").concat(o,")")}})}},{key:"render",value:function(){var e=this.state.defaultProp,t=this.computeData(this.props.data),n=Object.assign(e,t),a=this.genRgbStyle(n.background,n.duration),o=a.style,i=a.motionFunc,c=s.a.createElement(L.Motion,{style:o},i),r=s.a.createElement(B.a,Object.assign({key:Date.now()},n),s.a.createElement("div",{id:"lightBox"}));return"blink"==n.mode?r:c}}]),t}(o.Component),K=[],G=[],Q=[];!function(){var e=n(100),t=0,a="";e.keys().forEach((function(n){console.log(e(n),t),n.slice(0,4)!==a&&(a=n.slice(0,4),K.push(t)),t++,G.push(e(n))})),K.push(t),console.log(K)}(),console.log("soundPreload",K[K.length-2]),G.forEach((function(e,t){var n=new W.a.Player({url:e,fadeOut:t<K[K.length-2]?5:0,fadeIn:t<K[K.length-2]?5:0}).toMaster();Q.push(n)}));var X=function(e){var t=Object(o.useState)(0),n=Object(r.a)(t,2),a=n[0],i=n[1],c=Object(o.useState)(!1),p=Object(r.a)(c,2),u=p[0],m=p[1],l=function(e){e.sound&&h(e.sound)};Object(o.useState)((function(){e.socket&&d("controlData",l)}));var f=function(){console.log("load Finished!")};Object(o.useEffect)((function(){W.a.Buffer.on("load",f)}),[Q]),Object(o.useEffect)((function(){e.stop&&g()}),[e.stop]),Object(o.useEffect)((function(){e.refresh!=u&&e.data&&"{}"!==JSON.stringify(e.data)&&h(e.data),m(e.refresh)}),[e.refresh]);var h=function(t){if(!e.stop)if(t.stop&&"*"!==t.stop)g();else{var n=-1;t.set&&t.set<K.length?(n=Math.floor(Math.random()*(K[t.set]-K[t.set-1])),n+=K[t.set-1]):"order"in t&&(t.orderTo&&t.orderTo>t.order?(n=Math.floor(Math.random()*(t.orderTo-t.order)),n+=t.order):n=t.order),n>=0?(b(),"volume"in t&&_(n,t.volume),"delayFix"in t?setTimeout((function(){v(n)}),t.delayFix):t.delay>0?setTimeout((function(){v(n)}),Math.floor(Math.random()*t.delay)):v(n)):"volume"in t&&Q[a]&&"stopped"!==Q[a].state&&_(a,t.volume)}},b=function(){Q[a]&&Q[a].loaded&&"stopped"!==Q[a].state&&Q[a].stop()},g=function(){Q.forEach((function(e){void 0!==e&&e.loaded&&"stopped"!==e.state&&e.stop()})),i(0)},v=function(e){void 0!==Q[e]&&(Q[e].loaded?(console.log(e,"played!"),Q[e].start(),i(e)):console.log(e+" not loaded!"))},_=function(e,t){Q[e]&&Q[e].loaded&&(Q[e].volume.value=t)};return s.a.createElement(s.a.Fragment,null)},$=["255, 255, 255"],q=function(){var e=Date.now();"undefined"!==typeof performance&&"function"===typeof performance.now&&(e+=performance.now());var t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}));return sessionStorage.setItem("StageEffectUUID",t),t},Y=function(e){return JSON.parse(JSON.stringify(e))},Z=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(x.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(o)))).state={uuid:sessionStorage.getItem("StageEffectUUID")||q(),refreshAnime:!1,refreshMusic:!1,socketData:{},lightData:{},soundData:{},opa:-1,opacity:0},n.setupBeforeUnloadListener=function(e){window.addEventListener("beforeunload",(function(t){return t.preventDefault(),e.emit("disconnected",{uuid:n.state.uuid}),t}))},n.clickButton=function(){"{}"!=JSON.stringify(n.state.soundData)&&n.setState((function(e){return{refreshMusic:!e.refreshMusic}})),"{}"!=JSON.stringify(n.state.lightData)&&n.setState((function(e){return{refreshAnime:!e.refreshAnime}}))},n}return Object(y.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){d("controlData",this.receiveControlData.bind(this))}},{key:"receiveControlData",value:function(e){var t=this.handleSocketData(e),n=t.light,a=t.sound;"{}"!==JSON.stringify(a)&&this.setState((function(e){return{soundData:Y(a),refreshMusic:!e.refreshMusic}})),"{}"!==JSON.stringify(n)&&this.setState((function(e){return{soundData:Y(a),lightData:Y(n),refreshAnime:!e.refreshAnime}}))}},{key:"handleSocketData",value:function(e){var t="sound"in e&&"*"!==e.sound?e.sound:{},n="light"in e&&"*"!==e.light?this.handleLightData(e.light):{};return!("color"in n)&&"{}"!==JSON.stringify(n)&&"order"in t&&(n.color=$[t.order%$.length]),"color"in n&&"order"in t&&"*"===n.color&&(n.color=$[t.order%$.length]),"delay"in n&&"order"in t&&(t.delayFix=n.delay),"mode"in n&&"order"in t&&(t.mode=n.mode),"mode"in n&&"stop"in t&&"follow"===n.mode&&(n={}),{light:n,sound:t}}},{key:"handleLightData",value:function(e){return"none"===e.mode?{}:("color"in e&&"*"===e.color&&delete e.color,e.delay=Math.random()*e.delay,e)}},{key:"changeHandler",value:function(e){this.setState({opacity:e})}},{key:"render",value:function(){var e=this.state,t=e.refreshAnime,n=e.refreshMusic,a=e.lightData,o=e.soundData,i=e.opacity;return s.a.createElement("div",{id:"wrap"},s.a.createElement(T,{show:this.props.show},s.a.createElement(P,{refresh:t,data:a,opacity:i})),s.a.createElement(X,{stop:this.props.stop,refresh:n,data:o}))}}]),t}(o.Component);var ee=function(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),a=n[0],i=n[1],c=Object(o.useState)(-1),p=Object(r.a)(c,2),u=p[0],m=p[1],l=Object(o.useState)(!1),g=Object(r.a)(l,2),v=g[0],_=g[1],x=Object(o.useState)(!1),O=Object(r.a)(x,2),y=O[0],j=O[1],k=Object(o.useState)(!1),E=Object(r.a)(k,2),S=E[0],w=E[1],D=Object(o.useState)({}),M=Object(r.a)(D,2),C=M[0],F=M[1],N=Object(o.useState)(),I=Object(r.a)(N,2),R=I[0],U=I[1],W=Object(o.useState)(null),V=Object(r.a)(W,2),B=V[0],L=V[1],z=Object(o.useState)([]),H=Object(r.a)(z,2),P=H[0],K=H[1];Object(o.useEffect)((function(){B&&G()}),[B]),Object(o.useEffect)((function(){!y&&R&&(console.log("emit voice!"),h("speakConfig",{mode:"changeVoice",voice:R}))}),[y,R]),Object(o.useState)((function(){f("/receiver",(function(){L(!0)})),d("disconnect",(function(){L(!1)})),d("debug",(function(e){console.log(e),"showForm"===e.mode&&w(e.value)})),d("speak",(function(e){a||(console.log("speak!",e),F(e),m(e.id),i(!0))})),d("speakConfig",(function(e){console.log(e),"changeVoice"===e.mode?G():"showForm"===e.mode?w(!0):"hideForm"===e.mode?w(!1):"nowSpeak"===e.mode&&K(e.data)}))})),b((function(){_(!v)}),y?100:null);var G=function(){j(!0),setTimeout((function(){j(!1)}),2e3)};return s.a.createElement(s.a.Fragment,null,s.a.createElement(Z,{show:B&&!a,stop:a}),s.a.createElement(T,{show:B},s.a.createElement(J,{toSpeak:a,data:C,speakOver:function(){i(!1),console.log("speak over",u),-1!==u&&h("speakOver",{id:u,voice:R})},changeVoice:v,changeVoiceCallback:function(e){U(e)},nowSpeak:P,form:S})),s.a.createElement(T,{show:!1===B},s.a.createElement(A,{bgColor:"black"},s.a.createElement("span",null,"CONNECTING SERVER"))))};n(169);var te=function(e){return s.a.createElement("div",{id:"LandpageWrapper"},s.a.createElement("button",{className:"selectBtn",onClick:e.select},"Start"))};var ne=function(){var e=Object(o.useState)(!0),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)(!1),c=Object(r.a)(i,2),p=c[0],u=c[1];return s.a.createElement("div",null,s.a.createElement(T,{show:n},s.a.createElement(te,{select:function(){a(!1),u(!0),window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));var e=new W.a.Synth;e.oscillator.type="sine",e.toMaster(),e.triggerAttack("C4"),setTimeout((function(){e.triggerRelease()}),100)}})),s.a.createElement(T,{show:p},s.a.createElement(ee,{start:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[56,1,2]]]);
//# sourceMappingURL=main.46d05bfd.chunk.js.map