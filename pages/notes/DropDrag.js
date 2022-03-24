import React from "react";
import Head from "next/head";

const DropDrag = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://rawgit.com/enyo/dropzone/master/dist/dropzone.css"
        />
        <script src="https://rawgit.com/enyo/dropzone/master/dist/dropzone.js"></script>
      </Head>
      <div id="dropzone">
        <form action="/upload" class="dropzone needsclick" id="demo-upload">
          <div class="dz-message needsclick">
            <span class="text">
              <img
                src="http://www.freeiconspng.com/uploads/------------------------------iconpngm--22.png"
                alt="Camera"
              />
              Drop files here or click to upload.
            </span>
            <span class="plus">+</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DropDrag;
