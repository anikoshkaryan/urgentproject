document.querySelector('.navbar-trigger').addEventListener('click', function() {
	this.classList.toggle('active');
	if(this.classList.contains('active')) {
		$('.navbar-wrapper').first().fadeIn(200)
	}
	else {
		$('.navbar-wrapper').first().fadeOut(200)
	}
})

$('#contacts_name').on('focus', function() {
	$(this).siblings('label').addClass('active')
})

$('#contacts_name').on('focusout', function() {
	$(this).siblings('label').removeClass('active')
})


$('#contacts_phone').on('focus', function() {
	$(this).siblings('label').addClass('active')
})

$('#contacts_phone').on('focusout', function() {
	$(this).siblings('label').removeClass('active')
})

const swiper2 = new Swiper("#fields_slider1", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
  
    // Navigation arrows
    navigation: {
      nextEl: '.fields_btn_prev1',
      prevEl: '.fields_btn_prev2',
    },
  
  });


  const swiper3 = new Swiper("#fields_slider2", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
  
    // Navigation arrows
    navigation: {
      nextEl: '.fields_btn_prev3',
      prevEl: '.fields_btn_prev4',
    },
  
  });

  const swiper4 = new Swiper("#fields_slider3", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
  
    // Navigation arrows
    navigation: {
      nextEl: '.fields_btn_prev5',
      prevEl: '.fields_btn_prev6',
    },
  
  });




  const swiper5 = new Swiper("#types_of_construction_slider1", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
  
    // Navigation arrows
    navigation: {
      nextEl: '.constructions_btn_prev1',
      prevEl: '.constructions_btn_next2',
    },
  
  });





  

  const swiper6 = new Swiper("#structural_elements_slider1", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
  
    // Navigation arrows
    navigation: {
      nextEl: '.structural_elements_btn_prev1',
      prevEl: '.structural_elements_btn_next2',
    },
  
  });


  const swiper7 = new Swiper("#soyuz_advantages_slider1", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.soyuz_advantages_btn_prev1',
      prevEl: '.soyuz_advantages_btn_next2',
    },
  
  });


  const swiper8 = new Swiper("#projects_slider1", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
  
    // Navigation arrows
    navigation: {
      nextEl: '.projects_btn_prev1',
      prevEl: '.projects_btn_next2',
    },
  
  });
 