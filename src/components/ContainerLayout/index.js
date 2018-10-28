import React from 'react'
import { Card } from 'antd'
import './index.scss'

const ContainerLayout = ({ children }) => {
  return (
    <Card className="main-container">
      {children}
    </Card>
  )
}

export default ContainerLayout
