import React, { useState } from "react";
import DataListNavigation from "./DataListNavigation";
import SmallLineChart from "../chart/SmallLineChart";
import BorderedGrayContainer from "../layout/BorderedGrayContainer";
import { useSelector } from "react-redux";
import DataList from "./DataList";

const BundlesData = () => {
  const [status, setStatus] = useState();
  const bundles = useSelector((state) => state.bundles?.bundles);
  console.log(bundles.reportList);

  const processedBundles = bundles.reportList?.filter(
    (bundle) => bundle.bundleStatus === "processed"
  );

  const processedBundlesLength = Math.floor(
    (processedBundles?.length / bundles.count) * 100
  );

  const freshBundles = bundles.reportList?.filter(
    (bundle) => bundle.bundleStatus === "fresh"
  );

  const freshBundlesLength = Math.floor(
    (processedBundles?.length / bundles.count) * 100
  );

  return (
    <div>
      {/* Headers */}
      <DataListNavigation />
      {/* BUndles details */}
      <BorderedGrayContainer>
        <div className="flex justify-between">
          <p className="text-gray-300">Total Bundles :</p>
          <div className="flex items-center">
            <p className="mr-2">{bundles.count}</p>
            <SmallLineChart value={100} />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-300">Processed Bundles :</p>
          <div className="flex items-center">
            <p className="mr-2">{processedBundles?.length}</p>
            <SmallLineChart value={processedBundlesLength} />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-300">Fresh Bundles :</p>
          <div className="flex items-center">
            <p className="mr-2">{freshBundles?.length}</p>
            <SmallLineChart value={freshBundlesLength} />
          </div>
        </div>
      </BorderedGrayContainer>
      {/* List */}
      <DataList title={"Bundles"} data={bundles?.reportList} bundles={true} />
    </div>
  );
};

export default BundlesData;
