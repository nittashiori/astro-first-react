import Styles from './styles.module.css';
import Logo from '../../Atoms/Logo/index'

const Title: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.inner}>
        <a href="/" className={Styles.logo}>
          <Logo />
        </a>
        <small className={Styles.copyright}>©Sky Coffee</small>
      </div>
    </footer>
  )
}

export default Title;