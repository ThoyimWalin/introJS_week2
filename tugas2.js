// tugas 2

// Inisiasi variabel
let mtk = 100, bIndonesia = 90, bInggris = 89, ipa = 69
const rataRata = (mtk + bIndonesia + bInggris + ipa) / 4
let grade = ''

// cek grade berdasarkan nilai rata-rata
if (rataRata >= 90 && rataRata <= 100) {
    grade = 'A'
} else if (rataRata >= 80 && rataRata <= 89) {
    grade = 'B'
} else if (rataRata >= 70 && rataRata <= 79) {
    grade = 'C'
} else if (rataRata >= 60 && rataRata <= 69) {
    grade = 'D'
} else if (rataRata >= 0 && rataRata <= 59) {
    grade = 'E'
} else {
    grade = 'Nilai tidak valid'
}

// cetak nilai 
console.log(`Daftar Nilai : 
==========================
- Matematika      : ${mtk}
- B. Indonesia    : ${bIndonesia}
- B. Inggris      : ${bInggris}
- IPA             : ${ipa}
==========================
Rata-rata nilai   : ${rataRata}
Grade nilai       : ${grade}
`)

// end tugas 2