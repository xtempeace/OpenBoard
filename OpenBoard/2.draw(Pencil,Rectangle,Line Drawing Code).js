  let boardTop=canvasBoard.getBoundingClientRect().top;
  let boardLeft=canvasBoard.getBoundingClientRect().left;
  let iX,iY,fX,fY;
  let drawingMode=false;
  
  
  body.addEventListener("mousedown",function(e){
    
    
    iX=e.clientX-boardLeft;
    iY=e.clientY-boardTop;
    if(cTool=="pencil"||cTool=="eraser")
    {
      tool.beginPath();
      tool.moveTo(iX,iY);
      drawingMode=true;
    }
  });
  body.addEventListener("mouseup",function(e){
    
    fX=e.clientX-boardLeft;
    fY=e.clientY-boardTop;
    let width=fX-iX;
    let height=fY-iY;
    if(cTool=="rect")
    {

      tool.strokeRect(iX,iY,width,height);
    }
    else if(cTool=="line")
    {
      //console.log("Pencil tool is Pending");
      tool.beginPath();
      tool.moveTo(iX,iY);
      tool.lineTo(fX,fY);
      tool.stroke();
    }
    else if(cTool=="pencil"||cTool=="eraser")
    {
      drawingMode=false;
      //iX=iY=undefined;//It also work
    }
  });
  body.addEventListener("mousemove",function(e){
    
    
    if(drawingMode==false)
    {
      return;
    }
    else if(drawingMode==true)
    {
      fX=e.clientX-boardLeft;
      fY=e.clientY-boardTop;
      
      tool.lineTo(fX,fY);
      tool.stroke();
      iX=fX;
      iY=fY;
    }
    

    // console.log("x"+e.clientX);
    // console.log("y"+e.clientY);

  })