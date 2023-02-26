const loadPhones = (searchText , datalimit) => {
    const URL2 = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(URL2)
        .then(res => res.json())
        .then(data => displayPhones(data.data , datalimit))
}
const displayPhones = (phones , datalimit) => {
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = '';
    
    const showAll = document.getElementById('show-all-text');

    if( datalimit && phones.length > 10){
        phones = phones.slice(0, 10)
        showAll.classList.remove('d-none')
    }
    else{
        showAll.classList.add('d-none')
    }


    const wearningText = document.getElementById('worning')

    if (phones.length == 0) {
        wearningText.classList.remove('d-none')
    }
    else {
        wearningText.classList.add('d-none')
    }
    for (const phone of phones) {
        const {  phone_name, image,slug } = phone;
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
                <div onclick=showDetails('${slug}') id="btn-show-all" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneModal">Show Details </div>
          </div>
        `;
        cardContainer.appendChild(ceratDiv)
    }
    // stop loading 
    loading(false)
}
const processSearch =(datalimit) =>{
    loading(true)
    const searchText = document.getElementById('search-field').value;
    loadPhones(searchText,datalimit)
}

document.getElementById('search-phone').addEventListener('click', function () {
    // start loading 
    processSearch(10)
})
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10)
    }
});

const loading = (isloading) => {
    const loaderSection = document.getElementById('loader')
    if (isloading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none')
    }
}

document.getElementById('btn-show-all').addEventListener('click' , function(){
    processSearch();
})

const showDetails =(id)=>{
    fetch(` https://openapi.programming-hero.com/api/phone/${id}`)
    .then(res => res.json())
    .then(data => showModalData(data.data))
}

const showModalData =(data) => {
    console.log(data)
    const phnModalTItle = document.getElementById('phnModalTItle');
    phnModalTItle.innerText = data.name;
    const phnDetails = document.getElementById('phn-details');
    phnDetails.innerHTML=`
    <img src="${data.image}" alt="">
    <p>Release Date : ${data.releaseDate ? data.releaseDate : 'No resutl' }</p>
    `
}
// loadPhones();

// git add .
// git commit -m"show data in modal"
// git push