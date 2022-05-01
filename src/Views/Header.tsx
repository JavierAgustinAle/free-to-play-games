import React from 'react';

type Props = {
  title: string
}
const Header = ({ title }: Props) => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0">
          <h3 className='lh-lg text-white'>{title}</h3>
        </span>
      </div>
    </nav>

  );
};

export default Header;