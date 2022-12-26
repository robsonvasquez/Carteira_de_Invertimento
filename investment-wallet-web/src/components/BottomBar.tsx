import { InstagramLogo, FacebookLogo, WhatsappLogo } from "phosphor-react";
import Logo from "./Logo";

export default function BottomBar(){
  return(
    <div className="w-full items-center bg-[#1E5128]">
      <div className="w-full items-center">
        <div className="flex justify-between pt-3 pb-10 px-40">
          <div className="flex flex-col">
            <Logo/>
            <span className="text-white">Todos os direitos reservados</span>
          </div>
          <div className="text-white flex">
            <div className="mx-5">
              <h1 className="font-bold">Sobre</h1>
              <div className="text-sm mt-2">
                <h2>Termos de Uso</h2>
                <h2>Políticas de privacidade</h2>
              </div>
            </div>
            <div>
              <h1 className="font-bold">Dúvidas</h1>
              <div className="text-sm mt-2">
                <h2>Comunidade</h2>
                <h2>Central de ajuda</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-white w-full"/>
      <div className="w-full flex pl-40 py-1">
        <InstagramLogo size={36} color="#ffffff" weight="thin" />
        <FacebookLogo size={36} color="#ffffff" weight="thin" />
        <WhatsappLogo size={36} color="#ffffff" weight="thin" />
      </div>
    </div>
  );
}