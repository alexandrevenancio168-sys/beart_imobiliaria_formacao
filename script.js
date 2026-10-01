/* =========================================================
   BRT / BEART IMOBILIÁRIA
   LANDING PAGE — JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONTAGEM REGRESSIVA
    ===================================================== */

    const targetDate = new Date("2026-11-16T09:00:00+01:00").getTime();

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    function updateCountdown() {

        if (
            !daysElement ||
            !hoursElement ||
            !minutesElement ||
            !secondsElement
        ) {
            return;
        }

        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {

            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";

            return;
        }

        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );

        daysElement.textContent =
            String(days).padStart(2, "0");

        hoursElement.textContent =
            String(hours).padStart(2, "0");

        minutesElement.textContent =
            String(minutes).padStart(2, "0");

        secondsElement.textContent =
            String(seconds).padStart(2, "0");
    }

    updateCountdown();

    setInterval(updateCountdown, 1000);


    /* =====================================================
       HEADER — EFEITO GLASSMORPHISM AO ROLAR
    ===================================================== */

    const header = document.querySelector("header");

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =====================================================
       MENU MOBILE
    ===================================================== */

   /* =====================================================
   MOBILE MENU
===================================================== */

    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {

            const menuAberto =
                mobileMenu.classList.contains("active");

            if (menuAberto) {

                /* FECHAR MENU */

                mobileMenu.classList.remove("active");

                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menu");

            } else {

                /* ABRIR MENU */

                mobileMenu.classList.add("active");

                menuToggle.textContent = "✕";
                menuToggle.setAttribute("aria-expanded", "true");
                menuToggle.setAttribute("aria-label", "Fechar menu");

            }

        });


        /* =================================================
           FECHAR MENU AO CLICAR NOS LINKS
        ================================================= */

        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menu");

            });

        });

    }

    /* =====================================================
       ANIMAÇÕES AO ENTRAR NA TELA
    ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".info-card, .module-card, .trainer-content, .trainer-image, .registration-card"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(element => {

            element.classList.add("animate");

            observer.observe(element);

        });

    } else {

        animatedElements.forEach(element => {

            element.classList.add("show");

        });

    }


    /* =====================================================
       FORMULÁRIO DE INSCRIÇÃO
    ===================================================== */

    const form =
        document.querySelector(
            ".registration-card form"
        );


    if (form) {

        form.addEventListener("submit", event => {

            event.preventDefault();


            const nome =
                document.getElementById("nome")?.value.trim() || "";

            const whatsapp =
                document.getElementById("whatsapp")?.value.trim() || "";

            const email =
                document.getElementById("email")?.value.trim() || "";


            if (!nome || !whatsapp || !email) {

                alert(
                    "Por favor, preencha todos os campos obrigatórios."
                );

                return;
            }


            alert(
                "Obrigado, " +
                nome +
                "! A sua inscrição foi recebida."
            );


            form.reset();

        });

    }

});





function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const email = document.getElementById('email').value.trim();
    const experiencia = document.getElementById('experiencia').value.trim();

    const telefone = '244958190870';

    const texto = `Olá, gostaria de confirmar a minha inscrição na formação imobiliária.

    Nome: ${nome}
    WhatsApp: ${whatsapp}
    E-mail: ${email}
    Experiência no mercado imobiliário: ${experiencia || 'Não informado'}`;

    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
}

  /* =====================================================
         CONTROLO DOS MÓDULOS
         Mostra 4 inicialmente e permite abrir/fechar os restantes.
    ====================================================== */


        const modulesToggle = document.getElementById("modulesToggle");
        const hiddenModules = document.querySelectorAll(".module-hidden");

        if (modulesToggle && hiddenModules.length) {

            modulesToggle.addEventListener("click", () => {

                const isExpanded =
                    modulesToggle.getAttribute("aria-expanded") === "true";


                hiddenModules.forEach(module => {

                    module.classList.toggle("module-visible", !isExpanded);

                });


                modulesToggle.setAttribute(
                    "aria-expanded",
                    String(!isExpanded)
                );


                modulesToggle.textContent =
                    isExpanded
                        ? "Ver mais módulos"
                        : "Ver menos módulos";

            });

        }