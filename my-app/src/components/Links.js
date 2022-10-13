import React from "react";

const Links = ({ link, texto }) => {
  return (
    <>
      <button><a href={link}>{texto}</a></button>
    </>
  );
};

export default Links;