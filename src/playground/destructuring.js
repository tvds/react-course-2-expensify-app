/* const person = {
    name: 'Andrew',
    age: 23,
    location: {
        city: 'Oudenaarde',
        temp: 15
    }
};

const { name: firstname = 'Anonymous', age } = person;
/* const name = person.name;
const age = person.age; */
/* 
console.log(`${firstname} is ${age}`);

const { city, temp: temperature} = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`)
} */ 

/* const book = {
    title:' ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher
console.log(publisherName); */

const adress = ['1125648 S Junior street', 'Philadelphia', 'Pennsylvania', '1912354'];

const [street, city, state, zip] = address;
console.log();