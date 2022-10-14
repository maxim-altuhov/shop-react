import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{device.name}</div>;
};

export default DevicePage;
