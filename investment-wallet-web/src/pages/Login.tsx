import logoImage from '../assets/logo.svg';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Login() {
  
  return (
    <div className="max-h-full flex flex-col items-center">
      <img className="max-w-[100px] mx-auto" src={logoImage} alt=""/>
      <h1 className="text-white text-center">Carteira de Investimento</h1>
      <div className="bg-gray-200 opacity-70 h-96 max-w-2xl mx-auto flex flex-col items-center justify-center rounded-lg">
        <Input placeholder="Longin"/>
        <Input placeholder="Senha"/>
        <Button text='Entrar'/>
      </div>
    </div>
    
  );

}
