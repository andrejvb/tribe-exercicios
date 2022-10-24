const newEmployees = (callBack) => {
    const employees = {
      id1: callBack('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callBack('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callBack('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const newEmployeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return {fullName, email:`${email}@trybe.com`};
  }

console.log(newEmployees(newEmployeeGenerator));

const checknumber = (myNumber, loteryNumber) => myNumber === loteryNumber;

const sortNumber = (myNumber, callBack) => {
    const number = Math.floor((Math.random() * 5));
    
    return callBack(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!'
}

console.log(sortNumber(4, checknumber));