import SectionTitle from '../../Atoms/SectionTitle';
import BlogList from '../../Organaisms/BlogList';
import Button from '../../Atoms/Button';
import Section from '../../Atoms/Section';

import { blogLists } from '../../../../public/utils/blog'

const SectionBlock: React.FC = () => {
  return (
    <Section>
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
    </Section>
  )
}

export default SectionBlock;