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

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (right, student)=>{
    if(right === student){return 1};
    if(student === 'N.A'){return 0};
    return -0.5;     
};

const countPoints = (rightAnswers, studentAnswers, callBack) =>{
    let counter = 0;
    for (let index = 0; index < rightAnswers.length; index+=1) {
        const callBackReturn = callBack(rightAnswers[index], studentAnswers[index])
        counter += callBackReturn        
    }
    return `Resultado Final: ${counter} pontos`
}

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));