import DinoColorEnum from 'src/types/DinoColorEnum';
import '../style/Modal.scss'

// Petit rappel. 
// 1 crée props interface
// 2 ajoute props dans le composant
// 3 ajoute les props dans le composant

const AFunkyButton = () => {

  const handleClick = () => {
    // appel le callback onclick ici!
  }
  return (
    //As-tu vu? J'ai déjà ajouté le onclick pour toi!
    //J'ai aussi mis la couleur green au background. Tu pourras le changer avec les props dans l'exercice 3
    <div className="dino-button" onClick={handleClick} style={{ backgroundColor: "green" }}>
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
        <div className="dino-text">🦖 RAWR</div>
    </div>
  )
}

export default AFunkyButton