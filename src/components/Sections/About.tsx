import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <h1>About</h1>
    </Section>
  );
});

About.displayName = 'About';
export default About;
