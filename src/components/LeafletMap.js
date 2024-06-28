import React, { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const LeafletMap = ({ latitude, longitude }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        mapRef.current = L.map('map', {
            center: [latitude, longitude],
            zoom: 13,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(mapRef.current);

        L.marker([latitude, longitude]).addTo(mapRef.current);

        return () => {
            mapRef.current.remove(); // Cleanup when component unmounts
        };
    }, [latitude, longitude]);

    return (
        <div id="map" style={{ height: '400px' }}></div>
    );
};

export default LeafletMap;
