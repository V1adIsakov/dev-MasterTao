$(document).ready(function(){

  $('#banner').slick({
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  const burger = document.querySelector('.btn-burger');
  const navigation = document.querySelector('.header__navigation');
 
 
  console.log(burger);
 
  function Menu() {
    burger.classList.toggle('open')
    navigation.classList.toggle('show');
    console.log('click!)');
  }


  burger.addEventListener('click', Menu);




    const fileInput = document.querySelector('#fileInput');
    const fileName = document.querySelector('#file-name')


    fileInput.addEventListener('change', function() {
      fileName.innerHTML = this.value;
      //fileName.innerHTML = this.files[0].name;
    });

    const typeCheckBox = document.querySelector('[type=checkbox]');

    typeCheckBox.closest('.input-column').classList.add('checked');
});
  
  