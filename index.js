document.getElementById('menu-toggle').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('.menu-item').forEach(function (item) {
    item.addEventListener('click', function () {
        var mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.add('hidden');
    });
});