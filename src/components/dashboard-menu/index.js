import { Container, MenuTitle, SubMenuContainer, SubMenu } from './style';


const DashboardMenu = (props) => {
    return(
        <Container>
            <MenuTitle>{props.menuTitle}</MenuTitle>
            <SubMenuContainer>
                <SubMenu href="#">{props.firstItem}</SubMenu>
                <SubMenu href="#">{props.secondItem}</SubMenu>
                <SubMenu href="#">{props.thirdItem}</SubMenu>
            </SubMenuContainer>
        </Container>
    )
}

export default DashboardMenu;
