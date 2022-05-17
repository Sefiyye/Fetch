
fetch("https://jsonplaceholder.typicode.com/photos")
// const imageUrl="https://via.placeholder.com/600/92c952"
.then((resp) => resp.json()
).then(datas => {
    let container = document.querySelector(".container");
    let row = document.createElement("div");
    row.className = "row justify-content-between";
    datas.forEach((data) => {
        let card = document.createElement("div");
        let card_img_top= document.createElement("img");
        let card_body= document.createElement("div");
        let card_title= document.createElement("h5");
        let card_text=document.createElement("p");
        let btn_btn_primary=document.createElement("a");

        card.className="card";
        card.style.width="18rem";
        card_img_top.className = "card-img-top";
        // card_img_top.width = "600px";
        card_body.className = "card-body";
        card_title.className = "card-title";
        card_text.className = "card-text";
        btn_btn_primary.className = "btn btn-primary";

        card_img_top.innerText = data.url;
        card_title.innerText = data.title;
        card_body.appendChild(card_img_top);
        card_body.appendChild(card_title);
        card.appendChild(card_body);
        row.appendChild(card);
    })
    container.appendChild(row)
    
})