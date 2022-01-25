function scroll (){
 const tagNav = document.querySelectorAll('.link')
 tagNav.forEach( element => {
     element.addEventListener('click', (e)=> {
         e.preventDefault()
         const id = element.getAttribute('href').substring(1)
         const section = document.getElementById(id)
         section.scrollIntoView({
             behavior:'smooth'
         })
     })
 })
}
scroll()
export default scroll