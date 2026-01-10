import React from 'react';

export interface Event {
  id: string;
  title: string;
  date: string;
  day: string;
  time: string;
  description: string;
  image?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
  isError?: boolean;
}