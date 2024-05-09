/*!
 * MIT License
 *
 * Copyright (c) 2023 SiYuan 思源笔记
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */(()=>{"use strict";var M={};M.d=(e,t)=>{for(var n in t)M.o(t,n)&&!M.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},M.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),M.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var K={};M.r(K),M.d(K,{NiopTable:()=>U,ReFreshTable:()=>H,default:()=>f});const A=require("siyuan");var P=(e,t,n)=>new Promise((s,o)=>{var l=a=>{try{r(n.next(a))}catch(u){o(u)}},i=a=>{try{r(n.throw(a))}catch(u){o(u)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,i);r((n=n.apply(e,t)).next())});class ge{constructor(){this.creatCommands=t=>{t.protyleSlash.push({filter:[],html:'<div class="b3-list-item__first"><svg class="b3-menu__icon " style=""><use xlink:href="#iconTable"></use></svg><span class="b3-list-item__text">'+t.i18n.niopimportTool+'</span><span class="b3-list-item__meta">TABLE</span></div>',id:"niop-getCommand-AVdebugDialog",callback:n=>P(this,null,function*(){console.log(`${t.i18n.DataBaseImportToolDes}`+n.protyle.notebookId);const s=n.protyle.breadcrumb.id;n.insert("<span></span>");const o=new A.Dialog({title:`${t.i18n.DataBaseImportToolDes}`,content:`
                        <div class="b3-dialog__content">
                        <div class="fn__hr"></div>
                        <div>DataBae ID:</div>
                        <div class="fn__hr"></div>
                        <input type="text" id = "niopIDBox1">
                        <div class="fn__hr"></div>
                        <div>Table ID:</div>
                        <div class="fn__hr"></div>
                        <input type="text" id = "niopIDBox2">
                        <div class="fn__hr"></div>
                        <div style="display:none">RenderMethod:</div>
                        <div class="fn__hr"></div>
                        <div class="renderMethod">
                          <button class="niopRenderSelect" id = "niopButton5" style="display: inline-block;"></button>
                        </div>
                        <div class="fn__hr"></div>
                        <div class="fn__hr"></div>
                        <div style="display:none">json:</div>
                        <div id = "jsonstring" style="display:none"></div>
                        </div>        
                    `,width:"360px",height:"440px",destroyCallback:()=>{t.saveData("niopTID_AVID",l.value),t.saveData("niopTID_TableID",i.value)}}),l=o.element.querySelector("#niopIDBox1"),i=o.element.querySelector("#niopIDBox2"),r=o.element.querySelector("#niopButton5");r.textContent=t.i18n.import,t.loadData("niopTID_AVID").then(a=>{l.value=a}),t.loadData("niopTID_TableID").then(a=>{i.value=a}),r.addEventListener("click",()=>{Ie(l.value,i.value,n,t)})})})}}}function be(e,t=null){(0,A.fetchPost)("/api/block/getBlockKramdown",{id:e},n=>{t&&t(n)})}function Qe(e,t=null){fetchPost("/api/block/getBlockDOM",{id:e},n=>{t&&t(n)})}function ne(e,t,n=null){(0,A.fetchPost)("/api/av/renderAttributeView",{id:e,pageSize:t},s=>{n&&n(s)})}const ve=(e,t=null)=>{(0,A.fetchPost)("/api/block/getBlockKramdown",{id:e},n=>{const s=n.data.kramdown,o=/data-av-id="([^"]+)"/,l=s.match(o);if(!l){console.log("No av-id"),t&&t({result:!1,value:""});return}t&&t({result:!0,value:l[1]})})};function z(){return globalThis.Lute.NewNodeID()}const et=(e,t,n=null)=>{const s=e.id,o=[z()];let l="";e.view.rows.length>0&&(l=e.view.rows[e.view.rows.length-1].id);const i=[{action:"insertAttrViewBlock",avID:s,previousID:l,srcIDs:o,isDetached:!0}];console.log(`ac:${s} \u65B0id:${o} \u524D\u4E00\u7EA7id${l}  do:`),t.protyle.getInstance().transaction(i,[{action:"removeAttrViewBlock",srcIDs:o,avID:s}]),n&&n(1)},tt=(e,t)=>{const s=e.protyle.contentElement.querySelector(".protyle-title.protyle-wysiwyg--attr").getAttribute("data-node-id"),o=e.protyle.notebookId;fetchPost("/api/filetree/getHPathByID",{id:s},l=>{const i=l.data+"/\u65B0\u5EFA\u6587\u68631";fetchPost("/api/filetree/createDocWithMd",{notebook:o,path:i,markdown:"tttt"},r=>{const a=e.protyle;setTimeout(()=>{a.getInstance().transaction([{action:"insertAttrViewBlock",avID:t.id,previousID:t.view.rows[t.view.rows.length-1].id,srcIDs:[r.data],isDetached:!1}],[{action:"removeAttrViewBlock",srcIDs:[r.data],avID:t.id}])},500)})})},ye=(e,t,n,s,o,l=null)=>{let i=null;o.checkerResult.result&&(i=o.checkerResult.value,(0,A.fetchPost)("/api/av/setAttributeViewBlockAttr",{avID:e,keyID:t,rowID:n,cellID:s,value:i},r=>{l&&l(r)}))},se=(e,t,n,s,o,l=null)=>{(0,A.fetchPost)("/api/av/setAttributeViewBlockAttr",{avID:e,keyID:t,rowID:n,cellID:s,value:o},i=>{l&&l(i)})};function we(e,t){const n=/\[([^\]]*)\]\((.+?)\.([a-zA-Z0-9]{1,5})\)/,s=[];let o=0,l;for(;(l=n.exec(e))!=null;){o+=1;let i=l[1];i||(i="");const r=l[2],a=`.${l[3]}`,u=e[l.index-1]==="!",c={content:r+a,type:u?"image":"file",name:i};e=e.replace(u?"!"+l[0]:l[0],""),s.push(c)}return o===0?{result:!1}:{result:!0,value:{[t]:s}}}const Ie=(e,t,n,s)=>P(void 0,null,function*(){ve(e,o=>{o.result&&ne(o.value,2e4,l=>{be(t,i=>P(void 0,null,function*(){if(s.OnImportData){s.OnImportData=!1;return}try{if(i.code=="0"){let r=!1;const a=b=>P(void 0,null,function*(){r||(r=!0,(0,A.fetchPost)("/api/notification/pushMsg",{msg:b,data:30}),yield new Promise(y=>setTimeout(y,300)),r=!1)});s.OnImportData=!0;const u=new Ce(i.data.kramdown);let c=new oe(l.data.view);if(c.duplicatesRow){(0,A.fetchPost)("/api/notification/pushErrMsg",{msg:"database have duplicates name",data:1e3});return}const d=[],p=[],g=[],h=[],m=l.data.view.rows.length;if(u.cells[0].forEach((b,y)=>{c.columnIndexMap[b.content]!=null&&b.content!=""&&y!=0&&d.push({col:y,name:b.content})}),d.length===0)return;for(let b=1;b<u.cells.length;b++){const y={name:u.cells[b][0].content,row:b};if(y.name=="")continue;const C=c.getCellData(y.name);g.push(y),C.result||p.push(y)}const w=!1;let I=!0,v=0;const $=n.protyle.contentElement.querySelector(".protyle-title.protyle-wysiwyg--attr").getAttribute("data-node-id"),T=n.protyle.notebookId,S=l.data,D=[],N=[];if(p.length>0&&w){v=p.length;let b=0;console.log("creat new note "+p.length);const y=new Date,C=`import${y.getFullYear()}_${y.getMonth()}_${y.getDay()}_${y.getHours()}_${y.getMinutes()}`;for((0,A.fetchPost)("/api/filetree/getHPathByID",{id:$},R=>P(void 0,null,function*(){(0,A.fetchPost)("/api/filetree/createDocWithMd",{notebook:T,path:R.data+"/"+C,markdown:`import at ${y.getDate()}`},E=>P(void 0,null,function*(){for(const F of p){b++;const Ze=R.data+"/"+C+"/"+F.name;for(console.log("creat new note "+F.name),(0,A.fetchPost)("/api/filetree/createDocWithMd",{notebook:T,path:Ze,markdown:""},te=>{D.push(te.data),v--,b--});b>0;)yield new Promise(te=>setTimeout(te,10))}}))}));v>0;)yield new Promise(R=>setTimeout(R,200)),a("wait for creat note "+v);a("note creat over "+p.length)}else if(p.length>0)for(const b of p){const y=z();D.push(y),N.push(b.name)}if(yield new Promise(b=>setTimeout(b,250)),D.length>0){D.reverse(),N.reverse();const b=n.protyle,y=S.view.rows.length>0?S.view.rows[S.view.rows.length-1].id:"";b.getInstance().transaction([{action:"insertAttrViewBlock",avID:S.id,previousID:y,srcIDs:D,isDetached:!w}],[{action:"removeAttrViewBlock",srcIDs:D,avID:S.id}]),yield new Promise(E=>setTimeout(E,1500)),I=!0;let C;const R=l.data.view.rowCount+D.length;for(;I;)yield new Promise(E=>setTimeout(E,1200)),ne(o.value,R,E=>{I&&E.data.view.rowCount==R&&(C=E,I=!1)}),a("wait for av reload");yield new Promise(E=>setTimeout(E,200)),console.log(C),l=C}c=new oe(l.data.view),w||(c.setEmptyBlockCell(D,N),p.forEach(b=>{const y=c.getCellData(b.name,c.keyColumnName,b.name);y.columnName=b.name,y.keyName=b.name,y.reX=b.row,h.push(y)})),v=d.length*g.length;for(const b of d)for(const y of g){const C=c.getCellData(y.name,b.name,u.cells[y.row][b.col].content);C.result&&(C.reX=y.row,C.reY=b.col,C.content=u.cells[y.row][b.col].content,h.push(C))}yield new Promise(b=>setTimeout(b,200)),v=0;let _=0;for(let b=0;b<h.length;b++){v++,a("UPDATE "+b+" / "+h.length);const y=h[b];for(y.checkerResult.result?(ye(o.value,y.value.keyID,y.rowsID,y.value.id,y,()=>{v--}),_++):v--;v>5;)yield new Promise(C=>setTimeout(C,5))}s.OnImportData=!1,(0,A.fetchPost)("/api/notification/pushMsg",{msg:"Import Over with"+_+" data",data:1e3})}}catch{s.OnImportData=!1}}))})})});class oe{constructor(t){this.duplicatesRow=!1,this.lateKeyName="",this.laterowIndex=0,this.data=t,this.preprocessData()}preprocessData(){const t=this.data.columns.find(n=>n.type==="block");this.keyColumnIndex=this.data.columns.indexOf(t),this.keyColumnName=t.name,this.columnIndexMap={},this.rowValueChecker={},this.data.columns.forEach((n,s)=>{this.columnIndexMap[n.name]=s,this.rowValueChecker[s]=De(n)}),this.rowIndexMap={},this.emptyRowIndexMap={},this.data.rows.forEach((n,s)=>{const o=n.cells[this.keyColumnIndex].value.block.content;o&&o!=""?(this.rowIndexMap[o]&&(console.log("block name duplicate "+o),this.duplicatesRow=!0),this.rowIndexMap[o]=s):this.emptyRowIndexMap[n.id]=s})}getCellData(t,n="",s=""){if(t!=this.lateKeyName){if(this.laterowIndex=this.rowIndexMap[t],this.laterowIndex===void 0)return{result:!1,debug:"have no main key"};this.lateKeyName=t}if(n=="")return{result:!0};const o=this.columnIndexMap[n];if(o===void 0)return{result:!1,debug:"have no attr"};const l=this.data.rows[this.laterowIndex],i=l.cells[o],r=this.rowValueChecker[o],a=r(s,i.value,i.valueType);return{result:!0,value:i.value,checkerResult:a,column:this.data.columns[o],rowsID:l.id,keyName:t,columnName:n}}setEmptyBlockCell(t,n){for(let s=0;s<t.length;s++){const o=t[s],l=n[s],i=this.emptyRowIndexMap[o];i>=0?(this.rowIndexMap[l]=i,delete this.emptyRowIndexMap[o]):(console.error(`error with wrong index ${o} ${l} ${s}`),this.error())}}}const De=e=>{const t={};let n=W;switch(e.type){case"text":return J;case"date":return Se;case"number":return Ae;case"relation":return W;case"rollup":return W;case"select":if(!e.options)return(s,o,l)=>({result:!1,faliResult:e.name+" No Any Options"});return e.options.forEach(s=>{t[s.name]=s}),n=(s,o,l)=>{const i=t[s];let r=!1,a="",u="";if(!i)return a="input isnot in select options",{result:r,faliResult:a};const c=o.mSelect;if(c&&s==c[0].content)return a="the same as input",{result:r,faliResult:a};const d={mSelect:[{content:i.name,color:i.color}]};return u=`[${s}] -> [${c}]`,r=!0,{result:r,value:d,successLog:u}},n;break;case"block":return ke;case"mSelect":if(!e.options)return(s,o,l)=>({result:!1,faliResult:e.name+" No Any Options"});return e.options.forEach(s=>{t[s.name]=s}),n=(s,o,l)=>{let i=!1,r="",a="",u="",c="";const d=[];let p=s.split(",");p||(p=[s]);const g=o.mSelect;for(let m=0;m<p.length;m++){const w=p[m],I=t[w];if(!I){u+=w+",";continue}let v=!1;if(g){for(let k=0;k<g.length;k++)if(g[k].content==w){v=!0;break}}if(v){c+=w+",";continue}d.push({content:I.name,color:I.color})}if(d.length<1)return r=`unKnow option:(${u}) duplicate option:(${c})`,{result:i,faliResult:r};let h;return g?h={mSelect:[...o.mSelect,...d]}:h={mSelect:d},a=`[${s}] -> [${g}]`,i=!0,{result:i,value:h,successLog:a}},n;break;case"url":return J;case"email":return J;case"phone":return J;case"mAsset":return Te;case"checkbox":return Ee;default:return W}},ke=(e,t,n)=>{const s=t.block.content;let o=!1,l="",i="";if(e==s)return l=`the same as input (${s})`,{result:o,faliResult:l};const r={block:{content:e}};return i=`[${e}] -> [${s}]`,o=!0,{result:o,value:r,successLog:i}},J=(e,t,n)=>{const s=t[n].content;let o=!1,l="",i="";if(e==s)return l=`the same as input (${s})`,{result:o,faliResult:l};const r={[n]:{content:e}};return i=`[${e}] -> [${s}]`,o=!0,{result:o,value:r,successLog:i}},Ae=(e,t,n)=>{const s=t.number.content;let o=!1,l="",i="";if(e!="0"&&parseFloat(e)==s)return l=`the same as input (${s})`,{result:o,faliResult:l};const r={number:{content:parseFloat(e),IsNotEmpty:e!==""}};return i=`[${e}] -> [${s}]`,o=!0,{result:o,value:r,successLog:i}},Se=(e,t,n)=>{const s=t.date,o={content:0,isNotEmpty:!1,content2:0,isNotEmpty2:!1,isNotTime:!1};o.hasEndDate=s.hasEndDate,o.isNotTime=s.isNotTime;let l=!1,i="",r="",a=0;const u=e.split(",");if(u.length>=1){const d=u[0].trim(),p=le(d);p!==0&&(o.content=p,o.isNotEmpty=!0),s.content===o.content&&a++}if(u.length>=2){const d=u[1].trim(),p=le(d);p!==0&&(o.content2=p,o.isNotEmpty2=!0,o.hasEndDate=!0),s.content2===o.content2&&a++}if(a==2)return i=`the same as input (${s})`,{result:l,faliResult:i};const c={date:o};return r=`[${e}] -> [${s}]`,l=!0,{result:l,value:c,successLog:r}};function le(e){const t=Date.parse(e);return isNaN(t)?0:t+new Date().getTimezoneOffset()*60*1e3}const Ee=(e,t,n)=>{const s=t.checkbox.checked;let o=!1,l="",i="";if(e==="")return l=`input is empety (${e})`,{result:o,faliResult:l};const r=e.includes("true");if(r===s)return l=`the same as input (${s})`,{result:o,faliResult:l};const a={checkbox:{checked:r}};return i=`[${e}] -> [${s}]`,o=!0,{result:o,value:a,successLog:i}},W=(e,t,n)=>({result:!1,faliResult:`Unkonw type [${n}] value [${e}]`}),Te=(e,t,n)=>{const s=we(e,n);let o=!1,l="",i="";if(!s.result)return l=`input isnot asset (${e})`,{result:o,faliResult:l};const r=s.value[n];let a=[],u=[];if(t.mAsset){if(a=r.filter(c=>!t.mAsset.some(p=>p.content===c.content)),a.length===0)return l=`${e} -> already in database `,{result:o,faliResult:l};i+=`asset ${a.length} ${a.map(c=>c.content).join(" ")} -> ${t.mAsset?t.mAsset.length:"none"}`,t.mAsset&&t.mAsset.length>0&&(a=[...t.mAsset,...a]),s.value=a}return u=s.value,o=!0,{result:o,value:u,successLog:i}};class Ce{constructor(t){this.cells=[],this.end="",this.duplicatesRow=!1,this.keyWorlds={},this.kmdCellRegex=/{:\s*(.+?)\s*}/,this.kmdCell=n=>{const s=n.match(this.kmdCellRegex);return s?{content:n.replace(s[0],"")}:{content:n}},this.parseTable(t)}parseTable(t){const n=t.split(`
`);this.end=n[n.length-1],n.slice(0,-1).map(o=>o.split(new RegExp("(?<!\\\\)\\|")).map(l=>l.replace(/\\\|/g,"|"))).forEach((o,l)=>{this.cells[l]=[],o.forEach((i,r)=>{this.cells[l][r]=this.kmdCell(i)}),this.cells[l]=this.cells[l].slice(1,-1),this.cells[l][0].content=this.sanitizeFileName(this.cells[l][0].content),this.keyWorlds[this.cells[l][0].content]?(this.keyWorlds[this.cells[l][0].content]+=1,this.duplicatesRow=!0):this.keyWorlds[this.cells[l][0].content]=1}),this.cells=this.cells.slice(0,1).concat(this.cells.slice(2))}sanitizeFileName(t){const n=/[\/\\\?%\*:|"<>]/g;return t.replace(n,"").replace(/<br\/>/g,"")}}function nt(e,t,n=null){fetchPost("/api/notification/pushMsg",{msg:e,data:t},s=>{n&&n(s)})}function st(e,t,n=null){fetchPost("/api/notification/pushErrMsg",{msg:e,data:t},s=>{n&&n(s)})}const $e=e=>{const t=e.getAttribute("niopInput");let n,s,o;switch(t){case"text":return O(t,e);case"date":return null;case"number":return xe(t,e);case"relation":return null;case"rollup":return null;case"select":return Ve(t,e);case"block":return O(t,e);case"mSelect":return null;case"url":return O(t,e);case"email":return O(t,e);case"phone":return O(t,e);case"mAsset":return null;case"checkbox":return Ne(t,e);default:return O(t,e)}},O=(e,t)=>{const n=q(t.innerText);return{[e]:{content:n}}},xe=(e,t)=>{const n=parseFloat(q(t.innerText));return n.toString()!=t.innerText&&(t.innerText=n.toString()),{[e]:{content:n}}},Ne=(e,t)=>({checkbox:{checked:t.checked}}),Ve=(e,t)=>{const n=t;return{mSelect:[{content:n.value,color:n.getAttribute("color")}]}},q=e=>e.replace(/\n/g,"<br>"),G=(e,t)=>{const n=$e(t);n!=null?se(e.resourceAVID,t.getAttribute("keyID"),t.getAttribute("rowID"),t.getAttribute("cellID"),n):console.log(`error with ${t.getAttribute("niotInput")}`),_e(e,t)},_e=(e,t)=>{let n=t;for(let s=0;s<3&&(n=n.parentElement,!!n);s++)if(n.tagName==="TD"){n.hasAttribute("reload")&&H(e,!0,!0,!0,400);break}};let x=null;const Re=(e,t)=>{Me();const n=t.target,s=n.getAttribute("niopInput");if(s!==null){t.preventDefault(),t.stopPropagation(),x={element:n,text:n.innerText,change:!1};const o=l=>{(x.change||n===x.element&&n.innerText!=x.text&&s!="mAsset")&&G(e,x.element),n.removeEventListener("blur",o),x=null};n.addEventListener("blur",o),x.blur=o}},Me=()=>{x!=null&&(x.blur(),x=null)},Be=(e,t)=>{const n=t.composedPath&&t.composedPath();for(let s=0;s<n.length&&s<=2;s++)if(n[s].hasAttribute&&n[s].getAttribute("niopInput")=="mAsset"){if(t.preventDefault(),n[s]instanceof HTMLElement){const o=n[s],l=t.clipboardData?t.clipboardData.getData("text"):"";if(l&&l!=""){const i=Oe(l);let r="";const a=[];i.forEach(c=>{r+=c.content,a.push({type:c.isImage?"image":"file",content:c.link,name:""})}),o.innerHTML=r;const u={mAsset:a};se(e.resourceAVID,o.getAttribute("keyID"),o.getAttribute("rowID"),o.getAttribute("cellID"),u,()=>{})}}break}},Pe=(e,t)=>{const n=t.target;if(n.getAttribute("niopInput")!==null){G(e,n);return}};function Oe(e){const t=/\[([^\]]*)\]\(([^)]+)\)/g,n=[];let s;for(;(s=t.exec(e))!==null;){const o=s[0],l=s[1],i=s[2],r=e[s.index-1]==="!",a=r?`<img src="${i}" alt="${l}">`:`<a href="${i}">${l}</a>`;e=e.replace(r?"!"+o:o,a),n.push({text:l,link:i,content:a,isImage:r})}return n}class Le{constructor(){this.avTarget={},this.liveNiopTable={},this.liveNiopTableElement={},this.livePage={}}SetNewTable(t,n){this.liveNiopTable[t.nodeID]=t,this.liveNiopTableElement[t.nodeID]=n,t.manager=this}RemoveTable(t){delete this.liveNiopTable[t.nodeID],delete this.liveNiopTableElement[t.nodeID],t.manager=null}ReplaceTableNode(){}ONPageClose(t){}getNiopTable(t,n=null){let s=this.liveNiopTable[t];if(!s&&n){const o=n.getAttribute(f.ATTRNAME);try{o?s=new U(o):s=new U("{}"),s.tableNode=n,s.nodeID=t,s.protyle=f.protyle,this.SetNewTable(s,n)}catch(l){console.log(l)}}return s}getNiopsInSamePageWithSmeAvID(t){const n=this.livePage[t.pageID],s=[];return Object.values(n).forEach(o=>{o.renderEditMethod===1&&o.resourceAVID===t.resourceAVID&&(o.syncTables||o.reFreshOnPageSelect)&&s.push(o)}),s}onSwitchPage(t){const s=t.detail.protyle.element.getAttribute("data-id"),o=this.livePage[s],l={};let i=0;const r=t.detail.protyle.contentElement.querySelectorAll(`[${f.ATTRNAME}]`);return r&&r.forEach(a=>{const u=a.getAttribute("data-node-id"),c=this.getNiopTable(u,a);c.tableContainer=t.detail.protyle.contentElement,c.pageID=s,a!=c.tableNode&&(c.tableNode=a),l[u]=c,i++,o&&o[u]&&delete o[u]}),o&&Object.values(o).forEach(a=>{this.RemoveTable(a)}),i>0&&(this.livePage[s]=l),l}}var B=(e,t,n)=>new Promise((s,o)=>{var l=a=>{try{r(n.next(a))}catch(u){o(u)}},i=a=>{try{r(n.throw(a))}catch(u){o(u)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,i);r((n=n.apply(e,t)).next())});const ie=!1,Y="menu-config",ot="custom_tab",lt="dock_tab",V=class extends A.Plugin{onload(){globalThis.NTP=this,this.eventBus.on("switch-protyle",this.switch_protyle),V.Ini=this,this.manager=new Le,this.eventBus.on("click-blockicon",this.blockIconEvent.bind(this)),this.protyleSlash=[{filter:["table","data table","database table","niop","\u8868\u683C","\u6570\u636E\u8868\u683C","\u6570\u636E\u5E93\u8868\u683C","shujubiaoge"],html:`<div class="b3-list-item__first"><svg class="b3-menu__icon " style=""><use xlink:href="#iconTable"></use></svg><span class="b3-list-item__text">${this.i18n.dTable}</span><span class="b3-list-item__meta">TABLE</span></div>`,id:"creatniopDateTable",callback(i){return B(this,null,function*(){const r=i.protyle.breadcrumb.id,a=i.protyle.contentElement.querySelector(`[data-node-id="${r}"]`),u=i.protyle.transactionTime;yield(d=>B(this,null,function*(){i.insert("<span></span>"),yield pe(r),X(a,r,i.protyle,200)}))(1)})}}];const e=document.createElement("div");e.innerHTML=`
<!-- \u9009\u62E9\u6846 \u6253\u5F00\u8F85\u52A9\u5DE5\u5177 -->
<select id="niopSelect" >
    <option value="close">${V.Ini.i18n.close}</option>
    <option value="open">${V.Ini.i18n.open}</option>
</select>

<!-- \u9009\u62E9\u6846\u548C\u8F93\u5165\u6846 \u9884\u5B9A\u4E49 CSS -->
<div id="niopContainer" class="fn__none">
    <select id="niopSelect2">
        <option value="option1">\u4F7F\u7528\u5185\u5D4Ccss</option>
        <option value="option2">\u4F7F\u7528\u81EA\u5B9A\u4E49css</option>
    </select>
    <button onclick="console.log('Clicked!')">\u6062\u590D\u9ED8\u8BA4css</button>
    <input type="text" id="niopInput" placeholder="Type something...">
</div>    
<!-- \u9009\u62E9\u6846 \u6253\u5F00\u5FEB\u901F\u5DE5\u5177\u680F \u8F93\u51FA log -->
<select id="niopSelect3" class="fn__none">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
</select>
<!-- \u5FEB\u901F\u5DE5\u5177\u680F -->
<div id="niopToolbar" class="">
</div>
    `;const t=e.querySelector("#niopSelect"),n=e.querySelector("#niopSelect2"),s=e.querySelector("#niopInput"),o=e.querySelector("#niopSelect3"),l=e.querySelector("#niopToolbar");this.setting=new A.Setting({confirmCallback:()=>{this.saveData(Y,{useAdvanceTools:t.value})}}),this.setting.addItem({title:`${V.Ini.i18n.useImportToll}`,createActionElement:()=>(this.loadData(Y).then(i=>{i.useAdvanceTools&&(t.value=i.useAdvanceTools)}),e)}),console.log("DatabaseTable from niop ~"),this.loadData(Y).then(i=>{i.useAdvanceTools&&new ge().creatCommands(this)})}onLayoutReady(){}onunload(){this.eventBus.off("switch-protyle",this.switch_protyle),this.eventBus.off("click-blockicon",this.blockIconEvent.bind(this))}blockIconEvent({detail:e}){e.menu.addItem({iconHTML:'<svg class="b3-menu__icon " style=""><use xlink:href="#iconTable"></use></svg>',label:this.i18n.dTable,click:()=>{const t=e.blockElements[0],n=t.getAttribute("data-node-id");X(t,n,e.protyle,0)}})}switch_protyle(e){V.protyle=e.detail.protyle;const t=e.detail.protyle.contentElement.querySelector(".protyle-title.protyle-wysiwyg--attr");if(!t||t===this.protyleTitleElement)return;this.protyleTitleElement=t;let n=t.getAttribute("niopStatu");n||(n="addToolBar",t.setAttribute("niopStatu",n));const s=V.Ini.manager;if(n==="addToolBar"){const l=e.detail.protyle.contentElement;l.addEventListener("click",i=>{if(i.altKey){const r=i.composedPath();for(let a=0;a<r.length;a++){const u=r[a];if(typeof u.getAttribute=="function"&&u.getAttribute(V.ATTRNAME)!==null){const c=u,d=c.getAttribute("data-node-id");V.protyle=e.detail.protyle,X(c,d,e.detail.protyle,0),i.preventDefault(),i.stopPropagation();break}if(u===l)break}}}),l.addEventListener("niouInputPaste",i=>{console.log(i.event.target)}),t.setAttribute("niopStatu","none")}const o=s.onSwitchPage(e);o&&Object.keys(o).forEach(l=>{const i=o[l];if(!i.tableContainer){i.tableContainer=e.detail.protyle.contentElement;const r=i.tableContainer.parentElement.getAttribute("data-id")}i.renderEditMethod===1&&(i.reFreshOnPageSelect||i.editableCard)&&(i.tableNode.style.pointerEvents="none",i.tableNode.style.opacity="0.5",H(i,!0,!0,!1,0))})}registerTable(e,t){const s=this.manager.getNiopTable(e);if(s){if(s.OnLoad)return;const o=s.tableContainer.querySelector(`[data-node-id="${e}"]`);s.tableNode!=o&&(s.tableNode=o),s.editableCard&&Fe(s,!1)}}};let f=V;f.OnRedner=!1,f.OnImportData=!1,f.ATTRNAME="custom-nioptable",f.protyle=null;const it=()=>{},at=(e,t=!0)=>!t&&(f.OnRedner||f.OnImportData)||e.renderEditMethod!=1?!1:((e.reFreshOnPageSelect||e.editableCard)&&He(e),!0),Fe=(e,t=!1)=>{if(!e.editableCard)return;t&&(e.tableNode=e.tableContainer.querySelector(`[data-node-id="${e.nodeID}"]`));const n=e.tableNode;if(!n.getAttribute("niopStatu")&&(n.setAttribute("niopStatu","none"),n.getAttribute("data-type")==="NodeHTMLBlock")){const s=n.querySelector("protyle-html[data-content]");n.querySelector(".protyle-icons").classList.add("fn__none");const l=s.shadowRoot.querySelector(".cardContainer");l.addEventListener("focus",i=>{Re(e,i)},!0),l.addEventListener("change",i=>{Pe(e,i)}),l.addEventListener("paste",i=>{Be(e,i)}),e.displayAddButton&&l.querySelector(".add-button").addEventListener("click",()=>{qe(e,l)})}},qe=(e,t)=>{if(e.OnLoad)return;e.OnLoad=!0,t.style.pointerEvents="none",t.style.opacity="0.5";const n=z(),s=[{action:"insertAttrViewBlock",avID:e.resourceAVID,previousID:"",srcIDs:[n],isDetached:!0}],o=[{action:"removeAttrViewBlock",srcIDs:[n],avID:e.resourceAVID}];(0,A.fetchPost)("/api/av/renderAttributeView",{id:e.resourceAVID,viewID:e.AVViewID,pageSize:0},()=>{f.protyle.getInstance().transaction(s,o),setTimeout(()=>{e.OnLoad=!1,H(e,!0,!0,!0,0)},800)})},He=(e,t=!0)=>{Q(e.resourceID,n=>{e.resourceAVUpdated!=n&&(e.resourceAVUpdated=n,H(e,t,!0,!0,0))})},H=(e,t=!0,n=!1,s=!1,o=500)=>{if(e.OnLoad){e.OnLoad=!1;return}n&&Q(e.resourceID,i=>{e.resourceAVUpdated=i});const l=i=>{i.OnLoad=!0,ae(i,t,!0,()=>{i.OnLoad=!1,i.save()})};s&&e.syncTables?f.Ini.manager.getNiopsInSamePageWithSmeAvID(e).forEach(r=>{o>10?setTimeout(()=>{l(r)},o):l(r)}):o>10?setTimeout(()=>{l(e)},o):l(e)},X=(e,t,n,s=1e3)=>{const o=f.Ini.manager,l=e,i=l.getAttribute("data-type");if(i!="NodeTable"&&i!="NodeHTMLBlock"){he("DataBaseTable only used on Table",400);return}i==="NodeHTMLBlock"&&!l.getAttribute(f.ATTRNAME)&&he("error with wrong attribute",400);const r=c=>{if(c.protyle=n,c.tableContainer=n.contentElement,c.tableNode!=l&&(c.tableNode=l),c.renderEditMethod===2||c.renderEditMethod<1){c.renderEditMethod=2;const d=[],p=c.tableNode.querySelector("colgroup");p&&(c.totalCardWidth=0,p.querySelectorAll("col").forEach(h=>{const m=h.getBoundingClientRect().width,w=m?`${m}px`:"";d.push(w),c.totalCardWidth+=m})),c.colgroup=JSON.stringify(d),(0,A.fetchPost)("/api/block/getBlockKramdown",{id:c.nodeID},g=>B(void 0,null,function*(){c.renderEditMethod=2,c.setSourceTable(g.data.kramdown),yield pe(t),Z(c)}))}else Z(c)},a=c=>{const d=o.getNiopTable(t,l);s>10?setTimeout(()=>{r(d)},s):r(d)},u=c=>{const d=o.getNiopTable(t,l),p={[f.ATTRNAME]:d.getJson()};s>10?setTimeout(()=>{L(t,p,()=>{r(d)})},s):L(t,p,()=>{r(d)})};Ke(t,f.ATTRNAME,a,u)},rt=e=>{const t=e,n=t.getAttribute("data-node-id"),s=t.getAttribute(f.ATTRNAME);if(!n){console.error("error with data-node-id ");return}const o=t.getElementsByClassName("protyle-attr"),l=document.createElement("div");l.setAttribute("contenteditable","false"),l.classList.add("niop-toolbar-container"),l.addEventListener("mouseenter",()=>{l.classList.remove("hide"),l.classList.add("show")}),l.addEventListener("mouseleave",()=>{l.classList.remove("show"),l.classList.add("hide")}),o[0].appendChild(l);const i=new U(s);i.nodeID=n,i.tableNode=t;const r=document.createElement("button");r.textContent="Toolbar",r.setAttribute("niopButton","showMenu"),r.setAttribute("contenteditable","false"),r.classList.add("niop-button"),l.appendChild(r),r.addEventListener("click",()=>{Z(i)});const a=document.createElement("button");a.textContent="Reload",a.setAttribute("niopButton","reload"),a.setAttribute("contenteditable","false"),a.classList.add("niop-button"),l.appendChild(a),a.addEventListener("click",()=>{Xe(i)}),i.tableContainer=l},Z=e=>{let t=!1;const n=E=>{t&&e.save(F=>{setTimeout(()=>{},200)})},s=new A.Dialog({title:`${f.Ini.i18n.OnEditSomthing_Table} : ${e.nodeID}`,content:`
      <div class="b3-dialog__content">
      <div class="fn__hr"></div>
      <div>${f.Ini.i18n.AVBlockID}:</div>
      <div class="fn__hr"></div>
      <input type="text" name="Dababase ID" id = "niopIDBox">
      <div class="fn__hr"></div>
      <div >${f.Ini.i18n.AVViewName}:</div>
      <div class="fn__hr"></div>
      <input type="text" name="Views Name" id = "niopIDBox2">
      <div class="fn__hr"></div>
      <div class="fn__hr"></div>
      <div>${f.Ini.i18n.RenderMethodAs}:</div>
      <div class="fn__hr"></div>
      <div class="renderMethod">
        <button class="niopRenderSelect" id = "niopRenderSelectCard" style="display: inline-block;" >${f.Ini.i18n.renderCard}</button>
        <button class="niopRenderSelect" id = "niopRenderSelectCustom" style="display: inline-block;" >${f.Ini.i18n.renderAsCustom}</button>
        <button class="niopRenderSelect" id = "niopRenderSelectRight" style="display: inline-block;">${f.Ini.i18n.renderRight}</button>
        <button class="niopRenderSelect" id = "niopRenderSelectDown" style="display: inline-block;" >${f.Ini.i18n.renderBelow}</button>
      </div>
      <div class="fn__hr"></div>
      <div class="fn__hr"></div>
      <div>${f.Ini.i18n.DisPlayAs}:</div>
      <div class="fn__hr"></div>
      <div class="niopRenderMethodDis">
      <div class="niopRenderSelect" id = "niopRenderAsEditor" aria-label="">${f.Ini.i18n.currentDisPlayMethod_Editor}</div>
      <div class="niopRenderSelect" id = "niopRenderAsDataBase" aria-label="">${f.Ini.i18n.currentDisPlayMethod_DateBase}</div>
      </div>
      <div class="fn__hr"></div>
      <div class="fn__hr"></div>
      <div>${f.Ini.i18n.SwitchRender}:</div>
      <div class="fn__hr"></div>
      <div class="niopLoadMethod">
      <button class="niop-button" id = "niopEditTable" aria-label="">${f.Ini.i18n.currentDisPlayMethod_Editor}</button>
      <span style="width:120px;height:60px;"><span>
      <button class="niop-button" id = "niopReloadAll" aria-label="">${f.Ini.i18n.ReloadAll}</button>
      </div>
      <div class="fn__hr"></div>
      <div>${f.Ini.i18n.tableSetting}</div>
      <div class="fn__hr"></div>
      <button class="niopRenderSelect" id = "reLoadOnTabSelect" aria-label="">${f.Ini.i18n.reLoadOnTabSelect}</button>
      <button class="niopRenderSelect" id = "EditorAble" aria-label="">${f.Ini.i18n.editableCard}</button>
      <button class="niopRenderSelect" id = "ShowAddButton" aria-label="">${f.Ini.i18n.ShowAddButton}</button>
      <button class="niopRenderSelect" id = "ShowEmptyData" aria-label="">${f.Ini.i18n.ShowEmptyData}</button>
      <button class="niopRenderSelect" id = "syncTables" aria-label="">${f.Ini.i18n.syncTables}</button>
      <div class="fn__hr"></div>
      <div style="display:none">Edit</div>
      <div class="fn__hr"></div>

      <button class="niop-button hide" id = "niopSetFiltter" >SetFiltter</button>
      <button class="niop-button hide" id = "niopCleanFiltter" >cleanFiltter</button>
      <div class="fn__hr" style="display:none"></div>
      <div class="fn_none" style="display:none">json:</div>
      <div id = "jsonstring" class="fn_none" style="display:none"></div>
      </div>        
  `,width:"360px",height:"500px",destroyCallback:n}),o=s.element.querySelector("#jsonstring"),l=s.element.querySelector("#niopIDBox"),i=s.element.querySelector("#niopIDBox2"),r=s.element.querySelector("#niopRenderSelectCard"),a=s.element.querySelector("#niopRenderSelectRight"),u=s.element.querySelector("#niopRenderSelectDown"),c=s.element.querySelector("#niopRenderSelectCustom"),d=s.element.querySelector("#niopEditTable"),p=s.element.querySelector("#niopReloadAll"),g=s.element.querySelector("#reLoadOnTabSelect"),h=s.element.querySelector("#EditorAble"),m=s.element.querySelector("#ShowAddButton"),w=s.element.querySelector("#ShowEmptyData"),I=s.element.querySelector("#syncTables"),v=s.element.querySelector("#niopRenderAsEditor"),k=s.element.querySelector("#niopRenderAsDataBase"),$=s.element.querySelector("#niopSetFiltter"),T=s.element.querySelector("#niopCleanFiltter"),S=()=>{o.innerText=e.getJson()},D=()=>{r.classList.remove("select"),a.classList.remove("select"),u.classList.remove("select"),c.classList.remove("select"),v.classList.remove("select"),k.classList.remove("select"),g.classList.remove("select"),h.classList.remove("select"),m.classList.remove("select"),w.classList.remove("select"),I.classList.remove("select"),e.renderMethod===1?r.classList.add("select"):e.renderMethod===2?a.classList.add("select"):e.renderMethod===3?u.classList.add("select"):e.renderMethod===4&&c.classList.add("select"),e.renderEditMethod===1&&k.classList.add("select"),e.renderEditMethod===2&&v.classList.add("select"),e.reFreshOnPageSelect&&g.classList.add("select"),e.editableCard&&h.classList.add("select"),e.displayAddButton&&m.classList.add("select"),e.displayEmpety&&w.classList.add("select"),e.syncTables&&I.classList.add("select")},N=()=>{const E=[{action:"setAttrViewFilters",avID:e.resourceAVID,data:e.hotReloadSetting.filters},{action:"setAttrViewSorts",avID:e.resourceAVID,data:e.hotReloadSetting.sorts}];e.protyle.getInstance().transaction(E)},_=()=>{e.renderEditMethod=2,v.classList.add("select"),k.classList.remove("select");const E=j(e.sourceTable,["fold","updated"]);de(e.nodeID,E,F=>{}),f.OnRedner=!1,t=!0,S()},b=E=>{e.resourceAVID!=""&&(v.classList.remove("select"),k.classList.add("select"),ae(e,E))},y=()=>{ee(e,E=>{if(!E){console.log("no av on the block:"+e.resourceID);return}t=!0,e.renderEditMethod=1,b(!1),S()})},C=()=>{const E=e.resourceAVID;ee(e,F=>{if(!F){console.log("no av on the block"+e.resourceID);return}e.resourceAVID!=E?b(!1):b(!0),S()})},R=()=>{t=!0,g.classList.remove("select"),e.reFreshOnPageSelect=!e.reFreshOnPageSelect};l.value=e.resourceID,i.value=e.resourceAVViewName,ee(e,()=>{S()}),l.addEventListener("input",()=>{e.resourceID=l.value,t=!0}),i.addEventListener("input",()=>{e.resourceAVViewName=i.value,t=!0}),r.addEventListener("click",()=>{e.renderMethod=1,t=!0,S(),D()}),a.addEventListener("click",()=>{e.renderMethod=2,t=!0,S(),D()}),u.addEventListener("click",()=>{e.renderMethod=3,t=!0,S(),D()}),c.addEventListener("click",()=>{e.renderMethod=4,t=!0,S(),D(),je(e)}),d.addEventListener("click",_),p.addEventListener("click",y),g.addEventListener("click",()=>{e.reFreshOnPageSelect=!e.reFreshOnPageSelect,Q(e.resourceID,E=>{e.resourceAVUpdated=E}),t=!0,D()}),h.addEventListener("click",()=>{e.editableCard=!e.editableCard,t=!0,D()}),m.addEventListener("click",()=>{e.displayAddButton=!e.displayAddButton,t=!0,D()}),w.addEventListener("click",()=>{e.displayEmpety=!e.displayEmpety,t=!0,D()}),I.addEventListener("click",()=>{e.syncTables=!e.syncTables,t=!0,D()}),l.innerText=e.resourceID,D()},je=e=>{let t=!1;const n=f.Ini,s=c=>{t&&e.save(d=>{})},o=new A.Dialog({title:`${f.Ini.i18n.OnEditSomthing_Table} : Html && Css`,content:`
      <div class="b3-dialog__content"  style="display: flex; justify-content: space-between;">
        <div class="column left-column">
        <p>Html:</p>
        <textarea id="leftInput" placeholder="html" style="min-height: 400px;height: 400px;"></textarea>
        <button type="button" id="leftClear" class="clear-button left-clear">${f.Ini.i18n.clear}</button>
        </div>
        <div class="column right-column">
        <p>Css:</p>
        <textarea id="rightInput" placeholder="css" style="min-height: 400px;height: 400px;"></textarea>
        <button type="button" id="rightClear" class="clear-button right-clear" >${f.Ini.i18n.clear}</button>
        </div>
      </div>        
      <button type="button" class="save-button" id="saveButton">${f.Ini.i18n.saveData}</button>
  `,width:"600px",height:"600px",destroyCallback:s}),l=o.element.querySelector("#leftInput"),i=o.element.querySelector("#rightInput"),r=o.element.querySelector("#leftClear"),a=o.element.querySelector("#rightClear"),u=o.element.querySelector("#saveButton");r.addEventListener("click",()=>{l.value="",e.CustomHtml=""}),a.addEventListener("click",()=>{i.value="",e.CustomCss=""}),u.addEventListener("click",()=>{e.CustomHtml=l.value.replace(/^\s*\n/gm,""),e.CustomCss=i.value.replace(/^\s*\n/gm,""),t=!0,o.destroy()}),l.value=e.CustomHtml,i.value=e.CustomCss},ae=(e,t=!0,n=!1,s=null)=>B(void 0,null,function*(){if(!n){if(f.OnRedner){ue(`${f.Ini.i18n.pleaseWaitOnRendering}`,3e3),f.OnRedner=!1;return}f.OnRedner=!0}const o={id:e.resourceAVID};(0,A.fetchPost)("/api/av/renderAttributeView",{id:e.resourceAVID,pageSize:0},l=>B(void 0,null,function*(){const i=l.data.view.rowCount,r=()=>{ie&&(console.log("niopTable:"),console.log(e));const c=new Ue(e.sourceTable,e);let d="";switch(e.renderMethod){case 1:c.direction={card:1,x:0,y:0},c.makeToCard(e),d=c.RebuildAsCard(e);break;case 2:c.direction={card:0,x:1,y:0},c.makeToCard(e),d=c.Rebuild(e);break;case 3:c.direction={card:0,x:0,y:1},c.makeToCard(e),d=c.Rebuild(e);break;case 4:c.direction={card:0,x:0,y:0},d=c.RebuildAsCustomHtml(e);break;default:ue(`${f.Ini.i18n.mustSelectOneRenderMethod}`,5e3);break}ie&&(console.log("\u9884\u5904\u7406\u8868\u683C"),console.log(c),console.log(d)),d!=""&&(de(e.nodeID,d,s),e.renderEditMethod=1),f.OnRedner=!1};t=!0;let a=l.data.view.id,u=a===e.resourceAVViewName;if(e.resourceAVViewName!=""&&l.data.view.name!=e.resourceAVViewName&&l.data.views.length>1){for(let c=0;c<l.data.views.length;c++){const d=l.data.views[c];if(d.name===e.resourceAVViewName){u=!0,e.AVViewID=d.id,a=d.id;break}}u||console.log(`${e.nodeID} set error view name : ${e.resourceAVViewName}`)}t===!0&&(0,A.fetchPost)("/api/av/renderAttributeView",{id:e.resourceAVID,viewID:a,pageSize:Number.MAX_VALUE},d=>{e.titles=d.data.view.columns,e.rows=d.data.view.rows,e.avTable=d,r()})}))}),Q=(e,t=null)=>{(0,A.fetchPost)("/api/block/getBlockDOM",{id:e},n=>{if(n.data.dom||n.data.dom==="")return;const s=document.createElement("div");s.innerHTML=n.data.dom;const o=s.children[0].getAttribute("updated");o&&t&&t(o)})},ct=(e,t=null)=>{fetchPost("/api/av/renderAttributeView",{id:e.resourceAVID},n=>{e.titles=e.deepCopy(n.data.view.columns),e.rows=n.data.view.rows,e.avTable=n,e.setting.filters=Object.assign(n.data.view.filters),e.setting.sorts=Object.assign(n.data.view.sorts),t&&t()})},dt=e=>{console.log(e)};class U{constructor(t){this.renderMethod=-1,this.renderEditMethod=2,this.resourceID="",this.resourceAVID="",this.resourceAVUpdated="",this.resourceAVViewName="",this.AVViewID="",this.setting={filters:[],sorts:[]},this.hotReloadSetting={filters:[],sorts:[]},this.sourceTable="",this.colgroup="",this.totalCardWidth=200,this.nodeID="",this.reFreshOnPageSelect=!1,this.editableCard=!1,this.displayEmpety=!1,this.displayAddButton=!1,this.syncTables=!1,this.CustomCss="",this.CustomHtml="",this.CustomJs="",this.OnLoad=!1;try{const n=JSON.parse(t);n.renderMethod&&(this.renderMethod=n.renderMethod),n.resourceID&&(this.resourceID=n.resourceID),n.resourceAVID&&(this.resourceAVID=n.resourceAVID),n.sourceTable&&(this.sourceTable=this.decode(n.sourceTable)),n.renderEditMethod&&(this.renderEditMethod=n.renderEditMethod),n.hotReloadSetting&&(this.hotReloadSetting=n.hotReloadSetting),n.nodeID&&(this.nodeID=n.nodeID),n.colgroup&&(this.colgroup=this.decode(n.colgroup)),n.resourceAVViewName&&(this.resourceAVViewName=n.resourceAVViewName),n.resourceAVUpdated&&(this.resourceAVUpdated=n.resourceAVUpdated),n.reFreshOnPageSelect&&(this.reFreshOnPageSelect=n.reFreshOnPageSelect),n.editableCard&&(this.editableCard=n.editableCard),n.displayEmpety&&(this.displayEmpety=n.displayEmpety),n.displayAddButton&&(this.displayAddButton=n.displayAddButton),n.syncTables&&(this.syncTables=n.syncTables),n.AVViewID&&(this.AVViewID=n.AVViewID),n.CustomCss&&(this.CustomCss=n.CustomCss),n.CustomHtml&&(this.CustomHtml=n.CustomHtml),n.CustomJs&&(this.CustomJs=n.CustomJs),n.totalCardWidth&&(this.totalCardWidth=n.totalCardWidth)}catch(n){console.log("Error parsing JSON:",n),this.save(s=>{setTimeout(()=>{},200)})}}clean(){this.protyle=null}getJson(){return JSON.stringify({renderMethod:this.renderMethod,resourceID:this.resourceID,resourceAVID:this.resourceAVID,sourceTable:this.encode(this.sourceTable),renderEditMethod:this.renderEditMethod,hotReloadSetting:this.hotReloadSetting,nodeID:this.nodeID,colgroup:this.encode(this.colgroup),resourceAVViewName:this.resourceAVViewName,resourceAVUpdated:this.resourceAVUpdated,reFreshOnPageSelect:this.reFreshOnPageSelect,editableCard:this.editableCard,displayEmpety:this.displayEmpety,displayAddButton:this.displayAddButton,syncTables:this.syncTables,AVViewID:this.AVViewID,CustomCss:this.CustomCss,CustomHtml:this.CustomHtml,CustomJs:this.CustomJs,totalCardWidth:this.totalCardWidth})}encode(t){const n=encodeURIComponent(t);return window.btoa(n)}decode(t){try{const n=atob(t);return decodeURIComponent(n)}catch(n){return console.error("Error decoding string:",n),""}}deepCopy(t){return JSON.parse(JSON.stringify(t))}setSourceTable(t){const n=/custom-nioptable="[^"]*"/g,s=t.replace(n,"");this.sourceTable=s}save(t=null){if(this.nodeID!=""){const n={[f.ATTRNAME]:this.getJson()};t?L(this.nodeID,n,s=>{t(s)}):L(this.nodeID,n)}}}const ut=()=>{const e=`|{: colspan="4" rowspan="1"}\u6807\u9898|{: colspan="1" class="fn__none"}|{: colspan="1" class="fn__none"}|{: colspan="1" class="fn__none"}|
| :-------------------------------: | :--------------------------------: | :--------------------------------: | :--------------------------------: |
|{: colspan="1"}\u5934\u50CF|{: colspan="1"}\u540D\u5B57|{: colspan="1"}\u7B49\u7EA7|\u6280\u80FD|
|..(icon)|..(name)|..(level)|..(skill)|
{: colgroup="width: 94px;|width: 121px;|width: 95px;|width: 116px;" custom-nioptable="123" fold="0" id="20231120114455-g1jmigv" updated="20231130193916"}`,n=e.split(`
`).slice(0,-1).map(o=>o.split(new RegExp("(?<!\\\\)\\|")).map(l=>l.replace(/\\\|/g,"|"))),s=[[{content:"",config:""}]];n.forEach((o,l)=>{s[l]=[],o.forEach((i,r)=>{s[l][r]=re(i)}),s[l]=s[l].slice(1,-1)}),console.log(e),console.log(s)},Je=/{:\s*(.+?)\s*}/,re=e=>{const t=e.match(Je);if(t){const n=e.replace(t[0],""),s=We(t[1]),o=s.attributes,l=!!(o.colspan&&o.colspan>1||o.rowspan&&o.rowspan>1);return{content:n,config:o,configNo:s.length,resize:l,valueType:"",colspan:o.colspan?parseInt(o.colspan):1,rowspan:o.rowspan?parseInt(o.rowspan):1}}else return{content:e,config:{},configNo:0,resize:!1,valueType:"",colspan:1,rowspan:1}};function We(e){const t=/(\S+)=["']([^"']+)["']/g,n=e.match(t);if(!n)return{};const s={};let o=0;return n.forEach(l=>{const[i,r,a]=l.match(/(\S+)=["']([^"']+)["']/);s[r]=a,o++}),{attributes:s,length:o}}class Ue{constructor(t,n){this.cells=[],this.dashRowNum=1,this.colgroup=[],this.rowsStyleStrs=[],this.cellStyleStrs={},this.cellSetting={},this.end="",this.cards=[],this.haveActionValueRegex=/\.\.\((.+?)\)/g,this.checkifHaveActionValue=s=>!!s.content.match(this.haveActionValueRegex),this.rowStyleRegex=/\.\.style\(([^)]*)\)/,this.cellStyleRegex=/\.\.tdstyle\(([^)]*)\)/,this.cellSettingRegex=/\.\.(\w+)\((.*?)\)/,this.direction={card:0,x:0,y:0},this.curCell={card:0,x:0,y:0},this.parseTable(t,n)}parseTable(t,n){const s=t.split(`
`);if(this.end=s[s.length-1],n.renderMethod==4)return;const o={};let l=!1;s.slice(0,-1).map(r=>r.split(new RegExp("(?<!\\\\)\\|")).map(a=>a.replace(/\\\|/g,"|"))).forEach((r,a)=>{this.cells[a]=[],o[a]||(o[a]=0),r.forEach((u,c)=>{const d=re(u);this.cells[a][c]=d,!l&&c==1&&d.content&&d.content.startsWith(" ")&&(l=!0,this.dashRowNum<a&&(this.dashRowNum=a))}),this.cells[a]=this.cells[a].slice(1,-1)}),this.getRawColgroup(n),this.getMdSettingFromTable()}removeEmpetyInputRows(t){const n=t.avTable.data.view;let s=-1;for(let l=0;l<n.columns.length;l++)if(n.columns[l].type==="block"){s=l;break}const o=[];for(let l=0;l<n.rows.length;l++)n.rows[l].cells[s].value.block.content===""&&o.push(l);for(let l=o.length-1;l>=0;l--)n.rows.splice(o[l],1)}caculateColAndRowGroup(t){this.cells.forEach((n,s)=>{n.forEach((o,l)=>{switch(t.renderMethod){case 1:break;case 2:o.colspan>1&&n.length==l+o.colspan?(o.colspan+=t.rows.length-1,o.config.colspan=o.colspan):n.length==1&&o.colspan==1&&this.dashRowNum!=s&&(this.checkifHaveActionValue(o)||(o.colspan+=t.rows.length-1,o.config.colspan=o.colspan,o.configNo+=1));break;case 3:o.rowspan>1&&this.cells.length==s+o.rowspan+1?(o.rowspan+=t.rows.length,o.config.rowspan=o.rowspan):this.cells.length==2&&o.rowspan==1&&this.dashRowNum!=s&&(this.checkifHaveActionValue(o)||(o.rowspan+=t.rows.length-1,o.config.rowspan=o.rowspan,o.configNo+=1));break;default:break}})})}Rebuild(t){const n=this.cards.map(l=>l.map(i=>"|"+i.map(r=>{let a="";return r.configNo>0&&(a="{: "+Object.entries(r.config).map(([u,c])=>`${u}="${c}"`).join("  ")+"}"),a+r.content}).join("|")).join(`|
`)).join("");this.end=t.renderMethod===2?j(this.end,["fold","id","updated","colgroup"]):j(this.end,["fold","id","updated"]);let s=' id="'+t.nodeID+'" ';t.renderMethod===2&&(s+=' colgroup="'+this.colgroup.map(l=>"width: "+l+";").join("|")+'" ');const o=this.end;return this.end=o.slice(0,2)+s+o.slice(2),`${n}
${this.end}`}RebuildAsCard(t){const n=j(this.end,["fold","id","updated","colgroup"]),s=` id="${t.nodeID}"  data-type="NodeHTMLBlock" `;this.end=n.slice(0,2)+s+n.slice(2);const o=ze(this,t),l=[];return this.cards.forEach((i,r)=>{i.forEach((a,u)=>{if(this.dashRowNum!=u){const c=u>this.dashRowNum?u-1:u;a.forEach((d,p)=>{const g=o.cells[r][c][p];if(g.innerHTML=`<div class="niop-cell-content">${d.content}</div>`,d.configNo>0){if(d.colspan>1||d.rowspan>1)for(let h=0;h<d.colspan;h++)for(let m=0;m<d.rowspan;m++)h===0&&m===0||l.push(o.cells[r][c+m][p+h]);if(d.colspan>1){g.setAttribute("colspan",`${d.colspan}`);let h=parseInt(g.style.width);for(let m=1;m<d.colspan;m++)h+=parseInt(o.cells[r][c][p+m].style.width);g.style.width=h+"px"}d.rowspan>1&&g.setAttribute("rowspan",`${d.rowspan}`)}})}}),l.forEach(a=>{a.className="fn__none"})}),`<div>${o.body.innerHTML}</div>
${this.end}`}RebuildAsCustomHtml(t){t.displayEmpety||this.removeEmpetyInputRows(t);const n=j(this.end,["fold","id","updated","colgroup"]),s=` id="${t.nodeID}"  data-type="NodeHTMLBlock" `;return this.end=n.slice(0,2)+s+n.slice(2),`<div>${Ge(this,t).body.innerHTML}</div>
${this.end}`}makeToCard(t){this.cards=[],t.displayEmpety||this.removeEmpetyInputRows(t),this.caculateColAndRowGroup(t);const n=this.cells[0].length,s=this.cells.length,o=t.titles.length,l=t.rows.length,i=this.cards,r={card:0,x:0,y:0},a=this.direction;if(a.card==1?(Ye(this.cells),t.rows.forEach((p,g)=>{i[g]=t.deepCopy(this.cells)})):i[0]=t.deepCopy(this.cells),a.x===1){const p=i[0],g=this.colgroup[this.colgroup.length-1];for(let h=0;h<t.rows.length-1;h++)this.colgroup.push(g);for(let h=0;h<s;h++){const m=JSON.parse(JSON.stringify(p[h][n-1]));m.colspan>1&&this.dashRowNum!=h&&(m.content="",m.config.class="fn__none",m.colspan=1,m.config.colspan=1,m.configNo=1);const w=JSON.stringify(m);t.rows.forEach((I,v)=>{v!=0&&p[h].push(JSON.parse(w))})}}if(a.y===1){const p=i[0],g=t.rows.length,h=p[0].length,m=this.dashRowNum===s-1;let w;m?w=JSON.parse(JSON.stringify(Object.assign(p[s-2]))):w=Object.assign(JSON.parse(JSON.stringify(p[s-1]))),w.forEach(v=>{v.rowspan>1&&(v.content="",v.config.class="fn__none",v.rowspan=1,v.config.rowspan=1,v.configNo=1)});const I=JSON.stringify(w);for(let v=1;v<g;v++)m?p.splice(p.length-1,0,JSON.parse(I)):p.push(JSON.parse(I))}const u=[],c=/\.\.\((.*?)\)/;this.cells.forEach((p,g)=>{p.forEach((h,m)=>{h.content.match(c)&&u.push({x:g,y:m})})}),t.titles.forEach((p,g)=>{if(p.name!=""){const h=`..(${p.name})`;u.forEach(m=>{const w=this.cells[m.x][m.y],I=new RegExp(h),v=t.editableCard;if(I.test(w.content))for(let k=0;k<l;k++){const $=this.getOffsetCell(m,k),T=t.rows[k],S=t.rows[k].cells[g];let D="[None]";D=fe(D,p,S,T,t),$.content=$.content.replace(h,D)}})}})}getOffsetCell(t,n){let s=0,o=t.x,l=t.y;return this.direction.card===1&&(s=n),this.direction.y===1&&(o+=n),this.direction.x===1&&(l+=n),this.cards[s][o][l]}getRawColgroup(t){this.colgroup=JSON.parse(t.colgroup)}getAttr(t,n){const s=this.cellSetting[n];if(s){const o=s[t];if(o)return`${t}="${o}"`}return""}getMdSettingFromTable(){const t=[],n={},s={},o=this.cells[0].length;let l=0;this.cells.forEach((i,r)=>{r!=this.dashRowNum&&(i.forEach((a,u)=>{let c=a.content;const d=o*l+u,p=c.match(this.cellStyleRegex);if(p&&p[1]){let h=p[1];h.length>1&&h.charAt(h.length-1)!==";"&&(h=h+";"),n[d]=h,c=c.replace(p[0],"")}if(u==0){const h=c.match(this.rowStyleRegex);if(h&&h[1]){let m=h[1];m.length>1&&m.charAt(m.length-1)!==";"&&(m=m+";"),t.push(m),c=c.replace(h[0],"")}else t.push("")}const g=c.match(this.cellSettingRegex);if(g&&g[1]){const h=g[1];s[d]||(s[d]={}),s[d][h]=g[2]?g[2]:"",c=c.replace(g[0],"")}a.content=c}),l++)}),this.rowsStyleStrs=t,this.cellStyleStrs=n,this.cellSetting=s}}const ee=(e,t=null)=>{(0,A.fetchPost)("/api/block/getBlockKramdown",{id:e.resourceID},n=>{const s=n.data.kramdown,o=/data-av-id="([^"]+)"/,l=s.match(o);if(l)e.resourceAVID!=l[1]&&(e.resourceAVID=l[1]);else{console.log("No av-id"),e.resourceAVID="",t&&t(!1);return}t&&t(!0)})},ht=(e,t=null)=>{fetchPost("/api/block/getBlockKramdown",{id:e.resourceID},n=>{const s=n.data.kramdown,o=/data-av-id="([^"]+)"/,l=s.match(o);if(l)e.resourceAVID!=l[1]&&(e.resourceAVID=l[1]);else{console.log("No av-id"),e.resourceAVID="",t&&t(!1);return}t&&t(!0)})},pt=e=>{};function ce(e){const t=new Date(e),n=t.getFullYear(),s=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0");return`${n}-${s}-${o}`}function L(e,t,n=null){const s=JSON.stringify({id:e,attrs:t});(0,A.fetchPost)("/api/attr/setBlockAttrs",{id:e,attrs:t},o=>{n&&n(o)})}function Ke(e,t,n=null,s=null){const o={id:e};return(0,A.fetchPost)("/api/attr/getBlockAttrs",o,l=>{l.data[t]?n&&n(l.data[t]):s&&s(l)}),!1}function mt(e,t){return B(this,null,function*(){const n={id:e};return fetchPost("/api/attr/getBlockAttrs",n,s=>{const o=s.data[t];return o||null}),null})}function ft(e,t=null){fetchPost("/api/av/renderAttributeView",{id:e},n=>{t&&t(n)})}function de(e,t,n=null){(0,A.fetchPost)("/api/block/updateBlock",{dataType:"markdown",data:t,id:e},s=>{n&&n(s)})}function ue(e,t,n=null){(0,A.fetchPost)("/api/notification/pushMsg",{msg:e,data:t},s=>{n&&n(s)})}function he(e,t,n=null){(0,A.fetchPost)("/api/notification/pushErrMsg",{msg:e,data:t},s=>{n&&n(s)})}const pe=(e,t=30)=>B(void 0,null,function*(){const n="custom-nioptablewait";let o=0,l=!0;const i=()=>{o++>t&&(l=!1,o=0)};for(L(e,{[n]:"1"},r=>{l=!1});l;)yield new Promise(r=>setTimeout(r,50)),i();for(l=!0,L(e,{[n]:""},r=>{l=!1});l;)yield new Promise(r=>setTimeout(r,50)),i()}),j=(e,t)=>{const n=t.map(l=>`${l}="[^"]*"`).join("|"),s=new RegExp(n,"g");return e.replace(s,"")};function ze(e,t){const n=e.cards.length,s=e.cells.length-1,o=e.colgroup,l=e.rowsStyleStrs,i=e.cellStyleStrs,r=e.cellSetting,a=document.createElement("div"),u=document.createElement("style"),c=document.createElement("script"),d=me(),p=o.length;u.textContent=`
.niop-card {
  padding: 5px;
  margin: 5px;
  display: inline-block;
  background-color: ${d.surfaceLight}; 
  border-radius: 5px; 
  opacity: 0.95;
  transition: box-shadow 0.3s ease; 
}
.niop-card:hover {
  box-shadow: 0 0 10px ${d.primarylight}; 
  opacity: 1;
}
.niop-card table {
  width:${t.totalCardWidth}px;
}
.niop-card tr{
  background-color:${d.surface};
  /* height of each line */
  min-height: auto;
}
.niop-card tr.thread{
  background-color:${d.surface};
}
.niop-card img {
  line-height: 0;
  object-fit: contain;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.niop-card td {
  border-Color:${d.cellBorderColor};
  border-collapse: collapse;
  text-align: center;
  overflow-wrap: anywhere;
  word-break: break-all;
  vertical-align: middle;
  /%
  position: absolute;
  overflow-y: hidden;
}
.niop-card td:hover {
  box-shadow: 0px 0px 30px ${d.primarylighter};
  /%
  posheight:auto;
  overflow-y: visible;
  %/
}
.niop-cell-content {
  overflow-y: hidden;
  overflow-x: hidden;
  height: inherit;
}
.niop-cell-content:hover {
  overflow-y: visible;
  z-index: +10;
}
.niop-card span.imgsDiv {
  width: 0;
  height: -webkit-fill-available;
  display: flex;
}
.niop-card span.imgDiv  {
  height: -webkit-fill-available;
  width: -webkit-fill-available;
}
.AssetContainer {
  position: relative;
  height: 100%;
  width: 100%;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
  left: 0px;
  top: 14px;
}
.AssetContainer::-webkit-scrollbar {
height: 5px; 
background-color: transparent; 
}
.AssetContainer::-webkit-scrollbar-track {
background-color: transparent;
}
.AssetContainer::-webkit-scrollbar-thumb {
background-color: rgba(0, 0, 0, 0.098); 
transition: background-color 0.3s ease; 
}
.AssetContainer:hover::-webkit-scrollbar-thumb {
background-color: rgba(0, 0, 0, 0.6); 
height: 20px; 
}
.niop-card td span[niopinput] {
  width: fit-content;
  height: fit-content;
  padding-right: 3px;
  overflow: overlay;
  vertical-align: middle;
  text-align: left;
}
.niop-card td span[niopinput]:empty {
  content:"[None]"
  min-width:20px;
  padding-right: 5px;
  background-color: #; 
  border-radius: 8px;
  display: inline-block;
}
.niop-card td select[niopinput="select"] {
  min-height: 25px;
  max-width: 100%;
  width:fit-content;
}
.add-button{
  background-color: #eeee;
  border: solid 5px;
  border-radius: 8px;
}
.add-button:focus{
  border-color: ${d.primarylighter};
}
.fn__none {
  display: none !important;
}
`,c.textContent=`
setTimeout(() => {
  var mg =globalThis.NTP;
  mg.registerTable("${t.nodeID}","${t.resourceAVID}");
}, 100);
`,a.append(u),a.append(c);const g=document.createElement("div");g.className="cardContainer",a.append(g),g.setAttribute("avID",t.resourceAVID),g.setAttribute("blockID",t.nodeID),g.setAttribute("viewName",t.resourceAVViewName);const h=[];for(let w=0;w<n;w++){const I=document.createElement("div");I.className="niop-card";const v=document.createElement("table");for(let k=0;k<s;k++){const $=document.createElement("tr");if(l[k]!=""){const T=l[k];$.setAttribute("style",T)}k===0&&($.className="thread");for(let T=0;T<o.length;T++){const S=document.createElement("td"),D=k*p+T;S.setAttribute("cellIndexID",D.toString());const N=i[D];N&&S.setAttribute("style",N);const _=r[D];_&&Object.keys(_).forEach(b=>{S.setAttribute(b,_[b])}),S.style.width=o[T],S.style.maxWidth=o[T],S.style.height="inherit",h[w]||(h[w]=[]),h[w][k]||(h[w][k]=[]),h[w][k][T]=S,$.appendChild(S)}v.appendChild($)}I.appendChild(v),g.appendChild(I)}const m=document.createElement("span");return t.displayAddButton||m.classList.add("fn__none"),m.innerHTML=`
      <svg class="add-button" width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4v38M5 24h38" stroke="black" stroke-width="4"/>
      </svg>
  `,g.appendChild(m),{body:a,cells:h}}function Ge(e,t){const n=t.rows.length,s=e.cells.length-1,o=e.colgroup,l=e.rowsStyleStrs,i=e.cellStyleStrs,r=e.cellSetting,a=document.createElement("div"),u=document.createElement("style"),c=document.createElement("style"),d=document.createElement("script"),p=me(),g=o.length;u.textContent=t.CustomCss,d.textContent=`
setTimeout(() => {
  var mg =globalThis.NTP;
  mg.registerTable("${t.nodeID}","${t.resourceAVID}");
}, 100);
`,c.textContent=`
.niop-card {
  padding: 5px;
  position: relative;
  display: inline-block;
  border-radius: 5px; 
  transition: box-shadow 0.3s ease; 
  opacity: 0.95;
}
.niop-card:hover {
  box-shadow: 0 0 10px ${p.primarylight}; 
  opacity: 1;
}
.niop-card img {
  line-height: 0;
  object-fit: contain;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
`,a.append(u),a.append(c),a.append(d);const h=document.createElement("div");h.classList.add("cardContainer"),a.append(h),h.setAttribute("avID",t.resourceAVID),h.setAttribute("blockID",t.nodeID),h.setAttribute("viewName",t.resourceAVViewName);const m=t.titles,w=new Array(n).fill(t.CustomHtml);m.forEach((I,v)=>{const k=`..(${I.name})`;if(new RegExp(k,"g").test(t.CustomHtml))for(let T=0;T<n;T++){const S=t.rows[T].cells[v],D=t.rows[T];let N="[None]";N=fe(N,I,S,D,t),w[T]=w[T].replace(k,N)}});for(let I=0;I<n;I++){const v=document.createElement("div");v.textContent=w[I],v.className="niop-card",h.appendChild(v)}return console.log("1222"),{body:a}}function me(){const e=window.getComputedStyle(document.documentElement);return{backgroundColor:e.getPropertyValue("--b3-theme-background"),surface:e.getPropertyValue("--b3-theme-surface"),surfaceLight:e.getPropertyValue("--b3-theme-surface-lighter"),cellBorderColor:e.getPropertyValue("--b3-border-color"),primarylight:e.getPropertyValue("--b3-theme-primary-light"),primarylighter:e.getPropertyValue("--b3-theme-primary-lighter"),primarylightest:e.getPropertyValue("--b3-theme-primary-lightest"),listhover:e.getPropertyValue("--b3-list-hover"),tooltipscolor:e.getPropertyValue("--b3-tooltips-color"),tooltipsbackground:e.getPropertyValue("--b3-tooltips-background")}}function gt(e){const t={backgroundColor:"",surface:"",surfaceLight:"",cellBorderColor:""},n=e.querySelector("thead");if(n){const l=window.getComputedStyle(n);t.surface=l.backgroundColor}const s=e.querySelector("tbody");if(s){const l=window.getComputedStyle(s);t.surfaceLight=l.backgroundColor}const o=e.querySelectorAll("td");if(o.length>0){const l=window.getComputedStyle(o[0]);t.cellBorderColor=l.borderColor}return t}function Ye(e){const t=/\[([^\]]*)\]\(([^)]+)\)/g;e.forEach(n=>{n.forEach(s=>{let o;for(;(o=t.exec(s.content))!==null;){const l=o[0],i=o[1],r=o[2],a=s.content[o.index-1]==="!",u=a?`<img" src="${r}" alt="${i}">`:`<a href="${r}">${i}</a>`;s.content=s.content.replace(a?"!"+l:l,u)}})})}const fe=(e,t,n,s,o)=>{let l=n.value[n.valueType],i,r="";const a=o.editableCard;switch(n.valueType){case"block":e=n.value.block.content,e=q(e),e=`<span contenteditable="${a}"  niopInput="block" keyID="${n.value.keyID}" rowID="${s.id}" cellID="${n.value.id}">${e}</span>`;break;case"number":e=n.value.number.content,e=`<span contenteditable="${a}" niopInput="number" keyID="${n.value.keyID}" rowID="${s.id}" cellID="${n.value.id}">${e}</span>`;break;case"date":e=(l.isNotEmpty?ce(l.content):"")+(l.isNotEmpty2?` -> ${ce(l.content2)}`:"");break;case"phone":e=n.value.phone.content,e=q(e),e=`<span contenteditable="${a}" niopInput="phone" keyID="${n.value.keyID}" rowID="${s.id}" cellID="${n.value.id}">${e}</span>`;break;case"mAsset":if(n.value.mAsset){const u=n.value.mAsset.length;o.renderMethod===1||o.renderMethod===4?u===1?(e=`<span class='imgDiv'><img src="${n.value.mAsset[0].content}"></span>`,e=`<span contenteditable="${a}" niopInput="mAsset" keyID="${n.value.keyID}" rowID="${s.id}" cellID="${n.value.id}">${e}</span>`):e=`<span class='AssetContainer'>${n.value.mAsset.map(d=>d.type==="image"?`<span class='imgDiv'><img src='${d.content}' alt='${d.name}'></span>`:`<span class='fileDiv'><a href='${d.content}' title='${d.name}'>${d.name}</a></span>`).join("")}</span>`:u===1?(e=n.value.mAsset[0].type==="image"?`![image](${n.value.mAsset[0].content})`:`![file](${n.value.mAsset[0].content})`,e=`<span contenteditable="${a}" niopInput="mAsset" keyID="${n.value.keyID}" rowID="${s.id}" cellID="${n.value.id}">${e}</span>`):e=`${n.value.mAsset.map(d=>d.type==="image"?`![${d.name}](${d.content})`:`[${d.name}](${d.content})`).join("")}`}else e="",e=`<span contenteditable="${a}" niopInput="mAsset" keyID="${n.value.keyID}" rowID="${s.id}" cellID="${n.value.id}">${e}</span>`;break;case"select":if(i=t.options,r=`<select contenteditable="${a}" readonly ${a?"":"onmousedown='return false;' onkeydown='return false;'"} niopInput="select" keyID="${n.value.keyID}" rowID="${s.id}" cellID="${n.value.id}">`,l=n.value.mSelect,r+=`<option value="" Color="" ${l?"":"selected"}  >[None]</option>`,i.length>0)for(const u of i)r+=`<option value="${u.name}" Color="${u.color}" ${l&&l.length>0&&l[0].content===u.name?"selected":""}>${u.name}</option>`;r+="</select>",e=r;break;case"mSelect":if(i=t.options,r=`<select multiple contenteditable="${a}" readonly  ${a?"":"onmousedown='return false;' onkeydown='return false;'"} niopInput="mSelect" keyID="${n.value.keyID}" rowID="${s.id}" cellID="${n.value.id}">`,l=n.value.mSelect,i.length>0)for(const u of i)r+=`<option value="${u.name}" Color="${u.color}" ${l&&l.some(c=>c.content===u.name)?"selected":""}>${u.name}</option>`;else r+='<option value="" style="background-color: default;">[None]</option>';r+="</select>",e=r;break;case"checkbox":l=n.value.checkbox,e=`<input type="checkbox" ${l.checked?"checked":""} contenteditable="${a}" niopInput="${n.valueType}" keyID="${n.value.keyID}" rowID="${s.id}" cellID="${n.value.id}">`;break;default:l.content&&(e=q(l.content),e=`<span contenteditable="${a}" niopInput="${n.valueType}" keyID="${n.value.keyID}" rowID="${s.id}" cellID="${n.value.id}">${e}</span>`),e==="[None]"&&(e=`<span contenteditable="${a}" niopInput="${n.valueType}" keyID="${n.value.keyID}" rowID="${s.id}" cellID="${n.value.id}"> </span>`);break}return e},Xe=e=>{throw new Error("Function not implemented.")};module.exports=K})();
