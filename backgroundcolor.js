const colors = ["#ff9a9e", "#fad0c4", "#ffdde1", "#fbc2eb"];  
let i = 0;  
  
setInterval(() => {  
    document.body.style.background = colors[i];  
    i = (i + 1) % colors.length;  
}, 3000);  