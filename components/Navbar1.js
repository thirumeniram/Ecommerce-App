// export default function Navbar1() {
//     return (
//         <>
//             <nav className="flex justify-between bg-gray-900 text-white w-screen">
//                 <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                   
//                     {/* Nav Links */}
//                     <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
//                         <li><a className="hover:text-gray-200" href="#">Home</a></li>
                        
//                     </ul>
//                     {/* Header Icons */}
//                     <div className="hidden xl:flex items-center space-x-5">
                     
//                         <a className="flex items-center hover:text-gray-200" href="#">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
//                                 <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                             </svg>
                       
//                         </a>
//                         <a className="flex items-center hover:text-gray-200" href="#">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                
//                                 <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                         </a>
//                     </div>
//                 </div>
//                 {/* Responsive navbar icons */}
//                 <div className="xl:hidden flex items-center space-x-5">
//                     <a className="hover:text-gray-200" href="#">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
//                             <path d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </a>
//                 </div>
//             </nav>

           
//         </>
//     );
// }
// export default function Navbar1() {
//     return (
//         <nav className="flex justify-between bg-gray-900 text-white w-full">
//             {/* Nav Links */}
//             <ul className="flex px-4 py-6 items-center space-x-4 md:space-x-12">
//                 <li><a className="hover:text-gray-200" href="#">Home</a></li>
//             </ul>
            
//             {/* Header Icons */}
//             <div className="flex px-5 py-6 items-center space-x-5">
//                 <a className="items-center hover:text-gray-200" href="#">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
//                         <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                     </svg>
//                 </a>
//                 <a className="items-center hover:text-gray-200" href="#">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
//                         <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                 </a>
//             </div>

//             {/* Responsive Navbar Icon */}
//             <div className="flex items-center space-x-5 xl:hidden">
//                 <a className="hover:text-gray-200" href="#">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
//                         <path d="M4 6h16M4 12h16m-16 6h16" />
//                     </svg>
//                 </a>
//             </div>
//         </nav>
//     );
// }
export default function Navbar1() {
    return (
        <nav className="flex justify-between items-center bg-gray-900 text-white w-full">
            <div className="flex-1 flex justify-start px-5 py-6 items-center space-x-5 lg:hidden">
                {/* Placeholder for alignment, could be replaced with an icon or logo if needed */}
            </div>

            {/* Nav Links */}
            <ul className="flex-1 px-4 py-6 items-center justify-center md:ml-11 md:w-2">
                <li><a className="hover:text-gray-200 " href="#">Home</a></li>
            </ul>
            
            {/* Header Icons */}
            <div className="flex-1 flex px-5 py-6 items-center justify-end space-x-5">
                <a className="items-center hover:text-gray-200" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </a>
                <a className="items-center hover:text-gray-200" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
        </nav>
    );
}
