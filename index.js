// Begin state variable declaration
// Define my state variables (aka the variables I will use later)


// Sample data for starter freelancers
const freelancers = [
    {
        name: "Kelly",
        occupation: "Financial Advisor",
        startingPrice: "$60",
    }, 
    {
        name: "Michael",
        occupation: "Contractor",
        startingPrice: "$65",
    }
]
// End State Variables 

// Set up interval 
setInterval(addFreelancer, 5000)

//Calling render function once to render initial state
render()

//RENDER function - update to DOM to reflect the current state of the program
function render() {
    //Point to existing container in HTML
    const freelancersContainer = document.querySelector("#freelancers")
    console.log(freelancersContainer)

    //Creating the elements that we want to add
    const freelancersElements = freelancers.map((freelancer) => {
        const element = document.createElement("li") //Creating <li></li>
        element.classList.add(freelancer.name, freelancer.occupation, freelancer.startingPrice) //Adding classes to li element
        console.log(element)
        return element //for example: <li class="Michael Contractor"></li>
        //it will do this for each element in the map
    })

    //Actually add those created elements to the container
    freelancersContainer.replaceChildren(...freelancersElements)
}

function addFreelancer() {
    const selectedFreelancer = freelancers[Math.floor(Math.random() * freelancers.length)]
    console.log(selectedFreelancer)

    freelancers.push({color: selectedFreelancer, size: "small"})

    render()
}