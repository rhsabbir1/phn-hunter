const loadPhones = () => {
    const URL = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    fetch(URL)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
}
const displayPhones = phones => {
    const cardContainer = document.getElementById('card-container')

    for (const phone of phones) {
        const {brand ,phone_name,image,slug} = phone;
        console.log(phone)
        const ceratDiv = document.createElement('div')
        ceratDiv.classList.add('col')
        ceratDiv.innerHTML = `
        <div class="card">
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
}

loadPhones();

git add .