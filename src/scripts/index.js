import { menu } from "./data.js";

let ulMenu = document.querySelector('.ulMenu');

function renderMenu(array){
    array.forEach(element => {
        let liMenu = document.createElement('li');
        let icone = document.createElement('i');

        liMenu.className='liMenu';
        icone.className='fa-solid fa-angle-down';
        icone.style.color='rgb(180, 180, 180)';
        liMenu.innerText=`${element.title}`;

        ulMenu.appendChild(liMenu);
        ulMenu.appendChild(icone);

        liMenu.addEventListener('click', ()=>{
            if(liMenu.className=='liMenu'){
                icone.style.rotate='180deg';
                liMenu.classList.remove('liMenu');
                liMenu.classList.add('clicado');
                let subMenu=renderSubMenu(element.text);
                liMenu.appendChild(subMenu);
            }
            else{
                var node = document.querySelector('.ulSubMenu');
                if (node.parentNode) {
                node.parentNode.removeChild(node);
                }
                icone.style.rotate='0deg';
                liMenu.classList.remove('clicado');
                liMenu.classList.add('liMenu');
            }
            
        })
    });
}

renderMenu(menu);

function renderSubMenu(array){
    let ulSubMenu = document.createElement('ul');
    ulSubMenu.innerHTML='';
    ulSubMenu.className='ulSubMenu';
    array.forEach(element => {
        let liSubMenu = document.createElement('li');
        
        liSubMenu.className='liSubMenu';
        liSubMenu.innerText=element;
        
        ulSubMenu.appendChild(liSubMenu);

        liSubMenu.addEventListener('click', ()=>{
            window.location.replace('./src/pages/default.html');
        });
    });
    return ulSubMenu;
}

let btnNewAccountHeader = document.querySelector('#btnNewAccountHeader');

btnNewAccountHeader.addEventListener('click', (event)=>{
    event.preventDefault();
    let dialogModal = document.querySelector('#dialogModal');
    dialogModal.showModal();
    let closeModal = document.querySelector('.closeModal');
    closeModal.addEventListener('click', (event)=>{
        event.preventDefault();
        dialogModal.close();
    });
});