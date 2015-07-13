$('document').ready(function(){
  
  //Components
  var $overlay = $('#overlay');
  //Settings
  var $bioOpen = false;
  
  //Events
  $('#seeAll').click(function(){
    if ($bioOpen === false) {
      getBio();
      $bioOpen = true;
    }
  });
  
  $overlay.click(function(){
    if ($bioOpen === true){
      closeBio();
      $bioOpen = false;
    }
  });
  $overlay.resize(function(){
    if ($bioOpen === false){
      this.css('left','100%');
    }
  });
});

//Functions
function getBio() {
  $('#overlay').css('visibility','visible').css('z-index', '200');
  $('.fullBio').animate({left:"25%"});
}

function closeBio() {
  $('.fullBio').animate({left:"100%"});
  $('#overlay').css('visibility','hidden').css('z-index','0');
}