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
import { useEffect, useState } from "react";

const ErrorPage = () => (
  <div>
    <h1>Erro</h1>
  </div>
);

//Home
const HomeScreen = () => (
  <div class="home">
    {/* <h1>Bem Vindo à Samsung, sua loja favorita..</h1> */}
    <a href="https://www.amazon.com.br/?&tag=hydrbrabk-20&ref=pd_sl_7rwd1q78df_e&adgrpid=79547423725&hvpone=&hvptwo=&hvadid=591863875878&hvpos=&hvnetw=g&hvrand=10441088185878839049&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9102332&hvtargid=kwd-10573980&hydadcr=26346_11691057&gclid=EAIaIQobChMIocaC3-OV-wIVDtORCh2rtQyOEAAYASAAEgIuzfD_BwE">
      <img class="home-img" alt="svgImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"/>
    </a>
  </div>
);

//Album

const Album = () => {
  // fetch products from a fake API
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  });

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item>
          <h1 class="title-supreme">
            Veja algumas imagens de nossos produtos mais vendidos no ano de 2022
          </h1>
        </Grid>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <h3 class="title"> {product.title}</h3>
            {product.price}
            <img class="img-cell" alt="cel1" href="" src={product.image} />
            <a
              href={`https://www.google.com/search?q=${product.title}&tbm=shop`}
            >
              <button class="comprar">Comprar</button>
            </a>
          </Grid>
        ))}
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
      Apesar da diversidade dos negócios, ela é mais conhecida globalmente pelos
      eletrônicos. Fundada por Lee Byung-chul, a empresa teve origens modestas,
      dedicada à exportação de alimentos. Em poucos anos, a Samsung ampliou os
      negócios para entrar também em outros setores, incluindo comércio,
      finanças e têxtil. A divisão de produtos eletrônicos só surgiu em 1969,
      com o lançamento de sua primeira TV, ainda em preto e branco. A empresa
      começou a expansão internacional e ficou conhecida também por
      eletrodomésticos, como geladeiras e máquinas de lavar. O crescimento da
      empresa levou os negócios para a fabricação de monitores de computadores,
      aparelhos celulares, tablets, robôs, entre tantos outros produtos
      tecnológicos. A partir da década de 2010, a companhia se estabelece como
      uma das principais marcas do mercado de tecnologia móvel, tornando-se a
      principal rival da Apple.
    </p>
    <p class="text-about">
      A disputa gerou um dos processos mais famosos da história da tecnologia,
      iniciado em 2011 e encerrado apenas em 2018, em que a Samsung foi acusada
      de infringir patentes referentes ao iPhone e ao iOS em seus celulares. A
      empresa é conhecida pela linha de smartphones Galaxy S, mas também foi uma
      das líderes no mercado de celulares com telas dobráveis, com produtos como
      o Galaxy Z Fold e o Z Flip. A companhia ainda produz os relógios da
      família Galaxy Watch e os fones de ouvido Galaxy Buds. A Samsung chegou ao
      Brasil em 1986 com duas linhas de produtos: monitores e discos rígidos.
      Com a rápida ascensão das operações brasileiras, a companhia passou a
      investir em unidades de fabricação locais para aumentar o portfólio
      disponível no país. A companhia conta com duas unidades fabris locais: uma
      localizada em Manaus (AM), e a outra em Campinas (SP).
    </p>
    <img alt="sede_samsung" src="https://img.global.news.samsung.com/br/wp-content/uploads/2022/01/CES-Booth-Photo-Sketch_main1.jpg"/>
  </div>
);

//Noticias
const Noticias = () => (
  <div class="noticias">
    <h1>Amazon fecha acordo com Agência Espacial Brasileira</h1>
    <div>
      <p>A Amazon Web Services (AWS) — plataforma de serviços de computação em nuvem do grupo Amazon</p>
      <img alt="" src="https://www.rbsdirect.com.br/filestore/4/5/9/1/6/9/1_c821f4debbba6b3/1961954_9d09d724e4ea775.jpg"/>
    </div>
  </div>
);

//Contatos
const Contatos = () => (
  <div class="contato">
    <h1>Fale Conosco</h1>
    <div>
      <h4>Telefone</h4>
      <p>
        4004-0000 (Capitais e grandes centros) 0800 555 0000 (Demais cidades e
        <br />
        regiões) De Seg. a Sex. das 8h às 22h, Sáb. e Dom. das 9h às 18h Conheça
        o nosso atendimento telefônico digital.
        <br />
      </p>
    </div>
    <div>
      <h4>Loja Online</h4>
      <p>
        Para informações referentes à sua compra, ligue para 0800 007 2611. De
        <br />
        Seg. a Sex. das 8h às 20h e Sábado das 9h às 18h, exceto feriados.
        <br />
      </p>
    </div>
  </div>
);

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomeScreen />} />
      <Route path="/album" element={<Album />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/contato" element={<Contatos />} />
    </Route>
  )
);

const Root = () => {
  return <RouterProvider router={route} />;
};

export default Root;
