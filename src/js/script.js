$(document).ready(function(){
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev""><img src="./icons/chevron-left-solid.png" alt="" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/chevron-right-solid.png" alt="" /></button>',
        responsive : [
            {
                breakpoint: 768,
                settings : {
                    dots : true,
                    arrows : false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__tab_active').eq($(this).index()).addClass('catalog__tab_active');
      });

      function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
            })
          })
      };

      toggleSlide('.catalog-item__link')
      toggleSlide('.catalog-item__back')


      //Modal

    $('[data-modal=consultation]').on('click',function(){
        $('.overlay , #consultation').fadeIn()
    })
    $('.modal__modal__close').on('click',function(){
        $('.overlay,#consultation,#order,#success').fadeOut()
    })
    //Right price and descr
    $('.button_mini').each(function(i){
        $(this).on('click' ,function(){
            $('#order .modal__modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay,#order').fadeIn()
        })
    });

    const validateform = () => {
        $('.feed-form').each(function(){
            const message = $('.modal__modal__subtitle');
            console.log(message.text())
            const inputs = $(this).find('.inputs');
            const button = $(this).find('.button__submit');
            // Установить тип кнопки, чтобы предотвратить её поведение как кнопки отправки
            button.attr('type', 'button');

            button.on('click', function(event) {
                event.preventDefault(); // предотвращаем стандартную отправку формы
                let allFieldsFilled = true;
    
                inputs.each(function() {
                    if ($(this).val() === '') {
                        allFieldsFilled = false;
                    }
                });
    
                if (!allFieldsFilled) {
                    message.text('Пожалуйста, заполните все необходимые поля.');
                } else {
                    message.text('Получили ваше обращение')
                    setTimeout(()=>{
                        message.text('Просто заполните форму заявки')
                        
                    },2000)
                    
                    console.log('Форма готова к отправке!');
                    // Раскомментируйте следующую строку, если хотите отправить форму
                    // $(this).closest('form').submit();
                }
                console.log(message.text())
            });
        });
    };
    validateform() 
    
    
    //pageup
    $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
            $('.pageup').fadeIn();
        }
        else {
            $('.pageup').fadeOut();
        }
    });

    //close modal after submit
    const closeSubmitModal = () => {
        $('.overlay').each(function(){
            // Закрываем модальное окно при клике на подложку
            $(this).on('click', function(){
                $(this).fadeOut();
            });
            
            // Останавливаем всплытие события клика на содержимом модального окна
            $('.modal__modal').on('click', function(event){
                event.stopPropagation();
            });
        });
    };
    
    closeSubmitModal();
    
  });
  

