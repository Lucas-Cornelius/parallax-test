const fullParallax = document.querySelector('.parallax');
const main = document.querySelector('main');
const control = document.querySelector('.control');

const background = document.querySelector('.background-moon');
const title = document.querySelector('.title');
const branches = document.querySelector('.branches');
const bigTrees = document.querySelector('.tree-zero');
const treeOne = document.querySelector('.tree-one');
const treeTwo = document.querySelector('.tree-two');

const verificaTela = window.innerWidth<=1200;
let jaFoi = false;

document.addEventListener('scroll', () => {
    const value = window.scrollY;
    if (value<900) {
        treeOne.style.marginLeft = value * .1 + 'px';
        treeOne.style.opacity = 1 - (value/1000);
    
        treeTwo.style.marginRight = value * .1 + 'px';
        treeTwo.style.opacity = 1 - (value/1000);
    
        bigTrees.style.marginTop = value * .9 + 'px';
    
        branches.style.marginTop = value * .2 + 'px';
    
        background.style.marginTop = value * 1.8 + 'px';
        background.style.opacity = 1 - (value/400);
    
        title.style.marginTop = value * .7 + 'px';
        title.style.opacity = 1 - (value/800);
    } else {
        alteraDisplay();
    };

});

if(verificaTela) {
    alteraDisplay();
};

function alteraDisplay() {
    if (jaFoi) {
        return;
    }

    main.classList.toggle('hide');
    
    fullParallax.classList.toggle('no-display');
    control.classList.toggle('no-display');
    jaFoi = true;
};