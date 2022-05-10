import { FC } from 'react'

import styles from './index.module.css'

interface ButtonPrimaryProps {
  text: string
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ text }) => {
  return <button>{text}</button>
}

export default ButtonPrimary
