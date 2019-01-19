// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const UI_DEBUGGING = false;
window.onload = function(){/*
    document.getElementById('header_divider').style.marginTop = document.getElementsByTagName('header')[0].getBoundingClientRect().height + "px";*/
    //메인 webview 높이 맞춤
    document.getElementById('webview_main').style.height=(window.innerHeight-document.getElementsByTagName('header')[0].getBoundingClientRect().height)+'px';
    makeSectionsToPage();
};
window.onresize = function(){
    //메인 webview 높이 맞춤
    document.getElementById('webview_main').style.height=(window.innerHeight-document.getElementsByTagName('header')[0].getBoundingClientRect().height)+'px';
    makeSectionsToPage();

};
function makeSectionsToPage(){//모든 페이지 클래스를 가지는 태그에 대해 하나의 페이지 크기로 만들어버림.
    let elements = document.getElementsByClassName('page');
    for(let i in elements){
        makeElementWithPage(elements[i]);
    }
}
function makeElementWithPage(element){
    element.style.height=window.innerHeight-document.getElementsByTagName('header')[0].getBoundingClientRect().height+'px';
    element.style.marginTop=document.getElementsByTagName('header')[0].getBoundingClientRect().height+'px';
    element.style.marginBottom='0px';
    if(UI_DEBUGGING){
        element.style.border="1px solid red";
    }
}