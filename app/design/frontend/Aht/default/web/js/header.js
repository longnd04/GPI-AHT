function moveCartToMenu() {
    const toggleNav = document.querySelector('.action.nav-toggle');
    const cart = document.querySelector('.minicart-wrapper');
    const headerNav = document.querySelector('.header-nav');
    const headerPanel = document.querySelector('.header.panel');
    const contentArea = document.querySelector('#contentarea')
    const blockSearch = document.querySelector('.block.block-search')
    const logo = document.querySelector('.logo')
    if (window.innerWidth <= 1024) {
        if (blockSearch && contentArea) {
            contentArea.parentNode.insertBefore(blockSearch, contentArea.nextSibling)
        }
        if (headerNav && toggleNav) {
            headerNav.parentNode.insertBefore(toggleNav, headerNav.nextSibling);
        }
        if (cart && toggleNav) {
            toggleNav.appendChild(cart);
        }
    } else {
        if (headerPanel && cart) {
            headerPanel.appendChild(cart);
        }
        if (logo && blockSearch) {
            logo.parentNode.insertBefore(blockSearch, logo.nextSibling)
        }
    }
}

window.addEventListener('resize', moveCartToMenu);
window.addEventListener('load', moveCartToMenu);
