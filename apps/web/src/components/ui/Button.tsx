type Props={
  children:React.ReactNode;
}

export default function Button({children}:Props){
  return(
    <button className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
      {children}
    </button>
  )
}
