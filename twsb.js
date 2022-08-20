// ==UserScript==
// @name         体温上报
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  shangbaotiwen
// @author       pikaqiu
// @match        https://toc.lzzcairport.com/yqsbb/yqsbb.aspx
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){

        $("#name").val ("王原");
        $("#sfz").val ("620102199804174356");
        $("#temp").val("36.2");
        $("#submit_btn").click();
    },2000);

    document.location.reload();
})();
