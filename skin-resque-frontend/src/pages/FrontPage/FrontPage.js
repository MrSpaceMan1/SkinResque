import './FrontPage.scss';
import photo from '../../resources/front-page-skin-photo.jpg';
import skintypeTestPhoto from '../../resources/skintype-test.png';
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';

function FrontPage() {
  return (
    <div className='front-page'>
      <div className='pink'></div>
      <div className='page-about'>
        <Heading size='medium'>Page Information</Heading>
        <Text size='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </div>
      <div className='white'></div>
      <div className='photo-button-list linkList'>
        <div className='photo-button'>
          <img src={skintypeTestPhoto}></img>
        <Button><Link to='/skintype-test'>Skintype Test</Link></Button>
        </div>
        <div className='photo-button'>
        <img src={skintypeTestPhoto}></img>
          <Button><Link to='/color-test'>Color Test</Link></Button>
        </div>
        <div className='photo-button'>
        <img src={skintypeTestPhoto}></img>
          <Button><Link to='/cosmetic-list'>Cosmetic Recipes</Link></Button>
        </div>
      </div>
      <div className='green'></div>
      <img src={photo} className='skin-photo'></img>
      <div className='white'></div>
    </div>
  );
}

export default FrontPage;