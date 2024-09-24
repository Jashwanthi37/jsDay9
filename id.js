function createId(){
    let btn=document.getElementById("btn")
    // btn.setAttribute("disabled","true");
    btn.style.display="none";
    btn.remove();
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src="https://www.baltana.com/files/wallpapers-5/Prabhas-HD-Desktop-Wallpaper-18494.jpg";
    let p=document.createElement('p');
    let p1=document.createElement('p');
    let p2=document.createElement('p');
    // let p3=document.createElement('p');
    p.innerHTML="<h1>G Jashwanthi</h1>";
    p1.innerHTML="<h2><b>Roll NO:</b>468</h2>";
    p2.innerHTML="<h2><b>Phone No:</b>8074225684</h2>";
   
    document.body.appendChild(div);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(p2);
}