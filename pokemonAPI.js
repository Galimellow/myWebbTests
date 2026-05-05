fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch data");
        }
        return response.json()
    })
    .then(data => console.log(data.name))
    .catch(error => console.log(error));

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
            theTypes += pokemonId;
            if(i!=data.types.length-1) theTypes += ", ";
        }
        document.getElementById("allData").textContent = theTypes;
    }
    catch(error){
        console.log(error);
        document.getElementById("allData").textContent = error;
    }
}
