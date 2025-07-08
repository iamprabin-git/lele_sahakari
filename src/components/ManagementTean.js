
import React from 'react';
import ManagementMemberCard from './ManagementMemberCard';
import { managementMembers } from '../../data/managementData'; // Import your data

const ManagementTeam = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Management Team</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet our experienced leadership team driving our success
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementMembers.map((member) => (
            <ManagementMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;