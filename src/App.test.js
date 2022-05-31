// // import { render, screen } from '@testing-library/react';
// // import App from './App';

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import App from './App';

// // it('shows the schedule year', () => {
// //   render(<App />);
// //   const title = screen.queryByText(/2018-2019/i);
// //   expect(title).toBeInTheDocument();
// // });
// it('shows the schedule year', async () => {
//   render(<App />);
//   const title = await screen.findByText(/2018-2019/i);
//   expect(title).toBeInTheDocument();
// });

// // it('shows Sign In if not logged in', () => {
// //   render(<App />);
// //   const button = screen.queryByText(/Sign In/i);
// //   expect(button).toBeInTheDocument();
// // });
// it('shows Sign In if not logged in', async () => {
//   render(<App />);
//   const button = await screen.findByText(/Sign In/i);
//   expect(button).toBeInTheDocument();
// });

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useData, useUserState } from './utilities/firebase.js';
import App from './App';

jest.mock('./utilities/firebase.js');

const mockSchedule = {
  "title": "CS Courses for 1850-1851",
  "courses": {}
};

it('shows the schedule year', () => {
  useData.mockReturnValue([mockSchedule, false, null]);
  useUserState.mockReturnValue([null]);
  render(<App />);
  const title = screen.queryByText(/1850-1851/i);
  expect(title).toBeInTheDocument();
});

it('shows Sign In if not logged in', () => {
  useData.mockReturnValue([mockSchedule, false, null]);
  useUserState.mockReturnValue([null]);
  render(<App />);
  const button = screen.queryByText(/Sign In/i);
  expect(button).toBeInTheDocument();
});

it('asks for data once with a schedule path', () => {
  useData.mockReturnValue([mockSchedule, false, null]);
  useUserState.mockReturnValue([null]);
  render(<App />);
  expect(useData).toHaveBeenCalledTimes(1);
  expect(useData).toHaveBeenCalledWith('/', expect.any(Function));
});

it('shows Sign Out if logged in', () => {
  useData.mockReturnValue([mockSchedule, false, null]);
  useUserState.mockReturnValue([{ displayName: 'Joe' }]);
  render(<App />);
  const button = screen.queryByText(/Sign Out/i);
  expect(button).toBeInTheDocument();
});