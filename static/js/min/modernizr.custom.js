window.Modernizr=function(e,t,n){function r(e){f.cssText=e}function a(e,t){return typeof e===t}var o,i,s,c="2.8.2",u={},l=t.documentElement,d="modernizr",p=t.createElement(d),f=p.style,h=({}.toString,{svg:"http://www.w3.org/2000/svg"}),m={},g=[],v=g.slice,y={}.hasOwnProperty;s=a(y,"undefined")||a(y.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return y.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=v.call(arguments,1),r=function(){if(this instanceof r){var a=function(){};a.prototype=t.prototype;var o=new a,i=t.apply(o,n.concat(v.call(arguments)));return Object(i)===i?i:o}return t.apply(e,n.concat(v.call(arguments)))};return r}),m.svg=function(){return!!t.createElementNS&&!!t.createElementNS(h.svg,"svg").createSVGRect};for(var b in m)s(m,b)&&(i=b.toLowerCase(),u[i]=m[b](),g.push((u[i]?"":"no-")+i));return u.addTest=function(e,t){if("object"==typeof e)for(var r in e)s(e,r)&&u.addTest(r,e[r]);else{if(e=e.toLowerCase(),u[e]!==n)return u;t="function"==typeof t?t():t,"undefined"!=typeof enableClasses&&enableClasses&&(l.className+=" "+(t?"":"no-")+e),u[e]=t}return u},r(""),p=o=null,u._version=c,u}(this,this.document);