const WelcomeMessage = () => {
  return (
    <div className="flex h-full w-full flex-col justify-end items-center gap-6 py-2">
        <p className="font-montserrat text-xs text-center">En el menú podrás seleccionar con quién hablar.</p>
        <img src="/imgs/welcome-messages.png" className="h-74 md:h-96 "></img>
    </div>
  )
}

export default WelcomeMessage