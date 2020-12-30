const salary=document.querySelector('#salary')
const op=document.querySelector('.salary-output')
salary.addEventListener("input",function(){
    op.textContent=salary.value;
})
const name1=document.querySelector("#name")
const text_error=document.querySelector(".text-error")
name1.addEventListener("input",function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(name1.value)){
        text_error.textContent=""
    }else text_error.textContent="Name is incorrect"
})