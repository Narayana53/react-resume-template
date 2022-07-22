import {ChevronDownIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-screen items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-lg px-4">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/50 p-6 text-center shadow-lg">
            <h1 className="text-7xl font-bold text-white">{name}</h1>
            {description}
            <div className="flex gap-x-4">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-white hover:bg-gray-700/80',
                    primary ? 'border-orange-500' : 'border-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-6 w-6 text-white" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a className="rounded-full bg-white p-2" href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-6 w-6 bg-transparent" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
