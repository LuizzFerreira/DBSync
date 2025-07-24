import { Splide, SplideSlide } from '@splidejs/react-splide';
import './splide.min.css';

export default function Carrossel() {
  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          pagination: true,
          arrows: true,
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
        }}
        style={{ width: '100%' }}
      >
        <SplideSlide>
          <img src="" alt="" />
          <div>
            <p>Carga inicial</p>
            <p>Inicie a primeira carga do sistema, levando dados da origem para o destino, usando uma interface amigável.</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src="" alt="" />
          <div>
            <p>Low-code</p>
            <p>Gerencie suas sincronizações via interface, usando código somente para personalizar sua carga inicial.</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src="" alt="" />
          <div>
            <p>Replicação</p>
            <p>Sincronização de dados robusta e escalável com o uso do DEBEZIUM e da infraestrutura do OPENSHIFT.</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src="" alt="" />
          <div>
            <p>Suporte 24/7</p>
            <p>A plataforma adota a observabilidade, envia alertas via Telegram, e-mail e outros. Está no sobreaviso para dar suporte aos times.</p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
