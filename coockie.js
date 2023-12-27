function getCookie(name) {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
  
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
  
    return '';
  }
  
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  }
  
  function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }
  
  // Configura tu página web
  function configurePage() {
    setCookie('miCookie', 'valor de ejemplo', 7); // Nombre de la cookie: 'miCookie', Valor: 'valor de ejemplo', Duración: 7 días

    const cookieValue = getCookie('miCookie');
    console.log('Valor de la cookie:', cookieValue);

    deleteCookie('miCookie');
    console.log('Cookie eliminada');
  }
  
  configurePage();
  
  // Genera el valor de document.cookie que debería estar en blanco
  console.log(document.cookie);
  
  deleteCookie('miCookie');