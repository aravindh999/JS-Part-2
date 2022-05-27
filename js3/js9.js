window.onload = function () {
    console.log("Page loaded");
};

window.onbeforeunload = function () {
    return "There are unsaved changes. Leave now?";
};

email.onblur = function () {
    if (!email.value.includes("@")) {
        email.classList.add("invalid");
        error.innerHTML = "Please enter a correct email.";
    }
};

email.onfocus = function () {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        error.innerHTML = "";
    }
};

login.oninput = function () {
    logi.innerHTML = login.value;
};

select.options[2].selected = true;

text1.onpaste = function (event) {
    alert("paste: " + event.clipboardData.getData("text/plain"));
    event.preventDefault();
};

text1.oncut = text1.oncopy = function (event) {
    alert(event.type + "-" + document.getSelection());
    event.preventDefault();
};

let form = document.createElement("form");
form.action = "https://google.com/search";
form.method = "GET";
form.style.margin = "30px";
form.innerHTML = '<input name="q" placeholder="Google Search">';

document.body.append(form);

let script = document.createElement("script");

script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js";
document.head.append(script);

script.onload = function () {
    console.log(_.VERSION);
};

let img = document.createElement("img");
img.src = "https://js.cx/clipart/train.gif";

img.onload = function () {
    console.log(`Image loaded, size ${img.width}x${img.height}`);
};
img.onerror = function () {
    alert("Error occurred while loading image");
};
area.onselect = function () {
    from.value = area.selectionStart;
    to.value = area.selectionEnd;
};
