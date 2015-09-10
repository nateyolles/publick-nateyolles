$(function(){
  $('.logo-l.share').each(function(){
    var $this = $(this);

    $this.click(function(e){
      e.preventDefault();

       window.open(
        'http://www.linkedin.com/shareArticle?mini=true'
            + '&url=' + $this.data('url')
            + '&title=' + $this.data('title')
            + '&summary=' + $this.data('summary')
            + '&source=nateyolles.com',
        'popupwindow',
        'scrollbars=yes,width=550,height=500'
      ).focus();
    });
  });
});