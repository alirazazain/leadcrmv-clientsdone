import { ArrowDown, ArrowUp } from 'lucide-react';
import { InvoiceStatus } from '../../../../../types/invoice';

interface InvoiceFiltersProps {
  selectedStatus: InvoiceStatus | 'ALL';
  onStatusChange: (status: InvoiceStatus | 'ALL') => void;
  sortOrder: 'asc' | 'desc';
  onSortOrderChange: (order: 'asc' | 'desc') => void;
}

const statuses: { value: InvoiceStatus | 'ALL'; label: string }[] = [
  { value: 'ALL', label: 'All Invoices' },
  { value: 'PENDING', label: 'Pending' },
  { value: 'PAID', label: 'Paid' },
  { value: 'OVERDUE', label: 'Overdue' },
  { value: 'DRAFT', label: 'Draft' },
  { value: 'CANCELLED', label: 'Cancelled' }
];

export function InvoiceFilters({
  selectedStatus,
  onStatusChange,
  sortOrder,
  onSortOrderChange
}: InvoiceFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        {statuses.map(status => (
          <button
            key={status.value}
            onClick={() => onStatusChange(status.value)}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
              selectedStatus === status.value
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            {status.label}
          </button>
        ))}
      </div>

      <button
        onClick={() => onSortOrderChange(sortOrder === 'desc' ? 'asc' : 'desc')}
        className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        {sortOrder === 'desc' ? (
          <>
            <ArrowDown className="h-4 w-4 mr-1.5" />
            Newest First
          </>
        ) : (
          <>
            <ArrowUp className="h-4 w-4 mr-1.5" />
            Oldest First
          </>
        )}
      </button>
    </div>
  );
}