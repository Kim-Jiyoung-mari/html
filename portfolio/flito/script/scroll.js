gsap.registerPlugin(ScrollTrigger);

/* ============================================= 2행 */
gsap.to('.allinone_02 .contents',{

    scrollTrigger:{
        trigger:'.allinone_02 .contents',
        start:'top 80%',
        end:'top 20%',
        markers:false, /* false 변경하기 */
        toggleAction:'play reverse restart reverse',
    },
    opacity:1,
    y: 30,
});

/* ============================================= 3행 */

gsap.to('.reason_03 .box',{

    scrollTrigger:{
        trigger:'.reason_03 .box',
        start:'top 80%',
        end:'top 20%',
        markers:false, /* false 변경하기 */
        toggleAction:'play reverse restart reverse',
    },
    opacity:1,
    y: 30,
});

/* ============================================= 4행 */
gsap.to('.translate_04 .contents',{

    scrollTrigger:{
        trigger:'.translate_04 .contents',
        start:'top 80%',
        end:'top 20%',
        markers:false, /* false 변경하기 */
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
        markers:false, /* false 변경하기 */
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
        markers:false, /* false 변경하기 */
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
        markers:false, /* false 변경하기 */
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
        markers:false, /* false 변경하기 */
        toggleAction:'play reverse restart reverse',
    },
    opacity:1,
    x: 30,
});

/* ============================================= 8행 */
