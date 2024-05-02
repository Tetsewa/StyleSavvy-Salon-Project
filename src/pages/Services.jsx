import React from 'react';
import HomeBanner from '../components/HomeBanner';
import PriceTable from '../components/PriceTable';

function Services() {
  return (
    <div>
      <HomeBanner />
      <div className="capitalize font-alex-brush text-secondcolor text-center text-xl">
          <h1>Our Prices</h1>
        </div>
      <PriceTable />
    </div>
  );
}
export default Services;
