// Les elments du DOM
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Vérification la préférence système
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme:dark)');

// Vérification le localStorage
const currentTheme = localStorage.getItem('theme');

// Appliquer le thème initial
if (currentTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;
}else if (currentTheme === 'light') {
    htmlElement.setAttribute('data-theme', 'light');
    themeToggle.checked = false;
} else if (prefersDarkScheme.matches){
    htmlElement.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;
}

// Gérer le changement de thème
const handlerMode = function(){
    if (this.checked) {
        htmlElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light');
    }
};
themeToggle.addEventListener('change', handlerMode);

// Mettre à jour si la préférence système change
const updatePre = (e)=>{
if (!localStorage.getItem('theme')) {
    if (e.matches) {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
    } else {
            htmlElement.setAttribute('data-theme', 'light');
            themeToggle.checked = false;
        }
    }
}

prefersDarkScheme.addEventListener('change', updatePre)