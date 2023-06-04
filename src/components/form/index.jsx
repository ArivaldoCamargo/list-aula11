
export default function Form() {

  
  return (
 
   <>
   

    <div className="mx-8 mt-10 p-4 items-center bg-gray-200 w-max-[500] max-h-[500px]">
      <h1>Preencha os campos abaixo para adicionar itens</h1>
      <form>

        <input type="text" placeholder="Título" className="border-2 w-full p-2 my-3 " />
        <input type="date" placeholder="Data" className="border-2 w-full p-2 my-3 " />
        <input type="text" placeholder="Valor" className="border-2 w-full p-2 my-3" />
        <select className="border-2  w-full p-2 my-3" name="cars" id="cars">
        <option value="selecionar">Selecione</option>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select> 
        <textarea type="textearea" placeholder="Descriçao" className="border-2 w-full p-2 my-3 "></textarea>
       
        <button className="rounded-lg w-full bg-slate-800 p-3 text-zinc-50">Salvar</button>
      </form>
    </div>
  </>
)
}