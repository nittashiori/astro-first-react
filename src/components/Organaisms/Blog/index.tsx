import Styles from './styles.module.css';

import SectionTitle from '../../Atoms/SectionTitle';
import BlogList from '../../Organaisms/BlogList';
import Button from '../../Atoms/Button';

import { blogLists } from '../../../../public/utils/blog'

const SectionBlock: React.FC = () => {
  return (
    <section className={Styles.sectionBlog}>
      <SectionTitle
        titleEn="blog"
        titleJp="ブログ"
      />
      <BlogList
        lists={blogLists}
      />
      <Button
        as="a"
        href="/blog"
        label="ブログ一覧"
      />
    </section>
  )
}

export default SectionBlock;