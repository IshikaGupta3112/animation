function start(){
    var audio = new Audio('sound.mp3');
    audio.play();
    document.getElementById('btn').style.display="none";
    document.getElementById('ravan').style.visibility="visible";    
	let arrow = document.getElementById("arrow");
    setTimeout(ram,1000);
    function ram(){
    document.getElementById('ram').style.visibility="visible";
    document.getElementById('arrow').style.visibility="visible";
    }
    setTimeout(get,5000);
    function get(){
        document.body.style.background="linear-gradient(45deg ,yellow,orange,red)"   
	setInterval(move,10);
	var pos= 0;
	let w = 550;
	function move(){
		if (pos >= w){
		pos= w + "px"
		}  
        else{
		arrow.style.marginLeft = pos +"px";
		}
		pos +=4.5;
	}
}
     setTimeout(gone ,7000);
     function gone(){
        document.getElementById('ravan').style.display='none';
        document.getElementById('arrow').style.display='none';
        document.getElementById('dead').style.visibility="visible"; 
        document.body.style.background="linear-gradient(45deg,brown , grey)";   
    }
     setTimeout(end ,8000);
    function end(){
    document.getElementById('diya').style.visibility="visible";
    document.getElementById('diya2').style.visibility="visible";
    document.getElementById('dead').style.visibility="hidden";  
    document.getElementById('ram').style.visibility="hidden";
    document.body.style.background="linear-gradient(45deg,pink , green)"
    } 
    setTimeout(text , 9000);
    function text(){
        document.getElementById('end').style.visibility="visible";
        setInterval(func , 2000);
        setInterval(func5 , 2000);
        function func(){
            document.getElementById('diya').style.opacity='0.25';
            setTimeout(func3,500);
             function func3(){
            document.getElementById('diya').style.opacity='0.5';
             }
            setTimeout(func2,1000);
             function func2(){
            document.getElementById('diya').style.opacity='0.7';
             }
             setTimeout(func4,1500);
             function func4(){
            document.getElementById('diya').style.opacity='1';
             }
        }
        function func5(){
            document.getElementById('diya2').style.opacity='0.25';
            setTimeout(func6,500);
             function func6(){
            document.getElementById('diya2').style.opacity='0.5';
             }
            setTimeout(func7,1000);
             function func7(){
            document.getElementById('diya2').style.opacity='0.75';
             }
             setTimeout(func8,1500);
             function func8(){
            document.getElementById('diya2').style.opacity='1';
             }
        }
    }
    setTimeout(()=>{
        window.location.reload(true);
    }, 21000);

}