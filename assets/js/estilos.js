$("#btnOcultar").click(() => {
    $(".ocultartabla").toggle("fast");
});


//configuaracion del tema oscuro Y claro
$(".btnClaro").click(() => {

    $(".btn").removeClass("btnOscuro").addClass("btnClaro");
    $("body").css("background-color", "white")
    $("button").css({ "color": "black" });
    localStorage.setItem("tema", "claro")
});
$(".btnOscuro").click(() => {
    $(".btn").removeClass("btnClaro").addClass("btnOscuro");
    $("body").css("background-color", "black")
    $("button").css({ "color": "white" });
    localStorage.setItem("tema", "oscuro")
});

$(() => {
    const tema = localStorage.getItem("tema");
    if (tema === "oscuro") {
        $("body").css("background-color", "black");
        $("button").css({ "color": "white" });
    }
})


//iconos

////////icono del sol
$(document).ready(function () {
    function SunAnimation() {
        $(".icon_sun").removeClass("bi-brightness-high").addClass("bi-brightness-alt-high")

        setTimeout(function () {
            $(".icon_sun").removeClass("bi-brightness-alt-high").addClass("bi-brightness-high")
        }, 500);
    };
    setInterval(SunAnimation, 1000);

    ////////icono de la luna
    function MoonAnimation() {
        $(".icon_moon").removeClass("bi-moon").addClass("bi-moon-stars")

        setTimeout(function () {
            $(".icon_moon").removeClass("bi-moon-stars").addClass("bi-moon")
        }, 500);
    };
    setInterval(MoonAnimation, 1000);
});

