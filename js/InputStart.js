
function userInput () {
var input = document.createElement("input");
input.type = "number";
container.appendChild(input);
}

function minutesInput () {
var input = document.createElement("input");
input.type = "number";
container.appendChild(input);
}

$('#myform').append(html.join(''));

function createRadioElement(name, checked) {
    var radioInput;
    try {
        var radioHtml = '<input type="radio" name="' + name + '"';
        if (checked) {
            radioHtml += ' checked="checked"';
        }
        radioHtml += '/>';
        radioInput = document.createElement(radioHtml);
    } catch (err) {
        radioInput = document.createElement('input');
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('name', name);
        if (checked) {
            radioInput.setAttribute('checked', 'checked');
        }
    }

    return radioInput;
}

function startButton () {
var el = document.getElementById("clickMe");
if (el.addEventListener)
    el.addEventListener("click", doFunction, false);
else if (el.attachEvent)
    el.attachEvent('onclick', doFunction);
}