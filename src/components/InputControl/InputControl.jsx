import React from 'react'
import style from './InputControl.module.css'
export default function InputControl({label,...props}) {
  return (
    <div className={style.container}>
        {label && <lable>{label}</lable>}
        <input type="text" {...props} />
    </div>

  )
}
