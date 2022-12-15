import Styles from './styles.module.css';

import { useState } from 'react';

  const HamburgerButton: React.FC = () => {
  const [open, setOpen] = useState(true);
  // const toggle = () => setOpen(!open);

  return (
    // <button
    //   className={[Styles.HamburgerButton, open ? Styles.isActive : ''].join(' ')}
    //   onClick={() => toggle()}
    // >
    <button
      className={[Styles.HamburgerButton, open ? Styles.isActive : ''].join(' ')}
    >
      <span className={Styles.inner}>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  )
}

export default HamburgerButton;