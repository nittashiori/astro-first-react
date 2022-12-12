import Styles from './styles.module.css';

type Props =  {
  image: string;
  imageWebp: string;
  titleEn?: string;
  titleJp: string;
  text: string;
}

const SectionBlock: React.FC<Props> = ({image, imageWebp, titleEn, titleJp, text}) => {
  return (
    <div className={Styles.sectionBlock}>
      <picture className={Styles.image}>
        <source srcSet={imageWebp} type="image/webp" />
        <img src={image} alt="" />
      </picture>
      <div className={Styles.body}>
        <h2 className={Styles.title}>
          <span className={Styles.en}>{titleEn}</span>
          <span className={Styles.jp}>{titleJp}</span>
        </h2>
        <p className={Styles.text}>
          {text}
        </p>
      </div>
    </div>
  )
}

export default SectionBlock;