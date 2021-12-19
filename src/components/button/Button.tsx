import React from 'react'
import classNames from 'classnames'

// 组件类型
export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
  Danger = 'danger',
  Link = 'link', // 注意link时的标签时a标签，以及没有disabled属性和样式，需要自行实现
}

// 组件大小
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

// 组件参数
interface BaseButtonProps {
  btnType?: ButtonType; // 由于原生的button组件就有type属性，所以这里为了不冲突覆盖，就重命名为btnType
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  href?: string;
  children: React.ReactNode;
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> // 原生button标签属性
type NativeAnchorProps = React.AnchorHTMLAttributes<HTMLElement> // 原生a标签属性
type ButtonProps = Partial<BaseButtonProps & NativeButtonProps & NativeAnchorProps> // 取并集，Partial<T>是把属性变为可选，避免button标签上的a标签属性是必选的

// 组件
const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    btnType,
    size,
    disabled,
    href,
    children,
    ...othersProps
  } = props

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled // 当类型是link，且disabled为true是，需要手动为a标签添加disabled样式，原生botton组件则默认支持disabled属性，不用自己加样式
  })

  if (btnType === ButtonType.Link) {
    return (
      <a 
        href={href}
        className={classes}
        {...othersProps}
      >{children}</a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...othersProps}
      >{children}</button>
    )
  }
}

// 组件默认参数
Button.defaultProps = {
  btnType: ButtonType.Default,
  disabled: false,
}

export default Button