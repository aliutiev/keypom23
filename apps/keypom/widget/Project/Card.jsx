const ownerId = "/*__@appAccount__*/";
const donationContractId = "donate.potlock.near";
const registryContractId = "registry.potlock.near";

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
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 160px;
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

const { id, bannerImageUrl, profileImageUrl, name, description, tags } = props.project;

return (
  <>
    <Card href={`?tab=project&projectId=${id}`} key={id}>
      <Info>
        <Title>{"name"}</Title>
        <SubTitle>
          {description.length > MAX_DESCRIPTION_LENGTH
            ? description.slice(0, MAX_DESCRIPTION_LENGTH) + "..."
            : description}
        </SubTitle>
        <Widget
          src={`${ownerId}/widget/Project.Tags`}
          props={{
            ...props,
            tags,
          }}
        />
      </Info>
      { }
      { }
      { }
      <Info>
        <Title>{name}</Title>
        <SubTitle>
          {description.length > MAX_DESCRIPTION_LENGTH
            ? description.slice(0, MAX_DESCRIPTION_LENGTH) + "..."
            : description}
        </SubTitle>
        <Widget
          src={`${ownerId}/widget/Project.Tags`}
          props={{
            ...props,
            tags,
          }}
        />
      </Info>
      <DonationsInfoContainer>
        <DonationsInfoItem>
          <Title>{totalDonors || totalDonors === 0 ? totalDonors : "-"}</Title>
          <SubTitle>{totalDonors === 1 ? "Donor" : "Donors"}</SubTitle>
        </DonationsInfoItem>
        <DonationsInfoItem>
          <Title>{props.nearToUsd ? `$${totalAmount}` : `${totalAmount} N`}</Title>
          <SubTitle>Raised</SubTitle>
        </DonationsInfoItem>
      </DonationsInfoContainer>
    </Card>
    {props.registryAdmins && props.registryAdmins.includes(context.accountId) && (
      <Widget
        src={`${ownerId}/widget/Inputs.Select`}
        props={{
          noLabel: true,
          options: PROJECT_STATUSES.map((status) => ({
            value: status,
            text: status,
          })),
          value: { text: props.project.status, value: props.project.status },
          onChange: (status) => {
            if (status.value != project.status) {
              Near.call([
                {
                  contractName: registryContractId,
                  methodName: "admin_set_project_status",
                  args: { project_id: id, status: status.value },
                },
              ]);
            }
          },
          containerStyles: {
            padding: "16px 24px",
          },
        }}
      />
    )}
  </>
);
