
import Image from "next/image";// pages/index.tsx







export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <header className="bg-blue-600 p-4">
                <nav className="container mx-auto flex justify-between items-center">
                    <div>
// image //
                    </div>
                    <ul className="flex space-x-6 text-white">
                        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#about" className="hover:text-gray-300">About</a></li>
                        <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Banner Section */}
            <section id="home" className="flex-1 bg-cover bg-center" style={{ backgroundImage: 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ieNNUVG_hQuG--cITtxGOwHaEo%26pid%3DApi&f=1&ipt=ad0c399af62f7a43668cf225c59bb14c439437344e95f7f352be84099a341d33&ipo=images")' }}>
                <div className="bg-black bg-opacity-50 text-white text-center py-24">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
                    <p className="text-xl mb-8">The best solution for all your health needs.</p>
                    <div>
                        <a href="#about" className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg mr-4">Get Started</a>
                        <a href="#contact" className="bg-white hover:bg-gray-300 text-black py-3 px-6 rounded-lg">Contact Us</a>
                    </div>
                </div>
            </section>
            <Features />


            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto text-center">
                    <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
                    <ul className="flex justify-center space-x-4 mt-4">
                        <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
                        <li><a href="#support" className="hover:underline">Support</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
