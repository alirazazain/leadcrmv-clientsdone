import { useState } from 'react';
import { InvoiceList } from './InvoiceList';
import { InvoiceFilters } from './InvoiceFilters';
import { mockInvoices } from '../../../../../data/mockInvoices';
import { InvoiceStatus } from '../../../../../types/invoice';
import { Client } from '../../../../../store/recruitmentStore';

interface ClientInvoicesProps {
  client: Client;
}

export function ClientInvoices({ client }: ClientInvoicesProps) {
  const [selectedStatus, setSelectedStatus] = useState<InvoiceStatus | 'ALL'>('ALL');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const filteredInvoices = mockInvoices
    .filter(invoice => 
      selectedStatus === 'ALL' ? true : invoice.status === selectedStatus
    )
    .sort((a, b) => {
      const dateA = new Date(a.generatedAt).getTime();
      const dateB = new Date(b.generatedAt).getTime();
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Invoices</h2>
        <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
          Generate Invoice
        </button>
      </div>

      <InvoiceFilters
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
      />

      <InvoiceList invoices={filteredInvoices} />
    </div>
  );
}