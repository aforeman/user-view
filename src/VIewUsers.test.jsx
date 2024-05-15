import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ViewUsers from './ViewUsers';

describe('ViewUsers component', () => {
  const users = [
    { name: 'John Doe', role: 'ADMIN' },
    { name: 'Jane Smith', role: 'MANAGER' },
    { name: 'Alex Johnson', role: 'ADMIN' },
  ];

  it('renders the radio buttons correctly', () => {
    const { getByLabelText } = render(<ViewUsers users={users} />);

    const managerRadio = getByLabelText('Manager');
    expect(managerRadio).toBeInTheDocument();

    const adminRadio = getByLabelText('Admin');
    expect(adminRadio).toBeInTheDocument();
  });

  it('renders admin users when the Admin radio button is selected', () => {
    const { getByText, queryByText } = render(<ViewUsers users={users} />);

    const adminRadio = getByText('Admin');
    fireEvent.click(adminRadio);

    const adminUsers = users.filter(user => user.role === 'ADMIN');
    adminUsers.forEach(user => {
      const nameElement = getByText(user.name);
      expect(nameElement).toBeInTheDocument();
    });

    const nonAdminUsers = users.filter(user => user.role !== 'ADMIN');
    nonAdminUsers.forEach(user => {
      const nameElement = queryByText(user.name);
      expect(nameElement).not.toBeInTheDocument();
    });
  });

  it('renders manager users when the Manager radio button is selected', () => {
    const { getByText, queryByText } = render(<ViewUsers users={users} />);

    const managerRadio = getByText('Manager');
    fireEvent.click(managerRadio);

    const managerUsers = users.filter(user => user.role === 'MANAGER');
    managerUsers.forEach(user => {
      const nameElement = getByText(user.name);
      expect(nameElement).toBeInTheDocument();
    });

    const nonManagerUsers = users.filter(user => user.role !== 'MANAGER');
    nonManagerUsers.forEach(user => {
      const nameElement = queryByText(user.name);
      expect(nameElement).not.toBeInTheDocument();
    });
  });
});
