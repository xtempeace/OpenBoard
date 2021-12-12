let cTool="pencil";
    let canvasBoard=document.querySelector("canvas");
    let tool=canvasBoard.getContext("2d");
    
   
    canvasBoard.height=window.innerHeight;//canvasBoard.height=500;
    canvasBoard.width=window.innerWidth;//canvasBoard.width=600;
    let body=document.querySelector("body");
    tool.strokeStyle="lightpink";//Default tool color of canvas


    