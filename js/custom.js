var progressBar = $(".progress-bar");
progressBar.each(function(indx){
  $(this).css("width", $(this).attr("aria-valuenow") + "%");
});

var lastId,
topMenu = $("nav, #button-down"),
topMenuHeight = topMenu.outerHeight()+50,
menuItems = topMenu.find("a"),
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
});


menuItems.click(function(e){
  var href = $(this).attr("href"),
  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+100;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 1500);
  e.preventDefault();
});

$(window).scroll(function(){
  var fromTop = $(this).scrollTop()+topMenuHeight;

  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
    return this;
  });
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    menuItems
    .parent().removeClass("active")
    .end().filter("[href=#"+id+"]").parent().addClass("active");
  }
});

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#backtotop').fadeIn();
        } else {
            $('#backtotop').fadeOut();
        }
    });

    $('#backtotop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});
