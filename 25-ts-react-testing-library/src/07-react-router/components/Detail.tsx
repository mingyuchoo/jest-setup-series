import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

function Detail(): ReactElement {
  const params: { slug: string } = useParams();
  return <div>You are on the {params.slug} page</div>;
}

export default Detail;
