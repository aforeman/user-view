import React from 'react';
import { render } from '@testing-library/react';
import UserList from './UserList';

describe('UserList component', () => {
  const users = [
    { name: 'John Doe', role: 'ADMIN' },
    { name: 'Jane Smith', role: 'MANAGER' },
    { name: 'Alex Johnson', role: 'ADMIN' },
  ];

  it('renders user lines with the specified role', () => {
    const { getByText, queryByText } = render(<UserList users={users} role="ADMIN" />);

    // Check if lines for users with role 'ADMIN' are rendered
    const adminUsers = users.filter(user => user.role === 'ADMIN');
    adminUsers.forEach(user => {
      const nameElement = getByText(user.name);
      expect(nameElement).toBeInTheDocument();
    });

    // Check if lines for users with role other than 'ADMIN' are not rendered
    const nonAdminUsers = users.filter(user => user.role !== 'ADMIN');
    nonAdminUsers.forEach(user => {
      const nameElement = queryByText(user.name);
      expect(nameElement).not.toBeInTheDocument();
    });
  });

  it('renders no user lines when users array is undefined', () => {
    const { container } = render(<UserList users={undefined} role="ADMIN" />);
    const userLines = container.querySelectorAll('.user-line');
    expect(userLines.length).toBe(0);
  });

  it('renders no user lines when no users match the specified role', () => {
    const { container } = render(<UserList users={users} role="NONEXISTENTROLE" />);
    const userLines = container.querySelectorAll('.user-line');
    expect(userLines.length).toBe(0);
  });
});
