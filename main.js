var divrows = 3 , divCol = 3, currimage ,otherimage, turns = 0;

window.onload = function() {
  
    for (var r = 0; r < divrows; r++) {
        for (var c = 0; c < divCol; c++) {
         
            var image = document.createElement("img");
            image.src = "alt.png";
            
          
            image.addEventListener("dragstart", dragStart);
            image.addEventListener("dragover", dragOver);   
            image.addEventListener("dragenter", dragEnter);
            image.addEventListener("dragleave", dragLeave); 
            image.addEventListener("drop", dragDrop);       
            image.addEventListener("dragend", dragEnd);      

            document.getElementById("board").append(image);
        }
    }

    
    var pieces = [];
    for (var i=1; i <= divrows*divCol; i++) {
        pieces.push(i.toString()); 
    }
    pieces.reverse();
    for (var i =0; i < pieces.length; i++) {
        var j = Math.floor(Math.random() * pieces.length);

    
        var tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (var i = 0; i < pieces.length; i++) {
        var image = document.createElement("img");
        image.src = "./images/" + pieces[i] + ".jpg";
       

        
        image.addEventListener("dragstart", dragStart);
        image.addEventListener("dragover", dragOver);  
        image.addEventListener("dragenter", dragEnter); 
        image.addEventListener("dragleave", dragLeave); 
        image.addEventListener("drop", dragDrop);       
        image.addEventListener("dragend", dragEnd);     

        document.getElementById("pieces").append(image);
    }
}

function dragStart() {
    currimage = this; 
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherimage = this; 
}

function dragEnd() {
    if (currimage.src.includes("alt")) {
        return;
    }
    var currImg = currimage.src;
    var  otherImg = otherimage.src;
    currimage.src = otherImg;
    otherimage.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}


imgg1=document.getElementById("imgg");
 

setTimeout(function(){
    imgg1.style.opacity=0;

}, 1000);

  