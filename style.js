let jam = document.getElementById("jam");
let menit = document.getElementById("menit");
let detik = document.getElementById("detik");

setInterval(() => {
  let waktuSekarang = new Date();
  jam.innerHTML =
    (waktuSekarang.getHours() < 10 ? "0" : "") + waktuSekarang.getHours(); //mengambil jam
  menit.innerHTML =
    (waktuSekarang.getMinutes() < 10 ? "0" : "") + waktuSekarang.getMinutes(); //mengambil menit
  detik.innerHTML =
    (waktuSekarang.getSeconds() < 10 ? "0" : "") + waktuSekarang.getSeconds(); //mengambil detik
}, 1000); //akan terefresh tiap satu detik
