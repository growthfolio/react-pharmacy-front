import { Link } from "react-router-dom"
import { SignOut } from '@phosphor-icons/react'


function NavBar() {
 

    return (
      <>
       <div className='w-full bg-slate-300 text-black flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
              <Link to='/home' className='text-2xl font-bold uppercase'>Leve menos</Link>
  
              <div className='flex gap-4 cursor-pointer'>
               <Link to='/home' className='hover:bg-yellow-500 font-bold px-3 rounded-lg'>Home</Link>
                <Link to='/home' className='hover:bg-yellow-500 font-bold px-3 rounded-lg'>Produtos</Link>
                <Link to='/categorias' className='hover:bg-yellow-500 font-bold px-3 rounded-lg'>Categorias</Link>
                <Link to='/cadastrarCategoria' className='hover:bg-yellow-500 font-bold px-3 rounded-lg'>Cad. Categoria</Link>
                <a className='hover:underline text-center font-bold  rounded-xl text-yellow-500 p-1 hover:bg-yellow-500 hover:text-dark-60'><SignOut size={22} weight='bold' /></a>
              </div>
            </div>
          </div>
      </>
    )
  }
  /*  <SignOut size={32} /> */
  export default NavBar