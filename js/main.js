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

// --------------------- new codes starts ---------------
const scrollableSection = document.querySelector(".scrollable-section");
const clientHeight = scrollableSection.clientHeight;
const scrollTopValue = scrollableSection.scrollTop;

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

// scrollableSection.onscroll = () => {
//   // checkScroll();
//   const scrollPos = scrollableSection.scrollTop;
//   if (scrollPos <= middle1) {
//     document.querySelector("#item1").classList.add("selected");
//     playVideo(1);
//   } else document.querySelector("#item1").classList.remove("selected");

//   if (scrollPos > middle1 && scrollPos <= middle3) {
//     document.querySelector("#item2").classList.add("selected");
//     playVideo(2);
//   } else document.querySelector("#item2").classList.remove("selected");

//   if (scrollPos > middle3) {
//     playVideo(3);
//     document.querySelector("#item3").classList.add("selected");
//   } else document.querySelector("#item3").classList.remove("selected");
// };

/// ---- video player ---
var videos = document.getElementsByTagName("video");

// function checkScroll() {
//   var fraction = 0.8; // Play when 80% of the player is visible.

//   for (var i = 0; i < videos.length; i++) {
//     var video = videos[i];

//     var x = video.offsetLeft,
//       y = video.offsetTop,
//       w = video.offsetWidth,
//       h = video.offsetHeight,
//       r = x + w, //right
//       b = y + h, //bottom
//       visibleX,
//       visibleY,
//       visible;

//     visibleX = Math.max(
//       0,
//       Math.min(w, window.scrollX + window.innerWidth - x, r - window.scrollX)
//     );
//     visibleY = Math.max(
//       0,
//       Math.min(h, window.scrollY + window.innerHeight - y, b - window.scrollY)
//     );

//     visible = (visibleX * visibleY) / (w * h);

//     if (visible > fraction) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   }
// }

// --------------------- new codes ends ---------------

// const debounce = (fn, delay) => {
//   let timeout;

//   return function () {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// };

// let scrollPosition = scrollableSection.scrollTop;
// let scrollDirection;

// const testConsole = () => {
//   scrollDirection =
//     scrollableSection.scrollTop > scrollPosition ? "down" : "up";
//   console.log(scrollDirection);
//   scrollPosition = scrollableSection.scrollTop;

//   document.getElementById("item2").click();
// };
// scrollableSection.addEventListener("scroll", debounce(testConsole, 1000));

const windowClientHeight = window.clientHeight;
const windowScrollTopValue = window.scrollTop;

// Scroll end value (bottom of the scrollable section)
const windowScrollEndValue =
  document.body.scrollHeight - window.scrollY - window.innerHeight;
console.log(windowScrollEndValue);

var scrollContainer = document.getElementById("ScrollContainer");
console.log(scrollContainer);

var scrollTop = scrollContainer.offsetTop;
var scrollBottom = scrollContainer.clientHeight;

console.log({ scrollTop }, { scrollBottom });

function generateWindowValues(scrollTop, scrollBottom) {
  const first = scrollTop;
  const last = scrollBottom;
  const mid1 = Math.floor((last - first) / 3) + first;
  const mid2 = Math.floor((2 * (last - first)) / 3) + first;
  return [first, mid1, mid2, last];
}
const [first, mid1, mid2, last] = generateWindowValues(scrollTop, scrollBottom);
const mid3 = mid2 + (last - mid2) / 2;

// console.log(
//   "Scroll bottom value:",
//   document.body.scrollHeight - window.scrollY - window.innerHeight
// );

window.onscroll = () => {
  // checkScroll();
  console.log({ mid1 }, { mid2 }, { mid3 });
  const scrollPos = window.scrollY;
  console.log(scrollPos);
  if (scrollPos <= mid1) {
    document.querySelector("#item1").classList.add("selected");
    playVideo(1);
  } else document.querySelector("#item1").classList.remove("selected");

  if (scrollPos > mid1 && scrollPos <= mid3) {
    document.querySelector("#item2").classList.add("selected");
    playVideo(2);
  } else document.querySelector("#item2").classList.remove("selected");

  if (scrollPos > mid3) {
    playVideo(3);
    document.querySelector("#item3").classList.add("selected");
  } else document.querySelector("#item3").classList.remove("selected");
};
