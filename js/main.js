// //Menu toggle-effect
// // usecase not found
// $(document).ready(function () {
//   $(".menu-icon").on("click", function () {
//     console.log("clicked");
//     $("nav ul").toggleClass("showing");
//   });
// });

// //Scrolling Effect
// $(window).on("scroll", function () {
//   if ($(window).scrollTop()) {
//     $(".header_section").addClass("black");
//   } else {
//     $(".header_section").removeClass("black");
//   }
// });

// gsap.registerPlugin(ScrollToPlugin, CSSRulePlugin);

// // VARIABLES

// const headerHome = document.querySelector(".site-header-home"),
//   slider = document.querySelector(".swiper-container-home"),
//   sliderNav = document.querySelector(".home-slider-navigation"),
//   sliderContent = document.querySelector(".home-slider__toContent"),
//   sliderContentBefore = CSSRulePlugin.getRule(".home-slider__toContent:before"),
//   sliderSlide = document.querySelector(".home-slider__toSlide");

// // SWIPER
// var mySwiperHome = new Swiper(slider, {
//   // Optional parameters
//   speed: 500,
//   grabCursor: false,
//   direction: "vertical",
//   mousewheel: false,
//   keyboard: {
//     enabled: true,
//   },
// });

// // SLIDER ON slidechange
// mySwiperHome.on("slideChange", function () {
//   // Animation

//   // navigation change active class
//   sliderNav.childNodes.forEach((e) => {
//     if (e.getAttribute("data-index") === this.activeIndex.toString()) {
//       e.classList.add("active");
//     } else {
//       e.classList.remove("active");
//     }
//   });

//   // if last slide show 'go to service'
//   const scrollAnimation = gsap.from(sliderContentBefore, {
//     duration: 0.8,
//     opacity: 1,
//     repeat: 1,
//     yoyo: true,
//   });

//   if (mySwiperHome.isEnd) {
//     scrollAnimation.play();
//   } else {
//     gsap.set(sliderContentBefore, { opacity: 0 });
//     scrollAnimation.kill();
//   }
// });

// // SLIDER ON slideEnd
// mySwiperHome.on("slideChange", function () {
//   gsap.set(".swiper-slide .slider-text", { opacity: 0 });
//   gsap.set(".swiper-slide .gold", { width: "0px" });
//   gsap.set(".swiper-slide .btn__wrapper", { opacity: 0 });
// });

// mySwiperHome.on("transitionEnd", function () {
//   gsap.to(".slider-text-bottom", {
//     duration: 0.2,
//     opacity: 1,
//   });

//   gsap.from(".slider-text-bottom", {
//     duration: 0.7,
//     ease: "power4. inOut",
//     x: -290,
//   });

//   gsap.to(".slider-text-top", {
//     duration: 0.2,
//     opacity: 1,
//   });

//   gsap.from(".slider-text-top", {
//     duration: 0.7,
//     ease: "power4. inOut",
//     x: 290,
//   });

//   gsap.to(".gold", {
//     duration: 0.3,
//     width: "40px",
//   });

//   gsap.to(".slider-inner .btn__wrapper", {
//     duration: 0.5,
//     opacity: 1,
//   });
// });

// //Slide to index according to 'data-index'
// function slide(e) {
//   let target = e.target;
//   if (target.classList[0] === "nav-point") {
//     let index = target.getAttribute("data-index");
//     mySwiperHome.slideTo(index);
//   }
// }

// // NAVIGATION EVENT
// sliderNav.addEventListener("click", slide);

// var lastScrollTop = 0;
// var isSwiperEnabled = true;

// // mySwiperHome.on('progress', function (progress) {
// //   if (progress <= 0.1 || progress >= 0.9) {
// //     isSwiperEnabled = false;
// //     mySwiperHome.mousewheel.disable();
// //     mySwiperHome.keyboard.disable();
// //   }
// // });

// mySwiperHome.on("reachEnd", function (progress) {
//   isSwiperEnabled = false;
//   mySwiperHome.mousewheel.disable();
//   mySwiperHome.keyboard.disable();
// });

// mySwiperHome.on("reachBeginning", function (progress) {
//   isSwiperEnabled = false;
//   mySwiperHome.mousewheel.disable();
//   mySwiperHome.keyboard.disable();
// });

// // Function to handle the scroll event
// function handleScroll() {
//   var currentScrollTop = window.scrollY || document.documentElement.scrollTop;

//   var isUpward = lastScrollTop > currentScrollTop;
//   var isDownward = lastScrollTop < currentScrollTop;

//   if (
//     (isDownward && mySwiperHome.isBeginning) ||
//     (isUpward && mySwiperHome.isEnd)
//   ) {
//     mySwiperHome.mousewheel.enable();
//     mySwiperHome.keyboard.enable();
//     isSwiperEnabled = true;
//   }

//   lastScrollTop = currentScrollTop;
// }

// // Add a scroll event listener
// window.addEventListener("scroll", handleScroll);

// ---------------------------------------
//            new code starts
// ---------------------------------------

// -------- scrollable start -------------
const scrollableSection = document.querySelector(".scrollable-section");

// Scroll end value (bottom of the scrollable section)
const scrollEndValue =
  scrollableSection.scrollHeight - scrollableSection.clientHeight;

function generateValues(a = 300) {
  const start = 0;
  const end = a;
  const middle1 = Math.floor((end - start) / 3) + start;
  const middle2 = Math.floor((2 * (end - start)) / 3) + start;
  return [start, middle1, middle2, end];
}
const [start, middle1, middle2, end] = generateValues(scrollEndValue);
const middle3 = middle2 + (end - middle2) / 2;

let currentVideoNum = 1;
let resetVideo = false;
const playVideo = (num) => {
  const video = document.querySelector(`#video${num}`);
  if (num !== currentVideoNum) {
    if (resetVideo) {
      video.currentTime = 0;
      video.play();
      resetVideo = false;
    }
    currentVideoNum = num;
  } else resetVideo = true;
};

scrollableSection.onscroll = () => {
  const scrollPos = scrollableSection.scrollTop;
  if (scrollPos <= middle1) {
    document.querySelector("#item1").classList.add("selected");
    playVideo(1);
  } else document.querySelector("#item1").classList.remove("selected");

  if (scrollPos > middle1 && scrollPos <= middle3) {
    document.querySelector("#item2").classList.add("selected");
    playVideo(2);
  } else document.querySelector("#item2").classList.remove("selected");

  if (scrollPos > middle3) {
    playVideo(3);
    document.querySelector("#item3").classList.add("selected");
  } else document.querySelector("#item3").classList.remove("selected");
};

// -------- scrollable end -------------

// ------ Hero section video player starts -------
const HeroVideo = document.getElementById("HeroVideo");
function elementIsVisible(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

let shouldResetVideo = false;
window.onscroll = () => {
  const isElementIntoView = elementIsVisible(HeroVideo);
  if (isElementIntoView) {
    if (shouldResetVideo) {
      HeroVideo.currentTime = 0;
      HeroVideo.play();
      shouldResetVideo = false;
    }
  } else {
    shouldResetVideo = true;
  }
};
// ------ Hero section video player end -------
