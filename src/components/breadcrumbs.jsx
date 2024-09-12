import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const pathnames = pathname.split('/').filter((x) => x);
  let breadcrumbPath = '';

  return (
    <div className='breadcrumbs'>
      {pathnames.length > 0 && <Link to={'/'}>Home</Link>}
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={name}>/ {name}</span>
        ) : (
          <span key={name}>
            /{' '}
            <Link key={breadcrumbPath} to={breadcrumbPath}>
              {name}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
