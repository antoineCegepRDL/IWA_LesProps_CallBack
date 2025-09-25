import "../style/Layout.scss";
import "../style/button3.scss";
import DinoColorEnum from "../types/DinoColorEnum";
import ADino from "../components/ADino";
import AFunkyButton from "../components/AFunkyButton";
import { useState } from "react";

const TheExercice3 = () => {
  const [color, setColor] = useState<DinoColorEnum>(DinoColorEnum.Green);
  const handleClick = (color?: DinoColorEnum) => {
    if(color)
      setColor(color);
  };
  return (
    <>
      <h2>Troisième défi défi</h2>
      <p>
        Tu dois ajouter le props color qui passe la couleur du dinosaure. La
        couleur est dans un fichier nommé DinoColorEnum.ts dans le dossier
        types.
      </p>
      <p>
        Le composant ADino changera de couleur en fonction du bouton
        sélectionné.
      </p>
      <p>Le bouton doit encore fonctionner pour les exercices précédents.</p>
      <p>Une seule fonction handleClick suffit pour gérer tous les boutons.</p>
      <p>
        Tu devras passer la couleur du bouton actuel dans la fonction onClick du
        bouton comme ceci :{" "}
        <code>onClick: (color: DinoColorEnum) =&gt; void;</code>
      </p>
      <p>Regarde comment j'ai fait pour créer le une liste de boutons avec chacune des valeurs dans mon enum. Très pratique pour ton TP des pommes</p>
      <div className="flex ex3">
        {Object.values(DinoColorEnum).map((color) => (
          <AFunkyButton
            key={color}
            onClick={handleClick}
            value={color.toString()}
            color={color}
          />
        ))}
      </div>
      <ADino color={color} />
    </>
  );
};

export default TheExercice3;
