import { useState } from 'react';

import Styles from './styles.module.css';
import HamburgerButton from '../../Atoms/HamburgerButton/index'

const SpNav: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const hundleToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className={[Styles.spNav, isActive ? Styles.isActive : ''].join(' ')}>
      <div className={Styles.button}>
        <HamburgerButton
          isActive={isActive}
          onClick={hundleToggle}
        />
      </div>
      <div className={Styles.menu}>
        <nav className={Styles.nav}>
          <ul>
            <li><a href="/menu">menu</a></li>
            <li><a href="/blog">blog</a></li>
            <li><a href="/access">access</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default SpNav;