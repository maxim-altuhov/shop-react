import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Card } from 'react-bootstrap';

import { Context } from '../index';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className="d-flex flex-wrap">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-2 mx-1 mb-2 flex-shrink-0"
          style={{ cursor: 'pointer' }}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
