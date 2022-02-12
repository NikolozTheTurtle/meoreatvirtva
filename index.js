$(function () {
    $(".nav-link").click(function (e) { 
        e.preventDefault();
        $(".act-link").removeClass("act-link");
        $(this).addClass("act-link");
        $(".headercar").addClass("d-none");
        let href = $(this).attr("href");
        if (href != "insidePages/start.html") {
            $(".mm").load(href);
        }else{
            $(".headercar").removeClass("d-none");
            $(".mm").load(href);
        }
    });
    $(document).on("click", ".contact-load-btn", function (e) {
        e.preventDefault();
        $(".act-link").removeClass("act-link");
        $("#nav-cont").addClass("act-link");
        let href = $(".contact-load-btn").attr("href");
        $(".mm").load(`insidePages/${href}`);
    });
    $(".foot-link").click(function (e) { 
        let dataType = $(this).attr("data-link-type");
        let ifError = $(this).attr("data-if-error");
        $(".mm").load(`insidePages/${dataType}.html`);
            $(".act-link").removeClass("act-link");
            if (dataType == "error404") {
                $(`.nav-link[data-topic="${ifError}"]`).addClass("act-link");
            }else{
                $(`.nav-link[href="insidePages/${dataType}.html"]`).addClass("act-link");
            }
        if (dataType != "start"){
            $(".headercar").addClass("d-none");
        }else{
            $(".headercar").removeClass("d-none");
        }
    });
    $(document).on("click", ".back-menu-btn", function (e) {
        e.preventDefault();
        let href = $(".back-menu-btn").attr("href");
        $(".act-link").removeClass("act-link");
        $(`.nav-link[href="insidePages/start.html"]`).addClass("act-link");
        $(".headercar").removeClass("d-none");
        $(".mm").load(`insidePages/${href}`);
    });
    $(document).on("click", ".bheaderbtn button", function (e) {
        e.preventDefault();
        if ($(this).hasClass("btn-all-post")) {
            $(".blogbody-all").removeClass("d-none");
            $(".blogbody").addClass("d-none");
        }else{
            $(".blogbody").removeClass("d-none");
            $(".blogbody-all").addClass("d-none");
        }
        $(".act-blog").removeClass("act-blog");
        $(this).addClass("act-blog");
    });
    $(document).on("click", ".read-more-btn", function (e) {
        e.preventDefault();
        $(".headercar").addClass("d-none");
        $(".mm").load("insidePages/aboutus.html");
        $(".act-link").removeClass("act-link");
        $(`.nav-link[data-topic="aboutus"]`).addClass("act-link");
    });
});