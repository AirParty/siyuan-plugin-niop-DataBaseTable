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
 */(()=>{"use strict";var T={};T.d=(t,e)=>{for(var o in e)T.o(e,o)&&!T.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},T.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),T.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var P={};T.r(P),T.d(P,{NiopTable:()=>V,default:()=>y});const D=require("siyuan");var B=(t,e,o)=>new Promise((s,i)=>{var n=a=>{try{r(o.next(a))}catch(c){i(c)}},l=a=>{try{r(o.throw(a))}catch(c){i(c)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(n,l);r((o=o.apply(t,e)).next())});class X{constructor(){this.creatCommands=e=>{e.protyleSlash.push({filter:[],html:'<div class="b3-list-item__first"><svg class="b3-menu__icon " style=""><use xlink:href="#iconTable"></use></svg><span class="b3-list-item__text">'+e.i18n.niopimportTool+'</span><span class="b3-list-item__meta">TABLE</span></div>',id:"niop-getCommand-AVdebugDialog",callback:o=>B(this,null,function*(){console.log(`${e.i18n.DataBaseImportToolDes}`+o.protyle.notebookId);const s=o.protyle.breadcrumb.id;o.insert("<span></span>");const i=new D.Dialog({title:`${e.i18n.DataBaseImportToolDes}`,content:`
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
                    `,width:"360px",height:"440px",destroyCallback:()=>{e.saveData("niopTID_AVID",n.value),e.saveData("niopTID_TableID",l.value)}}),n=i.element.querySelector("#niopIDBox1"),l=i.element.querySelector("#niopIDBox2"),r=i.element.querySelector("#niopButton5");r.textContent=e.i18n.import,e.loadData("niopTID_AVID").then(a=>{n.value=a}),e.loadData("niopTID_TableID").then(a=>{l.value=a}),r.addEventListener("click",()=>{ne(n.value,l.value,o)})})})}}}function Z(t,e=null){(0,D.fetchPost)("/api/block/getBlockKramdown",{id:t},o=>{e&&e(o)})}function ye(t,e=null){fetchPost("/api/block/getBlockDOM",{id:t},o=>{e&&e(o)})}function j(t,e,o=null){(0,D.fetchPost)("/api/av/renderAttributeView",{id:t,pageSize:e},s=>{o&&o(s)})}const ee=(t,e=null)=>{(0,D.fetchPost)("/api/block/getBlockKramdown",{id:t},o=>{const s=o.data.kramdown,i=/data-av-id="([^"]+)"/,n=s.match(i);if(!n){console.log("No av-id"),e&&e({result:!1,value:""});return}e&&e({result:!0,value:n[1]})})};function te(){return globalThis.Lute.NewNodeID()}const ke=(t,e,o=null)=>{const s=t.id,i=[te()];let n="";t.view.rows.length>0&&(n=t.view.rows[t.view.rows.length-1].id);const l=[{action:"insertAttrViewBlock",avID:s,previousID:n,srcIDs:i,isDetached:!0}];console.log(`ac:${s} \u65B0id:${i} \u524D\u4E00\u7EA7id${n}  do:`),e.protyle.getInstance().transaction(l,[{action:"removeAttrViewBlock",srcIDs:i,avID:s}]),o&&o(1)},De=(t,e)=>{const s=t.protyle.contentElement.querySelector(".protyle-title.protyle-wysiwyg--attr").getAttribute("data-node-id"),i=t.protyle.notebookId;fetchPost("/api/filetree/getHPathByID",{id:s},n=>{const l=n.data+"/\u65B0\u5EFA\u6587\u68631";fetchPost("/api/filetree/createDocWithMd",{notebook:i,path:l,markdown:"tttt"},r=>{const a=t.protyle;setTimeout(()=>{a.getInstance().transaction([{action:"insertAttrViewBlock",avID:e.id,previousID:e.view.rows[e.view.rows.length-1].id,srcIDs:[r.data],isDetached:!1}],[{action:"removeAttrViewBlock",srcIDs:[r.data],avID:e.id}])},500)})})},oe=(t,e,o,s,i,n=null)=>{let l=null;i.checkerResult.result&&(l=i.checkerResult.value,(0,D.fetchPost)("/api/av/setAttributeViewBlockAttr",{avID:t,keyID:e,rowID:o,cellID:s,value:l},r=>{n&&n(r)}))};function se(t,e){const o=/\[([^\]]*)\]\(([^)]+)\)/,s=[];let i=0,n;for(;(n=o.exec(t))!=null;){i+=1;let l=n[1];l||(l="");const r=n[2],a=t[n.index-1]==="!",c={content:r,type:a?"image":"file",name:l};t=t.replace(a?"!"+n[0]:n[0],""),s.push(c)}return i===0?{result:!1}:{result:!0,value:{[e]:s}}}const ne=(t,e,o)=>B(void 0,null,function*(){ee(t,s=>{s.result&&j(s.value,2e4,i=>{Z(e,n=>B(void 0,null,function*(){if(n.code=="0"){let l=!1;const r=f=>B(void 0,null,function*(){l||(l=!0,(0,D.fetchPost)("/api/notification/pushMsg",{msg:f,data:30}),yield new Promise(p=>setTimeout(p,100)),l=!1)}),a=new re(n.data.kramdown);if(a.duplicatesRow){console.log(a.keyWorlds),(0,D.fetchPost)("/api/notification/pushErrMsg",{msg:"table have duplicates name",data:1e3});return}let c=new Q(i.data.view);if(c.duplicatesRow){(0,D.fetchPost)("/api/notification/pushErrMsg",{msg:"database have duplicates name",data:1e3});return}if(i.data.view.filters.length>0){(0,D.fetchPost)("/api/notification/pushErrMsg",{msg:"table have filters,must have none filters avaliable",data:1e3});return}const u=[],d=[],h=[],m=[],v=i.data.view.rows.length;if(a.cells[0].forEach((f,p)=>{c.columnIndexMap[f.content]!=null&&f.content!=""&&p!=0&&u.push({col:p,name:f.content})}),u.length===0)return;for(let f=1;f<a.cells.length;f++){const p={name:a.cells[f][0].content,row:f},A=c.getCellData(p.name);h.push(p),A.result||d.push(p)}let g=!0,b=0;const _=o.protyle.contentElement.querySelector(".protyle-title.protyle-wysiwyg--attr").getAttribute("data-node-id"),C=o.protyle.notebookId,w=i.data,I=[];if(d.length>0){b=d.length;let f=0;console.log("creat new note"+d.length);const p=new Date,A=`import${p.getFullYear()}_${p.getMonth()}_${p.getDay()}_${p.getHours()}_${p.getMinutes()}`;for((0,D.fetchPost)("/api/filetree/getHPathByID",{id:_},k=>B(void 0,null,function*(){(0,D.fetchPost)("/api/filetree/createDocWithMd",{notebook:C,path:k.data+"/"+A,markdown:`import at ${p.getUTCDate()}`},Pe=>B(void 0,null,function*(){for(const z of d){f++;const we=k.data+"/"+A+"/"+z.name;for(console.log("creat new note "+z.name),(0,D.fetchPost)("/api/filetree/createDocWithMd",{notebook:C,path:we,markdown:"tttt"},q=>{I.push(q.data),b--,f--});f>0;)yield new Promise(q=>setTimeout(q,10))}}))}));b>0;)yield new Promise(k=>setTimeout(k,200)),r("wait for creat note"+b);r("note creat over "+d.length)}if(yield new Promise(f=>setTimeout(f,250)),I.length>0){const f=o.protyle,p=w.view.rows.length>0?w.view.rows[w.view.rows.length-1].id:"";f.getInstance().transaction([{action:"insertAttrViewBlock",avID:w.id,previousID:p,srcIDs:I,isDetached:!1}],[{action:"removeAttrViewBlock",srcIDs:I,avID:w.id}]),yield new Promise(k=>setTimeout(k,1500)),g=!0;let A=i;for(j(s.value,v+I.length,k=>{A=k,g=!1});g;)yield new Promise(k=>setTimeout(k,200)),r("wait for av reload"+b);yield new Promise(k=>setTimeout(k,200)),console.log(A),i=A}b=u.length*h.length,c=new Q(i.data.view);for(const f of u)for(const p of h){const A=c.getCellData(p.name,f.name,a.cells[p.row][f.col].content);A.result&&(A.reX=p.row,A.reY=f.col,A.content=a.cells[p.row][f.col].content,m.push(A))}yield new Promise(f=>setTimeout(f,200)),b=0;for(let f=0;f<m.length;f++){b++;const p=m[f];for(p.checkerResult.result?(oe(s.value,p.value.keyID,p.rowsID,p.value.id,p,()=>{b--}),r("UPDATE"+f+"/"+m.length)):b--;b>0;)yield new Promise(A=>setTimeout(A,20))}}}))})})});class Q{constructor(e){this.duplicatesRow=!1,this.lateKeyName="",this.laterowIndex=0,this.data=e,this.preprocessData()}preprocessData(){const e=this.data.columns.find(o=>o.type==="block");this.keyColumnIndex=this.data.columns.indexOf(e),this.columnIndexMap={},this.rowValueChecker={},this.data.columns.forEach((o,s)=>{this.columnIndexMap[o.name]=s,this.rowValueChecker[s]=ie(o)}),this.rowIndexMap={},this.data.rows.forEach((o,s)=>{const i=o.cells[this.keyColumnIndex].value.block.content;i!=""&&(this.rowIndexMap[i]&&(console.log("block name duplicate "+i),this.duplicatesRow=!0),this.rowIndexMap[i]=s)})}getCellData(e,o="",s=""){if(e!=this.lateKeyName){if(this.laterowIndex=this.rowIndexMap[e],this.laterowIndex===void 0)return{result:!1};this.lateKeyName=e}if(o=="")return{result:!0};const i=this.columnIndexMap[o];if(i===void 0)return{result:!1};const n=this.data.rows[this.laterowIndex],l=n.cells[i],r=this.rowValueChecker[i],a=r(s,l.value,l.valueType);return{result:!0,value:l.value,checkerResult:a,column:this.data.columns[i],rowsID:n.id,keyName:e,columnName:o}}}const ie=t=>{const e={};let o=R;switch(t.type){case"text":return N;case"date":return R;case"number":return le;case"relation":return R;case"rollup":return R;case"select":return t.options.forEach(s=>{e[s.name]=s}),o=(s,i,n)=>{const l=e[s];let r=!1,a="",c="";if(!l)return a="input isnot in select options",{result:r,faliResult:a};const u=i.mSelect;if(u&&s==u[0].content)return a="the same as input",{result:r,faliResult:a};const d={mSelect:[l]};return c=`[${s}] -> [${u}]`,r=!0,{result:r,value:d,successLog:c}},o;break;case"block":return R;case"mSelect":return t.options.forEach(s=>{e[s.name]=s}),o=(s,i,n)=>{const l=e[s];let r=!1,a="",c="";if(!l)return a="input isnot in select options",{result:r,faliResult:a};let u={mSelect:[l]};const d=i.mSelect;if(d){let h=!1;for(let m=0;m<d.length;m++)if(d[m].content===s){h=!0;break}return h&&(a="the same as input"),{result:r,faliResult:a}}return d&&(u={mSelect:[...i.mSelect,...l]}),c=`[${s}] -> [${d}]`,r=!0,{result:r,value:u,successLog:c}},o;break;case"url":return N;case"email":return N;case"phone":return N;case"mAsset":return ae;default:return R}},N=(t,e,o)=>{const s=e[o].content;let i=!1,n="",l="";if(t==s)return n=`the same as input (${s})`,{result:i,faliResult:n};const r={[o]:{content:t}};return l=`[${t}] -> [${s}]`,i=!0,{result:i,value:r,successLog:l}},le=(t,e,o)=>{const s=e.number.content;let i=!1,n="",l="";if(parseFloat(t)==s)return n=`the same as input (${s})`,{result:i,faliResult:n};const r={number:{content:parseFloat(t)}};return l=`[${t}] -> [${s}]`,i=!0,{result:i,value:r,successLog:l}},R=(t,e,o)=>({result:!1,faliResult:`Unkonw type [${o}] value [${t}]`}),ae=(t,e,o)=>{const s=se(t,o);let i=!1,n="",l="";if(!s.result)return n=`input isnot asset (${t})`,{result:i,faliResult:n};const r=s.value[o];let a=[],c=[];if(e.mAsset){if(a=r.filter(u=>!e.mAsset.some(h=>h.content===u.content)),a.length===0)return n=`${t} -> already in database `,{result:i,faliResult:n};l+=`asset ${a.length} ${a.map(u=>u.content).join(" ")} -> ${e.mAsset?e.mAsset.length:"none"}`,e.mAsset&&e.mAsset.length>0&&(a=[...e.mAsset,...a]),s.value=a}return c=s.value,i=!0,{result:i,value:c,successLog:l}};class re{constructor(e){this.cells=[],this.end="",this.duplicatesRow=!1,this.keyWorlds={},this.kmdCellRegex=/{:\s*(.+?)\s*}(.*?)$/,this.kmdCell=o=>{const s=o.match(this.kmdCellRegex);return s?{content:s[2].trim()?s[2]:""}:{content:o}},this.parseTable(e)}parseTable(e){const o=e.split(`
`);this.end=o[o.length-1],o.slice(0,-1).map(i=>i.split(new RegExp("(?<!\\\\)\\|")).map(n=>n.replace(/\\\|/g,"|"))).forEach((i,n)=>{this.cells[n]=[],i.forEach((l,r)=>{this.cells[n][r]=this.kmdCell(l)}),this.cells[n]=this.cells[n].slice(1,-1),this.keyWorlds[this.cells[n][0].content]?(this.keyWorlds[this.cells[n][0].content]+=1,this.duplicatesRow=!0):this.keyWorlds[this.cells[n][0].content]=1}),this.cells=this.cells.slice(0,1).concat(this.cells.slice(2))}}function Ae(t,e,o=null){fetchPost("/api/notification/pushMsg",{msg:t,data:e},s=>{o&&o(s)})}function Ie(t,e,o=null){fetchPost("/api/notification/pushErrMsg",{msg:t,data:e},s=>{o&&o(s)})}class ce{constructor(e){this.defaulMenus=`
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
    `;const o=document.createElement("div");o.innerHTML=this.defaulMenus,o.style.position="fixed",o.style.left="0px",o.style.top="0px",e.appendChild(o),this.findAndRecordElements(o),this.addEventsToContentBlocks(e)}findAndRecordElements(e){this.niopMenus=e.querySelector("niopMenus"),this.niopSettingPage=e.querySelector("#niopSettingPage"),this.niopQuickBar=e.querySelector("#niopQuickBar"),this.niopQuickBar.addEventListener("mouseleave",()=>{this.fadeTimeIDQuickBar||(this.fadeTimeIDQuickBar=setTimeout(()=>{this.niopQuickBar.classList.add("hide"),this.fadeTimeIDQuickBar=null},1500))}),this.niopQuickBar.addEventListener("mouseenter",()=>{this.fadeTimeIDQuickBar==null&&(clearTimeout(this.fadeTimeIDQuickBar),this.fadeTimeIDQuickBar=null),this.niopQuickBar.classList.remove("hide")})}addEventsToContentBlocks(e){e.querySelectorAll("[custom-nioptable]").forEach(s=>{s.addEventListener("mouseenter",()=>{this.showQuickBar(s)}),s.addEventListener("mouseleave",()=>{this.hideQuickBar()})})}showQuickBar(e){this.fadeTimeIDQuickBar&&(clearTimeout(this.fadeTimeIDQuickBar),this.fadeTimeIDQuickBar=null);const o=this.niopQuickBar;o.classList.remove("hide");const s=e.getBoundingClientRect();o.style.top=s.top+"px",o.style.left=s.left+s.width+"px",console.log(`\u9F20\u6807\u79FB\u5165 top${s.top} left${s.left} right${s.right}`),console.log(s)}hideQuickBar(){this.fadeTimeIDQuickBar&&(clearTimeout(this.fadeTimeIDQuickBar),this.fadeTimeIDQuickBar=null),this.fadeTimeIDQuickBar=setTimeout(()=>{this.fadeTimeIDQuickBar=null},1500)}}var S=(t,e,o)=>new Promise((s,i)=>{var n=a=>{try{r(o.next(a))}catch(c){i(c)}},l=a=>{try{r(o.throw(a))}catch(c){i(c)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(n,l);r((o=o.apply(t,e)).next())});const J=!1,F="menu-config",Ee="custom_tab",Te="dock_tab",M=class extends D.Plugin{onload(){M.Ini=this,this.eventBus.on("click-blockicon",this.blockIconEvent.bind(this)),this.protyleSlash=[{filter:["table","data table","database table","niop","\u8868\u683C","\u6570\u636E\u8868\u683C","\u6570\u636E\u5E93\u8868\u683C","shujubiaoge"],html:`<div class="b3-list-item__first"><svg class="b3-menu__icon " style=""><use xlink:href="#iconTable"></use></svg><span class="b3-list-item__text">${this.i18n.dTable}</span><span class="b3-list-item__meta">TABLE</span></div>`,id:"creatniopDateTable",callback(l){return S(this,null,function*(){const r=l.protyle.breadcrumb.id,a=l.protyle.contentElement.querySelector(`[data-node-id="${r}"]`),c=l.protyle.transactionTime;yield(d=>S(this,null,function*(){l.insert("<span></span>"),yield Y(r),H(a,r,l.protyle,200)}))(1)})}}];const t=document.createElement("div");t.innerHTML=`
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
    `;const e=t.querySelector("#niopSelect"),o=t.querySelector("#niopSelect2"),s=t.querySelector("#niopInput"),i=t.querySelector("#niopSelect3"),n=t.querySelector("#niopToolbar");this.setting=new D.Setting({confirmCallback:()=>{this.saveData(F,{useAdvanceTools:e.value})}}),this.setting.addItem({title:`${M.Ini.i18n.useImportToll}`,createActionElement:()=>(this.loadData(F).then(l=>{l.useAdvanceTools&&(e.value=l.useAdvanceTools)}),t)}),console.log("DatabaseTable from niop ~"),this.loadData(F).then(l=>{l.useAdvanceTools&&new X().creatCommands(this)})}onLayoutReady(){}onunload(){this.eventBus.off("click-blockicon",this.blockIconEvent.bind(this))}EventMenu(){}blockIconEvent({detail:t}){t.menu.addItem({iconHTML:'<svg class="b3-menu__icon " style=""><use xlink:href="#iconTable"></use></svg>',label:this.i18n.dTable,click:()=>{const e=t.blockElements[0],o=e.getAttribute("data-node-id");H(e,o,t.protyle,0)}})}switch_protyle(t){const e=t.detail.protyle.contentElement.querySelector(".protyle-title.protyle-wysiwyg--attr");if(!e)return;let o=e.getAttribute("niopStatu");if(o||(o="addToolBar",e.setAttribute("niopStatu",o)),o==="addToolBar"){const s=t.detail.protyle.contentElement.querySelectorAll(`[${M.ATTRNAME}]`),i=new ce(t.detail.protyle.contentElement)}e.setAttribute("niopStatu","none")}};let y=M;y.OnRedner=!1,y.ATTRNAME="custom-nioptable";const Se=()=>{},H=(t,e,o,s=1e3)=>{const i=t,n=i.getAttribute("data-type");if(n!="NodeTable"&&n!="NodeHTMLBlock"){G("\u53EA\u80FD\u4F7F\u7528\u5728Table\u4E0A",4e3);return}if(n==="NodeHTMLBlock"&&!i.getAttribute(y.ATTRNAME)){G("\u6CA1\u6709\u539F\u59CB\u8868\u683C\u6570\u636E",4e3);return}const l=c=>{if(c.nodeID=e,c.tableNode=i,c.protyle=o,c.renderEditMethod===2||c.renderEditMethod<1){c.renderEditMethod=2;const u=[],d=c.tableNode.querySelector("colgroup");d&&d.querySelectorAll("col").forEach(m=>{const v=m.getBoundingClientRect().width,g=v?`${v}px`:"";u.push(g)}),c.colgroup=JSON.stringify(u),(0,D.fetchPost)("/api/block/getBlockKramdown",{id:c.nodeID},h=>S(void 0,null,function*(){c.renderEditMethod=2,c.setSourceTable(h.data.kramdown),yield Y(e),O(c)}))}else O(c)},r=c=>{const u=i.getAttribute(y.ATTRNAME),d=new V(u);s>10?setTimeout(()=>{l(d)},s):l(d)},a=c=>{const u=new V(""),d={[y.ATTRNAME]:u.getJson()};s>10?setTimeout(()=>{x(e,d,()=>{l(u)})},s):x(e,d,()=>{l(u)})};fe(e,y.ATTRNAME,r,a)},_e=t=>{const e=t,o=e.getAttribute("data-node-id"),s=e.getAttribute(y.ATTRNAME);if(!o){console.error("error with data-node-id ");return}const i=e.getElementsByClassName("protyle-attr"),n=document.createElement("div");n.setAttribute("contenteditable","false"),n.classList.add("niop-toolbar-container"),n.addEventListener("mouseenter",()=>{n.classList.remove("hide"),n.classList.add("show")}),n.addEventListener("mouseleave",()=>{n.classList.remove("show"),n.classList.add("hide")}),i[0].appendChild(n);const l=new V(s);l.nodeID=o,l.tableNode=e;const r=document.createElement("button");r.textContent="Toolbar",r.setAttribute("niopButton","showMenu"),r.setAttribute("contenteditable","false"),r.classList.add("niop-button"),n.appendChild(r),r.addEventListener("click",()=>{O(l)});const a=document.createElement("button");a.textContent="Reload",a.setAttribute("niopButton","reload"),a.setAttribute("contenteditable","false"),a.classList.add("niop-button"),n.appendChild(a),a.addEventListener("click",()=>{be(l)}),l.toolBarMenuContainer=n},O=t=>{let e=!1;const o=p=>{e&&t.save(A=>{setTimeout(()=>{},200)})},s=new D.Dialog({title:`${y.Ini.i18n.OnEditSomthing_Table} : ${t.nodeID}`,content:`
      <div class="b3-dialog__content">
      <div class="fn__hr"></div>
      <div>${y.Ini.i18n.AVBlockID}:</div>
      <div class="fn__hr"></div>
      <input type="text" name="Dababase ID" id = "niopIDBox">
      <div class="fn__hr"></div>
      <div >${y.Ini.i18n.AVViewName}:</div>
      <div class="fn__hr"></div>
      <input type="text" name="Views Name" id = "niopIDBox2">
      <div class="fn__hr"></div>
      <div class="fn__hr"></div>
      <div>${y.Ini.i18n.RenderMethodAs}:</div>
      <div class="fn__hr"></div>
      <div class="renderMethod">
        <button class="niopRenderSelect" id = "niopRenderSelectCard" style="display: inline-block;" >${y.Ini.i18n.renderCard}</button>
        <button class="niopRenderSelect" id = "niopRenderSelectRight" style="display: inline-block;">${y.Ini.i18n.renderRight}</button>
        <button class="niopRenderSelect" id = "niopRenderSelectDown" style="display: inline-block;" >${y.Ini.i18n.renderBelow}</button>
      </div>
      <div class="fn__hr"></div>
      <div class="fn__hr"></div>
      <div>DisPlay as:</div>
      <div class="fn__hr"></div>
      <div class="niopRenderMethodDis">
      <div class="niopRenderSelect" id = "niopRenderAsEditor" aria-label="">${y.Ini.i18n.currentDisPlayMethod_Editor}</div>
      <div class="niopRenderSelect" id = "niopRenderAsDataBase" aria-label="">${y.Ini.i18n.currentDisPlayMethod_DateBase}</div>
      </div>
      <div class="fn__hr"></div>
      <div class="fn__hr"></div>
      <div>Switch Render:</div>
      <div class="fn__hr"></div>
      <div class="niopLoadMethod">
      <button class="niop-button" id = "niopEditTable" aria-label="">${y.Ini.i18n.currentDisPlayMethod_Editor}</button>
      <span style="width:120px;height:60px;"><span>
      <button class="niop-button" id = "niopReloadAll" aria-label="">${y.Ini.i18n.ReloadAll}</button>
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
  `,width:"360px",height:"480px",destroyCallback:o}),i=s.element.querySelector("#jsonstring"),n=s.element.querySelector("#niopIDBox"),l=s.element.querySelector("#niopIDBox2"),r=s.element.querySelector("#niopRenderSelectCard"),a=s.element.querySelector("#niopRenderSelectRight"),c=s.element.querySelector("#niopRenderSelectDown"),u=s.element.querySelector("#niopEditTable"),d=s.element.querySelector("#niopReloadAll"),h=s.element.querySelector("#niopRenderAsEditor"),m=s.element.querySelector("#niopRenderAsDataBase"),v=s.element.querySelector("#niopSetFiltter"),g=s.element.querySelector("#niopCleanFiltter"),b=()=>{i.innerText=t.getJson()},E=()=>{r.classList.remove("select"),a.classList.remove("select"),c.classList.remove("select"),h.classList.remove("select"),m.classList.remove("select"),t.renderMethod===1?r.classList.add("select"):t.renderMethod===2?a.classList.add("select"):t.renderMethod===3&&c.classList.add("select"),t.renderEditMethod===1&&m.classList.add("select"),t.renderEditMethod===2&&h.classList.add("select")},_=()=>{const p=[{action:"setAttrViewFilters",avID:t.resourceAVID,data:t.hotReloadSetting.filters},{action:"setAttrViewSorts",avID:t.resourceAVID,data:t.hotReloadSetting.sorts}];t.protyle.getInstance().transaction(p)},C=()=>{t.renderEditMethod=2,h.classList.add("select"),m.classList.remove("select");const p=$(t.sourceTable,["fold","updated"]);W(t.nodeID,p,A=>{}),y.OnRedner=!1,e=!0,b()},w=p=>{t.resourceAVID!=""&&(h.classList.remove("select"),m.classList.add("select"),de(t,p))},I=()=>{L(t,p=>{if(!p){console.log("no av on the block:"+t.resourceID);return}e=!0,t.renderEditMethod=1,w(!1),b()})},f=()=>{const p=t.resourceAVID;L(t,A=>{if(!A){console.log("no av on the block"+t.resourceID);return}t.resourceAVID!=p?w(!1):w(!0),b()})};n.value=t.resourceID,l.value=t.resourceAVViewName,L(t,()=>{b()}),n.addEventListener("input",()=>{t.resourceID=n.value,e=!0}),l.addEventListener("input",()=>{t.resourceAVViewName=l.value,e=!0}),r.addEventListener("click",()=>{t.renderMethod=1,e=!0,b(),E()}),a.addEventListener("click",()=>{t.renderMethod=2,e=!0,b(),E()}),c.addEventListener("click",()=>{t.renderMethod=3,e=!0,b(),E()}),u.addEventListener("click",C),d.addEventListener("click",I),n.innerText=t.resourceID,E()},de=(t,e=!0)=>S(void 0,null,function*(){if(y.OnRedner){U(`${y.Ini.i18n.pleaseWaitOnRendering}`,3e3);return}y.OnRedner=!0,(0,D.fetchPost)("/api/av/renderAttributeView",{id:t.resourceAVID},o=>S(void 0,null,function*(){const s=o.data.view.rowCount,i=()=>{J&&(console.log("niopTable:"),console.log(t));const l=new pe(t.sourceTable,t);let r="";switch(t.renderMethod){case 1:l.direction={card:1,x:0,y:0},l.makeToCard(t),r=l.RebuildAsCard(t);break;case 2:l.direction={card:0,x:1,y:0},l.makeToCard(t),r=l.Rebuild(t);break;case 3:l.direction={card:0,x:0,y:1},l.makeToCard(t),r=l.Rebuild(t);break;default:U(`${y.Ini.i18n.mustSelectOneRenderMethod}`,5e3);break}J&&(console.log("\u9884\u5904\u7406\u8868\u683C"),console.log(l),console.log(r)),W(t.nodeID,r),t.renderEditMethod=1,y.OnRedner=!1};e=!1;let n=o.data.view.id;if(t.resourceAVViewName!=""&&o.data.view.name!=t.resourceAVViewName&&o.data.views.length>1){for(let l=0;l<o.data.views.length;l++){const r=o.data.views[l];if(r.name===t.resourceAVViewName){e=!0,n=r.id;break}}e||console.log("error view name")}e||s>o.data.view.rows.length?(0,D.fetchPost)("/api/av/renderAttributeView",{id:t.resourceAVID,viewID:n,pageSize:s},r=>{t.titles=t.deepCopy(r.data.view.columns),t.rows=r.data.view.rows,t.avTable=r,i()}):(t.titles=t.deepCopy(o.data.view.columns),t.rows=o.data.view.rows,t.avTable=o,i())}))}),Ce=(t,e=null)=>{fetchPost("/api/av/renderAttributeView",{id:t.resourceAVID},o=>{t.titles=t.deepCopy(o.data.view.columns),t.rows=o.data.view.rows,t.avTable=o,t.setting.filters=Object.assign(o.data.view.filters),t.setting.sorts=Object.assign(o.data.view.sorts),e&&e()})},Be=t=>{console.log(t)};class V{constructor(e){this.renderMethod=-1,this.renderEditMethod=2,this.resourceID="",this.resourceAVID="",this.resourceAVViewName="",this.setting={filters:[],sorts:[]},this.hotReloadSetting={filters:[],sorts:[]},this.titles=[{id:"",name:"",type:"",icon:"",wrap:!1,hidden:!1,pin:!1,width:"68px",numberFormat:"",template:""}],this.sourceTable="",this.colgroup="",this.nodeID="";try{const o=JSON.parse(e);this.renderMethod=o.renderMethod||this.renderMethod,this.resourceID=o.resourceID||this.resourceID,this.resourceAVID=o.resourceAVID||this.resourceAVID,this.sourceTable=this.decode(o.sourceTable)||this.sourceTable,this.renderEditMethod=o.renderEditMethod||this.renderEditMethod,this.hotReloadSetting=o.hotReloadSetting||this.hotReloadSetting,this.colgroup=this.decode(o.colgroup)||this.colgroup,this.resourceAVViewName=o.resourceAVViewName||this.resourceAVViewName}catch(o){console.log("Error parsing JSON:",o),this.save(s=>{setTimeout(()=>{},200)})}}clean(){this.protyle=null}getJson(){return JSON.stringify({renderMethod:this.renderMethod,resourceID:this.resourceID,resourceAVID:this.resourceAVID,sourceTable:this.encode(this.sourceTable),renderEditMethod:this.renderEditMethod,hotReloadSetting:this.hotReloadSetting,colgroup:this.encode(this.colgroup),resourceAVViewName:this.resourceAVViewName})}encode(e){const o=encodeURIComponent(e);return window.btoa(o)}decode(e){try{const o=atob(e);return decodeURIComponent(o)}catch(o){return console.error("Error decoding string:",o),""}}deepCopy(e){return JSON.parse(JSON.stringify(e))}setSourceTable(e){const o=/custom-nioptable="[^"]*"/g,s=e.replace(o,"");this.sourceTable=s}save(e=null){if(this.nodeID!=""){const o={[y.ATTRNAME]:this.getJson()};e?x(this.nodeID,o,s=>{e(s)}):x(this.nodeID,o)}}}const Re=()=>{const t=`|{: colspan="4" rowspan="1"}\u6807\u9898|{: colspan="1" class="fn__none"}|{: colspan="1" class="fn__none"}|{: colspan="1" class="fn__none"}|
| :-------------------------------: | :--------------------------------: | :--------------------------------: | :--------------------------------: |
|{: colspan="1"}\u5934\u50CF|{: colspan="1"}\u540D\u5B57|{: colspan="1"}\u7B49\u7EA7|\u6280\u80FD|
|..(icon)|..(name)|..(level)|..(skill)|
{: colgroup="width: 94px;|width: 121px;|width: 95px;|width: 116px;" custom-nioptable="123" fold="0" id="20231120114455-g1jmigv" updated="20231130193916"}`,o=t.split(`
`).slice(0,-1).map(i=>i.split(new RegExp("(?<!\\\\)\\|")).map(n=>n.replace(/\\\|/g,"|"))),s=[[{content:"",config:""}]];o.forEach((i,n)=>{s[n]=[],i.forEach((l,r)=>{s[n][r]=K(l)}),s[n]=s[n].slice(1,-1)}),console.log(t),console.log(s)},ue=/{:\s*(.+?)\s*}/,K=t=>{const e=t.match(ue);if(e){const o=t.replace(e[0],""),s=he(e[1]),i=s.attributes,n=!!(i.colspan&&i.colspan>1||i.rowspan&&i.rowspan>1);return{content:o,config:i,configNo:s.length,resize:n,valueType:"",colspan:i.colspan?parseInt(i.colspan):1,rowspan:i.rowspan?parseInt(i.rowspan):1}}else return{content:t,config:{},configNo:0,resize:!1,valueType:"",colspan:1,rowspan:1}};function he(t){const e=/(\S+)=["']([^"']+)["']/g,o=t.match(e);if(!o)return{};const s={};let i=0;return o.forEach(n=>{const[l,r,a]=n.match(/(\S+)=["']([^"']+)["']/);s[r]=a,i++}),{attributes:s,length:i}}class pe{constructor(e,o){this.cells=[],this.dashRowNum=1,this.colgroup=[],this.rowsStyleStrs=[],this.end="",this.cards=[],this.direction={card:0,x:0,y:0},this.curCell={card:0,x:0,y:0},this.parseTable(e,o)}parseTable(e,o){const s={};let i=!1;const n=e.split(`
`);this.end=n[n.length-1],n.slice(0,-1).map(r=>r.split(new RegExp("(?<!\\\\)\\|")).map(a=>a.replace(/\\\|/g,"|"))).forEach((r,a)=>{this.cells[a]=[];let c=!1;s[a]||(s[a]=0),r.forEach((u,d)=>{if(this.cells[a][d]=K(u),!i&&this.cells[a][d].rowspan>1){c=!0;for(let h=0;h<this.cells[a][d].rowspan;h++)s[a+h]?s[a+h]+=1:s[a+h]=1}}),!i&&!c&&s[a]===0&&(i=!0,this.dashRowNum<a&&(this.dashRowNum=a)),this.cells[a]=this.cells[a].slice(1,-1)}),this.getRawColgroup(o),this.getMdSettingFromTable()}removeEmpetyInputRows(e){const o=e.avTable.data.view;let s=-1;for(let n=0;n<o.columns.length;n++)if(o.columns[n].type==="block"){s=n;break}const i=[];for(let n=0;n<o.rows.length;n++)o.rows[n].cells[s].value.block.content===""&&i.push(n);for(let n=i.length-1;n>=0;n--)o.rows.splice(i[n],1)}caculateColAndRowGroup(e){this.cells.forEach((o,s)=>{o.forEach((i,n)=>{switch(e.renderMethod){case 1:break;case 2:i.colspan>1&&o.length==n+i.colspan&&(i.colspan+=e.rows.length-1,i.config.colspan=i.colspan);break;case 3:i.rowspan>1&&this.cells.length==s+i.rowspan+1&&(i.rowspan+=e.rows.length,i.config.rowspan=i.rowspan);break;default:break}})})}Rebuild(e){const o=this.cards.map(n=>n.map(l=>"|"+l.map(r=>{let a="";return r.configNo>0&&(a="{: "+Object.entries(r.config).map(([c,u])=>`${c}="${u}"`).join("  ")+"}"),a+r.content}).join("|")).join(`|
`)).join("");this.end=e.renderMethod===2?$(this.end,["fold","id","updated","colgroup"]):$(this.end,["fold","id","updated"]);let s=' id="'+e.nodeID+'" ';e.renderMethod===2&&(s+=' colgroup="'+this.colgroup.map(n=>"width: "+n+";").join("|")+'" ');const i=this.end;return this.end=i.slice(0,2)+s+i.slice(2),`${o}
${this.end}`}RebuildAsCard(e){const o=$(this.end,["fold","id","updated","colgroup"]),s=` id="${e.nodeID}"  data-type="NodeHTMLBlock" `;this.end=o.slice(0,2)+s+o.slice(2);const i=me(this.cards.length,this.cells.length-1,this.colgroup,this.rowsStyleStrs,e),n=[];return this.cards.forEach((l,r)=>{l.forEach((a,c)=>{if(this.dashRowNum!=c){const u=c>this.dashRowNum?c-1:c;a.forEach((d,h)=>{const m=i.cells[r][u][h];if(m.innerHTML=d.content,d.configNo>0){if(d.colspan>1||d.rowspan>1)for(let v=0;v<d.colspan;v++)for(let g=0;g<d.rowspan;g++)v===0&&g===0||n.push(i.cells[r][u+g][h+v]);if(d.colspan>1){m.setAttribute("colspan",`${d.colspan}`);let v=parseInt(m.style.width);for(let g=1;g<d.colspan;g++)v+=parseInt(i.cells[r][u][h+g].style.width);m.style.width=v+"px"}d.rowspan>1&&m.setAttribute("rowspan",`${d.rowspan}`)}})}}),n.forEach(a=>{a.className="fn__none"})}),`<div>${i.body.innerHTML}</div>
${this.end}`}makeToCard(e){this.cards=[],this.removeEmpetyInputRows(e),this.caculateColAndRowGroup(e);const o=this.cells[0].length,s=this.cells.length,i=e.titles.length,n=e.rows.length,l=this.cards,r={card:0,x:0,y:0},a=this.direction;if(a.card==1?(ve(this.cells),e.rows.forEach((h,m)=>{l[m]=e.deepCopy(this.cells)})):l[0]=e.deepCopy(this.cells),a.x===1){const h=l[0],m=this.colgroup[this.colgroup.length-1];for(let v=0;v<e.rows.length-1;v++)this.colgroup.push(m);for(let v=0;v<s;v++){const g=JSON.stringify(h[v][o-1]);e.rows.forEach((b,E)=>{E!=0&&h[v].push(JSON.parse(g))})}}if(a.y===1){const h=l[0],m=e.rows.length,v=h[0].length;let g=JSON.stringify(h[s-1]);const b=this.dashRowNum===s-1;b&&(g=JSON.stringify(h[s-2]));for(let E=1;E<m;E++)b?h.splice(h.length-1,0,JSON.parse(g)):h.push(JSON.parse(g))}const c=[],u=/\.\.\((.*?)\)/;this.cells.forEach((h,m)=>{h.forEach((v,g)=>{v.content.match(u)&&c.push({x:m,y:g})})}),e.titles.forEach((h,m)=>{if(h.name!=""){const v=`..(${h.name})`;c.forEach(g=>{const b=this.cells[g.x][g.y];if(new RegExp(v).test(b.content))for(let _=0;_<n;_++){const C=this.getOffsetCell(g,_),w=e.rows[_].cells[m];let I="[None Data]",f=w.value[w.valueType];switch(w.valueType){case"block":I=w.value.block.content;break;case"number":I=w.value.number.content;break;case"phone":I=w.value.phone.content;break;case"mAsset":if(w.value.mAsset&&(e.renderMethod===1?I=`<span class='imgDiv'><img src="${w.value.mAsset[0].content}"></span>`:I=`![image](${w.value.mAsset[0].content})`),w.value.mAsset){const p=w.value.mAsset.length;e.renderMethod===1?p===1?I=`<span class='imgDiv'><img src="${w.value.mAsset[0].content}"></span>`:I=`<span class='AssetContainer'>${w.value.mAsset.map(k=>k.type==="image"?`<span class='imgDiv'><img src='${k.content}' alt='${k.name}'></span>`:`<span class='fileDiv'><a href='${k.content}' title='${k.name}'>${k.name}</a></span>`).join("")}</span>`:p===1?I=w.value.mAsset[0].type==="image"?`![image](${w.value.mAsset[0].content})`:`![file](${w.value.mAsset[0].content})`:I=`${w.value.mAsset.map(k=>k.type==="image"?`![${k.name}](${k.content})`:`[${k.name}](${k.content})`).join("")}`}else I="[No Assets]";break;case"select":f=w.value.mSelect,f&&(I=f.length>0?f[0].content:"None Select");break;case"mSelect":f=w.value.mSelect,f&&(I=f.length>0?f.map(p=>p.content).join(","):"None Select");break;default:f.content&&(I=f.content);break}C.content=C.content.replace(v,I)}})}})}getOffsetCell(e,o){let s=0,i=e.x,n=e.y;return this.direction.card===1&&(s=o),this.direction.y===1&&(i+=o),this.direction.x===1&&(n+=o),this.cards[s][i][n]}getRawColgroup(e){this.colgroup=JSON.parse(e.colgroup)}getMdSettingFromTable(){const e=[];this.cells.forEach((o,s)=>{if(s!=this.dashRowNum){const i=o[0].content,n=/\.\.style\(([^)]*)\)/,l=i.match(n);if(l&&l[1]){const r=l[1];let a=l[1];a.length>1&&a.charAt(a.length-1)!==";"&&(a=a+";"),e.push(a),o[0].content=i.replace(l[0],"")}else e.push("")}}),this.rowsStyleStrs=e}}const L=(t,e=null)=>{(0,D.fetchPost)("/api/block/getBlockKramdown",{id:t.resourceID},o=>{const s=o.data.kramdown,i=/data-av-id="([^"]+)"/,n=s.match(i);if(n)t.resourceAVID!=n[1]&&(t.resourceAVID=n[1]);else{console.log("No av-id"),t.resourceAVID="",e&&e(!1);return}e&&e(!0)})},Me=(t,e=null)=>{fetchPost("/api/block/getBlockKramdown",{id:t.resourceID},o=>{const s=o.data.kramdown,i=/data-av-id="([^"]+)"/,n=s.match(i);if(n)t.resourceAVID!=n[1]&&(t.resourceAVID=n[1]);else{console.log("No av-id"),t.resourceAVID="",e&&e(!1);return}e&&e(!0)})},xe=t=>{};function x(t,e,o=null){const s=JSON.stringify({id:t,attrs:e});(0,D.fetchPost)("/api/attr/setBlockAttrs",{id:t,attrs:e},i=>{o&&o(i)})}function fe(t,e,o=null,s=null){const i={id:t};return(0,D.fetchPost)("/api/attr/getBlockAttrs",i,n=>{n.data[e]?o&&o(n.data[e]):s&&s(n)}),!1}function Ne(t,e){return S(this,null,function*(){const o={id:t};return fetchPost("/api/attr/getBlockAttrs",o,s=>{const i=s.data[e];return i||null}),null})}function Ve(t,e=null){fetchPost("/api/av/renderAttributeView",{id:t},o=>{e&&e(o)})}function W(t,e,o=null){(0,D.fetchPost)("/api/block/updateBlock",{dataType:"markdown",data:e,id:t},s=>{o&&o(s)})}function U(t,e,o=null){(0,D.fetchPost)("/api/notification/pushMsg",{msg:t,data:e},s=>{o&&o(s)})}function G(t,e,o=null){(0,D.fetchPost)("/api/notification/pushErrMsg",{msg:t,data:e},s=>{o&&o(s)})}const Y=(t,e=30)=>S(void 0,null,function*(){const o="custom-nioptablewait";let i=0,n=!0;const l=()=>{i++>e&&(n=!1,i=0)};for(x(t,{[o]:"1"},r=>{n=!1});n;)yield new Promise(r=>setTimeout(r,50)),l();for(n=!0,x(t,{[o]:""},r=>{n=!1});n;)yield new Promise(r=>setTimeout(r,50)),l()}),$=(t,e)=>{const o=e.map(n=>`${n}="[^"]*"`).join("|"),s=new RegExp(o,"g");return t.replace(s,"")};function me(t,e,o,s,i){const n=document.createElement("div"),l=document.createElement("style"),r=ge();l.textContent=`
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
`,n.append(l);const a=document.createElement("div");a.className="cardContainer",n.append(a);const c=[];for(let u=0;u<t;u++){const d=document.createElement("div");d.className="niop-card";const h=document.createElement("table");for(let m=0;m<e;m++){const v=document.createElement("tr");if(s[m]!=""){const g=s[m];v.setAttribute("style",g)}m===0&&(v.className="thread");for(let g=0;g<o.length;g++){const b=document.createElement("td");b.style.width=o[g],b.style.height="inherit",c[u]||(c[u]=[]),c[u][m]||(c[u][m]=[]),c[u][m][g]=b,v.appendChild(b)}h.appendChild(v)}d.appendChild(h),a.appendChild(d)}return{body:n,cells:c}}function ge(){const t=window.getComputedStyle(document.documentElement);return{backgroundColor:t.getPropertyValue("--b3-theme-background"),surface:t.getPropertyValue("--b3-theme-surface"),surfaceLight:t.getPropertyValue("--b3-theme-surface-lighter"),cellBorderColor:t.getPropertyValue("--b3-border-color"),primarylight:t.getPropertyValue("--b3-theme-primary-light"),primarylighter:t.getPropertyValue("--b3-theme-primary-lighter"),primarylightest:t.getPropertyValue("--b3-theme-primary-lightest"),listhover:t.getPropertyValue("--b3-list-hover"),tooltipscolor:t.getPropertyValue("--b3-tooltips-color"),tooltipsbackground:t.getPropertyValue("--b3-tooltips-background")}}function $e(t){const e={backgroundColor:"",surface:"",surfaceLight:"",cellBorderColor:""},o=t.querySelector("thead");if(o){const n=window.getComputedStyle(o);e.surface=n.backgroundColor}const s=t.querySelector("tbody");if(s){const n=window.getComputedStyle(s);e.surfaceLight=n.backgroundColor}const i=t.querySelectorAll("td");if(i.length>0){const n=window.getComputedStyle(i[0]);e.cellBorderColor=n.borderColor}return e}function ve(t){const e=/\[([^\]]*)\]\(([^)]+)\)/g;t.forEach(o=>{o.forEach(s=>{let i;for(;(i=e.exec(s.content))!==null;){const n=i[0],l=i[1],r=i[2],a=s.content[i.index-1]==="!",c=a?`<img style="max-width:px;" src="${r}" alt="${l}">`:`<a href="${r}">${l}</a>`;s.content=s.content.replace(a?"!"+n:n,c)}})})}const be=t=>{throw new Error("Function not implemented.")};module.exports=P})();
