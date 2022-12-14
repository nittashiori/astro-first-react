import Styles from './styles.module.css';

type Props = {
  children?: React.ReactNode;
  pcColumn?: number;
  spColumn?: number;
};

const SectionColumn: React.FC<Props> = ({ children, pcColumn, spColumn }) => {
  return (
    <section
      className={Styles.sectionColumn}
      style={{
        [`--pcColumn`]: `${pcColumn}`,
        [`--spColumn`]: `${spColumn}`
      }}
    >
      {children}
    </section>
  )
}

export default SectionColumn;