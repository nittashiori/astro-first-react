import Styles from './styles.module.css';

import MainVisual from '../../Atoms/MainVisual';
import Nav from '../../Molecules/Nav';
import SectionBlock from '../../Organaisms/SectionBlock';
import SectionTitle from '../../Atoms/SectionTitle';
import BlogItem from '../../Molecules/BlogItem';

const Top: React.FC = () => {
  return (
    <div>
      <MainVisual />
      <Nav />
      <div className={Styles.contents}>
        <SectionBlock
          image="/images/concept.jpg"
          imageWebp="/images/concept.webp"
          titleEn="Concept"
          titleJp="心静かにコーヒーを"
          text="立ち止まって、
          空の青さを眺めて、
          一息つきましょう"
        />
        <section>
          <SectionTitle
            titleEn="blog"
            titleJp="ブログ"
          />
          <BlogItem
            image="/images/thumbnail01.jpg"
            image2x="/images/thumbnail01@2x.jpg"
            imageWebp="/images/thumbnail01.webp"
            imageWebp2x="/images/thumbnail01@2x.webp"
            title="コーヒーカー始めました。"
            data="2030.08.08"
          />
        </section>
      </div>
    </div>
  )
}

export default Top;