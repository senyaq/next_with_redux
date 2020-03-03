import increase_reducer from '../store/reducer/increase_reducer'

test('test increase reducer', () => {
  expect(increase_reducer(null, { type: 'PLUS', payload: null })).toBe(1)
  expect(increase_reducer(0, { type: null, payload: null })).toBe(0)
})
