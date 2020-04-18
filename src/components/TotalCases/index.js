import React, { useEffect, useState } from 'react';

import { FaSkull, FaDna, FaBriefcaseMedical } from 'react-icons/fa';
import api from '../../services/api';

import { Container } from './styles';

export default function TotalCases() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    async function getCases() {
      const { data } = await api.get('free-api?global=stats');
      setCases(data.results[0]);
    }

    getCases();
  });

  return (
    <Container>
      <div>
        <FaDna color="#ba3332" size={30} />
        <strong>
          Total Cases: {new Intl.NumberFormat().format(cases.total_cases)}
        </strong>
      </div>

      <div>
        <FaBriefcaseMedical color="#00AB84" size={30} />
        <strong>
          Total Recovered:{' '}
          {new Intl.NumberFormat().format(cases.total_recovered)}
        </strong>
      </div>

      <div>
        <FaSkull color="#4f4e532" size={30} />
        <strong>
          Total Deaths: {new Intl.NumberFormat().format(cases.total_deaths)}
        </strong>
      </div>
    </Container>
  );
}
