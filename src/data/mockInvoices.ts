import { Invoice } from '../types/invoice';
import { addDays, subDays } from 'date-fns';

const now = new Date();

export const mockInvoices: Invoice[] = [
  {
    id: '1',
    title: 'Senior Developer Recruitment - Q1',
    invoiceNumber: 'INV-2024-001',
    amount: 5000,
    currency: 'USD',
    status: 'PENDING',
    generatedAt: now.toISOString(),
    dueDate: addDays(now, 30).toISOString(),
    items: [
      {
        id: '1',
        description: 'Recruitment Service Fee',
        quantity: 1,
        rate: 5000,
        amount: 5000
      }
    ],
    client: {
      id: '1',
      name: 'Acme Corp'
    }
  },
  {
    id: '2',
    title: 'Technical Lead Placement',
    invoiceNumber: 'INV-2024-002',
    amount: 8500,
    currency: 'USD',
    status: 'PAID',
    generatedAt: subDays(now, 45).toISOString(),
    dueDate: subDays(now, 15).toISOString(),
    items: [
      {
        id: '1',
        description: 'Placement Fee',
        quantity: 1,
        rate: 8500,
        amount: 8500
      }
    ],
    client: {
      id: '1',
      name: 'Acme Corp'
    }
  },
  {
    id: '3',
    title: 'Frontend Developer Recruitment',
    invoiceNumber: 'INV-2024-003',
    amount: 3500,
    currency: 'USD',
    status: 'OVERDUE',
    generatedAt: subDays(now, 60).toISOString(),
    dueDate: subDays(now, 30).toISOString(),
    items: [
      {
        id: '1',
        description: 'Recruitment Service Fee',
        quantity: 1,
        rate: 3500,
        amount: 3500
      }
    ],
    client: {
      id: '1',
      name: 'Acme Corp'
    }
  },
  {
    id: '4',
    title: 'DevOps Engineer Placement',
    invoiceNumber: 'INV-2024-004',
    amount: 6000,
    currency: 'USD',
    status: 'DRAFT',
    generatedAt: subDays(now, 15).toISOString(),
    dueDate: addDays(now, 15).toISOString(),
    items: [
      {
        id: '1',
        description: 'Placement Fee',
        quantity: 1,
        rate: 6000,
        amount: 6000
      }
    ],
    client: {
      id: '1',
      name: 'Acme Corp'
    }
  }
];