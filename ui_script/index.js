// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const UI_DEBUGGING = false;
const WEBVIEW_TRANSPORT_DEBUGGING = false;
window.onload = function () {/*
    document.getElementById('header_divider').style.marginTop = document.getElementsByTagName('header')[0].getBoundingClientRect().height + "px";*/
    //메인 webview 높이 맞춤
    document.getElementById('webview_main').style.height = (window.innerHeight - document.getElementsByTagName('header')[0].getBoundingClientRect().height) + 'px';
    //페이지 클래스를 가진 섹션을 윈도우 크기로 맞춤
    makeSectionsToPage();
};
window.onresize = function () {
    //메인 webview 높이 맞춤
    document.getElementById('webview_main').style.height = (window.innerHeight - document.getElementsByTagName('header')[0].getBoundingClientRect().height) + 'px';
    //웹뷰 내부 통신 테스트코드.
    if (WEBVIEW_TRANSPORT_DEBUGGING) {
        document.getElementById('webview_main').executeJavaScript('__BoardPickerTools.test_trans_func()', function (asdf) {
            alert(asdf);
        });
    }
    //페이지 클래스를 가진 섹션을 윈도우 크기로 맞춤
    makeSectionsToPage();
};

function makeSectionsToPage() {//모든 페이지 클래스를 가지는 태그에 대해 하나의 페이지 크기로 만들어버림.
    let elements = document.getElementsByClassName('page');
    for (let i in elements) {
        makeElementWithPage(elements[i]);
    }
}

function makeElementWithPage(element) {
    element.style.height = window.innerHeight - document.getElementsByTagName('header')[0].getBoundingClientRect().height + 'px';
    element.style.marginTop = document.getElementsByTagName('header')[0].getBoundingClientRect().height + 'px';
    element.style.marginBottom = '0px';
    if (UI_DEBUGGING) {
        element.style.border = "1px solid red";
    }
}

/* 버튼 이벤트 관련 */
if(window.addEventListener){
    window.addEventListener('load', function () {
        add_icon_listener_attach();
    });
}
else if(window.attachEvent){
    window.attachEvent('onload', function () {
        add_icon_listener_attach();
    });
}
function add_icon_listener_attach(){
    document.getElementById('add_icon').onclick=function(){
        document.getElementById('webview_main').executeJavaScript('__BoardPickerTools.set_atag_onclick()', function (asdf) {
            alert('inject succesed');
        });
    }
}
