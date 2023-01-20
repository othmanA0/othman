
// const BTN = document.getElementById("button")
// BTN.addEventListener("click", function onclick(){
//     BTN.style.backgroundColor = "red"
//     BTN.style.width = "300px"
//     BTN.style.borderRadius=("30px")
// })

// // now we create the dark mode
// const btn = document.getElementById("btn")


// local stoarge
// window.localStorage.setItem("color","red")
// window.localStorage.fontweight = "bold"
// window.localStorage["fontsize"] = "20px"

// console.log(window.localStorage.getItem("color"));

// console.log(window.localStorage);
// console.log(typeof window.localStorage);


// document.body.style.background = window.localStorage.getItem("color")
// let lis = document.querySelectorAll("ul li")

// lis.forEach((li) => {
//       li.addEventListener("click"),(e) =>{
//         // console.log(e.currentTarget.dataset.color);
//         lis.forEach((li) => {
//             e.currentTarget.classList.add("active")
//         })
//       }
// })



// const body = document.getElementsByTagName("body")
// const btn = document.getElementById("btn")

// btn.addEventListener("click",()=>{
//     body.classList.add("dark-theme");
// })



// const theme = document.getElementById("theme")
// const toggleBtn = document.getElementById("toggle-btn")
// let darkMode = localStorage.getItem("dark-mode")

// const enableDarkMode = ()=>{
//     theme.classList.add("dark-mode-theme")
//     toggleBtn.classList.remove("dark-mode-toggle")
//     localStorage.setItem("dark-mode", "enabled")
// }

// const disableDarkmode = ()=>{
//     theme.classList.remove("dark-mode-theme")
//     toggleBtn.classList.add("dark-mode-toggle")
//     localStorage.setItem("dark-mode","disabled")
// }
// if(darkMode === "enabled"){
//     enableDarkMode()
// }
// toggleBtn.addEventListener("click",(e)=>{
//     darkMode = localStorage.getItem("dark-mode");
//     if(darkMode === "disabled"){
//         enableDarkMode()
//     }
//     else{
//         disableDarkmode()
//     }
// });





document.getElementById("current-year").innerHTML = new Date().getFullYear()




// var state = true;
// document.body.style.backgroundColor = localStorage.getItem('bgcolor');
// function change(){
//     if(state){
//         document.body.style.background = "black"
//         document.getElementById("btn").style.color="white"
//         localStorage.setItem('color', 'white');
//     }
//     else{
//         document.body.style.backgroundColor = "white"
//         document.getElementById("btn").style.background="white"
//         localStorage.setItem('bgcolor', 'black');
//     }
//     state =!state;
// }



document.getElementById("btn").addEventListener("click",function(){
    if(localStorage.getItem("bgcolor")==="black"){
        document.body.style.backgroundColor = "white"
        localStorage.setItem("bgcolor","white")
    }
    else{
        document.body.backgroundColor = "white"
        localStorage.setItem("bgcolor","white")
    }
   
})


console.log(localStorage.getItem("bgcolor"));

if(localStorage.getItem("bgcolor") == null){
    localStorage.setItem("bgcolor", "white")
}

























// const footer = document.getElementById("footer")
// footer.style.backgroundColor = localStorage.getItem("bgcolor")
// function changer(){
//     if(state){
//         footer.style.background = "#333"
//         document.getElementById("btn").style.background="black"
//         localStorage.setItem("bgcolor","#333")
        
//     }
//     else{
//         footer.style.background = "white"
//         document.getElementById("btn").style.background="white"
//         localStorage.setItem('bgcolor',"white")

//     }
//     state = !state;
// }




























// document.body.style.backgroundColor = localStorage.getItem('bgcolor');
// function change(){
//     if(state){
//         document.footer.style.background = "white"
//         document.getElementById("btn").style.background="white"
//         localStorage.setItem('bgcolor', 'red');
//     }
//     else{
//         document.footer.style.backgroundColor = "#1A120B"
//         document.getElementById("btn").style.background="black"
//         localStorage.setItem('bgcolor', 'black');
//     }
//     state =!state;
// }



