import { Link } from "react-router-dom";

export default function Navbar(){

return(

<header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">

<nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

<h1 className="font-bold text-blue-600">
FUZION COACHING INSTITUTE
</h1>

<div className="flex gap-6">

<Link to="/">Home</Link>

<Link to="/">About</Link>

<Link to="/">Courses</Link>

<Link to="/">Faculty</Link>

<Link to="/">Contact</Link>

</div>

</nav>

</header>

)

}
