const ownerId = "/*__@appAccount__*/";

return (
  <div>
    <Widget
      src={`${ownerId}/widget/Components.Header`}
      props={{
        title1: props.edit ? "Edit your project" : "Create an event",
        description: `${props.edit ? "Update your " : "Create an "
          } event to Drop tokens, experiences, and more. Instantly drop tokens in a link, ticket your next event or giveway NFTs.`,
        centered: false,
        containerStyle: {
          background: "#FEF6EE",
        },
      }}
    />
    <Widget src={`${ownerId}/widget/Project.CreateEventForm`} props={props} />
  </div>
);
