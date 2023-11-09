directionOfForce={direction1,x1:0,y1:0,direction2,x2:0,y2:0}
force=document.getElementById("force");
direction=document.getElementById("direction");
result1=document.getElementById("result1");
result=document.getElementById("result");
roundOff={html:document.getElementById("roundOff"),onoff:false};
function defRoundOff(){
    if (roundOff.onoff){
        roundOff.onoff=false;
        roundOff.html.textContent="off";
    }else{
        roundOff.onoff=true;
        roundOff.html.textContent="on";
    }
}
function decomposition(direction,xy,force){
    switch (xy){
        case "x":   return(Math.cos(direction)*force);
                    break;
        case "y":   return(Math.sin(direction)*force);
                    break;
    }
}
function calculation(type){
    switch (type){
        case 1: directionOfForce.direction1=direction.value/180*Math.PI;
                directionOfForce.x1=decomposition(directionOfForce.direction1,"x",force.value);
                directionOfForce.y1=decomposition(directionOfForce.direction1,"y",force.value);
                if (roundOff.onoff){
                    directionOfForce.x1=Math.round(directionOfForce.x1);
                    directionOfForce.y1=Math.round(directionOfForce.y1);
                }
                result.textContent="結果:"+"x方向の力"+directionOfForce.x1+",y方向の力"+directionOfForce.y1;
                break;
        case 2: directionOfForce.direction1=direction1.value/180*Math.PI;
                directionOfForce.direction2=direction2.value/180*Math.PI;
                directionOfForce.x1=decomposition(directionOfForce.direction1,"x",force1.value);
                directionOfForce.x2=decomposition(directionOfForce.direction2,"x",force2.value);
                directionOfForce.y1=decomposition(directionOfForce.direction1,"y",force1.value);
                directionOfForce.y2=decomposition(directionOfForce.direction2,"y",force2.value);
                directionOfForce.x1+=directionOfForce.x2;
                directionOfForce.y1+=directionOfForce.y2;
                directionOfForce.direction1=Math.atan(directionOfForce.y1/directionOfForce.x1);
                directionOfForce.direction1=directionOfForce.direction1/Math.PI*180;
                if (directionOfForce.x1<0){
                    directionOfForce.direction1+=180;
                }else if (directionOfForce.y1<0){
                    directionOfForce.direction1+=360;
                }
                directionOfForce.x1=directionOfForce.x1**2+directionOfForce.y1**2;
                directionOfForce.x1**=0.5;
                if (roundOff.onoff){
                    directionOfForce.x1=Math.round(directionOfForce.x1);
                    directionOfForce.y1=Math.round(directionOfForce.y1);
                    directionOfForce.direction1=Math.round(directionOfForce.direction1);
                }
                result1.textContent="結果:"+"力の強さ"+directionOfForce.x1+",向き"+directionOfForce.direction1;
                break;
    }
}