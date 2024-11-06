import { format } from 'date-fns';
import { Invoice } from '../../../../../types/invoice';
import { FileText, Calendar, DollarSign, Clock } from 'lucide-react';

interface InvoiceListProps {
  invoices: Invoice[];
}

export function InvoiceList({ invoices }: InvoiceListProps) {
  const getStatusColor = (status: Invoice['status']) => {
    switch (status) {
      case 'PAID':
        return 'bg-green-100 text-green-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'OVERDUE':
        return 'bg-red-100 text-red-800';
      case 'DRAFT':
        return 'bg-gray-100 text-gray-800';
      case 'CANCELLED':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (invoices.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Invoices Found</h3>
        <p className="text-sm text-gray-500">
          There are no invoices matching your current filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {invoices.map((invoice) => (
        <div
          key={invoice.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 hover:border-indigo-500 transition-colors duration-200"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{invoice.title}</h3>
                <p className="text-sm text-gray-500">{invoice.invoiceNumber}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                {invoice.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Generated: {format(new Date(invoice.generatedAt), 'MMM d, yyyy')}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                <span>Due: {format(new Date(invoice.dueDate), 'MMM d, yyyy')}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center text-lg font-semibold text-gray-900">
                <DollarSign className="h-5 w-5 mr-1" />
                {invoice.currency} {invoice.amount.toLocaleString()}
              </div>
              <button className="text-sm text-indigo-600 hover:text-indigo-500">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}