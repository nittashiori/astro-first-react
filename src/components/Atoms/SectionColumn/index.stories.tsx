import SectionColumn from './index';

export default {
  title: 'Atoms/SectionColumn',
  component: SectionColumn,
};

export const $default: React.FC = () =>
  <>
    <SectionColumn
      pcColumn={2}
      spColumn={1}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </SectionColumn>
  </>
;