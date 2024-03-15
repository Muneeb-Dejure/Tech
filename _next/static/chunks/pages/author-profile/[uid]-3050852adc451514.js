(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2693],{21393:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/author-profile/[uid]",function(){return a(83487)}])},79919:function(e,l,a){"use strict";a.r(l);var n,i,r,t,s,u,o,d,c,g,m,y,p,k,F,K,h,L,T,f,v,E,I,S,b,x,P,N,A,R,C,_,U,j,Z,w,V,q,B,z,G,M,D,H,O,Q,X,W,Y,J,$,ee,el,ea,en,ei,er,et,es,eu,eo,ed,ec,eg,em,ey,ep,ek,eF=(n={defaultValue:null,kind:"LocalArgument",name:"communityId"},i={defaultValue:null,kind:"LocalArgument",name:"pageNumber"},r={defaultValue:null,kind:"LocalArgument",name:"uid"},t=[{kind:"Variable",name:"uid",variableName:"uid"}],s={alias:"authorTitle",args:null,kind:"ScalarField",name:"title",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"bio",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"imageUrl",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"placeholderImageUrl",storageKey:null},m={alias:null,args:null,concreteType:"SocialLink",kind:"LinkedField",name:"socialLinks",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},K={alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[y={alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},{alias:null,args:p=[{kind:"Variable",name:"communityId",variableName:"communityId"}],concreteType:"CommunityMembership",kind:"LinkedField",name:"communityMembership",plural:!1,selections:[{alias:null,args:k=[{kind:"Variable",name:"pageNumber",variableName:"pageNumber"},{kind:"Literal",name:"perPage",value:10}],concreteType:"EntryPage",kind:"LinkedField",name:"recentAuthorAndContributorEntries",plural:!1,selections:[F={alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"Entry",kind:"LinkedField",name:"results",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"PlacementTheVerge_placeable"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"domain",storageKey:null},L={alias:"_id",args:null,kind:"ScalarField",name:"id",storageKey:null},T={alias:null,args:null,kind:"ScalarField",name:"commentsClosed",storageKey:null},f={alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"communityGroups",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null}],storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},E={alias:null,args:null,kind:"ScalarField",name:"promoHeadline",storageKey:null},S=[I={alias:null,args:null,kind:"ScalarField",name:"html",storageKey:null}],b={alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"author",plural:!1,selections:[y],storageKey:null},U={alias:"standard",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"leadImage",plural:!1,selections:_=[o,P={alias:null,args:[{kind:"Literal",name:"aspectRatio",value:1.5},x={kind:"Literal",name:"width",value:2400}],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(aspectRatio:1.5,width:2400)"},R={alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"caption",plural:!1,selections:A=[N={alias:null,args:null,kind:"ScalarField",name:"plaintext",storageKey:null}],storageKey:null},C={alias:null,args:null,concreteType:"Asset",kind:"LinkedField",name:"asset",plural:!1,selections:[v],storageKey:null}],storageKey:null},V={alias:"fivefour",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"leadImage",plural:!1,selections:w=[o,Z={alias:null,args:[j={kind:"Literal",name:"aspectRatio",value:1.25},x],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(aspectRatio:1.25,width:2400)"},R,C],storageKey:null},z={alias:"square",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"leadImage",plural:!1,selections:B=[o,q={alias:null,args:[{kind:"Literal",name:"aspectRatio",value:1},x],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(aspectRatio:1,width:2400)"},R,C],storageKey:null},D={alias:"portrait",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"leadImage",plural:!1,selections:M=[o,G={alias:null,args:[{kind:"Literal",name:"aspectRatio",value:.7},x],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(aspectRatio:0.7,width:2400)"},R,C],storageKey:null},O={alias:"landscape",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"leadImage",plural:!1,selections:H=[o,{alias:null,args:[{kind:"Literal",name:"aspectRatio",value:1.77},x],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(aspectRatio:1.77,width:2400)"},R,C],storageKey:null},Q={alias:null,args:null,concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:[c],storageKey:null},X={alias:"standard",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"promoImage",plural:!1,selections:_,storageKey:null},W={alias:"fivefour",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"promoImage",plural:!1,selections:w,storageKey:null},Y={alias:"square",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"promoImage",plural:!1,selections:B,storageKey:null},J={alias:"portrait",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"promoImage",plural:!1,selections:M,storageKey:null},$={alias:"landscape",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"promoImage",plural:!1,selections:H,storageKey:null},ea={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"leadComponent",plural:!1,selections:[ee={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:"standard",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"image",plural:!1,selections:_,storageKey:null},{alias:"fivefour",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"image",plural:!1,selections:w,storageKey:null},{alias:"square",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"image",plural:!1,selections:B,storageKey:null},{alias:"portrait",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"image",plural:!1,selections:M,storageKey:null},{alias:"landscape",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"image",plural:!1,selections:H,storageKey:null}],type:"EntryLeadImage",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryVideo",kind:"LinkedField",name:"video",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},v,{alias:"standard",args:null,concreteType:"EntryVideoImage",kind:"LinkedField",name:"poster",plural:!1,selections:el=[o,P],storageKey:null},{alias:"fivefour",args:null,concreteType:"EntryVideoImage",kind:"LinkedField",name:"poster",plural:!1,selections:[o,Z],storageKey:null},{alias:"square",args:null,concreteType:"EntryVideoImage",kind:"LinkedField",name:"poster",plural:!1,selections:[o,q],storageKey:null},{alias:"portrait",args:null,concreteType:"EntryVideoImage",kind:"LinkedField",name:"poster",plural:!1,selections:[o,G],storageKey:null},{alias:"landscape",args:null,concreteType:"EntryVideoImage",kind:"LinkedField",name:"poster",plural:!1,selections:el,storageKey:null}],storageKey:null}],type:"EntryLeadVideo",abstractKey:null}],storageKey:null},en={alias:null,args:null,kind:"ScalarField",name:"fullOrUserName",storageKey:null},ei={alias:null,args:p,concreteType:"AuthorProfile",kind:"LinkedField",name:"authorProfile",plural:!1,selections:[o,d],storageKey:null},er={alias:null,args:null,kind:"ScalarField",name:"uuid",storageKey:null},et={alias:null,args:null,kind:"ScalarField",name:"legacyId",storageKey:null},es={alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"contents",plural:!1,selections:S,storageKey:null},eu={alias:null,args:null,concreteType:"EntryBodyComponentPlacement",kind:"LinkedField",name:"placement",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},ed=[eo={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],ec={alias:null,args:null,kind:"ScalarField",name:"uid",storageKey:null},eg={alias:null,args:null,kind:"ScalarField",name:"hideCredit",storageKey:null},ey={alias:null,args:p,concreteType:"AuthorProfile",kind:"LinkedField",name:"authorProfile",plural:!1,selections:em=[o],storageKey:null},{fragment:{argumentDefinitions:[n,i,r],kind:"Fragment",metadata:null,name:"AuthorProfileLayoutTheVergeQuery",selections:[{alias:null,args:t,concreteType:"AuthorProfile",kind:"LinkedField",name:"authorProfile",plural:!1,selections:[s,u,o,d,{alias:null,args:null,concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:[c,{args:null,kind:"FragmentSpread",name:"PageAnalytics_community"}],storageKey:null},m,K,{args:null,kind:"FragmentSpread",name:"Admin_authorProfile"}],storageKey:null},{kind:"InlineDataFragmentSpread",name:"UidAuthorProfileServerSideProps_query",selections:[{alias:null,args:t,concreteType:"AuthorProfile",kind:"LinkedField",name:"authorProfile",plural:!1,selections:[K],storageKey:null}],args:null,argumentDefinitions:[{kind:"RootArgument",name:"communityId"},{kind:"RootArgument",name:"pageNumber"},{kind:"RootArgument",name:"uid"}]}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[r,n,i],kind:"Operation",name:"AuthorProfileLayoutTheVergeQuery",selections:[{alias:null,args:t,concreteType:"AuthorProfile",kind:"LinkedField",name:"authorProfile",plural:!1,selections:[s,u,o,d,{alias:null,args:null,concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:[c,h,{alias:null,args:null,concreteType:"Network",kind:"LinkedField",name:"network",plural:!1,selections:[h],storageKey:null},L],storageKey:null},m,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[y,{alias:null,args:p,concreteType:"CommunityMembership",kind:"LinkedField",name:"communityMembership",plural:!1,selections:[{alias:null,args:k,concreteType:"EntryPage",kind:"LinkedField",name:"recentAuthorAndContributorEntries",plural:!1,selections:[F,{alias:null,args:null,concreteType:"Entry",kind:"LinkedField",name:"results",plural:!0,selections:[T,f,g,v,{alias:null,args:null,kind:"ScalarField",name:"liveCoverageStart",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"liveCoverageEnd",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"enableLiveCoverageBadge",storageKey:null},E,{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"dek",plural:!1,selections:S,storageKey:null},{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"promoDescription",plural:!1,selections:S,storageKey:null},o,b,{alias:null,args:null,concreteType:"EntryCustomPage",kind:"LinkedField",name:"customPages",plural:!0,selections:[v,U,V,z,D,O],storageKey:null},Q,X,W,Y,J,$,ea,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"author",plural:!1,selections:[en,ei,{alias:null,args:null,kind:"ScalarField",name:"firstName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lastName",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"contributors",plural:!0,selections:[en,ei,y],storageKey:null},er,et,{alias:null,args:null,concreteType:"EntryBody",kind:"LinkedField",name:"body",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"components",plural:!0,selections:[ee,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryScorecard",kind:"LinkedField",name:"scorecard",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"score",storageKey:null}],storageKey:null}],type:"EntryBodyScorecard",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"quickPostComponents",plural:!0,selections:[ee,{kind:"InlineFragment",selections:[es,eu],type:"EntryBodyParagraph",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryBodyParagraph",kind:"LinkedField",name:"paragraphs",plural:!0,selections:[eu,es],storageKey:null}],type:"EntryBodyBlockquote",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"primaryCommunityGroup",plural:!1,selections:ed,storageKey:null},{alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"communityGroups",plural:!0,selections:[ec,eo,{alias:null,args:null,kind:"ScalarField",name:"isInternal",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"seoHeadline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"socialHeadline",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"quickAttachment",plural:!1,selections:[ee,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"embedHtml",storageKey:null},{alias:null,args:null,concreteType:"EntryEmbedSource",kind:"LinkedField",name:"provider",plural:!1,selections:ed,storageKey:null}],type:"EntryEmbed",abstractKey:null},{kind:"InlineFragment",selections:[er,v,{alias:"videoAsset",args:null,concreteType:"VideoAsset",kind:"LinkedField",name:"asset",plural:!1,selections:[g],storageKey:null},{alias:null,args:null,concreteType:"EntryVideoImage",kind:"LinkedField",name:"poster",plural:!1,selections:[{alias:null,args:[j,{kind:"Literal",name:"width",value:600}],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(aspectRatio:1.25,width:600)"}],storageKey:null}],type:"EntryVideo",abstractKey:null},{kind:"InlineFragment",selections:[o,{alias:"height",args:null,kind:"ScalarField",name:"tempHeight",storageKey:null},{alias:"width",args:null,kind:"ScalarField",name:"tempWidth",storageKey:null},eg,{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"caption",plural:!1,selections:[I,N],storageKey:null},{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"credit",plural:!1,selections:S,storageKey:null},C],type:"EntryImage",abstractKey:null},{kind:"InlineFragment",selections:[o,v,{alias:null,args:null,kind:"ScalarField",name:"source",storageKey:null}],type:"EntryExternalLink",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Entry",kind:"LinkedField",name:"entry",plural:!1,selections:[g,er,v,E,o,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"author",plural:!1,selections:[en,ey,y],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"contributors",plural:!0,selections:[en,ey],storageKey:null},Q,f,X,W,Y,J,$,{alias:null,args:null,concreteType:"EntryCustomPage",kind:"LinkedField",name:"customPages",plural:!0,selections:[U,V,z,D,O],storageKey:null},ea,{kind:"InlineFragment",selections:[et,{kind:"InlineFragment",selections:[ep={alias:null,args:null,kind:"ScalarField",name:"publishDate",storageKey:null},ek={alias:null,args:null,kind:"ScalarField",name:"originalPublishDate",storageKey:null},T],type:"Entry",abstractKey:null}],type:"EntryRevision",abstractKey:"__isEntryRevision"}],storageKey:null}],type:"EntryRelatedEntry",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryImage",kind:"LinkedField",name:"images",plural:!0,selections:[{alias:null,args:null,concreteType:"Asset",kind:"LinkedField",name:"asset",plural:!1,selections:[ec,v],storageKey:null},eg,{alias:"main",args:[{kind:"Literal",name:"width",value:800}],kind:"ScalarField",name:"variantUrl",storageKey:"variantUrl(width:800)"},{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"caption",plural:!1,selections:S,storageKey:null},{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"credit",plural:!1,selections:A,storageKey:null}],storageKey:null}],type:"EntryGallery",abstractKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"package",plural:!1,selections:[ee,v,g,b,E,{kind:"InlineFragment",selections:em,type:"Entry",abstractKey:null}],storageKey:null},ep,ek,{alias:null,args:null,concreteType:"Community",kind:"LinkedField",name:"linkPostCommunity",plural:!1,selections:[o,eo],storageKey:null}],type:"Entry",abstractKey:null}],type:"EntryRevision",abstractKey:"__isEntryRevision"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},ec,L],storageKey:null}]},params:{id:"39257732cfe7b2fdc27249f46cd54285",metadata:{},name:"AuthorProfileLayoutTheVergeQuery",operationKind:"query",text:null}});eF.hash="faf9e72b77dec73d024c4ad30f46b81e",l.default=eF},80347:function(e,l,a){"use strict";a.d(l,{Z:function(){return y}});var n=a(97458),i=a(28934),r=a(52071),t=a(88966),s=a(29145),u=a(89);a(24677);var o={light:"mxmugz1 mxmugz0",dark:"mxmugz2 mxmugz0"},d={light:"mxmugz4 mxmugz3",dark:"mxmugz5 mxmugz3"},c=function(e){var l=e.text,a=e.url,c=e.className,g=e.textClassName,m=e.iconLeft,y=e.iconRight,p=e.theme,k=void 0===p?"dark":p,F=(0,s._)(e,["text","url","className","textClassName","iconLeft","iconRight","theme"]);return(0,n.jsxs)("a",(0,t._)((0,r._)({href:a},F),{className:(0,i.Z)(u.I.StandaloneLink,o[k],c&&c),children:[m&&(0,n.jsx)("span",{children:m}),(0,n.jsx)("span",{className:(0,i.Z)(d[k],g),children:l}),y&&(0,n.jsx)("span",{children:y})]}))},g=a(42731),m=a(72511),y=function(e){var l=e.pageNumber,a=e.className,r=e.prevLabel,t=e.nextLabel,s=void 0===t?"Next":t,o=e.updatedTotalPages,d=e.previousPage,y=e.nextPage,p=e.fullArchivesPage,k=e.pageLimit,F=e.theme,K=void 0===F?"dark":F,h=o&&o>=15&&p&&k&&l===o,L=h?p:o&&l<o?y:void 0;return h&&(s="Archives"),(0,n.jsxs)("nav",{className:(0,i.Z)(u.I.Pagination,m.nC[K],a&&a),children:[(0,n.jsx)("h2",{className:g.i,children:"Pagination"}),(0,n.jsx)("span",{className:m.mp,children:d&&l>1&&(0,n.jsx)(c,{theme:K,rel:"prev",url:d,text:void 0===r?"Previous":r})}),(0,n.jsxs)("span",{className:m.Md,children:["Page ",l," of ",o]}),(0,n.jsx)("span",{className:m.lp,children:L&&(0,n.jsx)(c,{theme:K,rel:"next",url:L,text:s})})]})}},83487:function(e,l,a){"use strict";a.r(l),a.d(l,{__N_SSP:function(){return P},default:function(){return N}});var n=a(52071),i=a(97458),r=a(28934),t=a(96664);a(52983);var s=a(61198),u=a(48061),o=a.n(u),d=a(46737),c=a(40869),g=a(35917),m=a(15017),y=a(83136),p=a(80347),k=a(19772),F=a(72997),K=a(9326),h=a(92377),L=a(383),T=a(62044),f=a(81284),v=a(61684),E=a(79408),I=a(20672),S=a(37782),b=a(80604),x=a(68140),P=!0,N=(0,x.L)(function(e){var l=e.uid,u=e.pageNumber,x=(0,s.useLazyLoadQuery)(a(79919),{uid:l,pageNumber:u,communityId:f.vv}).authorProfile;if(!x)throw Error("Author profile not found");var P=x.user,N=x.imageUrl,A=x.bio,R=x.authorTitle,C=x.socialLinks,_=P.fullName,U=P.communityMembership,j=null==U?void 0:U.recentAuthorAndContributorEntries,Z=null==j?void 0:j.totalCount,w=(null==j?void 0:j.results)||[],V=Z?Math.ceil(Z/f.UY):0,q=(0,E.Z)(),B=(0,K.q)().communityConfig.communityName,z=(0,b.F)(["".concat(_?"".concat(_," "):"","Profile and Activity").concat(q.page&&q.page>1?" - Page ".concat(q.page):"")],B),G=q.page&&q.page>1?"".concat(x.url,"/archives/").concat(q.page):x.url,M=C.length>0?C.filter(function(e){return"PROFILE"!==e.type&&"RSS"!==e.type}).map(function(e){return{label:e.label||"",type:e.type,url:e.url}}):[],D=(0,v.Z)(V,V,!0),H="."+I.Z.AuthorProfileLayout;return(0,F.Z)(H),(0,i.jsx)(S.Z,{context:"AuthorProfileLayoutErrorBoundary",layout:"AuthorProfile",children:(0,i.jsxs)("div",{className:(0,r.Z)(I.Z.AuthorProfileLayout,(0,k.Z)(),"dark flex flex-col"),children:[(0,i.jsx)(L.Z,{title:z,pageType:"author_page"}),(0,i.jsx)(T.Z,{pageType:"Author Profile",pageTypeCategory:"aggregation",community:x.community}),(0,i.jsx)(t.PB,{title:z,description:A?o()(A):"View the latest from ".concat(_||"the author"," on The Verge."),canonical:G,openGraph:{images:[{url:N||x.community.placeholderImageUrl,alt:_?"".concat(_," profile image"):"Author profile image"}]}}),(0,i.jsxs)("main",{id:"content",children:[(0,i.jsx)(c.Z,{authorName:_,authorTitle:R,authorBio:A,authorSocialLinks:M,authorProfileImageUrl:N}),(0,i.jsxs)(y.Z,{children:[(0,i.jsx)(m.Z,{children:(0,i.jsxs)(i.Fragment,{children:[w.map(function(e,l){return e?(0,i.jsx)(d.Z,{placeable:e,crossPostCommunity:null,gaComponentName:"standard_river"},l):null}),V>1&&(0,i.jsx)(p.Z,(0,n._)({},D))]})}),(0,i.jsx)(g.Z,{children:(0,i.jsx)(h.Z,{adType:"topRightRailHub"})})]})]})]})})})},24677:function(){},79408:function(e,l,a){"use strict";var n=a(52983),i=a(74623);l.Z=function(){let e=(0,n.useContext)(i.Z);if(!e||!e.routeInfo)throw Error("Make sure to use <RouteInfoProvider />");return e.routeInfo}}},function(e){e.O(0,[7404,9358,3882,2156,638,7574,9960,235,6448,6729,9774,2888,179],function(){return e(e.s=21393)}),_N_E=e.O()}]);