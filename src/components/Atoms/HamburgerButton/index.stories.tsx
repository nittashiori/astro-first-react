import { useState } from 'react';
import HamburgerButton from './index';

export default {
  title: 'Atoms/HamburgerButton',
  component: HamburgerButton,
};

export const $default: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const hundleToggle = () => {
    setIsActive(!isActive)
    console.log(isActive)
  }

  return (
    <HamburgerButton
      isActive={isActive}
      onClick={hundleToggle}
    />
  )
}
