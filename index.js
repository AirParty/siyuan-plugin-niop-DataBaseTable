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
 */(()=>{"use strict";var _={};_.d=(t,e)=>{for(var s in e)_.o(e,s)&&!_.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},_.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),_.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var P={};_.r(P),_.d(P,{NiopTable:()=>N,default:()=>w});const k=require("siyuan");var B=(t,e,s)=>new Promise((o,i)=>{var n=a=>{try{r(s.next(a))}catch(c){i(c)}},l=a=>{try{r(s.throw(a))}catch(c){i(c)}},r=a=>a.done?o(a.value):Promise.resolve(a.value).then(n,l);r((s=s.apply(t,e)).next())});class z{constructor(){this.creatCommands=e=>{e.protyleSlash.push({filter:[],html:'<div class="b3-list-item__first"><svg class="b3-menu__icon " style=""><use xlink:href="#iconTable"></use></svg><span class="b3-list-item__text">'+e.i18n.niopimportTool+'</span><span class="b3-list-item__meta">TABLE</span></div>',id:"niop-getCommand-AVdebugDialog",callback:s=>B(this,null,function*(){console.log(`${e.i18n.DataBaseImportToolDes}`+s.protyle.notebookId);const o=s.protyle.breadcrumb.id;s.insert("<span></span>");const i=new k.Dialog({title:`${e.i18n.DataBaseImportToolDes}`,content:`
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
                    `,width:"360px",height:"440px",destroyCallback:()=>{e.saveData("niopTID_AVID",n.value),e.saveData("niopTID_TableID",l.value)}}),n=i.element.querySelector("#niopIDBox1"),l=i.element.querySelector("#niopIDBox2"),r=i.element.querySelector("#niopButton5");r.textContent=e.i18n.import,e.loadData("niopTID_AVID").then(a=>{n.value=a}),e.loadData("niopTID_TableID").then(a=>{l.value=a}),r.addEventListener("click",()=>{oe(n.value,l.value,s)})})})}}}function X(t,e=null){(0,k.fetchPost)("/api/block/getBlockKramdown",{id:t},s=>{e&&e(s)})}function we(t,e=null){fetchPost("/api/block/getBlockDOM",{id:t},s=>{e&&e(s)})}function j(t,e=null){(0,k.fetchPost)("/api/av/renderAttributeView",{id:t},s=>{e&&e(s)})}const Z=(t,e=null)=>{(0,k.fetchPost)("/api/block/getBlockKramdown",{id:t},s=>{const o=s.data.kramdown,i=/data-av-id="([^"]+)"/,n=o.match(i);if(!n){console.log("No av-id"),e&&e({result:!1,value:""});return}e&&e({result:!0,value:n[1]})})};function ee(){return globalThis.Lute.NewNodeID()}const ye=(t,e,s=null)=>{const o=t.id,i=[ee()];let n="";t.view.rows.length>0&&(n=t.view.rows[t.view.rows.length-1].id);const l=[{action:"insertAttrViewBlock",avID:o,previousID:n,srcIDs:i,isDetached:!0}];console.log(`ac:${o} \u65B0id:${i} \u524D\u4E00\u7EA7id${n}  do:`),e.protyle.getInstance().transaction(l,[{action:"removeAttrViewBlock",srcIDs:i,avID:o}]),s&&s(1)},ke=(t,e)=>{const o=t.protyle.contentElement.querySelector(".protyle-title.protyle-wysiwyg--attr").getAttribute("data-node-id"),i=t.protyle.notebookId;fetchPost("/api/filetree/getHPathByID",{id:o},n=>{const l=n.data+"/\u65B0\u5EFA\u6587\u68631";fetchPost("/api/filetree/createDocWithMd",{notebook:i,path:l,markdown:"tttt"},r=>{const a=t.protyle;setTimeout(()=>{a.getInstance().transaction([{action:"insertAttrViewBlock",avID:e.id,previousID:e.view.rows[e.view.rows.length-1].id,srcIDs:[r.data],isDetached:!1}],[{action:"removeAttrViewBlock",srcIDs:[r.data],avID:e.id}])},500)})})},te=(t,e,s,o,i,n=null)=>{let l=null;i.checkerResult.result&&(l=i.checkerResult.value,(0,k.fetchPost)("/api/av/setAttributeViewBlockAttr",{avID:t,keyID:e,rowID:s,cellID:o,value:l},r=>{n&&n(r)}))};function se(t,e){const s=/\[([^\]]*)\]\(([^)]+)\)/,o=[];let i=0,n;for(;(n=s.exec(t))!=null;){i+=1;let l=n[1];l||(l="");const r=n[2],a=t[n.index-1]==="!",c={content:r,type:a?"image":"file",name:l};t=t.replace(a?"!"+n[0]:n[0],""),o.push(c)}return i===0?{result:!1}:{result:!0,value:{[e]:o}}}const oe=(t,e,s)=>B(void 0,null,function*(){Z(t,o=>{o.result&&j(o.value,i=>{X(e,n=>B(void 0,null,function*(){if(n.code=="0"){let l=!1;const r=p=>B(void 0,null,function*(){l||(l=!0,(0,k.fetchPost)("/api/notification/pushMsg",{msg:p,data:30}),yield new Promise(v=>setTimeout(v,100)),l=!1)}),a=new ae(n.data.kramdown);if(a.duplicatesRow){console.log(a.keyWorlds),(0,k.fetchPost)("/api/notification/pushErrMsg",{msg:"table have duplicates name",data:1e3});return}let c=new Q(i.data.view);if(c.duplicatesRow){(0,k.fetchPost)("/api/notification/pushErrMsg",{msg:"database have duplicates name",data:1e3});return}if(i.data.view.filters.length>0){(0,k.fetchPost)("/api/notification/pushErrMsg",{msg:"table have filters,must have none filters avaliable",data:1e3});return}const u=[],d=[],h=[],m=[];if(a.cells[0].forEach((p,v)=>{c.columnIndexMap[p.content]!=null&&p.content!=""&&v!=0&&u.push({col:v,name:p.content})}),u.length===0)return;for(let p=1;p<a.cells.length;p++){const v={name:a.cells[p][0].content,row:p},b=c.getCellData(v.name);h.push(v),b.result||d.push(v)}let g=!0,f=0;const E=s.protyle.contentElement.querySelector(".protyle-title.protyle-wysiwyg--attr").getAttribute("data-node-id"),S=s.protyle.notebookId,T=i.data,y=[];if(d.length>0){f=d.length;let p=0;console.log("creat new note"+d.length);const v=new Date,b=`import${v.getFullYear()}_${v.getMonth()}_${v.getDay()}_${v.getHours()}_${v.getMinutes()}`;for((0,k.fetchPost)("/api/filetree/getHPathByID",{id:E},A=>B(void 0,null,function*(){(0,k.fetchPost)("/api/filetree/createDocWithMd",{notebook:S,path:A.data+"/"+b,markdown:`import at ${v.getUTCDate()}`},I=>B(void 0,null,function*(){for(const Y of d){p++;const be=A.data+"/"+b+"/"+Y.name;for(console.log("creat new note "+Y.name),(0,k.fetchPost)("/api/filetree/createDocWithMd",{notebook:S,path:be,markdown:"tttt"},q=>{y.push(q.data),f--,p--});p>2;)yield new Promise(q=>setTimeout(q,250))}}))}));f>0;)yield new Promise(A=>setTimeout(A,200)),r("wait for creat"+f);r("note creat over"+d.length)}if(yield new Promise(p=>setTimeout(p,250)),y.length>0){const p=s.protyle,v=T.view.rows.length>0?T.view.rows[T.view.rows.length-1].id:"";p.getInstance().transaction([{action:"insertAttrViewBlock",avID:T.id,previousID:v,srcIDs:y,isDetached:!1}],[{action:"removeAttrViewBlock",srcIDs:y,avID:T.id}]),yield new Promise(A=>setTimeout(A,1500)),g=!0;let b=i;for(j(o.value,A=>{b=A,g=!1});g;)yield new Promise(A=>setTimeout(A,200)),r("wait for av reload"+f);yield new Promise(A=>setTimeout(A,200)),console.log(b),i=b}f=u.length*h.length,c=new Q(i.data.view);for(const p of u)for(const v of h){const b=c.getCellData(v.name,p.name,a.cells[v.row][p.col].content);b.result&&(b.reX=v.row,b.reY=p.col,b.content=a.cells[v.row][p.col].content,m.push(b))}yield new Promise(p=>setTimeout(p,200)),f=0;for(let p=0;p<m.length;p++){f++;const v=m[p];for(v.checkerResult.result?(te(o.value,v.value.keyID,v.rowsID,v.value.id,v,()=>{f--}),r("UPDATE"+p+"/"+m.length)):f--;f>0;)yield new Promise(b=>setTimeout(b,20))}}}))})})});class Q{constructor(e){this.duplicatesRow=!1,this.lateKeyName="",this.laterowIndex=0,this.data=e,this.preprocessData()}preprocessData(){const e=this.data.columns.find(s=>s.type==="block");this.keyColumnIndex=this.data.columns.indexOf(e),this.columnIndexMap={},this.rowValueChecker={},this.data.columns.forEach((s,o)=>{this.columnIndexMap[s.name]=o,this.rowValueChecker[o]=ne(s)}),this.rowIndexMap={},this.data.rows.forEach((s,o)=>{const i=s.cells[this.keyColumnIndex].value.block.content;i!=""&&(this.rowIndexMap[i]&&(console.log("block name duplicate "+i),this.duplicatesRow=!0),this.rowIndexMap[i]=o)})}getCellData(e,s="",o=""){if(e!=this.lateKeyName){if(this.laterowIndex=this.rowIndexMap[e],this.laterowIndex===void 0)return{result:!1};this.lateKeyName=e}if(s=="")return{result:!0};const i=this.columnIndexMap[s];if(i===void 0)return{result:!1};const n=this.data.rows[this.laterowIndex],l=n.cells[i],r=this.rowValueChecker[i],a=r(o,l.value,l.valueType);return{result:!0,value:l.value,checkerResult:a,column:this.data.columns[i],rowsID:n.id,keyName:e,columnName:s}}}const ne=t=>{const e={};let s=R;switch(t.type){case"text":return V;case"date":return R;case"number":return ie;case"relation":return R;case"rollup":return R;case"select":return t.options.forEach(o=>{e[o.name]=o}),s=(o,i,n)=>{const l=e[o];let r=!1,a="",c="";if(!l)return a="input isnot in select options",{result:r,faliResult:a};const u=i.mSelect;if(u&&o==u[0].content)return a="the same as input",{result:r,faliResult:a};const d={mSelect:[l]};return c=`[${o}] -> [${u}]`,r=!0,{result:r,value:d,successLog:c}},s;break;case"block":return R;case"mSelect":return t.options.forEach(o=>{e[o.name]=o}),s=(o,i,n)=>{const l=e[o];let r=!1,a="",c="";if(!l)return a="input isnot in select options",{result:r,faliResult:a};let u={mSelect:[l]};const d=i.mSelect;if(d){let h=!1;for(let m=0;m<d.length;m++)if(d[m].content===o){h=!0;break}return h&&(a="the same as input"),{result:r,faliResult:a}}return d&&(u={mSelect:[...i.mSelect,...l]}),c=`[${o}] -> [${d}]`,r=!0,{result:r,value:u,successLog:c}},s;break;case"url":return V;case"email":return V;case"phone":return V;case"mAsset":return le;default:return R}},V=(t,e,s)=>{const o=e[s].content;let i=!1,n="",l="";if(t==o)return n=`the same as input (${o})`,{result:i,faliResult:n};const r={[s]:{content:t}};return l=`[${t}] -> [${o}]`,i=!0,{result:i,value:r,successLog:l}},ie=(t,e,s)=>{const o=e.number.content;let i=!1,n="",l="";if(parseFloat(t)==o)return n=`the same as input (${o})`,{result:i,faliResult:n};const r={number:{content:parseFloat(t)}};return l=`[${t}] -> [${o}]`,i=!0,{result:i,value:r,successLog:l}},R=(t,e,s)=>({result:!1,faliResult:`Unkonw type [${s}] value [${t}]`}),le=(t,e,s)=>{const o=se(t,s);let i=!1,n="",l="";if(!o.result)return n=`input isnot asset (${t})`,{result:i,faliResult:n};const r=o.value[s];let a=[],c=[];if(e.mAsset){if(a=r.filter(u=>!e.mAsset.some(h=>h.content===u.content)),a.length===0)return n=`${t} -> already in database `,{result:i,faliResult:n};l+=`asset ${a.length} ${a.map(u=>u.content).join(" ")} -> ${e.mAsset?e.mAsset.length:"none"}`,e.mAsset&&e.mAsset.length>0&&(a=[...e.mAsset,...a]),o.value=a}return c=o.value,i=!0,{result:i,value:c,successLog:l}};class ae{constructor(e){this.cells=[],this.end="",this.duplicatesRow=!1,this.keyWorlds={},this.kmdCellRegex=/{:\s*(.+?)\s*}(.*?)$/,this.kmdCell=s=>{const o=s.match(this.kmdCellRegex);return o?{content:o[2].trim()?o[2]:""}:{content:s}},this.parseTable(e)}parseTable(e){const s=e.split(`
`);this.end=s[s.length-1],s.slice(0,-1).map(i=>i.split(new RegExp("(?<!\\\\)\\|")).map(n=>n.replace(/\\\|/g,"|"))).forEach((i,n)=>{this.cells[n]=[],i.forEach((l,r)=>{this.cells[n][r]=this.kmdCell(l)}),this.cells[n]=this.cells[n].slice(1,-1),this.keyWorlds[this.cells[n][0].content]?(this.keyWorlds[this.cells[n][0].content]+=1,this.duplicatesRow=!0):this.keyWorlds[this.cells[n][0].content]=1}),this.cells=this.cells.slice(0,1).concat(this.cells.slice(2))}}function De(t,e,s=null){fetchPost("/api/notification/pushMsg",{msg:t,data:e},o=>{s&&s(o)})}function Ae(t,e,s=null){fetchPost("/api/notification/pushErrMsg",{msg:t,data:e},o=>{s&&s(o)})}class re{constructor(e){this.defaulMenus=`
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
    `;const s=document.createElement("div");s.innerHTML=this.defaulMenus,s.style.position="fixed",s.style.left="0px",s.style.top="0px",e.appendChild(s),this.findAndRecordElements(s),this.addEventsToContentBlocks(e)}findAndRecordElements(e){this.niopMenus=e.querySelector("niopMenus"),this.niopSettingPage=e.querySelector("#niopSettingPage"),this.niopQuickBar=e.querySelector("#niopQuickBar"),this.niopQuickBar.addEventListener("mouseleave",()=>{this.fadeTimeIDQuickBar||(this.fadeTimeIDQuickBar=setTimeout(()=>{this.niopQuickBar.classList.add("hide"),this.fadeTimeIDQuickBar=null},1500))}),this.niopQuickBar.addEventListener("mouseenter",()=>{this.fadeTimeIDQuickBar==null&&(clearTimeout(this.fadeTimeIDQuickBar),this.fadeTimeIDQuickBar=null),this.niopQuickBar.classList.remove("hide")})}addEventsToContentBlocks(e){e.querySelectorAll("[custom-nioptable]").forEach(o=>{o.addEventListener("mouseenter",()=>{this.showQuickBar(o)}),o.addEventListener("mouseleave",()=>{this.hideQuickBar()})})}showQuickBar(e){this.fadeTimeIDQuickBar&&(clearTimeout(this.fadeTimeIDQuickBar),this.fadeTimeIDQuickBar=null);const s=this.niopQuickBar;s.classList.remove("hide");const o=e.getBoundingClientRect();s.style.top=o.top+"px",s.style.left=o.left+o.width+"px",console.log(`\u9F20\u6807\u79FB\u5165 top${o.top} left${o.left} right${o.right}`),console.log(o)}hideQuickBar(){this.fadeTimeIDQuickBar&&(clearTimeout(this.fadeTimeIDQuickBar),this.fadeTimeIDQuickBar=null),this.fadeTimeIDQuickBar=setTimeout(()=>{this.fadeTimeIDQuickBar=null},1500)}}var C=(t,e,s)=>new Promise((o,i)=>{var n=a=>{try{r(s.next(a))}catch(c){i(c)}},l=a=>{try{r(s.throw(a))}catch(c){i(c)}},r=a=>a.done?o(a.value):Promise.resolve(a.value).then(n,l);r((s=s.apply(t,e)).next())});const F="menu-config",Ie="custom_tab",Ee="dock_tab",M=class extends k.Plugin{onload(){M.Ini=this,this.eventBus.on("click-blockicon",this.blockIconEvent.bind(this)),this.protyleSlash=[{filter:["table","data table","database table","niop","\u8868\u683C","\u6570\u636E\u8868\u683C","\u6570\u636E\u5E93\u8868\u683C","shujubiaoge"],html:`<div class="b3-list-item__first"><svg class="b3-menu__icon " style=""><use xlink:href="#iconTable"></use></svg><span class="b3-list-item__text">${this.i18n.dTable}</span><span class="b3-list-item__meta">TABLE</span></div>`,id:"creatniopDateTable",callback(l){return C(this,null,function*(){const r=l.protyle.breadcrumb.id,a=l.protyle.contentElement.querySelector(`[data-node-id="${r}"]`),c=l.protyle.transactionTime;yield(d=>C(this,null,function*(){l.insert("<span></span>"),yield G(r),J(a,r,l.protyle,200)}))(1)})}}];const t=document.createElement("div");t.innerHTML=`
<!-- \u9009\u62E9\u6846 \u6253\u5F00\u8F85\u52A9\u5DE5\u5177 -->
<select id="niopSelect" >
    <option value="close">${M.Ini.i18n.close}</option>
    <option value="open">${M.Ini.i18n.open}</option>
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
    `;const e=t.querySelector("#niopSelect"),s=t.querySelector("#niopSelect2"),o=t.querySelector("#niopInput"),i=t.querySelector("#niopSelect3"),n=t.querySelector("#niopToolbar");this.setting=new k.Setting({confirmCallback:()=>{this.saveData(F,{useAdvanceTools:e.value})}}),this.setting.addItem({title:`${M.Ini.i18n.useImportToll}`,createActionElement:()=>(this.loadData(F).then(l=>{l.useAdvanceTools&&(e.value=l.useAdvanceTools)}),t)}),console.log("DatabaseTable from niop ~"),this.loadData(F).then(l=>{l.useAdvanceTools&&new z().creatCommands(this)})}onLayoutReady(){}onunload(){this.eventBus.off("click-blockicon",this.blockIconEvent.bind(this))}EventMenu(){}blockIconEvent({detail:t}){t.menu.addItem({iconHTML:'<svg class="b3-menu__icon " style=""><use xlink:href="#iconTable"></use></svg>',label:this.i18n.dTable,click:()=>{const e=t.blockElements[0],s=e.getAttribute("data-node-id");J(e,s,t.protyle,0)}})}switch_protyle(t){const e=t.detail.protyle.contentElement.querySelector(".protyle-title.protyle-wysiwyg--attr");if(!e)return;let s=e.getAttribute("niopStatu");if(s||(s="addToolBar",e.setAttribute("niopStatu",s)),s==="addToolBar"){const o=t.detail.protyle.contentElement.querySelectorAll(`[${M.ATTRNAME}]`),i=new re(t.detail.protyle.contentElement)}e.setAttribute("niopStatu","none")}};let w=M;w.OnRedner=!1,w.ATTRNAME="custom-nioptable";const Te=()=>{},J=(t,e,s,o=1e3)=>{const i=t,n=i.getAttribute("data-type");if(n!="NodeTable"&&n!="NodeHTMLBlock"){U("\u53EA\u80FD\u4F7F\u7528\u5728Table\u4E0A",4e3);return}if(n==="NodeHTMLBlock"&&!i.getAttribute(w.ATTRNAME)){U("\u6CA1\u6709\u539F\u59CB\u8868\u683C\u6570\u636E",4e3);return}const l=c=>{if(c.nodeID=e,c.tableNode=i,c.protyle=s,c.renderEditMethod===2||c.renderEditMethod<1){c.renderEditMethod=2;const u=[],d=c.tableNode.querySelector("colgroup");d&&d.querySelectorAll("col").forEach(m=>{const g=m.getBoundingClientRect().width,f=g?`${g}px`:"";u.push(f)}),c.colgroup=JSON.stringify(u),(0,k.fetchPost)("/api/block/getBlockKramdown",{id:c.nodeID},h=>C(void 0,null,function*(){c.renderEditMethod=2,c.setSourceTable(h.data.kramdown),yield G(e),O(c)}))}else O(c)},r=c=>{const u=i.getAttribute(w.ATTRNAME),d=new N(u);o>10?setTimeout(()=>{l(d)},o):l(d)},a=c=>{const u=new N(""),d={[w.ATTRNAME]:u.getJson()};o>10?setTimeout(()=>{x(e,d,()=>{l(u)})},o):x(e,d,()=>{l(u)})};pe(e,w.ATTRNAME,r,a)},Se=t=>{const e=t,s=e.getAttribute("data-node-id"),o=e.getAttribute(w.ATTRNAME);if(!s){console.error("error with data-node-id ");return}const i=e.getElementsByClassName("protyle-attr"),n=document.createElement("div");n.setAttribute("contenteditable","false"),n.classList.add("niop-toolbar-container"),n.addEventListener("mouseenter",()=>{n.classList.remove("hide"),n.classList.add("show")}),n.addEventListener("mouseleave",()=>{n.classList.remove("show"),n.classList.add("hide")}),i[0].appendChild(n);const l=new N(o);l.nodeID=s,l.tableNode=e;const r=document.createElement("button");r.textContent="Toolbar",r.setAttribute("niopButton","showMenu"),r.setAttribute("contenteditable","false"),r.classList.add("niop-button"),n.appendChild(r),r.addEventListener("click",()=>{O(l)});const a=document.createElement("button");a.textContent="Reload",a.setAttribute("niopButton","reload"),a.setAttribute("contenteditable","false"),a.classList.add("niop-button"),n.appendChild(a),a.addEventListener("click",()=>{ve(l)}),l.toolBarMenuContainer=n},O=t=>{let e=!1;const s=b=>{e&&t.save(A=>{setTimeout(()=>{},200)})},o=new k.Dialog({title:`${w.Ini.i18n.OnEditSomthing_Table} : ${t.nodeID}`,content:`
      <div class="b3-dialog__content">
      <div class="fn__hr"></div>
      <div>${w.Ini.i18n.AVBlockID}:</div>
      <div class="fn__hr"></div>
      <input type="text" name="Dababase ID" id = "niopIDBox">
      <div class="fn__hr"></div>
      <div >${w.Ini.i18n.AVViewName}:</div>
      <div class="fn__hr"></div>
      <input type="text" name="Views Name" id = "niopIDBox2">
      <div class="fn__hr"></div>
      <div class="fn__hr"></div>
      <div>${w.Ini.i18n.RenderMethodAs}:</div>
      <div class="fn__hr"></div>
      <div class="renderMethod">
        <button class="niopRenderSelect" id = "niopRenderSelectCard" style="display: inline-block;" >${w.Ini.i18n.renderCard}</button>
        <button class="niopRenderSelect" id = "niopRenderSelectRight" style="display: inline-block;">${w.Ini.i18n.renderRight}</button>
        <button class="niopRenderSelect" id = "niopRenderSelectDown" style="display: inline-block;" >${w.Ini.i18n.renderBelow}</button>
      </div>
      <div class="fn__hr"></div>
      <div class="fn__hr"></div>
      <div>DisPlay as:</div>
      <div class="fn__hr"></div>
      <div class="niopRenderMethodDis">
      <div class="niopRenderSelect" id = "niopRenderAsEditor" aria-label="">${w.Ini.i18n.currentDisPlayMethod_Editor}</div>
      <div class="niopRenderSelect" id = "niopRenderAsDataBase" aria-label="">${w.Ini.i18n.currentDisPlayMethod_DateBase}</div>
      </div>
      <div class="fn__hr"></div>
      <div class="fn__hr"></div>
      <div>Switch Render:</div>
      <div class="fn__hr"></div>
      <div class="niopLoadMethod">
      <button class="niop-button" id = "niopEditTable" aria-label="">${w.Ini.i18n.currentDisPlayMethod_Editor}</button>
      <span style="width:120px;height:60px;"><span>
      <button class="niop-button" id = "niopReloadAll" aria-label="">${w.Ini.i18n.ReloadAll}</button>
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
  `,width:"360px",height:"480px",destroyCallback:s}),i=o.element.querySelector("#jsonstring"),n=o.element.querySelector("#niopIDBox"),l=o.element.querySelector("#niopIDBox2"),r=o.element.querySelector("#niopRenderSelectCard"),a=o.element.querySelector("#niopRenderSelectRight"),c=o.element.querySelector("#niopRenderSelectDown"),u=o.element.querySelector("#niopEditTable"),d=o.element.querySelector("#niopReloadAll"),h=o.element.querySelector("#niopRenderAsEditor"),m=o.element.querySelector("#niopRenderAsDataBase"),g=o.element.querySelector("#niopSetFiltter"),f=o.element.querySelector("#niopCleanFiltter"),D=()=>{i.innerText=t.getJson()},E=()=>{r.classList.remove("select"),a.classList.remove("select"),c.classList.remove("select"),h.classList.remove("select"),m.classList.remove("select"),t.renderMethod===1?r.classList.add("select"):t.renderMethod===2?a.classList.add("select"):t.renderMethod===3&&c.classList.add("select"),t.renderEditMethod===1&&m.classList.add("select"),t.renderEditMethod===2&&h.classList.add("select")},S=()=>{const b=[{action:"setAttrViewFilters",avID:t.resourceAVID,data:t.hotReloadSetting.filters},{action:"setAttrViewSorts",avID:t.resourceAVID,data:t.hotReloadSetting.sorts}];t.protyle.getInstance().transaction(b)},T=()=>{t.renderEditMethod=2,h.classList.add("select"),m.classList.remove("select");const b=$(t.sourceTable,["fold","updated"]);K(t.nodeID,b,A=>{}),w.OnRedner=!1,e=!0,D()},y=b=>{t.resourceAVID!=""&&(h.classList.remove("select"),m.classList.add("select"),ce(t,b))},p=()=>{L(t,b=>{if(!b){console.log("no av on the block:"+t.resourceID);return}e=!0,t.renderEditMethod=1,y(!1),D()})},v=()=>{const b=t.resourceAVID;L(t,A=>{if(!A){console.log("no av on the block"+t.resourceID);return}t.resourceAVID!=b?y(!1):y(!0),D()})};n.value=t.resourceID,l.value=t.resourceAVViewName,L(t,()=>{D()}),n.addEventListener("input",()=>{t.resourceID=n.value,e=!0}),l.addEventListener("input",()=>{t.resourceAVViewName=l.value,e=!0}),r.addEventListener("click",()=>{t.renderMethod=1,e=!0,D(),E()}),a.addEventListener("click",()=>{t.renderMethod=2,e=!0,D(),E()}),c.addEventListener("click",()=>{t.renderMethod=3,e=!0,D(),E()}),u.addEventListener("click",T),d.addEventListener("click",p),n.innerText=t.resourceID,E()},ce=(t,e=!0)=>C(void 0,null,function*(){if(w.OnRedner){W(`${w.Ini.i18n.pleaseWaitOnRendering}`,3e3);return}w.OnRedner=!0,(0,k.fetchPost)("/api/av/renderAttributeView",{id:t.resourceAVID},s=>C(void 0,null,function*(){const o=()=>{const n=new he(t.sourceTable,t);let l="";switch(t.renderMethod){case 1:n.direction={card:1,x:0,y:0},n.makeToCard(t),l=n.RebuildAsCard(t);break;case 2:n.direction={card:0,x:1,y:0},n.makeToCard(t),l=n.Rebuild(t);break;case 3:n.direction={card:0,x:0,y:1},n.makeToCard(t),l=n.Rebuild(t);break;default:W(`${w.Ini.i18n.mustSelectOneRenderMethod}`,5e3);break}K(t.nodeID,l),t.renderEditMethod=1,w.OnRedner=!1};e=!1;let i="";if(t.resourceAVViewName!=""&&s.data.view.name!=t.resourceAVViewName&&s.data.views.length>1){for(let n=0;n<s.data.views.length;n++){const l=s.data.views[n];if(l.name===t.resourceAVViewName){e=!0,i=l.id;break}}e||console.log("error view name")}e?(0,k.fetchPost)("/api/av/renderAttributeView",{id:t.resourceAVID,viewID:i},l=>{t.titles=t.deepCopy(l.data.view.columns),t.rows=l.data.view.rows,t.avTable=l,o()}):(t.titles=t.deepCopy(s.data.view.columns),t.rows=s.data.view.rows,t.avTable=s,o())}))}),_e=(t,e=null)=>{fetchPost("/api/av/renderAttributeView",{id:t.resourceAVID},s=>{t.titles=t.deepCopy(s.data.view.columns),t.rows=s.data.view.rows,t.avTable=s,t.setting.filters=Object.assign(s.data.view.filters),t.setting.sorts=Object.assign(s.data.view.sorts),e&&e()})},Ce=t=>{console.log(t)};class N{constructor(e){this.renderMethod=-1,this.renderEditMethod=2,this.resourceID="",this.resourceAVID="",this.resourceAVViewName="",this.setting={filters:[],sorts:[]},this.hotReloadSetting={filters:[],sorts:[]},this.titles=[{id:"",name:"",type:"",icon:"",wrap:!1,hidden:!1,pin:!1,width:"68px",numberFormat:"",template:""}],this.sourceTable="",this.colgroup="",this.nodeID="";try{const s=JSON.parse(e);this.renderMethod=s.renderMethod||this.renderMethod,this.resourceID=s.resourceID||this.resourceID,this.resourceAVID=s.resourceAVID||this.resourceAVID,this.sourceTable=this.decode(s.sourceTable)||this.sourceTable,this.renderEditMethod=s.renderEditMethod||this.renderEditMethod,this.hotReloadSetting=s.hotReloadSetting||this.hotReloadSetting,this.colgroup=this.decode(s.colgroup)||this.colgroup,this.resourceAVViewName=s.resourceAVViewName||this.resourceAVViewName}catch(s){console.log("Error parsing JSON:",s),this.save(o=>{setTimeout(()=>{},200)})}}clean(){this.protyle=null}getJson(){return JSON.stringify({renderMethod:this.renderMethod,resourceID:this.resourceID,resourceAVID:this.resourceAVID,sourceTable:this.encode(this.sourceTable),renderEditMethod:this.renderEditMethod,hotReloadSetting:this.hotReloadSetting,colgroup:this.encode(this.colgroup),resourceAVViewName:this.resourceAVViewName})}encode(e){const s=encodeURIComponent(e);return window.btoa(s)}decode(e){try{const s=atob(e);return decodeURIComponent(s)}catch(s){return console.error("Error decoding string:",s),""}}deepCopy(e){return JSON.parse(JSON.stringify(e))}setSourceTable(e){const s=/custom-nioptable="[^"]*"/g,o=e.replace(s,"");this.sourceTable=o}save(e=null){if(this.nodeID!=""){const s={[w.ATTRNAME]:this.getJson()};e?x(this.nodeID,s,o=>{e(o)}):x(this.nodeID,s)}}}const Be=()=>{const t=`|{: colspan="4" rowspan="1"}\u6807\u9898|{: colspan="1" class="fn__none"}|{: colspan="1" class="fn__none"}|{: colspan="1" class="fn__none"}|
| :-------------------------------: | :--------------------------------: | :--------------------------------: | :--------------------------------: |
|{: colspan="1"}\u5934\u50CF|{: colspan="1"}\u540D\u5B57|{: colspan="1"}\u7B49\u7EA7|\u6280\u80FD|
|..(icon)|..(name)|..(level)|..(skill)|
{: colgroup="width: 94px;|width: 121px;|width: 95px;|width: 116px;" custom-nioptable="123" fold="0" id="20231120114455-g1jmigv" updated="20231130193916"}`,s=t.split(`
`).slice(0,-1).map(i=>i.split(new RegExp("(?<!\\\\)\\|")).map(n=>n.replace(/\\\|/g,"|"))),o=[[{content:"",config:""}]];s.forEach((i,n)=>{o[n]=[],i.forEach((l,r)=>{o[n][r]=H(l)}),o[n]=o[n].slice(1,-1)}),console.log(t),console.log(o)},de=/{:\s*(.+?)\s*}/,H=t=>{const e=t.match(de);if(e){const s=t.replace(e[0],""),o=ue(e[1]),i=o.attributes,n=!!(i.colspan&&i.colspan>1||i.rowspan&&i.rowspan>1);return{content:s,config:i,configNo:o.length,resize:n,valueType:"",colspan:i.colspan?parseInt(i.colspan):1,rowspan:i.rowspan?parseInt(i.rowspan):1}}else return{content:t,config:{},configNo:0,resize:!1,valueType:"",colspan:1,rowspan:1}};function ue(t){const e=/(\S+)=["']([^"']+)["']/g,s=t.match(e);if(!s)return{};const o={};let i=0;return s.forEach(n=>{const[l,r,a]=n.match(/(\S+)=["']([^"']+)["']/);o[r]=a,i++}),{attributes:o,length:i}}class he{constructor(e,s){this.cells=[],this.dashRowNum=1,this.colgroup=[],this.rowsStyleStrs=[],this.end="",this.cards=[],this.direction={card:0,x:0,y:0},this.curCell={card:0,x:0,y:0},this.parseTable(e,s)}parseTable(e,s){const o={};let i=!1;const n=e.split(`
`);this.end=n[n.length-1],n.slice(0,-1).map(r=>r.split(new RegExp("(?<!\\\\)\\|")).map(a=>a.replace(/\\\|/g,"|"))).forEach((r,a)=>{this.cells[a]=[];let c=!1;o[a]||(o[a]=0),r.forEach((u,d)=>{if(this.cells[a][d]=H(u),!i&&this.cells[a][d].rowspan>1){c=!0;for(let h=0;h<this.cells[a][d].rowspan;h++)o[a+h]?o[a+h]+=1:o[a+h]=1}}),!i&&!c&&o[a]===0&&(i=!0,this.dashRowNum<a&&(this.dashRowNum=a)),this.cells[a]=this.cells[a].slice(1,-1)}),this.getRawColgroup(s),this.getMdSettingFromTable()}removeEmpetyInputRows(e){const s=e.avTable.data.view;let o=-1;for(let n=0;n<s.columns.length;n++)if(s.columns[n].type==="block"){o=n;break}const i=[];for(let n=0;n<s.rows.length;n++)s.rows[n].cells[o].value.block.content===""&&i.push(n);for(let n=i.length-1;n>=0;n--)s.rows.splice(i[n],1)}caculateColAndRowGroup(e){this.cells.forEach((s,o)=>{s.forEach((i,n)=>{switch(e.renderMethod){case 1:break;case 2:i.colspan>1&&s.length==n+i.colspan&&(i.colspan+=e.rows.length-1,i.config.colspan=i.colspan);break;case 3:i.rowspan>1&&this.cells.length==o+i.rowspan+1&&(i.rowspan+=e.rows.length,i.config.rowspan=i.rowspan);break;default:break}})})}Rebuild(e){const s=this.cards.map(n=>n.map(l=>"|"+l.map(r=>{let a="";return r.configNo>0&&(a="{: "+Object.entries(r.config).map(([c,u])=>`${c}="${u}"`).join("  ")+"}"),a+r.content}).join("|")).join(`|
`)).join("");this.end=e.renderMethod===2?$(this.end,["fold","id","updated","colgroup"]):$(this.end,["fold","id","updated"]);let o=' id="'+e.nodeID+'" ';e.renderMethod===2&&(o+=' colgroup="'+this.colgroup.map(n=>"width: "+n+";").join("|")+'" ');const i=this.end;return this.end=i.slice(0,2)+o+i.slice(2),`${s}
${this.end}`}RebuildAsCard(e){const s=$(this.end,["fold","id","updated","colgroup"]),o=` id="${e.nodeID}"  data-type="NodeHTMLBlock" `;this.end=s.slice(0,2)+o+s.slice(2);const i=fe(this.cards.length,this.cells.length-1,this.colgroup,this.rowsStyleStrs,e),n=[];return this.cards.forEach((l,r)=>{l.forEach((a,c)=>{if(this.dashRowNum!=c){const u=c>this.dashRowNum?c-1:c;a.forEach((d,h)=>{const m=i.cells[r][u][h];if(m.innerHTML=d.content,d.configNo>0){if(d.colspan>1||d.rowspan>1)for(let g=0;g<d.colspan;g++)for(let f=0;f<d.rowspan;f++)g===0&&f===0||n.push(i.cells[r][u+f][h+g]);if(d.colspan>1){m.setAttribute("colspan",`${d.colspan}`);let g=parseInt(m.style.width);for(let f=1;f<d.colspan;f++)g+=parseInt(i.cells[r][u][h+f].style.width);m.style.width=g+"px"}d.rowspan>1&&m.setAttribute("rowspan",`${d.rowspan}`)}})}}),n.forEach(a=>{a.className="fn__none"})}),`<div>${i.body.innerHTML}</div>
${this.end}`}makeToCard(e){this.cards=[],this.removeEmpetyInputRows(e),this.caculateColAndRowGroup(e);const s=this.cells[0].length,o=this.cells.length,i=e.titles.length,n=e.rows.length,l=this.cards,r={card:0,x:0,y:0},a=this.direction;if(a.card==1?(ge(this.cells),e.rows.forEach((h,m)=>{l[m]=e.deepCopy(this.cells)})):l[0]=e.deepCopy(this.cells),a.x===1){const h=l[0],m=this.colgroup[this.colgroup.length-1];for(let g=0;g<e.rows.length-1;g++)this.colgroup.push(m);for(let g=0;g<o;g++){const f=JSON.stringify(h[g][s-1]);e.rows.forEach((D,E)=>{E!=0&&h[g].push(JSON.parse(f))})}}if(a.y===1){const h=l[0],m=e.rows.length,g=h[0].length;let f=JSON.stringify(h[o-1]);const D=this.dashRowNum===o-1;D&&(f=JSON.stringify(h[o-2]));for(let E=1;E<m;E++)D?h.splice(h.length-1,0,JSON.parse(f)):h.push(JSON.parse(f))}const c=[],u=/\.\.\((.*?)\)/;this.cells.forEach((h,m)=>{h.forEach((g,f)=>{g.content.match(u)&&c.push({x:m,y:f})})}),e.titles.forEach((h,m)=>{if(h.name!=""){const g=`..(${h.name})`;c.forEach(f=>{const D=this.cells[f.x][f.y];if(new RegExp(g).test(D.content))for(let S=0;S<n;S++){const T=this.getOffsetCell(f,S),y=e.rows[S].cells[m];let p="";const v=y.value[y.valueType];switch(y.valueType){case"block":p=y.value.block.content;break;case"number":p=y.value.number.content;break;case"phone":p=y.value.phone.content;break;case"mAsset":if(y.value.mAsset&&(e.renderMethod===1?p=`<span class='imgDiv'><img src="${y.value.mAsset[0].content}"></span>`:p=`![image](${y.value.mAsset[0].content})`),y.value.mAsset){const b=y.value.mAsset.length;e.renderMethod===1?b===1?p=`<span class='imgDiv'><img src="${y.value.mAsset[0].content}"></span>`:p=`<span class='AssetContainer'>${y.value.mAsset.map(I=>I.type==="image"?`<span class='imgDiv'><img src='${I.content}' alt='${I.name}'></span>`:`<span class='fileDiv'><a href='${I.content}' title='${I.name}'>${I.name}</a></span>`).join("")}</span>`:b===1?p=y.value.mAsset[0].type==="image"?`![image](${y.value.mAsset[0].content})`:`![file](${y.value.mAsset[0].content})`:p=`${y.value.mAsset.map(I=>I.type==="image"?`![${I.name}](${I.content})`:`[${I.name}](${I.content})`).join("")}`}else p="[No Assets]";break;case"":break;default:v.content&&(p=v.content);break}T.content=T.content.replace(g,p)}})}})}getOffsetCell(e,s){let o=0,i=e.x,n=e.y;return this.direction.card===1&&(o=s),this.direction.y===1&&(i+=s),this.direction.x===1&&(n+=s),this.cards[o][i][n]}getRawColgroup(e){this.colgroup=JSON.parse(e.colgroup)}getMdSettingFromTable(){const e=[];this.cells.forEach((s,o)=>{if(o!=this.dashRowNum){const i=s[0].content,n=/\.\.style\(([^)]*)\)/,l=i.match(n);if(l&&l[1]){const r=l[1];let a=l[1];a.length>1&&a.charAt(a.length-1)!==";"&&(a=a+";"),e.push(a),s[0].content=i.replace(l[0],"")}else e.push("")}}),this.rowsStyleStrs=e}}const L=(t,e=null)=>{(0,k.fetchPost)("/api/block/getBlockKramdown",{id:t.resourceID},s=>{const o=s.data.kramdown,i=/data-av-id="([^"]+)"/,n=o.match(i);if(n)t.resourceAVID!=n[1]&&(t.resourceAVID=n[1]);else{console.log("No av-id"),t.resourceAVID="",e&&e(!1);return}e&&e(!0)})},Re=(t,e=null)=>{fetchPost("/api/block/getBlockKramdown",{id:t.resourceID},s=>{const o=s.data.kramdown,i=/data-av-id="([^"]+)"/,n=o.match(i);if(n)t.resourceAVID!=n[1]&&(t.resourceAVID=n[1]);else{console.log("No av-id"),t.resourceAVID="",e&&e(!1);return}e&&e(!0)})},Me=t=>{};function x(t,e,s=null){const o=JSON.stringify({id:t,attrs:e});(0,k.fetchPost)("/api/attr/setBlockAttrs",{id:t,attrs:e},i=>{s&&s(i)})}function pe(t,e,s=null,o=null){const i={id:t};return(0,k.fetchPost)("/api/attr/getBlockAttrs",i,n=>{n.data[e]?s&&s(n.data[e]):o&&o(n)}),!1}function xe(t,e){return C(this,null,function*(){const s={id:t};return fetchPost("/api/attr/getBlockAttrs",s,o=>{const i=o.data[e];return i||null}),null})}function Ve(t,e=null){fetchPost("/api/av/renderAttributeView",{id:t},s=>{e&&e(s)})}function K(t,e,s=null){(0,k.fetchPost)("/api/block/updateBlock",{dataType:"markdown",data:e,id:t},o=>{s&&s(o)})}function W(t,e,s=null){(0,k.fetchPost)("/api/notification/pushMsg",{msg:t,data:e},o=>{s&&s(o)})}function U(t,e,s=null){(0,k.fetchPost)("/api/notification/pushErrMsg",{msg:t,data:e},o=>{s&&s(o)})}const G=(t,e=30)=>C(void 0,null,function*(){const s="custom-nioptablewait";let i=0,n=!0;const l=()=>{i++>e&&(n=!1,i=0)};for(x(t,{[s]:"1"},r=>{n=!1});n;)yield new Promise(r=>setTimeout(r,50)),l();for(n=!0,x(t,{[s]:""},r=>{n=!1});n;)yield new Promise(r=>setTimeout(r,50)),l()}),$=(t,e)=>{const s=e.map(n=>`${n}="[^"]*"`).join("|"),o=new RegExp(s,"g");return t.replace(o,"")};function fe(t,e,s,o,i){const n=document.createElement("div"),l=document.createElement("style"),r=me();l.textContent=`
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
`,n.append(l);const a=document.createElement("div");a.className="cardContainer",n.append(a);const c=[];for(let u=0;u<t;u++){const d=document.createElement("div");d.className="niop-card";const h=document.createElement("table");for(let m=0;m<e;m++){const g=document.createElement("tr");if(o[m]!=""){const f=o[m];g.setAttribute("style",f)}m===0&&(g.className="thread");for(let f=0;f<s.length;f++){const D=document.createElement("td");D.style.width=s[f],D.style.height="inherit",c[u]||(c[u]=[]),c[u][m]||(c[u][m]=[]),c[u][m][f]=D,g.appendChild(D)}h.appendChild(g)}d.appendChild(h),a.appendChild(d)}return{body:n,cells:c}}function me(){const t=window.getComputedStyle(document.documentElement);return{backgroundColor:t.getPropertyValue("--b3-theme-background"),surface:t.getPropertyValue("--b3-theme-surface"),surfaceLight:t.getPropertyValue("--b3-theme-surface-lighter"),cellBorderColor:t.getPropertyValue("--b3-border-color"),primarylight:t.getPropertyValue("--b3-theme-primary-light"),primarylighter:t.getPropertyValue("--b3-theme-primary-lighter"),primarylightest:t.getPropertyValue("--b3-theme-primary-lightest"),listhover:t.getPropertyValue("--b3-list-hover"),tooltipscolor:t.getPropertyValue("--b3-tooltips-color"),tooltipsbackground:t.getPropertyValue("--b3-tooltips-background")}}function Ne(t){const e={backgroundColor:"",surface:"",surfaceLight:"",cellBorderColor:""},s=t.querySelector("thead");if(s){const n=window.getComputedStyle(s);e.surface=n.backgroundColor}const o=t.querySelector("tbody");if(o){const n=window.getComputedStyle(o);e.surfaceLight=n.backgroundColor}const i=t.querySelectorAll("td");if(i.length>0){const n=window.getComputedStyle(i[0]);e.cellBorderColor=n.borderColor}return e}function ge(t){const e=/\[([^\]]*)\]\(([^)]+)\)/g;t.forEach(s=>{s.forEach(o=>{let i;for(;(i=e.exec(o.content))!==null;){const n=i[0],l=i[1],r=i[2],a=o.content[i.index-1]==="!",c=a?`<img style="max-width:px;" src="${r}" alt="${l}">`:`<a href="${r}">${l}</a>`;o.content=o.content.replace(a?"!"+n:n,c)}})})}const ve=t=>{throw new Error("Function not implemented.")};module.exports=P})();
