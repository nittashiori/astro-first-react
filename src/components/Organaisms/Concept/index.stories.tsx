import Concept from './index';

export default {
  title: 'Organaisms/Concept',
  component: Concept,
};

export const $default: React.FC = () =>
  <Concept
    image="/images/concept.jpg"
    imageWebp="/images/concept.webp"
    titleEn="Concept"
    titleJp="心静かにコーヒーを"
    text="立ち止まって
    空の青さを眺めて、
    一息つきましょう"
  />
;