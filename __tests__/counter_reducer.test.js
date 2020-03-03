import counter_reducer from '../store/reducer/counter_reducer'

test('test counter reducer', () => {
  expect(counter_reducer(null, { type: 'PLUS', payload: null })).toBe(1)
  expect(counter_reducer(10, { type: 'MINUS', payload: null })).toBe(9)
  expect(counter_reducer(0, { type: 'MINUS', payload: null })).toBe(0)
  expect(counter_reducer(0, { type: null, payload: null })).toBe(0)
})
