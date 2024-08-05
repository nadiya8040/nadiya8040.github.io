
function showNav() {
    const nav = document.getElementById('nav');
    //#region Outer Nav
    const navbar_main = document.createElement("nav");
    navbar_main.className = "navbar navbar-expand-lg navbar-dark rocky-nav fixed-top";
    navbar_main.role = "banner";
    nav.appendChild(navbar_main);
    //#region Part1
    const nav_a = document.createElement("a");
    nav_a.className = "navbar-brand js-scroll-trigger";
    const s1 = document.createElement("span");
    s1.className = "d-block d-lg-none margin-banner";
    s1.innerHTML = 'Nadiverse';
    nav_a.appendChild(s1)
    const s2 = document.createElement("span");
    s2.className = "d-none d-lg-block logo";
    s2.innerHTML = "Nadiverse";

    nav_a.appendChild(s2);
    //#endregion
    //#region Part2
    const nav_b = document.createElement("button");
    nav_b.className = "navbar-toggler";
    nav_b.type = "button"
    nav_b.setAttribute("data-bs-toggle", "collapse");
    nav_b.setAttribute("data-bs-target", "#navbarResponsive");
    nav_b.setAttribute("aria-controls", "NavbarResponsive")
    nav_b.setAttribute("aria-expanded", "false");
    nav_b.setAttribute("aria-label", "Toggle navigation");
    const nav_b_s = document.createElement("span");
    nav_b_s.className = "navbar-toggler-icon";
    nav_b.appendChild(nav_b_s);
    //#endregion
    //#region Part3
    const nav_c = document.createElement("div");
    nav_c.className = "collapse navbar-collapse special";
    nav_c.id = "navbarResponsive"
    //#region Navigation
    const nav_ul = document.createElement("ul");
    nav_ul.className = "navbar-nav mr-auto mt-2 mt-lg-0"
    //#region li
    const l1 = document.createElement("li");
    const l2 = document.createElement("li");
    const l3 = document.createElement("li");
    const l4 = document.createElement("li");
    const l5 = document.createElement("li");
    const l6 = document.createElement("li");
	const l7 = document.createElement("li");

    //#endregion
    //#region li class="nav-item"
    l1.className = "nav-item";
    l2.className = "nav-item";
    l3.className = "nav-item";
    l4.className = "nav-item";
    l5.className = "nav-item";
    l6.className = "nav-item";
	l7.className = "nav-item";

    //#endregion
    //#region a
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    const a4 = document.createElement("a");
    const a5 = document.createElement("a");
    const a6 = document.createElement("a");
	const a7 = document.createElement("a");

    //#endregion
    //#region a class="nav-link"
    a1.className = "nav-link";
    a2.className = "nav-link";
    a3.className = "nav-link";
    a4.className = "nav-link";
    a5.className = "nav-link";
    a6.className = "nav-link";
	a7.className = "nav-link";
    //#endregion
    //#region a href
    a1.href = "index.html";
    a2.href = "introduction.html";
    a3.href = "games.html";
    a4.href = "series.html";
    a5.href = "artworks.html";
    a6.href = "fanarts.html";
	a7.href = "forms.html";
    //#endregion
    //#region a innerHTML
    a1.innerHTML = "Home";
    a2.innerHTML = "Introduction";
    a3.innerHTML = "Games";
    a4.innerHTML = "Series";
    a5.innerHTML = "Artworks";
    a6.innerHTML = "Fanarts";
	a7.innerHTML = "Forms";
    //#endregion
    l1.appendChild(a1);
    l2.appendChild(a2);
    l3.appendChild(a3);
    l4.appendChild(a4);
    l5.appendChild(a5);
    l6.appendChild(a6);
	l7.appendChild(a7);
    nav_ul.appendChild(l1);
    nav_ul.appendChild(l2);
    nav_ul.appendChild(l3);
    nav_ul.appendChild(l4);
    nav_ul.appendChild(l5);
    nav_ul.appendChild(l6);
    nav_ul.appendChild(l7);

    //#endregion
    //#region Gap
    const gap = document.createElement("div")
    gap.className = "nav-gap";
    //#endregion
    nav_c.appendChild(nav_ul);
    nav_c.appendChild(gap);
    //#endregion
    //#region styles
    navbar_main.style = "background-color: #FF6F00";
    s1.style = "margin-left: 16px";
    nav_b.style = "margin-right: 16px";
    nav_ul.style = "background-color: #FF6F00; text-align: center;"
    //#endregion
    navbar_main.appendChild(nav_a);
    navbar_main.appendChild(nav_b);
    navbar_main.appendChild(nav_c);
    //#endregion
}
window.onload = showNav;