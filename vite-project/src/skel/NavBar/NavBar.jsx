// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../../util/Categories/getAllCategories';
import './NavBar.css'
export const NavBar = () => {
    // let categories = getAllCategories();
    return (
        <div>
        <nav className="nav">
        <a href="#">Workstations</a>
        <a href="#">Servers</a>
        <a href="#">SBCs</a>
        <a href="#">IOT</a>        
        </nav>
        </div>
        )
}

// export const NavBar = () => {
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             const allCategories = await getAllCategories();
//             setCategories(allCategories);
//         };
//         fetchCategories();
//     }, []);

//     return (
//         <div>
//             <nav className="nav">
//                 {categories.map((category) => (
//                     <Link key={category} to={`/${category}`}>
//                         {category}
//                     </Link>
//                 ))}
//             </nav>
//         </div>
//     );
// };