import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-[#162B45]">
             <footer className="footer max-w-screen-xl mx-auto md:py-32  text-white px-3">
            <nav>
                <header className="footer-title">DESTINATION</header>
                <Link className="link link-hover hover:text-[#FE5C24]">Sundarban</Link>
                <Link className="link link-hover hover:text-[#FE5C24]">Cox-Bazar</Link>
                <Link className="link link-hover hover:text-[#FE5C24]">Bandarban</Link>
                <Link className="link link-hover hover:text-[#FE5C24]">Mohasthanghar</Link>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <Link className="link link-hover hover:text-[#FE5C24]">About us</Link>
                <Link className="link link-hover hover:text-[#FE5C24]">Contact</Link>
                <Link className="link link-hover hover:text-[#FE5C24]">Jobs</Link>
                <Link className="link link-hover hover:text-[#FE5C24]">Press kit</Link>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <Link className="link link-hover hover:text-[#FE5C24]">Terms of use</Link>
                <Link className="link link-hover hover:text-[#FE5C24]">Privacy policy</Link>
                <Link className="link link-hover hover:text-[#FE5C24]">Cookie policy</Link>
            </nav>
            <form>
                <header className="footer-title">Newsletter</header>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input input-bordered max-w-fit join-item rounded-none" />
                        <button className="btn bg-[#FE5C24] text-white rounded-none join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
       </div>
    );
};

export default Footer;