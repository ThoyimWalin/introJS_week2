// tugas 2

// Inisiasi variabel
let mtk = 80, bIndonesia = 100, bInggris = 10, ipa
let grade = ''

if (mtk !== undefined && bInggris !== undefined && bIndonesia !== undefined && ipa !== undefined) {
    if (mtk < 0 || mtk > 100 ||
        bIndonesia < 0 || bIndonesia > 100 ||
        bInggris < 0 || bInggris > 100 ||
        ipa < 0 || ipa > 100) {
        console.log(`Daftar Nilai : 
            ==========================
            - Matematika      : ${mtk}
            - B. Indonesia    : ${bIndonesia}
            - B. Inggris      : ${bInggris}
            - IPA             : ${ipa}
            ==========================
            Nilai harus dalam range 1-100
            `)
    } else {
        const rataRata = (mtk + bIndonesia + bInggris + ipa) / 4

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
    }
} else {
    console.log(`Daftar Nilai : 
    ==========================
    - Matematika      : ${mtk}
    - B. Indonesia    : ${bIndonesia}
    - B. Inggris      : ${bInggris}
    - IPA             : ${ipa}
    ==========================
    Nilai tidak boleh kosong
    `)
}


// end tugas 2