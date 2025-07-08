document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.remove("loading");
    document.querySelector(".loading-screen").classList.add("hidden");
    document.querySelector(".main-content").classList.remove("hidden");
  }, 2500); // Tunda 2.5 detik
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Nomor berhasil disalin!");
  });
}
