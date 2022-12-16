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

p1.forEach(p1=>{

    p1.addEventListener("click",function(ev){
        
        
        ev.preventDefault();
        let id=this.parentElement.getAttribute("data-id");
        let arr=JSON.parse(localStorage.getItem("basket"));
     
        let existProduct=arr.find(product=>product.id==id);
        if(existProduct==undefined){
            arr.push({
                id:id,
                count:1,
                image:this.previousElementSibling.previousElementSibling. previousElementSibling.getAttribute("src"),
                name:this.previousElementSibling.previousElementSibling.innerText
            })
        }
        else{
            existProduct.count++;
        }
        localStorage.setItem("basket",JSON.stringify(arr));
        BasketCount();
        console.log(this.previousElementSibling.previousElementSibling.innerText);
        
    })
})

function BasketCount(){
    let basket=JSON.parse(localStorage.getItem("basket"));
    basketCount.innerText=basket.length;
}
BasketCount()

