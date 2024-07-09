const UsersController = () => {
  const totalusers = 100
  return (
    <div className="usersControllerBar">
      <div className="totalUsersControllerBar">Total de Usuarios: {totalusers}</div>
      <div className="usersControllerButtons">
        <button className="addUserButton" title="agregar">
          <img
            src="src/components/users/icons/addUserIcon.svg"
            alt=""
            className="usersTableModuleActionsIcon"
          />
        </button>
      </div>
    </div>
  )
}
export default UsersController
