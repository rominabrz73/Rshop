
import { Route, Routes as RRoutes} from 'react-router-dom'
import { routes } from '../../routes'

function Routes() {
  return (
    <RRoutes>
  {routes.map((route)=>(
    <Route path={route.path} element={route.element} />

  )
)}
 </RRoutes>
  )
}

export default Routes 