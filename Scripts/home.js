
$("#about").load("../Markup/about.html", function () {
    //alert("about Loaded Successfuly.");
}, function () {
    alert("about Loading Failed");
});
$("#portfolio").load("../Markup/portfolio.html", function () {
   // alert("portfolio Loaded Successfuly.");
}, function () {
    alert("portfolio Loading Failed");
});
$("#contact").load("../Markup/contact.html", function () {
   // alert("contact Loaded Successfuly.");
}, function () {
    alert("contact Loading Failed");
});

$(".dropdown-toggle").on('click', function () {
    $(this).find('.caret').toggleClass('active');
});

$("body").on('click', function (event) {
    if ($(event.target).attr("class") == "dropdown-toggle") {
        return;
    }
    $(".dropdown-toggle").find('.caret').removeClass('active');
});
