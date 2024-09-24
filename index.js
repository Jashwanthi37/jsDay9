function one(){
    let maindiv=document.createElement("div")
    maindiv.className="maindiv";
    let div1=document.createElement("div");
    let img=document.createElement("img");
    img.src="https://wallpaperaccess.com/full/1972917.jpg";
    let p1=document.createElement("p");
    div1.className="main";
    p1.innerHTML="<h2>Champaran Handi<br> Restaurant</h2>Nagpur road"
    document.body.appendChild(maindiv);
    maindiv.appendChild(div1)
    div1.appendChild(img);
    div1.appendChild(p1);

    let div2=document.createElement("div");
    div2.className="main1"
    let p2=document.createElement("p");
    p2.innerHTML="<h3> Biryani</h3>";
    div2.appendChild(p2);
    maindiv.appendChild(div2);

    let div3=document.createElement("div");
    div3.className="section";
    let p3=document.createElement("p");
    p3.innerHTML="**Any Suggestions?We will pass it on..."
    div3.appendChild(p3);
    maindiv.appendChild(div3);

    let div5=document.createElement("div");
    div5.className="section1";
    let input=document.createElement("input");
    input.type="checkbox";
    input.id="check";
    let label=document.createElement("label");
    label.for="check";
    label.innerHTML="opt in for No-contact Delivery <br>Unwell ,or avoiding?Please select no contact delivery.partner will safely place the order outside your door(not for COD)"
    maindiv.appendChild(div5);
    div5.appendChild(input);
    div5.appendChild(label);

    let div4=document.createElement("div");
    div4.className="sextion1"
    let p4=document.createElement("p");
    p4.innerHTML="<h3>Bill Details</h3>";
    let inp1=document.createElement("p");
    inp1.innerText="Item total"
    let inp2=document.createElement("p");
     inp2.innerText="Delivery partner fee"
    let inp3=document.createElement("p");
     inp3.innerText="Delivery Tip"
    let inp4=document.createElement("p");
     inp4.innerText="platform fee"
    let inp5=document.createElement("p");
     inp5.innerText="GST and Restaurant charges";
    let inp6=document.createElement("p");
    inp6.className="billline";
    let inp7=document.createElement("p");
    inp7.innerHTML="<h2>Total Bill</h2>"

    div4.appendChild(p4);
    div4.appendChild(inp1);
    div4.appendChild(inp2);
    div4.appendChild(inp3);
    div4.appendChild(inp4);
    div4.appendChild(inp5);
    div4.appendChild(inp6);
    div4.appendChild(inp7);
    maindiv.appendChild(div4);
    
}
one()

function inc(){
    let qty=document.getElementById("qty");
    qty.innerText= +qty.innerText +1;
    if(+qty.innerText>0){
    let price=document.getElementById("price");
    price.innerText= 150 * +qty.innerText+"Rs";
    let totalbill=document.getElementById("totalbill");
    totalbill.innerText= 72+6+8+150*+qty.innerText+" Rs";
    let itemtotal=document.getElementById("item total");
    itemtotal.innerText= 150* +qty.innerText+"Rs";
    }
    else{
        price.innerText=0;
        qty.innerText=0
        totalbill.innerText=0;
    }
}

function dec(){
    let qty=document.getElementById("qty");
    qty.innerText= +qty.innerText -1;
    if(+qty.innerText>0){
    let price=document.getElementById("price");
    price.innerText= 150 * +qty.innerText+"Rs";
    let totalbill=document.getElementById("totalbill");
    totalbill.innerText= 72+6+8+150*+qty.innerText+" Rs";
    let itemtotal=document.getElementById("item total");
    itemtotal.innerText= 150* +qty.innerText+"Rs";
    }
    else{
        price.innerText=0;
        qty.innerText=0;
        totalbill.innerText=0;
        
    } 
}
