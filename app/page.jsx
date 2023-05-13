async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users?page=1')
  const data = await res.json()
  return data.data
}

async function IndexPage() {
  const users = await fetchUsers()

  return (
    <div>
      <h1>Index Page</h1>
      <div>{JSON.stringify(users)}</div>
    </div>
  )
}

export default IndexPage
