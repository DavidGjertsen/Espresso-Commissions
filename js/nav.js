$(() => {
    $("#navbtn").click(() => {
        $("#pagenav").toggleClass("active");
        $("#navbtn").toggleClass("active");
    });

    $(".navlink").click(() => {
        $("#pagenav").toggleClass("active");
        $("#navbtn").toggleClass("active");
    })
})
