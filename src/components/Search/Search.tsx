
import style from './Search.module.css'
import { FaSearch } from 'react-icons/fa'

export const Search = () => {
  return (
    <div>
        <FaSearch className={style.searchIcon}/>
    </div>
  )
}
