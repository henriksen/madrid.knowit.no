(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(147),o=a(158);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(146),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(27);a.d(t,"waitForRouteChange",function(){return c.c});var u=a(148),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Knowit Stavanger Fagseminar",data:{title:"Fagseminar høst 2018",keywords:["knowit","fagseminar","stavanger","madrid","2018"]}}}}}},150:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(52),s=a(1),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,a){},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Knowit Stavanger Fagseminar",data:{event:{city:"Madrid",address:"Calle del Poeta Joan Maragall, 43",hotel:"Meliá Castilla",gmapsUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.6269024565067!2d-3.6943040487441863!3d40.46139406074399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1ce794508da5e9d!2sMeli%C3%A1+Castilla!5e0!3m2!1sen!2sno!4v1537421113811"}}}}}}},156:function(e,t,a){},158:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(159),c=a.n(s),u=a(147),d=(a(151),a(155)),m=(a(156),function(){return i.a.createElement(u.StaticQuery,{query:"816841966",render:function(e){return i.a.createElement("div",{className:"google-maps-wrapper"},i.a.createElement("div",{className:"google-maps-blocker"}),i.a.createElement("div",{className:"google-maps-content"},i.a.createElement("h1",null,"Lokasjon"),i.a.createElement("h3",null,e.site.siteMetadata.data.event.hotel),i.a.createElement("h3",null,e.site.siteMetadata.data.event.address),i.a.createElement("h3",null,e.site.siteMetadata.data.event.city)),i.a.createElement("iframe",{title:"Map",className:"google-maps",src:e.site.siteMetadata.data.event.gmapsUrl,frameBorder:"0"}))},data:d})}),p=function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"3533691344",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.data.title},{name:"keywords",content:e.site.siteMetadata.data.keywords.join(",")}]},i.a.createElement("html",{lang:"no"}),i.a.createElement("link",{"data-react-helmet":"true",href:"https://fonts.googleapis.com/css?family=Raleway",rel:"stylesheet"})),i.a.createElement("div",null,t,i.a.createElement(m,null)))},data:n})};p.propTypes={children:l.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-page-2-js-708d89d29ae5b9b4cbc7.js.map