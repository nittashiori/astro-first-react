import Styles from './styles.module.css';

type TitleProps = {
  children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({children}) => {
  return (
    <h2 className={Styles.title}>{children}</h2>
  )
}

export default Title;
