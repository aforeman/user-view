import React from 'react';
import { render } from '@testing-library/react';
import UserLine from './UserLine';

describe('UserLine component', () => {
  const user = { name: 'John Doe', role: 'admin' };

  it('renders user name and role correctly', () => {
    const { getByText } = render(<UserLine {...user} />);
    const nameElement = getByText(user.name);
    const roleElement = getByText(user.role);

    expect(nameElement).toBeInTheDocument();
    expect(roleElement).toBeInTheDocument();
  });

  it('displays the initial letter of the user name', () => {
    const { getByText } = render(<UserLine {...user} />);
    const initialElement = getByText(user.name[0]);

    expect(initialElement).toBeInTheDocument();
  });
});
