import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({category}) => {

  const {url} = useContext(StoreContext);
  const[food_list,setFoodList] = useState([])
  const[loading,setLoading] = useState(true);
  const fetchFoodList = async () => {
    setLoading(true);
    try {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data)
        
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false);
    }  
}
  useEffect(()=>{
    fetchFoodList()
  },[])
  
  console.log(food_list);
  if(loading)return <div>Loading</div>
  return (
      <div className='foodDisplay' id='foodDisplay'>
      <h2>Top dishes near you</h2>
      <div className='foodDisplayList'>
        {food_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
      </div>
  )
}

export default FoodDisplay
