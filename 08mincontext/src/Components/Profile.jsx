import { useContext } from "react"
import UserContext from "../context/UserContext"

function Profile() {

  const {user} = useContext(UserContext)

  if (!user) return <h1>Not Loged in</h1>

  return (
    <div>

    <h1>
      Profile: {user.username}
    </h1>
    <p>More Components</p>
    </div>
  )
}

export default Profile