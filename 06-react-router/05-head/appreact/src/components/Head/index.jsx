import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = "Dog | " + props.title;
    document
      .querySelector('meta[name="description"')
      .setAttribute("content", props.description);
    console.log(props);
  }, [props]);
  return <></>;
};

export default Head;
