const fullParallax = document.querySelector('.parallax');
const main = document.querySelector('main');
const control = document.querySelector('.control');
const btn = document.querySelector('.page-control');

const background = document.querySelector('.background-moon');
const backgroundStars = document.querySelector('.background-stars');
const title = document.querySelector('.title');
const branches = document.querySelector('.branches');
const bigTrees = document.querySelector('.tree-zero');
const treeOne = document.querySelector('.tree-one');
const treeTwo = document.querySelector('.tree-two');

const verificaTela = window.innerWidth<=1200;
let jaFoi = false;

document.addEventListener('scroll', () => {
    const value = window.scrollY;
    if (value<800) {
        if (!(window.innerWidth<=1300)){
            treeOne.style.marginLeft = value * .1 + 'px';
            treeTwo.style.marginRight = value * .1 + 'px';
        }

        treeOne.style.opacity = 1 - (value/1000);
    
        treeTwo.style.opacity = 1 - (value/1000);
    
        bigTrees.style.marginBottom = value * 1.1 + 'px';
        bigTrees.style.transform = `scale(${1 - (value * .0001)})`;
        
        branches.style.marginTop = value * .3 + 'px';
        
        screenWidthController(value);
        
        backgroundStars.style.transform = `scale(${1 - (value * .0005)})`;
        background.style.transform = `scale(${1 - (value * .0005)})`;
        background.style.marginTop = value * 2 + 'px';
        background.style.opacity = 1 - (value/400);
    
        title.style.marginTop = value * 4 + 'px';
        title.style.opacity = 1 - (value/800);
        console.log(value)
    } else {
        alteraDisplay();
    };
});

function screenWidthController (value) {
    if (value > 200) {
        title.style.display = 'none';
    } else {
        title.style.display = 'block';
    }

    if (value > 400) {
        background.style.display = 'none';
    } else {
        background.style.display = 'block';
    };

    if (value > 800) {
        bigTrees.style.display = 'none';
    } else {
        bigTrees.style.display = 'block';
    };
};

btn.addEventListener('click', () => {
    fullParallax.classList.toggle('no-display');
    btn.classList.add('hide');
});

if(verificaTela) {
    alteraDisplay();
    alert('Parallax effect works only for pc!');
};

function toggleDisplay() {
    fullParallax.classList.toggle('no-display');
    control.classList.toggle('no-display');
}

function alteraDisplay() {
    if (jaFoi) {
        return;
    };

    main.classList.toggle('hide');
    if(!verificaTela) {
        setTimeout(() => {
            btn.classList.toggle('hide');
        },1000);
    }
    
    toggleDisplay();
    jaFoi = true;
};