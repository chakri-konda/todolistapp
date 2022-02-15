import "./Title.css";

import { useState } from "react";
import { TiPencil } from "react-icons/ti";
import { MdOutlineDownloadDone } from "react-icons/md";

import saitamaProfilePic from "./saitama.png";

const Title = (props) => {
  let titleValue = props.children;
  const [contentEditable, setContentEditable] = useState("false");

  const editTitleHandler = (event) => {
    if (event.target.checked) setContentEditable("true");
    else {
      titleValue = titleValue.trim();
      if (props.children !== titleValue) {
        // prob - title not changing back to props.child if len is 0
        if (titleValue.length === 0) {
          titleValue = props.children;
          // bcz of prob, changing the focus of active todolist.
          props.onActiveList(-1);
          alert("Title Can't be Empty!");
        } else {
          props.onEditTitle(titleValue);
        }
      }
      setContentEditable("false");
    }
  };
  const contentChangeHandler = (event) => {
    titleValue = event.target.textContent;
  };

  return (
    <div className="title">
      <div
        className="title-text"
        contentEditable={contentEditable}
        onInput={contentChangeHandler}
        suppressContentEditableWarning={true}
      >
        {titleValue}
      </div>
      <div className="flex">
        <label id="title-edit-pencil" className="flex switch">
          <input
            className="check-box"
            type="checkbox"
            onChange={editTitleHandler}
          ></input>
          {contentEditable === "false" ? (
            <TiPencil className="pencil" size={19} />
          ) : (
            <MdOutlineDownloadDone className="pencil" size={18} />
          )}
        </label>
        <img
          className="title-profile-img"
          src={saitamaProfilePic}
          alt="profile pic"
        ></img>
      </div>
    </div>
  );
};

export default Title;
