var inputan=document.getElementBYId('inputan');
	function tombol(obj){
		var kondisi = obj.innerHTML;
		if(kondisi =="="){
			inputan.innerHTML= eval (inputan.innerHTML);
		}else if(kondisi =="Del"){
			inputan.innerHTML = inputan.innerHTML.slice(0,-1)||'0';
		}else if(kondisi =="AC"){
			inputan.innerHTML ="0";
		}else{
			if(inputan.innerHTML =="0"){
				inputan.innerHTML = kondisi;
		}else{
			inputan.innerHTML += kondisi;
		}
	}
}