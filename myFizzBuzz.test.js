const myFizzBuzz = require('./myFizzBuzz.js');

describe("testa a função myFizzBuzz", () => {
  it('de acordo com o parâmetro recebido, retorna valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })
})