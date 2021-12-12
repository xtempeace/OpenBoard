let sticky=document.querySelector("#sticky");//Selects from menue.html
  //let body=document.querySelector("body");
  sticky.addEventListener("click",function(e){
    let sticky=document.createElement("div");
    sticky.setAttribute("class","sticky");
    sticky.innerHTML=`<div class="sticky">
    <div class="navbar">
      <div class="close"></div>
      <div class="minimize"></div>
    </div>
    <textarea name="" class="textarea"></textarea>
  </div>`;
  body.appendChild(sticky);
  
  let minimize=sticky.querySelector(".minimize");
  let close=sticky.querySelector(".close");
  let textArea=sticky.querySelector(".textarea");
  let isClosed=false;
    //sticky ko minimize/maximize karnae kae liyae
  minimize.addEventListener("click",function(e){
    if(isClosed==false)
    {
      textArea.style.display="none";
    }
    else
    {
      textArea.style.display="block";
    }
    isClosed=!isClosed;
  })
  //sticky ko close karnae kae liyae
  close.addEventListener("click",function(){
    console.log("Hi");
    sticky.remove();
  })
  })
  