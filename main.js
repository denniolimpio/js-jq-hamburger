// definisco le mie variabili
var openMenu = $(".header-right > a");
var closeMenu = $( ".close");
var burgerMenu = $(".hamburger-menu")

//apro il menu
$(openMenu).click(
  function()
  {
    $(burgerMenu).addClass("active");
  }
);

  // chiudo il menu
  $(closeMenu).click(
    function(){

      $(burgerMenu).removeClass("active");

    }
  );
