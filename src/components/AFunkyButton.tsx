import DinoColorEnum from 'src/types/DinoColorEnum';
import '../style/Modal.scss'

// Petit rappel. 
// 1 crée props interface
// 2 ajoute props dans le composant
// 3 utilise les props dans le composant

interface PropsInterface {
  onClick: (color?: DinoColorEnum) => void;
  value?: string;
  color?: DinoColorEnum;
}

const AFunkyButton = ({ onClick, color, value = "🦖 RAWR" }: PropsInterface) => {
  
  const handleClick = () => {
    onClick(color!);
  }
  return (
    <div className="dino-button" onClick={handleClick} style={{ backgroundColor: color }}>
        <div className="funky-border"></div>
        <div className="button-body"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="dino-scales"></div>
        <div className="dino-scales"></div>
        <div className="dino-scales"></div>
        <div className="tail"></div>
        <div className="dino-text">{value}</div>
    </div>
  )
}

export default AFunkyButton