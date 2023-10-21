let buttons = $("button");
// console.log(divs);

$(".material-icons").mouseover(function () {
  $(this).addClass("icons-animation");
});
$(".material-icons").mouseleave(function () {
  $(this).removeClass("icons-animation");
});
$("button").click(function (e) {
  let currentDiv = $(this).parent().attr("id");
  $(`#${currentDiv} h4 span`).toggleClass("details");
  $(this).children(".plus").toggleClass("plus-hide");
  $(this).children(".minus").toggleClass("minus-show");
  //   if ($(this) !== buttons) {
  //     $(`#${currentDiv} h4 span`).addClass("details");
  //     $(this).children(".plus").removeClass("plus-hide");
  //     $(this).children(".minus").removeClass("minus-show");
  //   }
});
