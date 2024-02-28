import {useParams} from 'react-router-dom'

function User() {

  const {userid} = useParams()

  return (
    <div className=' py-5 bg-orange-800 text-center text-3xl text-black'>
      User: {userid}
    </div>
  )
}

export default User