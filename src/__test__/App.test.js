// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import MutationObserver from 'mutation-observer'
import { fetchShow as mockFetchShow, formatSeasons as mockFormatSeasons } from '../utils/formatSeasons'
import App from '../App'

const mockData = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }
]

const mockSeasons = [
  {
    name: "Chapter 1",
    season: 1
  },
  {
    name: "Chapter 2",
    season: 2
  },
]

jest.mock('../utils/formatSeasons.js')
global.MutationObserver = MutationObserver

test('Render App component', async () => {
  mockFetchShow.mockResolvedValueOnce(mockData)
  mockFormatSeasons.mockResolvedValueOnce(mockSeasons)
  const { getByTestId } = render(<App />)

  // const select = getByTestId('select')
  await waitFor(() => { return console.log('hello') })
})

// mockFetchMissions.mockResolvedValueOnce({
//   data: missionsFixture,
// })
// const { getByTestId, queryAllByTestId } = render(<App />)
// const button = getByTestId('button')
// fireEvent.click(button)
// await waitFor(() => {
//   expect(queryAllByTestId('mission')).toHaveLength(2)
//   expect(queryAllByTestId('mission')).not.toHaveLength(0)
// })