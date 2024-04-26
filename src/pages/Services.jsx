import React from 'react';
import HomeBanner from '../components/HomeBanner';
import PriceTable from '../components/PriceTable';


function Services() {
  //   const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     ProductService.getProductsMini().then(data => setProducts(data));
  // }, []);

  return (
    <div>

      <HomeBanner />
      <PriceTable />
    </div>
  );
}

export default Services;