import React from 'react'
import { CustomIconProps } from './CustomIcon.type'

export const CustomIcon = (props: CustomIconProps) => {

    const { icon: Icon } = props;
  return (

    <div className="bg-icon">
          <Icon strokeWidth={1} className="icon" />{" "}
    </div>
  )
}
