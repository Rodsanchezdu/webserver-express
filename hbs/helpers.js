hbs=require('hbs'); 

hbs.registerHelper('getAnio', ()=>{
  return new Date().getFullYear(); 
}); 

hbs.registerHelper('capitalizar', (texto)=>{
  
  let palabras=texto.split(' '); //palabras es un arreglo donde en cada posición hay ua palabra
  palabras.forEach( (palabra, idx) => {
    palabras[idx]=palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); 
  });

  return palabras.join(' '); 
}); 