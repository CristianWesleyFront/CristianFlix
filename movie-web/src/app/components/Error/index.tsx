import React from 'react';
import { BiError } from 'react-icons/bi';
import { Container, ContainerError } from './styles';

export function Error() {
  return (
    <ContainerError>
      <BiError />
      <span>Server Error</span>
      <span>We are already looking to solve the problem.</span>
    </ContainerError>
  );
}

export function NotFound({ search }) {
  return (
    <Container>
      <h3>You search for {`"${search}"`} did not have any matches.</h3>
      <span>Suggestions:</span>
      <ul>
        <li>Try different keywords</li>
      </ul>
    </Container>
  );
}
