import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
  return (
    <div className="bg-blue-500 border-t-2 border-blue-400 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className='text-xl font-bold'>SuperFarma, a melhor do Brasil! | Copyright:</p>
        <p className='text-lg'>Acesse nossas redes sociais</p>
        <div className='flex gap-2'>
          <a href="https://www.linkedin.com/in/felipemacedo1/" target="_blank" rel="noopener noreferrer">
            <LinkedinLogo size={36} weight='bold' />
          </a>
          <a href="https://www.oficinadanet.com.br/instagram/47773-instagram-motivos-para-desativar" target="_blank" rel="noopener noreferrer">
            <InstagramLogo size={36} weight='bold' />
          </a>
          <a href="https://github.com/FelipeAJdev/farmacia-perfomance-goal-react" target="_blank">
            <GithubLogo size={36} weight='bold' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;