import Styles from './styles.module.css';

type Props = {
  as?: React.ElementType;
  href?: string;
  isTarget?: boolean;
  label: string;
  onClick?: (event: any) => void
}

const Button: React.FC<Props> = ({ as: CustomTag = "button", href, isTarget = false, label, onClick }) => {
  // 外部リンクの条件分岐
  if(href && href?.indexOf("http") !== -1) {
    isTarget = true
  }
  return (
    <>
      {isTarget ? 
      <CustomTag
        className={Styles.button}
        href={href}
        target="_blank"
        rel="noopener"
      >
        {label}
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" viewBox="0 0 5 9">
          <path id="icon_arrow-right" d="M3.757.826a1,1,0,0,1,1.487,0L7.5,3.331A1,1,0,0,1,6.755,5H2.245A1,1,0,0,1,1.5,3.331Z" transform="translate(5) rotate(90)"/>
        </svg>
      </CustomTag>
      :
        <CustomTag
          className={Styles.button}
          href={href}
          onClick={onClick}
        >
          {label}
          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" viewBox="0 0 5 9">
            <path id="icon_arrow-right" d="M3.757.826a1,1,0,0,1,1.487,0L7.5,3.331A1,1,0,0,1,6.755,5H2.245A1,1,0,0,1,1.5,3.331Z" transform="translate(5) rotate(90)"/>
          </svg>
        </CustomTag>
      }
    </>
  )
}

export default Button;