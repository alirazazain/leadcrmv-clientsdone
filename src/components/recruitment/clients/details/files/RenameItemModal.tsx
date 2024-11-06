import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { FileItem, FolderItem } from '../../../../../types/files';

interface RenameItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: FileItem | FolderItem | null;
  onSubmit: (newName: string) => void;
}

export function RenameItemModal({ isOpen, onClose, item, onSubmit }: RenameItemModalProps) {
  const [newName, setNewName] = useState('');
  const [error, setError] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);
  const initialFocusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (item) {
      setNewName(item.name);
    }
  }, [item]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      initialFocusRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = () => {
    if (!newName.trim()) {
      setError('Name is required');
      return;
    }

    if (!/^[a-zA-Z0-9-_\s.]+$/.test(newName)) {
      setError('Name can only contain letters, numbers, spaces, hyphens, underscores, and dots');
      return;
    }

    onSubmit(newName.trim());
    setNewName('');
    setError('');
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen || !item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      onClick={handleOverlayClick}
    >
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />

        <span className="inline-block h-screen align-middle">&#8203;</span>

        <div
          ref={modalRef}
          className="inline-block w-full max-w-md my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Rename {item.type === 'folder' ? 'Folder' : 'File'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6">
            <div>
              <label htmlFor="newName" className="block text-sm font-medium text-gray-700">
                New Name
              </label>
              <input
                ref={initialFocusRef}
                type="text"
                id="newName"
                value={newName}
                onChange={(e) => {
                  setNewName(e.target.value);
                  setError('');
                }}
                className={`mt-1 block w-full px-3 py-2 border ${
                  error ? 'border-red-300 bg-red-50' : 'border-gray-300'
                } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
              {item.path.length > 0 && (
                <p className="mt-2 text-sm text-gray-500">
                  Location: {item.path.join(' / ')}
                </p>
              )}
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700"
            >
              Rename
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}