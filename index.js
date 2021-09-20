/*
0 Obter um usuário
1 Obter o número de telefone de um usuário a partir de seu Id
2 Obter o endereço do usuário pelo Id
*/

function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: 'Aladin',
      birthDate: new Date()
    })
  }, 1000);
}

function getPhoneNumber(userId) {
  setTimeout(() => {
    return {
      phone: '1199899',
      ddd: 11
    }
  }, 2000);
}

function getAddress(userId) {

}

// Callback
function handleUser(error, user) {
  console.log(`Usuario ${user}`);
}

getUser(handleUser);

// const phone = getPhoneNumber(user.id);

// console.log(`Telefone ${phone}`);