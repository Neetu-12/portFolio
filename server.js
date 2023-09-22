var typed = new Typed('#element', {
    strings: ['Web developer !', 'student of IGNOU !'],
    typeSpeed: 50,
});

// function myFunction() {
//     alert("Completed successfully")
//     document.querySelector(".btn").innerHTML = "Completed successfully";
// }


const submitBtn = document.getElementById('.button2')
const closeBtn = document.getElementById('close')
const popup = document.querySelector('.popupContainer')

submitBtn.addEventListener('click', function () {
    popup.classList.add('popupActive')

})
closeBtn.addEventListener('click', function () {
    popup.classList.remove('popupActive')

})



