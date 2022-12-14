import Section from './index';

export default {
  title: 'Atoms/Section',
  component: Section,
};

export const $default: React.FC = () =>
  <>
    <Section>
      section<br />
      contents contents contents contents
    </Section>
  </>
;