import { createContext, useState, useContext } from "react";

/**
 * @typedef {Object} Area
 * @property {number} areaCode - The code of the area
 * @property {string} name - The name of the area
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
 * @property {Place[]} selectedPlaces - Array of selected places
 * @property {function(Place): void} addPlace - Function to add a place
 * @property {function(number): void} removePlace - Function to remove a place by id
 * @property {function(): void} clearPlaces - Function to clear all selected places
 */

/** @type {React.Context<SelectedPlacesContextType>} */
const SelectedPlacesContext = createContext();

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export const SelectedPlacesProvider = ({ children }) => {
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  const addPlace = (place) => {
    setSelectedPlaces((prev) => [...prev, place]);
  };

  const removePlace = (placeId) => {
    setSelectedPlaces((prev) => prev.filter((p) => p.id !== placeId));
  };

  return (
    <SelectedPlacesContext.Provider
      value={{ selectedPlaces, addPlace, removePlace }}
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
