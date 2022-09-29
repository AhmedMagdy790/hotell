// Menu
let menu_open = document.querySelector("[menu-open-btn]");
let icon_close_menu = document.querySelector("[icon-close-menu]");
let navbar = document.querySelector("[navbar]");

// Services
let services_slidere = document.querySelector(".services-slider");
let prevServices = document.getElementById("prev-services");
let nextServices  = document.getElementById("next-services");



// Blog
let blogPostsSlider = document.querySelector(".blog-posts-slider");
let prevBlog = document.getElementById("prev-blog");
let nextBlog = document.getElementById("next-blog");

// Testimonials
let testimonialsSlider = document.querySelector(".testimonials-slider");
let prevTestimonials = document.getElementById("prev-testimonials");
let nextTestimonials = document.getElementById("next-testimonials");

// instagram
let instagramSlider = document.querySelector(".instagram-slider");
let prevInstagram = document.getElementById("prev-instagram");
let nextInstagram = document.getElementById("next-instagram");


// Acordion
let accordion = document.querySelectorAll(".accordion .item");
let itemImage = document.querySelector(".item-image");

// Effect Page
let animation = document.querySelectorAll("[data-anim]");
let t = 0;
window.onscroll = () => {
    scrollEffect(2, 100);
    scrollEffect(3, 500);
    scrollEffect(4, 1000);
    scrollEffect(5, 1400);
    scrollEffect(6, 1400);
    scrollEffect(7, 2000);
    scrollEffect(8, 2200);
    scrollEffect(9, 2800);
    scrollEffect(10, 3000);
    scrollEffect(11, 3200);
    scrollEffect(12, 3400);
    scrollEffect(13, 3800);
    scrollEffect(14, 4000);
    scrollEffect(13, 4200);
};

function scrollEffect(num1, num2) {
    if(window.scrollY > num2){
        effectItem(num1);
    }
}
function effectItem(num) {
    animation.forEach((el) => {
        effectItemIF(el.classList.contains("hero-content"),1);
        effectItemIF(el.classList.contains("sec-form-search"),2);
        effectItemIF(el.classList.contains("services"),3);
        effectItemIF(el.classList.contains("about-heading"),4);
        effectItemIF(el.classList.contains("banner-about"),5);
        effectItemIF(el.classList.contains("text-about"),6);
        effectItemIF(el.classList.contains("blog-heading"),7);
        effectItemIF(el.classList.contains("blog-posts-slider"),8);
        effectItemIF(el.classList.contains("faq-title"),9);
        effectItemIF(el.classList.contains("accordion"),10);
        effectItemIF(el.classList.contains("testimonials-heading"),11);
        effectItemIF(el.classList.contains("testimonials-slider"),12);
        effectItemIF(el.classList.contains("heading-instagram"),13);
        effectItemIF(el.classList.contains("instagram-slider"),14);

        function effectItemIF(element,n) {
            if(element && num == n){
                el.setAttribute("data-anim", "on");
            };
        };
        
    });
}

effectItem(1);


// Menu
menu_open.onclick = () => {
    navbar.classList.add("active");
}
icon_close_menu.onclick = () => {
    navbar.classList.remove("active");
}


// accordion
function accordionFun() {
    accordion.forEach(  function(el) {
        el.children[0].children[2].onclick = () => {
            if(el.children[1].style.height == ""){
                el.children[1].style.height = (el.children[1].children[0].clientHeight + 2)+"px";
                el.children[0].children[1].style.transform = "rotate(0deg)";
            }else {
                el.children[1].style.height = null;
                el.children[0].children[1].style.transform = "rotate(180deg)";
            }
        }
    });
};

function onSlider() {
    new Swiper(".services-slider", {
        spaceBetween: 30,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "#next-services",
          prevEl: "#prev-services",
        },
        breakpoints: {
              0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        mousewheel: true,
          keyboard: true,
          speed: 700,
        
    });

    new Swiper(".blog-posts-slider", {
        spaceBetween: 30,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "#next-blog",
          prevEl: "#prev-blog",
        },
        breakpoints: {
              0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        mousewheel: true,
          keyboard: true,
          speed: 700,
        
    });

    new Swiper(".testimonials-slider", {
        spaceBetween: 30,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "#next-testimonials",
          prevEl: "#prev-testimonials",
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 2,
            },
          },
        mousewheel: true,
          keyboard: true,
          speed: 700,
        
    });

    new Swiper(".instagram-slider", {
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "#next-instagram",
          prevEl: "#prev-instagram",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        breakpoints: {
              0: {
              slidesPerView: 1,
            },
            768: {
              watchSlidesProgress: true,
              slidesPerView: 3,
              autoplay: {
                delay: 500,
            },
            },
            992: {
                slidesPerView: 6,
                autoplay: {
                    delay: 500,
                },
            },
        },
        mousewheel: true,
        keyboard: true,
        speed: 900,
        
    });

}

onload = () => {
    accordionFun()
    onSlider();
    // window.scrollTo(0, 0);
}


