$(document).ready(function () {
  // Efek klik tombol Pesan
  $(".order-btn").click(function () {
    alert("Terima kasih! Donat Anda sudah masuk ke keranjang 🍩");
  });

  // Smooth scroll untuk navbar
  $("a.nav-link").click(function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      let hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70
        },
        800
      );
    }
  });
});
