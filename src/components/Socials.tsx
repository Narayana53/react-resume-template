import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          className="-m-3 rounded-md p-3 text-white transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500  sm:-m-1.5 sm:p-1.5"
          href={href}
          key={label}>
          <Icon className="h-6 w-6 align-baseline" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
