
const click = document.getElementById("get");

 click.addEventListener("click", () => {
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(data =>{
        console.log(data.results['0'])
  
    card.innerHTML= `<div class="card">
                      
    <div class="image" style="width: 18rem;">
                      <img src="${data.results['0'].picture.large}" class="rounded-circle"alt="Responsive image">
                      </div>
                      
                      <div class="card-body">
                      <h3>${data.results['0'].name.first}</h3>
                      <p>Genero: ${data.results['0'].gender}</p>
                      <p>Email: ${data.results['0'].email}</p>
                      <p>Edad: ${data.results['0'].dob.age}</p>
                      <p>Pais: ${data.results['0'].location.country}</p>
                      <p>Ciudad: ${data.results['0'].location.city}</p>
                     
                      </div>
                    </div>`

                })
 });

