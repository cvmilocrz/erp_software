import React from "react"
import axios from "axios"

const UsersTableModule = () => {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3200/api/getallusers')
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  if (users.length === 0) return null

  return (
    <div className="usersTableModule">
      <table className="usersTable">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.cargo}</td>
              <td className="usersTableModuleActions">
                <button className="editButton" title="editar">
                  <img
                    src="src/components/users/icons/editUserIcon.svg"
                    alt=""
                    className="usersTableModuleActionsIcon"
                  />
                </button>
                <button className="deleteButton" title="eliminar">
                  <img
                    src="src/components/users/icons/deleteUserIcon.svg"
                    alt=""
                    className="usersTableModuleActionsIcon"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default UsersTableModule
