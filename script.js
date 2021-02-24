const fs = require('fs')
const file_input = ['a_example', 'b_little_bit_of_everything.in', 'c_many_ingredients.in', 'd_many_pizzas', 'e_many_teams']
const data = fs.readFileSync(file_input[2], 'utf8')

const data_set = data.split("\n").splice(1, )
// console.log(data_set);
let new_data = [];
data_set.forEach((element, i) => {

    new_data.push(element.split(" "))

    // console.log(new_data);
});
// console.log(data_set, new_data);
const ingredients = {
    all_ingredients: []
}
new_data.forEach(element => {

    element.splice(1, ).forEach(el => {
        ingredients.all_ingredients.push(el)
    });
});
ingredients.uniq_ingredients = [...new Set(ingredients.all_ingredients)]


console.log(ingredients);
let t = data.split("\n")[0]
let dep = {
    one: t[1],
    two: t[2],
    three: t[3]
}
const calculator = () => {
    const team = {
        two: 1 * 2,
        three: 2 * 3,
        four: 1 * 4,
        total: 12,
        pizzas: 5

    }

    console.log(team.total);
}
calculator()

// parsing and re-arranging ingredients according to the most

const parse_ingredients = () => {

}