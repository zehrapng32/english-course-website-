
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

/*
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    successMessage.classList.remove("d-none");

    contactForm.reset();  // bu sayfada form varsa çalıştır yoksa geç için yazıldı 
});


*/
const languageSwitch = document.getElementById("languageSwitch");

languageSwitch.addEventListener("change", function () {

  if (languageSwitch.checked) {
        document.getElementById("programText").textContent = "Courses";
        document.getElementById("teacherText").textContent = "Instructors";
        document.getElementById("sssText").textContent = "FAQ";
        document.getElementById("signup").textContent = "Sign Up";
        document.getElementById("BaslikProgramlar").textContent = " Our Courses";
        document.getElementById("eğitmenlerBaslik").textContent = "Instructors ";
        document.getElementById("FAQ").textContent = "Answers to Your Questions ";
        document.getElementById("contact").textContent = "Contact Us ";
        document.getElementById("şubeler").textContent = "Our Branches";


    } else {
        document.getElementById("programText").textContent = "Kurslar";
        document.getElementById("teacherText").textContent = "Eğitmenler";
        document.getElementById("sssText").textContent = "SSS";
        document.getElementById("signup").textContent = "Kayıt Ol";
        document.getElementById("BaslikProgramlar").textContent = "Kurslarımız";
        document.getElementById("BaslikProgramlar").textContent = " Eğitmenler";
        document.getElementById("FAQ").textContent = "Aklınızdaki Sorular ";
        document.getElementById("contact").textContent = "İletişim ";
        document.getElementById("şubeler").textContent = "Şubelerimiz ";


    }

});



