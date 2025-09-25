import '../style/Layout.scss'
import '../style/button1.scss'
import AFunkyButton from '../components/AFunkyButton'

const TheExercice1 = () => {
  return (
    <>
      <h2>Premier défi</h2>
      <p>Nous allons nous créer un bouton custom.</p>
      <p>Quand on clique sur le bouton, je veux que tu affiches le message : "WRAR!"</p>
      <p>Pour ajouter un événement au clic, nous allons utiliser une fonction. comme ceci <code> onClick: () =&gt; void;</code></p>
      <p>Tu as un exemple dans le readme</p>
      <div className="ex1">
        <AFunkyButton/>
      </div>
    </>
  )
}

export default TheExercice1
