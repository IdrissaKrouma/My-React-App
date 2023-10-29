import './App.css';

function Player(props) {
  const {urlImage,nom,equipe,nationalite,numeroMaillot,age}= props ;
 
  return (
    <div className='PlayerCss'>
      <img className='imagePlayer' src={urlImage} alt='NOT FOUND' />
      <div className='infosPlayer' >
        <h2>INFORMATIONS</h2>
        <p>{nom}</p>
        <p>{age} ans</p>
        <p>{equipe}</p>
        <p>{nationalite}</p>
        <p>{numeroMaillot}</p>
      </div>
    </div>
  );
};

export default Player;
