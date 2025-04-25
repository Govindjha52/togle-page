$(function() {
    const hideMenus = () => {
        $('.sub-element, .sub-element2').hide().css({ transform: 'translateX(100%)', opacity: 0 });
        $('.combine').css({ right: '0%' });
    };

    const animateMenu = ($el, shift) => {
        $el.show().css({ transform: 'translateX(100%)', opacity: 0 }).animate({ opacity: 1 }, {
            duration: 300,
            step: (_, fx) => fx.prop === 'opacity' && $el.css('transform', 'translateX(0)')
        });
        $('.combine').css({ right: shift });
    };

    hideMenus();

    $('.catg > a, .about > a, .Brands > a, .News > a, .Career > a, .Contact > a').click(function(e) {
        e.preventDefault();
        const $menu = $(this).siblings('.sub-element');
        if ($menu.is(':visible')) {
            hideMenus();
        } else {
            $('.sub-element').not($menu).hide().css({ transform: 'translateX(100%)', opacity: 0 });
            $('.sub-element2').hide().css({ transform: 'translateX(100%)', opacity: 0 });
            animateMenu($menu, '30%');
        }
    });

    $('.sub-element > li > a').click(function(e) {
        e.preventDefault();
        const $subMenu = $(this).siblings('.sub-element2');
        if ($subMenu.is(':visible')) {
            $subMenu.hide().css({ transform: 'translateX(100%)', opacity: 0 });
            $('.combine').css({ right: '30%' });
        } else {
            $('.sub-element2').not($subMenu).hide().css({ transform: 'translateX(100%)', opacity: 0 });
            animateMenu($subMenu, '60%');
        }
    });

    // Reset on toggler close
    $('#navbarToggleExternalContent').on('hidden.bs.collapse', hideMenus);
});