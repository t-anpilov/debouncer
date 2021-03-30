var debounce = function (func, timeDelay) {
    var timeout;
    return function (event) {
        var later = function () {
            func(event);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, timeDelay);
    };
};
function input($event) {
    var elem = $event.target;
    console.log("value: " + elem.value);
}
var debounceForInput = debounce(input, 200);
var textField = document.getElementById('textField');
textField.addEventListener('input', debounceForInput);
