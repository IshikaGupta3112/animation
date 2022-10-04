function start(){
    document.getElementById('ravan').style.visibility="visible";    
	let arrow = document.getElementById("arrow");
    setTimeout(ram,1000);
    function ram(){
    document.getElementById('ram').style.visibility="visible";
    document.getElementById('arrow').style.visibility="visible";
    }
    setTimeout(get,2000);
    function get(){
        document.body.style.background="radial-gradient(red,yellow)"
        setTimeout(gone , 1450);
        setTimeout(day,1700);
        function gone(){
            document.getElementById('ravan').style.display='none';
            document.getElementById('arrow').style.display='none';
            document.getElementById('dead').style.visibility="visible";    
        }
        function day(){
            document.body.style.background="radial-gradient(grey , brown)";
        }
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
		pos +=5;
	}
    }
}