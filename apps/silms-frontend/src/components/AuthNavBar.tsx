import { useEffect } from "react";

const AuthNavBar = () => {
    useEffect(() => {
        const menuButton: any = document.getElementById('menu-button');
        const sideMenu: any = document.querySelector('.side-menu');
    
        if (menuButton) {
          menuButton.addEventListener('click', () => {
            if (sideMenu.style.transform === 'translateX(0)') {
              sideMenu.style.transform = 'translateX(-100%)';
            } else {
              sideMenu.style.transform = 'translateX(0)';
            }
          });
        }
      }, []);
      
  return (
    <div>AuthNavBar</div>
  )
}

export default AuthNavBar