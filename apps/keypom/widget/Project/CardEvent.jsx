const ownerId = "/*__@appAccount__*/";
const donationContractId = "donate.potlock.near";
const registryContractId = "registry.potlock.near";

const TOKEN_DECIMALS = 24;

const Card = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30%;
  min-width: 320px;
  border-radius: 7px;
  background: white;
  box-shadow: 0px -2px 0px #dbdbdb inset;
  border: 1px solid #dbdbdb;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    .description {
      display: block; // or flex, inline, inline-block, etc. depending on your design
      visibility: visible;
    }
    
  }

`;

const Description = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7); 
  color: white; 
  padding: 10px; 
  border-radius: 0 0 7px 7px; 
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px; // playing
  padding: 16px 24px;
  gap: 16px;
  flex: 1;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2e2e2e;
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #2e2e2e;
  word-wrap: break-word;
`;

const Tags = styled.div`
  display: flex;
  gap: 8px;
`;

const Tag = styled.span`
  box-shadow: 0px -0.699999988079071px 0px rgba(123, 123, 123, 0.36) inset;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid rgba(123, 123, 123, 0.36);
  color: #2e2e2e;
`;

const DonationsInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  width: 100%;
  border-top: 1px #f0f0f0 solid;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  width: 100%;
  margin-bottom: 16px;
`;

const DonationsInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const MAX_DESCRIPTION_LENGTH = 120;

const EVENT_STATUS = [
  "UPCOMING",
  "HAPPENNING",
  "ENDED",
  "SOLD_OUT",
];

const { name, description, drop_ids, price_by_drop_id, max_tickets, max_markup, event_id } = props.events;
let display_price = (price_by_drop_id[drop_ids[0]] / (Math.pow(10, TOKEN_DECIMALS))).toFixed(0);

return (
  <>
    <Card href={`?tab=project&projectId=${event_id}`} key={event_id}>
      <Info>
        <Title>{name}</Title>
        <SubTitle>
          {description.length > MAX_DESCRIPTION_LENGTH
            ? description.slice(0, MAX_DESCRIPTION_LENGTH) + "..."
            : description}
        </SubTitle>
        <Description className="description">
          {description}
        </Description>
      </Info>
      <DonationsInfoContainer>
        <DonationsInfoItem>
          <Title>{`Drops`}</Title>
          <SubTitle>{`${drop_ids.length}`}</SubTitle>
        </DonationsInfoItem>
        <DonationsInfoItem>
          <Title>{`Price`}</Title>
          <SubTitle>{`${display_price} N`}</SubTitle>
        </DonationsInfoItem>
      </DonationsInfoContainer>
      <InfoContainer>
        <Widget
          src={`${ownerId}/widget/Buttons.NavigationButton`}
          props={{
            type: "tertiary",
            text: 'View Event',
            href: `?tab=project&projectId=${event_id}`, // If the Widget can handle the href prop
            onClick: (e) => {
              // Prevent default action if it's not an anchor tag
              e.preventDefault();
              window.location.href = `?tab=project&projectId=${event_id}`;
            },
          }}
          key={drop_id}
        />
      </InfoContainer>
    </Card>
  </>
);
