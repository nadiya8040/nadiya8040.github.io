function showFooter() {
    const footer = document.getElementById('footer');
    const footer_div = document.createElement("div");
    footer_div.classname = "globalFooter";
    footer_div.innerHTML =  
'     <footer class="copyright">©'+
'         <script src="Copyright.js"></script>'+
'             by Nadiya Bloby Origia, Slightly edited by'+
'         <a href="https://twitter.com/Jirachi6774">'+
'             Jirachi6774'+
'         </a>. Reconstructed by'+
'         <a href="https://kirbysfan.github.io/kfan_homepage/">'+
'             Kirbysfan'+
'         </a>. Proudly created with'+
'         <a href=https://neocities.org>'+
'             Neocities'+
'         </a>.'+
'     </footer>';
    footer.appendChild(footer_div);
}
setTimeout(showFooter(),2);