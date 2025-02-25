gsap.registerPlugin(ScrollTrigger);

/* ============================================= 2행 */
gsap.to('.allinone_02 .contents',{

    scrollTrigger:{
        trigger:'.allinone_02 .contents',
        start:'top 80%',
        end:'top 20%',
        markers:true,
        toggleAction:'play reverse restart reverse',
    },
    opacity:1,
    y: 30,
});

/* ============================================= 3행 */
const rowReason = document.querySelectorAll('.reason_03 .con_03 .list')

gsap.to('.reason_03 .sub_title',{

    scrollTrigger:{
        trigger:'.reason_03 .sub_title',
        start:'top 80%',
        end:'top 20%',
        markers:true,
        toggleAction:'play reverse restart reverse',
    },
    opacity:1,
    y: 30,
});

gsap.to(rowReason, {
    scrollTrigger: {
        trigger: ".reason_03 .con_03 .list",
        start: "top 80%",
        end: "top 20%",
        scrub:true,
        toggleActions: "play reverse restart reverse",
        markers: false, // 디버깅 마커 (테스트 후 false)
        onEnter: () => {
            gsap.to(rowReason,{
                opacity: 1,
                y: 50,
                duration: 0.8,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeaveBack: () => {
            gsap.to(rowReason, {
                opacity: 0,
                y: 0,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
        onEnterBack: () => {
            gsap.to(rowReason,{
                opacity: 1,
                y: 50,
                duration: 0.8,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeave: () => {
            gsap.to(rowReason, {
                opacity: 0,
                y: 0,
                duration: 0.5,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
    },
});

/* ============================================= 4행 */
gsap.to('.translate_04 .contents',{

    scrollTrigger:{
        trigger:'.translate_04 .contents',
        start:'top 80%',
        end:'top 20%',
        markers:true,
        toggleAction:'play reverse restart reverse',
    },
    opacity:1,
    x: 30,
});

/* ============================================= 5행 */
gsap.to('.tts_05 .contents',{

    scrollTrigger:{
        trigger:'.tts_05 .contents',
        start:'top 80%',
        end:'top 20%',
        markers:true,
        toggleAction:'play reverse restart reverse',
    },
    opacity:1,
    x: -30,
});

/* ============================================= 6행 */
gsap.to('.ocr_06 .contents',{

    scrollTrigger:{
        trigger:'.ocr_06 .contents',
        start:'top 80%',
        end:'top 20%',
        markers:true,
        toggleAction:'play reverse restart reverse',
    },
    opacity:1,
    x: 30,
});

/* ============================================= 7행 */
gsap.to('.solution_07 .contents',{

    scrollTrigger:{
        trigger:'.solution_07 .contents',
        start:'top 80%',
        end:'top 20%',
        markers:true,
        toggleAction:'play reverse restart reverse',
    },
    opacity:1,
});

/* ============================================= 8행 */
gsap.to('.nlp_08 .contents',{

    scrollTrigger:{
        trigger:'.nlp_08 .contents',
        start:'top 80%',
        end:'top 20%',
        markers:true,
        toggleAction:'play reverse restart reverse',
    },
    opacity:1,
    x: 30,
});

/* ============================================= 8행 */
