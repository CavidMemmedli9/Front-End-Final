$(function() {
    $(".imgDiv").vegas({
        delay:4000,
        slides:[
            {src:"https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background.jpg"},
            {src:"https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-2.jpg"},
            {src:"https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg"}
         ],
        overlay:"overlays/01.png",
        animation:"kenburnsUp"
    })
});


let p1=document.querySelectorAll(".p1");
let basketCount=document.getElementById("basketCount");

localStorage.setItem("basket",JSON.stringify([]));
let cart = document.querySelector(".cart1");
let price = 0;
p1.forEach(el=>{
    el.addEventListener("click",function(ev){
        let id=this.parentElement.getAttribute("data-id");
        let arr=JSON.parse(localStorage.getItem("basket"));
        
        
     
        let existProduct=arr.find(product=>product.id==id);
        if(existProduct==undefined){
            arr.push({
                id:id,
                count:1,
                image:this.previousElementSibling.previousElementSibling. previousElementSibling.getAttribute("src"),
                name:this.previousElementSibling.previousElementSibling.innerText,
                price: parseInt(this.previousElementSibling.innerText)
                
            })
        }
        else{
            existProduct.count++;

        }
        localStorage.setItem("basket",JSON.stringify(arr));
        BasketCount();
        for (const item of arr) {
            if (item.id == id) {
                price += item.price;
                
            }
        }
        cart.innerHTML = price;
        localStorage.setItem("TotalPrice", JSON.stringify(price));
    })
})

function BasketCount(){
    let basket=JSON.parse(localStorage.getItem("basket"));
    basketCount.innerText=basket.length;
}
BasketCount()

