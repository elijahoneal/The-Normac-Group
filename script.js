const navSlide = () =>{
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        //Toggle Nav
    
        nav.classList.toggle('nav-active');
        //Animate Links

        

        //Burger Animation
        burger.classList.toggle('toggle');

        console.log('print')
    });

    
}

navSlide();