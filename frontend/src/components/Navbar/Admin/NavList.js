import { AiOutlineHome } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { MdGroupAdd } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";

export const NavList=[
    {
        name:"Home",
        path:"/existinguser",
        icon:<AiOutlineHome size={30}/>
    },
    {
        name:"Customer",
        path:"/existinguser",
        icon:<GoPeople size={30}/>
    },
    {
        name:"New_Cus",
        path:"/adduser",
        icon:<MdGroupAdd size={30}/>
    },
    {
        name:"Request",
        path:"/request",
        icon:<FaPeopleArrows size={30}/>
    },
    {
        name:"History",
        path:"/history",
        icon:<MdWorkHistory size={30}/>
    },
    // {
    //     path:"/invoice",
    // }

]

