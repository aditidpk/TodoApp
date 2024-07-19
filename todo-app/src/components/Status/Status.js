import React from "react";
import { Container, PillContainer, StatusPill } from "./Status.style";
import FilterListIcon from "@mui/icons-material/FilterList";
import useStatus from "./useStatus";

const Status = () => {
  const { selectedPill, setSelectedPill } = useStatus();
  return (
    <Container>
      <PillContainer>
        <StatusPill
          onClick={() => setSelectedPill("All")}
          isSelected={selectedPill === "All"}
        >
          All
        </StatusPill>
        <StatusPill
          onClick={() => setSelectedPill("Pending")}
          isSelected={selectedPill === "Pending"}
        >
          Pending
        </StatusPill>
        <StatusPill
          onClick={() => setSelectedPill("Done")}
          isSelected={selectedPill === "Done"}
        >
          Done
        </StatusPill>
      </PillContainer>
      <FilterListIcon style={{ color: "#ff2f00" }} />
    </Container>
  );
};

export default Status;
