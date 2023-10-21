import './App.css';
import Joueurs from './joueurs';
import Player from './Player';


function PlayerList() {
  const styleObject ={
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
  }
  return (
    <div style = {styleObject}>
      {Joueurs.map((elt) => {
        return (
          <Player 
            urlImage  = {elt.urlImage}
            nom ={elt.nom} 
            equipe = {elt.equipe}
            nationalite = {elt.nationalite}
            numeroMaillot = {elt.numeroMaillot}
            age = {elt.age}  />        
        )})}
    </div>
    );
}

export default PlayerList;
