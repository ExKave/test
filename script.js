document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    menuToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
});

function addQuote(){
  const url="https://api.quotable.io/quotes/random?tag=competition";
  
  const p=fetch(url);
  p.then((response)=>{
    console.log(response.status);
    return response.json();
  }).then((value)=>{
    var quote=document.getElementById("quote");
      console.log(value);
      quote.innerText=value[0].content;
  })
}

addQuote();
