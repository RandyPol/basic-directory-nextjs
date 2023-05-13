import Image from 'next/image'

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
}
async function UsersPage({ params }) {
  const userData = await getUser(params.id)
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <Image
              src={userData.avatar}
              alt={userData.first_name}
              width={100}
              height={100}
            />
          </div>
          <div className="card-body text-center">
            <h3>
              {userData.first_name} {userData.last_name}
            </h3>
            <p>{userData.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersPage
