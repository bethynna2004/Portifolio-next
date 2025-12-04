export default function ContactsPage  ()  {
    return(
        <>
        <div className=" bg-black h-400 w-500  justify-center-safe text-2xl font-bold">

        <div className="w-2xl h-200  bg-gray-500  m-10 p-10 outline-4 outline-black rounded-lg">
            <h1>Contacte-me</h1>
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
                <button className="bg-blue-800 text-white p-2 rounded-lg hover:bg-blue-600 mt-4" type="submit">Enviar</button>



            </form>



        </div>
        

        </div>



      </>
    )
}
 