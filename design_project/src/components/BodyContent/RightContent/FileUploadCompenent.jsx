import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
export default function FileUploadCompenent() {
  return (
    <div className="file-upload-div">
      <FaCloudUploadAlt size={40} />
      <span>Add New File</span>
    </div>
  );
}
