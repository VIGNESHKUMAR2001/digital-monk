
$(document).ready(function(){
    $('.owl-digi').owlCarousel({
      loop: true,
      margin: 40,
      nav: false,
      dots:true,
      responsive:{
        0:{
          items: 1
        },
        600:{
          items: 3
        },
        1000:{
          items: 3
        }
      }
    });     
});


$(document).ready(function(){
  var owl = $('.owl-story');
  owl.owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      responsive:{
          0:{ items: 1 },
          600:{ items: 3 },
          1000:{ items: 3 }
      }
  });

  // Event listener for left arrow
  $('#left-arrow').click(function() {
      owl.trigger('prev.owl.carousel');
  });

  // Event listener for right arrow
  $('#right-arrow').click(function() {
      owl.trigger('next.owl.carousel');
  });
});

$(document).ready(function(){
  $('.owl-01').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,         // Enable autoplay
    autoplayTimeout: 3000,  // Set autoplay interval (3000ms = 3 seconds)
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });     
});

$(document).ready(function(){
  var owl = $('.owl-02');
  owl.owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,         // Enable autoplay
      autoplayTimeout: 3000,  // Set autoplay interval (3000ms = 3 seconds)
      responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 }
      }
  });

  // Event listener for the right arrow
  $('.faright').click(function() {
      owl.trigger('next.owl.carousel');
  });

  // Event listener for the left arrow
  $('.faleft').click(function() {
      owl.trigger('prev.owl.carousel');
  });
});


  // $(document).ready(function(){
  //   var owl = $('.owl-carousel');
  //   owl.owlCarousel({
  //     loop:true,
  //     margin:50,
  //     nav:false,
  //     dots:true,
  //     responsive:{
  //       0:{
  //         items:2
  //       },
  //       600:{
  //         items:2
  //       },
  //       1000:{
  //         items:4
  //       }
  //     }
  //   });
  
  //   // Handling click events for the SVG arrows
  //   $('.lft-arrow').click(function(){
  //     owl.trigger('prev.owl.carousel');
  //   });
  
  //   $('.rit-arrow').click(function(){
  //     owl.trigger('next.owl.carousel');
  //   });
  // });
  



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
// Toggle active class on the button
this.classList.toggle("active");

// Toggle rotate class on the SVG icon
var icon = this.querySelector('.accordion-icon');
if (icon) {
icon.classList.toggle('rotate');
}

// Show or hide the panel
var panel = this.nextElementSibling;
if (panel.style.display === "block") {
panel.style.display = "none";
} else {
panel.style.display = "block";
}
});
};








var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
// Toggle active class on the button
this.classList.toggle("active");

// Toggle rotate class on the SVG icon
var icon = this.querySelector('.accordion-icon-1');
if (icon) {
icon.classList.toggle('rotate');
}

// Show or hide the panel
var panel = this.nextElementSibling;
if (panel1.style.display === "block") {
panel1.style.display = "none";
} else {
panel1.style.display = "block";
}
});
};



  
document.querySelector('.ser-side').addEventListener('mouseenter', function() {
  document.querySelector('.side-bar-menu').classList.add('show-menu');
});

document.querySelector('.ser-side').addEventListener('mouseleave', function() {
  // Add a small delay to allow for movement to the menu
  setTimeout(function() {
      if (!document.querySelector('.side-bar-menu:hover')) {
          document.querySelector('.side-bar-menu').classList.remove('show-menu');
      }
  }, 300); // Adjust the delay as needed
});




document.querySelectorAll('.side-menu').forEach(item => {
  item.addEventListener('mouseenter', function() {
      this.querySelector('.dev-parent').classList.add('show-menu');
  });

  item.addEventListener('mouseleave', function() {
      // Add a small delay to allow for movement to the submenu
      setTimeout(() => {
          if (!this.querySelector('.dev-parent:hover')) {
              this.querySelector('.dev-parent').classList.remove('show-menu');
          }
      }, 300); // Adjust the delay as needed
  });
});





 document.querySelector('.ham-btn').addEventListener('click', function() {
document.querySelector('.nav-wrapper').classList.add('show');
document.querySelector('.cross').style.display = 'block';
this.style.display = 'none';
document.body.style.overflow = 'hidden'; // Disable scrolling on body
});

document.querySelector('.cross').addEventListener('click', function() {
document.querySelector('.nav-wrapper').classList.remove('show');
document.querySelector('.ham-btn').style.display = 'block';
this.style.display = 'none';
document.body.style.overflow = ''; // Enable scrolling on body
});





  let texts = document.querySelectorAll('#text-container .h1-style');
  let index = 0;

  function showText() {
      // Hide all texts
      texts.forEach(text => text.style.display = 'none');

      // Show the current text
      texts[index].style.display = 'block';

      // Move to the next text or reset to the first one
      index = (index + 1) % texts.length;

      // Call showText again after 2 seconds
      setTimeout(showText, 2000);
  }

  showText(); // Start the process



    document.querySelectorAll('.accordion-2').forEach(function(accordion) {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
                this.querySelector('.plus-icon').style.display = 'block';
                this.querySelector('.minus-icon').style.display = 'none';
            } else {
                panel.style.display = "block";
                this.querySelector('.plus-icon').style.display = 'none';
                this.querySelector('.minus-icon').style.display = 'block';
            }
        });
    });


// Get all the buttons with class "a-tag" inside the "port-nav" div
const portNavButtons = document.querySelectorAll('.port-nav .a-tag');

// Loop through each button and add a click event listener
portNavButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Reset the style of all buttons inside the "port-nav" div
        portNavButtons.forEach(btn => {
            btn.style.backgroundColor = '#f1f2f3';
            btn.style.color = 'black';
        });

        // Set the style of the clicked button
        this.style.backgroundColor = '#ffd34e';
        this.style.color = 'white';
    });
});



// web dev //
$(document).ready(function(){
  var owl = $('.owl-03');
  owl.owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,         // Enable autoplay
      autoplayTimeout: 3000,  // Set autoplay interval (3000ms = 3 seconds)
      responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 }
      }
  });

  // Event listener for the right arrow
  $('.faright-1').click(function() {
      owl.trigger('next.owl.carousel');
  });

  // Event listener for the left arrow
  $('.faleft-1').click(function() {
      owl.trigger('prev.owl.carousel');
  });
});