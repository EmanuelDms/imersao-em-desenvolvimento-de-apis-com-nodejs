/*
0 Obter um usuário
1 Obter o número de telefone de um usuário a partir de seu Id
2 Obter o endereço do usuário pelo Id
*/

//Import Node.js internal module
import util from "util";
// converts a function to a Promise
const getAddressAsync = util.promisify(getAddress);

function getUser() {
  /* Failed => reject 
  * Success => resolve
  */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: 'Aladin',
        birthDate: new Date()
      })
    }, 1000);
  });
}

function getPhoneNumber(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        phone: '1199899',
        ddd: 11
      });
    }, 2000);
  });
}

function getAddress(userId, callback) {
    setTimeout(() => {
      return callback(null, {
        street: 'dos bobos',
        number: 0
      });
    }, 2000);
}

const userPromise = getUser();
/* 
* Success => .then()
* Error => .catch()
* Pipe: user -> phone -> user + phone
*/

userPromise
  .then((user) => {
    return getPhoneNumber(user.id)
    .then((phone) => {
      return {
          ...user,
          phone
      }
    })
  })
  .then((user) => {
      const address = getAddressAsync(user.id)
      return address.then((address) => {
        return {
          ...user,
          address
        }
      })
  })
  .then((user) => {
    console.log(`Nome: ${user.name}\nData de Aniversário: ${user.birthDate}\nTelefone: (${user.phone.ddd})${user.phone.phone}\nEndereço: Rua ${user.address.street} nº${user.address.number}`);
  })
  .catch((error) => {
    console.error("Error ->", error);
  });