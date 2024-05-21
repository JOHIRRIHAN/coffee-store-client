import { Link } from "react-router-dom"

const Headers = () => {
  return (
    <div className="text-2xl font-bold gap-9">
      <Link className="mr-5" to={'/'}>Home</Link>
      <Link className="mr-5" to={'/addCoffee'}>Coffee</Link>
      <Link className="mr-5" to={'/user'}>Users</Link>
      <Link className="mr-5" to={'/signin'}>signIn</Link>
      <Link className="mr-5" to={'/signup'}>signUp</Link>

    </div>
  )
}

export default Headers