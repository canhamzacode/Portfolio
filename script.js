const showNav = document.querySelector(".show__nav");
const hideNav = document.querySelector(".hide__nav");
const navItem = document.querySelector(".nav__item");
const insetExperience = document.querySelector(".experience__right");
const alx = document.getElementById("alx");
const zuri = document.getElementById("zuri");
const freeCode = document.getElementById("free");
const klemweb = document.getElementById("klemweb");
var theme = document.getElementById("dark");
const logo = document.getElementById("logo");
const hero = document.getElementById("hero");

theme.onclick = () => {
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
        theme.src = "img/moon.svg";
        logo.src = "img/Logo (1).svg";
        hero.src = "img/front (1).svg";
    }
    else {
        theme.src = "img/sun.svg";
        logo.src = "img/Logo.svg";
        hero.src = "img/front.svg";
        // C:\Users\USER\Desktop\zuri\second portfolio\img\front.svg
        // C:\Users\USER\Desktop\zuri\second portfolio\img\front (1).svg

    }
}

freeCode.addEventListener("click", () => {
    alx.classList.remove("active")
    zuri.classList.remove("active")
    freeCode.classList.add("active")
    klemweb.classList.remove("active")
    insetExperience.innerHTML = `
    <h3>Fullstack Trainee FreecodeCamp</h3>
    <p>Remote</p>
    <p> August 2022 - Present </p>
    <button class="btn-primary">CSS</button>
    <button class="btn-primary">HTML</button>
    <button class="btn-primary">Java Script</button>
    <div class="impact">
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Hands on Training with html and css.</P>
        </li>
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Building simple landing pages with HTML and CSS.
            </P>
        </li>
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Proper understanding of responsiveness.</P>
        </li>
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Tackling problems dealing with accessiility issue</P>
        </li>
    </div>
    `
})
klemweb.addEventListener("click", () => {
    alx.classList.remove("active")
    zuri.classList.remove("active")
    freeCode.classList.remove("active")
    klemweb.classList.add("active")
    insetExperience.innerHTML = `
    <h3>Fullstack Trainee Klemweb</h3>
    <p>Remote</p>
    <p> March 2022 - Present </p>
    <button class="btn-primary">HTML</button>
    <button class="btn-primary">CSS</button>
    <button class="btn-primary">Java Script</button>
    <button class="btn-primary">Node JS</button>
    <div class="impact">
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Learning Data Structure and algorithm</P>
        </li>
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Collaborate with web designers and content creators to improve update an the design of an existing website.
            </P>
        </li>
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Building a fashion website to help display brand information and generate more awareness</P>
        </li>
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Building a functional webapp with html, css, javascript and nodejs.</P>
        </li>
    </div>
    `
})
alx.addEventListener("click", () => {
    alx.classList.add("active")
    zuri.classList.remove("active")
    freeCode.classList.remove("active")
    klemweb.classList.remove("active")
    insetExperience.innerHTML = `
    <h3>Software Engineering Trainee Alx</h3>
    <p>Remote</p>
    <p> August 2022 - Present </p>
    <button class="btn-primary">HTML</button>
    <button class="btn-primary">CSS</button>
    <button class="btn-primary">Java Script</button>
    <div class="impact">
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Learning Data Structure and algorithm</P>
        </li>
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Collaborate with back-end developers and web designers to improve usability of a webapp.
            </P>
        </li>
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Getting used to working and colaborating with other devs to come up with amaizing
                results.</P>
        </li>
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Hand on training with technologies like C Programming to build amaizing projects.</P>
        </li>
    </div>
    `
})
zuri.addEventListener("click", () => {
    alx.classList.remove("active")
    zuri.classList.add("active")
    freeCode.classList.remove("active")
    klemweb.classList.remove("active")
    insetExperience.innerHTML = `
    <h3>Fullstack Development Intern ZURI</h3>
    <p>Remote</p>
    <p> September 2022 - Present </p>
    <button class="btn-primary">HTML</button>
    <button class="btn-primary">CSS</button>
    <button class="btn-primary">Java Script</button>
    <button class="btn-primary">Node JS</button>
    <button class="btn-primary">Mongo DB</button>
    <div class="impact">
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Learning how the web works</P>
        </li>
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Building respnsive web applications across all viewport.
            </P>
        </li>
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Getting used to working and colaborating with other devs to come up with amaizing
                results.</P>
        </li>
        <li>
            <img src="img/Above title line.png" alt="line">
            <P>Hand on training with CRUD applicatons and apis using node and mongodb.</P>
        </li>
    </div>
    `
})



showNav.addEventListener("click", showNavItem = () => {
    navItem.style.display = "flex";
    showNav.style.display = "none";
    hideNav.style.display = "block";
});

hideNav.addEventListener("click", showNavItem = () => {
    navItem.style.display = "none";
    showNav.style.display = "block";
    hideNav.style.display = "none";
});

