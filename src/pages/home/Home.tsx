import logoReact from '../../assets/react.svg';
//import './Home.css';
   /* const data = [
        { id: '1', image: 'https://cdn2.unrealengine.com/' },
        { id: '2', image: 'https://cdn2.unrealengine.com/' },
        { id: '3', image: 'https://cdn2.unrealengine.com/' },
        { id: '4', image: 'https://cdn2.unrealengine.com/' },
    ];
*/ //Implementações futuras

function Home() {
  return (
    <>
      <div className="bg-blue-500 flex justify-center py-10">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Bem-vindo à SuperFarma!</h2>
            <p className="text-xl">Encontre os melhores medicamentos aqui!</p>

            <div className="flex justify-around gap-4">
              <button className="rounded bg-white text-blue-500 uppercase py-2 px-4" style={{ letterSpacing: '1.5px' }}>
                Ver Produtos
              </button>
            </div>
          </div>

          <div className="flex justify-center">
             <img src={logoReact} className='w-2/3' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
