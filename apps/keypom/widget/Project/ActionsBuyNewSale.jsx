const ownerId = "/*__@appAccount__*/";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between';
  width: 100%;
`;

const SubRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`;

const eventRegistryId = 'dev-1699521073288-13420165222235'
const tickets = Near.view(eventRegistryId, "view_keypom_contract", { account_id: "minqi.testnet" })



// function generateKey = () => {
//   const str = ''
// }

const Actions = () => (
  <Widget
    src={`${ownerId}/widget/Project.Actions`}
    props={{
      ...props,
      drop_ids,
      event_id
    }}
  />
);

return (
  <Container className="gx-0">
    <SubRow className="col-12">
      <div>Purchase Options</div>
      {props.drop_ids.map((drop, index) => (
        <Widget
          src={`${ownerId}/widget/Buttons.ActionButton`}
          props={{
            type: "tertiary",
            // Use a template literal and a ternary operator to change the text based on the index
            text: `Buy ${index === 0 ? 'Premium' : index === 1 ? 'Regular' : 'Discount'} Ticket`,
            onClick: () => {
              const attachedDeposit = "70000000000000000000000000"
              const key = {
                public_key: 'ed25519:1PJDR1iyzQuNinFhKzZdwDXwmjTGtvMM6XfYjiGCWus',
                key_owner: 'olympihacks2.testnet',
              }
              console.log('action button pressed', index);
              try {
                console.log('props ', props.event_id)
                const buyNew = Near.call(eventRegistryId, "buy_initial_sale", {
                  event_id: props.event_id,
                  new_key_info: key,
                  ticket_tier: 1,
                }, 1000000000000 * 150, attachedDeposit);
              } catch (error) {
                console.log(`Error purchasing ticket: `, error);
              }
            },
          }}
        />
      ))}


    </SubRow>

  </Container>
);
