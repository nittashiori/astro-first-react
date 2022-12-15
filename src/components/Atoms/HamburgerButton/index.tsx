import Styles from './styles.module.css';

import { useState } from 'react';

type Props = {
  // isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const HamburgerButton: React.FC<Props> = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const hundleToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <button
      className={[Styles.HamburgerButton, isActive ? Styles.isActive : ''].join(' ')}
      onClick={hundleToggle}
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