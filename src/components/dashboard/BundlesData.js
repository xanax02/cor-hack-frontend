import React, { useState } from "react";
import DataListNavigation from "./DataListNavigation";
import SmallLineChart from "../chart/SmallLineChart";
import BorderedGrayContainer from "../layout/BorderedGrayContainer";
import { useSelector } from "react-redux";
import BundleList from "./BundleList";
import { useSearchParams } from "react-router-dom";

const BundlesData = () => {
  const [searchQuery] = useSearchParams();

  const [status, setStatus] = useState();
  const bundles = useSelector((state) => state.bundles?.bundles);

  let hostBundles = [];
  let hostProcessed = [];
  let hostfresh = [];
  let queryModeData = [];

  const hostbundledetails = searchQuery.size > 0;

  if (searchQuery.size > 0) {
    bundles?.reportList?.map((item) => {
      if (item.hostName === searchQuery.get("hostname")) {
        hostBundles.push(item);
      }
    });

    hostBundles.map((item) => {
      if (item.bundleStatus === "processed") {
        hostProcessed.push(item);
      }
    });

    hostBundles.map((item) => {
      if (item.bundleStatus === "fresh") {
        hostfresh.push(item);
      }
    });
    if (searchQuery.get("status") === "processed") {
      queryModeData = hostProcessed;
    } else if (searchQuery.get("status") === "fresh") {
      queryModeData = hostfresh;
    } else {
      queryModeData = hostBundles;
    }
  }

  const processedBundles = bundles?.reportList?.filter(
    (bundle) => bundle.bundleStatus === "processed"
  );

  const processedBundlesLength = Math.floor(
    (processedBundles?.length / bundles?.count) * 100
  );

  const freshBundles = bundles?.reportList?.filter(
    (bundle) => bundle.bundleStatus === "fresh"
  );

  const freshBundlesLength = Math.floor(
    (processedBundles?.length / bundles?.count) * 100
  );

  return (
    <div>
      {/* Headers */}
      <DataListNavigation />
      {/* BUndles details */}
      {!hostbundledetails && (
        <>
          <BorderedGrayContainer>
            <div className="flex justify-between">
              <p className="text-gray-300 text-2xl">Total Bundles :</p>
              <div className="flex items-center">
                <p className="mr-2 text-2xl">{bundles.count}</p>
                <SmallLineChart value={bundles.count === 0 ? 0 : 100} />
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-300 text-2xl">Processed Bundles :</p>
              <div className="flex items-center">
                <p className="mr-2 text-2xl">{processedBundles?.length}</p>
                <SmallLineChart value={processedBundlesLength} />
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-300 text-2xl">Fresh Bundles :</p>
              <div className="flex items-center">
                <p className="mr-2 text-2xl">{freshBundles?.length}</p>
                <SmallLineChart value={freshBundlesLength} />
              </div>
            </div>
          </BorderedGrayContainer>
          {/* List */}
          <BundleList
            title={"Bundles"}
            data={bundles?.reportList}
            bundles={true}
          />
        </>
      )}
      {hostbundledetails && (
        <>
          <BorderedGrayContainer>
            <div className="flex justify-between">
              <p className="text-gray-300 text-2xl">System Bundles :</p>
              <div className="flex items-center">
                <p className="mr-2 text-2xl">{hostBundles.length}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-300 text-2xl">Processed Bundles :</p>
              <div className="flex items-center">
                <p className="mr-2 text-2xl">{hostProcessed.length}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-300 text-2xl">Fresh Bundles :</p>
              <div className="flex items-center">
                <p className="mr-2 text-2xl">{hostfresh.length}</p>
              </div>
            </div>
          </BorderedGrayContainer>
          {/* List */}
          <BundleList title={"Bundles"} data={queryModeData} bundles={true} />
        </>
      )}
    </div>
  );
};

export default BundlesData;
