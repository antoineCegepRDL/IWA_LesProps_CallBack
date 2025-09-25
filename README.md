# Les fonctions call back des composants.

Pour qu'un composant enfant communique avec le composant parent, il doit utiliser une fonction "call back". Tu as déjà utlisé ce type de fonctiona avec le onClick d'un bouton.

## Passe une fonction dans un props

```tsx
interface PropsInterface 
{ 
  onMaFonction: () => void
}

const TheComponent = ({onMaFonction}: PropsInterface) => {

  const handleClick = () => {
    onMaFonction()
  }
  return (
    <button onClick={handleClick}>Click me!<button>
  )
}

export default TheComponent
```

```tsx
const TheParent = () => {

  const handleMaFonction = () => {
    console.log("Ça handle fort fort fort!")
  }
  return (
    <TheComponent onMaFonction={handleMaFonction}>Click me!<TheComponent>
  )
}
```

Comme tu peux le remarquer, dans le PropsInterface, la fonction a comme préfix **on** et quand on reçoit cette dernière, elle a comme prefix **handle**.

Bon codage!