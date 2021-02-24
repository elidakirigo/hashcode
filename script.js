const fs = require('fs')
const file_input = ['a_example', 'b_little_bit_of_everything.in', 'c_many_ingredients.in', 'd_many_pizzas', 'e_many_teams']
const data = fs.readFileSync(file_input[0], 'utf8')

const data_set = data.split("\n").splice(1, )
// console.log(data_set);
let new_data = [];
data_set.forEach((element, i) => {

    new_data.push(element.split(" "))

    // console.log(new_data);
});

 console.log(new_data);
const ingredients = {
    array_form: () => {
        console.log(new_data);
        let element;
        for (let index = 0; index < new_data.length; index++) {
           element= new_data[index].splice(1, );
            
        }
        return element
    },
    all_ingredients: []
}
new_data.forEach(element => {

    element.splice(1, ).forEach(el => {
        ingredients.all_ingredients.push(el)
    });
});
ingredients.uniq_ingredients = [...new Set(ingredients.all_ingredients)]


// console.log(new_data,data_set);
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

    // console.log(team.total);
}
calculator()

// parsing and re-arranging ingredients according to the most

const parse_ingredients = () => {

}

// using sort in arrays
var points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a)
// console.log(points);
let i = 0

let figures = []
class develop {
    constructor(elm, index, team, total, amn) {

        this.element = elm;
        this.index = index;

        i++;
        this.array = ingredients.array_form()


        // g = cf[index + i].map(arg => [elm, arg]);
        // rt.push(g);
        for (let j = 1; j < this.array.length; j++) {
            const element = array[j];
            for (let k = 2; k < this.array.length; k++) {
                const element2 = array[k];
                for (let a = 3; a < this.array.length; a++) {
                    const element3 = array[a];
                    let unique;
                    let ident = [this.element, element, element2, element3]
                }
            }
        }
    }
}

ingredients.array_form()
// .forEach(element => {
    //     console.log(ingredients.array_form());
    //     new develop(element)
    // });