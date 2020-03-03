import foo_reducer from '../store/reducer/foo_reducer'

test('test foo reducer', () => {
  expect(foo_reducer(null, { type: 'FOO', payload: 'Finish' })).toBe('Finish')
  expect(foo_reducer('start', { type: null, payload: 'Finish' })).toBe('start')
})
