import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Banner from "./components/Banner/Index";
import Footer from "./components/Footer/Index";
import Topbar from "./components/Topbar/Index";


import Routes from "./routes";

export default function App() {
  const [itemsBanner, setItemsBanner] = useState([]);
  useEffect(() => {
    const dataExample = {
      ads: [
        {
          id: 1,
          image: 'https://wallpapercave.com/wp/wc1765288.jpg',
          name: 'NOVOS JOGOS TODOS OS DIAS',
          description: 'São 10 jogos novos todos os dias.',
        },
        {
          id: 2,
          image: 'https://i.pinimg.com/originals/15/9e/57/159e57cf5094f6a0d699cd2c6beb9b9b.jpg',
          name: 'MAIORES NOVIDADES DO MERCADO',
          description: 'Só aqui você encontra o que há de mais novo no mundo dos games.',
        },
        {
          id: 3,
          image: 'https://cdn.wallpapersafari.com/74/12/SRjGYq.png',
          name: 'MELHORES PREÇOS',
          description: 'Diversos games com até 70% de desconto.',
        },
      ],
      games: [
        {
          id: 1,
          image: 'https://i.pinimg.com/originals/ba/68/75/ba68754c3d295e787b068b7dd63b911d.jpg',
          name: 'Minecraft',
          description: 'Minecraft é um jogo eletrônico sandbox de sobrevivência criado pelo desenvolvedor sueco Markus "Notch" Persson e posteriormente desenvolvido e publicado pela Mojang Studios, cuja propriedade intelectual foi obtida pela Microsoft em 2014.',
          createAt: '25/7/2021'
        },
        {
          id: 2,
          image: 'https://images7.alphacoders.com/109/1090776.jpg',
          name: 'Halo',
          description: 'Halo é uma franquia de jogos de tiro em primeira pessoa de ficção científica militar, criada pela Bungie, e agora produzida pela 343 Industries, subsidiária da Xbox Game Studios.',
          createAt: '25/7/2021'
        },
        {
          id: 3,
          image: 'https://i.pinimg.com/originals/6c/db/7b/6cdb7bbf2bd149bf6376e6789c6a184b.png',
          name: 'Counter-Strike',
          description: 'Counter-Strike (também abreviado por CS) é um popular jogo eletrônico de tiro em primeira pessoa.[2] Inicialmente criado como um "mod" de Half-Life para jogos online, foi desenvolvido por Minh Le e Jess Cliffe e depois adquirido pela Valve Corporation. Foi lançado em 1999, porém em 2000 ele começou a ser comercializado oficialmente.',
          createAt: '25/7/2021'
        },
        {
          id: 4,
          image: 'https://wallpaperaccess.com/full/1615949.jpg',
          name: 'The Sims',
          description: 'The Sims (Os Sims em Portugal) é uma série de jogos eletrônicos de simulação de vida real criado pelo designer de jogos Will Wright e produzida pela Maxis. O primeiro jogo da série, The Sims, foi lançado em 4 de fevereiro de 2000. Os jogos da série The Sims são, em grande parte, jogos sandbox, pois não possuem objetivos definidos.',
          createAt: '25/7/2021'
        },
        {
          id: 5,
          image: 'https://images3.alphacoders.com/694/thumb-1920-694711.jpg',
          name: 'Tekken',
          description: 'Tekken (鉄拳? "Punho de Aço") é um série de jogos de luta criada, produzida e publicada pela Namco (mais tarde Bandai Namco Entertainment). Começando com o original Tekken em 1994, a série tem recebido muitas sequelas e actualizações assim como jogos paralelos (spin-off).',
          createAt: '25/7/2021'
        },
        {
          id: 6,
          image: 'https://images.alphacoders.com/910/thumb-1920-91081.jpg',
          name: 'Need for Speed',
          description: 'Need for Speed é uma série de jogos eletrônicos de corrida automóvel publicada pela Electronic Arts (EA) e produzida por vários estúdios incluindo o canadiano EA Black Box, o britânico Criterion Games e o sueco Ghost Games. É considerado por muitos críticos e fãs de jogos de corrida, como a melhor franquia de jogos de corrida de todos os tempos.',
          createAt: '25/7/2021'
        },
        {
          id: 7,
          image: 'https://wallpapercave.com/wp/wp6803044.jpg',
          name: 'Spiderman Miles Morales',
          description: 'Spider-Man: Miles Morales é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment para o PlayStation 4 e PlayStation 5. É uma expansão autônoma de Spider-Man,[1] de 2018, e foi anunciado pela primeira vez no evento de revelação do PlayStation 5 em junho de 2020.',
          createAt: '25/7/2021'
        },
        {
          id: 8,
          image: 'https://tudogeek.com.br/wp-content/uploads/2015/08/rise-of-the-tomb-raider-wallpaper.jpg',
          name: 'Rise of Tomb Raider',
          description: 'Rise of the Tomb Raider é um jogo eletrônico de ação-aventura, segundo de uma trilogia que começou em 2013 com Tomb Raider. O jogo foi produzido pela Crystal Dynamics e publicado pela Microsoft Studios em 10 de novembro de 2015, exclusivamente para Xbox One e Xbox 360, em 2019 para Google Stadia.',
          createAt: '25/7/2021'
        },
      ],
      giftCards: [
        {
          id: 1,
          name: 'Steam R$ 100,00',
          createAt: '25/7/2021'
        },
        {
          id: 2,
          name: 'Steam R$ 50,00',
          createAt: '25/7/2021'
        },
        {
          id: 3,
          name: 'Steam R$ 30,00',
          createAt: '25/7/2021'
        },
        {
          id: 4,
          name: 'Steam R$ 10,00',
          createAt: '25/7/2021'
        }
      ],
      clients: [
        {
          id: 1,
          image: 'https://www.inbenta.com/wp-content/uploads/2016/11/avatar.png',
          name: 'Reginaldo de Oliveira Santos',
          description: '',
          createAt: '25/7/2021'
        },
        {
          id: 2,
          image: 'https://www.inbenta.com/wp-content/uploads/2016/11/avatar.png',
          name: 'Antonio Fábio Nogueira',
          description: '',
          createAt: '25/7/2021'
        },
        {
          id: 3,
          image: 'https://www.inbenta.com/wp-content/uploads/2016/11/avatar.png',
          name: 'Ingrid Paula Sena',
          description: '',
          createAt: '25/7/2021'
        },
      ]
    }
    window.localStorage.setItem("mockedData", JSON.stringify(dataExample));
    setItemsBanner(JSON.parse(window.localStorage.getItem("mockedData")).ads);
  }, []);
  return (
    <div>
      <BrowserRouter>
        <header>
          <Topbar />
        </header>
        <main style={{marginTop: 100, marginBottom: 32}}>
          <Banner items={itemsBanner} />
          <Routes />
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}
