const ownerId = "/*__@appAccount__*/";

const navHeightPx = 110;

const Nav = styled.div`
  // commenting out stickiness for now
  // position: fixed;
  // top: 0;
  // left: 0;
  width: 100%;
  display: flex;
  padding: 0 64px 0 64px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  height: ${navHeightPx}px;
  background: #ffffff;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    display: none;
  }

  & > a {
    width: 10rem;
  }
`;

const NavLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NavRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NavLogo = styled.a`
  text-align: center;
  color: #2e2e2e;
  font-size: 23.95px;
  font-weight: 700;
  line-height: 23.95px;
  word-wrap: break-word;
  margin-right: 48px;
  text-decoration: none;

  :hover {
    text-decoration: none;
  }

  img {
    height: 50px;
    /* Add other styles you want for your image here */
  }
  
`;


const NavTabs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NavTab = styled.a`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.selected ? "#2E2E2E" : "#7B7B7B")};
  font-size: 14px;
  font-weight: ${(props) => (props.selected ? 500 : 400)};
  line-height: 16px;
  word-wrap: break-word;
  text-decoration: none;
  position: relative;

  :not(:last-child) {
    margin-right: 32px;
  }

  :hover {
    text-decoration: none;
  }
`;

const CartCount = styled.div`
  position: absolute;
  top: -5px;
  right: -10px;
  // top: 20px;
  // right: 20px;
  text-align: center;
  color: #dd3345;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  word-wrap: break-word;
`;

const CartModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding-top: ${navHeightPx * 0.8}px;
  padding-right: 64px;
  // padding-right: 500px;
  z-index: 1000;
`;

const CartModalContent = styled.div`
  width: 383px;
  padding: 24px 0px;
  // background: yellow;
  background: white;
  border-radius: 10px;
  box-shadow: 20px 20px 32px -4px rgba(93, 93, 93, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  // z-index: 1000;
`;

const ModalHeader = styled.div`
  width: 100%;
  // height: 100%;
  padding: 24px 24px 8px 24px;
  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;
  // background: pink;
  border-bottom: 1px #dbdbdb solid;
  position: relative;
`;

const ModalHeaderText = styled.div`
  text-align: center;
  color: #2e2e2e;
  font-size: 14px;
  font-family: Mona-Sans;
  font-weight: 600;
  line-height: 16px;
  word-wrap: break-word;
`;

const NoProjectsText = styled.div`
  text-align: center;
  color: #2e2e2e;
  font-size: 16px;
  font-weight: 500;
  margin-top: 24px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 24px 0 24px;
`;

const Ear = styled.div`
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
  transform-origin: 0 0;
  background: white;
  position: absolute;
  top: -11px;
  right: 32px;
  z-index: 1000;
`;

const tabOptions = [
  { text: "Events", link: "events", disabled: false },
  { text: "Resale Events", link: "test", disabled: false },
  { text: "Create Event", link: "createevent", disabled: false },
  { text: "My Tickets", link: "tickets", disabled: false },

  // { text: "Pots", link: "pots", disabled: true },
  // { text: "Feed", link: "feed", disabled: true },
];

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <CartModal onClick={onClose}>
      <CartModalContent onClick={(e) => e.stopPropagation()}>{children}</CartModalContent>
    </CartModal>
  );
};

return (
  <>
    <Nav>
      <NavLeft>
        <NavLogo href={`?tab=projects`}>
          <GetLogo />
        </NavLogo>
      </NavLeft>
      <NavRight>
        <NavTabs>
          {tabOptions.map((tab) => {
            return (
              <NavTab
                href={`?tab=${tab.link}`}
                disabled={tab.disabled}
                onClick={(e) => {
                  if (tab.disabled) e.preventDefault();
                }}
                selected={props.tab === tab.link}
              >
                {tab.text}
              </NavTab>
            );
          })}
          {/*<NavTab
            onClick={(e) => {
              props.setIsCartModalOpen(!props.isCartModalOpen);
            }}
            selected={props.tab === "cart"}
          >
            Cart
            <CartCount>{Object.keys(props.cart).length}</CartCount>
          </NavTab>*/}
        </NavTabs>
      </NavRight>
    </Nav>
    <Modal isOpen={props.isCartModalOpen} onClose={() => props.setIsCartModalOpen(false)}>
      {/* <div>hi</div> */}
      <ModalHeader>
        <ModalHeaderText>Donation cart</ModalHeaderText>
        <ModalHeaderText>
          {Object.keys(props.cart).length}{" "}
          <span style={{ fontWeight: 400, color: "#7B7B7B" }}>
            {Object.keys(props.cart).length === 1 ? "project" : "projects"}
          </span>
        </ModalHeaderText>
        {/* <Ear /> */}
      </ModalHeader>
      {Object.keys(props.cart).length === 0 ? (
        <NoProjectsText>Get shopping! 💸</NoProjectsText>
      ) : (
        Object.keys(props.cart).map((projectId) => {
          // return <CartItem projectId={projectId} Object.keys(props.cart).length={Object.keys(props.cart).length} />;
          return (
            <Widget
              src={`${ownerId}/widget/Cart.CartModalItem`}
              props={{
                ...props,
                projectId,
                removeProjectsFromCart: (projectIds) => {
                  props.removeProjectsFromCart(projectIds);
                  if (Object.keys(props.cart).length === 1) {
                    props.setIsCartModalOpen(false);
                  }
                },
              }}
            />
          );
        })
      )}
      <ButtonContainer>
        <Widget
          src={`${ownerId}/widget/Buttons.NavigationButton`}
          props={{
            type: "primary",
            text: "Proceed to donate",
            disabled: Object.keys(props.cart).length === 0,
            href: `?tab=cart`,
            style: {
              width: "100%",
              marginBottom: "16px",
            },
          }}
        />
        <Widget
          src={`${ownerId}/widget/Buttons.ActionButton`}
          props={{
            type: Object.keys(props.cart).length === 0 ? "primary" : "secondary",
            text: "Continue shopping",
            onClick: () => props.setIsCartModalOpen(false),
            style: {
              width: "100%",
            },
          }}
        />
      </ButtonContainer>
      <Ear />
    </Modal>
  </>
);
