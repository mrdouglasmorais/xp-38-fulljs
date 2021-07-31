import Home from './view/page/Home';
import Contato from './view/page/Contato'
import Error404 from './view/page/Error404';

import Untils from './service/Untils';

// rotas
let routes = {
  '/': Home,
  '/contato': Contato,
}

const router = async () => {
  const root = document.getElementById('root');

  let request = Untils.parseRequestURL();

  let parseURL = (request.resource ? '/' + request.resource : '/') + (request.verb ? '/' + request.verb : '');
  let page = routes[parseURL] ? routes[parseURL] : Error404;

  root.innerHTML = await page.render();
  await page.after_render();
}

// observa mudanças na URL
window.addEventListener('hashchange', router);

// observa o carregamento da página
window.addEventListener('load', router);