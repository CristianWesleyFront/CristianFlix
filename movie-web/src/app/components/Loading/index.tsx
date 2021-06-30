import React from 'react';

import { Container } from './styles';

export function Loading() {
  return (
    <Container>
      <div className="lds-ring" aria-label="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}
