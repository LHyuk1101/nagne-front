import {AdvancedMarker, APIProvider, InfoWindow, Map, Pin, useAdvancedMarkerRef} from '@vis.gl/react-google-maps';
import {useCallback, useState} from "react";


const locations = [
    // {key: 'operaHouse', location: {lat: -33.8567844, lng: 151.213108}},
    // {key: 'tarongaZoo', location: {lat: -33.8472767, lng: 151.2188164}},
    // {key: 'manlyBeach', location: {lat: -33.8209738, lng: 151.2563253}},
    // {key: 'hyderPark', location: {lat: -33.8690081, lng: 151.2052393}},
    // {key: 'theRocks', location: {lat: -33.8587568, lng: 151.2058246}},
    // {key: 'circularQuay', location: {lat: -33.858761, lng: 151.2055688}},
    // {key: 'harbourBridge', location: {lat: -33.852228, lng: 151.2038374}},
    // {key: 'kingsCross', location: {lat: -33.8737375, lng: 151.222569}},
    // {key: 'botanicGardens', location: {lat: -33.864167, lng: 151.216387}},
    // {key: 'museumOfSydney', location: {lat: -33.8636005, lng: 151.2092542}},
    // {key: 'maritimeMuseum', location: {lat: -33.869395, lng: 151.198648}},
    // {key: 'kingStreetWharf', location: {lat: -33.8665445, lng: 151.1989808}},
    // {key: 'aquarium', location: {lat: -33.869627, lng: 151.202146}},
    // {key: 'darlingHarbour', location: {lat: -33.87488, lng: 151.1987113}},
    {key: 'barangaroo', location: {lat: -33.8605523, lng: 151.1972205}},
];

const PoiMarkers = ({pois}) => {
    const [markerRef, marker] = useAdvancedMarkerRef();


    const [infoWindowShown, setInfoWindowShown] = useState(false);

    const handleMarkerClick = useCallback(
        () => setInfoWindowShown(isShown => !isShown),
        []
    );

    const handleClose = useCallback(() => setInfoWindowShown(false), []);

    return (
        <>
            {pois.map((poi, index) => (
                <>
                    <AdvancedMarker
                        ref={markerRef}
                        onClick={handleMarkerClick}
                        key={poi.key}
                        position={poi.location}>
                        <Pin
                            background={'#FBBC04'}
                            borderColor={'#000'}
                            glyphColor={'#000'}
                            scale={1.25}
                            glyph={(index + 1).toString()}/>
                    </AdvancedMarker>
                    { infoWindowShown && (
                        <InfoWindow anchor={marker} onClose={handleClose}>
                            <h2>InfoWindow content!</h2>
                            <p>Some arbitrary html to be rendered into the InfoWindow.</p>
                        </InfoWindow>
                    )}
                </>
            ))}
        </>
    );
};

const GoogleMap = () => (
    <APIProvider apiKey=''>
        <Map
            style={{width: '100vw', height: '100vh'}}
            defaultCenter={{lat: 22.54992, lng: 0}}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapId={"DEMO_MAP_ID"}
        />
        <PoiMarkers pois={locations}></PoiMarkers>
    </APIProvider>
);

export default GoogleMap;