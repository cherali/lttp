const path = 'assets/images/'

const ICONS = {
  chevronLeft: `${path}chevron-left.svg`,
}


const IconWrapper = ({ name, className }) => {
  return (
    <img src={ICONS[name]} alt={name} className={className}/>
  )
}

export default IconWrapper;
