(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://apis.google.com/js/platform.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'googleplus'));

$(function(){
  $('.logo-p').each(function(){
    var $this = $(this);

    $this.click(function(e){
      e.preventDefault();

      window.open(
        'https://plus.google.com/share?url=' + $this.data('url'),
        'popupwindow',
        'scrollbars=yes,width=500,height=465'
      ).focus();
    });
  });
});