export function conversiWaktu(tanggalISO) {
  let tanggal = new Date(tanggalISO);

  let namaHariIndonesia = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  let namaBulanIndonesia = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  let indeksHari = tanggal.getDay();
  let indeksBulan = tanggal.getMonth();

  let namaHari = namaHariIndonesia[indeksHari];
  let namaBulan = namaBulanIndonesia[indeksBulan];

  let tanggalHariIni = tanggal.getDate();
  let tahunIni = tanggal.getFullYear();

  let hasilKonversi =
    namaHari + ", " + tanggalHariIni + " " + namaBulan + " " + tahunIni;

  return hasilKonversi;
}
