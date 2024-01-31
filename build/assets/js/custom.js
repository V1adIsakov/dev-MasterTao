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

    const AllCheckBoxes = document.querySelectorAll('[type=checkbox]');
    
    if(AllCheckBoxes.length > 0) {
      AllCheckBoxes.forEach(checkbox => {
        checkbox.closest('.input-column').classList.add('checked');
      })
    } 

    const Allinputs = document.querySelectorAll('.input-file');

    if(Allinputs.length > 0) {
      Allinputs.forEach(item => {
        item.closest('.input-column').style.minheight = '56px'
      })
    }


    
    function addClassCharter() {
      const section = document.querySelectorAll('section')
      section.forEach(item => item.classList.add('charter'))
    }
    
    document.querySelector('.home-page') ? addClassCharter() : null;

});
  
  