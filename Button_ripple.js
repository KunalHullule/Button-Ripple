const btnE1 = document.querySelector(".btn")

btnE1.addEventListener("mouseover",(event) =>{
    console.log(event.pageY - btnE1.offsetTop);
})