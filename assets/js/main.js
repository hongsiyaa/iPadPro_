
// $(window).load(function(){
    
// });
// setTimeout(function(){
//     $('.intro-content .title-wrap').css('opacity','1');
//     $('.intro-content .price-wrap').css('opacity','1');
// }, 7000);
// setTimeout(function(){
//     const video = $('.sc-intro .video-wrap video').get(0);
//     video.play(); 
// }, 1000);

// setTimeout(function(){
//     $('.first-title').css('opacity','0');
//     $('.intro-content').css('opacity','1');
// }, 2000);
gsap.registerPlugin(ScrollTrigger);

const intro = gsap.timeline({})

const videoElem1 = document.querySelector('#intro-video');

intro.to('.sc-intro .first-title',{opacity:0,},2,"a")
    .to('.sc-intro .intro-content',{opacity:1,},"a-=1")
    .to('#intro-video',{
        // onEnter:function () {
        //     videoElem1.play();
        // },
        onEnter:() => videoElem1.play()
    },"a-=1")
    .to('.intro-content .title-wrap .title',{opacity:1,scale:1},'b+=4')
    .to('.intro-content .title-wrap .desc-txt',{opacity:1,scale:1},'b+=4.3')
    .to('.intro-content .price-wrap .intro-price',{opacity:1,scale:1},'b+=4.6')
    .to('.intro-content .price-wrap .link-btn',{opacity:1,scale:1},'b+=4.9')
    .to('#intro-video',{opacity:0},'c+=1')


const highlights = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-highlights",
        start:"0% 20%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
        toggleClass:{
            targets:".sc-highlights .pagination-content",
            className:"active",
        }
    }
})
highlights.to(".sc-highlights .title-wrap",{ y:0 , opacity:1})
    

const highlightsSlide = new Swiper('.highlights-slide',{
    speed: 1500,
    // autoplay:{
    //     delay:5000,
    //     disableOnInteraction:false
    // },
    spaceBetween:20,
    pagination:{
        el:'.sc-highlights .swiper-pagination',
        clickable: true
    },
})

highlightsSlide.on("slideChangeTransitionEnd",function(){
    if (this.realIndex === 5) {
        highlightsSlide.autoplay.stop();
    }
})

// ScrollTrigger.create({
//     trigger:".sc-highlights",
//     start:"0% 20%",
//     end:"100% 50%",
//     // markers:true,
//     // onEnter:function(){
//     //     $('.sc-highlights .pagination-content').addClass('active')
//     // },
//     // onLeaveBack:function(){
//     //     $('.sc-highlights .pagination-content').removeClass('active')
//     // }
//     toggleClass:{
//         targets:".sc-highlights .pagination-content",
//         className:"active",
//     }
// })

const lookcontrol = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-look",
        start:"0% 0%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
        toggleClass:{
            targets:".sc-look .color-control",
            className:"active",
        }
    }
})

const look  = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-look ",
        start:"0% 20%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
    }
})
look.to(".sc-look .title-wrap",{ y:0 , opacity:1})


const lookSlide = new Swiper('.look-slide',{
    spaceBetween:20,
    navigation: {
        nextEl: '.sc-look .swiper-control-wrap .next-btn',
        prevEl: '.sc-look .swiper-control-wrap .prev-btn',
    },
})

$('.sc-look .color-control .black-btn').click(function(){
    $('.sc-look .color-control .color-btn').removeClass('on')
    $(this).addClass('on')
    $('.sc-look .look-slide .img-group .silver').removeClass('on');
});
$('.sc-look .color-control .silver-btn').click(function(){
    $('.sc-look .color-control .color-btn').removeClass('on')
    $(this).addClass('on')
    $('.sc-look .look-slide .img-group .silver').addClass('on');
});


// $('[data-pagination="true"]').each(function(){   
//     ScrollTrigger.create({
//         trigger:$(this),
//         start:"0% 20%",
//         end:"100% 50%",
//         // markers:true,
//         toggleClass:{
//             targets:".access-wrap .popup-btn-area",
//             className:"active",
//         }
//     })
// })


const explore = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-explore",
        start:"0% 30%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
        toggleClass:{
            targets:".sc-explore .popup-btn-area",
            className:"active",
        }
    }
})
explore.to(".sc-explore .sect-headline",{ y:0 , opacity:1})

const display = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-display",
        start:"0% 30%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
        toggleClass:{
            targets:".sc-display .popup-btn-area",
            className:"active",
        }
    }
})

gsap.from('.sc-m4 .m4-video',{
    scrollTrigger:{
        trigger:".sc-m4",
        start:"top 100%",
        end:"0% 0%",
        scrub:0,
        markers:false,
    },
    ease:'none',
    yPercent:-50,
})
   
const video = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-m4 .sticky-wrapper",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0,
        //markers:true,
    }
})
video.from(".sc-m4 .m4-text",{ scale:80},'a')
video.to(".sc-m4 .text-content .cont-wrap",{yPercent:-20},'a')

const m4 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-m4",
        start:"0% 30%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
        toggleClass:{
            targets:".sc-m4 .popup-btn-area",
            className:"active",
        }
    }
})

const Workflow = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-Workflow .desc-wrap",
        start:"0% 50%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
    }
})
Workflow.to(".sc-Workflow .desc-wrap",{ y:0 , opacity:1})

const Workflow2 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-Workflow",
        start:"0% 30%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
        toggleClass:{
            targets:".sc-Workflow .popup-btn-area",
            className:"active",
        }
    }
})

const pencilpro = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-pencilpro",
        start:"0% 30%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
        toggleClass:{
            targets:".sc-pencilpro .popup-btn-area",
            className:"active",
        }
    }
})

const magickb = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-magickb",
        start:"0% 30%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
        toggleClass:{
            targets:".sc-magickb .popup-btn-area",
            className:"active",
        }
    }
})

const camera = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-camera",
        start:"0% 30%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
        toggleClass:{
            targets:".sc-camera .popup-btn-area",
            className:"active",
        }
    }
})

const connect = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-connect",
        start:"0% 0%",
        end:"100% 100%",
        // scrub:0,
        //markers:true,
        onEnter:function(){
            $('.sc-connect .img-wrap .img01').addClass('active');
            $('.sc-connect .img-wrap .img02').addClass('active');
            $('.sc-connect .img-wrap .img03').addClass('active');
        },
    }
})
const connect2 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-connect",
        start:"0% 30%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
        toggleClass:{
            targets:".sc-connect .popup-btn-area",
            className:"active",
        }
    }
})

const design = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-design",
        start:"0% 30%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
        toggleClass:{
            targets:".sc-design .popup-btn-area",
            className:"active",
        }
    }
})

const why  = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-why ",
        start:"0% 20%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
    }
})
why.to(".sc-why .title-wrap",{ y:0 , opacity:1})

const whykSlide = new Swiper('.why-slide',{
    slidesPerView:"auto",
    spaceBetween:25,
    navigation: {
        nextEl: '.sc-why .swiper-control-wrap .next-btn',
        prevEl: '.sc-why .swiper-control-wrap .prev-btn',
    },
})

const prod  = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-prod ",
        start:"0% 20%",
        end:"100% 100%",
        //scrub:0,
        //markers:true,
        toggleClass:{
            targets:".sc-prod .popup-btn-area",
            className:"active",
        }
    }
})
prod.to(".sc-prod .title-wrap",{ y:0 , opacity:1})

