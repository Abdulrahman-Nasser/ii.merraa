/* =========================================
   BIRTHDAY WEBSITE
========================================= */

const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const openButton = document.getElementById("openButton");

const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");
const musicIcon = document.getElementById("musicIcon");



/* =========================================
   TRY MUSIC IMMEDIATELY ON PAGE LOAD
========================================= */

window.addEventListener("load", async () => {

    try {

        music.volume = 1.0;

        await music.play();

        musicButton.classList.add("playing");

        musicIcon.textContent = "♫";

        console.log("Music started automatically.");

    } catch (error) {

        console.log("Browser blocked autoplay.");

        /*
         If autoplay is blocked, start the music
         automatically after the FIRST interaction
         anywhere on the page.
        */

        const startMusic = async () => {

            try {

                await music.play();

                musicButton.classList.add("playing");

                musicIcon.textContent = "♫";

                document.removeEventListener(
                    "click",
                    startMusic
                );

                document.removeEventListener(
                    "touchstart",
                    startMusic
                );

                document.removeEventListener(
                    "keydown",
                    startMusic
                );

            } catch (error) {

                console.log("Music could not start.");

            }

        };

        document.addEventListener(
            "click",
            startMusic,
            { once: true }
        );

        document.addEventListener(
            "touchstart",
            startMusic,
            { once: true }
        );

        document.addEventListener(
            "keydown",
            startMusic,
            { once: true }
        );

    }

});



/* =========================================
   OPEN WEBSITE
========================================= */

openButton.addEventListener("click", async () => {

    opening.classList.add("hide");

    mainContent.classList.add("show");

    document.body.classList.remove("locked");

    try {

        await music.play();

        musicButton.classList.add("playing");

        musicIcon.textContent = "♫";

    } catch (error) {

        console.log("Music playback was blocked.");

    }

});



/* =========================================
   MUSIC CONTROL
========================================= */

musicButton.addEventListener("click", async () => {

    if (music.paused) {

        try {

            await music.play();

            musicButton.classList.add("playing");

            musicIcon.textContent = "♫";

        } catch (error) {

            console.log("Unable to play music.");

        }

    } else {

        music.pause();

        musicButton.classList.remove("playing");

        musicIcon.textContent = "🔇";

    }

});



/* =========================================
   IMAGE LIGHTBOX
========================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");


function openImage(imagePath) {

    lightboxImage.src = imagePath;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeImage() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}



/* =========================================
   CLOSE LIGHTBOX
========================================= */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeImage();

    }

});



/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeImage();

    }

});



/* =========================================
   PAGE LOCK
========================================= */

document.body.classList.add("locked");