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
    console.log(accordion)
    accordion.forEach(  function(el) {
        console.log(el.children[0].children[2])
        el.children[0].children[2].onclick = () => {
            if(el.children[1].style.height == ""){
                el.children[1].style.height = (el.children[1].children[0].clientHeight + 2)+"px";
            }else {
                el.children[1].style.height = null;
            }
        }
    });
};

function sliderShow(el, next, prev) {
    let element = el.children[0].children[0];
    let parent = element.parentElement;
    
    // init
    
    let i = 0;
    let lengthChildern = parent.children[i].children.length;
    let widthItem = (element.children[0].clientWidth);
    let p;
    let n = (element.clientWidth - (widthItem));
    if(document.body.clientWidth < 600){
        p = (element.clientWidth - (widthItem * 2));
    }
    if(document.body.clientWidth > 600){
        p = (element.clientWidth - (widthItem * 2));
    }
    if(document.body.clientWidth > 922){
        p = (element.clientWidth - (widthItem * 3));
    }

    let po = -p;

    function movItem() {

        if(po ==  -( (lengthChildern ))){
            parent.children[i].style.transition = "none";
        }else {
            parent.children[i].style.transition = "0.7s";
        }

        parent.children[i].style.transform = `translate3d( ${po}px, 0px, 0px)`;

        // next 
        next.onclick = () => {
            if(po < 0){
                po += (element.children[0].clientWidth);
            }
            movItem();
            console.log(element.children[0].clientWidth)
        }
        // Prev
        prev.onclick = () => {
            if( po > -n){
                po -= element.children[0].clientWidth;
            }
            movItem();
        }
        // console.log(po)
        // setTimeout(movItem, 3000);
    };
    movItem();
};


function onSlider() {


    sliderShow(services_slidere, nextServices, prevServices);
    sliderShow(blogPostsSlider, nextBlog, prevBlog);
    sliderShow(testimonialsSlider, nextTestimonials, prevTestimonials);
    sliderShow(instagramSlider, nextInstagram, prevInstagram);
}

onload = () => {
    accordionFun()
    onSlider();
    onresize = () => {
        onSlider();
    };
    window.scrollTo(0, 0);
}


