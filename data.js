
const click = document.getElementById("get");

 click.addEventListener("click", () => {
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(data =>{
        console.log(data.results['0'])
  
    card.innerHTML= `<div class="card" id="content">
                      <div class="card" style="width: 20rem; ">
                       <img src="${data.results['0'].picture.large}"class="card-img-top">
                        <span class="card-title">${data.results['0'].name.title}</span>
                          <div class="card-body">
                            <p>Hello, my name is ${data.results['0'].name.first} ${data.results['0'].name.last}, I am ${data.results['0'].dob.age} years old and I am from ${data.results['0'].location.city}, ${data.results['0'].location.country}. E-mail ${data.results['0'].email}, and my cell phone is ${data.results['0'].phone}
                              </p>
      
                             </div>
                        </div>
                     </div>`


                })
 });

