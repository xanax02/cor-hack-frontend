import React from "react";
import Navigation from "../UI/Navigation";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BorderedGrayContainer from "../layout/BorderedGrayContainer";
import BundleDetailReportItem from "./BundleDetailReportItem";

const BundleDetailComp = (props) => {
  if (!props.data) {
    return;
  }
  return (
    <>
      <Navigation />
      <div className="w-[90%] mt-4">
        <BorderedGrayContainer>
          <div className="flex items-center justify-between px-16">
            <AssessmentIcon style={{ fontSize: "200px" }} />
            <div className="">
              <BundleDetailReportItem
                title={"Hostname:"}
                data={props.data?.hostName}
              />
              <BundleDetailReportItem
                title={"Total Files:"}
                data={props.data?.folderReports[0]?.fileCount}
              />
              <BundleDetailReportItem
                title={"Size:"}
                data={props.data?.folderReports[0]?.size}
              />
              <BundleDetailReportItem
                title={"Bundle nameL"}
                data={props.data?.bundleName}
              />
              <BundleDetailReportItem
                title={"Bundle Status:"}
                data={props.data?.bundleStatus}
              />
              <BundleDetailReportItem
                title={"Generated At"}
                data={props.data?.generatedAt}
              />
            </div>
          </div>
        </BorderedGrayContainer>
      </div>
      {/* <SystemDetailBundle
        hostname={hostname}
        title={"System bundles"}
        data={systemBundles}
      /> */}
    </>
  );
};

export default BundleDetailComp;
