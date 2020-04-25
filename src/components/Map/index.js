/* eslint-disable camelcase */
import React, { useState } from 'react';

import ReactTooltip from 'react-tooltip';
import { FaSkull, FaDna, FaBriefcaseMedical } from 'react-icons/fa';
import MapChart from './mapChart';

import { Cases, Container } from './styles';

export default function Map() {
  const [content, setContent] = useState('');
  return (
    <Container>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>
        {content?.title && (
          <Cases>
            <div>
              <img
                src={`https://www.countryflags.io/${content.code}/flat/64.png`}
                alt={content.code}
              />
              <h2>{content?.title}</h2>
            </div>
            <span>
              <FaDna size={15} color="#ba3332" />
              <strong>Total Case:</strong>{' '}
              {new Intl.NumberFormat().format(content?.total_cases)}
            </span>
            <span>
              <FaSkull size={15} color="#4f4e53" />
              <strong>Total Deaths: </strong>
              {new Intl.NumberFormat().format(content?.total_deaths)}
            </span>
            <span>
              <FaBriefcaseMedical size={15} color="#5ec2ad" />
              <strong>Total Recovered: </strong>
              {Intl.NumberFormat().format(content?.total_recovered)}
            </span>
          </Cases>
        )}
      </ReactTooltip>
    </Container>
  );
}
