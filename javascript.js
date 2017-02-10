
function items() {
    for (i = 0; i < 16; i++) {
        $(".contentContainer").append(
    `<div class = "content"> <a href = "${cowboyBebop.results[i].url}"><img src = "${cowboyBebop.results[i].Images[0].url_170x135}" width = "225"/></a>
    <p class = "title">${cowboyBebop.results[i].title}</p> <p class = "creator"> ${cowboyBebop.results[i].Shop.shop_name}</p>
    <p class = "price">$${cowboyBebop.results[i].price}</p></div>`)
    }
}
items();
