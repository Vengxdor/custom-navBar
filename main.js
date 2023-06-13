const mode = document.querySelector(".mode")
const aside = document.querySelector(".aside")
const icons = document.querySelectorAll(".icon")
const asideHeader = document.querySelector(".aside__header")

const sun = icons[5]
const moon = icons[6]

console.log(icons)

mode.addEventListener("click",() =>{
   mode.classList.toggle("dark")

   if(mode.classList.contains("dark")){
      aside.style.cssText = `
      background-color: var(--bg-darkmode);
      `
      moon.style.display = "none"
      sun.style.display = "flex"
      
   } else{
      aside.style.cssText = ``
      moon.style.display = ""
      sun.style.display = ""
   }

})
