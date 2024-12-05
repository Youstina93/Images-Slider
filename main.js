 // عناصر السلايدر
 const slides = document.querySelector('.slides');
 const slideItems = document.querySelectorAll('.slide');
 const prevButton = document.getElementById('prev');
 const nextButton = document.getElementById('next');

 // المتغيرات
 let currentIndex = 0;
 const totalSlides = slideItems.length;

 // دالة لتحديث السلايدر
 function updateSlider() {
     const offset = -currentIndex * 100; // يحسب الإزاحة بناءً على الفهرس
     slides.style.transform = `translateX(${offset}%)`;
 }

 // الانتقال إلى الصورة التالية
 nextButton.addEventListener('click', () => {
     currentIndex = (currentIndex + 1) % totalSlides; // يعيد إلى البداية إذا انتهت الصور
     updateSlider();
 });

 // الانتقال إلى الصورة السابقة
 prevButton.addEventListener('click', () => {
     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // يعيد إلى النهاية إذا كان أول صورة
     updateSlider();
 });


        // // التحكم في السلايدر التلقائي
        // let autoSlide;
        // function startAutoSlide() {
        //     autoSlide = setInterval(() => {
        //         currentIndex = (currentIndex + 1) % totalSlides;
        //         updateSlider();
        //     }, 3000);
        // }

        // function stopAutoSlide() {
        //     clearInterval(autoSlide);
        // }

        // // بدء السلايدر تلقائيًا
        // startAutoSlide();

        // // تعطيل السلايدر التلقائي عند الوقوف عليه
        // const slider = document.querySelector('.slider');
        // slider.addEventListener('mouseenter', stopAutoSlide);
        // slider.addEventListener('mouseleave', startAutoSlide);