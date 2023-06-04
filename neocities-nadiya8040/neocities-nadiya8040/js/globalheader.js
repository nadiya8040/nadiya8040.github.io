function showHeader() {
    const header = document.getElementById('header');
    const header_div = document.createElement("div");
    header_div.classname = "globalHeader";
    header_div.innerHTML =   
'     <div class="title">'+
'         <img src="./Assets/Nadiya Avatar.png" width="100" height="100" alt="Nadiverse">'+
'             <div class="gap"></div>'+
'         <div>'+
'             <script type=\'text/javascript\' src=\'https://storage.ko-fi.com/cdn/widget/Widget_2.js\'></script>'+
'             <script type=\'text/javascript\'>'+
'                 kofiwidget2.init(\'Support Me on Ko-fi\', \'#29abe0\', \'D1D3796XR\'); kofiwidget2.draw();'+
'             </script>'+
'         </div>'+
'     </div>';
    header_div.appendChild=(header_div);
}
window.onload = showHeader;