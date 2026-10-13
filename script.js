"use strict";

/* =========================================================
   VOICE OF SILENCE
   PERSONAJES + ESTRELLAS + ANIMACIONES + MÚSICA
   + GALERÍA + INFORMACIÓN + CENTROS DE APOYO
========================================================= */


/* =========================================================
   ESTRELLAS DEL FONDO
========================================================= */

const clickStars = document.getElementById("clickStars");

function createBackgroundStars() {

    const amount = 95;

    for (let i = 0; i < amount; i++) {

        const star = document.createElement("span");

        star.className = "star-spark";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            2 + Math.random() * 3 + "s";

        document.body.appendChild(star);
    }
}

createBackgroundStars();


/* =========================================================
   ESTRELLITAS AL HACER CLICK
========================================================= */

function sparkle(x, y) {

    if (!clickStars) return;

    const symbols = [
        "✦",
        "✧",
        "⋆",
        "✦",
        "+"
    ];

    for (let i = 0; i < 10; i++) {

        const star = document.createElement("span");

        star.className = "click-star";

        star.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        star.style.left = x + "px";
        star.style.top = y + "px";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            25 + Math.random() * 75;

        star.style.setProperty(
            "--sx",
            Math.cos(angle) * distance + "px"
        );

        star.style.setProperty(
            "--sy",
            Math.sin(angle) * distance + "px"
        );

        star.style.animationDelay =
            Math.random() * .08 + "s";

        clickStars.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 1000);
    }
}

document.addEventListener("click", function(event) {

    sparkle(
        event.clientX,
        event.clientY
    );

});


/* =========================================================
   ESTRELLAS FUGACES
========================================================= */

function createMeteor() {

    const meteor =
        document.createElement("div");

    meteor.className =
        "shooting-star";

    meteor.style.position = "fixed";

    meteor.style.left =
        window.innerWidth + 100 + "px";

    meteor.style.top =
        Math.random() *
        window.innerHeight *
        .55 + "px";

    meteor.style.width =
        100 + Math.random() * 120 + "px";

    meteor.style.height = "2px";

    meteor.style.background =
        "linear-gradient(90deg,white,transparent)";

    meteor.style.transform =
        "rotate(-35deg)";

    meteor.style.pointerEvents =
        "none";

    meteor.style.zIndex = "0";

    document.body.appendChild(meteor);

    const duration =
        1000 + Math.random() * 1200;

    meteor.animate(
        [
            {
                transform:
                    "translate(0,0) rotate(-35deg)",
                opacity: 0
            },

            {
                transform:
                    "translate(-600px,380px) rotate(-35deg)",
                opacity: 1
            },

            {
                transform:
                    "translate(-1000px,650px) rotate(-35deg)",
                opacity: 0
            }
        ],
        {
            duration: duration,
            easing: "linear"
        }
    );

    setTimeout(() => {
        meteor.remove();
    }, duration + 50);
}

function meteorLoop() {

    if (Math.random() > .25) {
        createMeteor();
    }

    setTimeout(
        meteorLoop,
        7000 + Math.random() * 9000
    );
}

meteorLoop();


/* =========================================================
   NAVEGACIÓN
========================================================= */

function goToSection(id) {

    if (!id) return;

    if (id.startsWith("#")) {
        id = id.substring(1);
    }

    const section =
        document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


document.querySelectorAll("[data-target]")
    .forEach(button => {

        button.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                const target =
                    button.dataset.target;

                if (target) {
                    goToSection(target);
                }

            }
        );

    });


/* =========================================================
   MENÚ PEQUEÑO DEL INICIO
========================================================= */

document.querySelectorAll(".hero-menu-item")
    .forEach(link => {

        link.addEventListener(
            "click",
            function(event) {

                const target =
                    link.getAttribute("href");

                if (
                    target &&
                    target.startsWith("#")
                ) {

                    event.preventDefault();

                    goToSection(target);
                }

            }
        );

    });


/* =========================================================
   MENÚ PRINCIPAL
========================================================= */

document.querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            function(event) {

                const target =
                    link.getAttribute("href");

                if (
                    target &&
                    target.startsWith("#")
                ) {

                    event.preventDefault();

                    goToSection(target);
                }

            }
        );

    });


/* =========================================================
   BOTÓN COMENZAR
========================================================= */

const startButton =
    document.getElementById("startButton");

if (startButton) {

    startButton.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            goToSection("trailer");

        }
    );

}


/* =========================================================
   TRÁILER
========================================================= */

const trailer =
    document.getElementById("gameTrailer");

const trailerPlayButton =
    document.getElementById("trailerPlayButton");

const trailerOverlay =
    document.querySelector(".trailer-overlay");


if (trailerPlayButton && trailer) {

    trailerPlayButton.addEventListener(
        "click",
        function() {

            if (trailer.paused) {

                trailer.play().catch(() => {});

            } else {

                trailer.pause();

            }

        }
    );

}


if (trailer) {

    trailer.addEventListener(
        "play",
        function() {

            if (trailerOverlay) {
                trailerOverlay.style.opacity = ".18";
            }

        }
    );

    trailer.addEventListener(
        "pause",
        function() {

            if (trailerOverlay) {
                trailerOverlay.style.opacity = "1";
            }

        }
    );

}


/* =========================================================
   PERSONAJES
========================================================= */

const characterData = {

    mateo: {

        name: "MATEO",

        role: "PROTAGONISTA",

        image:
            "characters/mateowapito.png",

        description:
            "Mateo es el protagonista de Voice of Silence. Su historia comienza en El Alto y está marcada por cambios familiares, vulnerabilidad y decisiones que pueden modificar su camino.",

        meaning:
            "Representa la vulnerabilidad y la forma en que las circunstancias familiares y sociales pueden influir en las decisiones de una persona."

    },


    marco: {

        name: "MARCO",

        role: "PERSONAJE CLAVE",

        image:
            "characters/marco.png",

        description:
            "Marco es el hermano mayor de Mateo. Ante las dificultades económicas de su familia, intenta encontrar una forma de ayudar y termina enfrentando una situación que cambia su vida.",

        meaning:
            "Representa cómo una necesidad familiar puede poner a una persona en una situación de riesgo y cómo las decisiones tienen consecuencias."

    },


    daniela: {

        name: "DANIELA",

        role: "MADRE",

        image:
            "characters/mama.png",

        description:
            "Daniela es la madre de la familia. Su enfermedad y la preocupación por conseguir tratamiento forman una parte importante del inicio de la historia.",

        meaning:
            "Representa el vínculo familiar y cómo una crisis de salud y las dificultades económicas pueden afectar las decisiones de toda una familia."

    },


    alicia: {

        name: "ALICIA",

        role: "PERSONAJE",

        image:
            "characters/alicia.png",

        description:
            "Alicia forma parte del entorno de Mateo y aporta un vínculo humano importante dentro de la historia.",

        meaning:
            "Representa el acompañamiento y la importancia de contar con personas cercanas cuando una situación se vuelve difícil."

    },


    oscar: {

        name: "ÓSCAR",

        role: "ANTAGONISTA",

        image:
            "characters/viejitouwu.png",

        description:
            "Óscar Fernández es un adulto que se aprovecha de la vulnerabilidad de otras personas para ejercer control sobre ellas.",

        meaning:
            "Representa el abuso de poder y la manipulación de personas que atraviesan necesidades o situaciones de vulnerabilidad."

    }

};


const characterModal =
    document.getElementById(
        "characterModal"
    );

const characterModalClose =
    document.getElementById(
        "characterModalClose"
    );

const modalCharacterImage =
    document.getElementById(
        "modalCharacterImage"
    );

const modalCharacterName =
    document.getElementById(
        "modalCharacterName"
    );

const modalCharacterRole =
    document.getElementById(
        "modalCharacterRole"
    );

const modalCharacterDescription =
    document.getElementById(
        "modalCharacterDescription"
    );

const modalCharacterMeaning =
    document.getElementById(
        "modalCharacterMeaning"
    );


function openCharacter(key) {

    const data =
        characterData[key];

    if (!data || !characterModal) {
        return;
    }


    if (modalCharacterName) {

        modalCharacterName.textContent =
            data.name;

    }


    if (modalCharacterRole) {

        modalCharacterRole.textContent =
            data.role;

    }


    if (modalCharacterDescription) {

        modalCharacterDescription.textContent =
            data.description;

    }


    if (modalCharacterMeaning) {

        modalCharacterMeaning.textContent =
            data.meaning;

    }


    if (modalCharacterImage) {

        modalCharacterImage.src =
            data.image;

        modalCharacterImage.alt =
            data.name;

        modalCharacterImage.style.display =
            "block";

    }


    characterModal.classList.add(
        "is-open"
    );

    characterModal.setAttribute(
        "aria-hidden",
        "false"
    );


    sparkle(
        window.innerWidth / 2,
        window.innerHeight / 2
    );

}


document.querySelectorAll(
    ".character-card"
).forEach(card => {

    card.addEventListener(
        "click",
        function() {

            const key =
                card.dataset.character;

            openCharacter(key);

        }
    );

});


function closeCharacter() {

    if (!characterModal) return;

    characterModal.classList.remove(
        "is-open"
    );

    characterModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


if (characterModalClose) {

    characterModalClose.addEventListener(
        "click",
        closeCharacter
    );

}


if (characterModal) {

    const overlay =
        characterModal.querySelector(
            ".modal-overlay"
        );

    if (overlay) {

        overlay.addEventListener(
            "click",
            closeCharacter
        );

    }

}


/* =========================================================
   GALERÍA
========================================================= */

const galleryModal =
    document.getElementById(
        "galleryModal"
    );

const galleryModalClose =
    document.getElementById(
        "galleryModalClose"
    );

const galleryModalImage =
    document.getElementById(
        "galleryModalImage"
    );


document.querySelectorAll(
    ".gallery-item"
).forEach(item => {

    item.addEventListener(
        "click",
        function() {

            /*
                IMPORTANTE:

                Tomamos directamente el <img>
                que está dentro de cada tarjeta.

                Así se utilizan las rutas reales
                que ya tienes en tu HTML.
            */

            const image =
                item.querySelector("img");

            if (
                !galleryModal ||
                !galleryModalImage ||
                !image
            ) {
                return;
            }


            galleryModalImage.src =
                image.getAttribute("src");

            galleryModalImage.alt =
                image.getAttribute("alt") ||
                "Imagen de Voice of Silence";


            galleryModal.classList.add(
                "is-open"
            );

            galleryModal.setAttribute(
                "aria-hidden",
                "false"
            );


            sparkle(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

        }
    );

});


function closeGallery() {

    if (!galleryModal) return;

    galleryModal.classList.remove(
        "is-open"
    );

    galleryModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


if (galleryModalClose) {

    galleryModalClose.addEventListener(
        "click",
        closeGallery
    );

}


if (galleryModal) {

    const overlay =
        galleryModal.querySelector(
            ".modal-overlay"
        );

    if (overlay) {

        overlay.addEventListener(
            "click",
            closeGallery
        );

    }

}


/* =========================================================
   INFORMACIÓN
========================================================= */

const informationData = {

    project: {

        category: "SOBRE EL JUEGO",

        title: "Voice of Silence",

        html: `
            <p>
                <strong>Voice of Silence</strong>
                es una novela visual ambientada
                en El Alto, Bolivia.
            </p>

            <p>
                El proyecto combina misterio,
                drama psicológico y reflexión social.
                La historia presenta decisiones que
                pueden conducir a diferentes caminos
                y finales.
            </p>

            <p>
                El objetivo del proyecto es contar
                una historia interactiva que invite
                a reflexionar sobre la vulnerabilidad,
                las decisiones, la familia y el
                entorno social.
            </p>
        `

    },


    "el-alto": {

        category: "CONTEXTO",

        title: "El Alto, Bolivia",

        html: `
            <p>
                El Alto es el escenario principal
                de Voice of Silence y forma parte
                de la identidad visual y narrativa
                del proyecto.
            </p>

            <p>
                La ciudad no se utiliza solamente
                como fondo: sus espacios, familias,
                colegios y situaciones cotidianas
                ayudan a construir el mundo de
                la historia.
            </p>
        `

    },


    prevention: {

        category: "ORIENTACIÓN",

        title: "Prevención y ayuda",

        html: `
            <p>
                Si una persona atraviesa una
                situación de vulnerabilidad,
                lo más importante es buscar apoyo
                de un adulto de confianza, un
                profesional o un servicio público.
            </p>

            <p>
                En el caso de adolescentes, también
                pueden acudir a servicios municipales
                de protección y orientación.
            </p>

            <p>
                Buscar ayuda a tiempo puede facilitar
                el acceso a orientación y apoyo
                profesional.
            </p>

            <div class="information-notice">

                <strong>
                    IMPORTANTE
                </strong>

                <p>
                    Si existe una situación de peligro
                    inmediato, se debe buscar ayuda
                    de emergencia.
                </p>

            </div>
        `

    },


    rights: {

        category: "DERECHOS",

        title: "CONSENTIMIENTO Y ATENCIÓN",

        html: `
            <p>
                <strong>
                    ¿Un familiar puede obligar a un menor?
                </strong>
            </p>

            <p>
                No es correcto decir que un familiar
                puede simplemente obligar a un menor
                a hacer cualquier cosa.
            </p>

            <p>
                Madres, padres o responsables tienen
                el deber de proteger la salud y seguridad
                de niñas, niños y adolescentes, pero
                ellos también son personas con derechos.
            </p>

            <p>
                La opinión del niño o adolescente debe
                ser escuchada y respetada de acuerdo con
                su edad y madurez.
            </p>

            <p>
                Si existe una emergencia que ponga en
                riesgo la vida o la salud, se debe buscar
                atención profesional de inmediato.
            </p>

            <p>
                Cuando no existe una emergencia, una
                familia no debería intentar resolver una
                situación mediante amenazas, violencia
                o maltrato.
            </p>

            <p>
                Lo adecuado es buscar orientación de
                profesionales de salud y de los servicios
                de protección correspondientes.
            </p>

            <p>
                Si existe un conflicto entre la familia
                y los derechos de un adolescente, se puede
                acudir a la
                <strong>
                    Defensoría de la Niñez y Adolescencia
                </strong>
                para recibir orientación y protección.
            </p>

            <div class="information-notice">

                <strong>
                    EN RESUMEN
                </strong>

                <p>
                    La familia debe buscar proteger al
                    menor y ayudarle a recibir atención,
                    pero esto no significa que pueda
                    vulnerar sus derechos o utilizar
                    violencia.
                </p>

            </div>
        `

    },


    family: {

        category: "ACOMPAÑAMIENTO",

        title: "Familia y adolescentes",

        html: `
            <p>
                Cuando un adolescente atraviesa
                una situación difícil, es importante
                buscar apoyo de un adulto responsable,
                un familiar de confianza, un orientador
                escolar o un servicio profesional.
            </p>

            <p>
                La conversación debe centrarse en
                la seguridad y en conseguir ayuda
                adecuada.
            </p>

            <p>
                Escuchar sin juzgar y acompañar durante
                el proceso puede ayudar a que la persona
                no tenga que enfrentar la situación sola.
            </p>

        `

    },


    centers: {

        category: "RECURSOS",

        title: "Centros y servicios de apoyo",

        html: `

            <p>
                Contactos para orientación, protección
                y atención.
            </p>


            <div class="support-resources">


                <div class="support-item">

                    <h4>
                        Unidad de Atención Integral
                        a la Familia — GAMEA
                    </h4>

                    <p>
                        Servicio municipal de
                        atención familiar.
                    </p>

                    <a
                        class="support-phone"
                        href="tel:+59122837408"
                    >
                        Llamar: (2) 2837408
                    </a>

                    <a
                        class="official-link"
                        href="https://elalto.gob.bo/contactos/"
                        target="_blank"
                        rel="noopener"
                    >
                        Contacto oficial →
                    </a>

                </div>


                <div class="support-item">

                    <h4>
                        Defensoría de la Niñez D-2
                        — El Alto
                    </h4>

                    <p>
                        Servicio municipal de protección
                        de niñas, niños y adolescentes.
                    </p>

                    <a
                        class="support-phone"
                        href="tel:+59122816393"
                    >
                        Llamar: (2) 2816393
                    </a>

                    <a
                        class="official-link"
                        href="https://elalto.gob.bo/contactos/"
                        target="_blank"
                        rel="noopener"
                    >
                        Contacto oficial →
                    </a>

                </div>


                <div class="support-item">

                    <h4>
                        Defensoría de la Niñez D-3
                        — El Alto
                    </h4>

                    <p>
                        Servicio municipal de protección
                        de niñas, niños y adolescentes.
                    </p>

                    <a
                        class="support-phone"
                        href="tel:+59122832083"
                    >
                        Llamar: (2) 2832083
                    </a>

                    <a
                        class="official-link"
                        href="https://elalto.gob.bo/contactos/"
                        target="_blank"
                        rel="noopener"
                    >
                        Contacto oficial →
                    </a>

                </div>


                <div class="support-item">

                    <h4>
                        Defensoría de la Niñez D-4
                        — El Alto
                    </h4>

                    <p>
                        Servicio municipal de protección
                        de niñas, niños y adolescentes.
                    </p>

                    <a
                        class="support-phone"
                        href="tel:+59122860617"
                    >
                        Llamar: (2) 2860617
                    </a>

                    <a
                        class="official-link"
                        href="https://elalto.gob.bo/contactos/"
                        target="_blank"
                        rel="noopener"
                    >
                        Contacto oficial →
                    </a>

                </div>


                <div class="support-item">

                    <h4>
                        Defensoría Familia Segura
                        — El Alto
                    </h4>

                    <p>
                        Servicio municipal de orientación
                        y atención familiar.
                    </p>

                    <a
                        class="support-phone"
                        href="tel:+59122833795"
                    >
                        Llamar: (2) 2833795
                    </a>

                    <a
                        class="official-link"
                        href="https://elalto.gob.bo/contactos/"
                        target="_blank"
                        rel="noopener"
                    >
                        Contacto oficial →
                    </a>

                </div>


                <div class="support-item">

                    <h4>
                        Albergue de Niños
                        Hogar 24 Horas
                    </h4>

                    <p>
                        Servicio municipal de atención
                        y albergue para niñas y niños.
                    </p>

                    <a
                        class="support-phone"
                        href="tel:+59122833830"
                    >
                        Llamar: (2) 2833830
                    </a>

                    <a
                        class="official-link"
                        href="https://elalto.gob.bo/contactos/"
                        target="_blank"
                        rel="noopener"
                    >
                        Contacto oficial →
                    </a>

                </div>


                <div class="support-item">

                    <h4>
                        Albergue Transitorio
                        de Niños 24 Horas
                    </h4>

                    <p>
                        Línea gratuita municipal.
                    </p>

                    <a
                        class="support-phone"
                        href="tel:800164343"
                    >
                        Llamar: 800 16 4343
                    </a>

                    <a
                        class="official-link"
                        href="https://elalto.gob.bo/contactos/"
                        target="_blank"
                        rel="noopener"
                    >
                        Contacto oficial →
                    </a>

                </div>


                <div class="support-item">

                    <h4>
                        Servicio de Emergencia
                        SUMA — El Alto
                    </h4>

                    <p>
                        Línea municipal de emergencia.
                    </p>

                    <a
                        class="support-phone"
                        href="tel:161"
                    >
                        Llamar: 161
                    </a>

                    <a
                        class="official-link"
                        href="https://elalto.gob.bo/contactos/"
                        target="_blank"
                        rel="noopener"
                    >
                        Contacto oficial →
                    </a>

                </div>


                <div class="support-item">

                    <h4>
                        UTRAID — SEDES La Paz
                    </h4>

                    <p>
                        Unidad departamental de tratamiento
                        y rehabilitación.
                    </p>

                    <a
                        class="official-link"
                        href="https://www.sedeslapaz.gob.bo/unidad-de-tratamiento-y-rehabilitacion/"
                        target="_blank"
                        rel="noopener"
                    >
                        Sitio oficial UTRAID →
                    </a>

                </div>


            </div>


            <div class="information-notice">

                Los números y servicios pueden cambiar.
                Verifica el contacto en la página oficial
                antes de acudir.

            </div>

        `

    }

};


/* =========================================================
   MODAL DE INFORMACIÓN
========================================================= */

const informationModal =
    document.getElementById(
        "informationModal"
    );

const informationModalClose =
    document.getElementById(
        "informationModalClose"
    );

const informationModalCategory =
    document.getElementById(
        "informationModalCategory"
    );

const informationModalTitle =
    document.getElementById(
        "informationModalTitle"
    );

const informationModalText =
    document.getElementById(
        "informationModalText"
    );


function openInformation(key) {

    const data =
        informationData[key];

    if (!data || !informationModal) {
        return;
    }


    if (informationModalCategory) {

        informationModalCategory.textContent =
            data.category;

    }


    if (informationModalTitle) {

        informationModalTitle.textContent =
            data.title;

    }


    if (informationModalText) {

        informationModalText.innerHTML =
            data.html;

    }


    informationModal.classList.add(
        "is-open"
    );

    informationModal.setAttribute(
        "aria-hidden",
        "false"
    );


    sparkle(
        window.innerWidth / 2,
        window.innerHeight / 2
    );

}


document.querySelectorAll(
    ".information-button"
).forEach(button => {

    button.addEventListener(
        "click",
        function() {

            openInformation(
                button.dataset.info
            );

        }
    );

});


function closeInformation() {

    if (!informationModal) return;

    informationModal.classList.remove(
        "is-open"
    );

    informationModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


if (informationModalClose) {

    informationModalClose.addEventListener(
        "click",
        closeInformation
    );

}


if (informationModal) {

    const overlay =
        informationModal.querySelector(
            ".modal-overlay"
        );

    if (overlay) {

        overlay.addEventListener(
            "click",
            closeInformation
        );

    }

}


/* =========================================================
   TECLADO
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeCharacter();
            closeGallery();
            closeInformation();

        }

    }
);


/* =========================================================
   MÚSICA
========================================================= */

const bgMusic =
    document.getElementById(
        "bgMusic"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );

let musicOn = false;


if (bgMusic) {

    bgMusic.volume = .28;

}


function updateMusicButton() {

    if (!musicButton) return;

    musicButton.classList.toggle(
        "on",
        musicOn
    );

    musicButton.innerHTML =
        musicOn
        ? "♪ <span>MÚSICA ON</span>"
        : "♪ <span>MÚSICA OFF</span>";

}


async function toggleMusic() {

    if (!bgMusic) return;


    if (!musicOn) {

        try {

            await bgMusic.play();

            musicOn = true;

        } catch (error) {

            musicOn = false;

        }

    } else {

        bgMusic.pause();

        musicOn = false;

    }


    updateMusicButton();

}


if (musicButton) {

    musicButton.addEventListener(
        "click",
        toggleMusic
    );

}


updateMusicButton();


/* =========================================================
   ANIMACIONES AL HACER SCROLL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".content-section," +
        ".download-section," +
        ".section-header," +
        ".character-card," +
        ".information-card," +
        ".gallery-item"
    );


revealElements.forEach(
    element => {

        element.classList.add(
            "reveal"
        );

    }
);


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function(entries) {

                entries.forEach(
                    function(entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .08
            }
        );


    revealElements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        element => {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =========================================================
   MENÚ MÓVIL
========================================================= */

const menuButton =
    document.getElementById(
        "menuButton"
    );


if (menuButton) {

    menuButton.addEventListener(
        "click",
        function() {

            const menu =
                document.querySelector(
                    ".nav-menu"
                );

            if (!menu) return;


            const visible =
                menu.style.display === "flex";


            menu.style.display =
                visible ? "" : "flex";


            if (!visible) {

                menu.style.position =
                    "absolute";

                menu.style.top =
                    "72px";

                menu.style.left =
                    "15px";

                menu.style.right =
                    "15px";

                menu.style.padding =
                    "15px";

                menu.style.background =
                    "rgba(12,7,28,.96)";

                menu.style.border =
                    "1px solid rgba(255,255,255,.1)";

                menu.style.borderRadius =
                    "16px";

            }

        }
    );

}