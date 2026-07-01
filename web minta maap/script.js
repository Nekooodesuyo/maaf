// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 2000);
});

// Bintang
const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}

// Surat
const message=`Chelsea...

Aku tahu kata "maaf" mungkin tidak cukup.

Aku sadar aku sudah membuatmu kecewa.

Aku tidak membuat website ini untuk mencari alasan.

Aku hanya ingin kamu tahu bahwa aku benar-benar menyesal.

Aku sadar kepercayaan tidak bisa kembali hanya karena satu kata "maaf".

Karena itu aku tidak meminta semuanya kembali seperti dulu.

Aku hanya ingin diberi kesempatan membuktikan bahwa aku bisa berubah.

Terima kasih sudah hadir dalam hidupku.

Aku benar-benar mencintaimu.

Maafkan aku.

❤️`;

let index=0;

const typing=document.getElementById("typing");

function typeWriter(){

    if(index<message.length){

        typing.innerHTML+=message.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

// Tombol buka surat
document.getElementById("startBtn").onclick=function(){

    document.querySelector(".hero").classList.add("hidden");

    document.getElementById("letter").classList.remove("hidden");

    document.getElementById("music").play();

    typeWriter();

}

// Lanjut ke galeri
document.getElementById("next").onclick=function(){

    document.getElementById("letter").classList.add("hidden");

    document.getElementById("gallery").classList.remove("hidden");

}

// Slideshow
const images=[
"images/1.jpeg",
"images/2.jpeg",
"images/3.jpeg",
"images/4.jpeg"
];

let current=0;

function showImage(){

document.getElementById("slide").src=images[current];

}

function nextImage(){

current++;

if(current>=images.length){

current=0;

}

showImage();

}

function prevImage(){

current--;

if(current<0){

current=images.length-1;

}

showImage();

}

setInterval(nextImage,4000);

// Halaman terakhir
document.getElementById("finalBtn").onclick=function(){

document.getElementById("gallery").classList.add("hidden");

document.getElementById("final").classList.remove("hidden");

}

