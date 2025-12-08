// Анимация QR-кода при клике
const qr = document.querySelector('.telegram-qr img');

qr.addEventListener('click', () => {
    qr.style.transform = 'scale(1.2)';
    setTimeout(() => {
        qr.style.transform = 'scale(1)';
    }, 200);
});
