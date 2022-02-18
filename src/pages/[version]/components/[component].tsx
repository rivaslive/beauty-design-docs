import React, { useContext } from 'react';
import { GetStaticProps } from 'next';
import { ThemeContext } from 'styled-components';

// utils
import { capitalize } from 'utils/utils';
import {
  getPathsComponent,
  getStaticsPropsComponent,
} from 'utils/getServerSide';

// components
import BuildingPage from 'components/Organisms/BuildingPage';
import ComponentTemplate from 'components/Templates/ComponentTemplate';
import { defaultVersion } from 'utils/defaultVersion';

const ComponentPage = (props: PageProps) => {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  if (!props?.data || props?.isBuilding) {
    return <BuildingPage />;
  }

  return <ComponentTemplate {...props} />;
};

// SERVER SIDE RENDERING https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths() {
  return getPathsComponent(defaultVersion);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const component = capitalize(params?.component || '');
  const out = await getStaticsPropsComponent(
    component,
    params?.version || defaultVersion
  );
  return {
    ...out,
    revalidate: 60,
  };
};

export default ComponentPage;
