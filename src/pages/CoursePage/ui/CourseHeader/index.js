import { Paragraph } from "../../../../components/typography/index"
import { FaThLarge, FaList } from 'react-icons/fa';
import { black } from '../../../../components/colour/colour';
import Dropdown from "./dropDown";
import HeaderStyle from "./style"

const noOfResults = "Showing 1–8 of 10 results"
const show = "Show     6    12     16"

const drop = {values:[{id: 1, name: "Computer Architecture"} , {id:2, name: "Java"},
        {id: 3, name: "Discrete Mathematics"}],}

const CourseHeader = (className) => {
    return(
        <HeaderStyle>
            <div className="left">
                <div className="result">
                    <Paragraph children={ noOfResults }/>
                </div>
                <div className="show">
                    <Paragraph children={ show }/>
                </div>
            </div>

            <div className="right">
                <div className="iconlist">
                    <FaList size='25px' color={black}/>
                </div>
                <div className="iconlarge">
                    <FaThLarge size='25px' color={black}/>
                </div>
                <div className="filter">
                    <Dropdown  name='Filter' values={drop.values}/>
                </div>
                <div className="sort">
                    <Dropdown  name='Sort by' values={drop.values}/>
                </div>
            </div>
        </HeaderStyle>
    )
}

export default CourseHeader
