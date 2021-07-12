import styled from "styled-components"
import { black } from "../../../../components/colour/colour"


const DropStyle = styled.div`
    .select .placeholder{
        padding-left: 50px; 
    }
    .select{
        height: ${(props) => props.height};
        width: ${(props) => props.width};
        border-radius: ${(props) => props.borderRadius};
        outline: none;
        text-align: center;
        padding: 0 10px;
        color: ${black};
    }
`;

const Dropdown = ({ values, name, height='40px', width='100px', borderRadius = '100px' }) => {
    return ( 
        <DropStyle height={height} width={width} borderRadius={borderRadius}>
            <form className="form">
                <select name ={name} className="select">
                    <option disabled hidden selected className="placeholder">{name}</option>
                    {values.map((value) => (
                        <option key={value.id} value = { value.name }>{ value.name }</option>
                    ))}
                </select>
            </form>
        </DropStyle>
    );
}
    
export default Dropdown
