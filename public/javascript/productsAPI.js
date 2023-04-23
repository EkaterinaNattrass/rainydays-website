const url = 'https://rainydays-api.nattrass.no/wp-json/wc/v3/products' +
    '?consumer_key=ck_01fa09c9121a3587614b38ac931dffc141d995cd' +
    '&consumer_secret=cs_3353d2426c7919a4ac78d662aaac12d1b17caec9' + 
    '&per_page=100';

const mensCategory = '&category=16';
const womensCategory = '&category=17';

async function getProducts(category) {

    let productURL = ''
    if (category === 'men'){
        productURL =  url + mensCategory;
    }
    else if(category==='women'){
        productURL = url + womensCategory;
    }
    else {
        productURL = url;
    }   

    const response = await fetch(productURL);
    const products = await response.json();

    console.log(products)
    return (products);

}   

function createName(category) {

    const pageName = document.querySelector(".page-name");
    const headerName = document.createElement("h1");
    if (category === 'men') {
        headerName.innerText = 'Men'
    }
    else {
        headerName.innerText = 'Women'
    }
    headerName.classList.add("page-name");
    pageName.append(headerName);

    const breadcrumbsContainer = document.querySelector(".breadcrumbs");
    const breadcrumbsName = document.createElement("li");
    breadcrumbsName.classList.add("category-name");

    if (category === 'men') {
        breadcrumbsName.innerText = "Men's jackets"
    }
    else {
        breadcrumbsName.innerText = "Women's jackets"
    }
    breadcrumbsContainer.append(breadcrumbsName)
}   

function createProductHTML(product){
    
    const productsContainer = document.querySelector(".products");
    const productContainer =  document.createElement("div");
    productContainer.classList.add("product");
    productContainer.id = product.id;
    productsContainer.append(productContainer);

    if (!product.featured){
        productContainer.classList.add("non-featured");
    }

    const imgData = product.images[0];
    const img = document.createElement("img");
    img.alt = imgData.alt;
    img.src = imgData.src; 
    productContainer.append(img);

    const name = document.createElement("h2");
    name.innerHTML = `<a href='details.html?id=${product.id}'>${product.name}</a>`;
    productContainer.append(name);

    const materials = document.createElement("span");
    materials.classList.add("material");
    materials.innerText = product.attributes[0].options;
    productContainer.append(materials);
    
    const price = document.createElement("span");
    price.classList.add("price");
    price.innerText = product.regular_price;
    productContainer.append(price);
    
}

const btnFeatured = document.querySelector(".filterFeatured");
btnFeatured.onclick = function showFeatured(){
    let nonFeatured =  document.querySelectorAll(".non-featured");
    for (i=0; i < nonFeatured.length; i++){
        nonFeatured[i].style.display = 'none';
    }
}

const btnAll = document.querySelector(".filterAll");
btnAll.onclick = function showAll(){
    let nonFeatured =  document.querySelectorAll(".non-featured");
    for (i=0; i < nonFeatured.length; i++){
        nonFeatured[i].style.display = null;
    }
}

function createProductsHTML(products) {
    for (let x=0; x<products.length; x++) {
        const product = products[x];
        createProductHTML(product);
    }
}
 
async function main() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('category');
    const products = await getProducts(category);
    createName(category);
    createProductsHTML(products);
    showAll();
}

main()