function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 

  document.getElementById('card-tringle').addEventListener("mouseover", function(){
    document.getElementById('card-tringle').style.backgroundColor = randomColor();
  });
  document.getElementById('card-tringle').addEventListener("mouseleave", function(){
    document.getElementById('card-tringle').style.backgroundColor = 'white';
  });
  
  
  document.getElementById('card-rectangle').addEventListener("mouseover", function(){
    document.getElementById('card-rectangle').style.backgroundColor = randomColor();
  });
  document.getElementById('card-rectangle').addEventListener("mouseleave", function(){
    document.getElementById('card-rectangle').style.backgroundColor = 'white';
  });
  
  
  document.getElementById('card-parallelogram').addEventListener("mouseover", function(){
    document.getElementById('card-parallelogram').style.backgroundColor = randomColor();
  });
  document.getElementById('card-parallelogram').addEventListener("mouseleave", function(){
    document.getElementById('card-parallelogram').style.backgroundColor = 'white';
  });
  
  
  document.getElementById('card-rhombus').addEventListener("mouseover", function(){
    document.getElementById('card-rhombus').style.backgroundColor = randomColor();
  });
  document.getElementById('card-rhombus').addEventListener("mouseleave", function(){
    document.getElementById('card-rhombus').style.backgroundColor = 'white';
  });
  
  
  document.getElementById('card-pentagon').addEventListener("mouseover", function(){
    document.getElementById('card-pentagon').style.backgroundColor = randomColor();
  });
  document.getElementById('card-pentagon').addEventListener("mouseleave", function(){
    document.getElementById('card-pentagon').style.backgroundColor = 'white';
  });
  
  
  document.getElementById('card-ellipse').addEventListener("mouseover", function(){
    document.getElementById('card-ellipse').style.backgroundColor = randomColor();
  });
  document.getElementById('card-ellipse').addEventListener("mouseleave", function(){
    document.getElementById('card-ellipse').style.backgroundColor = 'white';
  });
  
  

  document.getElementById('new-page').addEventListener("click", function(){
    window.location.href = 'bank.html';
  });