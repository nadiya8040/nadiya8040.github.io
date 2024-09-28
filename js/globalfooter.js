function showFooter() {
	const footer = document.getElementById('footer');
	const footer_div = document.createElement("div");
	footer_div.classname = "globalFooter";
	const date = new Date();
	let year = date.getFullYear();
	footer_div.innerHTML =
		'	<footer class="copyright">©' +
		year +
		'			by nadiya8040, Slightly edited by' +
		'		<a href="https://twitter.com/Jirachi6774">' +
		'			Jirachi6774' +
		'		</a>. Reconstructed by' +
		'		<a href="https://kirbysfan.github.io/kfan_homepage/">' +
		'			Kirbysfan' +
		'		</a>. Favicon by' +
		'		<a href="https://cara.app/deefanatic600">' +
		'			DeeFanatic600' +
		'		</a>. Formerly created with' +
		'		<a href=https://neocities.org>' +
		'			Neocities' +
		'		</a>. Proudly hosted by' +
		'		<a href=https://github.com>' +
		'			GitHub' +
		'		</a>.' +
		'	</footer>';
	footer.appendChild(footer_div);
}
setTimeout(showFooter(), 2);