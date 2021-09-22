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

function getPhoneNumber(userId, callback) {
  setTimeout(() => {
    return callback(null , {
      phone: '1199899',
      ddd: 11
    })
  }, 2000);
}

function getAddress(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000)
}

// Callback
/* function handleUser(error, user) {
  console.log(`Usuario ${user}`);
}
 */
getUser(handleUser = (userError, user) => {
  // null || "" || 0 === false
  if(userError){
    throw userError;
  }
  getPhoneNumber(user.id, handlePhone = (phoneError, phone) => {
    if (phoneError) {
      console.error(phoneError);
    }
    getAddress(user.id, handleAddress = (addressError, address) => {
      if (addressError) {
        console.error(addressError);
      }
      console.log(`Nome: ${user.name}\nPhone Number: (${phone.ddd})${phone.phone}\nAddress: Rua ${address.rua} nº${address.numero}`);
    })
  });
});