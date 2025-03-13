// file java script

// first load, welcome name ask
let welcomename = prompt("Masukan Nama Anda.");
if (!welcomename) welcomename = "User"; // Default name if empty
document.getElementById('welcome-name').innerText = welcomename;

function validateform() {
    const name = document.forms["messageus-form"]["namalengkap"].value;
    const tgllahir = document.forms["messageus-form"]["tgllahir"].value;
    const jk = document.forms["messageus-form"]["jeniskelamin"].value;
    const pesan = document.forms["messageus-form"]["pesan"].value;

    if (name == "" || tgllahir == "" || jk == "" || pesan == "") {
        alert("Semua Kolom Harus Diisi!");
        return false;
    }
    pengirimui(name, tgllahir, jk, pesan);
    return false;
}

function pengirimui(nama, tanggallahir, jeniskelamin, pesan) {
    const d = new Date();

    // Format date and time for WIB (UTC+7)
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // Use 24-hour format
        timeZone: "Asia/Jakarta" // Force WIB (UTC+7)
    };

    const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(d) + " WIB";

    document.getElementById("nama-pengirim").innerText = nama;
    document.getElementById("tgllahir-pengirim").innerText = tanggallahir;
    document.getElementById("jeniskelamin-pengirim").innerText = jeniskelamin;
    document.getElementById("pesan-pengirim").innerText = pesan;
    document.getElementById("currentdatetime").innerText = formattedDate;
}
let slideIndex = 1; // Start from the first slide
let slideInterval;

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active-dot");

    // Restart auto-slide
    clearTimeout(slideInterval);
    slideInterval = setTimeout(() => changeSlide(1), 3000);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Start Auto Slide
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
});