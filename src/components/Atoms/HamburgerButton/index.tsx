import Styles from './styles.module.css';

type Props = {
  isActive?: boolean;
  onClick?: (event: any) => void
}

const HamburgerButton: React.FC<Props> = ({ isActive = false, onClick }) => {
  
  return (
    <button
      className={[Styles.HamburgerButton, isActive ? Styles.isActive : ''].join(' ')}
      onClick={onClick}
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