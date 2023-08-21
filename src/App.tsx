import { useEffect, useState } from "react";

type IndexedFile = {
  name: string;
  path: string;
  date: string;
};

function App() {
  const [fileList, setFileList] = useState<IndexedFile[]>();

  useEffect(() => {
    fetch("/index.json")
      .then((res) => res.json())
      .then((data) => {
        setFileList(data.files);
      });
  }, []);

  return (
    <p>
      Welcome to resource.yakovliam.com.
      <br />
      This site is an index of various resources in /public.
      <br />
      <br />
      {fileList?.map((file) => (
        <a href={file.path} key={file.name}>
          {file.name} // {file.path} // {file.date}
        </a>
      ))}
    </p>
  );
}

export default App;
