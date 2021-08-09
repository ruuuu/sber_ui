const SberLoginPage = function(){ 

  const loginField = ('[data-field-name="login"]');
  const passwordField = ('[data-field-name="password"]');
  const loginButton = ('button'); // кнопка Войти
  const linkTpf = ('a[href="/tpf"]'); // жмем на плашку Кред досье
  
  
  this.login = async function (page, name, password){  // метод Логин
    await page.fill(loginField, name);  

    await page.fill(passwordField, password); 
    
    await page.click(loginButton); // кликаем кнопку Логин

    await page.click(linkTpf); // жмем на плашку Досье налогоплателщика
  };


};

export { SberLoginPage }; 