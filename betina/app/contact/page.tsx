export default function ContactsPage  ()  {
    return(
        <>
        <div className=" bg-gradient-to-r from-black to-blue-700 h-400 w-500  justify-center-safe text-2xl font-bold">

        <div className="w-100 h-150  bg-gray-500  m-0 p-10 outline-4 outline-black rounded-lg flex justify-around flex-col ">
            <h1 className="flex justify-center">Contacte-me</h1>
            <form action="" >
                <label htmlFor="name">Nome:</label><br />
                <input className="rounded-lg  outline-2 outline-black" type="text" id="name" name="name" required  placeholder="Nome"/>
                <br />
                <label htmlFor="name">Email:</label><br />
                <input className="rounded-lg  outline-2 outline-black" type="text" id="name" name="name" required  placeholder="Email"/>
                <br />
                <label htmlFor="name">Contacto:</label><br />
                <input className="rounded-lg outline-2 outline-black" type="text" id="name" name="name" required  placeholder="Contacto"/>
                <br />
                
                <label htmlFor="message">Mensagem:</label><br />
                <textarea className="rounded-lg outline-2 outline-black" id="message" name="message" required placeholder="Escreva sua mensagem aqui"></textarea>
                <br />
                <button className="bg-blue-800 text-white p-2 rounded-lg hover:bg-blue-600 mt-4" type="submit">Submeter</button>
                

            </form>



        </div>
        

        </div>



      </>
    )
}
 