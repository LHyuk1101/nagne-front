import { Box, Container, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./SelectDestinationModal.css";
import { Carousel } from "./Carousel";

export const SelectDestinationModal = ({
  isOpen,
  toggleOpen,
  startDate,
  endDate,
}) => (
  <Container
    style={{ maxWidth: "600px", textAlign: "center", marginTop: "3rem" }}
  >
    <div className={`overlay ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <IconButton
          className="close-button"
          onClick={toggleOpen}
          style={{ marginTop: "0.5rem", marginLeft: "93%" }}
        >
          <CloseIcon />
        </IconButton>
        <Carousel startDate={startDate} endDate={endDate} />
      </div>
    </div>
  </Container>
);
