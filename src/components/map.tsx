'use client'; // Importante: Indica que este componente se renderiza en el cliente

import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = () => {
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current) {
        mapRef.current = L.map('map', {
            center: [8.23506219630531, -73.32133679649243], 
            zoom: 15,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapRef.current);
        }

        return () => {
        if (mapRef.current) {
            
        }
        };
    }, []);

    return <div id="map" style={{ height: '500px' }} />;
    };

    export default MapComponent;