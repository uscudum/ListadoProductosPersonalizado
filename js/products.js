let categoriesArray = [];


function showCategoriesList(array){

let htmlContentToAppend = "";

for(let i = 0; i < array.length; i++){
let category = array[i];

htmlContentToAppend += `
            <div class= "list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src=` + category.image + ` alt="product image" class="img-thumbnail">
                    </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                            <h4>`+ category.name +`</h4>
                            <p> `+ category.description +`</p>
                        </div>
                            <small class="text-muted">` + category.soldCount + ` artículos </small>
                        </div>
                    </div>
                </div>
            </div>`

document.getElementById("info").innerHTML = htmlContentToAppend;
}
}

document.addEventListener("DOMContentLoaded", function(e){
    fetch( PRODUCTS_URL + localStorage.getItem('catID') + EXT_TYPE )
    .then(res => res.json())
    .then(data =>{
    categoriesArray = data;
    document.getElementById('cat-name').innerHTML = categoriesArray.catName;
    showCategoriesList(categoriesArray.products);
    })
    })