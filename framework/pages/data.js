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
  const arrayYrLisoInn = [ '2808021189', '5009033419', '4401135041', '3232005484', '0277105194']; // массив ИНН для создания Юр лиц(10-значные) 
  return arrayYrLisoInn;
}

const arrayInnIP = function(){  
  const arrayIpInn = ['100401920872', '100401920872',  '100200815807',  '100106366738']; // массив ИНН для создания ИП(12-ти значные) 
  return arrayIpInn;
}


export { dataGenerate, arrayInnYrLiso, arrayInnIP };