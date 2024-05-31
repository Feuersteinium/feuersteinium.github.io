// Create dark mode item, if there's none
if (localStorage.getItem("mode") === null) {
   localStorage.setItem("mode", "true")
}
 
// Toggle dark mode function
function dbtn() {
   const mode = localStorage.getItem("mode")
   if (mode === "true") {
   document.documentElement.style.setProperty("--mode-text", "")
   document.documentElement.style.setProperty("--mode-c1", "")
   document.documentElement.style.setProperty("--mode-c2", "")
   localStorage.setItem("mode", "false")
   }
   if (mode === "false") {
   document.documentElement.style.setProperty("--mode-text", "")
   document.documentElement.style.setProperty("--mode-c1", "")
   document.documentElement.style.setProperty("--mode-c2", "")
   localStorage.setItem("mode", "true")
   }
   }