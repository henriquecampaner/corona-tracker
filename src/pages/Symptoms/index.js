import React from 'react';

import ContainerPages from '../../components/ContainerPages';

import { Container } from './styles';

export default function Symptoms() {
  return (
    <ContainerPages>
      <Container>
        <h1>What you need to know about coronavirus (COVID-19)</h1>

        <section>
          <div>
            <h2>Overview</h2>
            <p>
              Coronaviruses are a family of viruses that can cause illnesses
              such as the common cold, severe acute respiratory syndrome (SARS)
              and Middle East respiratory syndrome (MERS). In 2019, a new
              coronavirus was identified as the cause of a disease outbreak that
              originated in China. The virus is now known as the severe acute
              respiratory syndrome coronavirus 2 (SARS-CoV-2). The disease it
              causes is called coronavirus disease 2019 (COVID-19). In March
              2020, the World Health Organization (WHO) declared the COVID-19
              outbreak a pandemic. Public health groups, including the U.S.
              Centers for Disease Control and Prevention (CDC) and WHO, are
              monitoring the pandemic and posting updates on their websites.
              These groups have also issued recommendations for preventing and
              treating the illness.
            </p>
          </div>
          <img
            src="https://image.flaticon.com/icons/svg/1097/1097326.svg"
            alt=""
          />
        </section>

        <section className="symptoms">
          <h2>Symptoms</h2>
          <span>
            Signs and symptoms of COVID-19 may appear two to 14 days after
            exposure and can include:
          </span>
          <div>
            <div>
              <p>Fever</p>
              <img
                src="https://image.flaticon.com/icons/svg/2167/2167072.svg"
                alt="Fever"
              />
            </div>
            <div>
              <p>Cough</p>
              <img
                src="https://image.flaticon.com/icons/svg/2599/2599588.svg"
                alt="Cough"
              />
            </div>
            <div>
              <p>Shortness of breath or difficulty breathing</p>
              <img
                src="https://image.flaticon.com/icons/svg/2038/2038042.svg"
                alt="difficulty breathing<"
              />
            </div>
          </div>
        </section>
      </Container>
    </ContainerPages>
  );
}
