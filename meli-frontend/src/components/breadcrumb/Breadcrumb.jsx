import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumb from './useBreadcrumb';

const Breadcrumb = ({ categories }) => {
  const { handleGoBack, getBreadcrumbLinks } = useBreadcrumb(categories);
  const breadcrumbLinks = getBreadcrumbLinks();

  if (breadcrumbLinks.length === 0) return null;

  return (
    <nav className="breadcrumb">
      <button onClick={handleGoBack} className="breadcrumb__back" title="Volver al listado">
        Volver al listado
      </button>
      <span className="breadcrumb__category">{" | "}</span>
      {breadcrumbLinks.map((link, index) => (
        <React.Fragment key={link.name}>
          <Link to={link.path} title={link.name} className="breadcrumb__category">
            {link.name}
          </Link>
          {!link.isLast && <span className="breadcrumb__category">{" > "}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
