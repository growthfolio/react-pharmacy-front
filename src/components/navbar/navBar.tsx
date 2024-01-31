import { Link } from "react-router-dom";
import { SignOut } from '@phosphor-icons/react';

function NavBar() {
  return (
    <div className='w-full bg-blue-500 text-white py-4'>
      <div className="container flex justify-between items-center text-lg">
        <Link to='/home' className='text-2xl font-bold mx-10 uppercase'>SuperFarma</Link>

        <div className='flex gap-4 cursor-pointer'>
          <Link to='/home' className='nav-link'>Home</Link>
          <Link to='/produtos' className='nav-link'>Produtos</Link>
          <Link to='/categorias' className='nav-link'>Categorias</Link>
          <Link to='/cadastrarCategoria' className='nav-link'>Cad. Categoria</Link>
          <a className='nav-link' title="Sair">
            <SignOut size={22} weight='bold' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
