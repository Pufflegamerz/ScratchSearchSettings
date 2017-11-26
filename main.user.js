// Thank's for installing! :)
// ==UserScript==
// @name         Scratch Search Settings
// @icon		 https://pufflegamerz.github.io/ScratchSearchSettings/icon.png
// @website      https://github.com/Pufflegamerz/ScratchSearchSettings
// @namespace    https://scratch.mit.edu/search/projects*
// @version      0.1
// @description  Extends your searching setting on Scratch.
// @author       Pufflegamerz
// @match        https://scratch.mit.edu/search/projects*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById("navigation").innerHTML = document.getElementById("navigation").innerHTML + "<div id='searchSettings'><center><p style='color:black;'>Scratch Search Settings</p><span style='font-size: 15px;'>Show the next </span> <input style='width: 20px; height: 15px font-size: 10px; text-align: center;' id='resultNumber'> <span style='font-size: 15px;'>results</span><button style='width: 100px; height: 20px; border: transparent; background-color: lightgreen; margin-bottom: 0px; display: block;' id='apply'>Apply</button></center></div>";
     (function() {
        document.getElementById("apply").onclick = function() {
            for (var i = 0; i < document.getElementById("resultNumber").value; i++) {
	document.getElementsByClassName("button white")[0].click();
}
        };
    })();
    document.getElementById("searchSettings").style.position = "fixed";
    document.getElementById("searchSettings").style.right = "0px";
    document.getElementById("searchSettings").style.color = "black";
    document.getElementById("searchSettings").style.top = "240px";
    document.getElementById("searchSettings").style.width = "200px";
    document.getElementById("searchSettings").style.box = "0 0 3px rgba(0,0,0,.25)";
    document.getElementById("searchSettings").style.borderRadius = "4px";
    document.getElementById("searchSettings").style.height = "210px";
    document.getElementById("searchSettings").style.border = "1px solid black";
    document.getElementById("searchSettings").style.backgroundColor = "lightgrey";
})();
