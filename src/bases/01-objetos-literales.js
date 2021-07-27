const persona = {
    nombre: 'Alan',
    apellido: 'flores',
    edad: 21
  }
  
  const persona2 = {...persona}
  persona2.nombre = 'pepe';
  
  console.log(persona);
  console.log(persona2);