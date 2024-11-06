import { ClipboardCheck } from 'lucide-react';

export function PlacementsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Placements</h1>
        <p className="mt-1 text-sm text-gray-500">Track successful candidate placements and hiring status</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col items-center justify-center py-12">
          <ClipboardCheck className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
          <p className="text-gray-500 text-center max-w-sm">
            The placements tracking feature is currently under development. Check back soon for updates.
          </p>
        </div>
      </div>
    </div>
  );
}