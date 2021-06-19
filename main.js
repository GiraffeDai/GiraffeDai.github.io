setTimeout(function () {
    document.getElementById("dcframe").style.height = "400px";
}, 4000);

var isMenuOpen = false;
function menuClick() {
    var lis = document.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        var l = lis[i];
        var sec = 0.1 * (i + 1);
        if (isMenuOpen) {
            l.style.animation = "liFadeOut " + sec + "s linear 1";
            l.style.opacity = 0;
        } else {
            l.style.animation = "liFadeIn " + sec + "s linear 1";
            l.style.opacity = 1;
        }
    }
    isMenuOpen = !isMenuOpen;
}
