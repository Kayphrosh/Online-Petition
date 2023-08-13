import React from "react";

const layout = ({ children }) => {
  const session = React.useContext(MyStore);
  const { disconnect } = useDisconnect();
  return (
    <ssction>
      <main> {children}</main>
    </ssction>
  );
};

export default layout;
