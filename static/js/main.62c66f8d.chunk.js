(this.webpackJsonppalette=this.webpackJsonppalette||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var c=t(0),f=t.n(c),l=t(8),n=t.n(l),m=(t(14),t(15),t(5)),r=(t(16),t(1)),d=[["ff9fb2","fbdce2","0acdff","60ab9a","dedee0"],["9e6240","dea47e","cd4631","f8f2dc","81adc8"],["3b429f","aa7dce","f5d7e3","f4a5ae","a8577e"],["14342b","60935d","bab700","bbdfc5","ff579f"],["32cbff","00a5e0","89a1ef","ef9cda","fecef1"],["03045e","0077b6","00b4d8","90e0ef","caf0f8"],["64113f","de4d86","f29ca3","f7cacd","84e6f8"],["4c1e4f","b5a886","fee1c7","fa7e61","f44174"],["f72585","7209b7","3a0ca3","4361ee","4cc9f0"],["90f1ef","ffd6e0","ffef9f","c1fba4","7bf1a8"],["156064","00c49a","f8e16c","ffc2b4","fb8f67"],["7776bc","cdc7e5","fffbdb","ffec51","ff674d"],["201e1f","ff4000","faaa8d","feefdd","50b2c0"],["272727","2b50aa","ff9fe5","ffd4d4","ff858d"],["ffbe86","ffe156","ffe9ce","ffb5c2","3777ff"],["826aed","c879ff","ffb7ff","3bf4fb","caff8a"],["006d77","83c5be","edf6f9","ffddd2","e29578"],["171614","3a2618","754043","9a8873","37423d"],["805d93","f49fbc","ffd3ba","9ebd6e","169873"],["0c1618","004643","faf4d3","d1ac00","f6be9a"],["0e131f","38405f","59546c","8b939c","ff0035"],["227c9d","17c3b2","ffcb77","fef9ef","fe6d73"],["3f84e5","f0e2e7","b20d30","c17817","3f784c"],["925e78","bd93bd","f2edeb","f05365","fabc2a"],["0091ad","6efafb","fff4e4","f7e8a4","ff57bb"],["001524","15616d","ffecd1","ff7d00","78290f"],["27187e","758bfd","aeb8fe","f1f2f6","ff8600"],["072ac8","1e96fc","a2d6f9","fcf300","ffc600"],["7c6a0a","babd8d","ffdac6","fa9500","eb6424"],["638475","90e39a","ddf093","f6d0b1","ce4760"],["0a1045","00c2d1","f9e900","f6af65","ed33b9"],["f75590","fce4d8","fbd87f","b5f8fe","10ffcb"],["423e3b","ff2e00","fea82f","fffecb","5448c8"],["f3b391","f6d4ba","fefadc","feea00","3f612d"],["5d2a42","fb6376","fcb1a6","ffdccc","fff9ec"],["562c2c","f2542d","f5dfbb","0e9594","127475"],["413620","9c6615","9f7833","ffd791","cdd1de"],["4c1a57","ff3cc7","f0f600","00e5e8","007c77"],["61a0af","96c9dc","f06c9b","f9b9b7","f5d491"],["885a89","8aa8a1","cbcbd4","d1b490","ee7b30"],["001b2e","294c60","adb6c4","ffefd3","ffc49b"]];var s=function(){var e=Object(c.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1],n=Object(c.useState)(12),s=Object(m.a)(n,2),o=s[0],i=s[1],b=function(e){return function(a){a.preventDefault(),i("list"===e?12:4)}};return Object(c.useEffect)((function(){l((function(){return d.map((function(e,a){return{userName:"msd7manoj",palettes:e,likes:a+1,favourites:a%4===0}}))}))}),[]),f.a.createElement("div",null,f.a.createElement(r.Row,null,f.a.createElement(r.Col,{xs:12,md:12},f.a.createElement("header",null,f.a.createElement(r.Row,{middle:"md"},f.a.createElement(r.Col,{md:3},f.a.createElement("h1",{className:"logo"},f.a.createElement("a",{href:"/"},"Palette"))),f.a.createElement(r.Col,{md:9},f.a.createElement("div",{className:"dFlex justify-end"},f.a.createElement("div",{className:"dFlex"},f.a.createElement("button",{className:"appButton appButton-bg"},"Create Palette"),f.a.createElement("span",{className:"divider"}),f.a.createElement("div",{className:"loginWrap"},f.a.createElement("a",{href:"/"},"Log In"),f.a.createElement("a",{href:"/"},"Register"))))))))),f.a.createElement("div",{className:"mainLayout"},f.a.createElement(r.Row,{middle:"md",className:"mb-2",between:"md"},f.a.createElement(r.Col,{md:6},f.a.createElement("h1",null,"Explore Palettes")),f.a.createElement(r.Col,{md:6},f.a.createElement("div",{className:"dFlex justify-end"},f.a.createElement("a",{onClick:b("list"),className:"iconLink active",title:"List View",href:"#"},f.a.createElement("i",{class:"fas fa-th-list"})),f.a.createElement("a",{onClick:b("grid"),className:"iconLink",title:"Grid View",href:"#"},f.a.createElement("i",{class:"fas fa-th"}))))),f.a.createElement(r.Row,{center:"md"},f.a.createElement(r.Col,{md:12},f.a.createElement(r.Row,{between:"md",className:"mb-2"},f.a.createElement(r.Col,{md:4},f.a.createElement("div",{className:"colorSearchInput"},f.a.createElement("input",{placeholder:"Search Colors (Hex Codes or Color Name)",type:"text"}),f.a.createElement("span",null,f.a.createElement("i",{className:"fas fa-search"})))),f.a.createElement(r.Col,{md:3},f.a.createElement("div",{className:"dFlex justify-end paletteSelect"},f.a.createElement("select",null,f.a.createElement("option",null,"Trending"),f.a.createElement("option",null,"Popular"),f.a.createElement("option",null,"Latest")))))),t.map((function(e){return f.a.createElement(r.Col,{key:e.likes,className:"mb-1",md:o},f.a.createElement("div",{className:"paletteWrp"},f.a.createElement(r.Row,{end:"md",middle:"md",className:"mb-1"},f.a.createElement(r.Col,{md:4},f.a.createElement("div",{className:"dFlex justify-end"},f.a.createElement("a",{title:"Export Palette",className:"iconLink",href:"/"},f.a.createElement("i",{class:"fas fa-file-export"})),f.a.createElement("a",{title:"Copy All",className:"iconLink",href:"/"},f.a.createElement("i",{class:"far fa-copy"})),f.a.createElement("a",{title:"Edit Palette",className:"iconLink",href:"/"},f.a.createElement("i",{class:"fas fa-palette"})),f.a.createElement("a",{title:"View Palette",className:"iconLink",href:"/"},f.a.createElement("i",{class:"fas fa-swatchbook"}))))),f.a.createElement(r.Row,{className:"mb-1"},f.a.createElement(r.Col,{md:12},f.a.createElement("ul",{className:"paletteList"},e.palettes.map((function(e){return f.a.createElement("li",{key:e,style:{background:"#".concat(e)}},f.a.createElement("span",{className:"colorToolTip"},e))}))))),f.a.createElement(r.Row,{className:"paletteAction mb-xs",between:"md"},f.a.createElement(r.Col,{md:3},f.a.createElement("a",{className:"active",href:"/"},f.a.createElement("i",{className:"far fa-heart"}))),f.a.createElement(r.Col,{md:4,className:"dFlex justify-end"},f.a.createElement("span",{className:"dFlex likePalette"},f.a.createElement("a",{className:"active",href:"/"},f.a.createElement("i",{className:"far fa-thumbs-up"})),e.likes))),f.a.createElement(r.Row,{center:"md"},f.a.createElement(r.Col,{md:5},f.a.createElement("a",{href:"/",className:"createdBy"},f.a.createElement("i",{class:"fas fa-paint-brush"}),e.userName)))))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(f.a.createElement(f.a.StrictMode,null,f.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(23)}},[[9,1,2]]]);
//# sourceMappingURL=main.62c66f8d.chunk.js.map