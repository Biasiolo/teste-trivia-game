// src/utils/storage.js

const STORAGE_KEY = 'braindexProgress';

export const getProgress = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

export const saveProgress = (progress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const initializeProgress = (modules) => {
  const initialProgress = modules.map((module) => ({
    id: module.id,
    name: module.name,
    completed: false,
    score: 0,
  }));

  saveProgress(initialProgress);
  return initialProgress;
};
