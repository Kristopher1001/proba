(() => {
    const openClassName = 'navigation__items--open';

    const toggleMobileNavigation = () => {
        document.querySelector('.js-navigation__items').classList.toggle(openClassName);
    };

    const hideMobileNavigation = () => {
        document.querySelector('.js-navigation__items').classList.remove(openClassName);
    };

    const toggleMobileOnButtonClick = () => {
        document.querySelector('.js-navigation__mobile-button').addEventListener('click', toggleMobileNavigation);
    };

    const hideMobileNavigationOnNavigationClick = () => {
        document.querySelector('.js-navigation__items').addEventListener('click', (event) => {
            const closestA = event.target.closest('a');

            if (closestA) {
                hideMobileNavigation();
            }
        });
    };

    toggleMobileOnButtonClick();
    hideMobileNavigationOnNavigationClick();
})();