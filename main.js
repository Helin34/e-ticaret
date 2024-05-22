const categoryList =document.querySelector('.categories');
const productList = document.querySelector('.products');
const modal =document.querySelector('modal-wrapper');
const openBtn=document.querySelector("#open-btn");
const closeBtn=document.querySelector("#close-btn");


document.addEventListener=('DOMContentLoaded',()=> {
    fetchCategories();
    fetchProduct();

})
function fetchCategories(){
    //veri çekme isteği atma
    fetch('https://api.escuelajs.co/api/v1/categories')

    //gelen veriyi işleme
    .then((res)=>res.json())


    .then((data)=>
        data.slice(0, 4).forEach((category)=>{
            const {image, name }=category;

            console.log(category);
       const categoryDiv= document.createElement('div');

       categoryDiv.classList.add('category');

       categoryDiv.innerHTML =`
       <img src="${image}" />
       <span>${name}</span>
       `;
       // oluşan divi htmldeki listeye atma
categoryList.appendChild(categoryDiv);

    })
)
    .catch();
}

fetchCategories();


function fetchProduct(){
    //apiye veri çekme isteği atma
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((res)=> res.json())
    .then((data)=> 
        data.slice(0, 25).forEach((item)=>{

         const productDiv = document.createElement('div');
         productDiv.classList.add('product');
         //divin içeriğini değiştir

         productDiv.innerHTML=` 
         <img src="${item.image}"/>
         <p>${item.title}</p>

         <p>${item.category.name}</p>
         <div class="product-action">
             <p>${item.price} </p>
             <button onclick="addToBasket(id:'${item.id}'title:'${item.title}',price:'${item.price}',img:'${item.image[0]}',amount:1})">Sepete Ekle</button>
         </div>
         `;

         productList.appendChild(productDiv);

    })
    );
}

// açma ve kapatma
openBtn.addEventListener("click",()=>{
modal.classList.add("active");
});

closeBtn.addEventListener("click",()=>{
modal.classList.remove('active');
});

modal.add("click",(e)=>{
if(e.target.classList.contains("modal-wrapper")){
    modal.classList.remove('active');
}
   
});


function addToBasket(product){
    alert('butona tıklandı');
}

openBtn.addEventListener('click',()=>{
    modal.classList.add('active');

});