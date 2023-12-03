// Begin state variable declaration
// Define my state variables (aka the variables I will use later)
const randomName = ["Alice", "Bob", "Carol"]
const randomOccupation = ["Writer", "Teacher", "Programmer"]
const randomstartingPrice = ["30", "50", '70']

// Sample data for starter freelancers
const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        startingPrice: "30",
    }, 
    {
        name: "Bob",
        occupation: "Teacher",
        startingPrice: "50",
    },
    {
        name: "Carol",
        occupation: "Programmer",
        startingPrice: "70",
    }
]
// End State Variables 

// Point to existing container in HTMl
const freelancersContainer = document.querySelector("#freelancers")
console.log(freelancersContainer)

const priceContainer = document.querySelector("#price")
console.log(priceContainer)

// Set up interval 
setInterval(addFreelancer, 5000)

//Calling render function once to render initial state
render()

//RENDER function - update to DOM to reflect the current state of the program
function render() {
    //Creating the elements that we want to add
    const freelancersElements = freelancers.map((freelancer) => {
        const element = document.createElement("li") //Creating <li></li>
        element.textContent = `${freelancer.name}, ${freelancer.occupation}, ${freelancer.startingPrice}`
        return element //
    })

    //Actually add those created elements to the container
    freelancersContainer.replaceChildren(...freelancersElements)
}

function addFreelancer() {
    const name = randomName[Math.floor(Math.random() * randomName.length)]
    
    const occupation = randomOccupation[Math.floor(Math.random() * randomOccupation.length)]
    
    const startingPrice = randomstartingPrice[Math.floor(Math.random() * randomstartingPrice.length)]
    

    freelancers.push({name, occupation, startingPrice})

    render()
}

function calcAveragePrice() {
    let totalPrice = 0
    freelancers.forEach((freelancers) => {
       totalPrice += freelancers.startingPrice
    })
    let averagePrice = totalPrice/freelancers.length
    return averagePrice.toFixed(2)
}

console.log(calcAveragePrice());

render();


// function averagePrice() {
//     const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
//     const averagePrice = totalPrice / freelancers.length;

//     return averagePrice.toFixed(2)
// }

// function getSum(freelancers) {
//     for(var i = 0; i < freelancers.startingPrice.length; i++){
//       sum = sum + freelancers.startingPrice[i]
//     }
//     return sum
//   }

// function getMean(freelancers) {
//     return getSum/(getLength(freelancers.startingPrice))
//   }
// console.log(getMean)



// li.innerHTML = `
//       <h2>${freelancers.name}</h2>
//       <p>${freelancers.occupation}</p>
//       <p>${freelancers.startingPrice}</p>
//     `;

//INPUT THESE FUNCTIONS ABOVE?
// function getSum(freelancers) {
//     for(var i = 0; i < freelancers.startingPrice.length; i++){
//       sum = sum + freelancers.startingPrice[i]
//     }
//     return sum
//   }

// function getMean(freelancers) {
//     return sum/(getLength(freelancers.startingPrice))
//   }