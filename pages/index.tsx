import { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getConnection } from 'typeorm';
import { getDataBaseConnection } from 'lib/getDatabaseConnection';

type Props = {
  browser: {
    name: string;
    version: string;
    major: string;
  };
};
const index: NextPage<Props> = (props) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const w = document.documentElement.clientWidth;
    setWidth(w);
  }, []);
  return (
    <div>
      <h1>index1:{width}</h1>
    </div>
  );
};
export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const connection = await getDataBaseConnection();
  return {
    props: {},
  };
};
