let items = ['batata', 'x-tudo', 'refrigerante', 'Bic Mac', 'Nuggets', 'Suco'];
let prices = [12, 33, 5, 9, 15];


// for (let index = 0; index < items.length; index += 1){
//     if (prices[index] == undefined) {console.log(itens[index] + 'Estoque Zerado');
        
//     } else 
//     console.log(items[index] + " = $" + prices[index]);
// }

// DEPOIS TENTAR CORRIGIR

let money = 20;
let list = [];

for (let index = 0; index < prices.length; index =+ 1) {
    if (prices[index] <= money){
        list.push(items[index]);
    }
    
}