const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
var me={x:0,y:0,width:20,height:20,color:"#0000FF",acceleration:0,HP:3,notOnTheEnemy:true,notOnTheBoss:true,subEnemy:0,spawnX:0},
    stage=[{constantX:0,x:0,y:270,width:300,height:50,color:"#00FF00"},{constantX:150,x:0,y:200,width:50,height:70,color:"#00FF00"},
           {constantX:300,x:0,y:300,width:75,height:20,color:"#00FF00"},{constantX:150,x:0,y:0,width:50,height:125,color:"#00FF00"},
           {constantX:375,x:0,y:200,width:50,height:120,color:"#00FF00"},{constantX:500,x:0,y:150,width:50,height:25,color:"#00FF00"},
           {constantX:650,x:0,y:125,width:50,height:25,color:"#00FF00"},{constantX:850,x:0,y:250,width:150,height:70,color:"#00FF00"},
           {constantX:850,x:0,y:250,width:50,height:25,color:"#FF00FF"},{constantX:875,x:0,y:0,width:25,height:200,color:"#00FF00"},
           {constantX:975,x:0,y:70,width:25,height:180,color:"#00FF00"},{constantX:955,x:0,y:165,width:20,height:20,color:"#00FF00"},
           {constantX:900,x:0,y:130,width:20,height:20,color:"#00FF00"},{constantX:955,x:0,y:50,width:145,height:20,color:"#00FF00"},
           {constantX:900,x:0,y:0,width:225,height:25,color:"#00FF00"},{constantX:1125,x:0,y:0,width:25,height:205,color:"#00FF00"},
           {constantX:1025,x:0,y:95,width:100,height:20,color:"#00FF00"},{constantX:1000,x:0,y:140,width:100,height:20,color:"#00FF00"},
           {constantX:1025,x:0,y:185,width:100,height:20,color:"#00FF00"},{constantX:1000,x:0,y:230,width:150,height:90,color:"#00FF00"},
           {constantX:1250,x:0,y:200,width:50,height:25,color:"#FF00FF"},{constantX:1425,x:0,y:220,width:500,height:120,color:"#00FF00"},
           {constantX:1500,x:0,y:155,width:400,height:20,color:"#00FF00"},{constantX:1500,x:0,y:0,width:400,height:135,color:"#00FF00"},
           {constantX:1550,x:0,y:200,width:50,height:20,color:"#00FF00"},{constantX:1650,x:0,y:200,width:50,height:20,color:"#00FF00"},
           {constantX:1750,x:0,y:200,width:50,height:20,color:"#00FF00"},{constantX:1850,x:0,y:200,width:50,height:20,color:"#00FF00"},
           {constantX:2000,x:0,y:150,width:50,height:25,color:"#FF00FF"},{constantX:2200,x:0,y:300,width:20,height:20,color:"#00FF00"},
           {constantX:2200,x:0,y:225,width:20,height:20,color:"#00FF00"},{constantX:2200,x:0,y:150,width:20,height:20,color:"#00FF00"},
           {constantX:2200,x:0,y:75,width:20,height:20,color:"#00FF00"},{constantX:2325,x:0,y:75,width:50,height:245,color:"#00FF00"},
           {constantX:2375,x:0,y:125,width:50,height:195,color:"#00FF00"},{constantX:2425,x:0,y:175,width:50,height:145,color:"#00FF00"},
           {constantX:2425,x:0,y:170,width:50,height:25,color:"#FF00FF"},{constantX:2475,x:0,y:225,width:325,height:95,color:"#00FF00"},
           {constantX:2550,x:0,y:150,width:225,height:50,color:"#00FF00"},{constantX:2550,x:0,y:0,width:225,height:130,color:"#00FF00"},
           {constantX:2900,x:0,y:200,width:50,height:25,color:"#FF00FF"},{constantX:3050,x:0,y:150,width:350,height:170,color:"#00FF00"},
           {constantX:3075,x:0,y:0,width:325,height:90,color:"#00FF00"},{constantX:3075,x:0,y:90,width:25,height:35,color:"#00FF00"},
           {constantX:3120,x:0,y:90,width:40,height:35,color:"#00FF00"},{constantX:3180,x:0,y:90,width:40,height:35,color:"#00FF00"},
           {constantX:3240,x:0,y:90,width:40,height:35,color:"#00FF00"},{constantX:3300,x:0,y:90,width:40,height:35,color:"#00FF00"},
           {constantX:3360,x:0,y:90,width:40,height:35,color:"#00FF00"},{constantX:3450,x:0,y:150,width:50,height:25,color:"#FF00FF"},
           {constantX:3600,x:0,y:200,width:50,height:100,color:"#00FF00"},{constantX:3600,x:0,y:300,width:500,height:20,color:"#00FF00"},
           {constantX:3725,x:0,y:0,width:250,height:275,color:"#00FF00"},{constantX:4050,x:0,y:250,width:50,height:50,color:"#00FF00"},
           {constantX:4050,x:0,y:250,width:50,height:25,color:"#FF00FF"},{constantX:4200,x:0,y:250,width:480,height:70,color:"#00FF00"}]
    enemy=[{variableX:300,x:0,y:280,width:20,height:20,state:true,color:"#FF0000",type:"横移動",leftX:300,rightX:355,direction:1},
           {variableX:955,x:0,y:70,width:20,height:20,state:true,color:"#FFFF00",type:"縦移動",upY:70,downY:145,direction:1},
           {variableX:1480,x:0,y:135,width:20,height:20,state:true,color:"#FFFF00",type:"回転移動",leftX:1480,rightX:1900,upY:135,downY:175,
           position:"lr",direction:15},
           {variableX:2375,x:0,y:105,width:20,height:20,state:true,color:"#FF0000",type:"横移動",leftX:2375,rightX:2405,direction:1},
           {variableX:2530,x:0,y:110,width:20,height:20,state:true,color:"#FF0000",type:"回転移動",leftX:2530,rightX:2775,upY:130,downY:200,
           position:"lr",direction:25},
           {variableX:3100,x:0,y:90,width:20,height:20,state:true,color:"#FFFF00",type:"縦移動",upY:90,downY:130,direction:1},
           {variableX:3160,x:0,y:90,width:20,height:20,state:true,color:"#FFFF00",type:"縦移動",upY:90,downY:130,direction:1},
           {variableX:3220,x:0,y:90,width:20,height:20,state:true,color:"#FFFF00",type:"縦移動",upY:90,downY:130,direction:1},
           {variableX:3280,x:0,y:90,width:20,height:20,state:true,color:"#FFFF00",type:"縦移動",upY:90,downY:130,direction:1},
           {variableX:3340,x:0,y:90,width:20,height:20,state:true,color:"#FFFF00",type:"縦移動",upY:90,downY:130,direction:1},
           {variableX:3650,x:0,y:280,width:20,height:20,state:true,color:"#FFFF00",type:"横移動",leftX:3650,rightX:3955,direction:1},
           {variableX:3725,x:0,y:280,width:20,height:20,state:true,color:"#FFFF00",type:"横移動",leftX:3725,rightX:4030,direction:1}]
    boss={x:100,y:-50,width:50,height:50,state:false,color:"#FF0000",acceleration:0,HP:10,count:0,direction:1,randomNumber:0};
    onTheGround=false,interval=setInterval(main,10),standardX=me.spawnX,count=0,limitX=true,
    pressed={right:false,left:false,up:false};
function drawobj(obj){
    ctx.beginPath();
    ctx.rect(obj.x,obj.y,obj.width,obj.height);
    ctx.fillStyle=obj.color;
    ctx.fill();
    ctx.closePath();
}
function drawletter(letter,font,x,y,color){
    ctx.font=font;
    ctx.fillStyle=color;
    ctx.fillText(letter,x,y);
}
function collisionDetection(obj1,obj2){
    if (obj1.x<=obj2.x&&obj1.x+obj1.width>=obj2.x&&obj1.y<=obj2.y&&obj1.y+obj1.height>=obj2.y||
        obj1.x<=obj2.x&&obj1.x+obj1.width>=obj2.x&&obj1.y>=obj2.y&&obj1.y<=obj2.y+obj2.height||
        obj1.x>=obj2.x&&obj1.x<=obj2.x+obj2.width&&obj1.y<=obj2.y&&obj1.y+obj1.height>=obj2.y||
        obj1.x>=obj2.x&&obj1.x<=obj2.x+obj2.width&&obj1.y>=obj2.y&&obj1.y<=obj2.y+obj2.height
        ){
        return(true);
    }else{
        return(false);
    }
}
function main(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawobj(me);   
    for (let i=0;i<stage.length;i++){
        stage[i].x=stage[i].constantX+standardX;
        drawobj(stage[i]);
        if (collisionDetection(me,stage[i])){    
            onTheGround=true;
            if (stage[i].color==="#FF00FF"){
                me.spawnX=stage[i].constantX*-1-1;
            }
        }
    }
    if (!boss.state){
        for (let i=0;i<enemy.length;i++){
            if (enemy[i].state){
                enemy[i].x=enemy[i].variableX+standardX;
                drawobj(enemy[i]);
                if (collisionDetection(me,enemy[i])){               
                    if (me.acceleration>0&&me.y<enemy[i].y&&enemy[i].color==="#FF0000"&&me.notOnTheEnemy){    
                        enemy[i].state=false;
                        me.acceleration=-5;
                    }else if (me.notOnTheEnemy){
                        me.HP-=1;
                        me.notOnTheEnemy=false;
                        me.subEnemy=i;
                        me.color="#FFFFFF";
                    }
                }else if (me.subEnemy===i){
                    me.notOnTheEnemy=true;
                    me.color="#0000FF";
                }
                if (enemy[i].type==="横移動"){
                    enemy[i].variableX+=enemy[i].direction;
                    if (enemy[i].direction>0&&enemy[i].x>enemy[i].rightX+standardX){
                        enemy[i].x=enemy[i].rightX+standardX;
                        enemy[i].direction*=-1;
                    }else if (enemy[i].direction<0&&enemy[i].x<enemy[i].leftX+standardX){
                        enemy[i].x=enemy[i].leftX+standardX;
                        enemy[i].direction*=-1;
                    }
                }else if (enemy[i].type==="縦移動"){
                    enemy[i].y+=enemy[i].direction;
                    if (enemy[i].direction>0&&enemy[i].y>enemy[i].downY){
                        enemy[i].y=enemy[i].downY;
                        enemy[i].direction*=-1;
                    }else if (enemy[i].direction<0&&enemy[i].y<enemy[i].upY){
                        enemy[i].y=enemy[i].upY;
                        enemy[i].direction*=-1;
                    }
                }else if (enemy[i].type==="回転移動"){
                    if (enemy[i].position==="lr"){
                        enemy[i].y+=enemy[i].direction;
                    }else if (enemy[i].position==="ud"){
                        enemy[i].variableX+=enemy[i].direction;
                    }
                    if (enemy[i].y>enemy[i].downY||enemy[i].y<enemy[i].upY){
                        enemy[i].position="ud";
                        if (enemy[i].direction>0){
                            enemy[i].y=enemy[i].downY;
                        }else{
                            enemy[i].y=enemy[i].upY;
                        }
                    }else if (enemy[i].variableX>enemy[i].rightX||enemy[i].variableX<enemy[i].leftX){
                        enemy[i].position="lr";
                        if (enemy[i].direction>0){
                            enemy[i].direction*=-1;
                            enemy[i].variableX=enemy[i].rightX;
                        }else{
                            enemy[i].direction*=-1;
                            enemy[i].variableX=enemy[i].leftX;                        
                        }
                    }
                }
            }       
        }
    }
    if (!limitX&&boss.HP>0){
        drawobj(boss);
        if (boss.state){
            if (boss.count===0){
                boss.randomNumber=Math.floor(Math.random()*3+1);
            }
            if (boss.randomNumber===1){
                if (boss.count===0){
                    boss.count=1;
                    boss.acceleration=15;
                    boss.direction=(me.x-boss.x)/Math.abs(me.x-boss.x);
                }else if (boss.count>0){
                    boss.y=225;
                    boss.height=25;
                    if (boss.count>=100){
                        boss.count=-2;
                        boss.y=200;
                        boss.height=50;
                    }
                    boss.count++;
                }else if (boss.acceleration>0){
                    if (boss.direction===1){
                        boss.x=Math.min(boss.x+boss.acceleration,canvas.width-boss.width);
                    }else{
                        boss.x=Math.max(boss.x-boss.acceleration,0);
                    }
                    boss.acceleration-=0.5;
                }else{
                    boss.count=0;
                }
            }else if (boss.randomNumber===2){
                if (boss.count===0){
                    boss.count=1;
                    boss.acceleration=-15;
                    boss.direction=(me.x-boss.x)/60;
                }else if (boss.count>0){
                    boss.y=225;
                    boss.height=25;
                    if (boss.count>=100){
                        boss.count=-2;
                        boss.y=200;
                        boss.height=50;
                    }
                    boss.count++;
                }else if (boss.acceleration>0&&boss.y>=200){
                    boss.count=0;
                }else{
                    boss.x+=boss.direction;
                    boss.y+=boss.acceleration;
                    boss.acceleration+=0.5;
                }
            }else{
                if (boss.count===0){
                    boss.count=1;
                    boss.direction=(me.x-boss.x)/Math.abs(me.x-boss.x);
                }else if (boss.count>0){
                    boss.x+=boss.direction*-3;
                    if (boss.x<=0||boss.x>=canvas.width-boss.width){
                        if (boss.x<0){
                            boss.x=0
                        }else if (boss.x>canvas.width-boss.width){
                            boss.x=canvas.width-boss.width;
                        }
                        if (boss.count>=100){
                            boss.count=-2;
                        }
                        boss.count++;
                    }
                }else if (boss.count>-9){
                    console.log(boss.count%4);
                    if (boss.count%4===-1){
                        boss.x+=10
                    }else if (boss.count%4===-2){
                        boss.y-=10;
                    }else if (boss.count%4===-3){
                        boss.x-=10;
                    }else{
                        boss.y+=10;
                    }
                    if (boss.x>canvas.width-boss.height||boss.x<0||boss.y<0||boss.y>200){
                        console.log(boss.x>canvas.width-boss.height);
                        console.log(boss.x<0);
                        console.log(boss.y<0);
                        console.log(boss.y>200);
                        if (boss.x>canvas.width-boss.height){
                            boss.x=canvas.width-boss.height;
                        }else if (boss.x<0){
                            boss.x=0;
                        }else if (boss.y<0){
                            boss.y=0;
                        }else{
                            boss.y=200;
                        }
                        boss.count--;
                    }
                }else{
                    boss.count=0;
                }
            }
            console.log(boss.randomNumber);
            if (collisionDetection(me,boss)){
                if (me.y<boss.y&&me.acceleration>0&&me.notOnTheBoss){
                    boss.HP-=1;
                    me.acceleration=-5;
                    me.y+=me.acceleration;
                }else if (me.notOnTheBoss){
                    me.notOnTheBoss=false;
                    me.HP-=1;
                    me.color="#FFFFFF";
                }
            }else{
                me.notOnTheBoss=true;
                me.color="#0000FF";
            }
        }else{
            if (boss.y<200){
                boss.acceleration+=0.5;
                boss.y+=boss.acceleration;
            }else{
                boss.y=200;
                boss.state=true;
            }
        }
    }
    drawletter("HP"+me.HP,"32px serif",5,315,"white");
    if (boss.state){
        if (boss.HP>0){
            drawletter("bossHP"+boss.HP,"32px serif",330,315,"white");
        }else{
            drawletter("YouWin!","48px serif",140,150,"white");
        }
    }
    if (me.HP<=0){
        /*alert("GAME OVER");document.location.reload();clearInterval(interval);*/
        me.x=0;
        me.y=0;
        me.acceleration=0;
        me.HP=3;
        me.notOnTheEnemy=true;
        me.subEnemy=0;
        onTheGround=false;
        standardX=me.spawnX;
        limitX=true;
        boss={x:100,y:-50,width:50,height:50,state:false,color:"#FF0000",acceleration:0,HP:10,count:0,direction:1,randomNumber:0};
        for (let i=0;i<enemy.length;i++){
            enemy[i].state=true;
        }
    }
    if (onTheGround){
        onTheGround=false;
        if (pressed.up){
            me.acceleration=-10;
            me.y+=me.acceleration;
        }else{
            me.acceleration=0;            
        }        
    }else{
        me.acceleration+=0.5;
        me.y+=me.acceleration;
        if (me.y-me.acceleration>320){
            me.HP=0;
        }
    }
    for (let i=0;i<stage.length;i++){
    while (collisionDetection(me,stage[i])){
        if (me.acceleration>=0){
            me.y--;
        }else{
            me.y++;
        }     
    }
    }        
    if (pressed.right||pressed.left){
        if (pressed.right){
            if (me.x>320&&limitX){
                standardX-=3;
                me.x+=3;
                count=0;
                for (let i=0;i<stage.length;i++){               
                    while (collisionDetection(me,stage[i])){
                        standardX++;
                        count++;
                        me.x--;
                    }
                }
                me.x-=3-count;
            }else{
                me.x=Math.min(me.x+3,canvas.width-me.width);
                for (let i=0;i<stage.length;i++){               
                    while (collisionDetection(me,stage[i])){
                        me.x--;
                    }
                }
            }                            
        }else{
            me.x=Math.max(me.x-3,0);
            for (let i=0;i<stage.length;i++){               
                while (collisionDetection(me,stage[i])){
                    me.x++;
                }
            }
        }
        if (standardX<=-4200){
            standardX=-4200;
            limitX=false;
        }   
    }
    me.y++;
}
document.addEventListener("keydown",keyDownFlag,false);
document.addEventListener("keyup",keyUpFlag,false);
function keyDownFlag(e){
    if (e.key==="Right"||e.key==="ArrowRight"){
        pressed.right=true;
    }else if(e.key==="Left"||e.key==="ArrowLeft"){
        pressed.left=true;
    }else if(e.key==="Up"||e.key==="ArrowUp"){
        pressed.up=true;
    }
}
function keyUpFlag(e){
    if (e.key==="Right"||e.key==="ArrowRight"){
        pressed.right=false;
    }else if(e.key==="Left"||e.key==="ArrowLeft"){
        pressed.left=false;
    }else if(e.key==="Up"||e.key==="ArrowUp"){
        pressed.up=false;
    }
}
interval;