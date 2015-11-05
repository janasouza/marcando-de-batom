$(function(){
    $page = jQuery.url.attr("file");
    if(!$page) {
        $page = 'index.html';
    }
    $('#menu a').each(function(){
        var $href = $(this).attr('href');
        if ( ($href == $page) || ($href == '') ) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});

$(".voltar-ao-topo").hide();

$(window).scroll(function(){

    if  ($(window).scrollTop() > 100){

        $(".voltar-ao-topo").fadeIn();

    }else{

    	$(".voltar-ao-topo").fadeOut();
    }
});

$(".voltar-ao-topo").click(function(event){
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});

(function() {
  //Seleceiona os elementos e os atribuia a variaveis
  var btnOpen = $("#btnOpen");
  var menu = $("#menu");
  var btnOpenCategorias = $( "#btnOpenCategorias" );
  var categoriasList = $( "#categoriasList" );

  //Função para exibir ou ocultar os itens do menu
  btnOpen.click(function() {
    menu.slideToggle( "slow", function() {
      // Animation complete.
    });
  });

  btnOpenCategorias.click(function() {
    categoriasList.slideToggle( "slow", function() {
      // Animation complete.
    });
  });

  //Cria a media querie
  var mediaQuery = window.matchMedia("(min-width: 570px)");

  //Verifica a media query e determina se os itens do menu deve aparecer ou não
  if (mediaQuery.matches) {
    menu.show();
    categoriasList.show();
  } else {
    menu.hide();
    categoriasList.hide();
  }

  //Verifica alterações e e determina se os itens do menu deve aparecer ou não
  mediaQuery.addListener(function(changed) {
    if(changed.matches) {
      menu.show();
      categoriasList.show();
    } else {
      menu.hide();
      categoriasList.hide();
    }
  });
})();
