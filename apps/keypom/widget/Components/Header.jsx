const ownerId = "/*__@appAccount__*/";

const loraCss = fetch("https://fonts.googleapis.com/css2?family=Lora&display=swap").body;

const headerTitleFontSizePx = 88;

const HeaderContainer = styled.div`
  width: 100%;
  // background: #fffaf4;
  // background: white;
  padding: 80px 64px;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props.centered ? "center" : "flex-start"};
`;

const HeaderTitle = styled.div`
  color: #2e2e2e;
  font-size: ${headerTitleFontSizePx}px;
  font-weight: 500;
  word-wrap: break-word;
  position: relative;
  text-align: center;
  z-index: 1;
  position: relative;
  font-family: "Lora";
  ${loraCss}

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const HeaderDescription = styled.div`
  color: #2e2e2e;
  font-size: 32px;
  font-weight: 400;
  word-wrap: break-word;
  max-width: 866px;
  text-align: ${props.centered ? "center" : "flex-start"};
  margin-top: 32px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
`;

const Underline = styled.div`
  position: absolute;
  top: ${headerTitleFontSizePx - 40}px;
  left: -40px;
  z-index: -1;

  @media (max-width: 768px) {
    top: 30px;
    left: -30px;
`;

const containerStyle = props.containerStyle ?? {};

return (
  <HeaderContainer style={containerStyle}>
    <HeaderContent>
      <HeaderTitle>
        {props.title1}
      </HeaderTitle>
      {props.title2 && <HeaderTitle>{props.title2}</HeaderTitle>}
      <HeaderDescription>{props.description}</HeaderDescription>
    </HeaderContent>
    <ButtonsContainer>
      {props.buttonPrimary && props.buttonPrimary}
      {props.buttonSecondary && props.buttonSecondary}
    </ButtonsContainer>
  </HeaderContainer>
);
