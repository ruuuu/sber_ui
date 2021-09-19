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
  const arrayYrLisoInn = ['1659121320', '1661031994']; // массив ИНН для создания Юр лиц(10-значные) 
  return arrayYrLisoInn;
}

const arrayInnIP = function(){  
  const arrayIpInn = ['100101078951', '600100736489', '100106366738']; // массив ИНН для создания ИП(12-ти значные) 
  return arrayIpInn;
}


export { dataGenerate, arrayInnYrLiso, arrayInnIP };