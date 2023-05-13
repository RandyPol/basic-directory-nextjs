import Link from 'next/link'

function Navigaiton() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/users">Users Page</Link>
        </li>
      </ul>
    </>
  )
}

export default Navigaiton
