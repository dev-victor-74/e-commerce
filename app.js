const wrapper = document.querySelector(".sliderwrapper");
const menuitem = document.querySelectorAll(".menuitem");

const products= [
    {
        id: 1,
        title: "Air Force",
        price: 160,
        colors:[
            {code: "black",
        
             img: "./assets/sneakerl.jpg",},
        
    
            {code: "purple",
        
             img: "./assets/sneakerl.jpg",},
        ],
    },
        {
            id: 2,
            title: "Jordan",
            price: 180,
            colors:[
            {code: "brown",
        
             img: "./assets/sneakerll.jpg",},
        
    
            {code: "yellow",
        
             img: "./assets/sneakerll.jpg",},
        ],
},{id: 3,
    title: "Blazer",
    price: 190,
    colors:[
        {code: "red",
    
         img: "./assets/sneaker.jpg",},
    

        {code: "black",
    
         img: "./assets/sneaker.jpg",},
    ],
},  {
    id: 4,
    title: "Crater",
    price: 109,
    colors:[
    {code: "orange",

     img: "./assets/sneakerleather.jpg",},


    {code: "green",

     img: "./assets/sneakerleather.jpg",},
],
},
{
    id: 5,
    title: "Hippie",
    price: 99,
    colors:[
    {code: "blue",

     img: "./assets/sneakerwomen.jpg",},


    {code: "gray",

     img: "./assets/sneakerll.jpg",},
],
}

]

const currProductimg = document.querySelector(".productimg");
const currProductTitle = document.querySelector(".producttitle");
const currProductPrice = document.querySelector(".productprice");
const currProductColors = document.querySelectorAll(".color");
const currProductSize = document.querySelectorAll(".size");


const productBtn = document.querySelector(".productbtn");
const modal = document.querySelector(".payment");
const closebtn = document.querySelector(".close");


 let choosenProduct = products[0]
menuitem.forEach((item, index) =>{

item.addEventListener("click", ()=>{

    menuitem.forEach((item)=>{
         item.style.backgroundColor ="black";
         item.style.padding = "5px"
         item.style.borderRadius = "4px"
    })
    
    wrapper.style.transform = `translateX(${-100*index}vw)`;
    choosenProduct = products[index]
    currProductTitle.textContent = choosenProduct.title;
    currProductPrice.textContent = `${choosenProduct.price}`;
    currProductimg.src = choosenProduct.colors[0].img;


    //changing color codes dynamically
 currProductColors.forEach((color,index)=>{
    color.style.backgroundColor = choosenProduct.colors[index].code;
 })
 item.style.backgroundColor ="blue";
})
});
currProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currProductimg.src = choosenProduct.colors[index].img;
    });
});



currProductSize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currProductSize.forEach((size) =>{
        size.style.backgroundColor = "white"
        size.style.color = "black"
    
    });
    size.style.backgroundColor = "black"
    size.style.color = "white"
});
});
productBtn.addEventListener("click", ()=>{
    // console.log("you clicked ")
     modal.style.display ="flex"
    
 });

 closebtn.addEventListener("click",()=>{
    modal.style.display ="none"
});
