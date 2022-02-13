import "./Title.css";

import { useState } from "react";
import { TiPencil } from "react-icons/ti";
import { MdOutlineDownloadDone } from "react-icons/md";

import saitamaProfile from "./saitama.png";

const Title = (props) => {
  let titleValue = props.children;
  const [contentEditable, setContentEditable] = useState("false");

  const onEditTitleHandler = (event) => {
    if (event.target.checked) setContentEditable("true");
    else {
      titleValue = titleValue.trim();
      if (props.title !== titleValue) {
        // prob - title not changing back to props.child if len is 0
        if (titleValue.length === 0) {
          titleValue = props.children;
          props.activeList();
          // alert("Title Can't be Empty!");
          console.log("here", titleValue);
        } else {
          // send the title back to main file
          props.editTitle(titleValue);
        }
      }
      setContentEditable("false");
    }
  };

  const onContentChangeHandler = (event) => {
    titleValue = event.target.textContent;
  };

  return (
    <div className="title">
      <div
        className="title-text"
        contentEditable={contentEditable}
        onInput={onContentChangeHandler}
        suppressContentEditableWarning={true}
      >
        {titleValue}
      </div>
      <div className="flex">
        <label
          id="title-edit-pencil"
          className="flex switch"
          style={{ display: `${props.checked ? "none" : ""}` }}
        >
          <input
            className="check-box"
            type="checkbox"
            onChange={onEditTitleHandler}
          ></input>
          {contentEditable === "false" ? (
            <TiPencil className="pencil" size={19} />
          ) : (
            <MdOutlineDownloadDone className="pencil" size={19} />
          )}
        </label>
        <img
          className="title-profile-img"
          src={saitamaProfile}
          alt="profile pic"
        ></img>
      </div>
    </div>
  );
};

export default Title;
