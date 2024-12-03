import React from 'react'
import { CustomIconProps } from './CustomIcon.type'

export const CustomIcon = (props: CustomIconProps) => {

    const { icon: Icon } = props;
  return (

    <div className="p-2 bg-slate-400/20 rounded-lg">
          <Icon strokeWidth={1} className="icon" />{" "}
    </div>
  )
}
