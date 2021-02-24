const fs = require('fs')
const file_input = ['a_example', 'b_little_bit_of_everything', 'c_many_ingredients', 'd_many_pizzas', 'e_many_teams']
const data = fs.readFileSync(file_input[0], 'utf8')

const data_set = data.split("\n").splice(1, )
// console.log(data_set);
let new_data = [];
data_set.forEach((element, i) => {

    new_data.push(element.split(" "))

    // console.log(new_data);
});
// console.log(data_set, new_data);
const ingredients = {
    all_ingredients:[]
}
new_data.forEach(element => {
    
    element.splice(1,).forEach(el => {
        ingredients.all_ingredients.push(el)
    });
});
ingredients.uniq_ingredients =[...new Set(ingredients.all_ingredients)]


