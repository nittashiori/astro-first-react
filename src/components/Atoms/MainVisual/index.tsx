import Styles from './styles.module.css';

const MainVisual: React.FC = () => {
  return (
    <div className={Styles.mainVisual}>
      <picture>
        <source media="(max-width: 767px)" type="image/webp" srcSet="/images/sp_main-visual.webp" />
        <source media="(max-width: 767px)" srcSet="/images/sp_main-visual.jpg" />
        <source type="image/webp" src="/images/pc_main-visual@2x.webp" srcSet="/images/pc_main-visual@2x.webp 1x, /images/pc_main-visual@2x.webp 2x" />
        <img src="/images/pc_main-visual.jpg" srcSet="/images/pc_main-visual@2x.webp 1x, /images/pc_main-visual@2x.jpg 2x" alt="" />
      </picture>
    </div>
  )
}

export default MainVisual;