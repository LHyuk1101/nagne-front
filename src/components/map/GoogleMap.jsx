import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useCallback, useMemo, useState } from "react";
import { useSelectedPlaces } from "../../store/place/PlaceContext.jsx";
import usePlanStore from "../../store/PlanContext.js";
import { IconColor } from "../../constants/constant.js";
import CustomPoiModal from "./CustomPoiModal.jsx";
const PoiMarker = ({ poi, index, isOpen, onMarkerClick, color }) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  const handleMarkerClick = useCallback(() => {
    onMarkerClick(poi.id);
  }, [onMarkerClick, poi.id]);

  const lat = parseFloat(poi.lat);
  const lng = parseFloat(poi.lng);

  if (isNaN(lat) || isNaN(lng)) {
    console.error(`Invalid coordinates for POI: ${poi.id}`, poi);
    return null; // 유효하지 않은 좌표인 경우 마커를 렌더링하지 않음
  }

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={handleMarkerClick}
        position={{ lat, lng }}
      >
        <Pin
          background={color}
          borderColor={"#FFF"}
          glyphColor={"#FFF"}
          scale={1.25}
          glyph={(index + 1).toString()}
        />
      </AdvancedMarker>
      {isOpen && (
        <CustomPoiModal
          poi={poi}
          open={isOpen}
          onClose={() => onMarkerClick(null)}
        />
      )}
    </>
  );
};

const PoiMarkers = ({ pois }) => {
  const [openMarkerId, setOpenMarkerId] = useState(null);

  const handleMarkerClick = useCallback((id) => {
    setOpenMarkerId((prevId) => (prevId === id ? null : id));
  }, []);

  return (
    <>
      {pois.map((poi, index) => (
        <PoiMarker
          key={poi.id}
          poi={poi}
          index={index}
          isOpen={openMarkerId === poi.id}
          onMarkerClick={handleMarkerClick}
          color={IconColor[index % IconColor.length]}
        />
      ))}
    </>
  );
};

const GoogleMap = () => {
  const { lat, lng } = usePlanStore();
  const { selectedPlaces, selectedLodgings } = useSelectedPlaces();

  if (lat === "" || lng === "") {
    return null;
  }

  const memoizedPoiMarkers = useMemo(() => {
    const allPois = [...selectedPlaces, ...selectedLodgings];
    return <PoiMarkers pois={allPois} />;
  }, [selectedPlaces, selectedLodgings]);

  return (
    <APIProvider apiKey={import.meta.env.VITE_API_KEY} language="en">
      <Map
        style={{ width: "100%", height: "100%" }}
        defaultCenter={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
        defaultZoom={11.5}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={"DEMO_MAP_ID"}
      >
        {memoizedPoiMarkers}
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
