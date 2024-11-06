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
  createdAt: string;
  items: (FileItem | FolderItem)[];
}