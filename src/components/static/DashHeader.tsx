import React from 'react'
import { styled } from 'styled-components'
import {CgMenuGridO} from "react-icons/cg"
import {LiaSearchSolid} from "react-icons/lia"
import {CiSettings} from "react-icons/ci"
import {AiOutlineQuestion} from "react-icons/ai"
import {VscMegaphone} from "react-icons/vsc"

const DashHeader = () => {
  return (
    <div>
        <Container>
        <Wrapper>
           <Holder>
           <Menu>
            <CgMenuGridO/>
           </Menu>
           <h3>TO DO</h3>
           </Holder>
           <InputHolder>
          <SearchHold>
       <LiaSearchSolid/>
       <Input type="text" />
          </SearchHold>
          
           </InputHolder>
           <IconHolder>
            <One>
                <CiSettings/>
            </One>
            <Two>
                <AiOutlineQuestion/>
            </Two>
            <Three>
                <VscMegaphone/>
            </Three>
        <Circle>
            OG
        </Circle>
           </IconHolder>
        </Wrapper>
        </Container>
    </div>
  )
}

export default DashHeader

const Circle = styled.div`
    width:30px;
    height:30px;
    border-radius:100px;
    border:1px solid #ffff;
    display:flex;
    justify-content: center;
    color:#fff;
    font-size:14px;
    font-weight:600;
    margin-left:30px;
    align-items:center;
`

const  Three = styled.div`
font-size:20px;
margin-left:30px;`

const  Two = styled.div`
font-size:20px;
margin-left:30px;
`

const  One =  styled.div`
font-size:20px;
margin-left:30px;
`

const  IconHolder = styled.div`
display:flex;
align-items:center;
color:#fff;
`

const SearchHold = styled.div`
    width:100%;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#2564CF;
    font-size:20px;

`

const InputHolder = styled.div`
display:flex;
height:32px;
width:380px;
background-color:#fff;
overflow:hidden;


`

const  Input = styled.input`
    flex:1;
    height:100%;
    border:none;
    outline:none;
    padding-left:12px;
`

const  Holder = styled.div`
display:flex;
align-items:center;
h3{
    color:#fff;
    margin-left:40px;
}
`

const Menu = styled.div`
color:#fff;
font-size:28px;
`

const Wrapper = styled.div`
    width:98%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    
`

const  Container = styled.div`
width:100%;
height:60px;
display:flex;
/* position:fixed; */
background-color:#2564CF;
justify-content: center;
align-items:center;
`