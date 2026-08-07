// src/components/PageMeta.jsx
import { Helmet } from 'react-helmet-async';

export default function PageMeta({ title, description }) {
  const fullTitle = `${title} | Smart India Hackathon`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}