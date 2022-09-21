import React from "react";

const PageNotFound = ({ children }) => {
  return (
    <div>
      <h1>Oops!</h1>
      {children}
      <p>The page you are looking for does not exists</p>
    </div>
  );
};

export default PageNotFound;
