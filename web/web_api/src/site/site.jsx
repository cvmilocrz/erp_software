import Menu from '../components/menu/menu';
import './site.css';
import UsersComponent from '../components/users/users.component';

// TODO: crear funcion en la carpeta controllers para cambiar el contenido de manera dinamica en el sitio

function Site() {
  return (
    <>
      <div className='siteNotAvaliableScreen'>
        <img src="https://static.vecteezy.com/system/resources/previews/004/971/657/non_2x/sad-woman-working-on-laptop-from-home-error-message-cartoon-character-vector.jpg" alt="" className='notAvaliableScreenImage'/>
        <p> ¡Oops! Para usar esta aplicación, necesitas una pantalla con una resolución mínima de 1280x720p. Alternativamente, puedes usar la pantalla completa para validar tu resolución.</p>
      </div>
      <div className='siteContainer'>
        <div className='left'>
          <Menu />
        </div>
        <div className='right'>
          <UsersComponent />
        </div>
      </div>
    </>
  );
}
export default Site;

