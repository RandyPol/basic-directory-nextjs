async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users?page=1')
  const data = await res.json()
  return data.data
}

async function IndexPage() {
  const users = await fetchUsers()
  console.log(users)

  return (
    <div>
      <h1>Index Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <h5>
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p>{user.email}</p>
            </div>
            <img src={user.avatar} alt={user.first_name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IndexPage
