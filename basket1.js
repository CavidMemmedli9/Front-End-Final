function BasketCount() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basketCount.innerText = basket.length;
    document.querySelector(".cart1").innerHTML = JSON.parse(localStorage.getItem("TotalPrice"));
}
BasketCount()


if (JSON.parse(localStorage.getItem("basket")) != null) {
    let arr = JSON.parse(localStorage.getItem("basket"));

    arr.forEach(element => {
        let tr = document.createElement("tr")
        let td = `
            <td>
            <img  width="70px"  src="${element.image}" alt="">
            </td>
            <td>
            ${element.name}
            </td>
           
         
        `
         
        


        let tdx = document.createElement("td");
        let img = document.createElement("i")
        img.setAttribute("class", "fa-solid fa-xmark")
        tdx.append(img)

        let elem = document.createElement("td");
        let img1 = document.createElement("i");
        img1.setAttribute("class", "fa-solid fa-plus");
        let img2 = document.createElement("i");
        img2.setAttribute("class", "fa-solid fa-minus");
        elem.append(img1, img2);
        let count = document.createElement("td");
        count.innerText = element.count;

        let tdPrice=document.createElement("td");
        tdPrice=element.price;
        


        tr.innerHTML += td
        tr.append(count, elem, tdx,tdPrice)
        
        tbody.append(tr);

        img.onclick = function () {
            tr.remove();
            let arr;
            arr = JSON.parse(localStorage.getItem("basket")).filter(x => x.id != element.id);
            localStorage.setItem("basket", JSON.stringify(arr))
        }

        img1.onclick = function () {
            let arr = JSON.parse(localStorage.getItem("basket"));
            let er = arr.find(x => x.id == element.id)
            er.count++;

            localStorage.setItem("basket", JSON.stringify(arr))
            count.innerText = er.count;
        }

        img2.onclick = function () {
            let arr = JSON.parse(localStorage.getItem("basket"));
            let er = arr.find(x => x.id == element.id)
            er.count--;
            if (er.count >= 0) {
                localStorage.setItem("basket", JSON.stringify(arr));
               
                count.innerText = er.count;
               

            }
            if (er.count==0) {
                img.click();
                BasketCount()
            }

        }


    });

    


}