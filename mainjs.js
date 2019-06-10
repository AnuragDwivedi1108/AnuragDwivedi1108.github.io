
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbari").style.top = "0";
  } else {
    document.getElementById("navbari").style.top = "-50px";
  }
}
window.onload= function(){
	$('.loading').fadeOut("slow");
}
function hideLoader() {
    $('#loading').hide();
}

$(window).ready(hideLoader);
setTimeout(hideLoader, 20 * 1000);

var getValue = function() {
		return $(window).scrollTop();
	}