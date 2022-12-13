import Styles from './styles.module.css';

type Props = {
  as?: React.ElementType;
  titleEn: string;
  titleJp: string;
}

const SectionTitle: React.FC<Props> = ({ as: CustomTag = "h2", titleEn, titleJp }) => {
  return (
    <CustomTag className={Styles.sectionTitle}>
      <span className={Styles.en}>{titleEn}</span>
      <span className={Styles.jp}>{titleJp}</span>
    </CustomTag>
  )
}

export default SectionTitle;