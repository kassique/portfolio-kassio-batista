document.addEventListener("DOMContentLoaded", function() { /*Animação durante o carregamento da página*/
    var loader = document.getElementById("loader");
    loader.style.display = "flex";
    document.body.style.overflow = "hidden"

    setTimeout(function() {
        loader.style.display = "none";
        document.body.style.overflow = "visible";
    }, 1000);
})

const arrow = document.querySelector(".arrow"); /*Navbar responsiva*/
const header = document.querySelector("header");
const navbarList = document.querySelector(".navbar-list");

arrow.addEventListener("click", () => {
    arrow.classList.toggle("active");
    header.classList.toggle("active");
    navbarList.classList.toggle("active");
})

document.addEventListener("DOMContentLoaded", function () { /*Definição do lugar exato onde o scroll rola a página*/
    var navbarLink = document.querySelectorAll(".navbar-link");

    navbarLink.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            var targetId = this.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                var offsetTop = targetSection.offsetTop;
                var windowHeight = window.innerHeight;
                var offsetCenter = offsetTop - (windowHeight / 4);

                window.scrollTo({
                    top: offsetCenter
                });
            }
        });
    });
});

const dynamicText = document.querySelector(".title-strong.dynamic"); /*Texto com animação dinâmica*/
const words = ["Criatividade", "Interatividade", "Acessibilidade", "Desempenho"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if(!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if(isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();