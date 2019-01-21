__BoardPickerTools = {
    test_trans_func: function () {
        alert('test_called');
        return "testString";
    },
    set_atag_onclick() {
        alert('atag_onclick called');
        let elements = document.getElementsByTagName('*');
        for (let i in elements) {
            elements[i].onclick = function (event) {
                alert('element clicked');
                event.stopPropagation();
            }
        }
    }
};