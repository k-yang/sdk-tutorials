(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{756:function(e,a,t){"use strict";t.r(a);var o=t(1),l=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-a-custom-ibc-middleware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-custom-ibc-middleware"}},[e._v("#")]),e._v(" Create a Custom IBC Middleware")]),e._v(" "),t("p",[e._v("When developing a custom IBC application, one of the first things to do is to implement the "),t("code",[e._v("IBCModule")]),e._v(" interface, as seen "),t("RouterLink",{attrs:{to:"/academy/ibc-dev/ibcapp_steps.html"}},[e._v("previously")]),e._v(".")],1),e._v(" "),t("p",[e._v("The interface can be found "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port/types/module.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Likewise, when developing IBC middleware, the "),t("code",[e._v("Middleware")]),e._v(" interface should be implemented. It can be found in the same file as the "),t("code",[e._v("IBCModule")]),e._v(" and appears as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNaWRkbGV3YXJlIGludGVyZmFjZSB7CiAgICBJQkNNb2R1bGUKICAgIElDUzRXcmFwcGVyCn0K"}}),e._v(" "),t("HighlightBox",{attrs:{type:"note"}},[t("p",[e._v("Middleware must implement "),t("code",[e._v("IBCModule")]),e._v(" to wrap communication from core IBC to the underlying application, and must implement "),t("code",[e._v("ICS4Wrapper")]),e._v(" to wrap communication from the underlying application to core IBC.")])]),e._v(" "),t("p",[e._v("You know "),t("code",[e._v("IBCModule")]),e._v(" from the IBC custom app section. "),t("code",[e._v("ICS4Wrapper")]),e._v(" is an interface like so:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVGhpcyBpcyBpbXBsZW1lbnRlZCBieSBJQ1M0IGFuZCBhbGwgbWlkZGxld2FyZSB3cmFwcGluZyB0aGUgYmFzZSBhcHBsaWNhdGlvbi4KLy8gVGhlIGJhc2UgYXBwbGljYXRpb24gd2lsbCBjYWxsIGBzZW5kUGFja2V0YCBvciBgd3JpdGVBY2tub3dsZWRnZW1lbnRgIG9mIHRoZSBtaWRkbGV3YXJlIGRpcmVjdGx5IGFib3ZlIHRoZW0KLy8gd2hpY2ggd2lsbCBjYWxsIHRoZSBuZXh0IG1pZGRsZXdhcmUgdW50aWwgaXQgcmVhY2hlcyB0aGUgY29yZSBJQkMgaGFuZGxlci4KdHlwZSBJQ1M0V3JhcHBlciBpbnRlcmZhY2UgewogICAgU2VuZFBhY2tldChjdHggc2RrLkNvbnRleHQsIGNoYW5DYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LCBwYWNrZXQgZXhwb3J0ZWQuUGFja2V0KSBlcnJvcgogICAgV3JpdGVBY2tub3dsZWRnZW1lbnQoY3R4IHNkay5Db250ZXh0LCBjaGFuQ2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwgcGFja2V0IGV4cG9ydGVkLlBhY2tldCwgYWNrIGV4cG9ydGVkLkFja25vd2xlZGdlbWVudCkgZXJyb3IKICAgIEdldEFwcFZlcnNpb24oY3R4IHNkay5Db250ZXh0LCBwb3J0SUQsIGNoYW5uZWxJRCBzdHJpbmcpIChzdHJpbmcsIGJvb2wpCn0K"}}),e._v(" "),t("p",[e._v("When developing custom middleware, you can implement these interfaces for a new "),t("code",[e._v("IBCMiddleware")]),e._v(" that has access to its keeper and an underlying application. In the "),t("code",[e._v("ibc_middleware.go")]),e._v(" file:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKCS4uLgoJcG9ydHR5cGVzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2liYy1nby92NS9tb2R1bGVzL2NvcmUvMDUtcG9ydC90eXBlcyZxdW90OwoJLi4uCikKdmFyIF8gcG9ydHR5cGVzLk1pZGRsZXdhcmUgPSAmYW1wO0lCQ01pZGRsZXdhcmV7fQoKdHlwZSBJQkNNaWRkbGV3YXJlIHN0cnVjdCB7CglhcHAgICAgcG9ydHR5cGVzLklCQ01vZHVsZQoJa2VlcGVyIGtlZXBlci5LZWVwZXIgICAgLy9hZGQgYSBrZWVwZXIgZm9yIHN0YXRlZnVsIG1pZGRsZXdhcmUKfQoKLy8gSUJDTWlkZGxld2FyZSBjcmVhdGVzIGEgbmV3IElCQ01pZGRsZXdhcmUgZ2l2ZW4gdGhlIGFzc29jaWF0ZWQga2VlcGVyIGFuZCB1bmRlcmx5aW5nIGFwcGxpY2F0aW9uCmZ1bmMgTmV3SUJDTWlkZGxld2FyZShhcHAgcG9ydHR5cGVzLklCQ01vZHVsZSwgayBrZWVwZXIuS2VlcGVyKSBJQkNNaWRkbGV3YXJlIHsKCXJldHVybiBJQkNNaWRkbGV3YXJlewoJCWFwcDogICAgYXBwLAoJCWtlZXBlcjogaywKCX0KfQo="}}),e._v(" "),t("p",[e._v("Below you will take a closer look at how to implement the handshake callbacks and the packet callbacks, to satisfy the "),t("code",[e._v("IBCModule")]),e._v(" interface, and also the "),t("code",[e._v("SendPacket")]),e._v(", "),t("code",[e._v("WriteAcknowledgement")]),e._v(" and "),t("code",[e._v("GetAppVersion")]),e._v(" methods, to satisfy the "),t("code",[e._v("ICS4Wrapper")]),e._v(" interface.")]),e._v(" "),t("p",[e._v("As a reminder, review once more the diagram representing the information flow between core IBC and the base application with a middleware (stack) applied:")]),e._v(" "),t("p",[t("tm-image",{attrs:{src:"/academy/ibc-dev/images/middleware-stack.png"}})],1),e._v(" "),t("h2",{attrs:{id:"channel-handshake-callbacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channel-handshake-callbacks"}},[e._v("#")]),e._v(" Channel handshake callbacks")]),e._v(" "),t("p",[e._v("The first type of callbacks from core IBC to the application are the channel handshake callbacks. When a middleware (stack) is applied, every piece of middleware will have access to the underlying application (base application or downstream middleware). For the handshake callbacks, function calls happen from core IBC through the middleware and then to the base application. Each middleware will call the underlying application's callback but it can execute custom application logic before doing so.")]),e._v(" "),t("p",[e._v("Check out the code snippets below to see this in action, or use the links to see how it is implemented for fee middleware (ICS-29).")]),e._v(" "),t("HighlightBox",{attrs:{type:"info"}},[t("p",[e._v("Middleware "),t("strong",[e._v("may")]),e._v(" choose not to call the underlying application's callback at all. However, these should generally be limited to error cases.")])]),e._v(" "),t("h3",{attrs:{id:"middleware-version-negotiation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#middleware-version-negotiation"}},[e._v("#")]),e._v(" Middleware version negotiation")]),e._v(" "),t("p",[e._v("In the case where the IBC middleware expects to speak to a compatible IBC middleware on the counterparty chain, they must "),t("strong",[e._v("use the channel handshake to negotiate the middleware version without interfering in the version negotiation of the underlying application")]),e._v(".")]),e._v(" "),t("p",[e._v("Middleware accomplishes this by formatting the version in a JSON-encoded string containing the middleware version and the application version. The application version may as well be a JSON-encoded string, possibly including further middleware and app versions if the application stack consists of multiple middlewares wrapping a base application. The format of the version is specified in ICS-30 as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90OyZsdDttaWRkbGV3YXJlX3ZlcnNpb25fa2V5Jmd0OyZxdW90OzogJnF1b3Q7Jmx0O21pZGRsZXdhcmVfdmVyc2lvbl92YWx1ZSZndDsmcXVvdDssCiAgJnF1b3Q7YXBwX3ZlcnNpb24mcXVvdDs6ICZxdW90OyZsdDthcHBsaWNhdGlvbl92ZXJzaW9uX3ZhbHVlJmd0OyZxdW90OwogIC8vIC4uLiBvdGhlciBjdXN0b20gcGFyYW1ldGVyIGZpZWxkcwp9Cg=="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("<middleware_version_key>")]),e._v(" key in the JSON struct should be replaced by the actual name of the key for the corresponding middleware (e.g. "),t("code",[e._v("fee_version")]),e._v(").")]),e._v(" "),t("p",[e._v("During the handshake callbacks, the middleware can unmarshal the version string and retrieve the middleware and application versions. It can do its negotiation logic on "),t("code",[e._v("<middleware_version_value>")]),e._v(", and pass the "),t("code",[e._v("<application_version_value>")]),e._v(" to the underlying application.")]),e._v(" "),t("HighlightBox",{attrs:{type:"note"}},[t("p",[e._v("Middleware that does not need to negotiate with a counterparty middleware on the remote stack will not implement the version unmarshalling and negotiation, and may simply perform its own custom logic on the callbacks without relying on the counterparty behaving similarly.")])]),e._v(" "),t("h3",{attrs:{id:"capabilities"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#capabilities"}},[e._v("#")]),e._v(" Capabilities")]),e._v(" "),t("p",[e._v("The middleware should simply pass the capability in the callback arguments along to the underlying application so that it may be claimed by the base application. The base application will then pass the capability up the stack in order to authenticate an outgoing packet/acknowledgment.")]),e._v(" "),t("h3",{attrs:{id:"code-snippets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code-snippets"}},[e._v("#")]),e._v(" Code snippets")]),e._v(" "),t("p",[e._v("Note that the code snippets below contain "),t("em",[e._v("pseudo code")]),e._v(", like "),t("code",[e._v("doCustomLogic(args)")]),e._v(". Every code snippet is accompanied by a reference to the respective function in the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/main/modules/apps/29-fee",target:"_blank",rel:"noopener noreferrer"}},[e._v("fee middleware IBC application"),t("OutboundLink")],1),e._v(" from the official "),t("code",[e._v("ibc-go")]),e._v(" repository.")]),e._v(" "),t("ExpansionPanel",{attrs:{title:"`OnChanOpenInit`"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25DaGFuT3BlbkluaXQoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBvcmRlciBjaGFubmVsdHlwZXMuT3JkZXIsCiAgICBjb25uZWN0aW9uSG9wcyBbXXN0cmluZywKICAgIHBvcnRJRCBzdHJpbmcsCiAgICBjaGFubmVsSUQgc3RyaW5nLAogICAgY2hhbm5lbENhcCAqY2FwYWJpbGl0eXR5cGVzLkNhcGFiaWxpdHksCiAgICBjb3VudGVycGFydHkgY2hhbm5lbHR5cGVzLkNvdW50ZXJwYXJ0eSwKICAgIHZlcnNpb24gc3RyaW5nLAopIChzdHJpbmcsIGVycm9yKSB7CiAgICBpZiB2ZXJzaW9uICE9ICZxdW90OyZxdW90OyB7CiAgICAgICAgLy8gdHJ5IHRvIHVubWFyc2hhbCBKU09OLWVuY29kZWQgdmVyc2lvbiBzdHJpbmcgYW5kIHBhc3MKICAgICAgICAvLyB0aGUgYXBwLXNwZWNpZmljIHZlcnNpb24gdG8gYXBwIGNhbGxiYWNrLgogICAgICAgIC8vIG90aGVyd2lzZSwgcGFzcyB2ZXJzaW9uIGRpcmVjdGx5IHRvIGFwcCBjYWxsYmFjay4KICAgICAgICBtZXRhZGF0YSwgZXJyIDo9IFVubWFyc2hhbCh2ZXJzaW9uKQogICAgICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgICAgICAvLyBTaW5jZSBpdCBpcyB2YWxpZCBmb3IgdGhlIGZlZSB2ZXJzaW9uIHRvIG5vdCBiZSBzcGVjaWZpZWQsCiAgICAgICAgICAgIC8vIHRoZSBhYm92ZSBtaWRkbGV3YXJlIHZlcnNpb24gbWF5IGJlIGZvciBhbm90aGVyIG1pZGRsZXdhcmUuCiAgICAgICAgICAgIC8vIFBhc3MgdGhlIGVudGlyZSB2ZXJzaW9uIHN0cmluZyBvbnRvIHRoZSB1bmRlcmx5aW5nIGFwcGxpY2F0aW9uLgogICAgICAgICAgICByZXR1cm4gaW0uYXBwLk9uQ2hhbk9wZW5Jbml0KAogICAgICAgICAgICAgICAgY3R4LAogICAgICAgICAgICAgICAgb3JkZXIsCiAgICAgICAgICAgICAgICBjb25uZWN0aW9uSG9wcywKICAgICAgICAgICAgICAgIHBvcnRJRCwKICAgICAgICAgICAgICAgIGNoYW5uZWxJRCwKICAgICAgICAgICAgICAgIGNoYW5uZWxDYXAsCiAgICAgICAgICAgICAgICBjb3VudGVycGFydHksCiAgICAgICAgICAgICAgICB2ZXJzaW9uLAogICAgICAgICAgICApCiAgICAgICAgfQogICAgICAgIGVsc2UgewogICAgICAgIG1ldGFkYXRhID0gewogICAgICAgICAgICAvLyBzZXQgbWlkZGxld2FyZSB2ZXJzaW9uIHRvIGRlZmF1bHQgdmFsdWUKICAgICAgICAgICAgTWlkZGxld2FyZVZlcnNpb246IGRlZmF1bHRNaWRkbGV3YXJlVmVyc2lvbiwKICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGFwcGxpY2F0aW9uIHRvIHJldHVybiBpdHMgZGVmYXVsdCB2ZXJzaW9uCiAgICAgICAgICAgIEFwcFZlcnNpb246ICZxdW90OyZxdW90OywKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIGRvQ3VzdG9tTG9naWMoKQogICAgLy8gaWYgdGhlIHZlcnNpb24gc3RyaW5nIGlzIGVtcHR5LCBPbkNoYW5PcGVuSW5pdCBpcyBleHBlY3RlZCB0byByZXR1cm4KICAgIC8vIGEgZGVmYXVsdCB2ZXJzaW9uIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHZlcnNpb24ocykgaXQgc3VwcG9ydHMKICAgIGFwcFZlcnNpb24sIGVyciA6PSBpbS5hcHAuT25DaGFuT3BlbkluaXQoCiAgICAgICAgY3R4LAogICAgICAgIG9yZGVyLAogICAgICAgIGNvbm5lY3Rpb25Ib3BzLAogICAgICAgIHBvcnRJRCwKICAgICAgICBjaGFubmVsSUQsCiAgICAgICAgY2hhbm5lbENhcCwKICAgICAgICBjb3VudGVycGFydHksCiAgICAgICAgbWV0YWRhdGEuQXBwVmVyc2lvbiwgLy8gbm90ZSB5b3Ugb25seSBwYXNzIGFwcCB2ZXJzaW9uIGhlcmUKICAgICkKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiAmcXVvdDsmcXVvdDssIGVycgogICAgfQogICAgdmVyc2lvbiA6PSBjb25zdHJ1Y3RWZXJzaW9uKG1ldGFkYXRhLk1pZGRsZXdhcmVWZXJzaW9uLCBhcHBWZXJzaW9uKQogICAgcmV0dXJuIHZlcnNpb24sIG5pbAogICAgfQp9Cg=="}})],1),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L34-L82",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("ExpansionPanel",{attrs:{title:"`OnChanOpenTry`"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25DaGFuT3BlblRyeSgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIG9yZGVyIGNoYW5uZWx0eXBlcy5PcmRlciwKICAgIGNvbm5lY3Rpb25Ib3BzIFtdc3RyaW5nLAogICAgcG9ydElELAogICAgY2hhbm5lbElEIHN0cmluZywKICAgIGNoYW5uZWxDYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAogICAgY291bnRlcnBhcnR5IGNoYW5uZWx0eXBlcy5Db3VudGVycGFydHksCiAgICBjb3VudGVycGFydHlWZXJzaW9uIHN0cmluZywKKSAoc3RyaW5nLCBlcnJvcikgewogICAgLy8gdHJ5IHRvIHVubWFyc2hhbCBKU09OLWVuY29kZWQgdmVyc2lvbiBzdHJpbmcgYW5kIHBhc3MKICAgIC8vIHRoZSBhcHAtc3BlY2lmaWMgdmVyc2lvbiB0byBhcHAgY2FsbGJhY2suCiAgICAvLyBvdGhlcndpc2UsIHBhc3MgdmVyc2lvbiBkaXJlY3RseSB0byBhcHAgY2FsbGJhY2suCiAgICBjcE1ldGFkYXRhLCBlcnIgOj0gVW5tYXJzaGFsKGNvdW50ZXJwYXJ0eVZlcnNpb24pCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gYXBwLk9uQ2hhbk9wZW5UcnkoCiAgICAgICAgICAgIGN0eCwKICAgICAgICAgICAgb3JkZXIsCiAgICAgICAgICAgIGNvbm5lY3Rpb25Ib3BzLAogICAgICAgICAgICBwb3J0SUQsCiAgICAgICAgICAgIGNoYW5uZWxJRCwKICAgICAgICAgICAgY2hhbm5lbENhcCwKICAgICAgICAgICAgY291bnRlcnBhcnR5LAogICAgICAgICAgICBjb3VudGVycGFydHlWZXJzaW9uLAogICAgICAgICkKICAgIH0KICAgIGRvQ3VzdG9tTG9naWMoKQogICAgLy8gQ2FsbCB0aGUgdW5kZXJseWluZyBhcHBsaWNhdGlvbidzIE9uQ2hhbk9wZW5UcnkgY2FsbGJhY2suCiAgICAvLyBUaGUgdHJ5IGNhbGxiYWNrIG11c3Qgc2VsZWN0IHRoZSBmaW5hbCBhcHAtc3BlY2lmaWMgdmVyc2lvbiBzdHJpbmcgYW5kIHJldHVybiBpdC4KICAgIGFwcFZlcnNpb24sIGVyciA6PSBhcHAuT25DaGFuT3BlblRyeSgKICAgICAgICBjdHgsCiAgICAgICAgb3JkZXIsCiAgICAgICAgY29ubmVjdGlvbkhvcHMsCiAgICAgICAgcG9ydElELAogICAgICAgIGNoYW5uZWxJRCwKICAgICAgICBjaGFubmVsQ2FwLAogICAgICAgIGNvdW50ZXJwYXJ0eSwKICAgICAgICBjcE1ldGFkYXRhLkFwcFZlcnNpb24sIC8vIG5vdGUgeW91IG9ubHkgcGFzcyBjb3VudGVycGFydHkgYXBwIHZlcnNpb24gaGVyZQogICAgKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuICZxdW90OyZxdW90OywgZXJyCiAgICB9CiAgICAvLyBuZWdvdGlhdGUgZmluYWwgbWlkZGxld2FyZSB2ZXJzaW9uCiAgICBtaWRkbGV3YXJlVmVyc2lvbiA6PSBuZWdvdGlhdGVNaWRkbGV3YXJlVmVyc2lvbihjcE1ldGFkYXRhLk1pZGRsZXdhcmVWZXJzaW9uKQogICAgdmVyc2lvbiA6PSBjb25zdHJ1Y3RWZXJzaW9uKG1pZGRsZXdhcmVWZXJzaW9uLCBhcHBWZXJzaW9uKQogICAgcmV0dXJuIHZlcnNpb24sIG5pbAp9Cg=="}})],1),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L84-L124",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("ExpansionPanel",{attrs:{title:"`OnChanOpenAck`"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25DaGFuT3BlbkFjaygKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIHBvcnRJRCwKICAgIGNoYW5uZWxJRCBzdHJpbmcsCiAgICBjb3VudGVycGFydHlDaGFubmVsSUQgc3RyaW5nLAogICAgY291bnRlcnBhcnR5VmVyc2lvbiBzdHJpbmcsCikgZXJyb3IgewogICAgLy8gdHJ5IHRvIHVubWFyc2hhbCBKU09OLWVuY29kZWQgdmVyc2lvbiBzdHJpbmcgYW5kIHBhc3MKICAgIC8vIHRoZSBhcHAtc3BlY2lmaWMgdmVyc2lvbiB0byBhcHAgY2FsbGJhY2suCiAgICAvLyBvdGhlcndpc2UsIHBhc3MgdmVyc2lvbiBkaXJlY3RseSB0byBhcHAgY2FsbGJhY2suCiAgICBjcE1ldGFkYXRhLCBlcnIgPSBVbm1hcnNoYWxKU09OKGNvdW50ZXJwYXJ0eVZlcnNpb24pCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gYXBwLk9uQ2hhbk9wZW5BY2soY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCwgY291bnRlcnBhcnR5Q2hhbm5lbElELCBjb3VudGVycGFydHlWZXJzaW9uKQogICAgfQogICAgaWYgIWlzQ29tcGF0aWJsZShjcE1ldGFkYXRhLk1pZGRsZXdhcmVWZXJzaW9uKSB7CiAgICAgICAgcmV0dXJuIGVycm9yCiAgICB9CiAgICBkb0N1c3RvbUxvZ2ljKCkKICAgIC8vIGNhbGwgdGhlIHVuZGVybHlpbmcgYXBwbGljYXRpb24ncyBPbkNoYW5PcGVuVHJ5IGNhbGxiYWNrCiAgICByZXR1cm4gYXBwLk9uQ2hhbk9wZW5BY2soY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCwgY291bnRlcnBhcnR5Q2hhbm5lbElELCBjcE1ldGFkYXRhLkFwcFZlcnNpb24pCn0K"}})],1),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L126-L152",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("ExpansionPanel",{attrs:{title:"`OnChanOpenConfirm`"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25DaGFuT3BlbkNvbmZpcm0oCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwb3J0SUQsCiAgICBjaGFubmVsSUQgc3RyaW5nLAopIGVycm9yIHsKICAgIGRvQ3VzdG9tTG9naWMoKQogICAgcmV0dXJuIGFwcC5PbkNoYW5PcGVuQ29uZmlybShjdHgsIHBvcnRJRCwgY2hhbm5lbElEKQp9Cg=="}})],1),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L154-L162",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("p",[e._v("Similarly, for the channel closing:")]),e._v(" "),t("ExpansionPanel",{attrs:{title:"`OnChanCloseInit`"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25DaGFuQ2xvc2VJbml0KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcG9ydElELAogICAgY2hhbm5lbElEIHN0cmluZywKKSBlcnJvciB7CiAgICBkb0N1c3RvbUxvZ2ljKCkKICAgIHJldHVybiBhcHAuT25DaGFuQ2xvc2VJbml0KGN0eCwgcG9ydElELCBjaGFubmVsSUQpCn0K"}})],1),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L164-L187",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("ExpansionPanel",{attrs:{title:"`OnChanCloseConfirm`"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25DaGFuQ2xvc2VDb25maXJtKAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcG9ydElELAogICAgY2hhbm5lbElEIHN0cmluZywKKSBlcnJvciB7CiAgICBkb0N1c3RvbUxvZ2ljKCkKICAgIHJldHVybiBhcHAuT25DaGFuQ2xvc2VDb25maXJtKGN0eCwgcG9ydElELCBjaGFubmVsSUQpCn0K"}})],1),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L189-L212",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h2",{attrs:{id:"packet-callbacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packet-callbacks"}},[e._v("#")]),e._v(" Packet callbacks")]),e._v(" "),t("p",[e._v("The middleware's packet callbacks wrap the application's packet callbacks, just like the middleware's handshake callbacks wrapped the application's handshake callbacks.")]),e._v(" "),t("HighlightBox",{attrs:{type:"note"}},[t("p",[e._v("The packet callbacks are where the middleware performs most of its custom logic. The middleware may read the packet flow data and perform some additional packet handling, or it may modify the incoming data before it reaches the underlying application. This enables a wide degree of use cases, as a simple base application like token transfer can be transformed for a variety of use cases by combining it with custom middleware.")])]),e._v(" "),t("h3",{attrs:{id:"code-snippets-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code-snippets-2"}},[e._v("#")]),e._v(" Code snippets")]),e._v(" "),t("p",[e._v("Note that the code snippets below contain "),t("em",[e._v("pseudo code")]),e._v(", like "),t("code",[e._v("doCustomLogic(args)")]),e._v(". Every code snippet is accompanied by a reference to the respective function in the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/main/modules/apps/29-fee",target:"_blank",rel:"noopener noreferrer"}},[e._v("fee middleware IBC application"),t("OutboundLink")],1),e._v(" from the official "),t("code",[e._v("ibc-go")]),e._v(" repository.")]),e._v(" "),t("ExpansionPanel",{attrs:{title:"`OnRecvPacket`"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25SZWN2UGFja2V0KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcGFja2V0IGNoYW5uZWx0eXBlcy5QYWNrZXQsCiAgICByZWxheWVyIHNkay5BY2NBZGRyZXNzLAopIGliY2V4cG9ydGVkLkFja25vd2xlZGdlbWVudCB7CiAgICBkb0N1c3RvbUxvZ2ljKHBhY2tldCkKICAgIGFjayA6PSBhcHAuT25SZWN2UGFja2V0KGN0eCwgcGFja2V0LCByZWxheWVyKQogICAgZG9DdXN0b21Mb2dpYyhhY2spIC8vIG1pZGRsZXdhcmUgbWF5IG1vZGlmeSBvdXRnb2luZyBhY2sKICAgIHJldHVybiBhY2sKfQo="}})],1),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L214-L237",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("ExpansionPanel",{attrs:{title:"`OnAcknowledgementPacket`"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25BY2tub3dsZWRnZW1lbnRQYWNrZXQoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKICAgIGFja25vd2xlZGdlbWVudCBbXWJ5dGUsCiAgICByZWxheWVyIHNkay5BY2NBZGRyZXNzLAopIGVycm9yIHsKICAgIGRvQ3VzdG9tTG9naWMocGFja2V0LCBhY2spCiAgICByZXR1cm4gYXBwLk9uQWNrbm93bGVkZ2VtZW50UGFja2V0KGN0eCwgcGFja2V0LCBhY2ssIHJlbGF5ZXIpCn0K"}})],1),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L239-L292",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("ExpansionPanel",{attrs:{title:"`OnTimeoutPacket`"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTWlkZGxld2FyZSkgT25UaW1lb3V0UGFja2V0KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcGFja2V0IGNoYW5uZWx0eXBlcy5QYWNrZXQsCiAgICByZWxheWVyIHNkay5BY2NBZGRyZXNzLAopIGVycm9yIHsKICAgIGRvQ3VzdG9tTG9naWMocGFja2V0KQogICAgcmV0dXJuIGFwcC5PblRpbWVvdXRQYWNrZXQoY3R4LCBwYWNrZXQsIHJlbGF5ZXIpCn0K"}})],1),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L294-L334",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h2",{attrs:{id:"ics-4-wrappers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ics-4-wrappers"}},[e._v("#")]),e._v(" ICS-4 wrappers")]),e._v(" "),t("p",[e._v("Middleware must also implement the "),t("code",[e._v("ICS4Wrapper")]),e._v(" interface so that any communication from the application to the "),t("code",[e._v("channelKeeper")]),e._v(" goes through the middleware first. Similar to the packet callbacks, the middleware may modify outgoing acknowledgments and packets in any way it wishes.")]),e._v(" "),t("h3",{attrs:{id:"capabilities-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#capabilities-2"}},[e._v("#")]),e._v(" Capabilities")]),e._v(" "),t("p",[e._v("Earlier you saw that the handshake callbacks passed the capability in the callback arguments along to the underlying application so that it may be claimed by the base application. In the "),t("code",[e._v("ICS4Wrapper")]),e._v(" methods, the base application will then pass the capability up the stack in order to authenticate an outgoing packet or acknowledgement.")]),e._v(" "),t("p",[e._v("If the middleware wishes to send a packet or acknowledgment without the involvement of the underlying application, it should be given access to the same "),t("code",[e._v("scopedKeeper")]),e._v(" as the base application so that it can retrieve the capabilities by itself.")]),e._v(" "),t("h3",{attrs:{id:"code-snippets-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code-snippets-3"}},[e._v("#")]),e._v(" Code snippets")]),e._v(" "),t("p",[e._v("Note that the code snippets below contain "),t("em",[e._v("pseudo code")]),e._v(", like "),t("code",[e._v("doCustomLogic(args)")]),e._v(". Every code snippet is accompanied by a reference to the respective function in the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/main/modules/apps/29-fee",target:"_blank",rel:"noopener noreferrer"}},[e._v("fee middleware IBC application"),t("OutboundLink")],1),e._v(" from the official "),t("code",[e._v("ibc-go")]),e._v(" repository.")]),e._v(" "),t("ExpansionPanel",{attrs:{title:"`SendPacket`"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBTZW5kUGFja2V0KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgY2hhbkNhcCAqY2FwYWJpbGl0eXR5cGVzLkNhcGFiaWxpdHksCiAgICBhcHBQYWNrZXQgZXhwb3J0ZWQuUGFja2V0SSwKKSB7CiAgICAvLyBtaWRkbGV3YXJlIG1heSBtb2RpZnkgcGFja2V0CiAgICBwYWNrZXQgPSBkb0N1c3RvbUxvZ2ljKGFwcFBhY2tldCkKICAgIHJldHVybiBpY3M0S2VlcGVyLlNlbmRQYWNrZXQoY3R4LCBjaGFuQ2FwLCBwYWNrZXQpCn0K"}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L336-L343",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for an example implementation of this function for the ICS29 Fee Middleware module.")])],1),e._v(" "),t("ExpansionPanel",{attrs:{title:"`WriteAcknowledgement`"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gb25seSBjYWxsZWQgZm9yIGFzeW5jIGFja3MKZnVuYyBXcml0ZUFja25vd2xlZGdlbWVudCgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIGNoYW5DYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAogICAgcGFja2V0IGV4cG9ydGVkLlBhY2tldEksCiAgICBhY2sgZXhwb3J0ZWQuQWNrbm93bGVkZ2VtZW50LAopIHsKICAgIC8vIG1pZGRsZXdhcmUgbWF5IG1vZGlmeSBhY2tub3dsZWRnZW1lbnQKICAgIGFja19ieXRlcyA9IGRvQ3VzdG9tTG9naWMoYWNrKQogICAgcmV0dXJuIGljczRLZWVwZXIuV3JpdGVBY2tub3dsZWRnZW1lbnQocGFja2V0LCBhY2tfYnl0ZXMpCn0K"}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L345-L353",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for an example implementation of this function for the ICS29 Fee Middleware module.")])],1),e._v(" "),t("ExpansionPanel",{attrs:{title:"`GetAppVersion`"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gbWlkZGxld2FyZSBtdXN0IHJldHVybiB0aGUgdW5kZXJseWluZyBhcHBsaWNhdGlvbiB2ZXJzaW9uCmZ1bmMgR2V0QXBwVmVyc2lvbigKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIHBvcnRJRCwKICAgIGNoYW5uZWxJRCBzdHJpbmcsCikgKHN0cmluZywgYm9vbCkgewogICAgdmVyc2lvbiwgZm91bmQgOj0gaWNzNEtlZXBlci5HZXRBcHBWZXJzaW9uKGN0eCwgcG9ydElELCBjaGFubmVsSUQpCiAgICBpZiAhZm91bmQgewogICAgICAgIHJldHVybiAmcXVvdDsmcXVvdDssIGZhbHNlCiAgICB9CiAgICBpZiAhTWlkZGxld2FyZUVuYWJsZWQgewogICAgICAgIHJldHVybiB2ZXJzaW9uLCB0cnVlCiAgICB9CiAgICAvLyB1bndyYXAgY2hhbm5lbCB2ZXJzaW9uCiAgICBtZXRhZGF0YSwgZXJyIDo9IFVubWFyc2hhbCh2ZXJzaW9uKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcGFuaWMoZm10LkVycm9mKCZxdW90O3VuYWJsZSB0byB1bm1hcnNoYWwgdmVyc2lvbjogJXcmcXVvdDssIGVycikpCiAgICB9CiAgICByZXR1cm4gbWV0YWRhdGEuQXBwVmVyc2lvbiwgdHJ1ZQp9Cg=="}})],1),e._v(" "),t("HighlightBox",{attrs:{type:"synopsis"}},[t("p",[e._v("To summarize, this section has explored:")]),e._v(" "),t("ul",[t("li",[e._v("How to integrate middleware (or a middleware stack) in "),t("code",[e._v("app.go")]),e._v(".")]),e._v(" "),t("li",[e._v("The importance of middleware order in the middleware stack.")]),e._v(" "),t("li",[e._v("How only the top-layer middleware of any stack should be connected to the IBC router.")])])])],1)}),[],!1,null,null,null);a.default=l.exports}}]);