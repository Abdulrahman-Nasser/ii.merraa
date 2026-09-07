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
   OPEN WEBSITE + START MUSIC
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
   CLOSE LIGHTBOX BY CLICKING OUTSIDE
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
   PREVENT PAGE SCROLL BEFORE OPENING
========================================= */

document.body.classList.add("locked");