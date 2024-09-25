import { useState, useRef, useEffect } from 'react';
import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({cloud_name: 'kingbin'});

const colorOptions = [
  'Custom Writing (any type)',
  'Admission Essay',
  'Annotated Bibliography',
  'Argumentative Essay',
  'Business Plan',
  'Case Study',
  'Coursework',
  'Creative Writing',
  'Literature / Movie Review',
  'Personal Statement',
  'Paraphrasing',
  'Proofreading',
  'Presentation / Speech',
  'Research Paper',
  'Research Proposal',
  'Term Paper',
  'Thesis / Dissertation Chapter',
  'Other', 
  'Critical thinking',
  'Editing'
];

const Part2 = ({ data, setData }) => {
  const [files, setFiles] = useState(data.files || []);
  const [fileDragging, setFileDragging] = useState(null);
  const [fileDropping, setFileDropping] = useState(null);
  const [value, setValue] = useState(data.pages || 1);
  const [pages, setPages] = useState(data.words || 280);
  const dndRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState(data.typeOfPaper || colorOptions[0]);

  useEffect(() => {
    setPages(value * 280);
    setData({ ...data, pages: value, words: value * 280 });
  }, [value]);

  const humanFileSize = (size) => {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (
      (size / Math.pow(1024, i)).toFixed(2) * 1 +
      ' ' +
      ['B', 'kB', 'MB', 'GB', 'TB'][i]
    );
  };

  const remove = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    setData({ ...data, files: newFiles });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = [...files];
    const removed = newFiles.splice(fileDragging, 1);
    newFiles.splice(fileDropping, 0, ...removed);
    setFiles(newFiles);
    setData({ ...data, files: newFiles });
    setFileDropping(null);
    setFileDragging(null);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    const targetElem = e.target.closest('[data-index]');
    setFileDropping(targetElem ? targetElem.getAttribute('data-index') : null);
  };

  const handleDragStart = (e, index) => {
    setFileDragging(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const loadFile = (file) => {
    return URL.createObjectURL(file);
  };

 const addFiles = async (e) => {
    const newFiles = [...files, ...Array.from(e.target.files)];
    const uploadedUrls = [];

    for (const file of newFiles) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'guxpscgv'); // Replace with your upload preset

      try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/upload`, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload file');
        }

        const data = await response.json();
        console.log(data, "After upload to URL")
        uploadedUrls.push(data.secure_url); // Get the secure URL of the uploaded file
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }

    setFiles(newFiles);
    setData({ ...data, files: uploadedUrls }); // Store the URLs in the data
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = () => {
    setFileDropping(null);
  };

  const decrement = () => {
    setValue(prevValue => (prevValue > 1 ? prevValue - 1 : prevValue));
  };

  const increment = () => {
    setValue(prevValue => prevValue + 1);
  };

  const handleChange = (event) => {
    setSelectedColor(event.target.value);
    setData({ ...data, typeOfPaper: event.target.value });
  };

  return (
    <>
      <div className="bg-white rounded w-12/12 mx-auto">
        <div className="relative flex flex-col p-4 text-gray-400 border border-sky-500 rounded">
          <div
            ref={dndRef}
            className="relative flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              accept="*"
              type="file"
              multiple
              className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
              onChange={addFiles}
            />
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <svg
                className="w-6 h-6 mr-1 text-current-50"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="m-0">Drag your files here or click in this area.</p>
            </div>
          </div>

          {files.length > 0 && (
            <div
              className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-6"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {files.map((file, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center overflow-hidden text-center bg-gray-100 border border-sky-500 rounded cursor-move select-none ${
                    fileDragging == index ? 'border-blue-600' : ''
                  }`}
                  style={{ paddingTop: '100%' }}
                  draggable="true"
                  data-index={index}
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragEnter={handleDragEnter}
                  onDragEnd={() => setFileDragging(null)}
                >
                  <button
                    className="absolute top-0 right-0 z-50 p-1 bg-white rounded-bl focus:outline-none"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    <svg
                      className="w-4 h-4 text-gray-700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                  {file.type.includes('audio/') && (
                    <svg
                      className="absolute w-12 h-12 text-gray-400 transform top-1/2 -translate-y-2/3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  )}
                  {(file.type.includes('application/') || file.type === '') && (
                    <svg
                      className="absolute w-12 h-12 text-gray-400 transform top-1/2 -translate-y-2/3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                  {file.type.includes('image/') && (
                    <img
                      className="absolute inset-0 z-0 object-cover w-full h-full border-4 border-white preview"
                      src={loadFile(file)}
                      alt="preview"
                    />
                  )}
                  {file.type.includes('video/') && (
                    <video
                      className="absolute inset-0 object-cover w-full h-full border-4 border-white pointer-events-none preview"
                      src={loadFile(file)}
                      type="video/mp4"
                      controls
                    ></video>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col p-2 text-xs bg-white bg-opacity-50">
                    <span className="w-full font-bold text-gray-900 truncate">
                      {file.name}
                    </span>
                    <span className="text-xs text-gray-900">
                      {humanFileSize(file.size)}
                    </span>
                  </div>
                  {fileDropping == index && fileDragging != index && (
                    <div className="absolute inset-0 z-40 transition-colors duration-300 bg-blue-200 bg-opacity-80"></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* 2 */}
      <div className="custom-number-input w-8/12 mt-6">
        <label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">
          Pages
        </label>
        <div className='flex justify-between '>
          <div className="flex flex-row h-10 w-full rounded-lg border border-sky-500 relative mt-1">
            <button
              onClick={decrement}
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700"
              name="custom-input-number"
              value={value}
              readOnly
            />
            <button
              onClick={increment}
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
          <div className='text-center w-full ml-6 font-bold text-xl'>
            {pages} words
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="mt-3 block w-11/12">
        <h3 className="text-gray-700 text-sm font-semibold mb-2">Type of paper</h3>
        <select
          className="border border-sky-500 rounded-full w-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          value={selectedColor}
          onChange={handleChange}
        >
          {colorOptions.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Part2;