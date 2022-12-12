import Styles from './styles.module.css';

const Nav: React.FC = () => {
  return (
    <nav className={Styles.nav}>
      <ul className={Styles.list}>
        <li><a className={Styles.link} href="/menu">menu</a></li>
        <li><a className={Styles.link} href="/blog">blog</a></li>
        <li><a className={Styles.link} href="/access">access</a></li>
      </ul>
    </nav>
  )
}

export default Nav;