(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/crossButton.d5cb98e4.svg"},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/icon.50e1ca37.svg"},function(e,t,a){e.exports=a.p+"static/media/addButton.8e1d6ae8.svg"},,,,,function(e,t,a){e.exports=a(41)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(5),c=a.n(i),s=a(1),o=a.n(s),u=a(3),l=a(13),m=a(14),d=a(15),p=a(21),f=a(16),h=a(22),y=(a(29),a(30),a(17)),v=a.n(y),g=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("form",{onClick:function(t){t.preventDefault(),e.updateGeolocation()}},r.a.createElement("img",{src:v.a,alt:"icon"})))},E=(a(31),a(32),function(e){return r.a.createElement("div",{className:"loader"})}),w=function(e){return r.a.createElement("div",{className:"def",id:"def"},e.city?r.a.createElement("div",{className:"default"},r.a.createElement("p",{className:"city"},e.city),r.a.createElement("p",{className:"temp"},(e.temp-273.15).toFixed(0)," \xb0C"),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"https://openweathermap.org/img/wn/"+e.image+"@2x.png",alt:""}))):r.a.createElement(E,null))},b=(a(33),function(e){return r.a.createElement("div",{className:"details"},e.wind?r.a.createElement("div",null,r.a.createElement("p",null,"Wind ",e.wind," m/s"),r.a.createElement("p",null,"Overcast ",e.overcast),r.a.createElement("p",null,"Pressure ",e.pressure," hpa"),r.a.createElement("p",null,"Humidity ",e.humidity," %"),r.a.createElement("p",null,"Coordinates [",e.coordinatesLat,",",e.coordinatesLon,"]")):r.a.createElement(E,null))}),C=a(11),O=(a(34),a(18)),j=a.n(O),x=a(8),N=a.n(x),k=function(e){var t=e.id,a=e.cityData,i=e.getWeather,c=e.deleteCity,s=Object(n.useState)(""),o=Object(C.a)(s,2),u=o[0],l=o[1],m=Object(n.useState)("Add"),d=Object(C.a)(m,2),p=d[0],f=d[1],h=a||{},y=h.city,v=h.temp,g=h.image,w=h.wind,b=h.overcast,O=h.pressure,x=h.humidity,k=h.coordinatesLat,D=h.coordinatesLon,S=h.error,L=function(){f("Input")},P=function(e){l(e.target.value)},W=function(e){e.preventDefault(),f("List"),i(t,u)},B=function(){c(t),f(" ")};return r.a.createElement("div",{id:"city"+t,className:"favCity"},function(){switch(p){case"Input":return r.a.createElement("div",{id:"input"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:u,onChange:P}),r.a.createElement("button",{type:"submit",onClick:W},"Add")));case"List":return"{}"!==JSON.stringify(a)?S?r.a.createElement("div",{id:"list"},r.a.createElement("div",{className:"wind"},S),r.a.createElement("div",{className:"crossButton"},r.a.createElement("img",{src:N.a,alt:"",onClick:B}))):r.a.createElement("div",{id:"list"},r.a.createElement("div",{className:"city"},y),r.a.createElement("div",{className:"temp"},(v-273.15).toFixed(0),"\xb0C"),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"https://openweathermap.org/img/wn/"+g+"@2x.png",alt:""})),r.a.createElement("div",{className:"wind"},"Wind ",w," m/s"),r.a.createElement("div",{className:"overcast"},b),r.a.createElement("div",{className:"pressure"},"Pressure ",O," hpa"),r.a.createElement("div",{className:"humidity"},"Humidity ",x," %"),r.a.createElement("div",{className:"coordinates"},"Coordinates [",k,",",D,"]"),r.a.createElement("div",{className:"crossButton"},r.a.createElement("img",{src:N.a,alt:"",onClick:B}))):r.a.createElement(E,null);default:return r.a.createElement("div",{id:"addButton"},r.a.createElement("img",{src:j.a,alt:"icon",onClick:L}))}}())};function D(e,t){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat(t));case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:r=e.sent,e.next=10;break;case 9:r={error:"The server responded with a status of "+n.status};case 10:return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t,a){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(o.a.mark((function e(t,a,n){var r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&appid=").concat(t));case 2:if(!(r=e.sent).ok){e.next=9;break}return e.next=6,r.json();case 6:i=e.sent,e.next=10;break;case 9:i={error:r.status};case 10:return e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I="f77919380546d1f6ef8015d53089ba0e",J="New York",M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={cities:[{},{},{}],mainCity:{}},a.parseData=function(e){return e.error?{error:e.error}:{city:e.name,country:e.sys.country,temp:e.main.temp,image:e.weather[0].icon,wind:e.wind.speed,overcast:e.weather[0].description,pressure:e.main.pressure,humidity:e.main.humidity,coordinatesLat:e.coord.lat,coordinatesLon:e.coord.lon}},a.addCity=function(e,t){var n=B({},a.state);n.cities[e-1]=a.parseData(t),a.setState(n)},a.deleteCity=function(e){var t=B({},a.state);t.cities[e-1]={},a.setState(t)},a.addMainCity=function(e){a.setState(B({},a.state,{mainCity:a.parseData(e)}))},a.getDefaultWeather=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(I,J);case 2:t=e.sent,a.addMainCity(t);case 4:case"end":return e.stop()}}),e)}))),a.getWeather=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(I,n);case 2:r=e.sent,a.addCity(t,r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.showCoordinate=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.coords.latitude,r=t.coords.longitude,e.next=4,L(I,n,r);case 4:i=e.sent,a.addMainCity(i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getWeatherByCoor=function(){var e,t;a.setState(B({},a.state,{mainCity:{}})),e=a.showCoordinate,t=a.getDefaultWeather,navigator.geolocation.getCurrentPosition(e,t)},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log(JSON.parse(localStorage.getItem("state"))),this.getWeatherByCoor()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("state",JSON.stringify({cities:[this.state.cities[0].city,this.state.cities[1].city,this.state.cities[2].city]}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"body"},r.a.createElement(g,{updateGeolocation:this.getWeatherByCoor}),r.a.createElement(w,{city:this.state.mainCity.city,temp:this.state.mainCity.temp,image:this.state.mainCity.image}),r.a.createElement(b,{wind:this.state.mainCity.wind,overcast:this.state.mainCity.overcast,pressure:this.state.mainCity.pressure,humidity:this.state.mainCity.humidity,coordinatesLat:this.state.mainCity.coordinatesLat,coordinatesLon:this.state.mainCity.coordinatesLon}),this.state.cities.map((function(t,a){return r.a.createElement(k,{id:a+1,key:a,cityData:e.state.cities[a],getWeather:e.getWeather,deleteCity:e.deleteCity})})))}}]),t}(r.a.Component),A=(a(35),a(20)),F=a(6),G=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&arguments[1]},H=Object(F.b)(G);c.a.render(r.a.createElement(A.a,{store:H},r.a.createElement(M,null)),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.19dcf861.chunk.js.map