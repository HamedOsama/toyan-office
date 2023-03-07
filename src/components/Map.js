import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useTranslation } from "react-i18next";

function LocationMarker() {
  const { t } = useTranslation();
  const [position, setPosition] = useState(null);
  const map = useMap();
  useEffect(
    () => {
      map.locate().on("locationfound", e => {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    },
    [map]
  );
  return position === null
    ? null
    : <Marker position={position}>
        <Popup>
          {t("contactPage.3")}
        </Popup>
      </Marker>;
}
function Map() {
  const { t } = useTranslation();
  const [markers, setMarkers] = useState([]);
  useEffect(
    () => {
      setMarkers([
        {
          id: 1,
          name: t("contactPage.4"),
          position: [26.42027752758803, 50.08822576048097]
        }
      ]);
    },
    [t]
  );
  return (
    <div className="map_layer">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={4}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
        {markers.map(marker =>
          <Marker key={marker.id} position={marker.position}>
            <Popup>
              {marker.name}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
