import { useDispatch, useSelector } from "react-redux"
import { fetchCategoryes } from "../../store/asyncActions/categoryes"
import { setActiveCategory } from "../../store/actionCreators/actionCreatorActiveCategory";
import { useEffect } from 'react';

export const OptionPanel = () => {
    const categoryes = useSelector(state => state.categoryes)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchCategoryes())
      // eslint-disable-next-line
    }, [])
    useEffect(()=>{
        console.log(categoryes)
      }, [categoryes])
    const selectHadler = (event) => {
        dispatch(setActiveCategory(event.target.value))
    }
    if(categoryes[0]){
        return (
            <select onChange={selectHadler}>
                <option value={'all'}  >все</option> 
                {categoryes.map(category => <option value={category}>{category}</option>)}
            </select>
        )
    } 

    return (
        <span>Грузим</span>
    )

}