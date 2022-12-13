import BlogList from './index';
import { blogLists } from '../../../../public/utils/blog'

export default {
  title: 'Organaisms/BlogList',
  component: BlogList,
};

export const $default: React.FC = () =>
  <BlogList
    lists={blogLists}
  />
;