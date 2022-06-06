import * as React from 'react';
import Navigator from '../Nav';

/**
 *
 * @returns
 * Header component and information
 *
 * will take in props and will be refactored to a nav
 */

function Header() {
  return (
    <div id="header" data-testid="header">
      <Navigator />
    </div>
  );
}

export default Header;
