let questions=document.querySelectorAll('.question')
let answer=document.querySelectorAll('.answer')
let firstanswer=document.getElementById('pirveli-pasuxi')
firstanswer.classList.toggle('show')
let btn=document.getElementById('btn')
let pirveli=document.getElementById('pirveli')
for(let i=0;i<questions.length;i++)
questions[i].addEventListener('click',function(){
    if(answer[i].classList.contains('show')){
        answer[i].classList.remove('show')}
        else{
            answer.forEach(ansW =>{
                ansW.classList.remove('show') 
            })
            answer[i].classList.toggle('show')
            let del=document.createElement('button')
            answer[i].appendChild(del)
            del.setAttribute('id','btn')
            del.innerText='წაშლა'
            if(answer[i].childElementCount==3){
                del.remove()
            }
            
            del.addEventListener('click',function(){
                answer[i].parentElement.remove()
            })
    } 
})
btn.addEventListener('click',function(){
    pirveli.remove()
})


