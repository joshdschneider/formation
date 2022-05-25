import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DocsNavMobile } from '../docs/nav';
import { Drawer, Icon } from '@joshdschneider/formation';

type NavProps = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

function Nav({ theme, toggleTheme }: NavProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className='nav--main'>
      <div className='nav--container'>
        <div className='nav--logo'>
          <Link to='/'>
            <div className='nav--logo--icon' />
            <span className='nav--logo--text'>Formation</span>
          </Link>
        </div>
        <div className='nav--links'>
          <Link to='/docs'>Docs</Link>
          <a href='http://github.com/joshdschneider' target='_blank' rel='noreferrer'>
            Github
          </a>
          <a href='http://www.npmjs.com/' target='_blank' rel='noreferrer'>
            npm
          </a>
          <button className='nav--theme' onClick={() => toggleTheme()}>
            <Icon icon={theme === 'light' ? 'style' : 'add-clip'} size='large' />
          </button>
        </div>
        <div className='nav--mobile'>
          <button className='nav--mobile--button' onClick={() => setOpen(true)}>
            <Icon icon='style' size='large' />
          </button>
          <MobileNav
            isOpen={isOpen}
            onClose={() => setOpen(false)}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </div>
      </div>
    </div>
  );
}

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

function MobileNav({ isOpen, onClose, theme, toggleTheme }: MobileNavProps) {
  let current = window.location.pathname;
  let breadcrumbs = null;
  let children = null;

  if (current.includes('/docs')) {
    breadcrumbs = (
      <>
        <Link to={'/'}>Home</Link>
        <Icon icon='double-caret-vertical' />
        <span>Docs</span>
      </>
    );

    children = <DocsNavMobile />;
  } else {
    breadcrumbs = <span>Menu</span>;
    children = (
      <div className='nav--mobile--children'>
        <Link to={'/docs'}>
          <Icon icon='style' />
          <span>Docs</span>
        </Link>
        <a href='http://github.com/joshdschneider' target='_blank' rel='noreferrer'>
          <Icon icon='style' />
          <span>Github</span>
        </a>
        <a href='http://www.npmjs.com/' target='_blank' rel='noreferrer'>
          <Icon icon='style' />
          <span>npm</span>
        </a>
      </div>
    );
  }
  const clickListener = useCallback(
    (e: MouseEvent) => {
      let el = e.target as HTMLElement;
      if (el.nodeName === 'A') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', clickListener);
    } else {
      document.removeEventListener('click', clickListener);
    }
  }, [isOpen, clickListener]);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      position={'right'}
      size={'80%'}
      className={'docs--drawer'}
    >
      <div className='nav--mobile--header'>
        <span className='nav--mobile--breadcrumbs'>{breadcrumbs}</span>
        <div className='nav--mobile--buttons'>
          <button onClick={() => toggleTheme()}>
            <Icon icon={theme === 'light' ? 'style' : 'add-clip'} size='large' />
          </button>
          <button onClick={onClose}>
            <Icon icon='cross' size='large' />
          </button>
        </div>
      </div>
      {children}
    </Drawer>
  );
}

export default Nav;
