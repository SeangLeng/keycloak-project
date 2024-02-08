import './style.css'

export default function Footer() {
    return (
        <footer className={'footer'}>
            <div className={'content'}>
                <div className={'d-flex flex-column gap-5'}>
                    <div id={'logo'} className={'px-5 py-2 bg-white text-black rounded-1 border-0'}>Logo</div>
                    <div className={'d-flex gap-3 justify-content-start align-items-center'}>
                        <h3>By</h3>
                        <div className={'d-flex gap-3'}>
                            <div className={'circle-sample rounded-circle'}></div>
                            <div className={'circle-sample rounded-circle'}></div>
                        </div>
                    </div>
                </div>
                <div id={'contact'} className={'d-grid gap-2'}>
                    <h4>Contact</h4>
                    <div className={'d-grid mx-4 gap-3'}>
                        <div>
                            <i className="fa-solid fa-envelope fs-5"></i>
                            <span className={'mx-3'}>ddkh.gov.kh</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-location-dot fs-5"></i>
                            <span className={'mx-3'}>អគារលេខ១៣ មហាវិថីព្រះមុនីវង្ស សង្កាត់ស្រះចក ខណ្ឌដូនពេញ រាជធានីភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា 120210</span>
                        </div>
                    </div>
                </div>
                <div className={'d-grid gap-lg-5 gap-md-3 gap-sm-2'}>
                    <div className={'d-flex gap-4 fs-3'} id={'icons'}>
                        <a href={'/'} target={'_blank'} rel="noreferrer">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href={'/'} target={'_blank'} rel="noreferrer">
                            <i className="fa-brands fa-square-instagram"></i>
                        </a>
                        <a href={'/'} target={'_blank'} rel="noreferrer">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href={'/'} target={'_blank'} rel="noreferrer">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                        <a href={'/'} target={'_blank'} rel="noreferrer">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                    <div className={'terms d-grid gap-3'}>
                        <a href={'/'} target={"_blank"} rel={'noreferrer'}>
                            Privacy
                        </a>
                        <a href={'/'} target={"_blank"} rel={'noreferrer'}>
                            Term of use
                        </a>
                    </div>
                </div>
            </div>
            <div className={'w-100 bg-white'} id={'line'}></div>
            <p>© 2024 គណៈកម្មាធិការរដ្ឋាភិបាល​ឌីជីថល</p>
        </footer>
    );
}
