import { Route, Routes } from 'react-router-dom';
import GettingStarted from './overview/GettingStarted';
import Accessibility from './overview/Accessibility';
import Colors from './overview/Colors';
import Typography from './overview/Typography';
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Callout from './components/Callout';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import Drawer from './components/Drawer';
import FileUpload from './components/FileUpload';
import Form from './components/Form';
import Icon from './components/Icon';
import Input from './components/Input';
import Label from './components/Label';
import Modal from './components/Modal';
import Overlay from './components/Overlay';
import Popover from './components/Popover';
import Portal from './components/Portal';
import Radio from './components/Radio';
import Select from './components/Select';
import Spinner from './components/Spinner';
import Switch from './components/Switch';
import TextArea from './components/TextArea';
import ThemeProvider from './components/ThemeProvider';
import Toast from './components/Toast';
import Tooltip from './components/Tooltip';
import Contact from './resources/Contact';
import Troubleshooting from './resources/Troubleshooting';
import NotFound from './overview/NotFound';
import ScrollToTop from './utils/ScrollToTop';

function DocsRoutes() {
  return (
    <div className='docs--main'>
      <Routes>
        <Route path='/' element={<GettingStarted />} />
        <Route path='/accessibility' element={<Accessibility />} />
        <Route path='/colors' element={<Colors />} />
        <Route path='/typography' element={<Typography />} />
        <Route path='/button' element={<Button />} />
        <Route path='/button-group' element={<ButtonGroup />} />
        <Route path='/callout' element={<Callout />} />
        <Route path='/card' element={<Card />} />
        <Route path='/checkbox' element={<Checkbox />} />
        <Route path='/drawer' element={<Drawer />} />
        <Route path='/file-upload' element={<FileUpload />} />
        <Route path='/form' element={<Form />} />
        <Route path='/icon' element={<Icon />} />
        <Route path='/input' element={<Input />} />
        <Route path='/label' element={<Label />} />
        <Route path='/modal' element={<Modal />} />
        <Route path='/overlay' element={<Overlay />} />
        <Route path='/popover' element={<Popover />} />
        <Route path='/portal' element={<Portal />} />
        <Route path='/radio' element={<Radio />} />
        <Route path='/select' element={<Select />} />
        <Route path='/spinner' element={<Spinner />} />
        <Route path='/switch' element={<Switch />} />
        <Route path='/text-area' element={<TextArea />} />
        <Route path='/theme-provider' element={<ThemeProvider />} />
        <Route path='/toast' element={<Toast />} />
        <Route path='/tooltip' element={<Tooltip />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/troubleshooting' element={<Troubleshooting />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default DocsRoutes;
