import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaSkull, FaDna, FaBriefcaseMedical } from 'react-icons/fa';
import { loadCountriesRequest } from '~/store/modules/countries/action';
import { loadCountryRequest } from '~/store/modules/country/action';

import { Container } from './styles';
import Header from '../../components/Header';
import ContainerPages from '../../components/ContainerPages';

export default function CountriesList() {
  const dispatch = useDispatch();

  const { countries } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(loadCountriesRequest());
  }, []);

  function countryDetails(code) {
    dispatch(loadCountryRequest(code));
  }
  return (
    <ContainerPages>
      <Container>
        <section>
          {countries.map((country) => (
            <div>
              <div className="header-country">
                {country.code && (
                  <img
                    src={`https://www.countryflags.io/${country.code}/flat/64.png`}
                    alt={country.title}
                  />
                )}
                <h2>{country?.title}</h2>
              </div>

              <section>
                <span>
                  <FaDna size={30} color="#ba3332" />
                  <strong>Total Case:</strong>{' '}
                  {new Intl.NumberFormat().format(country?.total_cases)}
                </span>
                <span>
                  <FaSkull size={30} color="#4f4e53" />
                  <strong>Total Deaths:</strong>{' '}
                  {new Intl.NumberFormat().format(country?.total_deaths)}
                </span>
                <span>
                  <FaBriefcaseMedical size={30} color="#00AB84" />
                  <strong>Total Recovered:</strong>{' '}
                  {Intl.NumberFormat().format(country?.total_recovered)}
                </span>
              </section>

              <Link
                to={`/details/${country.code}`}
                onClick={() => countryDetails(country.code)}
              >
                More details
              </Link>
            </div>
          ))}
        </section>
      </Container>
    </ContainerPages>
  );
}
