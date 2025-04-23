import Image from "next/image";
import profileImage from "../public/images/discord-profile.jpeg";
import insta from "../public/images/instagram.png";
import git from "../public/images/github.png";
import discord from "../public/images/discord.png";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col w-full object-cover bg-center h-64 background-set z-0 opacity-40"></div>
      <main className="flex flex-col items-center justify-center p-3 lg:px-32 -my-24">
        <div className="max-w-4xl w-full items-center lg:items-start justify-center flex flex-col max-xl:my-2 gap-1 -mt-2">
          <div className="flex flex-row items-center justify-between w-full max-xl:gap-2">
            <div className="relative shadow-black/5 shadow-none rounded-large">
              <Image className="relative z-10 rounded-md shadow-white/5 transition-transform-opacity" src={profileImage} alt="Sou eu!" width={120}/>
              {/* <img className="relative z-10 rounded-md shadow-black/5 transition-transform-opacity" src="../public/images/profile.jpeg" width={"120px"}/> */}
              <Image className="absolute z-0 inset-0 w-full h-full object-cover filter blur-lg scale-80 saturate-150 opacity-100  rounded" src={profileImage} alt="Sou eu!" width={120}/>
            </div>
            <div className="mt-24">
              <div className="flex gap-5 bg-neutral-900 p-2 rounded-md font-bold transition-all duration-200">
                {/* <a id="casado" target="_blank" className="hover:brightness-200 hover:scale-105 transition duration-500 ease-in-out"><Image className="" src={alianca} alt="Sou eu!" width={30}/></a> */}
                <a id="instagram" target="_blank" className="hover:brightness-200 transition duration-500 ease-in-out" href="https://www.instagram.com/jonasalmeidas__/"><Image className="" src={insta} alt="Sou eu!" width={30}/></a>
                <a id="github" target="_blank" className="hover:brightness-200 transition duration-500 ease-in-out" href=""><Image className="" src={git} alt="Sou eu!" width={30}/></a>
                <a id="discord" className="hover:brightness-200 transition duration-500 ease-in-out" href="/discord"><Image className="" src={discord} alt="Sou eu!" width={30}/></a>
              </div>
            </div>
          </div>
          <h1 className="text-white font-bold text-3xl mb-8">Jonas Almeida Stella</h1>
          <p className="text-principal text-md text-left mb-1">
            Olá, meu nome é Jonas, atualmente tenho 24 anos e sou estudante de <strong>Análise e Desenvolvimento de Sismas</strong> na <strong>Unisinos</strong>. Sou apaixonado por tecnologia, programação e desenvolvimento de software. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer na área.
          </p>
          {/* <p className="text-principal text-md text-left mb-1">Opa, tudo bem, me chamo <strong>Jonas</strong> e tenho <strong>24 anos</strong>. Adoro jogar muitos jogos, principalmente <strong>Valorante(iniciando)</strong> e <strong>Fortnite</strong>. Estou na internet desde meus 16 anos quando ganhei meu primeiro computador, desde então tenho aprendido a programar e desenvolver coisas que me façam bem!</p>
          <p className="text-principal text-md text-left my-2"></p> */}
          <div className="flex justify-between items-center w-full mt-10">
            <h2 className="text-white font-bold text-xl">Aguardando muitas coisas...</h2>
            <a href="" className="text-principal text-md items-center gap-1 hover:text-gray-100 hidden lg:flex bg-neutral-900 p-2 rounded-md font-bold transition-all duration-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
              Atualizando...
            </a>
          </div>
        </div>
        <div className="">

        </div>
      </main>
      {/* <div className="w-full object-cover bg-center h-64 background-set">
        <main className="flex flex-col items-center justify-center p-3 lg:px-32 -my-24">
          <div className="max-w-4xl w-full items-center lg:items-start justify-center flex flex-col max-xl:my-2 gap-1 -mt-2">
            <div className="image-profile relative shadow-black/5 shadow-none rounded-large">
              <img src="./public/images/profile.jpeg" width={140} height={140} />
            </div>
          </div>
        </main>
      </div> */}

    </div>
  );
}
