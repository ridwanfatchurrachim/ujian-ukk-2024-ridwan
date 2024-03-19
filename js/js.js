var inputan=document.getElement BYId ('inputan');
	function tombol (obj){
		var kondisi = obj.inner HTML;
		if(kondisi =="="){
			inputan. inner HTML =inputan.inner HTML.slice(0,-1)||'0';
		}else if(kondisi =="AC"){
			inputan.inner HTML ="0";
		}else {
			if(inputan.inner HTML =="0"){
		}else{
			inputan.inner HTML +=kondisi
		}
	}
}