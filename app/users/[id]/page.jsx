async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
}
async function UsersPage({ params }) {
  const userData = await getUser(params.id)
  console.log(userData)
  return (
    <div>
      <h1>Users Details</h1>
    </div>
  )
}

export default UsersPage
