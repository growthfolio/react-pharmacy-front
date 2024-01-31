//import logoLevemenos from '../../assets/muitomenos.png'; implmentaçao futura
import './Home.css';
 //Implementação futura
   /* const data = [
        { id: '1', image: 'https://cdn2.unrealengine.com/' },
        { id: '2', image: 'https://cdn2.unrealengine.com/' },
        { id: '3', image: 'https://cdn2.unrealengine.com/' },
        { id: '4', image: 'https://cdn2.unrealengine.com/' },
    ];
*/
function Home() {

    return (
        <>

            <div className="bg-slate-500 flex justify-center py-10">
                <div className='container grid grid-cols-2 text-dark-60'>
                     <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Bem vindo a Leve Menos!</h2>
                        <p className='text-xl'>Os melhores remedios você encontra aqui!</p>

                        <div className="flex justify-around gap-4">

                            <button className='rounded bg-dark-60 text-dark-10 uppercase
                             py-2 px-4' style={{ letterSpacing: '1.5px' }}>Ver Produtos</button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                   {/*  <img src={logoReact} className='w-2/3' />  implmentaçao futura */}     

                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;