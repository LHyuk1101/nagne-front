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
import PlaceModal from "./PlaceModal.jsx";
import usePlanStore from "../../store/PlanContext.js";
import { useState } from "react";
import WarningDialog from "../../components/UI/WarningDialog.jsx";
import { calculateDaysBetween } from "../../utils/dateUtils.js";
import { useWarningDialog } from "../../hooks/useWarningDialog.jsx";

const PlaceTab = () => {
  const { selectedPlaces, removePlace, clearPlaces } = useSelectedPlaces();
  const { areaCode } = usePlanStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, message, openWarningDialog, closeWarningDialog } =
    useWarningDialog();
  const { startDate, endDate } = usePlanStore();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleValidRemoveItems = (id) => {
    const day = calculateDaysBetween(startDate, endDate) + 1;
    if (selectedPlaces.length <= day) {
      openWarningDialog(`A minimum of ${day} places are required.`);
      toggleModal();
      return;
    }
    removePlace(id);
  };

  return (
    <>
      <PlaceHeader>
        <PlaceNumber>{selectedPlaces.length}</PlaceNumber>
        <PlaceName onClick={clearPlaces}>Reset</PlaceName>
        <AddPlaceButton onClick={toggleModal}>+ Add Place</AddPlaceButton>
      </PlaceHeader>
      <ContentArea>
        <PlaceList>
          {selectedPlaces.map((item, index) => (
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
                  onClick={() => handleValidRemoveItems(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </PlaceItemActions>
            </PlaceItem>
          ))}
        </PlaceList>
      </ContentArea>
      <PlaceModal
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

export default PlaceTab;
