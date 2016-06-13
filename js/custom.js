(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-42965057-4', 'auto');
ga('send', 'pageview');

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


$(document).ready(function(){
var myNavBar = {

    flagAdd: true,
    elements: [],
    init: function (elements) {
        this.elements = elements;
    },
    add : function() {
        if(this.flagAdd) {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className += " fixed-theme";
            }
            this.flagAdd = false;
        }
    },
    remove: function() {
        for(var i=0; i < this.elements.length; i++) {
            document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
        }
        this.flagAdd = true;
    }
};

myNavBar.init(  [
    "header",
    "header-container",
    "brand"
]);
function offSetManager(){

    var yOffset = 500;
    var currYOffSet = window.pageYOffset;

    if(yOffset < currYOffSet) {
        myNavBar.add();
    }
    else if(currYOffSet < yOffset){
        myNavBar.remove();
    }

}
window.onscroll = function(e) {
    offSetManager();
}
offSetManager();
});
