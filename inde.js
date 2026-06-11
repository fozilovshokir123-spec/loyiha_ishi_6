

// Chat oynasini ochish va yopish
function toggleChat() {
    const chat = document.getElementById('chatWindow');
    chat.style.display = chat.style.display === 'flex' ? 'none' : 'flex';
}

// Xabar jo'natish va avto-javob qaytarish
function sendMessage() {
    const input = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');
    if (input.value.trim() === '') return;

    // Foydalanuvchi xabari
    chatBody.innerHTML += `<div class="message user">${input.value}</div>`;
    
    // Avto-javob (simulyatsiya)
    setTimeout(() => {
        chatBody.innerHTML += `<div class="message bot">Your message has been received. We will respond soon!</div>`;
        chatBody.scrollTop = chatBody.scrollHeight; // Pastga tushirish
    }, 1000);

    input.value = ''; // Inputni tozalash
    chatBody.scrollTop = chatBody.scrollHeight;
}
var buybtn =document.querySelector(".buy-btn");
var cardbtn =document.querySelector(".card-btn");
var minus =document.querySelector(".minus");
var naber =document.querySelector(".naber");
var plus =document.querySelector(".plus");

buybtn.addEventListener("click" , function(){
    cardbtn.classList.remove("hidden");
    buybtn.classList.add("hidden")
})
plus.addEventListener("click" , function(){
naber.textContent++
})
minus.addEventListener("click" , function(){
    naber.textContent--
})
var buybtn2 =document.querySelector(".buy-btn2");
var cardbtn2 =document.querySelector(".card-btn2");
var minus2 =document.querySelector(".minus2");
var naber2 =document.querySelector(".naber2");
var plus2 =document.querySelector(".plus2");

buybtn2.addEventListener("click" , function(){
    cardbtn2.classList.remove("hidden");
    buybtn2.classList.add("hidden")
})
plus2.addEventListener("click" , function(){
naber.textContent++
})
minus2.addEventListener("click" , function(){
    naber2.textContent--
})
var buybtn3 =document.querySelector(".buy-btn3");
var cardbtn3=document.querySelector(".card-btn3");
var minus3 =document.querySelector(".minus3");
var naber3 =document.querySelector(".naber3");
var plus3 =document.querySelector(".plus3");

buybtn3.addEventListener("click" , function(){
    cardbtn3.classList.remove("hidden");
    buybtn3.classList.add("hidden")
})
plus3.addEventListener("click" , function(){
naber3.textContent++
})
minus3.addEventListener("click" , function(){
    naber3.textContent--
})