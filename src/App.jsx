
import Navbar from './components/navbar'
import Form from './components/form'
import List from './components/list';
function App() {
  

  return (
    <>
    <Navbar />
    
 <div className='grid justify-items-end p-2  mr-6 sm:hidden md:hidden lg:hidden'>
     <button className="rounded-md items-center bg-slate-800 p-3 text-zinc-50">Novo</button>
</div>
    <div className='grid  md:grid-cols-2 '>
   
    <Form />
    <List />
    
    </div>
    
    </>
  )
}

export default App
