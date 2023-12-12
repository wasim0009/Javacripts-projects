const getColor=()=>{
    const randomCOlor=Math.floor(Math.random()*16777215);
    const randomCode='#'+randomCOlor.toString(16);
    document.body.style.backgroundColor=randomCode;
}

document.getElementById("btn").addEventListener(

    "click" ,getColor
)


//starting me call hoga
getColor();