import './users.component.css'
import UsersNavBarModule from './modules/navigation.bar'
import UsersTableModule from './modules/users.table'
import UsersController from './modules/users.controller'

function UsersComponent() {
  return (
    <>
      <div className="usersControlsContainer">
        <div className="usersControlPadding">
          <UsersNavBarModule />
          <UsersController />
          <div className="usersTableContainer">
            <UsersTableModule />
          </div>
        </div>
      </div>
    </>
  )
}
export default UsersComponent
