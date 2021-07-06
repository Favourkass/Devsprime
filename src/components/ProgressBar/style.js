import Styled from "styled-components";

const ProgressBar = Styled.div`

.progress {
	background-color: #d8d8d8;
	border-radius: 20px;
	position: relative;
	margin: 15px 35px;
	height: 5px;
	width: 240px;
}

.progress-done {
	background: linear-gradient(to left, #5C5C5C,#5C5C5C);
	box-shadow: 0 3px 3px -5px #F2709C, 0 2px 5px #F2709C;
	border-radius: 20px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;
}
.complete{
	color: #FFFFFF;
	margin: 15px 35px;


}
`;
export default ProgressBar;
