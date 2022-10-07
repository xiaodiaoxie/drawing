var zbx=0;
var zby=0;
var sc=0;
var zbxed=0;
var zbyed=0;
var ms=0;
var r=0;
var g=0;
var b=0;
var sr="00";
var sg="00";
var sb="00";
var ys="#000000"

setInterval(
    function main(){
        if(sc==1){
            var p=document.getElementById("hb");
            var cxt=p.getContext("2d");
            cxt.strokeStyle=ys;
            cxt.moveTo(zbxed,zbyed);
            cxt.lineTo(zbx,zby);
            cxt.stroke();

            if(ms==1||ms==2){
                var p=document.getElementById("hb");
                var cxt=p.getContext("2d");
                cxt.strokeStyle=ys;
                cxt.moveTo(1200-zbxed,zbyed);
                cxt.lineTo(1200-zbx,zby);
                cxt.stroke();
            }

            if(ms==2){
                var p=document.getElementById("hb");
                var cxt=p.getContext("2d");
                cxt.strokeStyle=ys;
                cxt.moveTo(zbxed,700-zbyed);
                cxt.lineTo(zbx,700-zby);
                cxt.moveTo(1200-zbxed,700-zbyed);
                cxt.lineTo(1200-zbx,700-zby);
                cxt.stroke();
            }

            zbxed=zbx;
            zbyed=zby;

            

        }
        
        
    }
    ,10)

    onmousemove = function (a) {
            zbx=a.x;
            zby=a.y;

            document.getElementById('zb').innerHTML = zbx+","+zby+","+zbyed+","+zbyed; 
        };

setInterval(
    function submain(){
        r=+document.getElementById('R').value;
        g=+document.getElementById('G').value;
        b=+document.getElementById('B').value;

        if(r>255){
            r=255;
        }
        if(g>255){
            g=255;
        }
        if(b>255){
            b=255;
        }

        if(r<16){
            sr="0"+r.toString(16);
        }
        else{
            sr=r.toString(16);
        }

        if(g<16){
            sg="0"+g.toString(16);
        }
        else{
            sg=g.toString(16);
        }

        if(b<16){
            sb="0"+b.toString(16);
        }
        else{
            sb=b.toString(16);
        }


        ys="#"+sr+sg+sb;

        document.getElementById('ysxs').innerHTML = "颜色显示("+r+","+g+","+b+")"+ys; 

        document.getElementById('yscs').style.backgroundColor=ys;



    }
    ,10)

onmousedown = function sj1(){
    sc=1;
    zbxed=zbx;
    zbyed=zby;
}

onmouseup = function sj2(){
    sc=0;
}

function sj3(){
    ms=ms+1;
    if(ms==3){
        ms=0;
    }
    if(ms==0){
        document.getElementById('mss').innerHTML = "正常模式"; 
    }
    if(ms==1){
        document.getElementById('mss').innerHTML = "镜像模式1"; 
    }
    if(ms==2){
        document.getElementById('mss').innerHTML = "镜像模式2"; 
    }
}

function sj4(){
    var p=document.getElementById("hb");
    var cxt=p.getContext("2d");
    p.height=p.height;
}