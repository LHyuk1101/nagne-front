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

const PoiMarkers = ({ pois, selectedPlaces }) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowShown, setInfoWindowShown] = useState(false);
  const [selectedPoi, setSelectedPoi] = useState(null);

  const handleMarkerClick = useCallback((poi) => {
    setSelectedPoi(poi);
    setInfoWindowShown(true);
  }, []);

  const handleClose = useCallback(() => {
    setInfoWindowShown(false);
    setSelectedPoi(null);
  }, []);

  return (
    <>
      {pois.map((poi, index) => (
        <AdvancedMarker
          key={poi.id}
          ref={markerRef}
          onClick={() => handleMarkerClick(poi)}
          position={{ lat: poi.lat, lng: poi.lng }}
        >
          <Pin
            background={"#FBBC04"}
            borderColor={"#FFF"}
            glyphColor={"#FFF"}
            scale={1}
            glyph={(index + 1).toString()}
          />
        </AdvancedMarker>
      ))}
      {infoWindowShown && selectedPoi && (
        <InfoWindow
          anchor={marker}
          onClose={handleClose}
          position={{ lat: selectedPoi.lat, lng: selectedPoi.lng }}
        >
          <div>
            <h2>{selectedPoi.title}</h2>
            <p>{selectedPoi.address}</p>
          </div>
        </InfoWindow>
      )}
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
    return <PoiMarkers pois={allPois} selectedPlaces={selectedPlaces} />;
  }, [selectedPlaces, selectedLodgings]);

  return (
    <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
      <Map
        style={{ width: "100%", height: "100%" }}
        defaultCenter={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
        defaultZoom={11.5}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={"DEMO_MAP_ID"}
      />
      {memoizedPoiMarkers}
    </APIProvider>
  );
};

export default GoogleMap;
