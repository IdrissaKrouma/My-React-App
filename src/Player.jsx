import './App.css';

function Player(props) {
  const {urlImage,nom,equipe,nationalite,numeroMaillot,age}= props ;
  const styleOblject={ 
    display:'flex',
    flexDirection : 'row',
    width: '40rem',
    height:'25rem',
    alignItems:'center',
    justifyContent: 'space-between',
    border: '1px solid black',
    borderRadius :'1.2rem',
    margin : '2.5%',
    //background:'linear-gradient(green, blue)' ,
  };
  const styleImg = {
      width:'50%',
      height: '100%',
      background: 'cover',
      borderRadius :'inherit',
  };
  const infosPlayers = {
    display : 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    gap :'5%',
    padding: '5%',
    width: '50%',
    height: '100%',
  }
  return (
    <div style={styleOblject}>
      <img style={styleImg} src={urlImage} alt='NOT FOUND' />
      <div style={infosPlayers}>
        <h2>INFORMATIONS</h2>
        <p>{nom}</p>
        <p>{age} ans</p>
        <p>{equipe}</p>
        <p>{nationalite}</p>
        <p>{numeroMaillot}</p>
      </div>
    </div>
  );
}

export default Player;
