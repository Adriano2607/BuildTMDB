import{u as n,r as s,a as p,j as r,L as u}from"./index-Cp7bM_Dh.js";import{L as m}from"./ListarLayout-CFHLNpKr.js";const l=()=>{const{category:e}=n(),[a,o]=s.useState(1);s.useEffect(()=>{sessionStorage.setItem("page",a)},[]);const{data:g,infoPage:i,loading:t}=p(e.replace(/-/g,"").trim().toLowerCase(),a);return t?r.jsx(u,{}):r.jsx(m,{arr:g,category:e,page:a,total_pages:i.total_pages,setPage:o,loading:t})};export{l as default};
