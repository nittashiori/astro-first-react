import Styles from './styles.module.css';

type Props = {
  href: string;
  image: string;
  image2x: string;
  imageWebp: string;
  imageWebp2x: string;
  title: string;
  data: string;
}

const BlogItem: React.FC<Props> = ({ href, image, image2x, imageWebp, imageWebp2x, title, data }) => {
  const srcSet = `${image} 1x, ${image2x} 2x`;
  const webpSrcSet = `${imageWebp} 1x, ${imageWebp2x} 2x`;

  return (
    <a href={href} className={Styles.blogItem}>
      <div className={Styles.eyecatch}>
        <picture>
          <source type="image/webp" src={imageWebp} srcSet={webpSrcSet} />
          <img src={image} srcSet={srcSet} alt="" />
        </picture>
      </div>
      <div className={Styles.body}>
        <p className={Styles.title}>{title}</p>
        <p className={Styles.data}>{data}</p>
      </div>
    </a>
  )
}

export default BlogItem;