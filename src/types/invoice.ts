export type InvoiceStatus = 'PAID' | 'PENDING' | 'OVERDUE' | 'DRAFT' | 'CANCELLED';

export interface Invoice {
  id: string;
  title: string;
  invoiceNumber: string;
  amount: number;
  currency: string;
  status: InvoiceStatus;
  generatedAt: string;
  dueDate: string;
  items: InvoiceItem[];
  client: {
    id: string;
    name: string;
  };
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}