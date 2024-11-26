!function(e){"use strict";var i,a;e(window).on("load",(function(){!function(){var i=!1,a=e(".progress"),s=e(".percentage");gsap.timeline({onStart:function(){i||gsap.delayedCall(0,(function(){i=!0}))}}).to(a,{height:"100%",duration:2.5,delay:1,ease:"power1.in"}).to(s,{text:"100%",duration:1},"-1").to("#preloader",{y:"-101%",display:"none",duration:1,ease:"Expo.easeInOut"},"+=0");var t={value:0};gsap.to(t,{value:100,duration:2.5,onUpdate:function(){s.text(Math.round(t.value)+"%")},delay:1}),e(document).ready((function(){e("#xb-loadding").fadeOut(300)}))}(),new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init(),function(){var i=e(".xb-split-text");if(0==i.length)return;gsap.registerPlugin(SplitText),i.each((function(i,a){a.split=new SplitText(a,{type:"lines,words,chars",linesClass:"split-line"}),gsap.set(a,{perspective:100}),e(a).hasClass("split-in-fade")&&gsap.set(a.split.chars,{opacity:0,ease:"Back.easeOut"}),e(a).hasClass("split-in-right")&&gsap.set(a.split.chars,{opacity:0,x:"70",ease:"Back.easeOut"}),e(a).hasClass("split-in-left")&&gsap.set(a.split.chars,{opacity:0,x:"-50",ease:"circ.out"}),e(a).hasClass("split-in-up")&&gsap.set(a.split.chars,{opacity:0,y:"80",ease:"circ.out"}),e(a).hasClass("split-in-down")&&gsap.set(a.split.chars,{opacity:0,y:"-80",ease:"circ.out"}),e(a).hasClass("split-in-rotate")&&gsap.set(a.split.chars,{opacity:0,rotateX:"50deg",ease:"circ.out"}),e(a).hasClass("split-in-scale")&&gsap.set(a.split.chars,{opacity:0,scale:"0.5",ease:"circ.out"}),a.anim=gsap.to(a.split.chars,{scrollTrigger:{trigger:a,start:"top 100%"},x:"0",y:"0",rotateX:"0",scale:1,opacity:1,duration:.4,stagger:.06})}))}()})),e(window).scroll((function(){e(this).scrollTop()>500?e(".xb-backtotop").addClass("active"):e(".xb-backtotop").removeClass("active")})),e((function(){e(".scroll").on("click",(function(){return e("html,body").animate({scrollTop:0},"slow"),!1}))})),i="",a=0,e(".xb-header").length&&e(".xb-header").addClass("original").clone(!0).insertAfter(".xb-header").addClass("xb-header-area-sticky xb-sticky-stt").removeClass("original"),e(window).on("scroll",(function(){var s=e(window).scrollTop();i=s<a?"up":"down",a=s,e("#xb-header-area").hasClass("is-sticky")&&(a>100?e(".xb-header-area-sticky.xb-sticky-stb").addClass("xb-header-fixed"):e(".xb-header-area-sticky.xb-sticky-stb").removeClass("xb-header-fixed"),"up"===i&&a>100?e(".xb-header-area-sticky.xb-sticky-stt").addClass("xb-header-fixed"):e(".xb-header-area-sticky.xb-sticky-stt").removeClass("xb-header-fixed"))}));const s=new Ukiyo(".ukiyo",{externalRAF:!0,scale:1.3}),t=new Lenis({duration:.8,smoothWheel:!0});var o;(requestAnimationFrame((function e(i){s.animate(),t.raf(i),requestAnimationFrame(e)})),e(".header-search-btn").on("click",(function(i){i.preventDefault(),e(".header-search-form-wrapper").addClass("open"),e('.header-search-form-wrapper input[type="search"]').focus(),e(".body-overlay").addClass("active")})),e(".xb-search-close").on("click",(function(i){i.preventDefault(),e(".header-search-form-wrapper").removeClass("open"),e("body").removeClass("active"),e(".body-overlay").removeClass("active")})),e(".sidebar-menu-close, .body-overlay").on("click",(function(){e(".offcanvas-sidebar").removeClass("active"),e(".body-overlay").removeClass("active")})),e(".offcanvas-sidebar-btn").on("click",(function(){e(".offcanvas-sidebar").addClass("active"),e(".body-overlay").addClass("active")})),e(".body-overlay").on("click",(function(){e(this).removeClass("active"),e(".header-search-form-wrapper").removeClass("open")})),e(".xb-nav-hidden li.menu-item-has-children > a").append('<span class="xb-menu-toggle"></span>'),e(".xb-header-menu li.menu-item-has-children, .xb-menu-primary li.menu-item-has-children").append('<span class="xb-menu-toggle"></span>'),e(".xb-menu-toggle").on("click",(function(){e(this).hasClass("active")||(e(this).closest("ul").find(".xb-menu-toggle.active").toggleClass("active"),e(this).closest("ul").find(".sub-menu.active").toggleClass("active").slideToggle()),e(this).toggleClass("active"),e(this).closest(".menu-item").find("> .sub-menu").toggleClass("active"),e(this).closest(".menu-item").find("> .sub-menu").slideToggle()})),e(".xb-nav-hidden li.menu-item-has-children > a").click((function(i){var a=e(i.target);"#"!==e(this).attr("href")||a.is(".xb-menu-toggle")||(i.stopPropagation(),e(this).find(".xb-menu-toggle").hasClass("active")||(e(this).closest("ul").find(".xb-menu-toggle.active").toggleClass("active"),e(this).closest("ul").find(".sub-menu.active").toggleClass("active").slideToggle()),e(this).find(".xb-menu-toggle").toggleClass("active"),e(this).closest(".menu-item").find("> .sub-menu").toggleClass("active"),e(this).closest(".menu-item").find("> .sub-menu").slideToggle())})),e(".xb-nav-mobile").on("click",(function(){e(this).toggleClass("active"),e(".xb-header-menu").toggleClass("active")})),e(".xb-menu-close, .xb-header-menu-backdrop").on("click",(function(){e(this).removeClass("active"),e(".xb-header-menu").removeClass("active")})),(o=gsap.timeline({yoyo:!1,reversed:!0})).pause(),o.from(e(".overlay-menu"),{autoAlpha:0}),o.from(e(".overlay-menu .left-area"),{y:"100vh"},.1),o.from(e(".overlay-menu .right-area"),{y:"-100vh"},.1),o.from(e(".overlay-menu .right-area ul"),{autoAlpha:0,stagger:.1},.5),o.from(e(".overlay-menu nav li:not(.overlay-menu nav ul li ul li)"),{stagger:.1,y:30,autoAlpha:0,ease:"Expo.easeInOut"},.5),o.from(e(".overlay-menu nav li:not(.overlay-menu nav ul li ul li)"),{clearProps:"all",delay:1.3,ease:"Expo.easeInOut"},.5),e("header .burger-menu, .overlay-menu .close").on("click",(function(){o.reversed()?o.play():o.reverse()})),e(".overlay-menu .menu-item-has-children").each((function(){e(this).children("ul").append('<li><a class="back" href="#">back <i class="ri-corner-down-left-line"></i></a></li>')})),e(".overlay-menu .menu-item-has-children > a").each((function(){var i=gsap.timeline({yoyo:!1,reversed:!0});i.pause(),i.to(e(this).closest("ul").children("li").children("a"),{stagger:.1,autoAlpha:0,y:-50,"pointer-events":"none",ease:Power3.easeOut}),i.to(e(this).next("ul"),{"z-index":"10","pointer-events":"all"}),i.from(e(this).next("ul").children("li").children("a"),{stagger:.1,autoAlpha:0,y:30,ease:Power3.easeOut}),this.animation=i,e(".overlay-menu .back, .overlay-menu .close").on("click",(function(){i.reverse()}))})),e(".overlay-menu .menu-item-has-children > a").on("click",(function(){this.animation.reversed()?this.animation.play():this.animation.reverse()})),e("#fixed").length&&scrollbar.addListener((({offset:i})=>{fixed.style.top=i.y+(e(window).height()-90)+"px"})),e("[data-background]").each((function(){e(this).css("background-image","url("+e(this).attr("data-background")+") ")})),e("[data-bg-color]").each((function(){e(this).css("background-color",e(this).attr("data-bg-color"))})),e(".xbo").length&&(e(".xbo").appear(),e(document.body).on("appear",".xbo",(function(i){e(".xbo").each((function(){var i=e(this).attr("data-count");e(this).html(i)})),window.xboOptions={format:"d"}}))),e(".xbo_trigger").length)&&(e(".xbo_trigger").each((function(){var i=e(this).attr("data-count"),a=new Odometer({el:this,value:0,format:"d"});a.render(),a.update(i)})),e(".xbo_trigger").appear(),e(document.body).on("appear",".xboh",(function(e){})));e(".grid").imagesLoaded((function(){var i=e(".grid").isotope({itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:".grid-item"}});e(".portfolio-menu").on("click","button",(function(){var a=e(this).attr("data-filter");i.isotope({filter:a})}))})),e(".portfolio-menu button").on("click",(function(i){e(this).siblings(".active").removeClass("active"),e(this).addClass("active"),i.preventDefault()}));new Swiper(".team-slider",{loop:!0,spaceBetween:125,speed:400,slidesPerView:5,autoplay:{enabled:!0,delay:6e3},breakpoints:{1600:{slidesPerView:5},1200:{slidesPerView:4,spaceBetween:50},992:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},576:{slidesPerView:2,spaceBetween:30},0:{slidesPerView:1}}}),new Swiper(".team-slider-two",{loop:!0,spaceBetween:30,speed:400,slidesPerView:2,direction:"vertical",pagination:{el:".swiper-pagination",clickable:!0},autoplay:{enabled:!0,delay:6e3},breakpoints:{1600:{slidesPerView:2},768:{slidesPerView:2},576:{slidesPerView:3},0:{slidesPerView:2}}}),new Swiper(".brand-slider",{slidesPerView:6,roundLengths:!0,loop:!0,loopAdditionalSlides:30,autoplay:{enabled:!0,delay:6e3},speed:400,breakpoints:{1600:{slidesPerView:6},1200:{slidesPerView:6},992:{slidesPerView:5},768:{slidesPerView:4},576:{slidesPerView:3},0:{slidesPerView:2}}}),new Swiper(".service-slider",{spaceBetween:0,slidesPerView:4,roundLengths:!0,loop:!0,autoplay:{enabled:!0,delay:6e3},speed:400,breakpoints:{1600:{slidesPerView:4},1200:{slidesPerView:3},992:{slidesPerView:3},768:{slidesPerView:2},576:{slidesPerView:2},0:{slidesPerView:1}}}),new Swiper(".service-gallery-slider",{spaceBetween:30,slidesPerView:5,roundLengths:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{enabled:!0,delay:6e3},speed:400,breakpoints:{1600:{slidesPerView:5},1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:2},576:{slidesPerView:2},0:{slidesPerView:1}}}),new Swiper(".award-slider",{spaceBetween:30,slidesPerView:4,roundLengths:!0,loop:!0,navigation:{nextEl:".xb-swiper-arrow-next",prevEl:".xb-swiper-arrow-prev"},autoplay:{enabled:!0,delay:4e3},speed:400,breakpoints:{1600:{slidesPerView:4},1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:2},576:{slidesPerView:2},0:{slidesPerView:1}}}),new Swiper(".portfolio-slider",{spaceBetween:30,slidesPerView:2,roundLengths:!0,loop:!0,autoplay:{enabled:!0,delay:4e3},speed:400,breakpoints:{1600:{slidesPerView:2},1200:{slidesPerView:2},992:{slidesPerView:2},768:{slidesPerView:2},576:{slidesPerView:2},0:{slidesPerView:1}}}),new Swiper(".testimonial-slider",{spaceBetween:0,slidesPerView:1,roundLengths:!0,loop:!0,centeredSlides:!0,effect:"fade",loopAdditionalSlides:30,autoplay:{enabled:!0,delay:6e3},navigation:{nextEl:".xb-swiper-arrow-next",prevEl:".xb-swiper-arrow-prev"},speed:400});if(e(".xb-mouseenter").on("mouseenter",(function(){e(".xb-mouseenter").removeClass("active"),e(this).addClass("active")})),e(".xb-mouseenter2").on("mouseenter",(function(){e(".xb-mouseenter2").removeClass("active"),e(this).addClass("active")})),e(".popup-image").magnificPopup({type:"image",gallery:{enabled:!0}}),e(".popup-video").magnificPopup({type:"iframe",mainClass:"mfp-zoom-in"}),e(".accordion_box").length&&e(".accordion_box").on("click",".acc-btn",(function(){var i=e(this).parents(".accordion_box"),a=e(this).parents(".accordion");e(this).next(".acc_body").is(":visible")?(e(this).removeClass("active"),e(this).next(".acc_body").slideUp(300),e(i).children(".accordion").removeClass("active-block")):(e(i).find(".accordion .acc-btn").removeClass("active"),e(this).addClass("active"),e(i).children(".accordion").removeClass("active-block"),e(i).find(".accordion").children(".acc_body").slideUp(300),a.addClass("active-block"),e(this).next(".acc_body").slideDown(300))})),e(".marquee-left").marquee({speed:50,gap:0,delayBeforeStart:0,direction:"left",duplicated:!0,pauseOnHover:!1,startVisible:!0}),e(".marquee-right").marquee({speed:50,gap:0,delayBeforeStart:0,direction:"right",duplicated:!0,pauseOnHover:!1,startVisible:!0}),gsap.registerPlugin(ScrollTrigger),e(".xb_trigger").each((function(){gsap.to(this,{scrollTrigger:{trigger:this},onComplete:function(){this.targets().forEach((function(e){e.classList.add("triggered")}))}})})),e("#slider-range").length&&(e("#slider-range").slider({range:!0,min:12,max:200,values:[0,100],slide:function(i,a){e("#amount").val("$"+a.values[0]+" - $"+a.values[1])}}),e("#amount").val("$"+e("#slider-range").slider("values",0)+" - $"+e("#slider-range").slider("values",1))),e("input.product-count").length&&e("input.product-count").TouchSpin({min:1,max:1e3,step:1,buttondown_class:"btn btn-link",buttonup_class:"btn btn-link"}),e(".checkout-section").length){var n=e(".woocommerce-info > a"),l=e(".showcoupon"),r=e("#ship-to-different-address"),c=e("form.login"),d=e(".checkout_coupon"),p=e(".shipping_address");c.hide(),d.hide(),p.hide(),n.on("click",(function(e){e.preventDefault(),c.slideToggle(),e.stopPropagation()})),l.on("click",(function(e){e.preventDefault(),d.slideToggle(),e.stopPropagation()})),r.on("click",(function(e){p.slideToggle(),e.stopPropagation()}))}function u(){const e=moment().format("HH:mm:ss"),i=moment().format("dddd, D MMMM YYYY"),a=document.getElementById("xb-time"),s=document.getElementById("xb-date");a&&(a.textContent=e),s&&(s.textContent=i)}setInterval(u,1e3),u()}(jQuery);