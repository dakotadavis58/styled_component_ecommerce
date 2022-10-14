import FacebookIcon from "@mui/icons-material/Facebook";
import HomeIcon from "@mui/icons-material/Home";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import { footerLinks } from "../../data";
import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
  List,
} from "./Footer.elements";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DNDEV</Logo>
        <Desc>
          This is my eccommerce app to show off my skills creating a production
          level application. This app demonstrates knowledge of React through
          the use of many different hooks, routing, redux, and UX/UI design. The
          backend of this app uses a Node.js environment, with an express server
          as the API provider. The data is being stored in a MongoDB database.
          Feel free to test out all functionality, over time I will be adding
          more so come back soon!
        </Desc>
        <SocialContainer>
          <SocialIcon
            href="https://www.facebook.com"
            target="_blank"
            color="3B5999"
          >
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon
            href="https://www.instagram.com"
            target="_blank"
            color="E4405F"
          >
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon
            href="https://www.twitter.com"
            target="_blank"
            color="55ACEE"
          >
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          {footerLinks.map((link) => {
            return (
              <ListItem key={link.title} href={link.link}>
                {link.title}
              </ListItem>
            );
          })}
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem
          href="https://maps.google.com/?q=AlfredMaine"
          target="_blank"
        >
          <HomeIcon style={{ marginRight: "10px" }} /> Alfred, Maine 04002
        </ContactItem>
        <ContactItem href="tel:12345678910" target="_blank">
          <PhoneIcon style={{ marginRight: "10px" }} /> +1 234 567 8910
        </ContactItem>
        <ContactItem href="mailto:dakota@dakotadavis.me" target="_blank">
          <MailIcon style={{ marginRight: "10px" }} /> dakota@dakotadavis.me
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
