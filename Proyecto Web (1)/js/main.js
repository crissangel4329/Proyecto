
    const btn = document.querySelector('#menu-btn');
    const menu = document.querySelector('#sidemenu');
    btn.addEventListener('click', e =>{
        menu:menu.Toggle("menu-expanded");
        menu:menu.Toggle("menu-collapsed");
        document.querySelector('body').classList.Toggle('body-expanded')
    });
