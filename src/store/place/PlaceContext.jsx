import { createContext, useState, useContext } from "react";

/**
 * @typedef {Object} Area
 * @property {number} areaCode
 * @property {string} name
 */

/**
 * @typedef {Object} Place
 * @property {number} id - The unique identifier of the place
 * @property {Area} area - The area information of the place
 * @property {string} title - The title of the place
 * @property {string} address - The address of the place
 * @property {number} contentTypeId - The content type ID of the place
 * @property {string} overview - A brief description of the place
 * @property {string} contactNumber - Contact number for the place
 * @property {string} opentime - Opening time of the place
 * @property {number} lat - Latitude coordinate of the place
 * @property {number} lng - Longitude coordinate of the place
 * @property {number} likes - Number of likes for the place
 * @property {string} thumbnailUrl - URL of the thumbnail image
 * @property {string[]} placeUrlImages - Array of image URLs for the place
 */

/**
 * @typedef {Object} SelectedPlacesContextType
 * @property {Place[]} selectedPlaces
 * @property {Place[]} selectedLodgings
 * @property {function(Place): void} addPlace
 * @property {function(number): void} removePlace
 * @property {function(): void} clearPlaces
 */

/** @type {React.Context<SelectedPlacesContextType>} */
const SelectedPlacesContext = createContext();

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export const SelectedPlacesProvider = ({ children }) => {
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [selectedLodgings, setSelectedLodgings] = useState([]);
  const addPlace = (place) => {
    setSelectedPlaces((prev) => [...prev, place]);
  };

  const addLodging = (lodging) => {
    setSelectedLodgings((prev) => [...prev, lodging]);
  };

  const removePlace = (placeId) => {
    setSelectedPlaces((prev) => prev.filter((p) => p.id !== placeId));
  };

  const removeLodging = (lodgingId) => {
    setSelectedLodgings((prev) => prev.filter((l) => l.id !== lodgingId));
  };

  const clearPlaces = () => {
    setSelectedPlaces([]);
  };

  const clearLodgings = () => {
    setSelectedLodgings([]);
  };

  return (
    <SelectedPlacesContext.Provider
      value={{
        selectedPlaces,
        selectedLodgings,
        addPlace,
        addLodging,
        removePlace,
        removeLodging,
        clearPlaces,
        clearLodgings,
      }}
    >
      {children}
    </SelectedPlacesContext.Provider>
  );
};

export const useSelectedPlaces = () => {
  const context = useContext(SelectedPlacesContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedPlaces must be used within a SelectedPlacesProvider",
    );
  }
  return context;
};
