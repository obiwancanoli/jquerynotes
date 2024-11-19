console.log($("img").attr("src"));

$("a").attr("href", "https://edhrec.com");


$("h1").click(function () {
    $("h1").css("color", "red");
});

// $("button").click(function () {
//     $("h1").css("color", "green");
//     $("h1").before("<button>New</button>");
// });


$(document).keypress(function (event) {
    $("h1").text((event.key));
});

//Even more flexible for adding event listener is using .on():
// Ex: instead of "mouseover", replace with keypress or click:

$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});


//ANIMATIONS:

// $("button").on("click", function() {
//     $("h1").hide();
// })

//Toggle between hide and show:
// $("button").on("click", function() {
//     $("h1").toggle();
// })

// Fade:
// $("button").on("click", function() {
//     $("h1").fadeOut();
// })

//Toggle Fade:
// $("button").on("click", function() {
//     $("h1").fadeToggle();
// })

//SlideUp:
// $("button").on("click", function() {
//     $("h1").slideUp();
// })

//Slide Toggle:
// $("button").on("click", function() {
//     $("h1").slideToggle();
// });

//ANIMATE:
$("button").on("click", function() {
      $("h1").animate({margin: "30%"});
    });
