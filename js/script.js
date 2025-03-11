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
let slideIndex = 1;
showSlides(slideIndex);

// Function to show slides based on index
function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active-dot"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active-dot");
}

// Function to update slides when clicking dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}
