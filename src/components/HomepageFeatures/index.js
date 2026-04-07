import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Mountain from '@site/static/img/undraw_docusaurus_mountain.svg';
import Tree from '@site/static/img/undraw_docusaurus_tree.svg';
import ReactSvg from '@site/static/img/undraw_docusaurus_react.svg';

const FeatureList = [
  {
    title: 'Internet',
    Svg: Mountain,
    description: (
      <>
        전 세계의 컴퓨터와 네트워크를 연결하여 데이터를 주고받는 거대한 통신망
      </>
    ),
  },
  {
    title: 'OS',
    Svg: Tree,
    description: (
      <>
        컴퓨터 하드웨어와 소프트웨어를 관리하는 시스템.
      </>
    ),
  },
  {
    title: 'Git',
    Svg: ReactSvg,
    description: (
      <>
        소스 코드의 버전 관리를 위한 분산 버전 관리 시스템.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
