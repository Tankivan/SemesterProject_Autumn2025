import React, { useState } from 'react';
import './KujbyshevskyMap.css';
import mapImage from './kujbyshevsky-map.png'; // ваша карта
import forestIcon from './forest_icon.png';

// Данные о лесах (пока тестовые)
const forestsData = [
  {
    id: 1,
    name: "Лес1",
    coordinates: { x: 30, y: 50 },
    info: "Координаты: 53.702764, 87.001441"
  },
  {
    id: 2, 
    name: "Лес2",
    coordinates: { x: 60, y: 27 },
    info: "Координаты: 53.732814, 87.090049"
  },
  {
    id: 3,
    name: "Лес3",
    coordinates: { x: 80, y: 50 },
    info: "Координаты: 53.722237, 87.131502"
  }
];

function KujbComponent() {
  const [selectedForest, setSelectedForest] = useState(null);

  return (
    <div className="map-container">
      <h1>Карта лесов Куйбышевского района Новокузнецка</h1>
      
      <div className="map-wrapper">
        <div className="map" style={{ position: 'relative' }}>
          {/* Фоновая карта */}
          <img 
            src={mapImage} 
            alt="Карта Куйбышевского района" 
            className="map-image"
          />
          
          {/* Интерактивные маркеры лесов */}
          {forestsData.map(forest => (
          <img
            key={forest.id}
            src={forestIcon}
            alt="Лес"
            className="forest-marker"
            style={{
              position: 'absolute',
              left: `${forest.coordinates.x}%`,
              top: `${forest.coordinates.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onClick={() => setSelectedForest(forest)}
          />
        ))}
        </div>
      </div>

      {/* Всплывающее окно с информацией */}
      {selectedForest && (
        <div className="popup-overlay" onClick={() => setSelectedForest(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedForest.name}</h2>
            <p>{selectedForest.info}</p>
            <button 
              className="close-btn"
              onClick={() => setSelectedForest(null)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default KujbComponent;