export function Home() {

    return (
        <>
            <main className="bg-gray-600 flex justify-center">
                <section className="conteiner grid grid-cols-2 text-white">
                    <article className="flex flex-col gap-4 items-center justify-center">
                        
                        <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
                        
                        <p className="text-xl">Meu site para AP1!</p>
                    
                    </article>

                    <figure className="flex justify-center">
                        <img  
                            src="https://i.imgur.com/fyfri1v.png" 
                            alt="Imagem Página Inicial"
                            className="w-2/3"
                        />
                    </figure>

                </section>
            </main>
        </>
    )
};