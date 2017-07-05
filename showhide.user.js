// ==UserScript==
// @name         Bitrix CRM Show/Hide
// @namespace    bitrix24
// @version      0.1
// @description  Bitrix CRM Show/Hide completed check item
// @author       Lesyuk Serg
// @include      http://crm.rw-soft.com/*
// @match        http://crm.rw-soft.com/*/tasks/task/view/*
// @updateURL    https://raw.githubusercontent.com/LesyukSerg/bitrix24_showhide/master/showhide.meta.js
// @downloadURL  https://raw.githubusercontent.com/LesyukSerg/bitrix24_showhide/master/showhide.user.js
// @grant        none
// ==/UserScript==

(function() {
    var div = document.getElementsByClassName('task-reminder');
    var itm = document.getElementsByClassName('task-detail-checklist-item-complete');
    var matches = document.cookie.match(new RegExp("(?:^|; )" + 'hide_completed' + "=([^;]*)"));

    div[0].innerHTML = div[0].innerHTML + ' | <a href="#" class="webform-field-action-link hide_completed non" onclick="var itm = document.getElementsByClassName(\'task-detail-checklist-item-complete\');if(itm[0].style.display != \'none\'){document.cookie = \'hide_completed=1\';this.innerHTML=\'Показать выполненные\';for(var i in itm){if(typeof(itm[i].style.display)!=\'undefined\')itm[i].style.display=\'none\';}}else{document.cookie = \'hide_completed=0\';this.innerHTML=\'Скрыть выполенные\';for(var i in itm){itm[i].style.display=\'block\';}}">Скрыть выполненные</a>';
    
    if (matches && matches[1] == '1') {
        for(var i=0; i<itm.length; i++) {
            if (typeof(itm[i].style.display) != 'undefined') itm[i].style.display='none';
        }
        
        document.getElementsByClassName('hide_completed')[0].innerHTML='Показать выполненные';
    }
})();
