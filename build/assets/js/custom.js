  const burger = document.querySelector('.btn-burger');
  const navigation = document.querySelector('.header__navigation');
 
 
  console.log(burger);
 
  function Menu() {
    burger.classList.toggle('open')
    navigation.classList.toggle('show');
    console.log('click!)');
  }


  burger.addEventListener('click', Menu);
