import { MonitorSmartphone, ShoppingCart } from "lucide-react"
import Link from "next/link"

function Header() {
    return (
        <header className="z-50 flex justify-center bg-white fixed shadow-xl px-20 h-16 w-full">
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <MonitorSmartphone className="hover:text-blue-500"/>
                    <Link href="/" className="font-bold text-xl">Digital Shop</Link>
                </div>
                <div>
                    <ShoppingCart />
                </div>
            </div>
        </header>
    )
}

export default Header