$(document).ready(function () {
  $("#myCarousel").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});



$(document).ready(function () {

  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();

 
  if (parseInt($(window).width()) < 575) {
    $('.nav').css({ 'background-color': '#f2e162' });
  }
  else{
    $(".nav").css('background-color', 'transparent');
  }

  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      // console.log(scroll_start + " == " + offset.top);

      if (parseInt($(window).width()) < 575) {
        $('.nav').css({ 'background-color': '#f2e162' });
        
      }
      else{
        if (scroll_start < 260) {
          $(".nav").css('background-color', 'transparent');
        } else {
          $('.nav').css({ 'background-color': '#f2e162' });
        }
      }
     
    });
  }
});


// $(".searchBox").click(function(){
//     $(".searchBox").css( { "padding-left" : "100px" } );
//     console.log("clicked");
// });


$(".searchBox").click(10000, function () {
  $(".searchInputBox").toggle("slow");
});


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();