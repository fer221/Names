
const click = document.getElementById("get");

 click.addEventListener("click", () => {
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(data =>{
        console.log(data.results['0'])
  
    card.innerHTML= `<div class="card" id="content">
    <div class="row">
    <div class="col s12 m2">
      <div class="card">
        <div class="card-image">
          <img src="${data.results['0'].picture.large}">
          <span class="card-title">${data.results['0'].name.title}</span>
        </div>
        <div class="card-content">
          <p>Hello, my name is ${data.results['0'].name.first} ${data.results['0'].name.last}, I am ${data.results['0'].dob.age} years old and I am from ${data.results['0'].location.city}, ${data.results['0'].location.country}. My contact details are, e-mail ${data.results['0'].email}, and my cell phone is ${data.results['0'].phone}
          </p>
        </div>
        
      </div>
    </div>
  </div>
</div>`

                })
 });

