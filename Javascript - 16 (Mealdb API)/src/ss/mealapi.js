const tl = gsap.timeline({
    default: {
        duration: .75,
        ease: "power3.easeOut"
    }
})

tl.fromTo(".hero-img", {scale: 1.4, borderRadius: "0rem"}, {scale: 1, borderRadius: "1rem", delay: 0.25, duration: 2.5, ease: "elastic.out(2.5, 2)"})

tl.fromTo(".gtext1", {x: "100%", opacity: .5}, {x: 0, opacity: 1,}, "<20%")
tl.fromTo(".gtext2", {y: "-100%", opacity: .5}, {y: 0, opacity: 1,}, "<20%")
tl.fromTo(".gtext3", {x: "100%", opacity: .5}, {x: 0, opacity: 1,}, "<20%")
tl.fromTo(".gtext4", {x: "100%", opacity: .5}, {x: 0, opacity: 1,}, "<20%")
tl.fromTo(".gtext5", {y: "100%", opacity: .5}, {y: 0, opacity: 1,}, "<20%")
tl.fromTo(".gtext6", {x: "100%", opacity: .5}, {x: 0, opacity: 1,}, "<20%")

const logo = document.querySelector(".logo");
const letter = logo.textContent.split("");
logo.textContent = "";

letter.forEach((letter) => {
    logo.innerHTML += `<span class="letter">${letter}</span>`
})

gsap.set(".letter", {display: "inline-block"});
gsap.fromTo(".letter", {y: "100%"}, {y:0, delay: 1, stagger: .05, ease: "back.Out"})