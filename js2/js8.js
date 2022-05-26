let table = document.getElementById("bagua-table");

let selectedTd;

table.onclick = function (event) {
    let target = event.target;

    while (target != this) {
        if (target.tagName == "TD") {
            highlight(target);
            return;
        }
        target = target.parentNode;
    }
};

function highlight(node) {
    if (selectedTd) {
        selectedTd.classList.remove("highlight");
    }
    selectedTd = node;
    selectedTd.classList.add("highlight");
}

contents.onclick = function (event) {
    function handleLink(href) {
        let isLeaving = confirm(`Leave for ${href}?`);
        if (!isLeaving) return false;
    }

    let target = event.target.closest("a");

    if (target && contents.contains(target)) {
        return handleLink(target.getAttribute("href"));
    }
};

ball.onmousedown = function (event) {
    ball.style.position = "absolute";
    ball.style.zIndex = 1000;

    document.body.append(ball);

    function moveAt(pageX, pageY) {
        ball.style.left = pageX - ball.offsetWidth / 2 + "px";
        ball.style.top = pageY - ball.offsetHeight / 2 + "px";
    }
    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    document.addEventListener("mousemove", onMouseMove);

    ball.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        ball.onmouseup = null;
    };
};
