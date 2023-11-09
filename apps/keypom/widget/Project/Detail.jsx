const ownerId = "/*__@appAccount__*/";
const registryId = "registry.potlock.near";

const profile = props.profile ?? Social.getr(`${props.projectId}/profile`);
const projects = props.projects ?? Near.view(registryId, "get_projects", {});


const name = profile.name || "No-name profile";
const image = profile.image;
const backgroundImage = profile.backgroundImage;
const tags = Object.keys(profile.tags ?? { 'abc': 'efg' });

const Wrapper = styled.div`
  margin-top: calc(-1 * var(--body-top-padding, 0));
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


const imageHeightPx = 120;
const profileImageTranslateYPx = 50;

return (
  <Wrapper>
    <div>
      <div style={{ padding: `${profileImageTranslateYPx}px 68px` }}>
        <div class="row align-items-start">
          <div class="col-3">

            <Widget
              src={`${ownerId}/widget/Project.NavOptions`}
              props={{
                ...props,
              }}
            />
            <Widget
              src={`${ownerId}/widget/Project.Linktree`}
              props={{
                ...props,
                linktree: profile.linktree,
              }}
            />
          </div>
          <div class="col-9">
            <Widget
              src={`${ownerId}/widget/Project.Body`}
              props={{
                ...props,
                profile,
                events,
              }}
            />
          </div>
        </div>
      </div>
    </div>

  </Wrapper>
);
