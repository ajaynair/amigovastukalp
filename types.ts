
import React from 'react';

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}
