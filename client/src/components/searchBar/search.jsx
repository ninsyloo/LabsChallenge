import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {getProducts, lowToHigh, highToLow, oldCondition, newCondition} from '../../store/redux/actions'

export default function SearchBar(){

    const [query, setQuery] = useState('')
    const dispatch = useDispatch();

    const handleChange=(e)=>{
        setQuery({
            [e.target.name] : e.target.value
        })
    }
    const handleClick = async (e) => {
        e.preventDefault()
        await dispatch(getProducts(query.query))
        setQuery('');   
      }  

      const handleHigh = async (e) => {
          e.preventDefault()
          await dispatch(highToLow())
      }

      const handleNew = async (e) => {
          e.preventDefault()
          await dispatch(newCondition('new'))
      }

      const handleUsed = async (e) => {
          e.preventDefault()
          await dispatch(oldCondition('used'))
      }

      const handleLow = async (e) => {
          e.preventDefault()
          await dispatch(lowToHigh())
      }

    return(
        <section>
        <form class='d-flex' style={{margin:'50px'}}>
            <input
              class='form-control me-2'
              placeholder='Search'
              aria-label='Search'
              type='search'
              name='query'
              onChange={handleChange}
            />
            <button type='submit' class="btn btn-outline-secondary" style={{paddingleft:'10px'}} onClick={handleClick}><i class="fas fa-search"/></button>
            <div class="dropdown">
              <button class="btn btn-outline-secondary" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fas fa-filter"></i>
               </button>
               <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                   <li><button class="dropdown-item" onClick={handleHigh}>Higher Prices</button></li>
                   <li><button class="dropdown-item" onClick={handleLow}>Lower Prices</button></li>
                   <li><button class="dropdown-item" onClick={handleNew}>New Products</button></li>
                   <li><button class="dropdown-item" onClick={handleUsed}>Used Products</button></li>
                </ul>
                </div>
        </form>
        </section>
    )
}
