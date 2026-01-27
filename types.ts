
import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: 'folder' | 'code';
}

export interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
}
