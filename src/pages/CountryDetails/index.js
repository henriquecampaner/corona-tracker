import React from 'react';
import { useSelector } from 'react-redux';
import {
  FaSkull,
  FaDna,
  FaBriefcaseMedical,
  FaMicroscope,
  FaPlus,
  FaSkullCrossbones,
  FaFlask,
  FaProcedures,
} from 'react-icons/fa';

import Header from '../../components/Header';
import { Container } from './styles';

import history from '../../services/history';

export default function CountryDetails() {
  const { country } = useSelector((state) => state.country);

  if (country.length === 0) {
    history.push('/');
  }
  return (
    <Container>
      <Header />
      <header>
        <img
          src={`https://www.countryflags.io/${country.info?.code}/flat/64.png`}
          alt=""
        />
        <h1>{country.info?.title}</h1>
      </header>

      <section>
        <div>
          <FaDna size={30} color="#fff" />
          <strong>
            Total Cases: {new Intl.NumberFormat().format(country.total_cases)}
          </strong>
        </div>

        <div>
          <FaBriefcaseMedical size={30} color="#fff" />
          <strong>
            Total Recovered:{' '}
            {new Intl.NumberFormat().format(country.total_recovered)}
          </strong>
        </div>

        <div>
          <FaFlask size={30} color="#fff" />
          <strong>
            Total Active Cases:{' '}
            {new Intl.NumberFormat().format(country.total_active_cases)}
          </strong>
        </div>

        <div>
          <FaMicroscope size={30} color="#fff" />
          <strong>
            Total Unresolved:{' '}
            {new Intl.NumberFormat().format(country.total_unresolved)}
          </strong>
        </div>

        <div>
          <FaSkull size={30} color="#fff" />
          <strong>
            Total Deaths: {new Intl.NumberFormat().format(country.total_deaths)}
          </strong>
        </div>

        <div>
          <FaPlus size={30} color="#fff" />
          <strong>
            Cases Today: +
            {new Intl.NumberFormat().format(country.total_new_cases_today)}
          </strong>
        </div>

        <div>
          <FaSkullCrossbones size={30} color="#fff" />
          <strong>
            Deaths Today: +
            {new Intl.NumberFormat().format(country.total_new_deaths_today)}
          </strong>
        </div>

        <div>
          <FaProcedures size={30} color="#fff" />
          <strong>
            Total Serius Cases:{' '}
            {new Intl.NumberFormat().format(country.total_serious_cases)}
          </strong>
        </div>
      </section>
    </Container>
  );
}
