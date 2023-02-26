const loadPhones = (searchText) => {
        const URL2 = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    // const URL = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(URL2)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
}
const displayPhones = phones => {
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = '';
    phones = phones.slice(0 , 20)
    const wearningText = document.getElementById('worning')

    if(phones.length == 0){
        wearningText.classList.remove('d-none')
    }
    else{
        wearningText.classList.add('d-none')
    }
    for (const phone of phones) {
        const {brand ,phone_name,image,slug} = phone;
        const ceratDiv = document.createElement('div')
        ceratDiv.classList.add('col')
        ceratDiv.innerHTML = `
        <div class="card p-4">
                <img src="${image}" class="card-img-top" alt="...">
                 <div class="card-body">
                    <h5 class="card-title">${phone_name}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</p>
                </div>
          </div>
        `;
        cardContainer.appendChild(ceratDiv)
    }
    loading(false)
}

document.getElementById('search-phone').addEventListener('click' , function(){
    loading(true)
    const searchText = document.getElementById('search-field').value;
    loadPhones(searchText)
})

const loading =(isloading) =>{
    const loaderSection = document.getElementById('loader')
    if(isloading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
}

loadPhones('phone');

// git add .
// git commit -m"Add spinner "
// git push