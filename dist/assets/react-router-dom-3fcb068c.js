import{r,a as T}from"./react-7109c0bd.js";import"./react-dom-7405ee47.js";import{R as p}from"./react-router-71b00e25.js";import{c as F}from"./@remix-run-214ff4e8.js";/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const U="6";try{window.__reactRouterVersion=U}catch{}const b="startTransition",l=T[b];function _(t){let{basename:f,children:h,future:n,window:R}=t,s=r.useRef();s.current==null&&(s.current=F({window:R,v5Compat:!0}));let e=s.current,[o,i]=r.useState({action:e.action,location:e.location}),{v7_startTransition:a}=n||{},c=r.useCallback(u=>{a&&l?l(()=>i(u)):i(u)},[i,a]);return r.useLayoutEffect(()=>e.listen(c),[e,c]),r.createElement(p,{basename:f,children:h,location:o.location,navigationType:o.action,navigator:e,future:n})}var m;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(m||(m={}));var S;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(S||(S={}));export{_ as B};
