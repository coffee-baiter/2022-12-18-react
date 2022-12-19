"use strict";(self.webpackChunk_2022_12_18_react=self.webpackChunk_2022_12_18_react||[]).push([[2859],{3905:(M,t,e)=>{e.d(t,{Zo:()=>j,kt:()=>D});var s=e(7294);function L(M,t,e){return t in M?Object.defineProperty(M,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):M[t]=e,M}function u(M,t){var e=Object.keys(M);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(M);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(M,t).enumerable}))),e.push.apply(e,s)}return e}function n(M){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(Object(e),!0).forEach((function(t){L(M,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(t){Object.defineProperty(M,t,Object.getOwnPropertyDescriptor(e,t))}))}return M}function r(M,t){if(null==M)return{};var e,s,L=function(M,t){if(null==M)return{};var e,s,L={},u=Object.keys(M);for(s=0;s<u.length;s++)e=u[s],t.indexOf(e)>=0||(L[e]=M[e]);return L}(M,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(M);for(s=0;s<u.length;s++)e=u[s],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(M,e)&&(L[e]=M[e])}return L}var a=s.createContext({}),N=function(M){var t=s.useContext(a),e=t;return M&&(e="function"==typeof M?M(t):n(n({},t),M)),e},j=function(M){var t=N(M.components);return s.createElement(a.Provider,{value:t},M.children)},i="mdxType",o={inlineCode:"code",wrapper:function(M){var t=M.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(M,t){var e=M.components,L=M.mdxType,u=M.originalType,a=M.parentName,j=r(M,["components","mdxType","originalType","parentName"]),i=N(e),c=L,D=i["".concat(a,".").concat(c)]||i[c]||o[c]||u;return e?s.createElement(D,n(n({ref:t},j),{},{components:e})):s.createElement(D,n({ref:t},j))}));function D(M,t){var e=arguments,L=t&&t.mdxType;if("string"==typeof M||L){var u=e.length,n=new Array(u);n[0]=c;var r={};for(var a in t)hasOwnProperty.call(t,a)&&(r[a]=t[a]);r.originalType=M,r[i]="string"==typeof M?M:L,n[1]=r;for(var N=2;N<u;N++)n[N]=e[N];return s.createElement.apply(null,n)}return s.createElement.apply(null,e)}c.displayName="MDXCreateElement"},3494:(M,t,e)=>{e.r(t),e.d(t,{Highlight:()=>j,assets:()=>a,contentTitle:()=>n,default:()=>o,frontMatter:()=>u,metadata:()=>r,toc:()=>N});var s=e(7462),L=(e(7294),e(3905));const u={sidebar_position:4},n="Markdown Features",r={unversionedId:"tutorial-basics/markdown-features",id:"tutorial-basics/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/markdown-features",permalink:"/2022-12-18-react/docs/tutorial-basics/markdown-features",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Blog Post",permalink:"/2022-12-18-react/docs/tutorial-basics/create-a-blog-post"},next:{title:"Deploy your site",permalink:"/2022-12-18-react/docs/tutorial-basics/deploy-your-site"}},a={},N=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],j=M=>{let{children:t,color:e}=M;return(0,L.kt)("span",{style:{backgroundColor:e,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${e} with label ${t}`)}},t)},i={toc:N,Highlight:j};function o(M){let{components:t,...u}=M;return(0,L.kt)("wrapper",(0,s.Z)({},i,u,{components:t,mdxType:"MDXLayout"}),(0,L.kt)("h1",{id:"markdown-features"},"Markdown Features"),(0,L.kt)("p",null,"Docusaurus supports ",(0,L.kt)("strong",{parentName:"p"},(0,L.kt)("a",{parentName:"strong",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"))," and a few ",(0,L.kt)("strong",{parentName:"p"},"additional features"),"."),(0,L.kt)("h2",{id:"front-matter"},"Front Matter"),(0,L.kt)("p",null,"Markdown documents have metadata at the top called ",(0,L.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,L.kt)("pre",null,(0,L.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n")),(0,L.kt)("h2",{id:"links"},"Links"),(0,L.kt)("p",null,"Regular Markdown links are supported, using url paths or relative file paths."),(0,L.kt)("pre",null,(0,L.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](/create-a-page).\n")),(0,L.kt)("pre",null,(0,L.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](./create-a-page.md).\n")),(0,L.kt)("p",null,(0,L.kt)("strong",{parentName:"p"},"Result:")," Let's see how to ",(0,L.kt)("a",{parentName:"p",href:"/2022-12-18-react/docs/tutorial-basics/create-a-page"},"Create a page"),"."),(0,L.kt)("h2",{id:"images"},"Images"),(0,L.kt)("p",null,"Regular Markdown images are supported."),(0,L.kt)("p",null,"You can use absolute paths to reference images in the static directory (",(0,L.kt)("inlineCode",{parentName:"p"},"static/img/logo.svg"),"):"),(0,L.kt)("pre",null,(0,L.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](/img/logo.svg)\n")),(0,L.kt)("p",null,(0,L.kt)("img",{alt:"Docusaurus logo",src:e(764).Z,width:"512",height:"512"})),(0,L.kt)("p",null,"You can reference images relative to the current file as well, as shown in ",(0,L.kt)("a",{parentName:"p",href:"/2022-12-18-react/docs/tutorial-extras/manage-docs-versions"},"the extra guides"),"."),(0,L.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,L.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,L.kt)("pre",null,(0,L.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,L.kt)("pre",null,(0,L.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,L.kt)("h2",{id:"admonitions"},"Admonitions"),(0,L.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,L.kt)("pre",null,(0,L.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,L.kt)("admonition",{title:"My tip",type:"tip"},(0,L.kt)("p",{parentName:"admonition"},"Use this awesome feature option")),(0,L.kt)("admonition",{title:"Take care",type:"danger"},(0,L.kt)("p",{parentName:"admonition"},"This action is dangerous")),(0,L.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,L.kt)("p",null,(0,L.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,L.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,L.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,L.kt)("pre",null,(0,L.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,L.kt)("p",null,"This is ",(0,L.kt)(j,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,L.kt)("p",null,"This is ",(0,L.kt)(j,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"))}o.isMDXComponent=!0},764:(M,t,e)=>{e.d(t,{Z:()=>s});const s="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiID8+CjxzdmcKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgdmlld0JveD0iMCAwIDUxMiA1MTIiCiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKPgogIDxwYXRoCiAgICBkPSJNNTA3LjA0MiwxMjIuNTk4Yy0yLjA1Ny0wLjk0Ny0zMC4wMzctMTMuNDc0LTc3LjAwNS0xNy4zODJDMzg2LjE2Nyw1NC42MDUsMzIyLjk3OCwyNS42LDI1NS45NTcsMjUuNiBzLTEzMC4yMSwyOS4wMTMtMTc0LjA4LDc5LjYyNWMtNDYuOTE2LDMuOTE3LTc0Ljg3MSwxNi40MjctNzYuOTI4LDE3LjM3NEMxLjkyOSwxMjMuOTk4LDAsMTI3LjAyNywwLDEzMC4zNDd2MjguNjk4IGMwLDQuNjM0LDMuNjg2LDguNDE0LDguMzIsOC41MzNjMTAuNjA3LDAuMjY1LDEzLjIyNywxMy44ODQsMTMuMjk1LDE0LjI2OGMxLjgzNSwxMi4wNzUsNC4yODQsMjMuMTc3LDcuNjU0LDMzLjMzMSBjLTIuNDQxLDEzLjU4NS0zLjcxMiwyNy4zMDctMy43MTIsNDAuODIzYzAsMTI3LjA0NCwxMDMuMzU2LDIzMC40LDIzMC40LDIzMC40czIzMC40LTEwMy4zNTYsMjMwLjQtMjMwLjQgYzAtMTMuNDY2LTEuMjYzLTI3LjExOS0zLjY3OC00MC42MzZjMy4zODgtMTAuMTcyLDUuODM3LTIxLjI4Miw3LjY4LTMzLjM3NGMwLjAyNi0wLjEzNywyLjUzNC0xNC4xNDgsMTMuMzItMTQuNDEzIGM0LjYyNS0wLjExOSw4LjMyLTMuOSw4LjMyLTguNTMzdi0yOC42OThDNTEyLDEyNy4wMjcsNTEwLjA2MywxMjMuOTk4LDUwNy4wNDIsMTIyLjU5OHogTTI1NS45NTcsNDIuNjY3IGM1Ni40MzEsMCwxMDkuOTYxLDIyLjE3LDE0OS43NTEsNjEuNDMxYy0yNi41OS0wLjI5LTU3LjY2OCwyLjQ0OS05Mi40MDcsMTAuNzM1Yy0xLjA2NywwLjI1Ni0yLjEzMywwLjUyMS0zLjIsMC43ODUgYy0zLjc2MywwLjkzLTcuNTY5LDEuOTI5LTExLjQyNiwyLjk4N2MtMS4yOCwwLjM1OC0yLjU2LDAuNy0zLjg0OSwxLjA2N2MtNC43OTYsMS4zNzQtOS42MzQsMi44MTYtMTQuNTQ5LDQuNDEyIGMtNy44ODUsMi41NTEtMTYuMDg1LDMuODIzLTI0LjI3NywzLjgyM2MtNi4wMDcsMC0xMS45NzItMC45MjItMTcuODY5LTIuMjk1Yy0yLjEzMy0wLjQ5NS00LjMwOS0wLjg0NS02LjQwOS0xLjUyNyBjLTQuOTMyLTEuNTk2LTkuNzg4LTMuMDQ2LTE0LjYwMS00LjQyOWMtMS4yNDYtMC4zNS0yLjQ4My0wLjY4My0zLjcyMS0xLjAyNGMtMy45MzQtMS4wODQtNy44MjUtMi4xMDgtMTEuNjc0LTMuMDU1IGMtMC45OS0wLjI0Ny0xLjk4OC0wLjQ5NS0yLjk3OC0wLjcyNWMtMzQuNzk5LTguMzAzLTY1LjkyLTExLjA0Mi05Mi41MzUtMTAuNzUyQzE0NS45OTcsNjQuODM2LDE5OS41MzUsNDIuNjY3LDI1NS45NTcsNDIuNjY3eiAgTTcwLjc2NywxNzMuMTY3bDI1LjYtMjUuNmMzLjMyOC0zLjMzNyw4LjczLTMuMzM3LDEyLjA2NiwwYzMuMzM3LDMuMzM2LDMuMzM3LDguNzMsMCwxMi4wNjZsLTI1LjYsMjUuNiBjLTEuNjY0LDEuNjY0LTMuODQ5LDIuNS02LjAzMywyLjVjLTIuMTg1LDAtNC4zNjktMC44MzYtNi4wMzMtMi41QzY3LjQzLDE4MS44OTcsNjcuNDMsMTc2LjUwMyw3MC43NjcsMTczLjE2N3ogIE0yNTUuOTU3LDQ2OS4zMzNjLTExNy42MzIsMC0yMTMuMzMzLTk1LjcwMS0yMTMuMzMzLTIxMy4zMzNjMC00LjI3NSwwLjEzNy04LjU5MywwLjQwMS0xMi45MDIgYzMuODIzLDUuMjgyLDguMzExLDEwLjA1MiwxMy40ODMsMTQuMzdjMC44NDUsMC43MDgsMS43NDEsMS4zNjUsMi42MTEsMi4wMzljMS41ODcsMS4yMiwzLjIxNywyLjQwNiw0LjkzMiwzLjUzMyBjMS4zNzQsMC45MTMsMi43OTksMS43OTIsNC4yNSwyLjYzN2MxLjMxNCwwLjc2OCwyLjY4LDEuNTAyLDQuMDc5LDIuMjE5YzEuODI2LDAuOTQ3LDMuNjg2LDEuODY5LDUuNjIzLDIuNzMxIGMxLjE2MSwwLjUxMiwyLjM4OSwwLjk4MSwzLjU5MywxLjQ1OWMyLjIzNiwwLjg5Niw0LjQ4LDEuNzgzLDYuODYxLDIuNTY5YzEuMTUyLDAuMzc1LDIuMzk4LDAuNywzLjU4NCwxLjA1OCBjMi41MzQsMC43Niw1LjA2OSwxLjUyOCw3Ljc2NSwyLjE3NmMxLjU2MiwwLjM3NSwzLjI2OCwwLjY3NCw0Ljg5LDEuMDE1YzIuNDkyLDAuNTIxLDQuOTE1LDEuMDg0LDcuNTI2LDEuNTE5IGM0LjM3OCwwLjczNCw4Ljk2LDEuMzY1LDEzLjc3MywxLjg2OWM3Mi41MzMsNy42OTcsMTA4LjAyMy00Ni4wMjksMTEzLjM0LTgxLjY1NWMzLjE0LTIxLjA2LDE0Ljg5OS0yMS4yNDgsMTYuMTAyLTIxLjQzNiBjMC4zNzUsMC4wMTcsMC43NDIsMC4wMTcsMS4xMTgsMGMwLjA2LDAuMDI2LDEyLjgwOS0wLjYzMSwxNi4xMTEsMjEuNDM2YzAuMzE2LDIuMTUsMC43NTksNC4zNzgsMS4zMDYsNi42NTYgYzAuMTc5LDAuNzI1LDAuNDI3LDEuNDg1LDAuNjIzLDIuMjI3YzAuNDE4LDEuNTYyLDAuODM2LDMuMTIzLDEuMzU3LDQuNzFjMC4yOTksMC45MTMsMC42NzQsMS44MzUsMS4wMDcsMi43NDggYzAuNTIxLDEuNDU5LDEuMDQxLDIuOTEsMS42NTUsNC4zNzhjMC40MTgsMS4wMDcsMC45MDUsMi4wMDUsMS4zNjUsMy4wMjFjMC42NCwxLjM5MSwxLjI3MSwyLjc4MiwxLjk4LDQuMTczIGMwLjU0NiwxLjA1LDEuMTQzLDIuMDk5LDEuNzI0LDMuMTQ5YzAuNzUxLDEuMzQsMS41MDIsMi42NzksMi4zMjEsNC4wMTFjMC42NjYsMS4wODQsMS4zODIsMi4xNSwyLjA5OSwzLjIxNyBjMC44NTMsMS4yOCwxLjcyNCwyLjU1MSwyLjY0NSwzLjgwNmMwLjc5NCwxLjA4NCwxLjYzLDIuMTUsMi40ODMsMy4yMTdjMC45NTYsMS4xOTUsMS45MzcsMi4zODEsMi45NjEsMy41NTggYzAuOTM5LDEuMDY3LDEuOTAzLDIuMTE2LDIuODkzLDMuMTY2YzEuMDU4LDEuMTA5LDIuMTQyLDIuMTg1LDMuMjYsMy4yNmMxLjA4NCwxLjAzMywyLjE4NSwyLjA0OCwzLjMyOCwzLjA0NiBjMS4xNTIsMS4wMDcsMi4zMzgsMS45NzEsMy41NSwyLjkyN2MxLjIzNywwLjk4MSwyLjQ3NSwxLjk0NiwzLjc4LDIuODc2YzEuMjI5LDAuODg3LDIuNTE3LDEuNzE1LDMuODE0LDIuNTUxIGMxLjM5MSwwLjg5NiwyLjc4MiwxLjc5Miw0LjI1LDIuNjI4YzEuMzIzLDAuNzYsMi43MTQsMS40NTEsNC4wODcsMi4xNWMxLjU1MywwLjc5NCwzLjA5OCwxLjU5Niw0LjcxOSwyLjMxMyBjMS40MDgsMC42MjMsMi45MDEsMS4xNTIsNC4zNjEsMS43MTVjMS43MTUsMC42NTcsMy40MTMsMS4zNDgsNS4yMTQsMS45MjljMS41MDIsMC40NzgsMy4wOTgsMC44NDUsNC42NTksMS4yNjMgYzEuODY5LDAuNDk1LDMuNzAzLDEuMDUsNS42NTgsMS40NTFjMS42ODEsMC4zNDEsMy40NzMsMC41MzgsNS4yMTQsMC44MTFjMi43MDUsMC40MTgsNS40NTMsMC43NzYsOC4yOTQsMC45OTggYzIuOTYxLDAuMjIyLDUuOTMxLDAuNDM1LDkuMDQ1LDAuNDM1YzAuMDQzLDAsMC4wODUtMC4wMDksMC4xMjgtMC4wMDljNC4zNjktMC4wMDksOC44ODMtMC4yMywxMy41Ni0wLjcyNSBjNC44MDQtMC41MDMsOS4zNy0xLjEzNSwxMy43NDctMS44NjljMi43MzEtMC40NTIsNS4yNzQtMS4wMzMsNy44NjgtMS41NzljMS40OTMtMC4zMjQsMy4wODEtMC41OTcsNC41MzEtMC45NDcgYzIuNzczLTAuNjY2LDUuMzc2LTEuNDUxLDcuOTc5LTIuMjI3YzEuMTA5LTAuMzQxLDIuMjc4LTAuNjQsMy4zNTQtMC45OThjMi40MjMtMC44MDIsNC43MTktMS42OTgsNi45ODktMi42MTEgYzEuMTYtMC40NjEsMi4zNDctMC45MTMsMy40NjQtMS40MDhjMS45NjMtMC44NjIsMy44NC0xLjgwMSw1LjY5Mi0yLjc1NmMxLjM3NC0wLjcwOCwyLjcyMi0xLjQzNCw0LjAxOS0yLjE4NSBjMS40NTEtMC44NDUsMi44NzYtMS43MjQsNC4yNS0yLjYyOGMxLjczMi0xLjEzNSwzLjM3MS0yLjMzLDQuOTY2LTMuNTVjMC44NTMtMC42NjYsMS43MzItMS4zMDYsMi41NTItMS45OTcgYzUuMTYzLTQuMzAxLDkuNjYtOS4wNDUsMTMuNDgzLTE0LjMwMmMwLjI1Niw0LjI2NywwLjM5Myw4LjUyNSwwLjM5MywxMi43NjZDNDY5LjI5MSwzNzMuNjMyLDM3My41ODksNDY5LjMzMywyNTUuOTU3LDQ2OS4zMzN6IE0zNTIuNTc5LDMzNS4wNWMtMTguMjcsMTQuMDQ2LTY5Ljk5OSwyMy4zNDctOTYuNjIzLDIzLjM0N2MtMjYuODI5LDAtNzkuMjA2LTkuNDYzLTk3LjAyNC0yMy43MjMgYy0zLjg5MS0zLjEzMi0xMC4yODMtMS45MzctMTIuNzY2LDIuMzk4Yy0xLjUyNywyLjY0NS0xLjUxOSw1LjkwNSwwLjAwOSw4LjUzM2MyMy4yMTEsNDAuMDczLDY0LjI0Nyw2My45OTEsMTA5Ljc4MSw2My45OTEgYzQ1LjI4NiwwLDg2LjEyNy0yMy42NTQsMTA5LjM5Ny02My4zMjZjMS41Ny0yLjIxLDIuMDA1LTUuMTAzLDEuMDc1LTcuNzY1QzM2NC41MDgsMzMzLjA1MywzNTYuNzI2LDMzMS4yNDQsMzUyLjU3OSwzMzUuMDV6IgogIC8+Cjwvc3ZnPgo="}}]);