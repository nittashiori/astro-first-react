import BlogItem from './index';

export default {
  title: 'Molecules/BlogItem',
  component: BlogItem,
};

export const $default: React.FC = () =>
  <BlogItem
    href="/"
    image="/images/thumbnail01.jpg"
    image2x="/images/thumbnail01@2x.jpg"
    imageWebp="/images/thumbnail01.webp"
    imageWebp2x="/images/thumbnail01@2x.webp"
    title="コーヒーカー始めました。"
    data="2030.08.08"
  />;