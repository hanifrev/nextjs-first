import React, { useState } from "react";
import DropdownCheckbox from "../../src/component/DropdownCheckbox";
import Dropzone from "react-dropzone";
import { useDropzone } from "react-dropzone";

const Test = () => {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const [upload, setUpload] = useState(false);
  return (
    <div>
      Test
      <DropdownCheckbox />
      {/* <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        // styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
      /> */}
      {/* <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles[0].name)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
              <p>{files}</p>
            </div>
          </section>
        )}
      </Dropzone> */}
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />

          <p>Drop Files Here</p>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>
    </div>
  );
};

export default Test;
