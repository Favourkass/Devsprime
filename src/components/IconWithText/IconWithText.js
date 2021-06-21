import images from "./IconData";
import {
  MainContainer,
  ImageContainer,
  Mapper,
  Text,
  Icon,
} from "./TextIcon.styles";

function MyIcons() {
  return (
    <MainContainer data-testid="ancestor">
      {images.map((person) => (
        <>
          <ImageContainer data-testid="descendant">
            <Mapper  WIDTH="70px" HEIGHT="65px" key={person.id}>
              <Icon  WIDTH="" src={person.image} alt="logo" key={person.id} />
            </Mapper>
            <Text SIZE="" COLOR="">
              {person.text}
            </Text>
          </ImageContainer>
        </>
      ))}
    </MainContainer>
  );
}
export default MyIcons;
