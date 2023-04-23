const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = 'https://rainydays-api.nattrass.no/wp-json/wc/v3/products/' + id  +
'?consumer_key=ck_01fa09c9121a3587614b38ac931dffc141d995cd&consumer_secret=cs_3353d2426c7919a4ac78d662aaac12d1b17caec9';


async function getDetails() {
    
    const response = await fetch(url);
    const details = await response.json();
    return details;

}

function createName(category) {

    console.log(category)
    
    const breadcrumbsContainer = document.querySelector(".breadcrumbs-name");
    if (category === 'men') {
        breadcrumbsContainer.innerHTML = `<a href="products.html?category=men" aria-label="link to the Men's jackets">Men's jackets / </a>`
    }
    else {
        breadcrumbsContainer.innerHTML = `<a href="products.html?category=women" aria-label="link to the Women's jackets">Women's jackets /     </a>`
    }
        
}   


function createProductHTML(details) {

    document.title = details.slug;

    const nameJacket = document.createElement("li");
    nameJacket.innerText = details.name;
    const nameJacketContainer = document.querySelector(".breadcrumbs");
    nameJacketContainer.append(nameJacket);

    const imageContainer = document.querySelector(".first_container");

    function createImg() {
        const imgDetails= details.images;
        for (let i=0; i<imgDetails.length; i++) {
            const imgData = details.images[i];
            const img = document.createElement("img");
            img.classList.add("jacketImg")
            img.alt = imgData.alt;
            img.src = imgData.src; 
            imageContainer.append(img);
       }
    }

    createImg(details);
    
    const descriptionContainer = document.querySelector(".second_container");

    const name = document.createElement("h2");
    name.innerText = details.name;
    descriptionContainer.prepend(name);

    const material = document.createElement("p");
    const materialContainer = document.querySelector(".materials");
    material.innerText = details.attributes[0].options;
    materialContainer.append(material);

    const activity = document.createElement("p");
    const activityContainer = document.querySelector(".activities");
    activity.innerText = details.attributes[1].options;
    activityContainer.append(activity);

    const season = document.createElement("p");
    const seasonContainer = document.querySelector(".seasons");
    season.innerText = details.attributes[2].options;
    seasonContainer.append(season);

    const price = document.createElement("span");
    const priceContainer = document.querySelector(".price");
    price.innerText = details.price;
    priceContainer.append(price);

    const productDetails = document.createElement("li");
    const detailsContainer  = document.querySelector(".product_details");
    productDetails.innerText = details.attributes[3].options;
    detailsContainer.append(productDetails);
}


async function main() {

    const details = await getDetails();
    createName(details.categories[2].name);
    createProductHTML(details);
   
}

const urlOptions = 'https://rainydays-api.nattrass.no/wp-json/wc/v3/products' +
'?consumer_key=ck_01fa09c9121a3587614b38ac931dffc141d995cd' +
'&consumer_secret=cs_3353d2426c7919a4ac78d662aaac12d1b17caec9';

async function getOptions() {
 
    const response = await fetch(urlOptions);
    const results = await response.json();

    return(results);

    }

  async function youMayLike() {

        results = await getOptions();
    
        for (let i=0; i<=5; i++) {
            const options = results[i];
            const optionsContainer = document.querySelector(".options");
            const imgData = options.images[0].src;
    
            optionsContainer.innerHTML += `
            <div class="slide"><a href='details.html?id=${options.id}'><img src='${imgData}'></a></div>`
        }  
    }  

youMayLike();

getOptions()



main()