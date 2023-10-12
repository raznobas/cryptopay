if (process.client) {
    document.addEventListener('DOMContentLoaded', function () {
        const slider = document.querySelector('.slider');
        const main = document.querySelector('.main');
        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.nav-dot');

        let currentIndex = 0;
        let isVertical = true; // Переменная для определения направления прокрутки

        // Функция для обновления активной точки навигации
        function updateNavDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            if (isVertical) {
                const translateY = -index * 100; // 100% для каждого слайда по вертикали
                main.style.transform = `translateY(${translateY}%)`;
            } else {
                const translateX = -index * 100; // 100% для каждого слайда по горизонтали
                main.style.transform = `translateX(${translateX}%)`;
            }
            updateNavDots();
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
        });

        slider.addEventListener('wheel', (e) => {
            if (isVertical) {
                if (e.deltaY > 0 && currentIndex < sections.length - 1) {
                    goToSlide(currentIndex + 1);
                } else if (e.deltaY < 0 && currentIndex > 0) {
                    goToSlide(currentIndex - 1);
                }
            } else {
                if (e.deltaX > 0 && currentIndex < sections.length - 1) {
                    goToSlide(currentIndex + 1);
                } else if (e.deltaX < 0 && currentIndex > 0) {
                    goToSlide(currentIndex - 1);
                }
            }
        }, { passive: true });

        let touchStartX = 0;
        let touchEndX = 0;

        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchEndX - touchStartX;

            if (isVertical) {
                if (deltaX > 50 && currentIndex > 0) {
                    goToSlide(currentIndex - 1);
                } else if (deltaX < -50 && currentIndex < sections.length - 1) {
                    goToSlide(currentIndex + 1);
                }
            } else {
                if (deltaX > 50 && currentIndex > 0) {
                    goToSlide(currentIndex - 1);
                } else if (deltaX < -50 && currentIndex < sections.length - 1) {
                    goToSlide(currentIndex + 1);
                }
            }
        }, { passive: true });

        // Переключение направления прокрутки на маленьких экранах
        function toggleDirection() {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 1198) {
                isVertical = false; // Переключение на горизонтальное направление
            } else {
                isVertical = true; // Вертикальное направление
            }
            goToSlide(currentIndex); // Обновляем текущий слайд после смены направления
        }

        window.addEventListener('load', toggleDirection);
        window.addEventListener('resize', toggleDirection);

        // Первоначальная активация первого слайда
        goToSlide(currentIndex);
    });
}
