let title= document.querySelectorAll(".window")
let arrowDown=document.querySelectorAll(".button")



for (let i = 0; i < arrowDown.length; i++) 
{
arrowDown[i].addEventListener("click",function(e)
{
    displaySkills(i)
    ArrowButtoun(i)

})
}


 
function ArrowButtoun(i)
{
if(arrowDown[i].classList.contains("Arrow__up"))
{
arrowDown[i].classList.replace("Arrow__up","Arrow__down")
 }
 else if(arrowDown[i].classList.contains("Arrow__down"))
 {
arrowDown[i].classList.replace("Arrow__down","Arrow__up") 
}
}
 function displaySkills(i)
 {
    if(title[i].classList.contains("open"))
    {
    title[i].classList.replace("open","close")
    }
   else if(title[i].classList.contains("close"))
    {
    title[i].classList.replace("close","open")
    }
    }
    

 




