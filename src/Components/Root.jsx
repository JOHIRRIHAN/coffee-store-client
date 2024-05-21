import Headers from './Headers'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Headers></Headers>
        <Outlet></Outlet>
    </div>
  )
}

export default Root