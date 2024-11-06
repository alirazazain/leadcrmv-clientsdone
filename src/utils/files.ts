import { File, FileText, Image, Video, Music, Archive, Code } from 'lucide-react';
import React from 'react';

/**
 * Formats a file size in bytes to a human readable string
 */
export function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(1)} ${units[unitIndex]}`;
}

/**
 * Returns the appropriate icon component for a given filename based on its extension
 */
export function getFileIcon(filename: string): React.ReactNode {
  const extension = filename.split('.').pop()?.toLowerCase();

  switch (extension) {
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'webp':
      return React.createElement(Image, { className: "h-5 w-5 text-blue-500" });
    case 'mp4':
    case 'mov':
    case 'avi':
    case 'webm':
      return React.createElement(Video, { className: "h-5 w-5 text-purple-500" });
    case 'mp3':
    case 'wav':
    case 'ogg':
      return React.createElement(Music, { className: "h-5 w-5 text-green-500" });
    case 'zip':
    case 'rar':
    case '7z':
      return React.createElement(Archive, { className: "h-5 w-5 text-yellow-500" });
    case 'js':
    case 'ts':
    case 'jsx':
    case 'tsx':
    case 'html':
    case 'css':
      return React.createElement(Code, { className: "h-5 w-5 text-indigo-500" });
    case 'txt':
    case 'doc':
    case 'docx':
    case 'pdf':
      return React.createElement(FileText, { className: "h-5 w-5 text-gray-500" });
    default:
      return React.createElement(File, { className: "h-5 w-5 text-gray-400" });
  }
}

/**
 * File type definitions
 */
export interface FileItem {
  id: string;
  type: 'file';
  name: string;
  path: string[];
  size: number;
  mimeType: string;
  url: string;
  createdAt: string;
}

export interface FolderItem {
  id: string;
  type: 'folder';
  name: string;
  path: string[];
  items: (FileItem | FolderItem)[];
  createdAt: string;
}