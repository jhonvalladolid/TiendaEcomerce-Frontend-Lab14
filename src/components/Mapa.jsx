import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
    useEffect(() => {
        const map = L.map('map').setView([-23.013104, -43.394365], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-23.013104, -43.394365]).addTo(map)
            .bindPopup("<b>J&N Fashion</b><br />Ubicación.").openPopup();

        // Cleanup function to remove the map instance
        return () => {
            map.remove();
        };
    }, []);

    return <div id="map" style={{ height: '300px', width: '100%' }}></div>;
};

export default Mapa;
