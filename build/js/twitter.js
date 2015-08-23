$(function(){
  $('.logo-t').each(function(){
    var $this = $(this);

    $this.click(function(e){
      e.preventDefault();

       window.open(
        'https://twitter.com/intent/tweet'
            + '?text=' + $this.data('text')
            + '&via=' + $this.data('via')
            + '&url=' + $this.data('url'),
        'popupwindow',
        'scrollbars=yes,width=550,height=500'
      ).focus();
    });
  });
});