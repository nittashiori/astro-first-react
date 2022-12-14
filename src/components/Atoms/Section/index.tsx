import Styles from './styles.module.css';

type Props = {
  children?: React.ReactNode;
};

const Section: React.FC<Props> = ({ children }) => {
  return (
    <section className={Styles.section}>
      {children}
    </section>
  )
}

export default Section;