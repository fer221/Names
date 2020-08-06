
const click = document.getElementById("get");

 click.addEventListener("click", () => {
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })

 });