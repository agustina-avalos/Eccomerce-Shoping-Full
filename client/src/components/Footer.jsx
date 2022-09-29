import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
   flex-direction: column;
  padding: 20px;
  ${mobile({ padding:"10px" , fontSize:"12px"})}

`;


const Logo = styled.h1`
    font-weight:bold;
    font-size:45px;
    ${mobile({  fontSize:"30px"})}

`

const Desc = styled.p({
    margin: "5px 0px"

})

const SocialContainer = styled.div`
  display: flex;
  

`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;
 /*  background-color: #${(props) => props.color}; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
 
`;


const Center = styled.div`
  flex: 1;
  padding: 20px;
  margin-Top:25px;
  margin-Left:45px;
  ${mobile({ display: "none" })}
`;

/*     marginTop:"25px",
    marginLeft:"45px"
 */

const Title = styled.h3({
    marginBottom:"30px"
})

const List = styled.ul({
    margin:"0",
    padding:"0",
    listStyle:"none",
    display:"flex",
    flexWrap:"wrap"

})

const ListItem = styled.li({
    width:"50%",
    marginBottom:"10px"


})

const Right = styled.div({
    flex:"1",
    padding:"20px",
    marginTop:"33px"

})


const ContactItem = styled.div({
    marginTop:"30px"

})

const Footer = () => {
  return (
    <Container>

        <Left>
            <Logo>AGUSTINA</Logo>

            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam quaerat aspernatur, nam maiores dolorem exercitationem aperiam est in sint laborum consectetur eius accusantium ipsam? Saepe pariatur impedit reprehenderit modi!</Desc>

            <SocialContainer>
                     <a href="https://github.com/agustina-avalos" target="_blank">
                        <SocialIcon>
                            <i class="fa-brands fa-github"></i>
                         </SocialIcon>
                    </a> 
            </SocialContainer>

            <SocialContainer>
                <a href="https://www.linkedin.com/in/agustina-avalos-527465235/" target="_blank">
                    <SocialIcon>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </SocialIcon>
                </a>
            </SocialContainer>

            <SocialContainer>
                <a href="https://unique-meerkat-49c45f.netlify.app/" target="_blank">
                    <SocialIcon>
                        <i class="fa-solid fa-image-portrait"></i>
                    </SocialIcon>
                </a>
            </SocialContainer>

        </Left>


        <Center>
            <Title>Useful Links</Title>

            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>

        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <i class="fa-solid fa-house" style={{marginRight:"10px"}}/>
                622 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <i class="fa-solid fa-phone" style={{marginRight:"10px"}}></i>
                +1 234 56 78
            </ContactItem>
            <ContactItem>
                <i class="fa-solid fa-at" style={{marginRight:"10px"}}></i>
                contact@aguavalos.com
            </ContactItem>


        </Right>
    </Container>
  )
}

export default Footer