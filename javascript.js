pictures();
function pictures() {
  for (i=0; i<cowboyBebop.results.length; i++){
    $(".contentContainer").append(`<div class = "content"><img src = "${cowboyBebop.results[i].Images[0].url_170x135}"/></div>`);
  }
}
//Put img src inside of div tags inside of template literals.
