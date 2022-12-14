import Styles from './styles.module.css';

import MainVisual from '../../Atoms/MainVisual';
import Nav from '../../Molecules/Nav';
import Concept from '../../Organaisms/Concept';
import Blog from '../../Organaisms/Blog';

const Top: React.FC = () => {
  return (
    <div>
      <MainVisual />
      <Nav />
      <div className={Styles.contents}>
        <Concept
          image="/images/concept.jpg"
          imageWebp="/images/concept.webp"
          titleEn="Concept"
          titleJp="心静かにコーヒーを"
          text="立ち止まって、
          空の青さを眺めて、
          一息つきましょう"
        />
        <Blog />
      </div>
    </div>
  )
}

export default Top;