import { WpIcon } from "../../styles";
import { Container, InfoDate, OthersInfo, WpCalendar, WpChevronLeft, WpChevronRight, WpDate, WpInfoDate, WpInformation } from "./styles";
import { CalendarDays, ChevronLeft, ChevronRight, Sandwich, Boxes } from "lucide-react";
export default function Hero() {
  return (
    <Container>
      <WpCalendar>
        <CalendarDays color="red" size={240} />
      </WpCalendar>
      <WpInformation>
        <WpDate>
          <WpInfoDate>
            <WpChevronLeft>
              <ChevronLeft color="#1a1a1a" size={50} />
            </WpChevronLeft>
            <InfoDate>
              <span>2 de Janeiro 2023</span>
            </InfoDate>
            <WpChevronRight>
              <ChevronRight color="#1a1a1a" size={50} />
            </WpChevronRight>
          </WpInfoDate>
        </WpDate>
        <OthersInfo>
          <ul>
            <li>
              <WpIcon>
                <Sandwich color="red" size={38} />
              </WpIcon>
              <span>Massa com tudo</span>
            </li>
            <li>
              <WpIcon>
                <Boxes color="red" size={38} />
              </WpIcon>
              <span>
                Produtos usados nesta refeição...
              </span>
            </li>
          </ul>


        </OthersInfo>
      </WpInformation>

    </Container>
  )
}
