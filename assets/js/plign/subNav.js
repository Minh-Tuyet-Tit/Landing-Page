var mainNav = document.getElementById('main-nav');

var cotrolMainNav = document.getElementById('toggle');

var listCheckBox = mainNav.querySelectorAll('input');
function removeChecked(index) {
    listCheckBox.forEach((check, i) => {
        if (i !== index) {
            check.checked = false;
        }
    });
}

listCheckBox.forEach((check, index) => {
    check.addEventListener('click', function () {
        removeChecked(index);
    });
});

