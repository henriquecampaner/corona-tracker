import React, { useState, useEffect } from 'react';

import { FaSkull, FaDna, FaBriefcaseMedical } from 'react-icons/fa';
import { Container } from './styles';
import Spinner from '../Spinner';

import api from '../../services/api';

export default function Header() {
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
      <h1>Corona Virus (COVID-19) Tracker</h1>
      <p>Global Cases</p>
      <header>
        <div>
          <FaDna color="#ba3332" size={30} />
          <strong>
            Total Cases:{' '}
            {cases.total_cases ? (
              new Intl.NumberFormat().format(cases.total_cases)
            ) : (
              <Spinner />
            )}
          </strong>
        </div>

        <div>
          <FaBriefcaseMedical color="#00AB84" size={30} />
          <strong>
            Total Recovered:{' '}
            {cases.total_cases ? (
              new Intl.NumberFormat().format(cases.total_recovered)
            ) : (
              <Spinner />
            )}
          </strong>
        </div>

        <div>
          <FaSkull color="#999" size={30} />
          <strong>
            Total Deaths:
            {cases.total_cases ? (
              new Intl.NumberFormat().format(cases.total_deaths)
            ) : (
              <Spinner />
            )}
          </strong>
        </div>
      </header>
    </Container>
  );
}
