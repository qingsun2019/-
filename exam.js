// ==UserScript==
// @name         取消禁用复制
// @description         取消禁用右键禁用菜单与复制功能
// @description:zh-TW   取消禁用右鍵禁用菜單與複製功能
// @description:zh-CN   取消禁用右键禁用菜单与复制功能
// @namespace    http://tampermonkey.net/
// @author       SunQing
// @include      https://rdjy.tongji.edu.cn/*
// @version      0.3
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 取消禁用右键菜单
    document.oncontextmenu = function(){
        event.returnValue = true;
    };
    // 取消禁用选中功能
    document.onselectstart = function(){
        event.returnValue = true;
    };
})();