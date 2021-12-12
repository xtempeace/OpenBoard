//Tool Change Logic   

    let pencil=document.querySelector("#pencil");
    let eraser=document.querySelector("#eraser");
    let rect=document.querySelector("#rect");
    let line=document.querySelector("#line");
    let options=document.querySelectorAll(".size-box");
    
    
    pencil.addEventListener("click",function(e){
      if(cTool=="pencil")
      {
        //second click
        //options show
        options[0].style.display="flex";//It shows the options
      }
      //first Click
      else
       {
         
        for(let i=0;i<options.length;i++)
         {
           options[i].style.display="none";
         }
        //  pencil.style.border="1px solid red";
         cTool="pencil";
         tool.strokeStyle="lightpink";
         tool.lineWidth=pencilSize;
       }
    })
    eraser.addEventListener("click",function(e){
      if(cTool=="eraser"){
        //second click
        //options show
        options[1].style.display="flex";//It shows the options
      }
      //first Click
       else
       {
         for(let i=0;i<options.length;i++)
         {
           options[i].style.display="none";
         }
        //  eraser.style.border="1px solid red";
         cTool="eraser";
         tool.strokeStyle="white";
         tool.lineWidth=eraserSize;
       } 
      })
    rect.addEventListener("click",function(e){
      if(cTool=="rect"){
        //second click
        //options show
        options[2].style.display="flex";//It shows the options
      }
      //first Click
       else
       {
        for(let i=0;i<options.length;i++)
         {
           options[i].style.display="none";
         }
        //  eraser.style.border="1px solid red";
         cTool="rect";
         tool.strokeStyle="lightpink";
         tool.lineWidth=rectangleSize;
       }
    })
    line.addEventListener("click",function(e){//not working
      if(cTool=="line")
      {
        //second click
        //options show
        options[3].style.display="flex";//It shows the options
      }
      //first Click
       else
       {
        for(let i=0;i<options.length;i++)
         {
           options[i].style.display="none";
         }
        //  eraser.style.border="1px solid red";
         cTool="line";
         tool.strokeStyle="lightpink";
         tool.lineWidth=lineSize;
       }
    })


//Color change Logic
    tool.strokeStyle="red";
      let redColor=document.querySelector(".red");
      let greenColor=document.querySelector(".green");
      let blueColor=document.querySelector(".blue");
      //color change logic
      redColor.addEventListener("click",function(){
          
          tool.strokeStyle="lightpink";
      })
        greenColor.addEventListener("click",function(){
            
        tool.strokeStyle="lightgreen";
      })
        blueColor.addEventListener("click",function(){
          
        tool.strokeStyle="lightblue";
      })


                          //size change Logic

//we have to write code for pencil,eraser,rectangle,line
                          //copy from options.html
//pencil
//eraser
//rectangle
//line
let pencilSize=5;
let eraserSize=5;
let rectangleSize=5;
let lineSize=5;

 
  
  
  let sizeBoxArr=document.querySelectorAll(".size-box");
    sizeBoxArr[0].addEventListener("click",function(e){
      //actual event occur -> target 
      let elems=["size1","size2","size3","size4"];

      //class
      let allTheClasses=e.target.classList;
      let firstClass=allTheClasses[0];
      let test=elems.includes(firstClass);
      if(test)
      {
        //size  button click
        
        if(firstClass=="size1")
        {
          pencilSize=5;
        }
        else if(firstClass=="size2")
        {
          pencilSize=10;
        }
        else if(firstClass=="size3")
        {
          pencilSize=15;
        }
        else if(firstClass=="size4")
        {
          pencilSize=20;
        }
      }
      console.log("PencileSize:",pencilSize);
      tool.lineWidth=pencilSize;
    });
    sizeBoxArr[1].addEventListener("click",function(e){
      //actual event occur -> target
      let elems=["size1","size2","size3","size4"];

      //class
      let allTheClasses=e.target.classList;
      let firstClass=allTheClasses[0];
      let test=elems.includes(firstClass);
      if(test)
      {
        //size waale button click
        if(firstClass=="size1")
        {
          eraserSize=5;
        }
        else if(firstClass=="size2")
        {
          eraserSize=10;
        }
        else if(firstClass=="size3")
        {
          eraserSize=15;
        }
        else if(firstClass=="size4")
        {
          eraserSize=20;
        }
      }
      console.log("EraserSize:",eraserSize);
      tool.lineWidth=eraserSize;
    });
    sizeBoxArr[2].addEventListener("click",function(e){
      //actual event occur -> target
      let elems=["size1","size2","size3","size4"];

      //class
      let allTheClasses=e.target.classList;
      let firstClass=allTheClasses[0];
      let test=elems.includes(firstClass);
      if(test)
      {
        //size waale button click
        if(firstClass=="size1")
        {
          rectangleSize=5;
        }
        else if(firstClass=="size2")
        {
          rectangleSize=10;
        }
        else if(firstClass=="size3")
        {
          rectangleSize=15;
        }
        else if(firstClass=="size4")
        {
          rectangleSize=20;
        }
      }
      tool.lineWidth=rectangleSize;

    });
    sizeBoxArr[3].addEventListener("click",function(e){
      //actual event occur -> target
      let elems=["size1","size2","size3","size4"];

      //class
      let allTheClasses=e.target.classList;
      let firstClass=allTheClasses[0];
      let test=elems.includes(firstClass);
      if(test)
      {
        //size waale button click
        if(firstClass=="size1")
        {
          lineSize=5;
        }
        else if(firstClass=="size2")
        {
          lineSize=10;
        }
        else if(firstClass=="size3")
        {
          lineSize=15;
        }
        else if(firstClass=="size4")
        {
          lineSize=20;
        }
      }
      tool.lineWidth=lineSize;

    });


