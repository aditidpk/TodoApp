import { useState } from "react";

const useStatus = () => {
  const [selectedPill, setSelectedPill] = useState("All");

  return { selectedPill, setSelectedPill };
};

export default useStatus;
