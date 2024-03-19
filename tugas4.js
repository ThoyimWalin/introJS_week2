// tugas 4

let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

// a
// clone object data ke object dataBaru dan memodifikasi value serta menambah key+value baru menggunakan spread operator
const dataBaru = {
    ...data,
    address: {
        ...data.address,
        name: 'Thoyim Walin',
        email: 'thoyimwalin25@gmail.com',
        hobby: ['traveling', 'membaca', "bermusik"]
    }

}
// menampilkan data name, email, hobby dari object dataBaru
console.log(dataBaru)
console.log(`Tugas 4 (a)
name : ${dataBaru.name}
email : ${dataBaru.email}
hobby : ${dataBaru.hobby}
`)


// b
// destructing data street dan city dari object data baru
const { street, city } = data.address

console.log(`Tugas 4 (b)
street : ${street}
city : ${city}`)

// end tugas 4