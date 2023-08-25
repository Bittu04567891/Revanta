import styled from "styled-components"
import { popularProducts } from "../data"
import Member from "./Member"

const Container=styled.div`
   padding: 20px;
   display: flex;
   flex-wrap:wrap;
   justify-content:space-between;
    
`
const Wrapper=styled.header`
    font-weight: 600;
    font-size: large;
`

const Members = () => {
  return (
    <Container>
       <Wrapper>Team Leads</Wrapper>
       {popularProducts.map(item=>(
        <Member item={item} key={item.id}/>
       ))}
       
    </Container>
  )
}

export default Members