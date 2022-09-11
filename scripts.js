window.addEventListener('DOMContentLoaded', event => {

    /*var navbarTransform = function () {
        const navbarCollapsible = document.body.querySelector('#mainNavContainer');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY < 100) {
            navbarCollapsible.classList.remove('navbar-transform');
        } else {
            navbarCollapsible.classList.add('navbar-transform');
        }

    };
 
    navbarTransform();

    // Change css of the navbar when page is scrolled
    document.addEventListener('scroll', navbarTransform);*/

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});