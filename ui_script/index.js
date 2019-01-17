// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.onload = function(){
    document.getElementById('header_divider').style.marginTop = document.getElementsByTagName('header')[0].getBoundingClientRect().height + "px";
};