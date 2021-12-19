// 通用js逻辑测试样例
// CRA 已经内置了jest框架，所以我们直接执行命令即可，开箱即用
// npx jest jest.test.js
// npx jest jest.test.js --watch

test('common matcher', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(5)
})

test('truthy or falsy', () => {
  expect(0).toBeFalsy()
  expect(1).toBeTruthy()
})

test('compare', () => {
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})

// 完全相等，这里由于引用不同，所以failed
test('toBe', () => {
  expect({
    name: 'Herry'
  }).toBe({
    name: 'Herry'
  })
})

// 值相等，success
test('toEqual', () => {
  expect({
    name: 'Herry'
  }).toEqual({
    name: 'Herry'
  })
})