import '../style/Layout.scss'
import '../style/button2.scss'
import AFunkyButton from '../components/AFunkyButton';
import { useState } from 'react';

const TheExercice1 = () => {
  const [clickCounts, setClickCounts] = useState(0);
  const handleClick = () => {
    setClickCounts(clickCounts + 1);
  }
  return (
    <>
      <h2>Deuxième défi</h2>
      <p>Nous allons combiner une fonction de call back et une valeur primitive.</p>
      <p>Le bouton va afficher le nombre de fois que nous avons cliqué dessus.</p>
      <p>La page parent va donc garder le state et les deux boutons vont afficher le nombre de clicks.</p>
      <p>En plus du onClick, ton PropsInterface aura une string nommée value.</p>
      <p>Cette value sera optionnelle et aura une la valeur par défaut "🦖 RAWR" </p>
      <p>Voici un exemple de props avec une valeur par défaut, dans la fonction de composant, tas inscrire ceci : <code>onClick, value = "🦖 RAWR"</code></p>
      <div className='flex ex2'>
      <AFunkyButton onClick={handleClick} value={clickCounts.toString()} />
      <AFunkyButton onClick={handleClick} value={clickCounts.toString()} />
      </div>
    </>
  )
}

export default TheExercice1
