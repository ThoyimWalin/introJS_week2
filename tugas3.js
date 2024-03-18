// tugas 3 

const printSegitiga = 5
let hasil = ''

for (let i = 1; i <= printSegitiga; i++) { //baris
    for (let j = 1; j <= i; j++) { //kolom
        hasil += j
    }
    hasil += '\n'
}

console.log(hasil)

// end tugas 3