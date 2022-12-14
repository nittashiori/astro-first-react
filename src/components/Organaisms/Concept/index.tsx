import Styles from './styles.module.css';

import SectionColumn from "../../Atoms/SectionColumn"

type Props =  {
  image: string;
  imageWebp: string;
  titleEn?: string;
  titleJp: string;
  text: string;
}

const Concept: React.FC<Props> = ({image, imageWebp, titleEn, titleJp, text}) => {
  return (
    <SectionColumn pcColumn={2} spColumn={1}>
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
    </SectionColumn>
  )
}

export default Concept;