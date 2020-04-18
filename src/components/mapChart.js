import React, { memo, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

import axios from 'axios';
import history from '../services/history';

import { loadCountryRequest } from '~/store/modules/country/action';
import { loadCountriesRequest } from '~/store/modules/countries/action';

const MapChart = ({ setTooltipContent }) => {
  const [geolocation, setGeo] = useState([]);
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);

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
    history.push(`/details/${code}`);
  }

  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup center={[0, 0]} maxZoom={2}>
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
                      strokeOpacity: '0.1',
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
