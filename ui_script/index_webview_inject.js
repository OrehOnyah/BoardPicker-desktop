__BoardPickerTools = {
    test_trans_func: function () {
        alert('test_called');
        return "testString";
    },
    set_atag_onclick() {
        alert('atag_onclick called');
        if(window.addEventListener){
            window.addEventListener('load',function(){
                let elements = document.getElementsByTagName('*');
                alert(elements+' ');
                for (let i in elements) {
                    elements[i].onclick = function (event) {
                        alert('element clicked');
                        event.stopPropagation();
                    }
                }
            });
        }
        else if(window.attachEvent){
            window.attachEvent('load',function(){
                let elements = document.getElementsByTagName('*');
                alert(elements);
                for (let i in elements) {
                    elements[i].onclick = function (event) {
                        alert('element clicked');
                        event.stopPropagation();
                    }
                }
            });
        }
    }
};