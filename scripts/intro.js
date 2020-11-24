const loadBrandSection = new IntersectionObserver(
    function(entries, loadBrandSection){
        entries.forEach(entry => {
            const letters = document.querySelectorAll('.letter');
            const description = document.querySelector('.brand_description');

            if (entry.isIntersecting) {
                for (i = 0; i < letters.length; ++i) {
                    letters[i].style.animation = `fall .8s ${letters[i].dataset.delay} ease forwards`;                
                }   description.style.animation = `appear 1s ${description.dataset.delay} ease forwards`;

            }else{
                for (i = 0; i < letters.length; ++i) {
                    letters[i].style.animation = `disappear .2s both ease-in`;
                }   description.style.animation = `disappear .2s .1s both ease-in`;            
            }
        })
    }, {threshold: .5});


const loadInfoSection_birds = new IntersectionObserver(
    function(entries, loadInfoSection_birds){
        entries.forEach(entry=> {
            const birds = document.querySelectorAll('.bird');
            
            if (entry.isIntersecting){
                birds.forEach(bird => { bird.style.animation = `appear .2s ${bird.dataset.delay} forwards ease-in` });
            } else {
                birds.forEach(bird => { bird.style.animation = `disappear .2s forwards ease-in` });        
            }
        })
    }, { threshold: .8 });


const loadInfoSection_info = new IntersectionObserver(
    function(entries, loadInfoSection_info){
        entries.forEach(entry=> {            
            if (entry.isIntersecting){
                entry.target.style.animation = `appear .4s forwards ease-in`;
            } else {
                entry.target.style.animation = `disappear .2s forwards ease-in`;
            }
        })
    }, { threshold: .8 });


loadBrandSection.observe(document.querySelector('.section_brand'));
loadInfoSection_birds.observe(document.querySelector('.birds'));
loadInfoSection_info.observe(document.querySelector('.info_text'));
loadInfoSection_info.observe(document.querySelector('.info_button'));


    

    
