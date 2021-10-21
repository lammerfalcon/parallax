let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.rock', 3, { y: -300 })
    .to('.girl', 3, { y: -200 }, '-=3')
    .fromTo('.bg', { y: -50 }, { y: 0, duration: 3 }, '-=3')
    .to('.content', 3, { top: '0%' }, '-=3')
    .fromTo('.left', { x: -1000 }, { x: 0, duration: 3 }, '=-3')
    .fromTo('.right', { x: 1000 }, { x: 0, duration: 3 }, '=-3')
    .fromTo('p', { opacity: 0 }, { opacity: 1, duration: 3 }, '=-3')
    .fromTo('.title', { y: -1000 }, { y: 0, duration: 3 }, '=-3')
let scene = new ScrollMagic.Scene({
    tiggerElement: 'section',
    duration: '250%',
    triggerHook: 0
})
    .setTween(timeline)
    .setPin('section')
    .addTo(controller);