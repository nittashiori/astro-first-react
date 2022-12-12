import Styles from './styles.module.css';

import MainVisual from '../../Atoms/MainVisual';
import Nav from '../../Molecules/Nav';
import SectionBlock from '../../Organaisms/SectionBlock';

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
      </div>
    </div>
  )
}

export default Top;