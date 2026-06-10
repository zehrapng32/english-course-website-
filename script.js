

/*dikkat !!! : 
Bir JavaScript dosyası (script.js) birden fazla HTML sayfasında kullanılıyorsa, dosya içindeki kodlar her sayfada çalıştırılır. 
Ancak bazı elementler her sayfada bulunmayabilir.bu yuzden if ile kontrol yapmalıyız hata almamak için  */

/* ingilizce toggle fonku  */

const languageSwitch = document.getElementById("languageSwitch");

if (languageSwitch) {
  languageSwitch.addEventListener("change", function () {
    const lang = languageSwitch.checked ? "en" : "tr";

    document.querySelectorAll("[data-tr]").forEach(function (item) {
      item.textContent = item.getAttribute("data-" + lang);
    });
  });
}

function openImage(imageName) {
  document.getElementById("overlayImg").src = imageName;
  document.getElementById("imageOverlay").style.display = "flex";
}

function closeImage() {
  document.getElementById("imageOverlay").style.display = "none";
}



//click yaparsak butona erişiriz enter a basınca çalışmayabilir 
//ama submit yaparsak forma erişiriz form tıklama veya enter hangi yolla 
// gönderilirse gönderilsin çalışır .basit buton işlemlerinde click form göndermede submit kullan 



/* form gonderidli mesajı */
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (contactForm && successMessage) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    successMessage.classList.remove("d-none");

    contactForm.reset();
  });
}