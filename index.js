$(document).ready(async function() {
    let i = 0;
    $("#pause-btn").on("click", function () {
        if (i == 0) {
            $("#pause-btn").text("Продолжить")
            $("#video-intro-bg").trigger('pause');
            i = 1;
        } else {
            $("#video-intro-bg").trigger('play');
            $("#pause-btn").text("На паузу")
            i = 0;
        }
    })

    $(document).on("scroll", function () {
        if ($(document).scrollTop() >= 240) {
            // $("header").css("background-color", "var(--secondary-color)");
            $(":root").css("--header-secondary", "var(--header-secondary-scroll-color)")
            $(":root").css("--header-primary", "var(--header-primary-scroll-color)")
        } else {
            // $("header").css("background-color", "var(--header-secondary-top-color)");
            $(":root").css("--header-secondary", "var(--header-secondary-top-color)")
            $(":root").css("--header-primary", "var(--header-primary-top-color)")


        }
    })

});