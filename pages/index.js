import Head from "next/head";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <main className="">
      <header className="tw-w-full tw-fixed tw-top-0 tw-left-0 tw-bg-white tw-z-[30] tw-h-[100px] tw-flex tw-items-center">
        <nav className="tw-flex tw-justify-around tw-w-full  hover:tw-color-blue">
          <a href="https://www.docker.com/" target="_blank">
            <img
              src="docker-logo.svg"
              className="tw-w-[120px] tw-object-contain"
            />
          </a>
          <a href="#inicio">Inicio</a>
          <a href="#virtualizacao">Virtualização</a>
          <a href="#docker">O Docker</a>
          <a href="#vs">Contêiner VS Imagem</a>
          <a href="#conclusao">Conclusão</a>
        </nav>
      </header>
      <div className="tw-relative  tw-mt-[0px] tw-z-[20]">
        <div className="tw-z-[20] tw-h-[100vh]">
          <h1 className="tw-absolute tw-top-[160px] tw-left-[40px] tw-text-black tw-z-[50] tw-text-[45px] tw-font-light">
            Docker <br />
            Tudo o que você
            <br /> precisa saber!
          </h1>
          <h1 className="tw-absolute tw-top-[630px] tw-right-[50px] tw-text-black tw-z-[50] tw-text-[20px] tw-font-light">
            Uma viagem pelo
            <br />
            universo dos conteiners...
          </h1>
          <img
            src="docker-banner-2.webp"
            className="tw-absolute tw-top-[0px] tw-left-0 tw-z-[20] tw-h-[100vh] tw-w-full tw-object-cover"
          />
        </div>
        <div
          id="inicio"
          className="tw-scroll-mt-[100px] tw-relative tw-bg-white tw-w-[80%] tw-py-[30px] tw-px-[100px] tw-rounded-[10px] tw-my-[100px]"
        >
          <h1 className="tw-mb-[20px] tw-text-[30px]">Como começou...</h1>
          <p>
            O Docker foi desenvolvido em 2013 por uma empresa chamada dotCloud,
            Inc (que futuramente se chamará Docker, INC) com a necessidade de
            melhoramento da grande demanda de máquinas virtuais. A criação das
            máquinas virtuais dependiam de grandes espaços de discos e outros
            recursos e ainda havia a questão das aplicações, que poderiam serem
            corrompidas em algumas situações pelas próprias máquinas virtuais.
            Com isso, houve a necessidade desenvolver um sistema e assim surgiu
            o LXC.
            <br />
            <br />O LXC foi criado em 2008 e é uma tecnologia que trabalha com a
            criação de instâncias isoladas de um sistema operacional dentro da
            máquina hospedeira. Ou seja, a base do docker começou a ser
            desenvolvida. Com sua facilidade de uso, o mercado obteve uma rápida
            adoção dessa tecnologia. Contanto que houve um “boom” nas empresas
            após mostrar que o desenvolvedor conseguiria colocar suas aplicações
            diretamente do notebook para a produção.O LXC foi criado em 2008 e é
            uma tecnologia que trabalha com a criação de instâncias isoladas de
            um sistema operacional dentro da máquina hospedeira. Ou seja, a base
            do docker começou a ser desenvolvida. Com sua facilidade de uso, o
            mercado obteve uma rápida adoção dessa tecnologia. Contanto que
            houve um “boom” nas empresas após mostrar que o desenvolvedor
            conseguiria colocar suas aplicações diretamente do notebook para a
            produção.
          </p>
          <img
            src="baleia.png"
            className="tw-absolute tw-right-[-250px] tw-top-[40px] tw-w-[268px]"
          />
        </div>
        <div
          id="virtualizacao"
          className="tw-scroll-mt-[100px] tw-bg-white tw-w-[90%] tw-text-justify tw-py-[30px] tw-px-[100px] tw-rounded-[10px] tw-my-[100px]"
        >
          <h1 className="tw-mb-[20px] tw-text-[30px]">A virtualização</h1>
          <p>
            Virtualização é uma tecnologia que permite criar serviços de TI
            valioso. Com a virtualização, é possível usar a capacidade total de
            uma maquina física, distribuindo recursos. A virtualização funciona
            com programas de software chamados hipervisores que separam os
            recursos físicos dos ambientes virtuais que precisam utilizar esse
            recursos. Os hipervisores podem ser excutados em um SO ou
            diretamente no hardware.
            <br /> <br />
            Os tipos de virtualização são:
            <br />
            <br />- Virtualização de dados: Dados distribuídos em vários locais
            são consolidados em uma unia fonte, permite tratar dados como uma
            categoria de suprimento dinâmico. <br />- Virtualização de desktop:
            A virtualização de desktop permite que um administrador central
            implante ambientes de desktop simulados em centenas de maquinas
            físicas de uma vez. <br />- Virtualização de servidor: A
            virtualização do servidor o libera para realizar mais funções
            específicas, pois se dá por meio do seu particionamento.
            <br />
            - Virtualização de sistemas operacionais: A virtualização do sistema
            operacional é feita no kernel. Essa é uma boa maneira de executar
            paralelamente ambientes windows e linux. <br />
            Virtualização de funções de rede: Separa as principais funções de
            uma rede para distribuí-las aos ambientes.
          </p>
          <img
            src="baleia.png"
            className="tw-absolute tw-right-[-250px] tw-top-[40px] tw-w-[268px]"
          />
        </div>
        <div
          id="docker"
          className="tw-scroll-mt-[100px] tw-bg-white tw-w-[90%] tw-text-justify tw-py-[30px] tw-px-[100px] tw-rounded-[10px] tw-mb-[50px]"
        >
          <h1 className="tw-mb-[20px] tw-text-[30px]">O Docker</h1>
          <p>
            O que é: Docker é uma forma de virtualizar aplicações no conceito de
            “containers”, trazendo da web ou de seu repositório interno uma
            imagem completa, incluindo todas as dependências necessárias para
            executar sua aplicação. Sim, você leu certo: todas as dependências,
            incluindo as referentes ao sistema operacional, são consideradas
            <br />
            <br />É interessante mencionar que a tecnologia surgiu como um
            projeto de software de código aberto. Nessa perspectiva, cada
            container criado atua como uma máquina virtual flexível. Com isso, a
            equipe de TI pode migrar, copiar ou implementar ambientes de
            trabalho com facilidade, garantindo melhor desempenho para as
            aplicações baseadas em nuvem. Como funciona na prática : Com o
            objetivo de permitir a execução independente dos processos, o Docker
            se utiliza do kernel (núcleo) do Linux e seus recursos – a exemplo
            do namespaces e do Cgroups – para isolar essas operações.
            <br />
            <br />
            Nessa perspectiva, o propósito dos containers é justamente este:
            criar a independência para permitir a execução de múltiplas
            aplicações e processos de forma separada. A partir daí, é possível
            ter um melhor aproveitamento da infraestrutura, assim como garantir
            a mesma segurança que se teria em sistemas isolados.
            <br />
            <br />
            É importante acrescentar que o Docker, tal como outros recursos de
            container, oferece um modelo de implantação baseado em imagem. Essa
            funcionalidade facilita o compartilhamento de serviços, aplicações e
            todas as suas dependências, como já ressaltamos acima.
            <br />
            <br />
            Vale notar, ainda, que o Docker também conta com um recurso de
            automação para implantar as aplicações no próprio ambiente do
            container. Dessa forma, o ambiente de TI ganha em rapidez e controle
            sobre as diferentes versões e distribuições dos serviços.
            <br />
            <br />
          </p>
          <h3 className="tw-text-[25px] tw-mb-[20px]">Vantagens</h3>
          <p>
            <h3 className="tw-mb-[10px]">- Ágil implantação</h3>
            Com o objetivo de permitir a execução independente dos processos, o
            Docker se utiliza do kernel (núcleo) do Linux e seus recursos – a
            exemplo do namespaces e do Cgroups – para isolar essas operações.
            Nessa perspectiva, o propósito dos containers é justamente este:
            criar a independência para permitir a execução de múltiplas
            aplicações e processos de forma separada. A partir daí, é possível
            ter um melhor aproveitamento da infraestrutura, assim como garantir
            a mesma segurança que se teria em sistemas isolados. É importante
            acrescentar que o Docker, tal como outros recursos de container,
            oferece um modelo de implantação baseado em imagem. Essa
            funcionalidade facilita o compartilhamento de serviços, aplicações e
            todas as suas dependências, como já ressaltamos acima. Vale notar,
            ainda, que o Docker também conta com um recurso de automação para
            implantar as aplicações no próprio ambiente do container. Dessa
            forma, o ambiente de TI ganha em rapidez e controle sobre as
            diferentes versões e distribuições dos serviços.
          </p>
          <br />
          <p>
            <h3 className="tw-mb-[10px]">- Maior disponibilidade do sistema</h3>
            Além da agilidade, a virtualização diferenciada promovida pelo
            Docker também possibilita mais espaço livre, uma vez que há o
            compartilhamento do sistema operacional e de outros componentes. Em
            consequência, a disponibilidade e a performance do sistema são
            maximizadas, possibilitando que outros programas e aplicações sejam
            executados.
          </p>
          <br />
          <p>
            <h3 className="tw-mb-[10px]">- Reversibilidade dos containers</h3>
            Quando consideramos a alta ocorrência de falhas humanas no ambiente
            de trabalho (o que pode acontecer mesmo entre os profissionais mais
            capacitados e experientes), ter a possibilidade de reverter as ações
            é fundamental, corrigindo erros e brechas. Nesse sentido, as camadas
            do Docker permitem exatamente isto: caso as mudanças efetuadas não
            saírem como o esperado, é só retornar o container para sua versão
            prévia e reiniciar o trabalho.
          </p>
          <br />
          <p>
            <h3 className="tw-mb-[10px]">
              - Abordagem baseada em microsserviços{" "}
            </h3>
            Há uma estratégia do Docker que traz um impacto extremamente
            significativo para o time de TI: a possibilidade de interromper
            somente uma parte do software em execução. Com o recurso, não é
            preciso desativar todas as funcionalidades de uma ferramenta para
            fazer ajustes em uma pequena parcela da mesma. Trata-se da abordagem
            baseada em microsserviços, que aumenta a agilidade e aumenta a
            disponibilidade do ambiente de trabalho. Aliada a ela, há também a
            arquitetura orientada a serviço (SOA), que permite compartilhar os
            recursos entre diversas aplicações com facilidade.
          </p>
          <br />
          <p>
            <h3 className="tw-mb-[10px]">
              - Camadas de controle para as versões de imagem
            </h3>
            Uma informação importante é que cada imagem Docker é composta por um
            conjunto de camadas. Sempre que há modificações nesse arquivo, uma
            nova camada é criada. Nesse contexto, tais camadas são reutilizadas
            para “fabricar” novos containers, agilizando todo o processo e
            liberando espaço no sistema. Além disso, o recurso conta com um
            controle eficiente de versões, melhorando o gerenciamento dos dados
            e da infraestrutura como um todo.
          </p>
          <div className="tw-mt-[50px] tw-w-full tw-flex tw-justify-center">
            <ReactPlayer url="https://www.youtube.com/watch?v=AmyXqfVZbsI" />
          </div>
        </div>
        <div
          id="vs"
          className="tw-scroll-mt-[100px] tw-bg-white tw-w-[90%] tw-text-justify tw-py-[30px] tw-px-[100px] tw-rounded-[10px] tw-mb-[50px]"
        >
          <h1 className="tw-mb-[20px] tw-text-[30px]">Contêiner vs Imagem</h1>
          <p>
            <h3 className="tw-text-[25px] tw-mb-[20px] tw-font-light">
              - O que é um contêiner?
            </h3>
            <p>
              O container é criado pelo desenvolvedor baseado no sistema
              operacional que o desenvolvedor está usando , ele roda a aplicação
              normalmente , se esse container for ser rodado em outra maquina
              que tiver sistema operacional idêntico , não há necessidade do uso
              do hyper-V que resumidamente tem função de destinar recursos
              maiores da máquina pela necessidade do uso de outro sistema
              operacional , e para que não exista diferença no ambiente o Docker
              faz uso das Imagens que são o meio de passa versões e tudo o que é
              necessário para que aquele container funcione , essa imagem é
              vinculada ao container e usada para execução correta em outras
              máquinas .
            </p>
            <br />
            <h3 className="tw-text-[25px] tw-mb-[20px] tw-font-light">
              - O que é uma imagem?
            </h3>
            <p>
              Todas as configurações que a sua aplicação precisa, você define
              uma vez no universo Docker, na imagem. Com uma imagem Docker você
              pode usa-la em qualquer ambiente sem quaisquer mais configurações
              para rodar um container. Uma imagem funciona como um
              template/modelo, onde você define o sistema operacional,
              dependências e regras e disponibiliza para uso nos containers, e
              tendo vários containers sendo executados usando a mesma imagem
              permite a comunicação desses containers sem complicação.
            </p>
          </p>
        </div>
        <div
          id="conclusao"
          className="tw-scroll-mt-[100px] tw-bg-white tw-w-[90%] tw-text-justify tw-py-[30px] tw-px-[100px] tw-rounded-[10px] tw-mb-[50px]"
        >
          <h1 className="tw-mb-[20px] tw-text-[30px]">Conclusão</h1>
          <p>
            Com a indicação e a implementação adequada, a tecnologia Docker
            garante muito mais flexibilidade ao dia a dia da TI, simplificando
            os processos de desenvolver, alterar e distribuir recursos. É
            preciso, no entanto, ficar atento às peculiaridades e às demandas da
            ferramenta, que requer cuidados específicos de gerenciamento. O uso
            do Docker facilita o desenvolvimento em equipe minimizando os erros
            de execução em vários ambientes e podendo utilizar menos recursos
            que Máquinas virtuais comuns
          </p>
          <h3 className="tw-font-light tw-text-[20px] tw-mt-[20px]">
            Iniciando com Docker? Confira como instalá-lo e começar os seus
            testes...
          </h3>
          <div className="tw-flex">
            <div className="tw-mt-[0px] tw-w-full tw-flex tw-flex-col tw-justify-center tw-mr-[30px]">
              <h3 className="tw-font-bold tw-text-[20px] tw-mt-[20px]">
                Windows
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=rxXbGHN4GtA" />
            </div>
            <div className="tw-mt-[0px] tw-w-full tw-flex tw-flex-col tw-justify-center">
              <h3 className="tw-font-bold tw-text-[20px] tw-mt-[20px]">
                Linux
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=q4ZK6IJCS6Q" />
            </div>
          </div>
        </div>
      </div>
      <footer className="tw-bg-blue tw-h-[100px] tw-flex tw-items-center tw-justify-around">
        <p className="tw-text-white">REA ● 2022</p>
        <p className="tw-text-white">
          Desenvolvido por <span className="tw-font-bold">Victor Monteiro</span>{" "}
          e<span className="tw-font-bold"> Gustavo Mattos</span>
        </p>
      </footer>
    </main>
  );
}
