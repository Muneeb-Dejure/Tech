(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1231],{55717:function(e,l,n){"use strict";var a=n(52983);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=["html","dangerouslySetInnerHTML"];l.Z=function(e){var l=e.html,n=function(e,l){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],l.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r),t=(0,a.useRef)(null),s=(0,a.useRef)(!0);return(0,a.useEffect)(function(){if(!l||!t.current)throw Error("html prop cant't be null");if(s.current){s.current=!1;var e=document.createRange().createContextualFragment(l);t.current.innerHTML="",t.current.appendChild(e)}},[l,t]),a.createElement("div",i({},n,{ref:t}))}},67368:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/entry/page/[uid]",function(){return n(73892)}])},53612:function(e,l,n){"use strict";n.r(l);var a,i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PageContainer_entryRevision",selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promoHeadline",storageKey:null},{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"promoDescription",plural:!1,selections:a=[{alias:null,args:null,kind:"ScalarField",name:"plaintext",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntryImage",kind:"LinkedField",name:"promoImage",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"aspectRatio",value:1.91},{kind:"Literal",name:"width",value:1200}],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(aspectRatio:1.91,width:1200)"}],storageKey:null},{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"dek",plural:!1,selections:a,storageKey:null},{alias:"pageLandscapeLedeImage",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"leadImage",plural:!1,selections:[{args:[{kind:"Literal",name:"width",value:1820}],kind:"FragmentSpread",name:"LedeImage_leadImage"}],storageKey:null},{alias:null,args:null,concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"placeholderImageUrl",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntryBody",kind:"LinkedField",name:"body",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"components",plural:!0,selections:[{alias:null,args:null,concreteType:"EntryBodyComponentPlacement",kind:"LinkedField",name:"placement",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"EntryBodyComponentTheVerge_components"}],storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entry",abstractKey:null},{args:null,kind:"FragmentSpread",name:"EntryBodyComponentTheVerge_entryRevision"},{args:null,kind:"FragmentSpread",name:"ShareTools_entryRevision"}],type:"EntryRevision",abstractKey:"__isEntryRevision"};i.hash="35e2a7438e090af5ed0dc2322376bf6e",l.default=i},69467:function(e,l,n){"use strict";n.r(l);var a,i,r,t,s,u,o,d,c,g,y,m,p,k,F,K,h,T,L,v,w,S,E,b,f,I,x,P,R,B,_,U,C,N,j,G,D,V,A,H,O,Z,M,q,J,Q,W,z,X,Y,$,ee,el,en,ea=(a=[{defaultValue:null,kind:"LocalArgument",name:"uid"}],i=[{kind:"Variable",name:"uid",variableName:"uid"}],r={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"legacyId",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},d=[{alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null}],c=[o={alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null}],y=[g={alias:null,args:null,kind:"ScalarField",name:"plaintext",storageKey:null}],m={alias:null,args:null,kind:"ScalarField",name:"hideCredit",storageKey:null},p={alias:null,args:null,concreteType:"Asset",kind:"LinkedField",name:"asset",plural:!1,selections:[t],storageKey:null},K={alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"caption",plural:!1,selections:F=[k={alias:null,args:null,kind:"ScalarField",name:"html",storageKey:null},g],storageKey:null},T={alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"credit",plural:!1,selections:h=[k],storageKey:null},w={alias:null,args:null,concreteType:"EntryBodyComponentPlacement",kind:"LinkedField",name:"placement",plural:!1,selections:[L={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"alignment",storageKey:null}],storageKey:null},E={kind:"InlineFragment",selections:[S={alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"contents",plural:!1,selections:h,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dropcap",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"endmark",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lead",storageKey:null}],type:"EntryBodyParagraph",abstractKey:null},f={alias:null,args:null,kind:"ScalarField",name:"contentWarning",storageKey:null},P={alias:null,args:null,concreteType:"EntryImage",kind:"LinkedField",name:"image",plural:!1,selections:[b={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},I={alias:"height",args:null,kind:"ScalarField",name:"tempHeight",storageKey:null},x={alias:"width",args:null,kind:"ScalarField",name:"tempWidth",storageKey:null},m,K,T,p],storageKey:null},B=[{alias:null,args:[{kind:"Literal",name:"width",value:775}],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(width:775)"},I,x,K,p,R={alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"credit",plural:!1,selections:F,storageKey:null},m],_={alias:null,args:null,kind:"ScalarField",name:"uuid",storageKey:null},U={kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"quote",plural:!1,selections:h,storageKey:null}],type:"EntryBodyPullquote",abstractKey:null},N=[C={alias:"_id",args:null,kind:"ScalarField",name:"id",storageKey:null}],j={alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"description",plural:!1,selections:h,storageKey:null},G={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},D={alias:null,args:null,kind:"ScalarField",name:"price",storageKey:null},A=[{kind:"Literal",name:"aspectRatio",value:1},V={kind:"Literal",name:"width",value:768}],O={kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryBodyParagraph",kind:"LinkedField",name:"paragraphs",plural:!0,selections:[H={alias:null,args:null,concreteType:"EntryBodyComponentPlacement",kind:"LinkedField",name:"placement",plural:!1,selections:[L],storageKey:null},S],storageKey:null}],type:"EntryBodyBlockquote",abstractKey:null},Z={kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryEmbed",kind:"LinkedField",name:"embed",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"embedHtml",storageKey:null},{alias:null,args:null,concreteType:"EntryEmbedSource",kind:"LinkedField",name:"provider",plural:!1,selections:[G],storageKey:null}],storageKey:null}],type:"EntryBodyEmbed",abstractKey:null},M={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"level",storageKey:null},S],type:"EntryBodyHeading",abstractKey:null},q={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"rawHtml",storageKey:null}],type:"EntryBodyHTML",abstractKey:null},J={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"schemaName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"data",storageKey:null}],type:"EntryBodyJSON",abstractKey:null},Q={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"ordered",storageKey:null},{alias:null,args:null,concreteType:"EntryBodyListItem",kind:"LinkedField",name:"items",plural:!0,selections:[H,{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"line",plural:!1,selections:h,storageKey:null}],storageKey:null}],type:"EntryBodyList",abstractKey:null},z={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"autoplay",storageKey:null},W={alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"caption",plural:!1,selections:h,storageKey:null},f,{alias:null,args:null,concreteType:"EntryVideo",kind:"LinkedField",name:"video",plural:!1,selections:[t,_,u,{alias:null,args:null,concreteType:"EntryVideoImage",kind:"LinkedField",name:"poster",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"aspectRatio",value:1.25},{kind:"Literal",name:"width",value:600}],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(aspectRatio:1.25,width:600)"}],storageKey:null}],storageKey:null}],type:"EntryBodyVideo",abstractKey:null},X=[G,o],Y=[r,Q,E],$=[{alias:null,args:null,concreteType:"Asset",kind:"LinkedField",name:"asset",plural:!1,selections:[b,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},t],storageKey:null},T],ee={alias:null,args:null,kind:"ScalarField",name:"uid",storageKey:null},el={alias:null,args:null,kind:"ScalarField",name:"domain",storageKey:null},en=[G,{alias:null,args:null,kind:"ScalarField",name:"advertiserName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"advertiserDfpOrderName",storageKey:null}],{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"PageLayoutTheVergeQuery",selections:[{alias:null,args:i,concreteType:null,kind:"LinkedField",name:"entryRevision",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"Admin_entry"},{args:null,kind:"FragmentSpread",name:"EntryPageAnalytics_entry"}],type:"Entry",abstractKey:null},{args:null,kind:"FragmentSpread",name:"EntryPageAds_entryRevision"},{args:null,kind:"FragmentSpread",name:"PageContainer_entryRevision"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"PageLayoutTheVergeQuery",selections:[{alias:null,args:i,concreteType:null,kind:"LinkedField",name:"entryRevision",plural:!1,selections:[r,{kind:"TypeDiscriminator",abstractKey:"__isEntryRevision"},t,{alias:null,args:null,kind:"ScalarField",name:"seoHeadline",storageKey:null},s,u,o,{alias:null,args:null,kind:"ScalarField",name:"layoutTemplate",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"author",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"contributors",plural:!0,selections:d,storageKey:null},{alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"communityGroups",plural:!0,selections:[o,{alias:null,args:null,concreteType:"HubPage",kind:"LinkedField",name:"hubPage",plural:!1,selections:c,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"primaryCommunityGroup",plural:!1,selections:[o,{alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"parentEntryGroup",plural:!1,selections:c,storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promoHeadline",storageKey:null},{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"promoDescription",plural:!1,selections:y,storageKey:null},{alias:null,args:null,concreteType:"EntryImage",kind:"LinkedField",name:"promoImage",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"aspectRatio",value:1.91},{kind:"Literal",name:"width",value:1200}],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(aspectRatio:1.91,width:1200)"}],storageKey:null},{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"dek",plural:!1,selections:y,storageKey:null},{alias:"pageLandscapeLedeImage",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"leadImage",plural:!1,selections:[m,p,K,T,{alias:null,args:[{kind:"Literal",name:"width",value:1820}],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(width:1820)"}],storageKey:null},{alias:null,args:null,concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"placeholderImageUrl",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntryBody",kind:"LinkedField",name:"body",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"components",plural:!0,selections:[r,w,{kind:"TypeDiscriminator",abstractKey:"__isEntryBodyComponent"},E,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryBodyRelatedListItem",kind:"LinkedField",name:"items",plural:!0,selections:[t,b],storageKey:null}],type:"EntryBodyRelatedList",abstractKey:null},{kind:"InlineFragment",selections:[f,P],type:"EntryBodyImage",abstractKey:null},{kind:"InlineFragment",selections:[{alias:"ImageGroupTwoUp",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"images",plural:!0,selections:B,storageKey:null},{alias:null,args:null,concreteType:"EntryBodyImage",kind:"LinkedField",name:"items",plural:!0,selections:[{kind:"InlineFragment",selections:[r,w,{kind:"InlineFragment",selections:[S],type:"EntryBodyParagraph",abstractKey:null}],type:"EntryBodyComponent",abstractKey:"__isEntryBodyComponent"}],storageKey:null},{alias:"ImageGroupThreeUpBottom",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"images",plural:!0,selections:B,storageKey:null},{alias:"ImageGroupThreeUpTop",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"images",plural:!0,selections:B,storageKey:null},{alias:"ImageGroupFourUp",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"images",plural:!0,selections:[{alias:null,args:[{kind:"Literal",name:"width",value:720}],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(width:720)"},I,x,K,p,R,m],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"layout",storageKey:null}],type:"EntryBodyImageGroup",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryPoll",kind:"LinkedField",name:"poll",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalVotes",storageKey:null},t,{alias:null,args:null,concreteType:"EntryPollOption",kind:"LinkedField",name:"options",plural:!0,selections:[_,{alias:null,args:null,kind:"ScalarField",name:"votes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],storageKey:null}],storageKey:null}],type:"EntryBodyPoll",abstractKey:null},U,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryBodyComponentPlacement",kind:"LinkedField",name:"placement",plural:!1,selections:N,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"productLayout",storageKey:null},{alias:null,args:null,concreteType:"EntryProduct",kind:"LinkedField",name:"product",plural:!1,selections:[t,j,{alias:null,args:null,concreteType:"EntryProductRetailer",kind:"LinkedField",name:"retailers",plural:!0,selections:[G,D,{alias:null,args:null,kind:"ScalarField",name:"salePrice",storageKey:null},b],storageKey:null},{alias:null,args:null,concreteType:"EntryImage",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:"standardUrl",args:A,kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(aspectRatio:1,width:768)"},{alias:"landscapeUrl",args:[{kind:"Literal",name:"aspectRatio",value:1.5},V],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(aspectRatio:1.5,width:768)"},{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"caption",plural:!1,selections:y,storageKey:null},p],storageKey:null}],storageKey:null}],type:"EntryBodyProduct",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntrySidebar",kind:"LinkedField",name:"sidebar",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"body",plural:!0,selections:[r,O,Z,M,q,{kind:"InlineFragment",selections:[f,P,{alias:null,args:null,concreteType:"EntryBodyComponentPlacement",kind:"LinkedField",name:"placement",plural:!1,selections:[v],storageKey:null}],type:"EntryBodyImage",abstractKey:null},J,Q,E,U,z],storageKey:null}],storageKey:null}],type:"EntryBodySidebar",abstractKey:null},O,q,Z,M,J,Q,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"heading",plural:!1,selections:h,storageKey:null},j,{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"label",plural:!1,selections:h,storageKey:null},b],type:"EntryBodyActionbox",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Newsletter",kind:"LinkedField",name:"newsletter",plural:!1,selections:X,storageKey:null}],type:"EntryBodyNewsletter",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryTable",kind:"LinkedField",name:"table",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"style",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"rows",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"columns",storageKey:null},W,t],storageKey:null}],type:"EntryBodyTable",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryScorecard",kind:"LinkedField",name:"scorecard",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"score",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"pros",plural:!0,selections:Y,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"cons",plural:!0,selections:Y,storageKey:null},{alias:null,args:null,concreteType:"EntryImage",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:"squareUrl",args:A,kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(aspectRatio:1,width:768)"},{alias:"standardUrl",args:[{kind:"Literal",name:"aspectRatio",value:1.33},V],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(aspectRatio:1.33,width:768)"},K,p],storageKey:null},{alias:null,args:null,concreteType:"Product",kind:"LinkedField",name:"product",plural:!1,selections:[C,{alias:null,args:null,kind:"ScalarField",name:"imageUrl",storageKey:null},G,{alias:null,args:null,concreteType:"ProductCategory",kind:"LinkedField",name:"productCategory",plural:!1,selections:X,storageKey:null},{alias:null,args:null,concreteType:"ProductBrand",kind:"LinkedField",name:"productBrand",plural:!1,selections:X,storageKey:null},{alias:null,args:null,concreteType:"ProductRetailer",kind:"LinkedField",name:"retailers",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"storeName",storageKey:null},D,b],storageKey:null}],storageKey:null}],storageKey:null}],type:"EntryBodyScorecard",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryImageComparison",kind:"LinkedField",name:"imageComparison",plural:!1,selections:[{alias:null,args:null,concreteType:"EntryImage",kind:"LinkedField",name:"firstImage",plural:!1,selections:$,storageKey:null},{alias:null,args:null,concreteType:"EntryImage",kind:"LinkedField",name:"secondImage",plural:!1,selections:$,storageKey:null},W],storageKey:null}],type:"EntryBodyImageComparison",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryGallery",kind:"LinkedField",name:"gallery",plural:!1,selections:[t,{alias:null,args:null,concreteType:"EntryImage",kind:"LinkedField",name:"images",plural:!0,selections:[{alias:null,args:null,concreteType:"Asset",kind:"LinkedField",name:"asset",plural:!1,selections:[ee,t],storageKey:null},m,{alias:"main",args:[{kind:"Literal",name:"width",value:800}],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(width:800)"},W,{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"credit",plural:!1,selections:y,storageKey:null}],storageKey:null}],storageKey:null}],type:"EntryBodyGallery",abstractKey:null},z],storageKey:null}],storageKey:null},C,{alias:null,args:null,kind:"ScalarField",name:"socialHeadline",storageKey:null},{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"socialDescription",plural:!1,selections:y,storageKey:null},{alias:null,args:null,concreteType:"EntryImage",kind:"LinkedField",name:"socialImage",plural:!1,selections:[{alias:null,args:null,concreteType:"Asset",kind:"LinkedField",name:"asset",plural:!1,selections:[b],storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[ee,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"author",plural:!1,selections:N,storageKey:null},_,{alias:null,args:null,concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:[C,el,{alias:null,args:null,concreteType:"Network",kind:"LinkedField",name:"network",plural:!1,selections:[el],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasAffiliateLinks",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"publishDate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"originalPublishDate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"wordCount",storageKey:null},{alias:null,args:null,concreteType:"Entry",kind:"LinkedField",name:"streams",plural:!0,selections:[s],storageKey:null},{alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"primaryCampaignGroup",plural:!1,selections:en,storageKey:null},{alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"campaignGroups",plural:!0,selections:en,storageKey:null},{alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"communityGroups",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"isInternal",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"primaryPackageGroup",plural:!1,selections:[{alias:"packageID",args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"liveCoverageStart",storageKey:null},b],type:"Entry",abstractKey:null}],storageKey:null}]},params:{id:"1aa3d0c8bf945eb39d70eff6ab4e8bd0",metadata:{},name:"PageLayoutTheVergeQuery",operationKind:"query",text:null}});ea.hash="72633762e58bb469294a8102dbe9c75c",l.default=ea},55809:function(e,l,n){"use strict";var a=n(97458),i=n(28934),r=n(96664),t=n(61198),s=n(15207),u=n(9326),o=n(49895),d=n(20672),c=n(80604);l.Z=function(e){var l,g=(0,t.useFragment)(n(53612),e.entryRevision),y=(0,o.x)().refCallback,m=(0,u.q)().communityConfig.communityName,p=g.promoDescription,k=g.promoHeadline,F=g.title,K=g.body,h=g.promoImage;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.PB,{title:(0,c.F)([k,F],m),description:(null==p?void 0:p.plaintext)||(null===(l=g.dek)||void 0===l?void 0:l.plaintext),openGraph:{images:[{url:(null==h?void 0:h.variantUrl)||g.community.placeholderImageUrl}]},canonical:g.url}),(0,a.jsx)("main",{className:"md:px-34 px-20",children:(0,a.jsxs)("article",{ref:y,id:"content",className:"mx-auto my-24 w-full max-w-container-lg md:mt-16 lg:mt-45",children:[(0,a.jsxs)("div",{className:"mb-40 max-w-[900px] md:ml-100",children:[(0,a.jsx)("h1",{className:"sticky-nav-trigger mb-12 font-polysans text-40 font-bold leading-100 md:text-[55px] lg:block",children:F}),g.dek&&(0,a.jsx)("h2",{className:"mb-24 font-polysans text-22 font-light leading-110 selection:bg-franklin-20 md:text-30",children:g.dek.plaintext})]}),(0,a.jsx)("div",{className:"relative md:mx-auto md:flex md:max-w-container-md lg:max-w-none",children:(0,a.jsx)("div",{className:(0,i.Z)(d.Z.ArticleBodyComponentContainer,"sm:ml-auto md:ml-100 md:max-w-article-body lg:mx-100"),children:(0,a.jsx)("div",{children:K.components.map(function(e,l){return(0,a.jsx)(s.Z,{component:e,entryRevision:g},l)})})})})]})})]})}},8991:function(e,l,n){"use strict";n.d(l,{s:function(){return a}});var a={"@context":"https://schema.org","@type":"NewsMediaOrganization","@id":"https://www.theverge.com/#publisher",name:"The Verge",url:"https://www.theverge.com",description:"The Verge is a technology and science news website founded in 2011. It offers its readers breaking tech news, tech reviews, award-winning features and investigations through articles, videos, podcasts, and newsletters.",alternateName:["Verge","theverge"],logo:{"@type":"ImageObject",url:"https://cdn.vox-cdn.com/uploads/chorus_asset/file/24018771/verge_duet_500.png",height:"120",width:"500"},ethicsPolicy:"https://www.theverge.com/ethics-statement",masthead:"https://www.theverge.com/about-the-verge",foundingDate:"2011-11-01",founder:[{"@type":"Person",name:"Jim Bankoff"},{"@type":"Person",name:"Joshua Topolsky"},{"@type":"Person",name:"Marty Moe"},{"@type":"Person",name:"Nilay Patel"},{"@type":"Person",name:"Joanna Stern"},{"@type":"Person",name:"Dieter Bohn"},{"@type":"Person",name:"Joseph L. Flatley"},{"@type":"Person",name:"Sean Hollister"},{"@type":"Person",name:"Thomas Houston"},{"@type":"Person",name:"Laura June"},{"@type":"Person",name:"Paul Miller"},{"@type":"Person",name:"Ross Miller"},{"@type":"Person",name:"Thomas Ricker"},{"@type":"Person",name:"Vald Savov"},{"@type":"Person",name:"Chris Ziegler"}],ownershipFundingInfo:"The Verge is owned by Vox Media, the leading modern media company dedicated to high-quality journalism.",sameAs:["https://www.facebook.com/verge/","https://twitter.com/verge","https://www.instagram.com/verge","https://www.youtube.com/user/theverge","https://www.linkedin.com/company/the-verge","https://www.wikidata.org/wiki/Q2155442","https://en.wikipedia.org/wiki/The_Verge"],knowsAbout:[{"@type":"Thing",name:"technology"},{"@type":"Thing",name:"tech news"},{"@type":"Thing",name:"tech products"},{"@type":"Thing",name:"tech events"},{"@type":"Thing",name:"consumer electronics"},{"@type":"Thing",name:"gadgets"},{"@type":"Thing",name:"software news"},{"@type":"Thing",name:"tech reviews"},{"@type":"Thing",name:"the verge reviews"},{"@type":"Thing",name:"phone reviews"},{"@type":"Thing",name:"laptop reviews"},{"@type":"Thing",name:"buying guides"},{"@type":"Thing",name:"science news"},{"@type":"Thing",name:"cybersecurity news"},{"@type":"Thing",name:"gaming news"},{"@type":"Thing",name:"digital creator news"},{"@type":"Thing",name:"social media platforms"},{"@type":"Thing",name:"streaming platforms"},{"@type":"Thing",name:"section 230"}],award:["The National Magazine Awards 2022 Winner in Best Digital Illustration","The Pulitzer Prize 2020 Finalist in Feature Writing","Gerald Loeb 2022 Award Winner in Feature","Deadline Club Award 2021 Winner in Reporting by Independent Digital Media"]}},73892:function(e,l,n){"use strict";n.r(l),n.d(l,{__N_SSP:function(){return p},default:function(){return k}});var a=n(97458),i=n(36851),r=n(61198),t=n(10996),s=n(55809),u=n(8991),o=n(89697),d=n(58443),c=n(98613),g=n(20672),y=n(37782),m=n(68140),p=!0,k=(0,m.L)(function(e){var l=e.uid,m=(0,r.useLazyLoadQuery)(n(69467),{uid:l}).entryRevision;if(!m)throw Error("Page entry not found");var p="/about-the-verge"===(0,i.useRouter)().asPath;return(0,a.jsxs)(y.Z,{context:"PageLayoutErrorBoundary",layout:"Page",children:[(0,a.jsx)(t.Z,{entry:m}),p&&(0,a.jsx)(c.Z,{schema:u.s}),(0,a.jsx)(d.Z,{entry:m}),(0,a.jsx)(o.Z,{entryRevision:m}),(0,a.jsx)("div",{className:g.Z.PageLayout,children:(0,a.jsx)(s.Z,{entryRevision:m})})]})})}},function(e){e.O(0,[7404,5833,4723,3882,2156,996,3494,5207,9774,2888,179],function(){return e(e.s=67368)}),_N_E=e.O()}]);