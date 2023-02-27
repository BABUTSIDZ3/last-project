let header=document.createElement('header')
let div1=document.createElement('div')
let h1=document.createElement('h1')
let logoaddress=document.createElement('a')
let logo=document.createElement('img')
let ul=document.createElement('ul')
let li1=document.createElement('li')
let li2=document.createElement('li')
let main=document.createElement('div')
let faq=document.createElement('div')
let firsth2=document.createElement('h2')
let secoundh2=document.createElement('h2')
let index=document.createElement('a')
let faqhtml=document.createElement('a')
let socialmelia=document.createElement('div')
let fbdiv=document.createElement('div')
let twdiv=document.createElement('div')
let insdiv=document.createElement('div')
let gmaildiv=document.createElement('div')
let wtsdiv=document.createElement('div')
let fbimg=document.createElement('img')
let twimg=document.createElement('img')
let instimg=document.createElement('img')
let gmailimg=document.createElement('img')
let wtsimg=document.createElement('img')
let bar=document.createElement('img')
let hiddendiv=document.createElement('div')
let fixedbar=document.createElement('div')
let red=document.createElement('div')
let blue=document.createElement('div')
let green=document.createElement('div')
let headerdiv=document.getElementById('header')
red.setAttribute('id','red')
blue.setAttribute('id','blue')
green.setAttribute('id','green')
fixedbar.appendChild(red)
fixedbar.appendChild(blue)
fixedbar.appendChild(green)
red.addEventListener('click',function(){
    header.style.backgroundColor='red'
})
blue.addEventListener('click',function(){
    header.style.backgroundColor='blue'
})
green.addEventListener('click',function(){
    header.style.backgroundColor='green'
})
fixedbar.setAttribute('id','fixedbar')
document.body.appendChild(fixedbar)
div1.setAttribute('id','head-img')
document.body.appendChild(hiddendiv)
hiddendiv.setAttribute('id','hidden')
document.body.appendChild(header)
header.appendChild(div1)
div1.appendChild(h1)
logoaddress.setAttribute('href','./index.html')
h1.appendChild(logoaddress)
logo.setAttribute('src','./images/unnamed.png')
logoaddress.appendChild(logo)
ul.setAttribute('id','nav')
header.appendChild(ul)
li1.setAttribute('id','nav-main')
li2.setAttribute('id','nav-faq')
ul.appendChild(li1)
ul.appendChild(li2)
main.setAttribute('id','main')
li1.appendChild(main)
faq.setAttribute('id','faq')
li2.appendChild(faq)
main.appendChild(firsth2)
faq.appendChild(secoundh2)
index.setAttribute('href','./index.html')
faqhtml.setAttribute('href','./faq/faq.html')
firsth2.appendChild(index)
secoundh2.appendChild(faqhtml)
index.innerText='MAIN'
faqhtml.innerText='FAQ'
socialmelia.setAttribute('id','social-media')
header.appendChild(socialmelia)
fbdiv.setAttribute('id','fb')
twdiv.setAttribute('id','tw')
insdiv.setAttribute('id','inst')
gmaildiv.setAttribute('id','gmail')
wtsdiv.setAttribute('id','wts')
socialmelia.appendChild(fbdiv)
socialmelia.appendChild(twdiv)
socialmelia.appendChild(insdiv)
socialmelia.appendChild(gmaildiv)
socialmelia.appendChild(wtsdiv)
fbdiv.appendChild(fbimg)
twdiv.appendChild(twimg)
insdiv.appendChild(instimg)
gmaildiv.appendChild(gmailimg)
wtsdiv.appendChild(wtsimg)
fbimg.setAttribute('src','./images/fb_icon_325x325.png')
twimg.setAttribute('src','./images/twitter.png')
instimg.setAttribute('src','./images/logo-ig-stunning-instagram-logo-vector-download-for-new-7.png')
gmailimg.setAttribute('src','./images/gmail.png')
wtsimg.setAttribute('src','./images/png-transparent-green-call-icon-whatsapp-logo-whatsapp-text-trademark-grass-thumbnail.png')
bar.setAttribute('src','./images/bar.png')
bar.setAttribute('id','bar')
header.appendChild(bar)
document.body.prepend(header)
document.body.prepend(hiddendiv)
document.body.prepend(fixedbar)
bar.addEventListener('click',function(){
   if(hiddendiv.classList.contains('show')){
     ul.classList.remove('ulshow')
    hiddendiv.classList.remove('show')
   }else{
   ul.classList.toggle('ulshow')
   hiddendiv.classList.toggle('show')
}
})
let btn=document.getElementById('btn')
let Name=document.getElementById('name')
let surname=document.getElementById('surname')
let mail=document.getElementById('mail')
let shesaxeb=document.getElementById('shesaxeb')
let saxeli=document.getElementById('shey-saxeli')
let gvari=document.getElementById('shey-gvari')
let meili=document.getElementById('shey-meili')
let info=document.getElementById('shey-info')
let del=document.getElementById('del')
let arrobj=[]
let counter=1
btn.addEventListener('click',function(e){
    e.preventDefault()
    let obj={
        id: counter++,
        firstname: Name.value,
        surname: surname.value,
        email:mail.value,
        about:shesaxeb.value
    }
    arrobj.push(obj)
    localStorage.setItem("about",JSON.stringify(arrobj))
saxeli.innerText=obj.firstname
gvari.innerText=obj.surname
meili.innerText=obj.email
info.innerText=obj.about
})
del.addEventListener('click',function(){
    saxeli.innerText=''
gvari.innerText=''
meili.innerText=''
info.innerText=''
})


