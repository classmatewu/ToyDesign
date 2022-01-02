// 基于jest的React Testing 框架——Testing Library
// react-scripts >= 3.3 则将Testing Library内置集成进CRA项目中，包含@testing-library/react（jest支持React）和@testing-library/jest-dom（更多dom的matcher api）
// CRA项目执行 yarn test，则会执行到src目录下的所有测试文件，并监听
// 为什么这是个tsx结尾的测试文件呢，因为我们React组件依赖tsx语法，所以一般React组件的测试文件都是xx.test.(t|j)sx

import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'

// test
test('first React FC Test', () => {
  const wapper = render(<Button>Hello</Button>) // 渲染一个wapper
  const element = wapper.queryByText('Hello') // 找到wapper里文本为'Hello'的节点
  expect(element).toBeTruthy() // 找到则为真
  expect(element).toBeInTheDocument() // 是否在文档中，这个是 jest-dom 带来的 API，比 toBeTruthy 要更语义化一点
})

// Button 组件测试样例
describe('test Button component', () => {
  // 测试默认按钮
  it('should render the correct default button', () => {
    const wapper = render(<Button>Button</Button>) // 渲染一个wapper
    const element = wapper.queryByText('Button')
    expect(element).toBeInTheDocument()
    expect(element?.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
  })
})