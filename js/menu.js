 // função menu
 function clickMenu() {
    var menuContainer = document.getElementById("menu-container");
    if (menuContainer.style.transform === "translateX(-100%)") {
      menuContainer.style.transform = "translateX(0)";
    } else {
      menuContainer.style.transform = "translateX(-100%)";
    }
  }

  // submenu
  const produtosLink = document.querySelector('#submenu a');
  const submenu = document.querySelector('.submenu ul');

  produtosLink.addEventListener('click', () => {
    if (submenu.style.display === 'none') {
      submenu.style.display = 'block';
    } else {
      submenu.style.display = 'none';
    }
  });

  // fechar guia
  function fecharNovaGuia() {
    window.close();
  }