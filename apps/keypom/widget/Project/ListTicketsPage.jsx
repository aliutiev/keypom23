
const ownerId = "/*__@appAccount__*/";
const registryId = "registry.potlock.near"; // TODO: update when registry is deployed

const keypomRegistryId = 'testing-nearcon-keypom.testnet'
const eventRegistryId = 'dev-1699521073288-13420165222235'

// const keypomRegistryId = 'testing-nearcon-keypom.testnet'

const IPFS_NEAR_BASE_URL = "https://ipfs.near.social/ipfs/";
const KEYPOM_HERO_BANNER_URL = IPFS_NEAR_BASE_URL + "bafkreidjlppcmkzudgtytcgrblnvuqo2in6637ugrmcfladdiqa3kebnyu"

const IPFS_BASE_URL = "https://nftstorage.link/ipfs/";
const DEFAULT_BANNER_IMAGE_URL =
  IPFS_BASE_URL + "bafkreih4i6kftb34wpdzcuvgafozxz6tk6u4f5kcr2gwvtvxikvwriteci";
const DEFAULT_PROFILE_IMAGE_URL =
  IPFS_BASE_URL + "bafkreibwq2ucyui3wmkyowtzau6txgbsp6zizy4l2s5hkymsyv6tc75j3u";

const getImageUrlFromSocialImage = (image) => {
  if (image.url) {
    return image.url;
  } else if (image.ipfs_cid) {
    return IPFS_BASE_URL + image.ipfs_cid;
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const HeroOuter = styled.div`
  padding: 136px 64px;
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 24px;
  padding: 96px 64px 24px 64px;
`;

const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #2e2e2e;
  font-family: Mona-Sans;
`;

const ProjectsCount = styled.div`
  color: #7b7b7b;
  font-size: 24px;
  font-weight: 400;
  margin-left: 32px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 0px 64px 96px 64px;
  // background: #fafafa;
`;

const HeroContainer = styled.div`
  width: 100%;
  min-height: 700px;
  position: relative;
`;

const Hero = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const CATEGORY_MAPPINGS = {
  "social-impact": "Social Impact",
  "non-profit": "NonProfit",
  climate: "Climate",
  "public-good": "Public Good",
  "de-sci": "DeSci",
  "open-source": "Open Source",
  community: "Community",
  education: "Education",
};


const eventById = Near.view(eventRegistryId, "get_event_information", { event_id: "moon-party" })
let events = Near.view(eventRegistryId, "get_events", {}) // will be a vector array

if (!state.registeredEvents) {
  const drops = Near.view(keypomRegistryId, "get_drops_for_funder", { account_id: "minqi.testnet" });
  const tickets = Near.view(eventRegistryId, "get_all_resales", {})
  const ticketsOwned = Near.view(eventRegistryId, "get_keys_for_owner", { account_id: "minqi.testnet" })

  console.log('TICKETS ---------')
  console.log(tickets)
  console.log('name', tickets[0].name)
  console.log(ticketsOwned)


  let profileImageUrl = DEFAULT_PROFILE_IMAGE_URL;
  if (profileData.image) {
    const imageUrl = getImageUrlFromSocialImage(profileData.image);
    if (imageUrl) profileImageUrl = imageUrl;
  }

  // get banner image URL
  let bannerImageUrl = DEFAULT_BANNER_IMAGE_URL;
  if (profileData.backgroundImage) {
    const imageUrl = getImageUrlFromSocialImage(profileData.backgroundImage);
    if (imageUrl) bannerImageUrl = imageUrl;
  }

  State.update({
    registeredEvents: formattted,
  });
}

return (
  <>
    <ProjectsContainer>
      <SectionHeader>
        <SectionTitle>All tickets</SectionTitle>
        <ProjectsCount>Resale Ticket Count {tickets.length}</ProjectsCount>

      </SectionHeader>


      <Widget
        src={`${ownerId}/widget/Project.ListEvents`}
        props={{
          events,
          renderItem: (events) => (
            // <div>hello event {events.name} abc</div>

            <Widget
              src={`${ownerId}/widget/Project.CardEvent`}
              props={{
                events,
                ...props,
              }}
            />
          ),
        }}
      />
      <Widget
        src={`${ownerId}/widget/Project.ListDrops`}
        props={{
          drops,
          renderItem: (drop) => (
            <Widget
              src={`${ownerId}/widget/Project.CardDrop`}
              props={{
                project,
                ...props,
              }}
            />
          ),
        }}
      />

    </ProjectsContainer>
  </>
);
