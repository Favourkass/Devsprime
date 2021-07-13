import {ModalWrapper} from './style'
import ClipLoader from "react-spinners/ClipLoader";


const ModalCard = (props) => (
  <ModalWrapper background={props.background}>
    
    <div className="header">
      <div className="title">{props.title}</div>
      <div className="close-cont">
        <button className="close" onClick={props.handleClose}>
          X
        </button>
      </div>
    </div>

    <div className="content">
      <div className="content-header">{props.contentHeader}</div>
      <div className="content-body">{props.contentBody}</div>
    </div>

    <div className="footer">
      <button onClick={props.handleLeftButton} className="btn save-btn">
        {props.loading ? (<ClipLoader size={20} loading={props.loading} />) : (
          props.leftButton
        )}
      </button>
      <button onClick={props.handleRightButton} className="btn cancel-btn">
        {props.rightButton}
      </button>
    </div>
  </ModalWrapper>
);

export default ModalCard