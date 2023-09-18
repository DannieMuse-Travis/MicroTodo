import React from 'react'
import DashHeader from '../static/DashHeader'
import { Outlet } from 'react-router-dom'
import Sider from '../static/Sider'
import { styled } from 'styled-components'

const DashBordLayout = () => {
  return (
    <div>
        <DashHeader/>
   <Holder>
         <Sider/>
        <Outlet/>
   </Holder>
    </div>
  )
}

export default DashBordLayout

const Holder =  styled.div`
display:flex;
height:calc(100vh - 60px);
`