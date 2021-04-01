 // Get the modal
 var modal1 = document.getElementById("myModal1");

 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = document.getElementById("myImg01");
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");
 img.onclick = function(){
   modal1.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
 }

 // Get the modal
 var modal2 = document.getElementById("myModal2");

 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = document.getElementById("myImg02");
 var modalImg = document.getElementById("img02");
 var captionText = document.getElementById("caption");
 img.onclick = function(){
   modal2.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
 }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

Array.from(span).forEach(function(element){
  element.onclick = function() { 
    modal1.style.display = "none";
    modal2.style.display = "none";
  }
});
  
  



