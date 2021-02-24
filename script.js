const fs = require('fs')
const file_input = ['a_example', 'b_little_bit_of_everything', 'c_many_ingredients', 'd_many_pizzas.in', 'e_many_teams.in']
const data = fs.readFileSync(file_input[0], 'utf8')

const data_set = data.split("\n").splice(1, )
// console.log(data_set);
let new_data = [];
data_set.forEach((element, i) => {

    new_data.push(element.split(" "))

    // console.log(new_data);
});
console.log(data_set, new_data);

new_data.forEach(element => {
    
});
