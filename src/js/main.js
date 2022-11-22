
var mainApp = new Vue({
  el: "#main-app",
  data: {
    userName: "",
    validity: "",
    profileImage: "src/image/M3.png",
    message: {
      mLength: "",
    },
    notifications: {
      nLength: "",
    }
  },
  methods:{
    getUserInf (){
      fetch("src/json/userInf.json")
      .then(response => response.json())
      .then(data=>{
        this.userName = data.name;
        this.validity = data.validity;
        this.profileImage = data.profileImage;
        // alert("its's work");
        // console.log(data);
      })
    },
    getMsgL(){
      fetch("src/json/message.json")
      .then(r => r.json())
      .then(data=>{
        this.message.mLength = data.messages.id.length;
      })
    },
    getNotiL(){
      fetch("src/json/posts.json")
      .then(res => res.json())
      .then(data =>{
        this.notifications.nLength  = data.dashbordPosts.theInfo.name.length;
      })
    }
  },
  beforeMount() {
    this.getUserInf();
    this.getMsgL(); 
    this.getNotiL(); 
  },
});


let cardContent = document.querySelector(".message-list .card-content");
fetch("src/json/message.json")
.then(response => response.json())
.then(m =>{
  
  
  console.log(m);
  console.log(m.messages.id.length);
  console.log(m.messages.senderName.length);


  msgL = m.messages.senderName.length;
  for(var i = 0; i < m.messages.senderName.length ; i++){
    cardContent.innerHTML += `
    <div class="msg b-white">
    <div class="top-content">
    <img width="40px" src="${m.messages.imageSrc[i]}" />
    <p class="name">${m.messages.senderName[i]}</p>
    <p class="date">${m.messages.messageDate[i]}</p>
    </div>
    <div class="text">
    <p>
    ${m.messages.messageText[i]}
    </p>
    </div>

    </div>`;
  }
  
})
let topNoti = document.querySelector(".notifiacations-list .card-content");

let dashBordPosts = document.querySelector(".posts-card .card-container");
let dashBordPostsAll = document.querySelectorAll(".posts-card .card-container");

fetch("src/json/posts.json")
.then(response => response.json())
.then(post => {
  console.log(post);
  
  
  if(dashBordPosts != null){
    
    console.log(post.dashbordPosts.theDate);
    console.log(post.dashbordPosts.theInfo);
    console.log(post.dashbordPosts.theInfo.name);
    console.log(post.dashbordPosts.theInfo.date);
    
    for(var index = 0; index < dashBordPostsAll.length; index++ ){

      for( var i = 0 ; i < post.dashbordPosts.theDate.length; i++){
        
        dashBordPostsAll[index].innerHTML += `
        <div class="d-flex">
        <span class="color-span">${post.dashbordPosts.theDate[i]}</span>
        <h3 class="">${post.dashbordPosts.theText[i]}</h3>
        
        <p class="small">${post.dashbordPosts.theInfo.name[i]} <span>/</span> ${post.dashbordPosts.theInfo.date[i]} </p>
        </div>
        `;
        // <h3 class="">${post.dashBordPosts.theText[i]}</h3>
      }
    }
    
}
})

const header = document.querySelector("header");
const navBar = document.querySelector(".navBar");

const toggleBtn = document.getElementById("toggleBtn");


window.addEventListener("scroll", e => {
  if (header != null) {
    // header.classList.toggle("fixid", window.scrollY > 600);
  };
});

if (toggleBtn != null) {

  toggleBtn.addEventListener("click", e => {
    navBar.classList.toggle("open")
  });
}

// go top btn 
let topButton = document.createElement("button");
let topButtonIcon = `<i class="fas fa-arrow-up"></i>`;
topButton.innerHTML = topButtonIcon;
topButton.className = "btn topBtn";
topButton.setAttribute("onclick", "scroll_now()")

topButton.setAttribute("id", "scroll_now")
document.body.appendChild(topButton);

function scroll_now() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
// 



let openAn = document.getElementById("openAn");
let timeout;
let timeout2;
function myFunction() {
  timeout = setTimeout(opAnF, 1500);
}
window.addEventListener("load", function (e) {
  myFunction()

})
function opAnF() {

  openAn.style.opacity = `0`
  clearTimeout();
  timeout2 = setTimeout(opAnfD, 1000)
}
function opAnfD() {
  openAn.style.display = `none`

}

let clospall = document.querySelectorAll(".clospall");
if (clospall != null) {
  clospall.forEach(c => {
    c.style.maxHeight = `0px`;
    c.previousElementSibling.addEventListener("click", e => {
      e.target.classList.toggle("t");
      c.classList.toggle("open");
      if (c.classList.contains("open")) {
        c.style.maxHeight = window.getComputedStyle(c.children[0]).height;
      }
      else {
        c.style.maxHeight = `0px`;

      }
      
    })
  })
}
const contentSide= document.querySelector(".content-side");
let contentBlocks = document.querySelectorAll(".content-side .block");
const btnOp = document.querySelectorAll("[data-op]");
if(btnOp){
  btnOp.forEach(btn =>{
    btn.addEventListener("click" , e=>{
      for(var i = 0 ; i < btnOp.length; i++){
        contentBlocks[i].classList.add("none");
        
        document.getElementById(`${btn.getAttribute("data-op")}`)
        .classList.remove("none");
      }
      piaChartStarto();
    })
  })
}
const leftNav  = document.querySelector(".left-side");
const toggleLeftNav = document.getElementById("left-side-op");
if(toggleLeftNav != null){
  toggleLeftNav.addEventListener('click' , e=>{
    if(leftNav != null){
      leftNav.classList.toggle("open")
    }
    else{
      console.log(`is ${leftNav}`)
    }
  })
}
let dycalender =document.getElementById("dycalender");
if(dycalender != null){
  dycalendar.draw({
    target: '#dycalender',
    type: 'month',
    dayformat: 'full',
    monthformat: 'full',
    highlighttargetdate: true,
    prevnextbutton: 'show'
})
}


const activePage = window.location.pathname;
const leftNavLinks = document.querySelectorAll('.left-side .pages a').forEach(link => {
if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
}
})
