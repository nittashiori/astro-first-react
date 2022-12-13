import Styles from './styles.module.css';
import BlogItem from "../../Molecules/BlogItem"

type data = {
  link: string;
  image: string;
  image2x: string;
  imageWebp: string;
  imageWebp2x: string;
  title: string;
  data: string;
}

type Props = {
  lists: data[];
}

const BlogList: React.FC<Props> = ({ lists }) => {
  return (
    <div className={Styles.blogList}>
      {lists.map(list => (
        <BlogItem
          key={list.title}
          href={list.link}
          image={list.image}
          image2x={list.image2x}
          imageWebp={list.imageWebp}
          imageWebp2x={list.imageWebp2x}
          title={list.title}
          data={list.data}
        />
      ))}
    </div>
  )
}

export default BlogList;