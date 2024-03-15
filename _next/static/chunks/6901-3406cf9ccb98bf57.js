"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6901],{84235:function(e,n,a){a.r(n);var t,r,l,i,o={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StandardArticleContainer_entryRevision",selections:[{alias:null,args:null,kind:"ScalarField",name:"seoSchema",storageKey:null},{alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"communityGroups",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"isDisclaimer",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"package",plural:!1,selections:[t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntryBody",kind:"LinkedField",name:"body",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"components",plural:!0,selections:[{alias:null,args:null,concreteType:"EntryBodyComponentPlacement",kind:"LinkedField",name:"placement",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},t,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"EntryTable",kind:"LinkedField",name:"table",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"style",storageKey:null}],storageKey:null}],type:"EntryBodyTable",abstractKey:null},{args:null,kind:"FragmentSpread",name:"EntryBodyComponentTheVerge_components"}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"primaryCampaignGroup",plural:!1,selections:i=[{alias:null,args:null,kind:"ScalarField",name:"advertiserName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"advertiserPreamble",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"advertiserClickthroughUrl",storageKey:null},{alias:null,args:null,concreteType:"BasicImage",kind:"LinkedField",name:"campaignAdvertiserLightImage",plural:!1,selections:l=[r={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"BasicImage",kind:"LinkedField",name:"campaignAdvertiserDarkImage",plural:!1,selections:l,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"campaignGroups",plural:!0,selections:i,storageKey:null},{kind:"InlineFragment",selections:[r,{alias:null,args:null,kind:"ScalarField",name:"commentsClosed",storageKey:null}],type:"Entry",abstractKey:null},{args:null,kind:"FragmentSpread",name:"CoralCommentsLink_entryRevision"},{args:null,kind:"FragmentSpread",name:"CoralDrawer_entryRevision"},{args:null,kind:"FragmentSpread",name:"CoralArticleCommentsButton_entryRevision"},{args:null,kind:"FragmentSpread",name:"EntryBodyComponentTheVerge_entryRevision"},{args:null,kind:"FragmentSpread",name:"EntryRailComponents_entryRevision"},{args:null,kind:"FragmentSpread",name:"EntrySEO_entryRevision"},{args:null,kind:"FragmentSpread",name:"MoreStories_entryRevision"},{args:null,kind:"FragmentSpread",name:"PackageMemberLink_entryRevision"},{args:null,kind:"FragmentSpread",name:"ParselyTags_entryRevision"},{args:null,kind:"FragmentSpread",name:"StandardLede_entryRevision"},{args:null,kind:"FragmentSpread",name:"EntrySEOSchemas_entryRevision"}],type:"EntryRevision",abstractKey:"__isEntryRevision"};o.hash="3198bf14a01ac53caf512fa0a8a43744",n.default=o},98804:function(e,n,a){a.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StandardLede_entryRevision",selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,concreteType:"RichText",kind:"LinkedField",name:"dek",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"plaintext",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasAffiliateLinks",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"commentsClosed",storageKey:null}],type:"Entry",abstractKey:null},{args:null,kind:"FragmentSpread",name:"PublishDate_entryRevision"},{args:null,kind:"FragmentSpread",name:"LedeByline_entryRevision"},{args:null,kind:"FragmentSpread",name:"LedeBylineAdditional_entryRevision"},{args:null,kind:"FragmentSpread",name:"CommunityGroups_entryRevision"},{args:null,kind:"FragmentSpread",name:"ShareAndCommentLinks_entryRevision"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"leadComponent",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"LedeVideo_leadComponent"}],type:"EntryLeadVideo",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"LedeEmbed_leadComponent"}],type:"EntryLeadEmbed",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"LedeGallery_leadComponent"}],type:"EntryLeadGallery",abstractKey:null},{kind:"InlineFragment",selections:[{alias:"standard",args:null,concreteType:"EntryImage",kind:"LinkedField",name:"image",plural:!1,selections:[{args:[{kind:"Literal",name:"aspectRatio",value:1.5},{kind:"Literal",name:"width",value:2e3}],kind:"FragmentSpread",name:"LedeImage_leadImage"}],storageKey:null}],type:"EntryLeadImage",abstractKey:null}],storageKey:null}],type:"EntryRevision",abstractKey:"__isEntryRevision"};t.hash="6d477c58fb599b02d32092ab6baf8a6a",n.default=t},53168:function(e,n,a){a.d(n,{B:function(){return g}});var t=a(53520),r=a(97458),l=a(36851),i=a(52983),o=a(83969),s=a(9658),d=a(28809),c=a(36935),u=a(24322),m="Subscription authentication failed. Please try again.",g=(0,i.createContext)({paywalled:!1,paywalledEntryGroup:null,authError:null,dismissAuthError:function(){}}),p=[o.vk.chorusGroup,s.vk.chorusGroup,d.vk.chorusGroup];n.Z=function(e){var n,a=e.communityGroups,o=e.children,s=(null===(n=a.find(function(e){return p.find(function(n){return n===(null==e?void 0:e.slug)})}))||void 0===n?void 0:n.slug)||null,d=!!s,h=(0,c.z$)(),y=(0,t._)((0,i.useState)(!1),2),f=y[0],b=y[1],v=(0,t._)((0,i.useState)(null),2),x=v[0],k=v[1],w=(0,l.useRouter)().query;return(0,i.useEffect)(function(){if(d){var e=!!w[u.qJ];window.history.replaceState({},document.title,window.location.href.split("?")[0]),fetch("/api/memberful/paywall-verification?group=".concat(s)).then(function(n){200===n.status?b(!0):e&&k(m)}).catch(function(){e&&k(m)})}},[w,h,d,s]),(0,r.jsx)(g.Provider,{value:{paywalled:!f&&d,paywalledEntryGroup:s,authError:x,dismissAuthError:function(){return k(null)}},children:o})}},86901:function(e,n,a){a.d(n,{Z:function(){return er}});var t=a(97458),r=a(28934),l=a(52983),i=a(61198),o=a(90275),s=a(80762),d=a(91138),c=a(53520),u=a(92869),m=a(71050),g=a(67914),p=a(41765),h=a(96164),y=a(83969),f=a(9658),b=a(28809),v=a(86399),x=a(36935),k=a(9326),w=a(37782),C=a(53168),_=function(e){var n=e.open,a=e.message,r=e.dismiss;return(0,t.jsx)(m.V,{open:n,onClose:r,children:(0,t.jsx)(m.V.Panel,{children:(0,t.jsxs)("div",{className:"fixed bottom-[50px] left-[50%] z-20 flex min-w-[300px] translate-x-[-50%] rounded-[2px] bg-[#FF3D00] px-20 py-10 font-polysans text-14 font-medium text-white",children:[(0,t.jsx)(m.V.Description,{children:a}),(0,t.jsx)("button",{className:"ml-10 focus:outline-none focus-visible:outline-none",onClick:r,children:(0,t.jsx)(p.Z,{className:"w-12 fill-white"})})]})})})},j=(0,w.n)(function(){var e,n=(null===(e=(0,k.q)().memberfulConfig)||void 0===e?void 0:e.memberfulUrl)||"",a=(0,l.useContext)(C.B),r=a.paywalledEntryGroup,i=a.authError,o=a.dismissAuthError,m=[y.vk,f.vk,b.vk].find(function(e){return e.chorusGroup===r})||b.vk,p=m.subscriptionsConfig,w=m.paywallInfo,j=(0,c._)((0,l.useState)({}),2),S=j[0],T=j[1],F=(0,x.z$)();(0,l.useEffect)(function(){var e;(e=(0,s._)(function(){return(0,u.Jh)(this,function(e){switch(e.label){case 0:return[4,(0,v.Z)(p)];case 1:return T.apply(void 0,[e.sent()]),[2]}})}),function(){return e.apply(this,arguments)})().catch(function(e){(0,g.Tb)(e,{tags:{layout:"SubscriptionsPageLayout",context:"newsletters"}})})},[p]);var I=(0,l.createRef)();(0,l.useEffect)(function(){var e=I.current;if(e&&"undefined"!=typeof IntersectionObserver){var n=new IntersectionObserver(function(a){var t=(0,c._)(a,1)[0];(null==t?void 0:t.isIntersecting)&&(null==F||F.emit({event:m.onObserverEvent}),n.unobserve(e))});return n.observe(e),function(){n.unobserve(e)}}},[r,F,I,m]);var L=(0,c._)((0,l.useState)(""),2),N=L[0],E=L[1];return(0,l.useEffect)(function(){E(encodeURIComponent(window.location.pathname))},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_,{open:!!i,message:i||"",dismiss:o}),(0,t.jsxs)("div",{className:"relative z-[2] ml-[-20px] w-[100vw] md:left-[calc(-50vw+42%)] md:ml-0 lg:left-[calc(-50vw+75%)]",children:[(0,t.jsx)("div",{className:"absolute top-[-200px] h-[200px] w-[100%] bg-paywall-fade"}),(0,t.jsx)("div",{className:"bg-white p-18",children:(0,t.jsxs)("div",{ref:I,className:"mx-auto my-20 border-t-2 border-t-blurple pt-18 lg:max-w-[1100px]",children:[(0,t.jsx)("h3",{className:"mb-14 font-polysans text-35 font-bold leading-100",children:w.headerTitle}),(0,t.jsx)("p",{className:"mb-18 font-fkroman text-18",dangerouslySetInnerHTML:{__html:w.headerBlurb}}),(0,t.jsx)("div",{className:"mb-10 flex flex-col justify-between md:flex-row",children:p.map(function(e){var a,r="".concat(n,"/checkout?plan=").concat(e.id),l="/api/memberful/purchase-redirect?planUrl=".concat(r,"&redirectTo=").concat(N);return(0,t.jsx)(h.Vh,{plan:e,pricingInfo:S[e.name],theme:{color:"bg-blurple",text:"text-white"},onClick:(a=e.gaName,function(){var e=(0,d._)({event:m.onClickPlanEventConfig.subscribeKey},m.onClickPlanEventConfig.subscribeKey,(0,d._)({},m.onClickPlanEventConfig.planKey,a));null==F||F.emit(e)}),href:l,buttonClassName:"border-2 border-white w-full rounded bg-white py-12 font-polysans-mono text-14 font-medium tracking-widest text-black hover:bg-blurple hover:text-white"},e.name)})}),(0,t.jsxs)("h4",{className:"font-polysans text-22 font-bold md:text-30",children:[w.signInCTA,(0,t.jsx)("a",{className:"ml-6 border-b-2 border-franklin hover:bg-franklin-underline",onClick:function(){null==F||F.emit({event:"authentication",authentication:{method:m.onClickLoginAuth}})},href:"/api/memberful/login?redirectTo=".concat(N),children:"Sign in"})]}),(0,t.jsxs)("p",{className:"my-12 font-polysans text-13 leading-120",children:["We accept credit card, Apple Pay, and Google Pay. Having issues?",(0,t.jsx)("a",{className:"ml-6 border-b border-black hover:border-none hover:bg-franklin-underline",href:w.faqPath,children:"Click here for FAQ"})]})]})})]})]})},{context:"PaywallErrorBoundary"}),S=a(46249),T=a(15207),F=a(29145),I=a(38304),L=a(72500),N=a(63169),E=a(20134),R=a(15592),K=a(14286),P=a(50812),Z=a(74952),A=a(1182),H=a(41373),G=a(92377),B=a(20672),q=a(1981),D=function(e){var n=e.campaignGroup,l=e.hideComments,o=(0,F._)(e,["campaignGroup","hideComments"]),s=(0,i.useFragment)(a(98804),o.entryRevision),d=s.leadComponent;return(0,t.jsxs)("div",{className:(0,r.Z)(B.Z.ArticleLede,"mx-auto mb-28 w-full md:max-w-container-md lg:mb-36 lg:max-w-none"),children:[!n&&(0,t.jsx)(I.Z,{limit:3,entryRevision:s}),(0,t.jsx)("h1",{className:"mb-28 hidden max-w-[900px] font-polysans text-45 font-bold leading-100 selection:bg-franklin-20 lg:block",children:s.title}),(0,t.jsx)("span",{className:"sticky-nav-trigger"}),(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row-reverse lg:justify-end",children:[(0,t.jsxs)("div",{className:(0,r.Z)("flex-col lg:flex",d&&"lg:ml-40"),children:[(0,t.jsxs)("div",{className:"mb-24 grow",children:[(0,t.jsx)("h1",{className:"inline font-polysans text-22 font-bold leading-110 md:text-33 lg:hidden",children:s.title}),s.dek&&(0,t.jsxs)("span",{className:"font-polysans text-22 font-light leading-110 md:text-30 lg:block",children:[(0,t.jsx)("span",{className:"text-blurple",children:" / "}),(0,t.jsx)("h2",{className:"inline selection:bg-franklin-20",children:s.dek.plaintext})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-16 w-[200px] border-t border-gray-bd lg:hidden"}),(0,t.jsxs)("div",{className:"mb-2 text-blurple [&>p>span:first-child]:text-gray-13 [&_.duet--article-byline-and]:text-gray-13",children:[(0,t.jsx)(L.Z,{entryRevision:s}),(0,t.jsx)(N.Z,{entryRevision:s})]}),(0,t.jsx)("div",{className:(0,r.Z)(B.Z.ArticleDateAndComments,"mb-20 inline-block font-polysans text-12 text-gray-5a"),children:(0,t.jsx)(Z.Z,{entryRevision:s})}),n&&(0,t.jsx)(H.Z,{className:"text-gray-5a",campaignGroup:n}),(0,t.jsx)("div",{className:(0,r.Z)("mb-24 flex lg:mb-0",s.hasAffiliateLinks?"lg:mb-28":"lg:mb-0"),children:(0,t.jsx)(q.Z,{hideComments:l||s.commentsClosed,commentColor:"blurple",shareColor:"blurple",entryRevision:s,iconClassName:"hover:fill-white"})}),(0,t.jsx)(G.Z,{adType:"articleSponsorship"}),s.hasAffiliateLinks&&(0,t.jsx)(A.Z,{className:"border-gray-bd text-gray-5a lg:max-w-[350px] [&>a]:text-gray-13"})]})]}),d&&(0,t.jsxs)("div",{className:"w-full shrink-0 lg:basis-[600px]",children:["EntryLeadEmbed"===d.__typename&&(0,t.jsx)(E.Z,{ledeEmbed:d}),"EntryLeadGallery"===d.__typename&&(0,t.jsx)(R.Z,{ledeGallery:d}),"EntryLeadVideo"===d.__typename&&(0,t.jsx)(P.Z,{ledeVideo:d}),"EntryLeadImage"===d.__typename&&d.standard&&(0,t.jsx)("div",{className:"md:pl-0",children:(0,t.jsx)(K.Z,{leadImage:d.standard,aspectRatio:1.5,sizes:"(max-width: 768px) calc(100vw - 100px), (max-width: 1180px) 700px, 600px"})})]})]})]})},V=a(59890),O=a(78746),U=a(52981),z=a(35917),M=a(50886),Y=a(27762),W=a(78214),J=a(37655),Q=a(30327),$=a(49895),X=a(66096),ee=a(76460),en=a(6978),ea=a(38137),et=a(21439),er=function(e){var n,s=e.entryRevision,d=e.mostPopular,c=(0,i.useFragment)(a(84235),s),u=(0,$.x)().refCallback,m=(0,l.useContext)(C.B).paywalled,g=c.body,p=c.seoSchema,h=c.communityGroups,y=c.campaignGroups,f=c.primaryCampaignGroup||y[0],b=f&&(0,et.b)(f,!0),v=null===(n=h.find(function(e){return null==e?void 0:e.isDisclaimer}))||void 0===n?void 0:n.description,x=!!g.components.find(function(e){var n;return"EntryBodyTable"===e.__typename&&(null===(n=e.table)||void 0===n?void 0:n.style)==="buying_guide"}),k=m?g.components.slice(0,3):g.components,w="."+B.Z.StandardArticleContainer;return(0,Q.Z)(w),(0,t.jsx)(J.Z,{children:(0,t.jsxs)("div",{className:B.Z.StandardArticleContainer,children:[(0,t.jsx)(en.Z,{entryRevision:c,nofollow:!!b}),(0,t.jsx)(X.Z,{entryRevision:c,enableTraining:!0}),(0,t.jsx)(ee.Z,{scriptId:"standard",seoSchema:p}),(0,t.jsx)(ea.Z,{entryRevision:c}),(0,t.jsx)(W.Z,{entryRevision:c}),(0,t.jsxs)("main",{className:"md:px-34 relative px-20",children:[(0,t.jsx)(G.Z,{adType:"leaderboardArticle"}),(0,t.jsxs)("article",{ref:u,id:"content",className:"mx-auto my-24 w-full max-w-container-lg md:mt-16 lg:mt-45",children:[(0,t.jsx)(D,{campaignGroup:b||null,entryRevision:c,hideComments:m}),(0,t.jsxs)("div",{className:"relative md:mx-auto md:flex md:max-w-container-md lg:max-w-none",children:[(0,t.jsxs)("div",{className:(0,r.Z)(B.Z.ArticleBodyComponentContainer,"clearfix sm:ml-auto md:ml-100 md:max-w-article-body lg:mx-100"),children:[b&&(0,t.jsx)(U.Z,{campaignDisclaimer:v}),c.package&&(0,t.jsx)(o.Z,{entryRevision:c}),(0,t.jsx)("div",{children:k.map(function(e,n){return(0,t.jsx)(T.Z,{component:e,entryRevision:c,sponsoredContent:!!b},n)})}),m&&(0,t.jsx)(j,{}),!m&&!c.commentsClosed&&(0,t.jsx)(Y.Z,{entryRevision:c})]}),!x&&(0,t.jsxs)(z.Z,{className:m?"!max-h-[500px] overflow-hidden":"",children:[(0,t.jsx)("div",{className:"flex-auto",children:(0,t.jsx)(G.Z,{adType:"topRightRailArticle"})}),(0,t.jsx)("div",{className:"flex-auto",children:(0,t.jsx)(M.Z,{colorTheme:"white",entries:d})}),(0,t.jsx)("div",{className:"flex-auto",children:(0,t.jsxs)("div",{className:"sticky top-90",children:[(0,t.jsx)(G.Z,{adType:"specialSponsorshipRail"}),(0,t.jsx)(G.Z,{adType:"connatixRightRail"})]})}),(0,t.jsx)("div",{className:"flex-auto",children:(0,t.jsx)(S.Z,{entryRevision:c})}),(0,t.jsx)(O.Z,{}),(0,t.jsx)("div",{className:"flex-auto",children:(0,t.jsx)(G.Z,{adType:"bottomRightRailArticle"})})]})]})]})]}),(0,t.jsx)(G.Z,{adType:"specialSponsorshipBody"}),!b&&(0,t.jsx)(V.Z,{entryRevision:c})]})})}},83969:function(e,n,a){a.d(n,{KU:function(){return t},T6:function(){return o},cK:function(){return r},to:function(){return l},vk:function(){return i}});var t={light:{headerColor:"bg-franklin",headerText:"text-black",headerGradient:"from-white/75 to-white bg-gradient-to-b",contentColor:"bg-franklin",contentText:"text-black",backgroundColor:"bg-white",backgroundText:"text-black",logoColor:"white",faqBackgroundColor:"bg-white",faqBorder:"border-t border-blurple",faqIconColor:"fill-black"},dark:{headerColor:"bg-blurple",headerText:"text-white",headerGradient:"from-gray-13 to-gray-13/75 bg-gradient-to-t",contentColor:"bg-franklin",contentText:"text-black",backgroundColor:"bg-gray-13",backgroundText:"text-white",logoColor:"blurpleBlack",faqBackgroundColor:"bg-blurple",faqBorder:"rounded",faqIconColor:"fill-franklin"}},r={title:"Command Line",seoTitle:"Subscribe to Command Line",gaTitle:"command_line",oneLineDescription:"A Newsletter By Alex Heath",description:"<em>Command Line</em> is a weekly newsletter about the tech industry’s inside conversation. Each week, <em>The Verge</em>’s Alex Heath peels back the curtain on tech’s most influential players, delivering scoops, interviews, and analysis you won’t find elsewhere. All new monthly and annual subscriptions come with a <b>30-day free trial</b>. You can access a full archive of past issues <a href='https://www.theverge.com/command-line-newsletter'><u>here</u></a>.",img:"https://cdn.vox-cdn.com/thumbor/pkRIUq-QSnIcB81fgakI_kYP2Ig=/512x512/cdn.vox-cdn.com/author_profile_images/196090/alex_heath_blurple_headshot_720.0.png"},l=[{id:85339,name:"Monthly",gaName:"monthly",description:"Get every issue of Command Line straight to your inbox. The first month is free."},{id:85341,name:"Annual",gaName:"annual",description:"Get a year of Command Line at a discounted rate. The first month is free."},{id:89107,name:"Corporate",gaName:"group",description:"Keep your team informed on the tech industry’s inside conversation."}],i={chorusGroup:"command-line-paywall",onObserverEvent:"command_line_paywall_view",onClickPlanEventConfig:{subscribeKey:"command_line_paywall_subscribe",planKey:"command_line_plan"},onClickLoginAuth:"command_line_paywall_sign_in",subscriptionIDs:l.map(function(e){return e.id}),subscriptionsConfig:l,paywallInfo:{headerTitle:"Start your Command Line free trial now to continue reading",headerBlurb:"This story is exclusively for subscribers of <em>Command Line</em>, our newsletter about the tech industry’s inside conversation. Subscribe to a plan below for full access.",faqPath:"/subscriptions/command-line#faq",signInCTA:"Already a Command Line subscriber?"}},o=[{header:"How do I manage my Command Line subscription?",content:"Head to <a href='https://subs.theverge.com/'>subs.theverge.com</a> and sign in using the email link to get started."},{header:"Not based in the US?",content:"That’s fine. Command Line lives on the internet, and we are able take payments from anywhere in the world."},{header:"Can I get a discount?",content:"Our monthly and annual plans include a 30-day free trial, during which you can cancel at any time without being billed. Our annual plan offers year-round access at a discounted rate, and discounted corporate subscriptions are available for groups of 10 or more."},{header:"Is there a free version of Command Line?",content:"A free edition of <em>Command Line</em> is published intermittently to share select scoops and key analysis. If you’re not ready to subscribe to <em>Command Line</em>, you can sign up for <a href='https://www.theverge.com/pages/newsletters'>our free edition</a> to get a taste."},{header:"How do I access old Command Line stories?",content:"Subscribers can access all of our stories at <a href='https://www.theverge.com/command-line-newsletter/'>theverge.com/command-line-newsletter</a>. You’ll have to log in the first time you visit. Click “sign in” at the bottom of the page, enter your email address, then click the login link that’s emailed to you. From there, you should be good to go. <br><br>(Please note that this login is separate from theverge.com accounts used for commenting; you’ll still need to sign in to your Command Line account even if you’re already logged into a Verge account.)"},{header:"I’m having trouble with my subscription.",content:"If your question isn’t answered here, please get in touch with our support team at <a href='mailto:newsletter-support@theverge.com'>newsletter-support@theverge.com</a>."}]},9658:function(e,n,a){a.d(n,{KU:function(){return t},T6:function(){return o},cK:function(){return r},to:function(){return l},vk:function(){return i}});var t={light:{headerColor:"bg-franklin",headerText:"text-black",headerGradient:"from-white/75 to-white bg-gradient-to-b",contentColor:"bg-franklin",contentText:"text-black",backgroundColor:"bg-white",backgroundText:"text-black",logoColor:"white",faqBackgroundColor:"bg-white",faqBorder:"border-t border-blurple",faqIconColor:"fill-black"},dark:{headerColor:"bg-blurple",headerText:"text-white",headerGradient:"from-gray-13 to-gray-13/75 bg-gradient-to-t",contentColor:"bg-franklin",contentText:"text-black",backgroundColor:"bg-gray-13",backgroundText:"text-white",logoColor:"blurpleBlack",faqBackgroundColor:"bg-blurple",faqBorder:"rounded",faqIconColor:"fill-franklin"}},r={title:"Hot Pod Insider",seoTitle:"Subscribe to Hot Pod",gaTitle:"hot_pod",oneLineDescription:"News and analysis on the biggest events in audio",description:"<em>Hot Pod Insider</em> is the podcast industry's go-to source for news, analysis, and interviews on the companies and people changing the audio world. Subscribers receive three newsletters each week, diving deep into the moment's most important subjects and stories. For a limited time, all new monthly and annual subscriptions come with a <b>30-day free trial</b>. To receive only Hot Pod’s free edition once a week, <a href='https://www.theverge.com/pages/newsletters'><u>subscribe here</u></a>.",img:"https://cdn.vox-cdn.com/uploads/chorus_asset/file/24610902/Hot_Pod_Icon_Blurple.png"},l=[{id:94741,name:"Monthly",gaName:"monthly",description:"Receive every issue of Hot Pod and Hot Pod Insider. The first month is free."},{id:94742,name:"Annual",gaName:"annual",description:"Receive every issue of Hot Pod and Hot Pod Insider. The first month is free."},{id:94744,name:"Corporate",gaName:"group",description:"Keep your entire team informed with full access to Hot Pod and Hot Pod Insider."}],i={chorusGroup:"hot-pod-paywall",onObserverEvent:"hot_pod_paywall_view",onClickPlanEventConfig:{subscribeKey:"hot_pod_paywall_subscribe",planKey:"hot_pod_plan"},onClickLoginAuth:"hot_pod_paywall_sign_in",subscriptionIDs:l.map(function(e){return e.id}),subscriptionsConfig:l,paywallInfo:{headerTitle:"Start your Hot Pod free trial now to continue reading",headerBlurb:"This story is exclusively for subscribers of <em>Hot Pod</em>. Subscribe to a plan below for full access.",faqPath:"/subscriptions/hot-pod#faq",signInCTA:"Already a Hot Pod subscriber?"}},o=[{header:"What's the difference between Hot Pod and Hot Pod Insider?",content:"<em>Hot Pod</em> publishes a free issue every Tuesday. Subscribers get two additional issues, called <em>Hot Pod Insider</em>, every Thursday and Friday. <em>Insider</em> editions offer more news and go deeper on the week’s biggest stories."},{header:"Is there a free version of Hot Pod?",content:"Yes! <em>Hot Pod</em> publishes one free issue each week on Tuesdays. If you’re not yet ready to subscribe to <em>Hot Pod Insider</em>, you can sign up for our free edition <a href='https://www.theverge.com/pages/newsletters'>here</a> to get a taste."},{header:"How do I manage my Hot Pod subscription?",content:"Head to <a href='https://subs.theverge.com/'>subs.theverge.com</a> and sign in using the email link to get started."},{header:"Not based in the US?",content:"That’s fine. <em>Hot Pod</em> lives on the internet, and we are able to take payments from anywhere in the world."},{header:"Can I get a discount?",content:"Our monthly and annual plans include a 30-day free trial, during which you can cancel at any time without being billed. Our annual plan offers year-round access at a discounted rate, and discounted corporate subscriptions are available for groups of 10 or more."},{header:"I’m having trouble with my subscription.",content:"If your question isn’t answered here, please get in touch with our support team at <a href='mailto:newsletter-support@theverge.com'>newsletter-support@theverge.com</a>."},{header:"How do I access old Hot Pod stories?",content:"Issues from the Tuesday edition are available online <a href='https://www.theverge.com/hot-pod-newsletter/'>here</a>. <em>Insider</em> editions are currently only available via email. We’re in the process of bringing those issues and the entire <em>Hot Pod</em> archive online. If you would like to request an older issue of <em>Hot Pod Insider</em>, please get in touch with us at <a href='mailto:newsletter-support@theverge.com'>newsletter-support@theverge.com</a>."}]}}]);