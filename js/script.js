
(function(){
  'use strict';
  let menutoggle = document.querySelector('.toggle');
  let sidebar = document.querySelector('.nav-menu');
  
  menutoggle.addEventListener("click", function(){
 
      menutoggle.classList.toggle('active');
    sidebar.classList.toggle('active');
  
  });
  sidebar.addEventListener("click", function(){
      sidebar.classList.remove('active')
  });
  

})();




$(".slider").owlCarousel({
  loop:true,
  autoplay:true,
  margin:15,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false,
        
      },
      768:{
        items:3,
        nav:false,
      },
      1000:{
          items:5,
          nav:true,
          loop:true,
      }
    }

 });
