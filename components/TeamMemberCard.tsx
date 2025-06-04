
import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40">
      <img className="w-full h-64 object-cover object-center" src={member.imageUrl} alt={member.name} />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
        <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
        {member.bio && <p className="text-slate-300 text-sm">{member.bio}</p>}
      </div>
    </div>
  );
};

export default TeamMemberCard;
