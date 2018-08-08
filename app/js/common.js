$(function() {
    $('.comment .popup-gallery').magnificPopup({
         delegate: 'a',
         type: 'image',
         tLoading: 'Загрузка изображения #%curr%...',
         gallery: {
             enabled: true,
             navigateByImgClick: true,
             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
         }
    });
    $('.example .popup-gallery').magnificPopup({
         delegate: 'a',
         type: 'image',
         tLoading: 'Загрузка изображения #%curr%...',
         gallery: {
             enabled: true,
             navigateByImgClick: true,
             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
         }
    });
});