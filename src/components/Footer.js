import {Link} from "react-router-dom";

function Footer() {
    return(
        <footer className="bg-body-footer h-auto flex flex-col w-full">
            <div className="p-1 flex justify-center items-center space-x-4">
                {/* Facebook */}
                <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="facebook logo" className="h-6 w-6" />
                </Link>
                {/* LinkedIn */}
                <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="linkdin logo"
                         className="h-6 w-6"/>
                </Link>
                {/* Instagram */}
                <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="instagram logo"
                         className="h-6 w-6"/>
                </Link>
            </div>
            <div className="text-center p-1 text-black bg-transparent">
                © 2024 Developer
                <strong>
                    <Link to="/"> Janith Ranasinghe </Link>
                </strong>
                All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer;