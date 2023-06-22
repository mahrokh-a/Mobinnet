import '../styles/CloudPackageGroup.css';
import PackageItem from './PackageItem';
import { useCallback, useEffect, useState } from 'react';
import call_api from '../utils/callApi';
import Lottie from "lottie-react";
import animationLoading from '../resources/images/loading.json';

function CloudPackageGroup() {
  const [packageItems, setPackageItems] = useState([])
  const [selectedPackage, setSelectedPackage] = useState()

  const selectPackage = useCallback((item) => {
    setSelectedPackage(item)
  }, [])

  useEffect(() => {
    let packageItem
    (
      async () => {
      packageItem = await call_api()
      setPackageItems(packageItem)
      }
    )()
  }, [])

  return (
        <div className="container text-center">
          {
            !!packageItems && packageItems.length > 0 ?
              <div className="row justify-content-evently mt-5 mb-5">
                {packageItems.map(item => {
                  return <PackageItem key={item.id} {...item} selectPackage={selectPackage} selectedPackage={selectedPackage} />
                  })
                }
              </div>
              :
              <div className='no-items-box'>
                <Lottie animationData={animationLoading} loop={true} />
              </div>

          }
        </div>
  );
}

export default CloudPackageGroup;