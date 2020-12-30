const salary=document.querySelector('#salary')
const op=document.querySelector('.salary-output')
salary.addEventListener("input",function(){
    op.textContent=salary.value;
})