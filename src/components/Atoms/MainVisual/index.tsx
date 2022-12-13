import Styles from './styles.module.css';

const MainVisual: React.FC = () => {
  const image = "/images/pc_main-visual.jpg"
  const image2x = "/images/pc_main-visual@2x.jpg"
  const imageWebp = "/images/pc_main-visual.webp"
  const imageWebp2x = "/images/pc_main-visual@2x.webp"
  const imageSp = "/images/sp_main-visual.jpg"
  const imageSpWebp = "/images/sp_main-visual.webp"

  const srcSet = `${image} 1x, ${image2x} 2x`
  const srcSetWebp = `${imageWebp} 1x, ${imageWebp2x} 2x`

  return (
    <div className={Styles.mainVisual}>
      <picture>
        <source media="(max-width: 767px)" type="image/webp" srcSet={imageSpWebp} />
        <source media="(max-width: 767px)" srcSet={imageSp} />
        <source type="image/webp" src={imageWebp} srcSet={srcSetWebp} />
        <img src={image} srcSet={srcSet} alt="" />
      </picture>
    </div>
  )
}

export default MainVisual;