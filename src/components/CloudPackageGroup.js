import '../styles/CloudPackageGroup.css';
import PackageItem from './PackageItem';
import { useCallback, useEffect, useMemo, useState } from 'react';
import call_api from '../utils/callApi';
import Lottie from "lottie-react";
import animationLoading from '../resources/images/loading.json';
import { groupByProducts } from '../utils/generalFunctions';

function CloudPackageGroup() {
  const [packageItems, setPackageItems] = useState({})
  const [selectedPackId, setSelectedPackId] = useState()

  const selectPackage = useCallback((item) => {
    setSelectedPackId(item)
  }, [])

  const packages = useMemo(() => {
   return Object.entries(packageItems).map(([key , value]) => {
      return <PackageItem id={key} items={value} selectPackage={selectPackage} selectedPackage={selectedPackId} />
    })
  }, [selectedPackId, packageItems])

  useEffect(() => {
    let packageItem
    (
      async () => {
      packageItem = await call_api()
      setPackageItems(groupByProducts(packageItem, 'packageType'))
      }
    )()
  }, [])

  return (
        <div className="container text-center">
          {
            Object.keys(packageItems).length > 0 ?
              <div className="row justify-content-evently mt-5 mb-5">
                { packages }
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