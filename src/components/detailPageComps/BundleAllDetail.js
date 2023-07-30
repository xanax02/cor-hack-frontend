import React from "react";
import AccordItem from "./AccordItem";

const BundleAllDetail = (props) => {
  if (!props.data) {
    return;
  }
  return (
    <div className="bg-[#171D21] w-[90%] max-h-[55vh] overflow-scroll scroll-hide px-4 pt-4 pb-[12px] border-y-[16px] border-x-[16px] border-[#171D21]">
      <AccordItem
        title={"Folders"}
        name={props.data?.commandReports[0]?.name}
        path={props.data?.folderReports[0]?.path}
        description={props.data?.folderReports[0]?.description}
        size={props.data?.folderReports[0]?.size}
        fileCounts={props.data?.folderReports[0]?.fileCounts}
        folderCount={props.data?.folderReports[0]?.folderCount}
        logFileCount={props.data?.folderReports[0]?.logFileCount}
      />
      <AccordItem
        title={"Files"}
        name={props.data?.fileReports[0]?.name}
        path={props.data?.fileReports[0]?.path}
        description={props.data?.fileReports[0]?.description}
        size={props.data?.fileReports[0]?.size}
      />
      <AccordItem
        title={"Commands"}
        name={props.data?.commandReports[0]?.name}
        description={props.data?.commandReports[0]?.description}
        script={props.data?.commandReports[0]?.script}
        output={props.data?.commandReports[0]?.output}
      />
    </div>
  );
};

export default BundleAllDetail;
