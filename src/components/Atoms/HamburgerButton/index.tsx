import Styles from './styles.module.css';

import { useState } from 'react';
import cx from 'classnames';

// type Props = {
  // isActive?: boolean;
  // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

const HamburgerButton: React.FC = () => {
// const HamburgerButton: React.FC<Props> = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const hundleToggle = () => {
    setIsActive((prevState) => !prevState);
    console.log("click!")
  };

  return (
    <button
      // className={[Styles.HamburgerButton, isActive ? Styles.isActive : ''].join(' ')}
      // className={cx(Styles.HamburgerButton, { [Styles.isActive]: isActive })}
      className={Styles.HamburgerButton}
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