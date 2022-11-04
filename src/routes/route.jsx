import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

//   import Contador from "../components/Contator";
//   import ErrorPage from "../components/ErrorPage";
//   import FetchNews from "../components/FetchNews";
import { PageLayout } from "../components/PageLayout";
import "../App.css";
import { Grid } from "@mui/material";

const ErrorPage = () => (
  <div>
    <h1>Erro</h1>
  </div>
);

//Home
const HomeScreen = () => (
  <div class="home">
    {/* <h1>Bem Vindo à Samsung, sua loja favorita..</h1> */}
    <a href="https://shop.samsung.com/br/mobile/smartphone?page=2">
      <img
        class="home-img"
        alt="svgImg"
        src="https://t.ctcdn.com.br/V99BnwJnzsGPEzzukD2tsbfh4rc=/400x400/smart/i489963.jpeg"
      />
    </a>
  </div>
);

//Album

const Album = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item>
          <h1 class="">
            Veja algumas imagens de nossos produtos mais vendidos no ano de 2022
          </h1>
        </Grid>
        <Grid item md={6} xs={12}>
          <h3>Galaxy S21 FE 5G Verde 128GB</h3>
          <img class="img-cell" alt="cel1" href="" src="https://samsungbr.vtexassets.com/arquivos/ids/330260-800-auto?"/>
          <a href="https://shop.samsung.com/br/checkout/#/cart">
            <button>Comprar</button>
          </a>
        </Grid>
        <Grid item md={6} xs={12}>
          <h3>Galaxy S22 Ultra 5G Preto 256GB</h3>
          <img class="img-cell" alt="cel2" src="https://samsungbr.vtexassets.com/arquivos/ids/331116-800-auto"/>
          <a href="https://shop.samsung.com/br/galaxy-s22-ultra-5g/instant-voucher?skuId=2509">
            <button>Comprar</button>
          </a>
        </Grid>
        <Grid item md={6} xs={12}>
          <h3>Galaxy Tab S7 FE LTE Prata 128GB</h3>
          <img class="img-cell" alt="cel3" src="https://samsungbr.vtexassets.com/arquivos/ids/336859-800-auto"/>
          <a href="https://shop.samsung.com/br/checkout/#/cart">
            <button>Comprar</button>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

//Sobre
const Sobre = () => (
  <div class="sobre">
    <h1>Sobre a Samsung, a maior loja de Eletronicos do mundo.</h1>
      <p class="text-about">
        A Samsung nasceu na Coreia do Sul em 1938 e se transformou em um dos
        maiores conglomerados do país e do mundo, com atuação em diversas áreas.
        Apesar da diversidade dos negócios, ela é mais conhecida globalmente
        pelos eletrônicos. Fundada por Lee Byung-chul, a empresa teve origens
        modestas, dedicada à exportação de alimentos.
        Em poucos anos, a Samsung
        ampliou os negócios para entrar também em outros setores, incluindo
        comércio, finanças e têxtil. A divisão de produtos eletrônicos só surgiu
        em 1969, com o lançamento de sua primeira TV, ainda em preto e branco. A
        empresa começou a expansão internacional e ficou conhecida também por
        eletrodomésticos, como geladeiras e máquinas de lavar.
        O crescimento da empresa levou os negócios para a fabricação de monitores de
        computadores, aparelhos celulares, tablets, robôs, entre tantos outros
        produtos tecnológicos. A partir da década de 2010, a companhia se
        estabelece como uma das principais marcas do mercado de tecnologia
        móvel, tornando-se a principal rival da Apple.
      </p>
      <p class="text-about">
        A disputa gerou um dos processos mais famosos da história da tecnologia, iniciado em 2011 e
        encerrado apenas em 2018, em que a Samsung foi acusada de infringir
        patentes referentes ao iPhone e ao iOS em seus celulares. A empresa é
        conhecida pela linha de smartphones Galaxy S, mas também foi uma das
        líderes no mercado de celulares com telas dobráveis, com produtos como o
        Galaxy Z Fold e o Z Flip.
        A companhia ainda produz os relógios da família Galaxy Watch e os fones de ouvido Galaxy Buds. A Samsung chegou
        ao Brasil em 1986 com duas linhas de produtos: monitores e discos
        rígidos. Com a rápida ascensão das operações brasileiras, a companhia
        passou a investir em unidades de fabricação locais para aumentar o
        portfólio disponível no país. A companhia conta com duas unidades fabris
        locais: uma localizada em Manaus (AM), e a outra em Campinas (SP).
      </p>
      <img alt="sede_samsung" src="https://img.global.news.samsung.com/br/wp-content/uploads/2022/01/CES-Booth-Photo-Sketch_main1.jpg"/>
  </div>
);

//Noticias
const Noticias = () => (
  <div>
    <h1>Notícias</h1>
    <div>
      <p>teste</p>
    </div>
  </div>
);

//Contatos
const Contatos = () => (
  <div>
    <h1>Fale Conosco</h1>
    <div>
      <h4>Telefone</h4>
      <p>
        {" "}
        4004-0000 (Capitais e grandes centros) 0800 555 0000 (Demais cidades e
        regiões) De Seg. a Sex. das 8h às 22h, Sáb. e Dom. das 9h às 18h Conheça
        o nosso atendimento telefônico digital.
      </p>
    </div>
    <div>
      <h4>Loja Online</h4>
      <p>
        {" "}
        Para informações referentes à sua compra, ligue para 0800 007 2611. De
        Seg. a Sex. das 8h às 20h e Sábado das 9h às 18h, exceto feriados.
      </p>
    </div>
  </div>
);

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomeScreen />} />
      <Route index path="album" element={<Album />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="noticias" element={<Noticias />} />
      <Route path="contatos" element={<Contatos />} />
    </Route>
  )
);

const Root = () => {
  return <RouterProvider router={route} />;
};

export default Root;
