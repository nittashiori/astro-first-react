import Styles from './styles.module.css';
import Logo from '../../Atoms/Logo/index'

const Title: React.FC = () => {
  return (
    <header className={Styles.header}>
      <a href="/" className={Styles.logo}>
        <Logo />
      </a>
    </header>
  )
}

export default Title;