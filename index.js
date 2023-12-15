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
 */(()=>{"use strict";var B={};B.d=(o,e)=>{for(var t in e)B.o(e,t)&&!B.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:e[t]})},B.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),B.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var L={};B.r(L),B.d(L,{NiopTable:()=>P,default:()=>k});const w=require("siyuan");var S=(o,e,t)=>new Promise((n,i)=>{var s=a=>{try{r(t.next(a))}catch(c){i(c)}},l=a=>{try{r(t.throw(a))}catch(c){i(c)}},r=a=>a.done?n(a.value):Promise.resolve(a.value).then(s,l);r((t=t.apply(o,e)).next())});class oe{constructor(){this.creatCommands=e=>{e.protyleSlash.push({filter:[],html:'<div class="b3-list-item__first"><span class="b3-list-item__text">Kramdown</span><span class="b3-list-item__meta">TABLE</span></div>',id:"niop-getCommand-getBlockKramdown",callback:t=>{const n=t.protyle.breadcrumb.id;O(n,i=>{console.log(i)}),t.insert("<span></span>")}},{filter:[],html:'<div class="b3-list-item__first"><span class="b3-list-item__text">getBlockDOM</span><span class="b3-list-item__meta">TABLE</span></div>',id:"niop-getCommand-getBlockDOM",callback:t=>{const n=t.protyle.breadcrumb.id;K(n,i=>{console.log(i)}),t.insert("<span></span>")}},{filter:[],html:'<div class="b3-list-item__first"><span class="b3-list-item__text">niopDebug</span><span class="b3-list-item__meta">TABLE</span></div>',id:"niop-getCommand-debugDialog",callback:t=>{const n=t.protyle.breadcrumb.id;t.insert("<span></span>");const i=new w.Dialog({title:`\u6B63\u5728\u7F16\u8F91 ${n}`,content:`
                        <div class="b3-dialog__content">
                        <div class="fn__hr"></div>
                        <div>DataBae ID:</div>
                        <div class="fn__hr"></div>
                        <input type="text" id = "niopIDBox">
                        <div class="fn__hr"></div>
                        <div class="fn__hr"></div>
                        <div>RenderMethod:</div>
                        <div class="fn__hr"></div>
                        <div class="renderMethod">
                          <button class="niopRenderSelect" id = "niopButton1" style="display: inline-block;" aria-label="\u6E32\u67D3\u4E3A\u5361\u7247\u89C6\u56FE">getRaw</button>
                          <button class="niopRenderSelect" id = "niopButton2" style="display: inline-block;" aria-label="\u6570\u636E\u5C06\u6309\u5217\u8FDB\u884C\u6E32\u67D3">GetDom</button>
                          <button class="niopRenderSelect" id = "niopButton3" style="display: inline-block;" aria-label="\u6570\u636E\u5C06\u6309\u7167\u884C\u8FDB\u884C\u6E32\u67D3">av\u5757\u6570\u636E</button>
                        </div>
                        <div class="fn__hr"></div>
                        <div class="fn__hr"></div>
                        <div>json:</div>
                        <div id = "jsonstring"></div>
                        </div>        
                    `,width:"360px",height:"440px",destroyCallback:()=>{e.saveData("niopDebugDialogInput1",s.value)}}),s=i.element.querySelector("#niopIDBox");e.loadData("niopDebugDialogInput1").then(l=>{s.value=l}),i.element.querySelector("#niopButton1").addEventListener("click",()=>{O(s.value,l=>{console.log(l)})}),i.element.querySelector("#niopButton2").addEventListener("click",()=>{K(s.value,l=>{console.log(l)})}),i.element.querySelector("#niopButton3").addEventListener("click",()=>{R(s.value,l=>{l.result&&C(l.value,r=>{console.log(r.data)})})})}},{filter:[],html:'<div class="b3-list-item__first"><span class="b3-list-item__text">niopDebug</span><span class="b3-list-item__meta">TABLE</span></div>',id:"niop-getCommand-AVdebugDialog",callback:t=>S(this,null,function*(){console.log("\u5F53\u524D\u7B14\u8BB0\u4E3A"+t.protyle.notebookId);const n=t.protyle.breadcrumb.id;t.insert("<span></span>");const i=new w.Dialog({title:`\u6B63\u5728\u7F16\u8F91 ${n}`,content:`
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
                        <div>RenderMethod:</div>
                        <div class="fn__hr"></div>
                        <div class="renderMethod">
                          <button class="niopRenderSelect" id = "niopButton1" style="display: inline-block;">\u65B0\u5EFA\u4E00\u884C</button>
                          <button class="niopRenderSelect" id = "niopButton2" style="display: inline-block;" >\u6700\u540E\u4E00\u4E2A\u8868\u683C\u5199\u5165123</button>
                          <button class="niopRenderSelect" id = "niopButton3" style="display: inline-block;">\u65B0\u5EFA\u6587\u6863\u7136\u540E\u5199\u5165\u5230\u6570\u636E\u5E93</button>
                          <button class="niopRenderSelect" id = "niopButton4" style="display: inline-block;">\u6570\u636E\u5E93\u6570\u636E\u89E3\u6790</button>
                          <button class="niopRenderSelect" id = "niopButton5" style="display: inline-block;">Tabl\u5BFC\u5165DateBase</button>
                        </div>
                        <div class="fn__hr"></div>
                        <div class="fn__hr"></div>
                        <div>json:</div>
                        <div id = "jsonstring"></div>
                        </div>        
                    `,width:"360px",height:"440px",destroyCallback:()=>{e.saveData("niopDebugDialog2Input1",s.value),e.saveData("niopDebugDialog2Input2",l.value)}}),s=i.element.querySelector("#niopIDBox1"),l=i.element.querySelector("#niopIDBox2");e.loadData("niopDebugDialog2Input1").then(r=>{s.value=r}),e.loadData("niopDebugDialog2Input2").then(r=>{l.value=r}),i.element.querySelector("#niopButton1").addEventListener("click",()=>{R(s.value,r=>{r.result&&C(r.value,a=>{console.log(a),ne(a.data,t)})})}),i.element.querySelector("#niopButton2").addEventListener("click",()=>{R(s.value,r=>{r.result&&C(r.value,a=>{const c=a.data,u=c.view.rows[c.view.rows.length-1],d=u.cells[u.cells.length-2],h=d.value,f=r.value,g=u.id,m=d.id,D={[h.type]:{content:"123"}};(0,w.fetchPost)("/api/av/setAttributeViewBlockAttr",{avID:f,keyID:h.keyID,rowID:g,cellID:m,value:D})})})}),i.element.querySelector("#niopButton3").addEventListener("click",()=>{R(s.value,r=>{r.result&&C(r.value,a=>{a.code=="0"&&ie(t,a.data)})})}),i.element.querySelector("#niopButton4").addEventListener("click",()=>{R(s.value,r=>{r.result&&C(r.value,a=>{const c=new q(a.data.view);console.log(c.getCellData("B3","\u6587\u672C")),console.log(c.getCellData("B2","\u6587\u672C")),console.log(c.getCellData("B1","\u6587\u672C"))})})}),i.element.querySelector("#niopButton5").addEventListener("click",()=>{W(s.value,l.value,t)})})},{filter:[],html:'<div class="b3-list-item__first"><svg class="b3-menu__icon " style=""><use xlink:href="#iconTable"></use></svg><span class="b3-list-item__text">'+e.i18n.niopimportTool+'</span><span class="b3-list-item__meta">TABLE</span></div>',id:"niop-getCommand-AVdebugDialog",callback:t=>S(this,null,function*(){console.log(`${e.i18n.DataBaseImportToolDes}`+t.protyle.notebookId);const n=t.protyle.breadcrumb.id;t.insert("<span></span>");const i=new w.Dialog({title:`${e.i18n.DataBaseImportToolDes}`,content:`
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
                    `,width:"360px",height:"440px",destroyCallback:()=>{e.saveData("niopTID_AVID",s.value),e.saveData("niopTID_TableID",l.value)}}),s=i.element.querySelector("#niopIDBox1"),l=i.element.querySelector("#niopIDBox2"),r=i.element.querySelector("#niopButton5");r.textContent=e.i18n.import,e.loadData("niopTID_AVID").then(a=>{s.value=a}),e.loadData("niopTID_TableID").then(a=>{l.value=a}),r.addEventListener("click",()=>{W(s.value,l.value,t)})})})}}}function O(o,e=null){(0,w.fetchPost)("/api/block/getBlockKramdown",{id:o},t=>{e&&e(t)})}function K(o,e=null){(0,w.fetchPost)("/api/block/getBlockDOM",{id:o},t=>{e&&e(t)})}function C(o,e=null){(0,w.fetchPost)("/api/av/renderAttributeView",{id:o},t=>{e&&e(t)})}const R=(o,e=null)=>{(0,w.fetchPost)("/api/block/getBlockKramdown",{id:o},t=>{const n=t.data.kramdown,i=/data-av-id="([^"]+)"/,s=n.match(i);if(!s){console.log("No av-id"),e&&e({result:!1,value:""});return}e&&e({result:!0,value:s[1]})})};function se(){return globalThis.Lute.NewNodeID()}const ne=(o,e,t=null)=>{const n=o.id,i=[se()];let s="";o.view.rows.length>0&&(s=o.view.rows[o.view.rows.length-1].id);const l=[{action:"insertAttrViewBlock",avID:n,previousID:s,srcIDs:i,isDetached:!0}];console.log(`ac:${n} \u65B0id:${i} \u524D\u4E00\u7EA7id${s}  do:`),e.protyle.getInstance().transaction(l,[{action:"removeAttrViewBlock",srcIDs:i,avID:n}]),t&&t(1)},ie=(o,e)=>{const n=o.protyle.contentElement.querySelector(".protyle-title.protyle-wysiwyg--attr").getAttribute("data-node-id"),i=o.protyle.notebookId;(0,w.fetchPost)("/api/filetree/getHPathByID",{id:n},s=>{const l=s.data+"/\u65B0\u5EFA\u6587\u68631";(0,w.fetchPost)("/api/filetree/createDocWithMd",{notebook:i,path:l,markdown:"tttt"},r=>{const a=o.protyle;setTimeout(()=>{a.getInstance().transaction([{action:"insertAttrViewBlock",avID:e.id,previousID:e.view.rows[e.view.rows.length-1].id,srcIDs:[r.data],isDetached:!1}],[{action:"removeAttrViewBlock",srcIDs:[r.data],avID:e.id}])},500)})})},le=(o,e,t,n,i,s=null)=>{let l=null;i.checkerResult.result&&(l=i.checkerResult.value,(0,w.fetchPost)("/api/av/setAttributeViewBlockAttr",{avID:o,keyID:e,rowID:t,cellID:n,value:l},r=>{s&&s(r)}))};function ae(o,e){const t=/\[([^\]]*)\]\(([^)]+)\)/,n=[];let i=0,s;for(;(s=t.exec(o))!=null;){i+=1;let l=s[1];l||(l="");const r=s[2],a=o[s.index-1]==="!",c={content:r,type:a?"image":"file",name:l};o=o.replace(a?"!"+s[0]:s[0],""),n.push(c)}return i===0?{result:!1}:{result:!0,value:{[e]:n}}}const W=(o,e,t)=>S(void 0,null,function*(){R(o,n=>{n.result&&C(n.value,i=>{O(e,s=>S(void 0,null,function*(){if(s.code=="0"){let l=!1;const r=p=>S(void 0,null,function*(){l||(l=!0,(0,w.fetchPost)("/api/notification/pushMsg",{msg:p,data:30}),yield new Promise(v=>setTimeout(v,100)),l=!1)}),a=new ue(s.data.kramdown);if(a.duplicatesRow){console.log(a.keyWorlds),(0,w.fetchPost)("/api/notification/pushErrMsg",{msg:"table have duplicates name",data:1e3});return}let c=new q(i.data.view);if(c.duplicatesRow){(0,w.fetchPost)("/api/notification/pushErrMsg",{msg:"database have duplicates name",data:1e3});return}if(i.data.view.filters.length>0){(0,w.fetchPost)("/api/notification/pushErrMsg",{msg:"table have filters,must have none filters avaliable",data:1e3});return}const u=[],d=[],h=[],f=[];if(a.cells[0].forEach((p,v)=>{c.columnIndexMap[p.content]!=null&&p.content!=""&&v!=0&&u.push({col:v,name:p.content})}),u.length===0)return;for(let p=1;p<a.cells.length;p++){const v={name:a.cells[p][0].content,row:p},b=c.getCellData(v.name);h.push(v),b.result||d.push(v)}let g=!0,m=0;const I=t.protyle.contentElement.querySelector(".protyle-title.protyle-wysiwyg--attr").getAttribute("data-node-id"),T=t.protyle.notebookId,_=i.data,y=[];if(d.length>0){m=d.length;let p=0;console.log("creat new note"+d.length);const v=new Date,b=`import${v.getFullYear()}_${v.getMonth()}_${v.getDay()}_${v.getHours()}_${v.getMinutes()}`;for((0,w.fetchPost)("/api/filetree/getHPathByID",{id:I},E=>S(void 0,null,function*(){(0,w.fetchPost)("/api/filetree/createDocWithMd",{notebook:T,path:E.data+"/"+b,markdown:`import at ${v.getUTCDate()}`},A=>S(void 0,null,function*(){for(const te of d){p++;const De=E.data+"/"+b+"/"+te.name;for(console.log("creat new note "+te.name),(0,w.fetchPost)("/api/filetree/createDocWithMd",{notebook:T,path:De,markdown:"tttt"},H=>{y.push(H.data),m--,p--});p>2;)yield new Promise(H=>setTimeout(H,250))}}))}));m>0;)yield new Promise(E=>setTimeout(E,200)),r("wait for creat"+m);r("note creat over"+d.length)}if(yield new Promise(p=>setTimeout(p,250)),y.length>0){const p=t.protyle,v=_.view.rows.length>0?_.view.rows[_.view.rows.length-1].id:"";p.getInstance().transaction([{action:"insertAttrViewBlock",avID:_.id,previousID:v,srcIDs:y,isDetached:!1}],[{action:"removeAttrViewBlock",srcIDs:y,avID:_.id}]),yield new Promise(E=>setTimeout(E,1500)),g=!0;let b=i;for(C(n.value,E=>{b=E,g=!1});g;)yield new Promise(E=>setTimeout(E,200)),r("wait for av reload"+m);yield new Promise(E=>setTimeout(E,200)),console.log(b),i=b}m=u.length*h.length,c=new q(i.data.view);for(const p of u)for(const v of h){const b=c.getCellData(v.name,p.name,a.cells[v.row][p.col].content);b.result&&(b.reX=v.row,b.reY=p.col,b.content=a.cells[v.row][p.col].content,f.push(b))}yield new Promise(p=>setTimeout(p,200)),m=0;for(let p=0;p<f.length;p++){m++;const v=f[p];for(v.checkerResult.result?(le(n.value,v.value.keyID,v.rowsID,v.value.id,v,()=>{m--}),r("UPDATE"+p+"/"+f.length)):m--;m>0;)yield new Promise(b=>setTimeout(b,20))}}}))})})});class q{constructor(e){this.duplicatesRow=!1,this.lateKeyName="",this.laterowIndex=0,this.data=e,this.preprocessData()}preprocessData(){const e=this.data.columns.find(t=>t.type==="block");this.keyColumnIndex=this.data.columns.indexOf(e),this.columnIndexMap={},this.rowValueChecker={},this.data.columns.forEach((t,n)=>{this.columnIndexMap[t.name]=n,this.rowValueChecker[n]=re(t)}),this.rowIndexMap={},this.data.rows.forEach((t,n)=>{const i=t.cells[this.keyColumnIndex].value.block.content;i!=""&&(this.rowIndexMap[i]&&(console.log("block name duplicate "+i),this.duplicatesRow=!0),this.rowIndexMap[i]=n)})}getCellData(e,t="",n=""){if(e!=this.lateKeyName){if(this.laterowIndex=this.rowIndexMap[e],this.laterowIndex===void 0)return{result:!1};this.lateKeyName=e}if(t=="")return{result:!0};const i=this.columnIndexMap[t];if(i===void 0)return{result:!1};const s=this.data.rows[this.laterowIndex],l=s.cells[i],r=this.rowValueChecker[i],a=r(n,l.value,l.valueType);return{result:!0,value:l.value,checkerResult:a,column:this.data.columns[i],rowsID:s.id,keyName:e,columnName:t}}}const re=o=>{const e={};let t=M;switch(o.type){case"text":return $;case"date":return M;case"number":return ce;case"relation":return M;case"rollup":return M;case"select":return o.options.forEach(n=>{e[n.name]=n}),t=(n,i,s)=>{const l=e[n];let r=!1,a="",c="";if(!l)return a="input isnot in select options",{result:r,faliResult:a};const u=i.mSelect;if(u&&n==u[0].content)return a="the same as input",{result:r,faliResult:a};const d={mSelect:[l]};return c=`[${n}] -> [${u}]`,r=!0,{result:r,value:d,successLog:c}},t;break;case"block":return M;case"mSelect":return o.options.forEach(n=>{e[n.name]=n}),t=(n,i,s)=>{const l=e[n];let r=!1,a="",c="";if(!l)return a="input isnot in select options",{result:r,faliResult:a};let u={mSelect:[l]};const d=i.mSelect;if(d){let h=!1;for(let f=0;f<d.length;f++)if(d[f].content===n){h=!0;break}return h&&(a="the same as input"),{result:r,faliResult:a}}return d&&(u={mSelect:[...i.mSelect,...l]}),c=`[${n}] -> [${d}]`,r=!0,{result:r,value:u,successLog:c}},t;break;case"url":return $;case"email":return $;case"phone":return $;case"mAsset":return de;default:return M}},$=(o,e,t)=>{const n=e[t].content;let i=!1,s="",l="";if(o==n)return s=`the same as input (${n})`,{result:i,faliResult:s};const r={[t]:{content:o}};return l=`[${o}] -> [${n}]`,i=!0,{result:i,value:r,successLog:l}},ce=(o,e,t)=>{const n=e.number.content;let i=!1,s="",l="";if(parseFloat(o)==n)return s=`the same as input (${n})`,{result:i,faliResult:s};const r={number:{content:parseFloat(o)}};return l=`[${o}] -> [${n}]`,i=!0,{result:i,value:r,successLog:l}},M=(o,e,t)=>({result:!1,faliResult:`Unkonw type [${t}] value [${o}]`}),de=(o,e,t)=>{const n=ae(o,t);let i=!1,s="",l="";if(!n.result)return s=`input isnot asset (${o})`,{result:i,faliResult:s};const r=n.value[t];let a=[],c=[];if(e.mAsset){if(a=r.filter(u=>!e.mAsset.some(h=>h.content===u.content)),a.length===0)return s=`${o} -> already in database `,{result:i,faliResult:s};l+=`asset ${a.length} ${a.map(u=>u.content).join(" ")} -> ${e.mAsset?e.mAsset.length:"none"}`,e.mAsset&&e.mAsset.length>0&&(a=[...e.mAsset,...a]),n.value=a}return c=n.value,i=!0,{result:i,value:c,successLog:l}};class ue{constructor(e){this.cells=[],this.end="",this.duplicatesRow=!1,this.keyWorlds={},this.kmdCellRegex=/{:\s*(.+?)\s*}(.*?)$/,this.kmdCell=t=>{const n=t.match(this.kmdCellRegex);return n?{content:n[2].trim()?n[2]:""}:{content:t}},this.parseTable(e)}parseTable(e){const t=e.split(`
`);this.end=t[t.length-1],t.slice(0,-1).map(i=>i.split(new RegExp("(?<!\\\\)\\|")).map(s=>s.replace(/\\\|/g,"|"))).forEach((i,s)=>{this.cells[s]=[],i.forEach((l,r)=>{this.cells[s][r]=this.kmdCell(l)}),this.cells[s]=this.cells[s].slice(1,-1),this.keyWorlds[this.cells[s][0].content]?(this.keyWorlds[this.cells[s][0].content]+=1,this.duplicatesRow=!0):this.keyWorlds[this.cells[s][0].content]=1}),this.cells=this.cells.slice(0,1).concat(this.cells.slice(2))}}function Ee(o,e,t=null){fetchPost("/api/notification/pushMsg",{msg:o,data:e},n=>{t&&t(n)})}function Ae(o,e,t=null){fetchPost("/api/notification/pushErrMsg",{msg:o,data:e},n=>{t&&t(n)})}class he{constructor(e){this.defaulMenus=`
<div class="niopMenus" id="niopMenus" style="margin: 16px 16px 0px 24px;">
    <span aria-label="~~" data-position="right" class="protyle-title__icon ariaLabel">
        <svg><use xlink:href="#iconFile"></use></svg>
    </span>
    <div class="protyle-attr" id="niopSettingPage"></div>
    <div class="protyle-attr" id="niopQuickBar">
        <span id="niopHoldReload" aria-label="~~" data-position="right" class="b3-tooltips__nw b3-tooltips protyle-icon ariaLabel niop-icon">
            <svg><use xlink:href="#iconFile"></use></svg>
        </span>   
        <span id="niopOpenSetting" aria-label="~~" data-position="right" class="b3-tooltips__nw b3-tooltips protyle-icon ariaLabel niop-icon">
            <svg><use xlink:href="#iconFile"></use></svg>
        </span>   
    </div>
</div>
    `;const t=document.createElement("div");t.innerHTML=this.defaulMenus,t.style.position="fixed",t.style.left="0px",t.style.top="0px",e.appendChild(t),this.findAndRecordElements(t),this.addEventsToContentBlocks(e)}findAndRecordElements(e){this.niopMenus=e.querySelector("niopMenus"),this.niopSettingPage=e.querySelector("#niopSettingPage"),this.niopQuickBar=e.querySelector("#niopQuickBar"),this.niopQuickBar.addEventListener("mouseleave",()=>{this.fadeTimeIDQuickBar||(this.fadeTimeIDQuickBar=setTimeout(()=>{this.niopQuickBar.classList.add("hide"),this.fadeTimeIDQuickBar=null},1500))}),this.niopQuickBar.addEventListener("mouseenter",()=>{this.fadeTimeIDQuickBar==null&&(clearTimeout(this.fadeTimeIDQuickBar),this.fadeTimeIDQuickBar=null),this.niopQuickBar.classList.remove("hide")})}addEventsToContentBlocks(e){e.querySelectorAll("[custom-nioptable]").forEach(n=>{n.addEventListener("mouseenter",()=>{this.showQuickBar(n)}),n.addEventListener("mouseleave",()=>{this.hideQuickBar()})})}showQuickBar(e){this.fadeTimeIDQuickBar&&(clearTimeout(this.fadeTimeIDQuickBar),this.fadeTimeIDQuickBar=null);const t=this.niopQuickBar;t.classList.remove("hide");const n=e.getBoundingClientRect();t.style.top=n.top+"px",t.style.left=n.left+n.width+"px",console.log(`\u9F20\u6807\u79FB\u5165 top${n.top} left${n.left} right${n.right}`),console.log(n)}hideQuickBar(){this.fadeTimeIDQuickBar&&(clearTimeout(this.fadeTimeIDQuickBar),this.fadeTimeIDQuickBar=null),this.fadeTimeIDQuickBar=setTimeout(()=>{this.fadeTimeIDQuickBar=null},1500)}}var x=(o,e,t)=>new Promise((n,i)=>{var s=a=>{try{r(t.next(a))}catch(c){i(c)}},l=a=>{try{r(t.throw(a))}catch(c){i(c)}},r=a=>a.done?n(a.value):Promise.resolve(a.value).then(s,l);r((t=t.apply(o,e)).next())});const G=!0,j="menu-config",Ie="custom_tab",_e="dock_tab",V=class extends w.Plugin{onload(){V.Ini=this,this.eventBus.on("click-blockicon",this.blockIconEvent.bind(this)),this.protyleSlash=[{filter:["table","data table","database table","niop","\u8868\u683C","\u6570\u636E\u8868\u683C","\u6570\u636E\u5E93\u8868\u683C","shujubiaoge"],html:`<div class="b3-list-item__first"><svg class="b3-menu__icon " style=""><use xlink:href="#iconTable"></use></svg><span class="b3-list-item__text">${this.i18n.dTable}</span><span class="b3-list-item__meta">TABLE</span></div>`,id:"creatniopDateTable",callback(l){return x(this,null,function*(){const r=l.protyle.breadcrumb.id,a=l.protyle.contentElement.querySelector(`[data-node-id="${r}"]`),c=l.protyle.transactionTime;yield(d=>x(this,null,function*(){l.insert("<span></span>"),yield ee(r),U(a,r,l.protyle,200)}))(1)})}}];const o=document.createElement("div");o.innerHTML=`
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
<div id="niopToolbar" class="fn__none">
    <button onclick="console.log('Clicked!')">Log</button>
</div>
    `;const e=o.querySelector("#niopSelect"),t=o.querySelector("#niopSelect2"),n=o.querySelector("#niopInput"),i=o.querySelector("#niopSelect3"),s=o.querySelector("#niopToolbar");this.setting=new w.Setting({confirmCallback:()=>{this.saveData(j,{useAdvanceTools:e.value})}}),this.setting.addItem({title:`${V.Ini.i18n.useImportToll}`,createActionElement:()=>(this.loadData(j).then(l=>{l.useAdvanceTools&&(e.value=l.useAdvanceTools)}),o)}),console.log("DatabaseTable from niop ~"),this.loadData(j).then(l=>{l.useAdvanceTools&&new oe().creatCommands(this)})}onLayoutReady(){}onunload(){this.eventBus.off("click-blockicon",this.blockIconEvent.bind(this))}EventMenu(){}blockIconEvent({detail:o}){o.menu.addItem({iconHTML:'<svg class="b3-menu__icon " style=""><use xlink:href="#iconTable"></use></svg>',label:this.i18n.dTable,click:()=>{const e=o.blockElements[0],t=e.getAttribute("data-node-id");U(e,t,o.protyle,0)}})}switch_protyle(o){const e=o.detail.protyle.contentElement.querySelector(".protyle-title.protyle-wysiwyg--attr");if(!e)return;let t=e.getAttribute("niopStatu");if(t||(t="addToolBar",e.setAttribute("niopStatu",t)),t==="addToolBar"){const n=o.detail.protyle.contentElement.querySelectorAll(`[${V.ATTRNAME}]`),i=new he(o.detail.protyle.contentElement)}e.setAttribute("niopStatu","none")}};let k=V;k.OnRedner=!1,k.ATTRNAME="custom-nioptable";const Te=()=>{},U=(o,e,t,n=1e3)=>{const i=o,s=i.getAttribute("data-type");if(s!="NodeTable"&&s!="NodeHTMLBlock"){Z("\u53EA\u80FD\u4F7F\u7528\u5728Table\u4E0A",4e3);return}if(s==="NodeHTMLBlock"&&!i.getAttribute(k.ATTRNAME)){Z("\u6CA1\u6709\u539F\u59CB\u8868\u683C\u6570\u636E",4e3);return}const l=c=>{if(c.nodeID=e,c.tableNode=i,c.protyle=t,c.renderEditMethod===2||c.renderEditMethod<1){c.renderEditMethod=2;const u=[],d=c.tableNode.querySelector("colgroup");d&&d.querySelectorAll("col").forEach(f=>{const g=f.getBoundingClientRect().width,m=g?`${g}px`:"";u.push(m)}),c.colgroup=JSON.stringify(u),(0,w.fetchPost)("/api/block/getBlockKramdown",{id:c.nodeID},h=>x(void 0,null,function*(){c.renderEditMethod=2,c.setSourceTable(h.data.kramdown),yield ee(e),Q(c)}))}else Q(c)},r=c=>{const u=i.getAttribute(k.ATTRNAME),d=new P(u);n>10?setTimeout(()=>{l(d)},n):l(d)},a=c=>{const u=new P(""),d={[k.ATTRNAME]:u.getJson()};n>10?setTimeout(()=>{N(e,d,()=>{l(u)})},n):N(e,d,()=>{l(u)})};ge(e,k.ATTRNAME,r,a)},Be=o=>{const e=o,t=e.getAttribute("data-node-id"),n=e.getAttribute(k.ATTRNAME);if(!t){console.error("error with data-node-id ");return}const i=e.getElementsByClassName("protyle-attr"),s=document.createElement("div");s.setAttribute("contenteditable","false"),s.classList.add("niop-toolbar-container"),s.addEventListener("mouseenter",()=>{s.classList.remove("hide"),s.classList.add("show")}),s.addEventListener("mouseleave",()=>{s.classList.remove("show"),s.classList.add("hide")}),i[0].appendChild(s);const l=new P(n);l.nodeID=t,l.tableNode=e;const r=document.createElement("button");r.textContent="Toolbar",r.setAttribute("niopButton","showMenu"),r.setAttribute("contenteditable","false"),r.classList.add("niop-button"),s.appendChild(r),r.addEventListener("click",()=>{Q(l)});const a=document.createElement("button");a.textContent="Reload",a.setAttribute("niopButton","reload"),a.setAttribute("contenteditable","false"),a.classList.add("niop-button"),s.appendChild(a),a.addEventListener("click",()=>{ke(l)}),l.toolBarMenuContainer=s},Q=o=>{let e=!1;const t=b=>{e&&o.save(E=>{setTimeout(()=>{},200)})},n=new w.Dialog({title:`${k.Ini.i18n.OnEditSomthing_Table} : ${o.nodeID}`,content:`
      <div class="b3-dialog__content">
      <div class="fn__hr"></div>
      <div>${k.Ini.i18n.AVBlockID}:</div>
      <div class="fn__hr"></div>
      <input type="text" name="Dababase ID" id = "niopIDBox">
      <div class="fn__hr"></div>
      <div >${k.Ini.i18n.AVViewName}:</div>
      <div class="fn__hr"></div>
      <input type="text" name="Views Name" id = "niopIDBox2">
      <div class="fn__hr"></div>
      <div class="fn__hr"></div>
      <div>${k.Ini.i18n.RenderMethodAs}:</div>
      <div class="fn__hr"></div>
      <div class="renderMethod">
        <button class="niopRenderSelect" id = "niopRenderSelectCard" style="display: inline-block;" >${k.Ini.i18n.renderCard}</button>
        <button class="niopRenderSelect" id = "niopRenderSelectRight" style="display: inline-block;">${k.Ini.i18n.renderRight}</button>
        <button class="niopRenderSelect" id = "niopRenderSelectDown" style="display: inline-block;" >${k.Ini.i18n.renderBelow}</button>
      </div>
      <div class="fn__hr"></div>
      <div class="fn__hr"></div>
      <div>DisPlay as:</div>
      <div class="fn__hr"></div>
      <div class="niopRenderMethodDis">
      <div class="niopRenderSelect" id = "niopRenderAsEditor" aria-label="">${k.Ini.i18n.currentDisPlayMethod_Editor}</div>
      <div class="niopRenderSelect" id = "niopRenderAsDataBase" aria-label="">${k.Ini.i18n.currentDisPlayMethod_DateBase}</div>
      </div>
      <div class="fn__hr"></div>
      <div class="fn__hr"></div>
      <div>Switch Render:</div>
      <div class="fn__hr"></div>
      <div class="niopLoadMethod">
      <button class="niop-button" id = "niopEditTable" aria-label="">${k.Ini.i18n.currentDisPlayMethod_Editor}</button>
      <span style="width:120px;height:60px;"><span>
      <button class="niop-button" id = "niopReloadAll" aria-label="">${k.Ini.i18n.ReloadAll}</button>
      </div>
      <div class="fn__hr"></div>
      <div style="display:none">Edit</div>
      <div class="fn__hr"></div>

      <button class="niop-button hide" id = "niopSetFiltter" >SetFiltter</button>
      <button class="niop-button hide" id = "niopCleanFiltter" >cleanFiltter</button>
      <div class="fn__hr" style="display:none"></div>
      <div class="fn_none" style="display:none">json:</div>
      <div id = "jsonstring" class="fn_none" style="display:none"></div>
      </div>        
  `,width:"360px",height:"480px",destroyCallback:t}),i=n.element.querySelector("#jsonstring"),s=n.element.querySelector("#niopIDBox"),l=n.element.querySelector("#niopIDBox2"),r=n.element.querySelector("#niopRenderSelectCard"),a=n.element.querySelector("#niopRenderSelectRight"),c=n.element.querySelector("#niopRenderSelectDown"),u=n.element.querySelector("#niopEditTable"),d=n.element.querySelector("#niopReloadAll"),h=n.element.querySelector("#niopRenderAsEditor"),f=n.element.querySelector("#niopRenderAsDataBase"),g=n.element.querySelector("#niopSetFiltter"),m=n.element.querySelector("#niopCleanFiltter"),D=()=>{i.innerText=o.getJson()},I=()=>{r.classList.remove("select"),a.classList.remove("select"),c.classList.remove("select"),h.classList.remove("select"),f.classList.remove("select"),o.renderMethod===1?r.classList.add("select"):o.renderMethod===2?a.classList.add("select"):o.renderMethod===3&&c.classList.add("select"),o.renderEditMethod===1&&f.classList.add("select"),o.renderEditMethod===2&&h.classList.add("select")},T=()=>{const b=[{action:"setAttrViewFilters",avID:o.resourceAVID,data:o.hotReloadSetting.filters},{action:"setAttrViewSorts",avID:o.resourceAVID,data:o.hotReloadSetting.sorts}];o.protyle.getInstance().transaction(b)},_=()=>{o.renderEditMethod=2,h.classList.add("select"),f.classList.remove("select");const b=F(o.sourceTable,["fold","updated"]);z(o.nodeID,b,E=>{}),k.OnRedner=!1,e=!0,D()},y=b=>{o.resourceAVID!=""&&(h.classList.remove("select"),f.classList.add("select"),pe(o,b))},p=()=>{J(o,b=>{if(!b){console.log("no av on the block:"+o.resourceID);return}e=!0,o.renderEditMethod=1,y(!1),D()})},v=()=>{const b=o.resourceAVID;J(o,E=>{if(!E){console.log("no av on the block"+o.resourceID);return}o.resourceAVID!=b?y(!1):y(!0),D()})};s.value=o.resourceID,l.value=o.resourceAVViewName,J(o,()=>{D()}),s.addEventListener("input",()=>{o.resourceID=s.value,e=!0}),l.addEventListener("input",()=>{o.resourceAVViewName=l.value,e=!0}),r.addEventListener("click",()=>{o.renderMethod=1,e=!0,D(),I()}),a.addEventListener("click",()=>{o.renderMethod=2,e=!0,D(),I()}),c.addEventListener("click",()=>{o.renderMethod=3,e=!0,D(),I()}),u.addEventListener("click",_),d.addEventListener("click",p),s.innerText=o.resourceID,I()},pe=(o,e=!0)=>x(void 0,null,function*(){if(k.OnRedner){X(`${k.Ini.i18n.pleaseWaitOnRendering}`,3e3);return}k.OnRedner=!0,(0,w.fetchPost)("/api/av/renderAttributeView",{id:o.resourceAVID},t=>x(void 0,null,function*(){const n=()=>{G&&(console.log("niopTable:"),console.log(o));const s=new ve(o.sourceTable,o);let l="";switch(o.renderMethod){case 1:s.direction={card:1,x:0,y:0},s.makeToCard(o),l=s.RebuildAsCard(o);break;case 2:s.direction={card:0,x:1,y:0},s.makeToCard(o),l=s.Rebuild(o);break;case 3:s.direction={card:0,x:0,y:1},s.makeToCard(o),l=s.Rebuild(o);break;default:X(`${k.Ini.i18n.mustSelectOneRenderMethod}`,5e3);break}G&&(console.log("\u9884\u5904\u7406\u8868\u683C"),console.log(s),console.log(l)),z(o.nodeID,l),o.renderEditMethod=1,k.OnRedner=!1};e=!1;let i="";if(o.resourceAVViewName!=""&&t.data.view.name!=o.resourceAVViewName&&t.data.views.length>1){for(let s=0;s<t.data.views.length;s++){const l=t.data.views[s];if(l.name===o.resourceAVViewName){e=!0,i=l.id;break}}e||console.log("error view name")}e?(0,w.fetchPost)("/api/av/renderAttributeView",{id:o.resourceAVID,viewID:i},l=>{o.titles=o.deepCopy(l.data.view.columns),o.rows=l.data.view.rows,o.avTable=l,n()}):(o.titles=o.deepCopy(t.data.view.columns),o.rows=t.data.view.rows,o.avTable=t,n())}))}),Se=(o,e=null)=>{fetchPost("/api/av/renderAttributeView",{id:o.resourceAVID},t=>{o.titles=o.deepCopy(t.data.view.columns),o.rows=t.data.view.rows,o.avTable=t,o.setting.filters=Object.assign(t.data.view.filters),o.setting.sorts=Object.assign(t.data.view.sorts),e&&e()})},Ce=o=>{console.log(o)};class P{constructor(e){this.renderMethod=-1,this.renderEditMethod=2,this.resourceID="",this.resourceAVID="",this.resourceAVViewName="",this.setting={filters:[],sorts:[]},this.hotReloadSetting={filters:[],sorts:[]},this.titles=[{id:"",name:"",type:"",icon:"",wrap:!1,hidden:!1,pin:!1,width:"68px",numberFormat:"",template:""}],this.sourceTable="",this.colgroup="",this.nodeID="";try{const t=JSON.parse(e);this.renderMethod=t.renderMethod||this.renderMethod,this.resourceID=t.resourceID||this.resourceID,this.resourceAVID=t.resourceAVID||this.resourceAVID,this.sourceTable=this.decode(t.sourceTable)||this.sourceTable,this.renderEditMethod=t.renderEditMethod||this.renderEditMethod,this.hotReloadSetting=t.hotReloadSetting||this.hotReloadSetting,this.colgroup=this.decode(t.colgroup)||this.colgroup,this.resourceAVViewName=t.resourceAVViewName||this.resourceAVViewName}catch(t){console.log("Error parsing JSON:",t),this.save(n=>{setTimeout(()=>{},200)})}}clean(){this.protyle=null}getJson(){return JSON.stringify({renderMethod:this.renderMethod,resourceID:this.resourceID,resourceAVID:this.resourceAVID,sourceTable:this.encode(this.sourceTable),renderEditMethod:this.renderEditMethod,hotReloadSetting:this.hotReloadSetting,colgroup:this.encode(this.colgroup),resourceAVViewName:this.resourceAVViewName})}encode(e){const t=encodeURIComponent(e);return window.btoa(t)}decode(e){try{const t=atob(e);return decodeURIComponent(t)}catch(t){return console.error("Error decoding string:",t),""}}deepCopy(e){return JSON.parse(JSON.stringify(e))}setSourceTable(e){const t=/custom-nioptable="[^"]*"/g,n=e.replace(t,"");this.sourceTable=n}save(e=null){if(this.nodeID!=""){const t={[k.ATTRNAME]:this.getJson()};e?N(this.nodeID,t,n=>{e(n)}):N(this.nodeID,t)}}}const xe=()=>{const o=`|{: colspan="4" rowspan="1"}\u6807\u9898|{: colspan="1" class="fn__none"}|{: colspan="1" class="fn__none"}|{: colspan="1" class="fn__none"}|
| :-------------------------------: | :--------------------------------: | :--------------------------------: | :--------------------------------: |
|{: colspan="1"}\u5934\u50CF|{: colspan="1"}\u540D\u5B57|{: colspan="1"}\u7B49\u7EA7|\u6280\u80FD|
|..(icon)|..(name)|..(level)|..(skill)|
{: colgroup="width: 94px;|width: 121px;|width: 95px;|width: 116px;" custom-nioptable="123" fold="0" id="20231120114455-g1jmigv" updated="20231130193916"}`,t=o.split(`
`).slice(0,-1).map(i=>i.split(new RegExp("(?<!\\\\)\\|")).map(s=>s.replace(/\\\|/g,"|"))),n=[[{content:"",config:""}]];t.forEach((i,s)=>{n[s]=[],i.forEach((l,r)=>{n[s][r]=Y(l)}),n[s]=n[s].slice(1,-1)}),console.log(o),console.log(n)},me=/{:\s*(.+?)\s*}/,Y=o=>{const e=o.match(me);if(e){const t=o.replace(e[0],""),n=fe(e[1]),i=n.attributes,s=!!(i.colspan&&i.colspan>1||i.rowspan&&i.rowspan>1);return{content:t,config:i,configNo:n.length,resize:s,valueType:"",colspan:i.colspan?parseInt(i.colspan):1,rowspan:i.rowspan?parseInt(i.rowspan):1}}else return{content:o,config:{},configNo:0,resize:!1,valueType:"",colspan:1,rowspan:1}};function fe(o){const e=/(\S+)=["']([^"']+)["']/g,t=o.match(e);if(!t)return{};const n={};let i=0;return t.forEach(s=>{const[l,r,a]=s.match(/(\S+)=["']([^"']+)["']/);n[r]=a,i++}),{attributes:n,length:i}}class ve{constructor(e,t){this.cells=[],this.dashRowNum=1,this.colgroup=[],this.rowsStyleStrs=[],this.end="",this.cards=[],this.direction={card:0,x:0,y:0},this.curCell={card:0,x:0,y:0},this.parseTable(e,t)}parseTable(e,t){const n={};let i=!1;const s=e.split(`
`);this.end=s[s.length-1],s.slice(0,-1).map(r=>r.split(new RegExp("(?<!\\\\)\\|")).map(a=>a.replace(/\\\|/g,"|"))).forEach((r,a)=>{this.cells[a]=[];let c=!1;n[a]||(n[a]=0),r.forEach((u,d)=>{if(this.cells[a][d]=Y(u),!i&&this.cells[a][d].rowspan>1){c=!0;for(let h=0;h<this.cells[a][d].rowspan;h++)n[a+h]?n[a+h]+=1:n[a+h]=1}}),!i&&!c&&n[a]===0&&(i=!0,this.dashRowNum<a&&(this.dashRowNum=a)),this.cells[a]=this.cells[a].slice(1,-1)}),this.getRawColgroup(t),this.getMdSettingFromTable()}removeEmpetyInputRows(e){const t=e.avTable.data.view;let n=-1;for(let s=0;s<t.columns.length;s++)if(t.columns[s].type==="block"){n=s;break}const i=[];for(let s=0;s<t.rows.length;s++)t.rows[s].cells[n].value.block.content===""&&i.push(s);for(let s=i.length-1;s>=0;s--)t.rows.splice(i[s],1)}caculateColAndRowGroup(e){this.cells.forEach((t,n)=>{t.forEach((i,s)=>{switch(e.renderMethod){case 1:break;case 2:i.colspan>1&&t.length==s+i.colspan&&(i.colspan+=e.rows.length-1,i.config.colspan=i.colspan);break;case 3:i.rowspan>1&&this.cells.length==n+i.rowspan+1&&(i.rowspan+=e.rows.length,i.config.rowspan=i.rowspan);break;default:break}})})}Rebuild(e){const t=this.cards.map(s=>s.map(l=>"|"+l.map(r=>{let a="";return r.configNo>0&&(a="{: "+Object.entries(r.config).map(([c,u])=>`${c}="${u}"`).join("  ")+"}"),a+r.content}).join("|")).join(`|
`)).join("");this.end=e.renderMethod===2?F(this.end,["fold","id","updated","colgroup"]):F(this.end,["fold","id","updated"]);let n=' id="'+e.nodeID+'" ';e.renderMethod===2&&(n+=' colgroup="'+this.colgroup.map(s=>"width: "+s+";").join("|")+'" ');const i=this.end;return this.end=i.slice(0,2)+n+i.slice(2),`${t}
${this.end}`}RebuildAsCard(e){const t=F(this.end,["fold","id","updated","colgroup"]),n=` id="${e.nodeID}"  data-type="NodeHTMLBlock" `;this.end=t.slice(0,2)+n+t.slice(2);const i=be(this.cards.length,this.cells.length-1,this.colgroup,this.rowsStyleStrs,e),s=[];return this.cards.forEach((l,r)=>{l.forEach((a,c)=>{if(this.dashRowNum!=c){const u=c>this.dashRowNum?c-1:c;a.forEach((d,h)=>{const f=i.cells[r][u][h];if(f.innerHTML=d.content,d.configNo>0){if(d.colspan>1||d.rowspan>1)for(let g=0;g<d.colspan;g++)for(let m=0;m<d.rowspan;m++)g===0&&m===0||s.push(i.cells[r][u+m][h+g]);if(d.colspan>1){f.setAttribute("colspan",`${d.colspan}`);let g=parseInt(f.style.width);for(let m=1;m<d.colspan;m++)g+=parseInt(i.cells[r][u][h+m].style.width);f.style.width=g+"px"}d.rowspan>1&&f.setAttribute("rowspan",`${d.rowspan}`)}})}}),s.forEach(a=>{a.className="fn__none"})}),`<div>${i.body.innerHTML}</div>
${this.end}`}makeToCard(e){this.cards=[],this.removeEmpetyInputRows(e),this.caculateColAndRowGroup(e);const t=this.cells[0].length,n=this.cells.length,i=e.titles.length,s=e.rows.length,l=this.cards,r={card:0,x:0,y:0},a=this.direction;if(a.card==1?(ye(this.cells),e.rows.forEach((h,f)=>{l[f]=e.deepCopy(this.cells)})):l[0]=e.deepCopy(this.cells),a.x===1){const h=l[0],f=this.colgroup[this.colgroup.length-1];for(let g=0;g<e.rows.length-1;g++)this.colgroup.push(f);for(let g=0;g<n;g++){const m=JSON.stringify(h[g][t-1]);e.rows.forEach((D,I)=>{I!=0&&h[g].push(JSON.parse(m))})}}if(a.y===1){const h=l[0],f=e.rows.length,g=h[0].length;let m=JSON.stringify(h[n-1]);const D=this.dashRowNum===n-1;D&&(m=JSON.stringify(h[n-2]));for(let I=1;I<f;I++)D?h.splice(h.length-1,0,JSON.parse(m)):h.push(JSON.parse(m))}const c=[],u=/\.\.\((.*?)\)/;this.cells.forEach((h,f)=>{h.forEach((g,m)=>{g.content.match(u)&&c.push({x:f,y:m})})}),e.titles.forEach((h,f)=>{if(h.name!=""){const g=`..(${h.name})`;c.forEach(m=>{const D=this.cells[m.x][m.y];if(new RegExp(g).test(D.content))for(let T=0;T<s;T++){const _=this.getOffsetCell(m,T),y=e.rows[T].cells[f];let p="[None Data]",v=y.value[y.valueType];switch(y.valueType){case"block":p=y.value.block.content;break;case"number":p=y.value.number.content;break;case"phone":p=y.value.phone.content;break;case"mAsset":if(y.value.mAsset&&(e.renderMethod===1?p=`<span class='imgDiv'><img src="${y.value.mAsset[0].content}"></span>`:p=`![image](${y.value.mAsset[0].content})`),y.value.mAsset){const b=y.value.mAsset.length;e.renderMethod===1?b===1?p=`<span class='imgDiv'><img src="${y.value.mAsset[0].content}"></span>`:p=`<span class='AssetContainer'>${y.value.mAsset.map(A=>A.type==="image"?`<span class='imgDiv'><img src='${A.content}' alt='${A.name}'></span>`:`<span class='fileDiv'><a href='${A.content}' title='${A.name}'>${A.name}</a></span>`).join("")}</span>`:b===1?p=y.value.mAsset[0].type==="image"?`![image](${y.value.mAsset[0].content})`:`![file](${y.value.mAsset[0].content})`:p=`${y.value.mAsset.map(A=>A.type==="image"?`![${A.name}](${A.content})`:`[${A.name}](${A.content})`).join("")}`}else p="[No Assets]";break;case"select":v=y.value.mSelect,v&&(p=v.length>0?v[0].content:"None Select");break;case"mSelect":v=y.value.mSelect,v&&(p=v.length>0?v.map(b=>b.content).join(","):"None Select");break;default:v.content&&(p=v.content);break}_.content=_.content.replace(g,p)}})}})}getOffsetCell(e,t){let n=0,i=e.x,s=e.y;return this.direction.card===1&&(n=t),this.direction.y===1&&(i+=t),this.direction.x===1&&(s+=t),this.cards[n][i][s]}getRawColgroup(e){this.colgroup=JSON.parse(e.colgroup)}getMdSettingFromTable(){const e=[];this.cells.forEach((t,n)=>{if(n!=this.dashRowNum){const i=t[0].content,s=/\.\.style\(([^)]*)\)/,l=i.match(s);if(l&&l[1]){const r=l[1];let a=l[1];a.length>1&&a.charAt(a.length-1)!==";"&&(a=a+";"),e.push(a),t[0].content=i.replace(l[0],"")}else e.push("")}}),this.rowsStyleStrs=e}}const J=(o,e=null)=>{(0,w.fetchPost)("/api/block/getBlockKramdown",{id:o.resourceID},t=>{const n=t.data.kramdown,i=/data-av-id="([^"]+)"/,s=n.match(i);if(s)o.resourceAVID!=s[1]&&(o.resourceAVID=s[1]);else{console.log("No av-id"),o.resourceAVID="",e&&e(!1);return}e&&e(!0)})},Re=(o,e=null)=>{fetchPost("/api/block/getBlockKramdown",{id:o.resourceID},t=>{const n=t.data.kramdown,i=/data-av-id="([^"]+)"/,s=n.match(i);if(s)o.resourceAVID!=s[1]&&(o.resourceAVID=s[1]);else{console.log("No av-id"),o.resourceAVID="",e&&e(!1);return}e&&e(!0)})},Me=o=>{};function N(o,e,t=null){const n=JSON.stringify({id:o,attrs:e});(0,w.fetchPost)("/api/attr/setBlockAttrs",{id:o,attrs:e},i=>{t&&t(i)})}function ge(o,e,t=null,n=null){const i={id:o};return(0,w.fetchPost)("/api/attr/getBlockAttrs",i,s=>{s.data[e]?t&&t(s.data[e]):n&&n(s)}),!1}function Ve(o,e){return x(this,null,function*(){const t={id:o};return fetchPost("/api/attr/getBlockAttrs",t,n=>{const i=n.data[e];return i||null}),null})}function Ne(o,e=null){fetchPost("/api/av/renderAttributeView",{id:o},t=>{e&&e(t)})}function z(o,e,t=null){(0,w.fetchPost)("/api/block/updateBlock",{dataType:"markdown",data:e,id:o},n=>{t&&t(n)})}function X(o,e,t=null){(0,w.fetchPost)("/api/notification/pushMsg",{msg:o,data:e},n=>{t&&t(n)})}function Z(o,e,t=null){(0,w.fetchPost)("/api/notification/pushErrMsg",{msg:o,data:e},n=>{t&&t(n)})}const ee=(o,e=30)=>x(void 0,null,function*(){const t="custom-nioptablewait";let i=0,s=!0;const l=()=>{i++>e&&(s=!1,i=0)};for(N(o,{[t]:"1"},r=>{s=!1});s;)yield new Promise(r=>setTimeout(r,50)),l();for(s=!0,N(o,{[t]:""},r=>{s=!1});s;)yield new Promise(r=>setTimeout(r,50)),l()}),F=(o,e)=>{const t=e.map(s=>`${s}="[^"]*"`).join("|"),n=new RegExp(t,"g");return o.replace(n,"")};function be(o,e,t,n,i){const s=document.createElement("div"),l=document.createElement("style"),r=we();l.textContent=`
.niop-card {
  padding: 5px;
  margin: 5px;
  display: inline-block;
  background-color: ${r.surfaceLight}; 
  border-radius: 5px; 
  opacity: 0.95;
  transition: box-shadow 0.3s ease; 
}
.niop-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 1.0); 
  background-color: ${r.primarylight}; 
  opacity: 1;
}
.niop-card tr{
  background-color:${r.surface};
  /* height of each line */
  min-height: auto;
}
.niop-card tr.thread{
  background-color:${r.surface};
}
.niop-card img {
  line-height: 0;
  object-fit: contain;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.niop-card td {
  border-Color:${r.cellBorderColor};
  border-collapse: collapse;
  text-align: center;
  overflow-wrap: anywhere;
}
.niop-card td:hover {
  box-shadow: 0px 0px 30px ${r.primarylighter};
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
.fn__none {
  display: none !important;
}
`,s.append(l);const a=document.createElement("div");a.className="cardContainer",s.append(a);const c=[];for(let u=0;u<o;u++){const d=document.createElement("div");d.className="niop-card";const h=document.createElement("table");for(let f=0;f<e;f++){const g=document.createElement("tr");if(n[f]!=""){const m=n[f];g.setAttribute("style",m)}f===0&&(g.className="thread");for(let m=0;m<t.length;m++){const D=document.createElement("td");D.style.width=t[m],D.style.height="inherit",c[u]||(c[u]=[]),c[u][f]||(c[u][f]=[]),c[u][f][m]=D,g.appendChild(D)}h.appendChild(g)}d.appendChild(h),a.appendChild(d)}return{body:s,cells:c}}function we(){const o=window.getComputedStyle(document.documentElement);return{backgroundColor:o.getPropertyValue("--b3-theme-background"),surface:o.getPropertyValue("--b3-theme-surface"),surfaceLight:o.getPropertyValue("--b3-theme-surface-lighter"),cellBorderColor:o.getPropertyValue("--b3-border-color"),primarylight:o.getPropertyValue("--b3-theme-primary-light"),primarylighter:o.getPropertyValue("--b3-theme-primary-lighter"),primarylightest:o.getPropertyValue("--b3-theme-primary-lightest"),listhover:o.getPropertyValue("--b3-list-hover"),tooltipscolor:o.getPropertyValue("--b3-tooltips-color"),tooltipsbackground:o.getPropertyValue("--b3-tooltips-background")}}function $e(o){const e={backgroundColor:"",surface:"",surfaceLight:"",cellBorderColor:""},t=o.querySelector("thead");if(t){const s=window.getComputedStyle(t);e.surface=s.backgroundColor}const n=o.querySelector("tbody");if(n){const s=window.getComputedStyle(n);e.surfaceLight=s.backgroundColor}const i=o.querySelectorAll("td");if(i.length>0){const s=window.getComputedStyle(i[0]);e.cellBorderColor=s.borderColor}return e}function ye(o){const e=/\[([^\]]*)\]\(([^)]+)\)/g;o.forEach(t=>{t.forEach(n=>{let i;for(;(i=e.exec(n.content))!==null;){const s=i[0],l=i[1],r=i[2],a=n.content[i.index-1]==="!",c=a?`<img style="max-width:px;" src="${r}" alt="${l}">`:`<a href="${r}">${l}</a>`;n.content=n.content.replace(a?"!"+s:s,c)}})})}const ke=o=>{throw new Error("Function not implemented.")};module.exports=L})();
