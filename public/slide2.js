    imagenes =['gedia.jpg','medi2.jpg','ima4.jpg','medico4.jpg'] ///no le pongas  const o let para que sean globales
    i =1
    y=1
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    const progressBar = document.querySelector('#progress-bar')
    const divIndicadores = document.querySelector('#indicadores')
    let porcentaje_base = 100/imagenes.length
    let porcentaje_actual = porcentaje_base

    for (let index=0; index <imagenes.length; index++){
        const div =document.createElement('div')
        div.classList.add('circles')
        div.id = index
        divIndicadores.appendChild(div)
    }
    progressBar.style.width =`${porcentaje_base}%` // alt+96 para sacar los acentos invertidos
    img1.src =imagenes[0]
    const circulos = document.querySelectorAll('.circles')
    circulos[0].classList.add('resaltado')

    startTime();
    
    function startTime() {
            if(i>=imagenes.length){
                i=0;
            }
            img2.src =imagenes[i]
            const circulo_actual =Array.from(circulos).find(el => el.id==i)
            Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
            circulo_actual.classList.add('resaltado')
            img2.classList.add('active')
            i=i+1
            /*porcentaje_actual += porcentaje_base;*/
            porcentaje_actual= i*porcentaje_base
            progressBar.style.width = `${porcentaje_actual}%`
            if (i==(imagenes.length)){
                i=0
                porcentaje_actual = porcentaje_base-porcentaje_base
            }
            setTimeout(() => {
                img1.src =img2.src
               img2.classList.remove('active')
            },1)
     
        bar=setTimeout(startTime, 4000);
      }
////////////////////
function plusSlides(n) {
    clearTimeout(bar);
    if(n==1){
        if(i>=imagenes.length){
            i=0;
        }
        var img1 = document.getElementById('img1');
        img1.src =imagenes[i];
        startTime();
    }
    else{
        if(i<1){
            i=imagenes.length;
        }
        if(i==1){
            i=imagenes.length+1;
        }
        i=i-2;
        var img1 = document.getElementById('img1');
        img1.src =imagenes[i];
        startTime();
    }
  }
///////////////////////
  
