import { Title, Container } from "./section.styled.jsx";

const Section = (title, children) => {
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>;
};

export default Section;
