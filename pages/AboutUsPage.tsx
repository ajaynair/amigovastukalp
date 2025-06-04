
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import TeamMemberCard from '../components/TeamMemberCard';
import { TEAM_MEMBERS_DATA, ABOUT_COMPANY_INTRO, ABOUT_COMPANY_DETAILS, COMPANY_MOTTO } from '../constants';
import { TeamMember } from '../types';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <SectionContainer id="about-company">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">About <span className="text-cyan-400">Amigo Vastukalp</span></h2>
          <p className="mt-4 text-xl text-cyan-300">{COMPANY_MOTTO}</p>
        </div>
        <div className="max-w-3xl mx-auto text-slate-300 space-y-6 text-lg text-center sm:text-left">
          <p>{ABOUT_COMPANY_INTRO}</p>
          <p>{ABOUT_COMPANY_DETAILS}</p>
        </div>
      </SectionContainer>

      <SectionContainer id="our-team" className="bg-slate-800/50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Meet Our <span className="text-cyan-400">Expert Team</span></h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            The driving force behind Amigo Vastukalp's success. Passionate professionals dedicated to bringing your vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {TEAM_MEMBERS_DATA.map((member: TeamMember) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
};

export default AboutUsPage;
