gsap. registerPlugin(ScrollTrigger);

gsap. form(".title", {
    y: 80,
    opacity: 0,
    duration: 1.2
});

gsap. form(".subtitle", {
    y:40,
    opacity: 0,
    delay: 0.3,
    duration: 1,
})

gsap. utils. toArray(".section").forEach(section=> {
    gsap.form(section.children, {
        scrollTrigger: {
            trigger: section,
            start: "top 70%",
        },
        y:80,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });
});

gsap. from(".project", {
    scrollTrigger: {
        trigger: ".portfolio-grid",
        start: "top 80%"
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

document.getElementById("contactForm").addEventListener("submit", e=> {
    e.preventDefault();
    alert("🚀Message Sent");
})