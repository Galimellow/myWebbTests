for(let i=1; i<=3; i++)
{
    const slideIndex = document.getElementById("pageIndex");
    if(slideIndex.textContent == `${i}`) {
        const currentSlide = document.getElementById(`slide${i}`);
        currentSlide.style.backgroundColor = "hsl(0, 0%, 30%)";
    }
}

function signUp(){
    const userName = document.getElementById("usernameOfUser").value;
    const password = document.getElementById("passwordOfUser").value;

    if(password == "") return;
    
    if(!localStorage.getItem("userCount")) localStorage.setItem("userCount", 1);
    else {
        let userCount = localStorage.getItem("userCount");
        userCount++;
        localStorage.removeItem("userCount");
        localStorage.setItem("userCount", userCount);
    }
    const userCount = localStorage.getItem("userCount");
    console.log(userCount);
    
    localStorage.setItem(`username${userCount}`, userName);
    localStorage.setItem(`password${userCount}`, password);

    displaySavedData();
}
function logOut(){
    
}
function displaySavedData(){
    const userCount = localStorage.getItem("userCount");
    const savedData = localStorage.getItem(`username${userCount}`);
    const savedDataElement = document.getElementById("title");

    savedDataElement.textContent = "Welcome ";

    if(savedData){
        savedDataElement.textContent += savedData;
    }
    else{
        savedDataElement.textContent += "User";
    }
}
window.onload = displaySavedData();

function resetUsers(){
    const userCount = localStorage.getItem("userCount");
    console.log(userCount);
    for(let i=1; i<=userCount; i++)
    {
        localStorage.removeItem(`username${i}`);
        localStorage.removeItem(`password${i}`);
    }
    localStorage.removeItem(`userCount`);
    displaySavedData();
}
