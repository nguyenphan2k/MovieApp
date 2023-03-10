import FontAwesomeIcon from "react-fontawesome"
import { Link, useNavigate } from 'react-router-dom'
function HeaderList({ items }) {
     const navigate = useNavigate()
     const getItem = (item) => {
          let itemList = null
          switch (item.type) {
               case 'logo':
                    itemList = <img onClick={() => navigate("/")} className="sm:h-3 lg:h-5"
                         src={item.src} alt={item.name} />
                    break
               case 'language':
                    itemList = <p className="border-white rounded-[3px]
                    px-[4px] py-[2px] border-[1px] hover:bg-white hover:text-[#032541]
                    transition duration-150 ease-in-out">{item.name}</p>
                    break
               case 'icon':
                    itemList = <FontAwesomeIcon name={item.name} className="lg:lg sm:sm" />
                    break
               case 'pass_login':
                    itemList = <Link to="./login">{item.name}</Link>
                    break
               default:
                    itemList = <p>{item.name}</p>
                    break
          }
          return itemList
     }
     return (
          <ul className="flex lg:gap-7 sm:gap-4 items-center">
               {items.map((item, index) => {
                    return <li key={index}>{getItem(item)}</li>
               })}
          </ul>
     )
}

export default HeaderList