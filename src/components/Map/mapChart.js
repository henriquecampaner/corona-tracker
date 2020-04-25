import React, { memo, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiPlus, FiMinus } from 'react-icons/fi';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

import axios from 'axios';
import history from '../../services/history';

import { loadCountryRequest } from '~/store/modules/country/action';
import { loadCountriesRequest } from '~/store/modules/countries/action';

import { ButtonContainer } from './styles';

const MapChart = ({ setTooltipContent }) => {
  const [geolocation, setGeo] = useState([]);
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  async function getGeo() {
    const { data: response } = await axios.get(
      'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'
    );

    setGeo(response);
  }

  useMemo(() => {
    dispatch(loadCountriesRequest());
    getGeo();
  }, []);

  function getData(geoData) {
    const data = countries.filter((country) => country.code === geoData.ISO_A2);
    return data[0];
  }

  function countryDetails(code) {
    dispatch(loadCountryRequest(code));
    if (code === 'AQ') {
      return;
    }
    history.push(`/details/${code}`);
  }

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  return (
    <>
      <ButtonContainer>
        <button onClick={handleZoomIn} type="button">
          <FiPlus />
        </button>
        <button onClick={handleZoomOut} type="button">
          <FiMinus />
        </button>
      </ButtonContainer>
      <ComposableMap data-tip="" projectionConfig={{ scale: 160 }}>
        <ZoomableGroup zoom={position.zoom} center={[0, -10]}>
          <Geographies geography={geolocation}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  onClick={() => countryDetails(geo.properties.ISO_A2)}
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(getData(geo.properties));
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  style={{
                    default: {
                      fill: '#131516',
                      outline: 'none',
                      stroke: '#6b6d70',
                      strokeOpacity: '0.5',
                    },
                    hover: {
                      fill: '#b73130',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#b73130',
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
