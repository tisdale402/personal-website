import React from 'react';

import '../../styles/style.scss';
import {Section} from 'react-scroll-section';

const ProjectSection = () => (
    <Section id={'projects'}>
    <section>
        <div style={{height: '100vh'}}>
        <h1>
            <span className="glitch" data-text="Projects•">
              Projects
            </span>
        </h1>
        </div>
    </section>
    </Section>
);

export default ProjectSection;