import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/Logo/book-education-arrow-logo-vector-15820150.jpg';
import './HomeNavbar.css';
import { FaBars } from "react-icons/fa";
import userimg from '../../assets/dropdown/user.png'
import edit from '../../assets/dropdown/edit.png'
import inbox from '../../assets/dropdown/envelope.png'
import settings from '../../assets/dropdown/settings.png'
import help from '../../assets/dropdown/question.png'
import logout from '../../assets/dropdown/log-out.png'

const HomeNavbar = () => {
    const navigate = useNavigate();
    const { user, logOut ,setAdmission} = useContext(AuthContext);
    const handelLogout = () => {
        logOut()
            .then(() => {
                navigate('/signUp')
            })

    }

    const [state, setState] = useState(false)



    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])




    const [open, setOpen] = useState(false);
    let menuRef = useRef();
    let imgRef = useRef();
    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false)
        }
    })
   
    // useEffect(() => {
    //     fetch(`http://localhost:5000/findAddmitionId/email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //             setAdmission(result)
    //         })
    // }, [user?.email,setAdmission]);


    return (
        <header id="head">
            <input type="checkbox" name id="chk1" />
            <div className="logo"><img src={logo} className="w-[80px]" alt="" /></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="allColleges">Colleges</Link></li>
                <li><Link to="/admission">Admission</Link></li>
                <li><Link to={`/myCollege/${user?.email}`}>My College</Link></li>
            </ul>

            {/* user photo  */}
            {
                user?.uid ? <Link to={`/user/${user?.email}`} className="lg:hidden md:hidden flex lg:mr-8 mr-4">
                    <img className="object-cover w-12 ring ring-blue-500 h-12 rounded-full" src={user?.photoURL} alt="" />
                </Link> : <></>
            }


            {
                user?.uid ? <div className="lg:flex hidden lg:mr-8 mr-4" onClick={() => { setOpen(!open) }}>
                    <img ref={imgRef} className="object-cover w-12 ring ring-blue-500 h-12 rounded-full" src={user?.photoURL} alt="" />
                </div> : <></>
            }

            <div ref={menuRef} className={`dropdown-menu mt-[5px] mr-[40px] ${open ? 'active' : 'inactive'}`} >
                <div className="flex justify-center items-center py-4">
                    <div className="lg:flex hidden lg:mr-8 mr-4">
                        <img ref={imgRef} className="object-cover w-12 ring ring-blue-500 h-12 rounded-full" src={user?.photoURL} alt="" />
                    </div>
                    <div>
                        <p className="font-bold robotofont">{user?.displayName}</p>
                        <p className="robotofont">{user?.email}</p>
                    </div>
                </div>
                <ul>
                    <Link to={`/user/${user?.email}`}>
                        <li className='dropdownItem'>
                            <img src={userimg} />
                            <Link to={`/user/${user?.email}`} className="text-[14px] "> My Profile </Link>
                        </li>
                    </Link>

                    <li className='dropdownItem'>
                        <img src={edit} />
                        <a className="text-[14px] "> Edit Profile</a>
                    </li>
                    <li className='dropdownItem' onClick={handelLogout}>
                        <img src={logout} />
                        <a className="text-[14px] "> Logout </a>
                    </li>
                </ul>
            </div>
            <div className="menu">
                <label htmlFor="chk1">
                    <FaBars />
                </label>
            </div>
        </header>


    );
};

export default HomeNavbar;