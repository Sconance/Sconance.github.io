(function () {
    const total = 7;
    const number = Math.floor(Math.random() * total) + 1;
    const background = "/assets/img/backgrounds/" + number + ".png";

    function changeBackground() {
        const elements = document.querySelectorAll("*");

        elements.forEach(function (element) {
            const style = window.getComputedStyle(element);
            const bg = style.backgroundImage;

            if (bg && bg.includes("/assets/img/backgrounds/1.png")) {
                element.style.backgroundImage =
                    'url("' + background + '")';
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", changeBackground);
    } else {
        changeBackground();
    }
})();