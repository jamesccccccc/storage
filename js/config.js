let _url=`http://localhost:3000`;
//編輯使用者圖像
let userHead=document.querySelector('.navbar-nav>.userHead');
function addUser(){
    let myname=localStorage.getItem('myname');
    let str=''
        str+=`
          <a href="#"><img class="rounded-pill" 
            src="https://ui-avatars.com/api/?name=${myname}&color=fff&background=random"width="32px" height="32px">
          </a>`
          userHead.innerHTML=str;
}
addUser();