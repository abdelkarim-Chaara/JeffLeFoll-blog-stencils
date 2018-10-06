(function($) {


  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 992;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

 

})(jQuery); // End of use strict

$(function() {
  var limit = 20;
  var chars = $("#article").text(); 
  if (chars.length > limit) {
      var visiblePart = $("<span> "+ chars.substr(0, limit-1) +"</span>");
      var dots = $("<span class='dots'>... </span>");
      var hiddenPart = $("<span class='more'>"+ chars.substr(limit-1) +"</span>");
      var readMore = $("<span class='read-more'>Read More</span>");
      readMore.click(function() {
          $(this).prev().remove(); // remove dots
          $(this).next().show();
          $(this).remove(); // remove 'read more'
      });

      $("#article").empty()
          .append(visiblePart)
          .append(dots)
          .append(readMore)
          .append(hiddenPart);
  }
});


