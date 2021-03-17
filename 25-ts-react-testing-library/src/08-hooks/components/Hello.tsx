import React, { ReactElement, useEffect } from 'react';

export let a = false;

export default function Hello(): ReactElement {
  useEffect(() => {
    a = true;
  });
  return <div>Hello, World!</div>;
}
