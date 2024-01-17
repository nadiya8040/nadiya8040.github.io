function showHeader() {
	const header = document.getElementById('header');
	const header_div = document.createElement("div");
	header_div.classname = "globalHeader";
	header_div.innerHTML =   
'	<div class="title">'+
'		<img src="./Assets/Nadiya Avatar.png" width="100" height="100" alt="Nadiverse">'+
'			<div class="gap"></div>'+
'	</div>';
	header.appendChild(header_div);
}
setTimeout(showHeader(),1);