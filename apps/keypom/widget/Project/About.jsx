const ownerId = "/*__@appAccount__*/";

const { name } = props.profile;
const description = props.description;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
`;

const Header = styled.div`
  color: #2e2e2e;
  font-size: 32px;
  font-weight: 600;
  // font-family: Lora;
`;

const DonationsInfo = () => (
  <Widget
    src={`${ownerId}/widget/Project.DonationsInfo`}
    props={{
      ...props,
    }}
  />
);

const About = () => (
  <Widget
    src={`${ownerId}/widget/Project.AboutItem`}
    props={{
      ...props,
      title: "Overview",
      text: description,
      
    }}
  />
);

return (
  <Container>
    <Header>About {name}</Header>
    <About />
  </Container>
);
