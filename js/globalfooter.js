function showFooter() {
	const footer = document.getElementById('footer');
	const footer_div = document.createElement("div");
	footer_div.classname = "globalFooter";
	footer_div.innerHTML =  
'	<footer class="copyright">©'+
'		<script src="Copyright.js"></script>'+
'			by nadiya8040, Slightly edited by'+
'		<a href="https://twitter.com/Jirachi6774">'+
'			Jirachi6774'+
'		</a>. Reconstructed by'+
'		<a href="https://kirbysfan.github.io/kfan_homepage/">'+
'			Kirbysfan'+
'		</a>. Formerly created with'+
'		<a href=https://neocities.org>'+
'			Neocities'+
'		</a>. Proudly hosted by'+
'		<a href=https://github.com>'+
'			GitHub'+
'		</a>.'+
'	</footer>';
	footer.appendChild(footer_div);
}
setTimeout(showFooter(),2);