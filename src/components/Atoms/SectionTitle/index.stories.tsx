import SectionTitle from './index';

export default {
  title: 'Atoms/SectionTitle',
  component: SectionTitle,
};

export const $default: React.FC = () =>
  <SectionTitle
    titleEn="blog"
    titleJp="ブログ"
  />;

export const Custom: React.FC = () =>
  <SectionTitle
    as="h3"
    titleEn="custom title"
    titleJp="デフォルトだとh2ですがh3に変更してます"
  />;