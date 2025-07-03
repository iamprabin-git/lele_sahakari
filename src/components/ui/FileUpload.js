import React from 'react';
import { FaUpload } from 'react-icons/fa';

const FileUpload = ({ 
  preview, 
  onUpload, 
  label, 
  error, 
  description = "JPG, PNG (max 2MB)" 
}) => {
  const inputRef = React.useRef(null);

  const triggerInput = () => inputRef.current?.click();

  return (
    <div className="space-y-2">
      <label className="block text-gray-700 mb-2">{label}</label>
      <input
        type="file"
        ref={inputRef}
        onChange={onUpload}
        accept="image/*"
        className="hidden"
      />
      <div 
        className={`border-2 ${error ? 'border-red-500' : 'border-dashed border-gray-300'} 
        rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50`}
        onClick={triggerInput}
      >
        {preview ? (
          <div className="relative">
            <img 
              src={preview} 
              alt="Upload preview" 
              className="w-full max-h-48 object-contain rounded-md"
            />
            <button 
              type="button"
              className="mt-4 text-blue-600 hover:text-blue-800"
              onClick={(e) => {
                e.stopPropagation();
                triggerInput();
              }}
            >
              <FaUpload className="inline mr-1" /> Change
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <FaUpload className="mx-auto text-3xl text-gray-400" />
            <p className="text-gray-500">Click to upload</p>
            <p className="text-xs text-gray-400">{description}</p>
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FileUpload;