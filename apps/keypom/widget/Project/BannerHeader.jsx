const accountId = props.projectId;
// if (!accountId) {
//   return "No account banner ID";
// }

const link =
  props.link &&
  (props.link === true
    ? `https://near.social/mob.near/widget/ProfilePage?accountId=${accountId}`
    : props.link);  

const profile = props.profile ?? Social.getr(`${accountId}/profile`);

if (profile === null) {
  return "Loading banner header";
}

const name = profile.name || "No-name profile";
const image = profile.image;
const backgroundImage = profile.backgroundImage;
const tags = Object.keys(profile.tags ?? {});
const imageStyle = props.imageStyle ?? {};
const backgroundStyle = props.backgroundStyle ?? {};
const containerStyle = props.containerStyle ?? {};

const Wrapper = styled.div`
  overflow: hidden;
  margin: 0 -12px;
`;

return (
  <div className="pt-0 position-relative" style={{ ...containerStyle }}>
    {backgroundImage && (
      <Widget
        src="mob.near/widget/Image"
        props={{
          image: backgroundImage,
          alt: "profile background",
          className: "position-absolute w-100",
          style: { ...backgroundStyle },
          fallbackUrl:
            "https://ipfs.near.social/ipfs/bafkreiad5gcivpctb54pifyhjknr5ecfv4b6irko5oxcqoqckolpn5we7e",
        }}
      />
    )}
    <div
      className="profile-picture d-inline-block"
      style={{ transform: `translateY(${props.profileImageTranslateYPx ?? 160}px)` }}
    >
      <Widget
        src="mob.near/widget/ProfileImage"
        props={{
          profile,
          accountId,
          style: { ...imageStyle },
          className: "mb-2",
          imageClassName: "rounded-circle w-100 h-100 img-thumbnail d-block",
          thumbnail: false,
        }}
      />
    </div>
    {props.children && props.children}
  </div>
);
