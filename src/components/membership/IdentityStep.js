import React from 'react';
import { FaIdCard } from 'react-icons/fa';
import FileUpload from '@/components/ui/FileUpload';
import { ID_TYPES } from '@/constants/accountOpening';

const IdentityStep = ({ 
  formData, 
  errors, 
  handleChange, 
  handleImageUpload,
  idFrontPreview,
  idBackPreview,
  selfiePreview
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center">
        <FaIdCard className="mr-2 text-blue-600" />
        Identity Verification
      </h2>
      <p className="text-gray-600">To comply with banking regulations, please provide identification documents.</p>
      
      <div className="space-y-8">
        <div>
          <label className="block text-gray-700 mb-2">ID Type *</label>
          <select
            name="idType"
            value={formData.identity.idType}
            onChange={(e) => handleChange(e, 'identity')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            {ID_TYPES.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        
        {/* ID Number Field */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FileUpload
            preview={idFrontPreview}
            onUpload={(e) => handleImageUpload(e, 'idFront')}
            label="Front of ID *"
            error={errors.identity?.idFront}
          />
          
          <FileUpload
            preview={idBackPreview}
            onUpload={(e) => handleImageUpload(e, 'idBack')}
            label="Back of ID *"
            error={errors.identity?.idBack}
          />
        </div>
        
        <FileUpload
          preview={selfiePreview}
          onUpload={(e) => handleImageUpload(e, 'selfie')}
          label="Selfie Photo *"
          error={errors.identity?.selfie}
          description="Face clearly visible"
        />
      </div>
    </div>
  );
};

export default IdentityStep;