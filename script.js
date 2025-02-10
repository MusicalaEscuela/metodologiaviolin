// ANIMACIÓN DE TEXTOS
gsap.to(".overlay h1", { opacity: 1, y: 0, duration: 1 });
gsap.to(".overlay p", { opacity: 1, y: 0, duration: 1, delay: 0.5 });

// CANVAS: ANIMACIÓN DE NOTAS MUSICALES
const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 300;

let notes = [];

function createNote() {
    notes.push({
        x: Math.random() * canvas.width,
        y: canvas.height,
        speed: Math.random() * 3 + 2
    });
}

function drawNotes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    notes.forEach((note, index) => {
        ctx.beginPath();
        ctx.arc(note.x, note.y, 5, 0, Math.PI * 2);
        ctx.fill();
        note.y -= note.speed;
        if (note.y < 0) notes.splice(index, 1);
    });

    requestAnimationFrame(drawNotes);
}

setInterval(createNote, 500);
drawNotes();

// Barra de Progreso
window.onscroll = function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
};
