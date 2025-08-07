import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import './index.css';
import './footer.css';
import './components/splide.min.css';
import Carrossel from './components/carrossel';
import FlipText from './components/fliptext';
import Navbar from './components/Navbar';

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const [showContact, setShowContact] = useState(false);
  
  

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY < 50) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (  
    <div id='body-area'>
        <header>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} showNavbar={showNavbar} showContact={showContact} setShowContact={setShowContact}/>
        </header>
        <main>
          <section id="home-container">
            <div>
              <div className='home-container-text'>
                <FlipText />
                <p className='sub-title'>Gerencie as replicações para suas bases de dados.</p>
                <div>
                  <button className='btn-container'><a href="#">Faturas Atuais</a></button>
                  <button className='btn-container btn-container-secondary'><a href="#">Em DEV</a></button>
                </div>
              </div>
              <div className='img-rotate-block'>
                <img src={process.env.PUBLIC_URL + "/img/iconeDBSync.png"} alt="Imagem dbsync" />
                <img src={process.env.PUBLIC_URL + "/img/DBSyncDataCapcity.png"} alt="Imagem dbsync"/>
                </div>
            </div>
            <img className='container-backImg' src={process.env.PUBLIC_URL + "/img/iconeDBSync.png"} alt="Imagem dbsync" />
          </section>
          <section id='home-about'>
            <h2>Reaja a <span>atualizações</span> de dados</h2>
            <p>Aproveite DBSync + Kafka para ler tópicos e reagir a eventos relevantes.</p>
            <Carrossel />
          </section>
          <section id='home-sobre'>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/iconeDBSync.png"} alt="Imagem dbsync" />
              <h2>Sobre o DBSync</h2>
            </div>
            <div className='home-sobre-text'>
              <p>O DBSync é uma plataforma de replicação de dados que permite a sincronização em tempo real entre diferentes bancos de dados, utilizando a robustez do Apache Kafka e a flexibilidade do Debezium. Com o DBSync, você pode monitorar alterações de dados, configurar conectores para diversas fontes e destinos, e garantir que suas aplicações estejam sempre atualizadas com as últimas informações.</p>
              <p>Desenvolvido para ser uma solução de baixo código, o DBSync facilita a integração de sistemas, reduzindo o esforço necessário para implementar e manter replicações de dados. Ele é ideal para empresas que buscam agilidade e eficiência na gestão de dados, permitindo que equipes se concentrem em inovações ao invés de tarefas repetitivas.</p>
              <p>Com uma interface intuitiva, o DBSync oferece monitoramento em tempo real, suporte a múltiplos conectores e a capacidade de lidar com grandes volumes de dados. Ele é projetado para ser escalável e confiável, garantindo que seus dados estejam sempre disponíveis e atualizados, mesmo em cenários de alta demanda.</p>
              <p>Seja para replicação de dados entre bancos relacionais, NoSQL ou sistemas legados, o DBSync é a solução ideal para empresas que desejam otimizar seus processos de dados e garantir a integridade das informações. Experimente o DBSync e descubra como ele pode transformar a forma como você gerencia seus dados.</p>
            </div>
          </section>
          <section id='home-services'>
            <h2>Serviços</h2>
            <div className='services-container'>
              <div className='service-item'>
                <img src={process.env.PUBLIC_URL + "/img/DBSyncDataCapcity.png"} alt="Carga inicial" />
                <div>
                  <h3>Amplie o poder dos seus dados</h3>
                  <p>Seus dados são alterados o tempo todo.
                    O DBSync habilita seus aplicativos a reagirem a cada alteração de dados.
                    Com o monitoramento em tempo real dos dados, o DBSync transmite os dados para o repositório de destino assim que a transação é confirmada.
                    Utilize a capacidade do CDC integrado com o Kafka para realizar o decoupling das suas aplicações, sem precisar alterar nenhuma linha de código.</p>
                </div>
              </div>
              <div className='service-item'>
                <div>
                  <h3>Reduza esforço de implementações</h3>
                  <p>Como o DBSync tem a capacidade de escrever dados diretamente nas bases de dados de destino, você não precisa se preocupar em manter a escrita dos dados nas suas aplicações.
                  Basta cadastrar as conexões com as bases de dados de origem e destino, que o DBSync faz o restante do trabalho.</p>
                </div>
                <img src={process.env.PUBLIC_URL + "/img/telaGestaoConectores.png"} alt="Low-code" />
              </div>
              <div className='service-item'>
                <img src={process.env.PUBLIC_URL + "/img/telaConectores.png"} alt="Replicação" />
                <div>
                  <h3>Monitore o status de cada conector</h3>
                  <p>Com a interface do DBSync interagindo com a API do DEBEZIUM, é possível monitorar o status de cada conector, bem como as suas definições, de forma protegida.
                  Caso seja necessária alguma manutenção, existe também a possibilidade de pausar e reiniciar a sincronização.
                  Caso exista alguma falha no conector, é possível saber os detalhes da exceção clicando no status de falha.</p>
                </div>
              </div>
              <div className='service-item'>
                <div>
                  <h3>Ganhe velocidade</h3>
                  <p>Quando bem configurado, o DBSync é rápido.
                    Isso significa que a entrega dos dados beira o tempo real.
                    O DBSync usa o Kafka, que é robusto, escalável e lida com grandes volumes de dados rapidamente. Além disso, usa a infraestrutura do Openshift, que pode ser escalada para persistir esses dados tão velozmente quanto são lidos.</p>
                </div>
                <img src={process.env.PUBLIC_URL + "/img/telaGestaoParametros.png"} alt="Suporte 24/7" />
              </div>
              <div className='service-item'>
                <img src={process.env.PUBLIC_URL + "/img/telaGestaoParametros.png"} alt="Suporte 24/7" />
                <div>
                  <h3>Evite a perda de dados</h3>
                  <p>Mesmo em um cenário de downtime das aplicações, após o reestabelecimento dos recursos o DBSync volta a sincronizar os dados. Com a segurança da entrega dos dados via Kafka, cada cliente tem gravado exatamente o último dado que foi lido e entregue. Além disso, a aplicação está coberta pelo sobreaviso e envia alertas de falhas via Telegram e e-mail.</p>
                </div>
              </div>
              <div className='service-item'>
                <div>
                  <h3>Múltiplos conectores</h3>
                  <p>Com o DBSync e seus conectores, habilitamos que os tipos de bases de dados de origem e destino sejam diferentes. Por exemplo, abrimos a possibilidade de que os dados sejam de origem SqlServer e sejam escritos em um MongoDB, no destino. Como o DBSync usa o DEBEZIUM, o modelo de mensagem produzida fica na notação JSON, tornando simples a leitura e persistência dos dados.</p>
                </div>
                <img src={process.env.PUBLIC_URL + "/img/telaGestaoParametros.png"} alt="Suporte 24/7" />
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-col">
              <h4>DBSync</h4>
            </div>
            <div className="footer-col">
              <h4>Documentação</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Readme</a></li>
                <li><a href="#">Arquitetura</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contribua</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li>
                  <span className="footer-label">TOLL FREE</span><br />
                    <a href="tel:+55217392818">+55 (21) 739-2818</a>
                </li>
                <li>
                  <span className="footer-label">CLOUD WORKFLOW SUPPORT</span><br />
                    <a href="mailto:support-ipaas@mydbsync.com">support-ipaas@mydbsync.com</a>
                </li>
                <li>
                  <span className="footer-label">SAAS REPLICATION SUPPORT</span><br />
                    <a href="mailto:support-cdm@mydbsync.com">support-cdm@mydbsync.com</a>
                </li>
                <li>
                  <span className="footer-label">CONTACT SALES</span><br />
                    <a href="mailto:sales@mydbsync.com">sales@mydbsync.com</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default LandingPage;
