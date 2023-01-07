
(()=>{

window.addEventListener("load", function(){
    let directions = document.querySelectorAll(".direction")
    for(i=0; i<directions.length; i++){
        directions[i].addEventListener("click", function(){
           let address = this.childNodes[1].innerHTML;
           navigator.clipboard.writeText(address).then(()=>{
            this.childNodes[5].style.opacity=1;
           setTimeout(()=>{
            this.childNodes[5].style.opacity=0;
        },1500);
        })
        })
    }
})

})();