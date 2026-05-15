document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M27.125 7.75V10.3333H3.875V7.75H27.125ZM3.875 23.25H27.125V20.6667H3.875V23.25ZM3.875 16.7917H27.125V14.2083H3.875V16.7917Z" fill="black" />
</svg>
    `;
  
    const crossIcon = `
<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M27.125 7.75V10.3333H3.875V7.75H27.125ZM3.875 23.25H27.125V20.6667H3.875V23.25ZM3.875 16.7917H27.125V14.2083H3.875V16.7917Z" fill="black" />
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });