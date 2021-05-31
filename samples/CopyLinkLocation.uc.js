// ==UserScript==
// @name           Copy Link Location
// @version        1.0
// @description	   Restore old label and accelerator key
// ==/UserScript==

/* 
  Compatibility Testing Results May 22-23, 2021 
    alice0775/userChrome.js - working
    MrOtherGuy/fx-autoconfig - working
    xiaoxiaoflood/firefox-scripts - working
*/

(function(){
  let myKeyChanges = [
    {
      id: 'context-copylink', 
      newkey: 'a',
      newlabel: 'Copy Link Location'
    },
    {
      id: 'context-copyemail', 
      newkey: 'A',
      newlabel: 'Copy Email Address'
    }
  ];

  for (var i=0; i<myKeyChanges.length; i++){
    var menuitem = window.document.getElementById(myKeyChanges[i].id);
    if (menuitem){
      if (myKeyChanges[i].newkey.length == 1){
        menuitem.setAttribute('accesskey', myKeyChanges[i].newkey);
      }
      if (myKeyChanges[i].newlabel.length > 0){
        menuitem.setAttribute('label', myKeyChanges[i].newlabel);
      }
    }
  }
})();
