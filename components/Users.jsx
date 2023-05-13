import Image from 'next/image'

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <div>
            <h5>
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <Image
            src={user.avatar}
            alt={user.first_name}
            width={100}
            height={100}
          />
        </li>
      ))}
    </ul>
  )
}

export default Users
