const ownerId = "/*__@appAccount__*/";
const registryId = "registry.potlock.near";
const horizonId = "nearhorizon.near";

const IPFS_BASE_URL = "https://nftstorage.link/ipfs/";
// const DEFAULT_BANNER_IMAGE_URL =
//   IPFS_BASE_URL + "bafkreih4i6kftb34wpdzcuvgafozxz6tk6u4f5kcr2gwvtvxikvwriteci";
const DEFAULT_PROFILE_IMAGE_URL =
  IPFS_BASE_URL + "bafkreifel4bfm6hxmklcsqjilk3bhvi3acf2rxqepcgglluhginbttkyqm";
const ADD_TEAM_MEMBERS_ICON_URL =
  IPFS_BASE_URL + "bafkreig6c7m2z2lupreu2br4pm3xx575mv6uvmuy2qkij4kzzfpt7tipcq";
const CLOSE_ICON_URL =
  IPFS_BASE_URL + "bafkreifyg2vvmdjpbhkylnhye5es3vgpsivhigkjvtv2o4pzsae2z4vi5i";

const NEAR_ACCOUNT_ID_REGEX = /^(?=.{2,64}$)(?!.*\.\.)(?!.*-$)(?!.*_$)[a-z\d._-]+$/i;

const MAX_TEAM_MEMBERS_DISPLAY_COUNT = 5;

if (!context.accountId) {
  return (
    <Widget
      src={`${ownerId}/widget/InfoSegment`}
      props={{
        title: "Not logged in!",
        description: "You must log in to create a new project!",
      }}
    />
  );
}

const existingHorizonProject = Near.view(horizonId, "get_project", {
  account_id: context.accountId,
});

async function handleSubmit() {
  for (let i = 0; i < state.numTickets; i++) {

    const mintVariables = {
      eventCategory: state.eventCategory,
      ticketPrice: state.ticketPrices[i], 
      eventName: state.name,
      ownerId,
    };



    try {
      const mintResult = await Near.write(eventRegistryId, "mintToken", mintVariables);
      console.log(`Ticket ${i + 1} minted successfully`, mintResult);
    } catch (error) {
      console.error(`Error minting ticket ${i + 1}: `, error);
      break; 
    }
  }

}


const eventRegistryId = 'dev-1699521073288-13420165222235';
let events = Near.view(eventRegistryId, "get_events", { projectId }) // will be a vector array

const imageHeightPx = 120;
const profileImageTranslateYPx = 220;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 64px 72px 64px;
`;

const LowerBannerContainer = styled.div`
  position: absolute;
  bottom: -210px;
  left: 0px;
  display: flex;
  align-items: stretch; /* Ensuring child elements stretch to full height */
  justify-content: space-between;
  width: 100%;
`;

const LowerBannerContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-left: 190px;
`;

const LowerBannerContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end; /* Pushes TeamContainer to the bottom */
  flex: 1;
  // background: yellow;
`;

const TeamContainer = styled.div`
  width: 200px;
  height: 30px;
  // background: green;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  // gap: -40px;
`;

const AddTeamMembers = styled.a`
  margin: 0px 0px 16px 36px;
  cursor: pointer;
  color: #dd3345;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    text-decoration: none;
  }
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 148px 0 148px;
  width: 100%;
`;

const FormDivider = styled.div`
  height: 2px;
  width: 100%;
  background-color: #ebebeb;
`;

const FormSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 160px;
  margin: 48px 0 48px 0;
`;

const FormSectionLeftDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  // background-color: yellow;
  gap: 16px;
`;

const FormSectionRightDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  // background-color: lightblue;
`;

const FormSectionTitle = styled.div`
  color: #2e2e2e;
  font-size: 16;
  font-weight: 600;
  word-wrap: break-word;
`;

const FormSectionDescription = styled.div`
  color: #2e2e2e;
  font-size: 16;
  font-weight: 400;
  word-wrap: break-word;
`;

const FormSectionIsRequired = styled.div`
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word;
  position: relative;
`;

const SvgContainer = styled.div`
  position: absolute;
  top: -6;
  left: -26;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
`;

const Space = styled.div`
  height: ${(props) => props.height}px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  border-radius: 14px;
  // width: 60%;
  padding: 32px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  // z-index: 1000;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`;

const ModalHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  background: #f0f0f0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: ${(props) => (props.cursor ? props.cursor : "default")};
`;

const ModalTitle = styled.div`
  font-color: #2e2e2e;
  font-size: 16px;
  font-weight: 600;
`;

const ModalDescription = styled.p`
  font-color: #2e2e2e;
  font-size: 16px;
  font-weight: 400;
=`;

const MembersCount = styled.span`
  color: #2e2e2e;
  font-weight: 600;
`;

const MembersText = styled.div`
  color: #7b7b7b;
  font-size: 12px;
  font-weight: 400;
`;

const MembersListItem = styled.div`
  padding: 16px 0px;
  border-top: 1px #f0f0f0 solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RemoveMember = styled.a`
  color: #2e2e2e;
  font-size: 14px;
  font-weight: 600;
  visibility: hidden;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
  }

  ${MembersListItem}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const MembersListItemLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

const MembersListItemText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #2e2e2e;
`;

const MoreTeamMembersContainer = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 50%;
  background: #dd3345;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${(props) => props.zIndex};
  margin-right: -8px;
`;

const MoreTeamMembersText = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`;

State.init({
  name: "",
  nameError: "",
  category: "",
  categoryError: "",
  description: "",
  descriptionError: "",
  website: "",
  websiteError: "",
  twitter: "",
  twitterError: "",
  telegram: "",
  telegramError: "",
  github: "",
  githubError: "",
  socialDataFetched: false,
  socialDataIsFetching: false,
  registeredProjects: null,
  getRegisteredProjectsError: "",
  isModalOpen: false,
  teamMember: "",
  teamMembers: [],
  nearAccountIdError: "",
  amount: 0,
  ticketPrice: 0,
});

const getImageUrlFromSocialImage = (image) => {
  if (image.url) {
    return image.url;
  } else if (image.ipfs_cid) {
    return IPFS_BASE_URL + image.ipfs_cid;
  }
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
    </ModalOverlay>
  );
};

if (context.accountId) {
  console.log('account id', context.accountId);
  Near.asyncView("v1.social08.testnet", "get", { keys: [`${context.accountId}/profile/**`] })
    .then((socialData) => {
      if (!socialData) return;
      const profileData = socialData[context.accountId].profile;
      if (!profileData) return;
      // description
      const description = profileData.description || "";
      const category = typeof profileData.category == "string" ? profileData.category : "";
      // linktree
      const linktree = profileData.linktree || {};
      const twitter = linktree.twitter || "";
      const telegram = linktree.telegram || "";
      const github = linktree.github || "";
      const website = linktree.website || "";
      // team
      const team = profileData.team || {};
      // update state
      State.update({
        name: profileData?.name || "",
        description,
        category,
        twitter,
        telegram,
        github,
        website,
        socialDataFetched: true,
      });
    })
    .catch((e) => {
      console.log("error getting social data: ", e);
      State.update({ socialDataFetched: true });
    });
}



const handleCreateProject = (e) => {
  if (isCreateProjectDisabled) return;
  const socialArgs = {
    data: {
      [context.accountId]: {
        profile: {
          name: state.name,
          category: state.category,
          description: state.description,
          linktree: {
            website: state.website,
            twitter: state.twitter,
            telegram: state.telegram,
            github: state.github,
          },
        },
      },
    },
  };
  const potlockRegistryArgs = {};
  const horizonArgs = { account_id: context.accountId };
  const transactions = [
    // set data on social.near
    {
      contractName: "social.near",
      methodName: "set",
      deposit: Big(JSON.stringify(socialArgs).length * 0.00003).mul(Big(10).pow(24)),
      args: socialArgs,
    },
  ];
  if (!props.edit) {
    transactions.push(
      // register project on potlock
      {
        contractName: registryId,
        methodName: "register",
        deposit: Big(0.05).mul(Big(10).pow(24)),
        args: potlockRegistryArgs,
      }
    );

  }
  Near.call(transactions);
};


const CATEGORY_MAPPINGS = {
  music: "Music Concerts",
  theater: "Theater Plays",
  sports: "Sports Events",
  conferences: "Conferences",
  exhibitions: "Exhibitions",
  festivals: "Festivals",
  workshops: "Workshops",
  comedy: "Comedy Shows",
  networking: "Networking Events",
  charity: "Charity Events",
};


const FormSectionLeft = (title, description, isRequired) => {
  return (
    <FormSectionLeftDiv>
      <FormSectionTitle>{title}</FormSectionTitle>
      <FormSectionDescription>{description}</FormSectionDescription>
      <FormSectionIsRequired
        style={{
          color: isRequired ? "#DD5633" : "#7B7B7B",
        }}
      >
        {isRequired ? "Required" : "Optional"}
        {isRequired && (
          <SvgContainer style={{ top: -6, left: -26 }}>
            <svg
              width="117"
              height="31"
              viewBox="0 0 117 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M81.8 3.40116C82.247 3.1908 83.0709 3.13488 82.6 2.60116C81.0461 0.840105 83.0819 0.798833 78.6667 1.22338C65.6302 2.47689 52.5192 4.47997 39.6667 6.95672C31.3106 8.56697 19.0395 10.1936 12.7333 17.09C3.95785 26.6869 29.2286 29.1656 32.9333 29.3567C53.953 30.4413 75.9765 28.9386 96.5111 24.1789C99.8286 23.41 122.546 18.5335 112.733 11.5345C107.621 7.88815 100.796 6.47335 94.7333 5.75672C77.7504 3.74928 60.1141 5.22649 43.2222 7.35671C28.8721 9.16641 14.4138 11.8506 1 17.4012"
                stroke="#2E2E2E"
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </svg>
          </SvgContainer>
        )}
      </FormSectionIsRequired>
    </FormSectionLeftDiv>
  );
};



return (
  <Container>
    {!state.socialDataFetched || !events ? (
      <div class="spinner-border text-secondary" role="status" />
    ) : !props.edit && registeredProject ? (
      <Container>
        <h1 style={{ textAlign: "center" }}>You've successfully registered!</h1>
        <ButtonsContainer>
          <Widget
            src={`${ownerId}/widget/Buttons.NavigationButton`}
            props={{
              type: "primary",
              text: "View your project",
              disabled: false,
              href: `?tab=project&projectId=${registeredProject.id}`,
            }}
          />
          <Widget
            src={`${ownerId}/widget/Buttons.NavigationButton`}
            props={{
              type: "secondary",
              text: "View all projects",
              disabled: false,
              href: `?tab=projects`,
            }}
          />
        </ButtonsContainer>
      </Container>
    ) : (
      <>

        <FormBody >
          <FormDivider />
          <FormSectionContainer>
            {FormSectionLeft(
              "Event details",
              "Give an overview of your event including pricing, details and your fanbase.",
              true
            )}
            <FormSectionRightDiv>
              <Widget
                src={`${ownerId}/widget/Inputs.Text`}
                props={{
                  label: "Owner ID *",
                  value: context.accountId,
                  disabled: true,
                }}
              />
              <Space height={24} />
              <Widget
                src={`${ownerId}/widget/Inputs.Text`}
                props={{
                  label: "Event name *",
                  placeholder: "Enter event name",
                  value: state.name,
                  onChange: (name) => State.update({ name }),
                  validate: () => {
                    if (state.name.length < 3) {
                      State.update({ nameError: "Name must be at least 3 characters" });
                      return;
                    }

                    if (state.name.length > 100) {
                      State.update({
                        nameError: "Name must be less than 100 characters",
                      });
                      return;
                    }

                    State.update({ nameError: "" });
                  },
                  error: state.nameError,
                }}
              />
              <Space height={24} />

              <Widget
                src={`${ownerId}/widget/Inputs.TextArea`}
                props={{
                  label: "Overview *",
                  placeholder: "Give a short description of your event",
                  value: state.eventOverview, // Renamed state variable
                  onChange: (eventOverview) => State.update({ eventOverview }), // Use the new name
                  validate: () => {
                    if (state.eventOverview && state.eventOverview.length > 500) { // Updated to new name
                      State.update({
                        eventOverviewError: "Description must be less than 500 characters", // New error state variable
                      });
                      return;
                    }
                    State.update({ eventOverviewError: "" }); // Clear the error using the new state variable
                  },
                  error: state.eventOverviewError, // Updated to new name
                }}
              />

              <Space height={24} />
              <Widget
                src={`${ownerId}/widget/Inputs.Number`}
                props={{
                  label: "# of Ticket Tiers",
                  prefixText: "$", // Assuming you want a dollar prefix for the number input
                  value: state.amount === undefined ? 0 : state.amount,
                  onChange: (amount) => State.update({ amount: Number(amount) }),
                  validate: () => {
                    // You can add any validation you want here
                    if (state.amount < 0) {
                      State.update({
                        amountError: "Value cannot be negative",
                      });
                      return;
                    }
                    console.log('amount', state.amount)
                    State.update({ amountError: "" });
                  },
                  error: state.amountError,
                }}
              />
              <Space height={24} />

              <Widget
                src={`${ownerId}/widget/Inputs.Number`}
                props={{
                  label: "Ticket Price",
                  prefixText: "$", // Assuming you want a dollar prefix for the price input
                  value: state.ticketPrice === undefined ? '' : state.ticketPrice,
                  onChange: (ticketPrice) => State.update({ ticketPrice: Number(ticketPrice) }),
                  validate: () => {
                    // Add validation for ticket price
                    if (state.ticketPrice < 0) {
                      State.update({
                        ticketPriceError: "Price cannot be negative",
                      });
                      return;
                    }
                    State.update({ ticketPriceError: "" });
                  },
                  error: state.ticketPriceError,
                }}
              />
              <Space height={24} />


              <Widget
                src={`${ownerId}/widget/Inputs.Select`}
                props={{
                  label: "Select category *",
                  noLabel: false,
                  placeholder: "Choose category",
                  options: Object.entries(CATEGORY_MAPPINGS).map(([value, text]) => ({
                    value,
                    text,
                  })),
                  value: { text: EVENT_CATEGORY_MAPPINGS[state.eventCategory] || "", value: state.eventCategory },
                  onChange: (selectedOption) => {
                    State.update({
                      eventCategory: selectedOption.value, // Changed to eventCategory
                    });
                  },
                  validate: () => {
                    if (!state.eventCategory) { // Changed to eventCategory
                      State.update({
                        eventCategoryError: "Please select a category", // Changed to eventCategoryError
                      });
                    }
                  },
                  error: state.eventCategoryError, // Changed to eventCategoryError
                }}
              />

              <Space height={24} />
              <Widget
                src={`${ownerId}/widget/Buttons.ActionButton`}
                props={{
                  type: "primary",
                  prefix: "https://",
                  text: "Create an event",
                  disabled: isCreateProjectDisabled,
                  onClick: handleSubmit,
                }}
              />

            </FormSectionRightDiv>
          </FormSectionContainer>
          <FormDivider />

        </FormBody>
        <Modal isOpen={state.isModalOpen} onClose={() => State.update({ isModalOpen: false })}>
          <ModalHeader>
            <ModalHeaderLeft>
              <IconContainer>
                <Icon src={ADD_TEAM_MEMBERS_ICON_URL} />
              </IconContainer>
              <ModalTitle>Add team members</ModalTitle>
            </ModalHeaderLeft>
            <Icon
              cursor={"pointer"}
              src={CLOSE_ICON_URL}
              onClick={() => State.update({ isModalOpen: false })}
            />
          </ModalHeader>
          <ModalDescription>Add NEAR account IDs for your team members.</ModalDescription>

          <Widget
            src={`${ownerId}/widget/Inputs.Text`}
            props={{
              // label: "Project name *",
              placeholder: "NEAR account ID",
              value: state.teamMember,
              onChange: (teamMember) => {
                State.update({ teamMember, nearAccountIdError: "" });
              },
              buttonText: "Add",
              submit: true,
              onClick: console.log('add clicked'),
              handleKeyPress: (e) => {
                if (e.key === "Enter") {

                }
              },
              error: state.nearAccountIdError,
            }}
          />
          <Space height={24} />


        </Modal>
      </>
    )}
  </Container>
);
