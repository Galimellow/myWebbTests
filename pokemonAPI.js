/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch data");
        }
        return response.json()
    })
    .then(data => console.log(data.name))
    .catch(error => console.log(error));*/

async function fetchData(){

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
            throw new Error("Could not fetch data");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonImg");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        imgElement.style.width = "25%";

        let theTypes = "";
        for(let i=0; i<data.types.length; i++){
            let pokemonId = JSON.stringify(data.types[i].type.name).replaceAll('"', '');
            theTypes += pokemonId.trim().charAt(0).toUpperCase() + pokemonId.trim().slice(1).toLowerCase();;
            if(i!=data.types.length-1) theTypes += ", ";
        }
        document.getElementById("allData").textContent = theTypes;
    }
    catch(error){
        console.log(error);
        document.getElementById("allData").textContent = error;
    }
}


const pokemonListButton = document.getElementById("pokemonListButton");
const listOfPokemon = document.getElementById("listOfPokemon");

pokemonListButton.addEventListener("click", event => {
    if(listOfPokemon.style.display === "none") 
        listOfPokemon.style.display = "block";
    else listOfPokemon.style.display = "none";
})

let namesArray = [];
async function fetchNames(){
    try{
        const orderedNameList = document.createElement("ol");
        document.getElementById("listOfPokemon").append(orderedNameList);
        orderedNameList.id = "listOfPokemonDisplay";
        orderedNameList.style.height = "200px";
        for(let i=1; i<=1025; i++)
        {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            if(!response.ok){
                throw new Error("Could not fetch data");
            }
            const data = await response.json();
            const name = data.name.trim().charAt(0).toUpperCase() + data.name.trim().slice(1).toLowerCase();
            namesArray.push(name);

            const newListItem = document.createElement("li");
            newListItem.textContent = name;
            document.getElementById("listOfPokemonDisplay").append(newListItem);
        }
        //console.log(namesArray);
    }
    catch(error){
        console.log(error);
        document.getElementById("allData").textContent = error;
    }
}
fetchNames();


const pokemonThatStartShow = document.getElementById("pokemonThatStartShow");
const pokemonThatStartButton = document.getElementById("pokemonThatStartButton");

pokemonThatStartButton.addEventListener("click", event => {
    if(pokemonThatStartShow.style.display === "none") 
    {
        pokemonThatStartShow.style.display = "block";
        const orderedNameList = document.createElement("ol");
        document.getElementById("pokemonThatStartShow").append(orderedNameList);
        orderedNameList.id = "listOfPokemonStart";
        orderedNameList.style.height = "200px";
        orderedNameList.style.overflow = "scroll";
        orderedNameList.style.overflowX = "hidden";
        
        const traceName = document.getElementById("pokemonName").textContent;
        console.log(`Searching for ${traceName}`);
        
        for(let i=1; i<=1025; i++)
        {
            console.log(traceName);
            const newListItem = document.createElement("li");
            let currName;

            for(let j=0; j<traceName.length; j++) currName += namesArray[i].charAt(j);
            if(i<=10) console.log(`Current indexed pokemon ${currName}`);

            if(currName === traceName) {
                newListItem.textContent = namesArray[i];
                document.getElementById("listOfPokemonStart").append(newListItem);
            }
        }
    }
    else{
        pokemonThatStartShow.style.display = "none";
        document.getElementById("listOfPokemonStart").remove();
    }
})
