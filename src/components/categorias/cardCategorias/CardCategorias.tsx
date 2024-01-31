import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriaProps) {
return (
  <div className='border border-dark-30 shadow-md rounded-2xl flex flex-col  overflow-hidden justify-between'>
    <header className='py-2 px-6 border-b border-gray-300 bg-blue-500 text-white font-bold text-2xl text-center'>{categoria.nome}</header>
    <p className='p-8 text-lg text-gray-700 bg-gray-200 h-full text-center'>{categoria.descricao}</p>
    <div className="flex">
      <Link to={`/editarCategoria/${categoria.id}`} 
      className='w-1/2 bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center py-2'>
        <button>Editar</button>
      </Link>
      <Link to={`/deletarCategoria/${categoria.id}`} 
      className='w-1/2 bg-red-500 text-white hover:bg-red-600 flex items-center justify-center py-2'>
        <button>Deletar</button>
      </Link>
    </div>
  </div>
)
}

export default CardCategorias