import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import GridCard from "../../components/GridCard/Index";
import GridCover from "../../components/GridCover/Index";

export default function Store() {
  const [itemsFeatured, setItemsFeatured] = useState([]);
  const [itemsGiftCard, setItemsGiftCard] = useState([]);
  const [itemsDiscount, setItemsDiscount] = useState([]);
  useEffect(() => {
    let mockedData = JSON.parse(window.localStorage.getItem("mockedData"));
    let games = mockedData.games;
    let gamesLen = games.length;
    let gamesFeatured = games.slice(gamesLen - 4 , gamesLen);
    setItemsFeatured(gamesFeatured);
    let cards = mockedData.giftCards;
    setItemsGiftCard(cards);
    let gamesDiscount = games.slice(0, 4);
    setItemsDiscount(gamesDiscount);
  }, []);
  return (
    <>
      <Container>
        <section id="games-featured" className="mt-5">
          <GridCover title="Jogos em Destaque" items={itemsFeatured} />
        </section>
        <section id="gift-cards" className="mt-5">
          <GridCard title="Gift Cards" items={itemsGiftCard} />
        </section>
        <section id="games-discount" className="mt-5">
          <GridCover title="Jogos em Desconto" items={itemsDiscount} />
        </section>
      </Container>
    </>
  );
}