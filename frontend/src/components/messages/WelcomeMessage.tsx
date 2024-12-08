const WelcomeMessage = () => {
  return (
    <div className="flex h-full w-full flex-col justify-end items-center gap-6 py-2 ">
        <p className="font-poppins text-xs text-center text-gray-500">Selecciona el chat en el menú.</p>
        <img src="/imgs/welcome-messages.png" className="h-64"></img>
    </div>
  )
}

export default WelcomeMessage