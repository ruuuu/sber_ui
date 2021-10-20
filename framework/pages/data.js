const dataGenerate = function(){  

  const data = [ 
    {
      email: 'sberadmin',  
      password: 'sberadmin', 
    },

    {
      email: 'vtb', 
      password: 'vtb',
    },

    {
      email: 'regulator', 
      password: 'regulator',
    }
  ]
  
  return data;
}



const arrayInnYrLiso = function(){ 
  const arrayYrLisoInn = [ '2130111450']; // массив ИНН для создания Юр лиц(10-значные) 
  return arrayYrLisoInn;
}

const arrayInnIP = function(){  

  const arrayIpInn = ['100106339082']; // массив ИНН для создания ИП(12-ти значные) 
  return arrayIpInn;
}


export { dataGenerate, arrayInnYrLiso, arrayInnIP };