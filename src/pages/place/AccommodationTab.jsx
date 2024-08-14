import {
  AddPlaceButton,
  ContentArea,
  PlaceHeader,
  PlaceImage,
  PlaceImgContent,
  PlaceItem,
  PlaceItemActions,
  PlaceItemAddress,
  PlaceItemContent,
  PlaceItemName,
  PlaceItemNumber,
  PlaceList,
  PlaceName,
  PlaceNumber,
} from "../plan/PlanFirst.style.jsx";
import { IconColor } from "../../constants/constant.js";
import defaultImg from "../../assets/images/place/default_img.png";
import IconButton from "@mui/material/IconButton";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useSelectedPlaces } from "../../store/place/PlaceContext.jsx";
import usePlanStore from "../../store/PlanContext.js";
import { useState } from "react";
import AccommodationModal from "./AccommodationModal.jsx";
import { useWarningDialog } from "../../hooks/useWarningDialog.jsx";
import WarningDialog from "../../components/UI/WarningDialog.jsx";

const AccommodationTab = () => {
  const { selectedLodgings, removeLodging, clearLodgings } =
    useSelectedPlaces();
  const { areaCode } = usePlanStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, message, openWarningDialog, closeWarningDialog } =
    useWarningDialog();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleValidRemoveLodging = (id) => {
    if (selectedLodgings.length > 0) {
      openWarningDialog("You cannot select more than one accommodation.");
      return;
    }
    removeLodging(id);
  };

  return (
    <>
      <PlaceHeader>
        <PlaceNumber>{selectedLodgings.length}</PlaceNumber>
        <PlaceName onClick={clearLodgings}>Reset</PlaceName>
        <AddPlaceButton onClick={toggleModal}>
          + Add Accommodation
        </AddPlaceButton>
      </PlaceHeader>
      <ContentArea>
        <PlaceList>
          {selectedLodgings.map((item, index) => (
            <PlaceItem key={item.id}>
              <PlaceItemNumber
                backgroundColor={IconColor[index % IconColor.length]}
              >
                {index + 1}
              </PlaceItemNumber>
              <PlaceImgContent>
                <PlaceImage
                  src={item.imgUrl || defaultImg}
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultImg;
                  }}
                />
              </PlaceImgContent>
              <PlaceItemContent>
                <PlaceItemName>{item.title}</PlaceItemName>
                <PlaceItemAddress>{item.address}</PlaceItemAddress>
              </PlaceItemContent>
              <PlaceItemActions>
                <IconButton
                  size="small"
                  onClick={() => handleValidRemoveLodging(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </PlaceItemActions>
            </PlaceItem>
          ))}
        </PlaceList>
      </ContentArea>
      <AccommodationModal
        open={isModalOpen}
        onClose={toggleModal}
        areaCode={areaCode}
      />
      <WarningDialog
        isOpen={isOpen}
        message={message}
        onClose={closeWarningDialog}
      />
    </>
  );
};

export default AccommodationTab;
