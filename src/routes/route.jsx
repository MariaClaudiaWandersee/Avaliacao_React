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

const ErrorPage = () => (
  <div>
    <h1>Erro</h1>
  </div>
);

//Home
const HomeScreen = () => (
  <div>
    <h1>Bem Vindo à Samsung, sua loja favorita..</h1>
        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMGQ0N2ExIiBkPSJNNDcuOTcsMTkuODI2YzAuNjU0LDMuNzQ3LTkuNTQ3LDguNjU1LTIyLjc4OCwxMC45NmMtMTMuMjM4LDIuMzA2LTI0LjUsMS4xMzYtMjUuMTUzLTIuNjEzIGMtMC42NTMtMy43NDcsOS41NTEtOC42NTQsMjIuNzktMTAuOTU4QzM2LjA1OSwxNC45MDcsNDcuMzE4LDE2LjA3OCw0Ny45NywxOS44MjZ6Ij48L3BhdGg+PHBvbHlnb24gZmlsbD0iI2ZhZmFmYSIgcG9pbnRzPSIzNS41MSwyNS4zODggMzUuNDQyLDIxLjQ5MiAzNi42NzEsMjEuNDkyIDM2LjY3MSwyNi40MDMgMzQuOTA1LDI2LjQwMyAzMy42NzgsMjIuMzczIDMzLjY1MiwyMi4zNzMgMzMuNzIsMjYuNDAzIDMyLjQ5OSwyNi40MDMgMzIuNDk5LDIxLjQ5MiAzNC4zNDIsMjEuNDkyIDM1LjQ4MywyNS4zODgiPjwvcG9seWdvbj48cG9seWdvbiBmaWxsPSIjZmFmYWZhIiBwb2ludHM9IjEzLjE3NywyMS45NTIgMTIuNDk3LDI2LjQ1NSAxMS4xNTcsMjYuNDU1IDEyLjA3NiwyMS40OTIgMTQuMjg0LDIxLjQ5MiAxNS4yMDEsMjYuNDU1IDEzLjg2NSwyNi40NTUgMTMuMjA0LDIxLjk1MiI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiNmYWZhZmEiIHBvaW50cz0iMTguOTY0LDI1LjI4NiAxOS41NzcsMjEuNDkyIDIxLjYwMSwyMS40OTIgMjEuNzA4LDI2LjQ1NSAyMC40NjgsMjYuNDU1IDIwLjQzNSwyMS45OTMgMjAuNDA5LDIxLjk5MyAxOS41OCwyNi40NTUgMTguMzIxLDI2LjQ1NSAxNy40OSwyMS45OTMgMTcuNDY0LDIxLjk5MyAxNy40MzMsMjYuNDU1IDE2LjE5LDI2LjQ1NSAxNi4zLDIxLjQ5MiAxOC4zMjUsMjEuNDkyIDE4LjkzNywyNS4yODYiPjwvcG9seWdvbj48cGF0aCBmaWxsPSIjZmFmYWZhIiBkPSJNOS4wNjcsMjUuMDU1YzAuMDQ5LDAuMTIsMC4wMzQsMC4yNzUsMC4wMTEsMC4zNjhjLTAuMDQyLDAuMTY1LTAuMTU0LDAuMzMzLTAuNDgzLDAuMzMzIGMtMC4zMTIsMC0wLjUtMC4xNzktMC41LTAuNDV2LTAuNDhINi43NjNMNi43NjIsMjUuMjFjMCwxLjEwNiwwLjg3MSwxLjQ0MSwxLjgwNSwxLjQ0MWMwLjg5OCwwLDEuNjM3LTAuMzA3LDEuNzU0LTEuMTM0IGMwLjA2MS0wLjQyOSwwLjAxNS0wLjcwOS0wLjAwNS0wLjgxNmMtMC4yMDktMS4wMzktMi4wOTMtMS4zNDktMi4yMzMtMS45M2MtMC4wMjQtMC4wOTktMC4wMTctMC4yMDUtMC4wMDUtMC4yNjIgYzAuMDM1LTAuMTU4LDAuMTQzLTAuMzMyLDAuNDUzLTAuMzMyYzAuMjksMCwwLjQ2MSwwLjE4LDAuNDYxLDAuNDVjMCwwLjA5MSwwLDAuMzA3LDAsMC4zMDdoMS4yMzd2LTAuMzQ4IGMwLTEuMDgxLTAuOTctMS4yNS0xLjY3My0xLjI1Yy0wLjg4MywwLTEuNjA0LDAuMjkyLTEuNzM2LDEuMDk5Yy0wLjAzNiwwLjIyMy0wLjA0MSwwLjQyMiwwLjAxMSwwLjY3MSBDNy4wNDksMjQuMTE4LDguODExLDI0LjQxMiw5LjA2NywyNS4wNTV6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZhZmFmYSIgZD0iTTI1LjIwNCwyNS4wNDZjMC4wNDksMC4xMTksMC4wMzMsMC4yNywwLjAxMSwwLjM2M2MtMC4wNDEsMC4xNjUtMC4xNTIsMC4zMy0wLjQ3OSwwLjMzIGMtMC4zMDcsMC0wLjQ5NC0wLjE3OS0wLjQ5NC0wLjQ0NGwtMC4wMDEtMC40NzZoLTEuMzE4bC0wLjAwMiwwLjM3OWMwLDEuMDk1LDAuODYzLDEuNDI2LDEuNzg3LDEuNDI2IGMwLjg4OCwwLDEuNjItMC4zMDMsMS43MzYtMS4xMjJjMC4wNjEtMC40MjYsMC4wMTgtMC43MDItMC4wMDQtMC44MDdjLTAuMjA4LTEuMDI5LTIuMDczLTEuMzM2LTIuMjExLTEuOTEyIGMtMC4wMjQtMC4wOTktMC4wMTctMC4yMDMtMC4wMDUtMC4yNTdjMC4wMzYtMC4xNiwwLjE0Mi0wLjMyOSwwLjQ0OS0wLjMyOWMwLjI4OCwwLDAuNDU1LDAuMTc1LDAuNDU1LDAuNDQ0IGMwLDAuMDksMCwwLjMwNCwwLDAuMzA0aDEuMjI4di0wLjM0NWMwLTEuMDctMC45NjItMS4yMzctMS42NTktMS4yMzdjLTAuODczLDAtMS41ODgsMC4yODgtMS43MTcsMS4wOSBjLTAuMDM2LDAuMjItMC4wNCwwLjQxNSwwLjAxMiwwLjY2M0MyMy4yMDYsMjQuMTE4LDI0Ljk1MSwyNC40MSwyNS4yMDQsMjUuMDQ2eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmYWZhZmEiIGQ9Ik0yOS4zNzIsMjUuNzEzYzAuMzQ0LDAsMC40NTEtMC4yMzgsMC40NzUtMC4zNmMwLjAxLTAuMDU0LDAuMDEzLTAuMTI1LDAuMDEyLTAuMTlWMjEuNDloMS4yNTUgdjMuNTZjMC4wMDMsMC4wOTEtMC4wMDYsMC4yNzktMC4wMTEsMC4zMjVjLTAuMDg4LDAuOTI3LTAuODIxLDEuMjI3LTEuNzMyLDEuMjI3Yy0wLjkxMywwLTEuNjQ2LTAuMzAxLTEuNzMzLTEuMjI3IGMtMC4wMDQtMC4wNDctMC4wMTMtMC4yMzUtMC4wMTEtMC4zMjV2LTMuNTZoMS4yNTR2My42NzJjMCwwLjA2NCwwLjAwMiwwLjEzNywwLjAxMiwwLjE5IEMyOC45MjEsMjUuNDczLDI5LjAyNSwyNS43MTMsMjkuMzcyLDI1LjcxM3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmFmYWZhIiBkPSJNMzkuNzI1LDI1LjY2YzAuMzU5LDAsMC40ODUtMC4yMjcsMC41MDgtMC4zNTljMC4wMDktMC4wNTcsMC4wMTItMC4xMjYsMC4wMTEtMC4xODl2LTAuNzIgaC0wLjUwOXYtMC43MjRoMS43NlYyNWMtMC4wMDEsMC4wOTMtMC4wMDMsMC4xNjItMC4wMTgsMC4zMjdjLTAuMDgyLDAuOTAzLTAuODY2LDEuMjI1LTEuNzQ1LDEuMjI1IGMtMC44ODEsMC0xLjY2My0wLjMyMi0xLjc0Ny0xLjIyNWMtMC4wMTQtMC4xNjYtMC4wMTYtMC4yMzQtMC4wMTgtMC4zMjdsMC4wMDEtMi4wODljMC0wLjA4OCwwLjAxMS0wLjI0NCwwLjAyMS0wLjMyNyBjMC4xMS0wLjkyOCwwLjg2Mi0xLjIyNiwxLjc0My0xLjIyNmMwLjg4LDAsMS42NTEsMC4yOTcsMS43NDIsMS4yMjZjMC4wMTYsMC4xNTgsMC4wMTEsMC4zMjcsMC4wMTEsMC4zMjd2MC4xNjZoLTEuMjUxdi0wLjI3OCBjMC4wMDEsMC4wMDEtMC4wMDItMC4xMTgtMC4wMTYtMC4xODljLTAuMDIxLTAuMTEtMC4xMTYtMC4zNjItMC40OTUtMC4zNjJjLTAuMzYyLDAtMC40NjcsMC4yMzgtMC40OTQsMC4zNjIgYy0wLjAxNSwwLjA2NS0wLjAyMSwwLjE1NC0wLjAyMSwwLjIzNHYyLjI3Yy0wLjAwMSwwLjA2MywwLjAwMywwLjEzMiwwLjAxMywwLjE4OUMzOS4yNDEsMjUuNDMzLDM5LjM2NiwyNS42NiwzOS43MjUsMjUuNjZ6Ij48L3BhdGg+PC9zdmc+"/>
  </div>
);

//Album
const Album = () => (
  <div>
    <h1>Veja algumas imagens de nossos produtos mais vendidos no ano de 2022</h1>
        <div>
            <h3>Galaxy S21 FE 5G Verde 128GB</h3>
            <img alt="cel1" src="https://samsungbr.vtexassets.com/arquivos/ids/330260-800-auto?"/>
        </div>
        <div>
            <h3>Galaxy S22 Ultra 5G Preto 256GB</h3>
            <img alt="cel2" src="https://samsungbr.vtexassets.com/arquivos/ids/331116-800-auto"/>
        </div>
        <div>
            <h3>Galaxy Tab S7 FE LTE Prata 128GB</h3>
            <img alt="cel3" src="https://samsungbr.vtexassets.com/arquivos/ids/336859-800-auto"/>
        </div>
        <div>
            <h3>Galaxy Watch4 BT 40mm Prata (puls. Branca)</h3>
            <img alt="cel4" src="https://samsungbr.vtexassets.com/arquivos/ids/336611-800-auto?"/>
        </div>
  </div>
);

//Sobre
const Sobre = () => (
  <div>
    <h1>Sobre a Samsung, a maior loja de Eletronicos do mundo.</h1>
        <div>
            <p>A Samsung nasceu na Coreia do Sul em 1938 e se transformou em um dos maiores conglomerados do país e do mundo, com atuação em diversas áreas. Apesar da diversidade dos negócios, ela é mais conhecida globalmente pelos eletrônicos.

            Fundada por Lee Byung-chul, a empresa teve origens modestas, dedicada à exportação de alimentos. Em poucos anos, a Samsung ampliou os negócios para entrar também em outros setores, incluindo comércio, finanças e têxtil.

            A divisão de produtos eletrônicos só surgiu em 1969, com o lançamento de sua primeira TV, ainda em preto e branco. A empresa começou a expansão internacional e ficou conhecida também por eletrodomésticos, como geladeiras e máquinas de lavar.

            O crescimento da empresa levou os negócios para a fabricação de monitores de computadores, aparelhos celulares, tablets, robôs, entre tantos outros produtos tecnológicos.

            A partir da década de 2010, a companhia se estabelece como uma das principais marcas do mercado de tecnologia móvel, tornando-se a principal rival da Apple. A disputa gerou um dos processos mais famosos da história da tecnologia, iniciado em 2011 e encerrado apenas em 2018, em que a Samsung foi acusada de infringir patentes referentes ao iPhone e ao iOS em seus celulares.

            A empresa é conhecida pela linha de smartphones Galaxy S, mas também foi uma das líderes no mercado de celulares com telas dobráveis, com produtos como o Galaxy Z Fold e o Z Flip. A companhia ainda produz os relógios da família Galaxy Watch e os fones de ouvido Galaxy Buds.

            A Samsung chegou ao Brasil em 1986 com duas linhas de produtos: monitores e discos rígidos. Com a rápida ascensão das operações brasileiras, a companhia passou a investir em unidades de fabricação locais para aumentar o portfólio disponível no país. A companhia conta com duas unidades fabris locais: uma localizada em Manaus (AM), e a outra em Campinas (SP). </p>
            <img alt="sede_samsung" src="https://img.global.news.samsung.com/br/wp-content/uploads/2022/01/CES-Booth-Photo-Sketch_main1.jpg"/>
        </div>
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
            <p> 4004-0000 (Capitais e grandes centros)
                0800 555 0000 (Demais cidades e regiões)
                De Seg. a Sex. das 8h às 22h, Sáb. e Dom. das 9h às 18h

                Conheça o nosso atendimento telefônico digital.</p>
        </div>
        <div>
            <h4>Loja Online</h4>
            <p> Para informações referentes à sua compra, ligue para 0800 007 2611.
                De Seg. a Sex. das 8h às 20h e Sábado das 9h às 18h, exceto feriados.</p>
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
