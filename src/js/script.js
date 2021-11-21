
document.querySelectorAll('.tabs__title').forEach((tab) => {
    tab.addEventListener('click', function () {
        const parent = tab.parentNode;
        if (parent.classList.contains('tabs__open')) {
            parent.classList.remove('tabs__open');
        } else {
            document.querySelectorAll('tabs__item').forEach((child) =>
                child.classList.remove('tabs__open'))
            parent.classList.add('tabs__open')
        }
    })
})

