const e=(e,o)=>{"ie"==(()=>{let e=window.navigator.userAgent;return e.indexOf("MSIE")>=0?"ie":e.indexOf("Firefox")>=0?"Firefox":e.indexOf("Chrome")>=0?"Chrome":e.indexOf("Opera")>=0?"Opera":e.indexOf("Safari")>=0?"Safari":void 0})()?t(e):n(e,o)},t=(e,t)=>{let n=e,o=new ActiveXObject("Excel.Application"),i=o.Workbooks.Add(),a=i.Worksheets(1),l=document.body.createTextRange();l.moveToElementText(n),l.select,l.execCommand("Copy"),a.Paste(),o.Visible=!0;try{o.Application.GetSaveAsFilename("Excel.xls","Excel Spreadsheets (*.xls), *.xls")}catch(s){print("Nested catch caught "+s)}finally{i.SaveAs(fname),i.Close(savechanges=!1),o.Quit(),o=null,window.setInterval("Cleanup();",1),window.setInterval("Cleanup();",1)}},n=(e,t)=>{const n="data:application/vnd.ms-excel;base64,"+function(e){return window.btoa(unescape(encodeURIComponent(e)))}((o={worksheet:t,table:e},'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body><table>{table}</table></body></html>'.replace(/{(\w+)}/g,((e,t)=>o[t]))));var o;if(navigator.userAgent.indexOf("Firefox")>-1)window.location.href=n;else{const e=document.createElement("a");let o;e.href=n,e.download=t||"",window.MouseEvent?o=new MouseEvent("click"):(o=document.createEvent("MouseEvents"),o.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null)),e.dispatchEvent(o)}},o=(t,n,o)=>{const i={image:function(e,t){return`<td style="width: ${(t=Object.assign({width:40,height:60},t)).width}px; height: ${t.height}px; text-align: center; vertical-align: middle"><img src="${e}" width=${t.width} height=${t.height}></td>`},text:function(e){return`<td style="text-align: center">${e}</td>`}};let a=t.reduce(((e,t)=>e+=`<th>${t.title}</th>`),"");a=`<thead><tr>${a}</tr></thead>`;let l=n.reduce(((e,n)=>e+=`<tr>${t.reduce(((e,t)=>e+=i[t.type||"text"](n[t.key],t)),"")}</tr>`),"");l=`<tbody>${l}</tbody>`;e(a+l,o)};export{o as t};
