import Styles from './styles.module.css';

export default function Title({ children }) {
  return (
    <h2 className={Styles.title}>{children}</h2>
  )
}
