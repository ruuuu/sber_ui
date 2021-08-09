const DataGenerate = function(){  //

  const data = [ // массив объектов
    {
      email: 'sberbank', 
      password: 'sberbank',
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

const ArrayInnYrLiso = function(){ 
  const arrayYrLisoInn = []; // массив ИНН для  юр лиц, брать отсюда https://rmsp-pp.nalog.ru/search.html?m=Support#t=1628447669165&sk=UL 

  return arrayYrLisoInn;
}

const ArrayInnIp = function(){  //
  const arrayIpInn = []; // массив ИНН для  ИП

  return arrayIpInn;
}


export { DataGenerate };