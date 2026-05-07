
//click yaparsak butona erişiriz enter a basınca çalışmayabilir 
//ama submit yaparsak forma erişiriz form tıklama veya enter hangi yolla 
// gönderilirse gönderilsin çalışır .basit buton işlemlerinde click form göndermede submit kullan 

function openImage(imageName) {
  document.getElementById("overlayImg").src = imageName;
  document.getElementById("imageOverlay").style.display = "flex";
}

function closeImage() {
  document.getElementById("imageOverlay").style.display = "none";
}


const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    successMessage.classList.remove("d-none");

    contactForm.reset();  // bu sayfada form varsa çalıştır yoksa geç için yazıldı 
});
