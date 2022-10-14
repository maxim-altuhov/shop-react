import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Row } from 'react-bootstrap';

import { Context } from '../index';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row>
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device}></DeviceItem>
      ))}
    </Row>
  );
});

export default DeviceList;
