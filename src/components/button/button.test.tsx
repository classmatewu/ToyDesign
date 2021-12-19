// 基于jest的React Testing 框架——Testing Library
// react-scripts >= 3.3 则将Testing Library内置集成进CRA项目中，包含@testing-library/react（jest支持React）和@testing-library/jest-dom（更多dom的matcher api）
// CRA项目执行 yarn test，则会执行到src目录下的所有测试文件，并监听
// 为什么这是个tsx结尾的测试文件呢，因为我们React组件依赖tsx语法，所以一般React组件的测试文件都是xx.test.(t|j)sx

import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'

test('first React FC Test', () => {
  const wapper = render(<Button>Hello</Button>) // 渲染一个wapper
  const element = wapper.queryByText('Hello') // 找到wapper里文本为'Hello'的节点
  expect(element).toBeTruthy() // 找到则为真
})