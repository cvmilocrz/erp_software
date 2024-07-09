import './menu.css';

function Menu() {
  return (
    <>
      <div className='leftSideMenuContainer'>
        <div className='leftSideMenuTitle'>
          <img src='src/assets/resources/logo.png' alt='' className='logoImage'/>
        </div>
        <div className='leftSideMenuOption'>
          <img src='src/assets/icons/homeIcon.svg' alt='' className='optionIcon'/>
          <p>Inicio</p>
        </div>
        <div className='leftSideMenuOption'>
          <img src='src/assets/icons/usersIcon.svg' alt='' className='optionIcon'/>
          <p>Usuarios</p>
        </div>
        <div className='leftSideMenuOption'>
          <img src='src/assets/icons/humanIcon.svg' alt='' className='optionIcon'/>
          <p>Recursos Humanos</p>
        </div>
        <div className='leftSideMenuOption'>
          <img src='src/assets/icons/contabilityIcon.svg' alt='' className='optionIcon'/>
          <p>Contabilidad</p>
        </div>
        <div className='leftSideMenuOption'>
          <img src='src/assets/icons/inventoryIcon.svg' alt='' className='optionIcon'/>
          <p>Inventario</p>
        </div>
        <div className='leftSideMenuOption'>
          <img src='src/assets/icons/clientsIcon.svg' alt='' className='optionIcon'/>
          <p>Clientes</p>
        </div>
        <div className='leftSideMenuOption'>
          <img src='src/assets/icons/salesIcon.svg' alt='' className='optionIcon'/>
          <p>Ventas</p>
        </div>
        <div className='leftSideMenuOption'>
          <img src='src/assets/icons/marketingIcon.svg' alt='' className='optionIcon'/>
          <p>Marketing</p>
        </div>
        <div className='leftSideMenuOption'>
          <img src='src/assets/icons/procurementIcon.svg' alt='' className='optionIcon'/>
          <p>Compras</p>
        </div>
        <div className='leftSideMenuOption'>
          <img src='src/assets/icons/financialIcon.svg' alt='' className='optionIcon'/>
          <p>Financiera</p>
        </div>
      </div>
    </>
  );
}
export default Menu;

