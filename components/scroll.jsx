
const Scroll = () => {
    const featuresContainer=document.querySelector('.features');
    const features=document.querySelectorAll('.features .feature');   
    let currentIndex=0;


    
    const animate=() => {
        if(window.scrollY>=featuresContainer.offsetTop-750){
            features[currentIndex].classList.add('visible');
            currentIndex++;
            if(currentIndex===features.length){
                clearInterval(counter)
            }
        }
    
    };
    
    let counter= setInterval(animate, 1000);
}

 export default Scroll;
 













