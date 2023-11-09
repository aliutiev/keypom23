const ownerId = "/*__@appAccount__*/";
const IPFS_BASE_URL = "https://nftstorage.link/ipfs/";

const profile = props.profile;
const events = props.events;

const loraCss = fetch("https://fonts.cdnfonts.com/css/lora").body;

const tags = Object.keys(profile.tags ?? {});

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 48px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Name = styled.div`
  font-size: 48px;
  font-weight: 500;
  color: #2e2e2e;
  line-height: 56px;
  font-family: "Lora";
  ${loraCss}
`;

const AccountInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 32px;
`;

const AccountId = styled.div`
  color: #7b7b7b;
  font-size: 16px;
  // font-family: Mona-Sans;
  font-weight: 400;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

const shareSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 16 16"
    stroke="currentColor"
    strokeWidth="0.363"
  >
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
  </svg>
);

const projectLink = `https://near.social//*__@appAccount__*//widget/Index?tab=project&projectId=${props.projectId}${context.accountId && `&referrerId=${context.accountId}`}`;



const projectId = props.projectId;

const eventRegistryId = 'dev-1699521073288-13420165222235';
let currentEvent = Near.view(eventRegistryId, "get_events", {projectId}) // will be a vector array
const { name, description, drop_ids, price_by_drop_id, max_tickets, max_markup, event_id } = currentEvent[0];
console.log(currentEvent[0])
console.log('current event = ', name)
let display_price = (price_by_drop_id[drop_ids[0]] / (Math.pow(10, TOKEN_DECIMALS))).toFixed(0);

const Actions = () => (
  <Widget
    src={`${ownerId}/widget/Project.ActionsBuyNewSale`}
    props={{
      ...props,
      drop_ids, 
      event_id
    }}
  />
);

return (
  <BodyContainer>
    <div>
      <NameContainer>
        <Name>{name} Event </Name>
        {props.projectId === context.accountId && (
          <Widget
            src={`${ownerId}/widget/Buttons.NavigationButton`}
            props={{
              type: "secondary",
              text: "Edit profile",
              disabled: false,
              href: `?tab=editproject&projectId=${props.projectId}`,
            }}
          />
        )}
      </NameContainer>
      <AccountInfoContainer>
        <AccountId>@{'keypomxyz'}</AccountId>
        <Widget
          src={`${ownerId}/widget/Project.Share`}
          props={{
            text: 'keypom.xyz',
            label: "keypom.xyz",
            clipboardIcon: shareSvg,
          }}
        />
      </AccountInfoContainer>
      {/*<Widget
        src={`${ownerId}/widget/Project.Tags`}
        props={{
          ...props,
          tags,
        }}
      />*/}
    </div>

    <Widget
      src={`${ownerId}/widget/Project.About`}
      props={{
        ...props,
        description,
        max_tickets
      }}
    />
    <Actions />

  </BodyContainer>
);
