import theme_reducer from '../store/reducer/theme_reducer'

test('test theme reducer', () => {
  expect(theme_reducer('theme_blue', { type: 'THEME', payload: 'theme_red' })).toBe('theme_red')
  expect(theme_reducer(null, { type: 'THEME', payload: 'theme_red' })).toBe('theme_red')
  expect(theme_reducer('theme_red', { type: null, payload: null })).toBe('theme_red')
})
