const ownerId = "potlock.near";

const IPFS_BASE_URL = "https://nftstorage.link/ipfs/";
const TRASH_ICON_URL =
  IPFS_BASE_URL + "bafkreicwtubzlywmtvoxc4tqjfturyi5oqxtbpezceosiw3juv2d4uf7om";

const Container = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: row;
  height: 100%;
  min-height: 100vh;
`;

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;
  width: 100%;
  padding: 24px;
  gap: 24px;
`;

// const ButtonsContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 24px;
//   width: 50%;
//   align-items: center;
//   justify-content: center;
// `;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  //   background: #fafafa;
  width: 55%;
  //   background: pink;
  padding: 48px 40px 48px 64px;
  gap: 48px;
`;

const ColumnRight = styled.div`
  //   background: yellow;
  flex: 1;
  padding: 152px 148px 152px 84px;
  border-left: 1px #c7c7c7 solid;
`;

const Title = styled.div`
  color: #2e2e2e;
  font-size: 48px;
  font-family: Lora;
  font-weight: 500;
  line-height: 56px;
  word-wrap: break-word;
  //   margin-bottom: 64px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const ActionsContainer = styled.div`
  width: 100%;
  padding: 16px;
  background: white;
  border: 1px solid #dbdbdb;
  box-shadow: 0px -2px 0px #dbdbdb inset;
  border-radius: 6px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
  gap: 24px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const SubTitle = styled.div`
  color: #2e2e2e;
  font-weight: 600;
  font-size: 14px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 200px;
  background: white;
  border: 1px solid #dbdbdb;
  box-shadow: 0px -2px 0px #dbdbdb inset;
  border-radius: 6px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;

const ItemLeft = styled.div`
  height: 100%;
  padding: 24px 16px;
  border-right: 1px solid #dbdbdb;
`;

const ItemRight = styled.div`
  padding: 24px 24px 24px 16px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

State.init({
  selectedProjectIds: [],
  masterSelectorSelected: false,
});

const allSelected =
  state.selectedProjectIds.length !== 0 &&
  state.selectedProjectIds.length === Object.keys(props.cart).length;

return (
  <div>
    <Container>
      {props.checkoutSuccess ? (
        <SuccessContainer>
          <Title>Thanks for donating!</Title>
          {/* <ButtonsContainer> */}
          <Widget
            src={`${ownerId}/widget/Buttons.NavigationButton`}
            props={{
              href: `https://nearblocks.io/txns/${props.checkoutSuccessTxHash}`,
              target: "_blank",
              type: "secondary",
              text: "View transaction",
              disabled: !props.checkoutSuccessTxHash,
              style: {
                width: "300px",
              },
            }}
          />
          <Widget
            src={`${ownerId}/widget/Buttons.NavigationButton`}
            props={{
              href: `?tab=projects`,
              type: "primary",
              text: "Explore events",
              style: {
                width: "300px",
              },
            }}
          />
          {/* </ButtonsContainer> */}
        </SuccessContainer>
      ) : (
        <>
          <ColumnLeft>
            <Title>Donation Cart</Title>
            <ActionsContainer>
              <InnerContainer>
                <Widget
                  src={`${ownerId}/widget/Inputs.Checkbox`}
                  props={{
                    id: "masterSelector",
                    disabled: Object.keys(props.cart).length === 0,
                    checked: state.masterSelectorSelected,
                    onClick: (e) => {
                      // if allSelected, then deselect all
                      // if not allSelected, then select all
                      const selectedProjectIds = Object.keys(props.cart).filter((_) => {
                        if (allSelected) {
                          return false;
                        }
                        return true;
                      });
                      State.update({
                        selectedProjectIds,
                        masterSelectorSelected: !allSelected,
                      });
                    },
                  }}
                />
                <SubTitle>Select all</SubTitle>
              </InnerContainer>
              <InnerContainer
                style={{ cursor: "pointer" }}
                onClick={() => {
                  // doesn't do anything if nothing selected
                  if (state.selectedProjectIds.length === 0) return;
                  // delete selected projects
                  props.removeProjectsFromCart(state.selectedProjectIds);
                  // uncheck box
                  State.update({ selectedProjectIds: [], masterSelectorSelected: false });
                }}
              >
                <Icon
                  src={TRASH_ICON_URL}
                  //   onClick={() => {
                  //     // doesn't do anything if nothing selected
                  //     if (state.selectedProjectIds.length === 0) return;
                  //     // delete selected projects
                  //     props.removeProjectsFromCart(state.selectedProjectIds);
                  //     // uncheck box
                  //     State.update({ selectedProjectIds: [], masterSelectorSelected: false });
                  //   }}
                />
                <SubTitle>Delete</SubTitle>
              </InnerContainer>
            </ActionsContainer>
            {Object.keys(props.cart).length === 0 ? (
              <div>No items in cart</div>
            ) : (
              Object.keys(props.cart).map((projectId) => {
                const checked = state.selectedProjectIds.includes(projectId);
                return (
                  <Widget
                    src={`${ownerId}/widget/Cart.CheckoutItem`}
                    props={{
                      ...props,
                      projectId,
                      checked,
                      handleCheckboxClick: (e) => {
                        // if selected, then deselect
                        // else, select
                        let selectedProjectIds = state.selectedProjectIds;
                        if (checked) {
                          selectedProjectIds = selectedProjectIds.filter((id) => id !== projectId);
                        } else {
                          selectedProjectIds.push(projectId);
                        }
                        const updatedState = {
                          selectedProjectIds,
                        };
                        if (
                          selectedProjectIds.length !== 0 &&
                          selectedProjectIds.length !== Object.keys(props.cart).length
                        ) {
                          updatedState.masterSelectorSelected = false;
                        }
                        State.update(updatedState);
                      },
                    }}
                  />
                );
              })
            )}
          </ColumnLeft>
          <ColumnRight>
            <Widget
              src={`${ownerId}/widget/Cart.BreakdownSummary`}
              props={{
                ...props,
              }}
            />
          </ColumnRight>
        </>
      )}
    </Container>
  </div>
);
