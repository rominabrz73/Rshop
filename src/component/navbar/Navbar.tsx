import {Link} from "react-router-dom"
import Container from "../container/container"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"
import Button from "../button/Button";

function Navbar() {
  const {cartQty,handleChangeTheme} = useShoppingCartContext();
  return (
    <div className="shadow h-12 flex items-center">
      <Container>
        <div className="flex justify-between">
            <nav>
                <ul className="flex">
                    <li className="m-4"><Link to="/">Home</Link></li>
                    <li className="m-4"> <Link to="/Store">Store</Link></li>

                </ul>
            </nav>
            <div>
              <Button onClick={handleChangeTheme}>
                Change Theme
              </Button>
            </div>
            <div>
                <ul>
                    <li className="m-4"><Link to="/">{cartQty}</Link></li>
                </ul>
            </div>

        </div>



        </Container>  

    </div>
  )
}

export default Navbar