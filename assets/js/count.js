var listCount = document.querySelectorAll('.statistical-bottom-item .count');

var statistical = document.getElementById('statistical');

function counting(el) {
    var count = 0;
    if (parseInt(el.innerText) == NaN) {
        return;
    }
    var to = parseInt(el.innerText);
    var step = to / 100;
    var timeCount = setInterval(() => {
        count += step;
        if (count > to) {
            el.innerText = to;
            clearInterval(timeCount);
        }
        el.innerText = Math.round(count);
    }, 10);
}

listCount.forEach((count) => {
    counting(count);
});
