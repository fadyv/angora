
$('.owl-carousel').owlCarousel({
  
  autoplay:true,
  loop:true,
  autoplayTimeout:2000,
  responsiveClass:true,
  center:true,
  active:true,
  responsive:{
      0:{
          items:1,
          loop:true
          
          
      },

      400:{
        items:1,
        loop:true,
        
        
        
    },

    600:{
      items:1,
      loop:true,
      
      
  },


      800:{         
          items:3,
          nav:false,
          loop:true,
          

          
      },
      1000:{
          items:5,  
          nav:true,
          loop:true,
          

      }
  }
})