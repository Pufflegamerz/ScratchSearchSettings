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
    document.getElementById("navigation").innerHTML = document.getElementById("navigation").innerHTML + "<div style='display: table;' id='searchSettings'><center><p style='color:black;'>Scratch Search Settings</p><span style='font-size: 15px;'>Show the next </span> <input style='width: 20px; height: 15px font-size: 10px; text-align: center;' id='resultNumber'> <span style='font-size: 15px;'>results</span> <div style='height:120px; padding:2%; display: table-cell; text-align: center; vertical-align: bottom;'><button style='width: 100px; height: 20px; border: transparent; background-color: lightgreen; display: table-cell; vertical-align: bottom;' id='apply'>Apply</button></div> </center></div>";
    (function() {
        document.getElementById("apply").onclick = function() {
            // Set a function to run every "interval" seconds a total of "x" times
            var x = document.getElementById("resultNumber").value;
            var interval = 500;

            if (+x > 100) {
                alert("Woah! A number that high would break your crash your browser.");
            } else {
                for (var i = 0; i < x; i++) {
                    setTimeout(function() {
                        document.getElementsByClassName("button white")[0].click();
                    }, i * interval);
                }
            }
        };
    })();
    document.getElementById("searchSettings").style.position = "fixed";
    document.getElementById("searchSettings").style.right = "5px";
    document.getElementById("searchSettings").style.color = "black";
    document.getElementById("searchSettings").style.top = "242px";
    document.getElementById("searchSettings").style.width = "200px";
    document.getElementById("searchSettings").style.boxShadow = "0 0 3px rgba(0,0,0,.25)";
    document.getElementById("searchSettings").style.borderRadius = "4px";
    document.getElementById("searchSettings").style.height = "210px";
    document.getElementById("searchSettings").style.backgroundColor = "white";
/*                                                                                            DRAGGABLE SCRIPT THAT MIGHT BE ADDED
    // Learnt and adapted from: http://tech.pro/tutorial/650/javascript-draggable-elements from a user comments post/code (@TheDesigner in 2009-ish).

// Global variables without any specified type (type will be determined when used in the functions below).
var obj, x, y, prev_x, prev_y;

function drag(e) {
  // Yep, use the object I just clicked on.
  obj = e.target;
  // Set current X coordinate minus distance left from offsetParent node.
  prev_x = x - obj.offsetLeft;
  // Set current Y coordinate minus distance top from offsetParent node.
  prev_y = y - obj.offsetTop;
  // Change the object's color so it looks like it's usable/moveable.
}

function move(e) {
  // Always track and record the mouse's current position.
  if (e.pageX) {
    x = e.pageX; // X coordinate based on page, not viewport.
    y = e.pageY; // Y coordinate based on page, not viewport.
  }
//  else if (e.clientX) {
//    x=clientX; // X coordinate based on viewport.
//    y=clientY; // Y coordinate based on viewport.
//  }

  // If the object specifically is selected, then move it to the X/Y coordinates that are always being tracked.
  if(obj) {
    obj.style.left = (x - prev_x) + 'px';
    obj.style.top = (y - prev_y) + 'px';
  }
}

function drop() {
  // Revert to the default css style.
  // Remove the attached event from the element so it doesn't keep following your mouse. :)
  obj = false;
}

// Make a specific element movable
document.getElementById('searchSettings').onmousedown = drag;
document.onmousemove = move;
document.onmouseup = drop;

*/
})();
