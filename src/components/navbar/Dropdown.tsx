import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import i18n from '~services/i18n.service';
import us from '~assets/us.jpg';
import khm from '~assets/cambodia.svg.png';
import './style.css';

enum LanguageCode {
  ENGLISH = 'en',
  KHMER = 'km',
}

const languageLabels = {
  [LanguageCode.ENGLISH]: us,
  [LanguageCode.KHMER]: khm,
};

function DropdownComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>(LanguageCode.KHMER);

  const handleChangeLanguage = (languageCode: LanguageCode) => {
    i18n.changeLanguage(languageCode);
    setSelectedLanguage(languageCode);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" aria-label="Select Language">
        <img src={languageLabels[selectedLanguage]} alt={`${selectedLanguage}-flag`} width={'30'} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleChangeLanguage(LanguageCode.ENGLISH)} aria-label="Switch to English">
          <img src={us} width={'30'} alt='us-flag' />
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleChangeLanguage(LanguageCode.KHMER)} aria-label="Switch to Khmer">
          <img src={khm} alt='khm-flag' width={'30'} />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownComponent;
