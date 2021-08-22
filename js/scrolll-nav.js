window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (window.innerWidth > 768) {

        if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)) {

            document.getElementById("navbar").style.height = "10%";
            document.getElementById("logo").style.fontSize = "30px";
        } else {

            document.getElementById("navbar").style.height = "15%";
            document.getElementById("logo").style.fontSize = "35px";
        }
    }
}