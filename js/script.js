document.addEventListener('DOMContentLoaded', () => {

    onLoad()

    const swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 3,
        autoplay: {
            delay: 1000
        },
        spaceBetween: 10,
        breakpoints: {
            1300: {
                slidesPerView: 3,
                spaceBetween: 100
            },
            1100: {
                slidesPerView: 2
            },
            300: {
                slidesPerView: 1,
                spaceBetween: 50
            }
        }
    });

    let callback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('cases_title')) {
                    entry.target.classList.add('active');
                } else if (entry.target.classList.contains('skills_title')) {
                    entry.target.classList.add('active');

                } else if (entry.target.classList.contains("swiper")) {
                    entry.target.classList.add('swiper_active');
                }
                else if (entry.target.classList.contains("skills_photo")) {
                    entry.target.classList.add('active_photo')
                }
                else if (entry.target.classList.contains("skills_info_text")) {
                    entry.target.classList.add('active_text')
                }
                else if (entry.target.classList.contains("skills_main_skills")) {
                    entry.target.classList.add('cards_active')
                }
                else if (entry.target.classList.contains("form_block")) {
                    entry.target.classList.add('form_active')
                }
                else if (entry.target.classList.contains("form_textarea")) {
                    entry.target.classList.add('textarea_active')
                }
                else if (entry.target.classList.contains("form_title")) {
                    entry.target.classList.add('textarea_active')
                }
                else if (entry.target.classList.contains("form_btn")) {
                    entry.target.classList.add('btn_active')
                }
                else if (entry.target.classList.contains("contact_title")) {
                    entry.target.classList.add('contact_active')
                }
                else if (entry.target.classList.contains("contact_socials")) {
                    entry.target.classList.add('socials_active')
                }


                observer.unobserve(entry.target); // Остановить наблюдение после появления
            }
        });
    };

    let options = {
        root: null,
        rootMargin: "5px",
        threshold: 0 // Уменьшите значение порога
    };

    let observer = new IntersectionObserver(callback, options);

    let targets = document.querySelector(".cases_title");
    let skillsTitle = document.querySelector(".skills_title");
    let swiperAnim = document.querySelector(".swiper");

    let photo = document.querySelector(".skills_photo")

    let skillsText = document.querySelector(".skills_info_text")

    let skillsCard = document.querySelector(".skills_main_skills")

    let formBlocks = document.querySelectorAll(".form_block")

    let formText = document.querySelector(".form_textarea")

    let formTitles = document.querySelectorAll(".form_title")

    let formBtn = document.querySelector(".form_btn")

    let contactTitle = document.querySelector(".contact_title")

    let socials = document.querySelector(".contact_socials")

    if (socials) {
        observer.observe(socials);
    }

    if (contactTitle) {
        observer.observe(contactTitle);
    }

    if (formBtn) {
        observer.observe(formBtn);
    }

    if (formText) {
        observer.observe(formText);
    }

    formTitles.forEach(frm => {
        observer.observe(frm)
    })

    formBlocks.forEach(blck => {
        observer.observe(blck)
    })

    if (skillsCard) {
        observer.observe(skillsCard);
    }

    if (targets) {
        observer.observe(targets);
    }

    if (skillsText) {
        observer.observe(skillsText);
    }

    if (swiperAnim) {
        observer.observe(swiperAnim);
    }

    if (skillsTitle) {
        observer.observe(skillsTitle);
    }

    if (photo) {
        observer.observe(photo);
    }

    function darkApply() {
        const welcomeLink = document.querySelectorAll(".welcome_link")
        const skillsCardTitle = document.querySelectorAll(".skills_card_title")
        const skillsCardText = document.querySelectorAll(".skills_card_text")
        const skillsLinkSocials = document.querySelector(".skills_links_socials")

        const inputs = document.querySelectorAll(".form_input")
        const formTextArea = document.querySelector(".form_textarea")

        const formBtn = document.querySelector(".form_btn")

        skillsLinkSocials.style.color = "white"

        formBtn.style.color = "white"

        formTextArea.style.borderColor = "white"

        formBtn.addEventListener("mouseover", () => {
            formBtn.style.backgroundColor = "white"
            formBtn.style.color = "black"
        })
        formBtn.addEventListener("mouseout", () => {
            formBtn.style.backgroundColor = ""
            formBtn.style.color = "white"
        })

        const style = document.createElement('style');
        document.head.appendChild(style);

        style.textContent = `
                .welcome_link::after {
                    background-color: white;
                }

                .cases_title::after {
                    border-bottom: 5px solid white;
                }

                .skills_title::after {
                    border-bottom: 5px solid white;
                }

                .contact_title::after {
                    border-bottom: 5px solid white;
                }
            `

        inputs.forEach(inpts => {
            inpts.style.borderColor = "white"
        })

        skillsCardText.forEach(txt => {
            txt.style.color = "black"
        })

        skillsCardTitle.forEach(ttle => {
            ttle.style.color = "black"
        })

        welcomeLink.forEach(links => {
            links.style.color = "white"
        })
    }

    function lightApply() {
        const welcomeLink = document.querySelectorAll(".welcome_link")
        const skillsCardTitle = document.querySelectorAll(".skills_card_title")
        const skillsCardText = document.querySelectorAll(".skills_card_text")
        const skillsLinkSocials = document.querySelector(".skills_links_socials")

        const inputs = document.querySelectorAll(".form_input")
        const formTextArea = document.querySelector(".form_textarea")

        const formBtn = document.querySelector(".form_btn")

        skillsLinkSocials.style.color = "black"

        formBtn.style.color = "black"

        formTextArea.style.borderColor = "black"

        formBtn.addEventListener("mouseover", () => {
            formBtn.style.backgroundColor = "black"
            formBtn.style.color = "white"
        })
        formBtn.addEventListener("mouseout", () => {
            formBtn.style.backgroundColor = ""
            formBtn.style.color = "black"
        })

        const style = document.createElement('style');
        document.head.appendChild(style);

        style.textContent = `
                .welcome_link::after {
                    background-color: black;
                }

                .cases_title::after {
                    border-bottom: 5px solid black;
                }

                .skills_title::after {
                    border-bottom: 5px solid black;
                }

                .contact_title::after {
                    border-bottom: 5px solid black;
                }
            `

        inputs.forEach(inpts => {
            inpts.style.borderColor = "black"
        })

        skillsCardText.forEach(txt => {
            txt.style.borderColor = "black"
        })

        skillsCardTitle.forEach(ttle => {
            ttle.style.borderColor = "black"
        })

        welcomeLink.forEach(links => {
            links.style.color = "black"
        })
    }

    function darkmode() {
        const body = document.body;
        const darkMode = localStorage.getItem("dark_mode") === "true";
    
        localStorage.setItem("dark_mode", !darkMode);
        
        if (!darkMode) {
            body.classList.add("dark_mode");
            darkApply();
        } else {
            body.classList.remove("dark_mode");
            lightApply();
        }
    }

    const darkBtn = document.querySelector(".welcome_dark")
    darkBtn.addEventListener("click", darkmode)

    function onLoad() {
        const body = document.body;
        const darkMode = localStorage.getItem("dark_mode") === "true";

        if (darkMode) {
            body.classList.add("dark_mode");
            darkApply();
        } else {
            body.classList.remove("dark_mode");
            lightApply();
        }
    }
});