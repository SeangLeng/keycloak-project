import './style.css';
import preview1 from '~assets/images/document-pro.png';
import {useTranslation} from "react-i18next";

export const LandingPage = () => {
  const { t } = useTranslation();

  return (
      <div className="app">
        <section className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
          <div className="col gap-5 col-lg-2 mt-5 col-lg-6 col-md-6 col-sm-12">
            <div className="col">
              <h1 className="fw-bold lh-sm tracking-tighter">
                <span id="title-doc">{t('Document_designer')}</span><br/> {t('Submit_your_information')}
              </h1>
              <div id="description" >
                <p className={'mt-4'}>{t('Formulate documents effortlessly with our document designer by simply submitting your information.')}</p>
              </div>
            </div>
            <button className={'get-start rounded-5 mt-5'}>
              {t('Get start')}
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <img src={preview1} alt={'preview-01'} />
        </section>
      </div>
  );
};