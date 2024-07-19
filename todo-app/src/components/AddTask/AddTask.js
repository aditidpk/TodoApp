import React, { useState } from "react";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Container, InputBox, InputContainer } from "./AddTask.style";

const AddTask = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnFocus = (e) => {
    console.log("Focused", e);
    setIsClicked(true);
  };

  const handleOnBlur = (e) => {
    console.log("Blur", e);
    setIsClicked(false);
  };

  return (
    <Container>
      <InputContainer
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        isClicked={isClicked}
      >
        <PlaylistAddCircleIcon
          style={{ color: "#FF2F0036", height: 32, width: 32 }}
        />
        <InputBox placeholder="Write your next task" />
      </InputContainer>
      <AddCircleIcon style={{ color: "#FF2F00", height: 44, width: 44 }} />
    </Container>
  );
};

export default AddTask;
