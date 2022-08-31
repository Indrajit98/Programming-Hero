
const loadPhones = async (searchText,dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit)

}

const displayPhones = (phones,dataLimit) => {
    // console.log(phones)
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = '';
    // display 10 phones only 
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 10){
        phones = phones.slice(0,10)
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none')

    }

    // display no phones found 
    const noPhone = document.getElementById('no-found-message')
    phones.length === 0 ? noPhone.classList.remove('d-none') : noPhone.classList.add('d-none')
    
    // // display all phones 
    phones.forEach(phone => {
        const { image, phone_name } = phone;
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="col">
                    <div class="card px-5">
                        <img src="${image}" class="card-img-top h-5" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone_name}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
        
        `
        phonesContainer.appendChild(phoneDiv)
    });
    // stop spinner loader 
toggleSpinner(false)

}
const processSearch = (dataLimit) => {
    toggleSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText , dataLimit)

}
// handle search button click 
document.getElementById('btn-search').addEventListener('click', function(){
    // start loader
    processSearch(10)
})

const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
   if(isLoading){
    loaderSection.classList.remove('d-none') 
   }
   else{
    loaderSection.classList.add('d-none')
   }
}

document.getElementById('btn-show-all').addEventListener('click', function() {
    processSearch()

})

// loadPhones();