window.fbAsyncInit = function() {
  FB.init({
    appId      : '1608641262757180',
    xfbml      : true,
    version    : 'v2.4'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

$(function(){
  $('.icon-f').click(function(e){
    e.preventDefault();

    FB.ui({
      method: 'share',
      href: location.href,
    }, function(response){});
  });
});