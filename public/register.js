console.log('register.js Start')

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((reg) => {
                console.log('Service Worker registered.', reg);
            });
    });
}

console.log('register.js Finish')
