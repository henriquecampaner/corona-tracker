import React from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <span>
        Made with <span>♥</span> by Henrique Campaner
      </span>
      <div>
        <a href="https://www.linkedin.com/in/henrique-campaner/">
          <FaLinkedin color="#f5f5f5" size={25} />
        </a>
        <a href="https://github.com/henriquecampaner">
          <FaGithub color="#f5f5f5" size={25} />
        </a>
      </div>
    </Container>
  );
}
