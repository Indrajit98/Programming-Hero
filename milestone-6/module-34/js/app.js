
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
                                <button onclick = "loadPhoneDetails('${phone.slug}')"" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Go somewhere</button>
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

//search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function(e){
    if(e.key ==='Enter'){
        processSearch(10)
    }
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

const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data)

}
const displayPhoneDetails = phone =>{
    console.log(phone)

    const modalTitle = document.getElementById('phoneDetailModal');
    modalTitle.innerHTML = ''

    // modalTitle.innerText = `${phone.name}`
    const modalDiv = document.createElement('div');
        modalDiv.classList.add('col');
        modalDiv.innerHTML = `
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
           <div> <h5 class="modal-title d-block" id="phoneDetailModalLabel">${phone.name}</h5></div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div> <img src="${phone.image}" class="card-img-top h-25" alt="..."></div>
          <div class="modal-body">
            <P>${phone.releaseDate}</P>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
        
        `
        modalTitle.appendChild(modalDiv);

}


loadPhones('apple');