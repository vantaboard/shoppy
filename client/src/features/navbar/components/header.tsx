import './header.styles.scss';

/**
 * Navigation bar header.
 *
 * @return {JSX.Element}
 */
const Header = (): JSX.Element => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-header-container">
          <div className="navbar-upper">
            <a className="navbar-brand business-title" href="#">
              Shoppy
            </a>
            <h1 className="navbar-brand">Product List</h1>
          </div>
          <div className="navbar-lower">
            <div className="navbar-horizontal-bar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;