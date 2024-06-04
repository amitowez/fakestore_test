// import { useDispatch, useSelector } from "react-redux"
import { fetchCategoryes } from "../../store/asyncActions/categoryes"
import { setActiveCategory } from "../../store/actionCreators/actionCreatorActiveCategory";
import { Component, useEffect } from 'react';
import { connect } from 'react-redux'



class OptionPanel extends Component{
    componentDidMount(){
        this.props.categoryes()
    }
     selectHadler = (event) => {
        this.props.setCategory(event.target.value)
    }
    render(){

        if(this.props.categoryesData){
            return (
                <select onChange={this.selectHadler}>
                    <option value={'all'}  >все</option> 
                    {this.props.categoryesData.map(category => <option value={category}>{category}</option>)}
                </select>
            ) 
        }
    }

}

const mapStateToProps = (state) => {
    return {
      categoryesData: state.categoryes
    };
  }
  
  
  const mapDispatchToProps = (dispatch) => {
    return {
      categoryes: () => dispatch(fetchCategoryes()),
      setCategory: (data) =>  dispatch(setActiveCategory(data))
    }
  }



export default connect(mapStateToProps, mapDispatchToProps)(OptionPanel);


