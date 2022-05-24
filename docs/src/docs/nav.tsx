import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@joshdschneider/formation';

type NavButton = {
  name: string;
  text: string;
  icon: string;
  links: NavLink[];
};

type NavLink = {
  name: string;
  text: string;
  to: string;
};

const overviewLinks: NavLink[] = [
  {
    name: 'getting-started',
    text: 'Getting started',
    to: '/docs',
  },
  {
    name: 'accessibility',
    text: 'Accessibility',
    to: '/docs/accessibility',
  },
  {
    name: 'colors',
    text: 'Colors',
    to: '/docs/colors',
  },
  {
    name: 'typography',
    text: 'Typography',
    to: '/docs/typography',
  },
];

const componentLinks: NavLink[] = [
  {
    name: 'button',
    text: 'Button',
    to: '/docs/button',
  },
  {
    name: 'button-group',
    text: 'Button group',
    to: '/docs/button-group',
  },
  {
    name: 'callout',
    text: 'Callout',
    to: '/docs/callout',
  },
  {
    name: 'card',
    text: 'Card',
    to: '/docs/card',
  },
  {
    name: 'checkbox',
    text: 'Checkbox',
    to: '/docs/checkbox',
  },
  {
    name: 'drawer',
    text: 'Drawer',
    to: '/docs/drawer',
  },
  {
    name: 'file-upload',
    text: 'File upload',
    to: '/docs/file-upload',
  },
  {
    name: 'form',
    text: 'Form',
    to: '/docs/form',
  },
  {
    name: 'icon',
    text: 'Icon',
    to: '/docs/icon',
  },
  {
    name: 'input',
    text: 'Input',
    to: '/docs/input',
  },
  {
    name: 'label',
    text: 'Label',
    to: '/docs/label',
  },
  {
    name: 'modal',
    text: 'Modal',
    to: '/docs/modal',
  },
  {
    name: 'overlay',
    text: 'Overlay',
    to: '/docs/overlay',
  },
  {
    name: 'popover',
    text: 'Popover',
    to: '/docs/popover',
  },
  {
    name: 'portal',
    text: 'Portal',
    to: '/docs/portal',
  },
  {
    name: 'radio',
    text: 'Radio',
    to: '/docs/radio',
  },
  {
    name: 'select',
    text: 'Select',
    to: '/docs/select',
  },
  {
    name: 'spinner',
    text: 'Spinner',
    to: '/docs/spinner',
  },
  {
    name: 'switch',
    text: 'Switch',
    to: '/docs/switch',
  },
  {
    name: 'text-area',
    text: 'Text area',
    to: '/docs/text-area',
  },
  {
    name: 'theme-provider',
    text: 'Theme provider',
    to: '/docs/theme-provider',
  },
  {
    name: 'toast',
    text: 'Toast',
    to: '/docs/toast',
  },
  {
    name: 'tooltip',
    text: 'Tooltip',
    to: '/docs/tooltip',
  },
];

const resourcesLinks: NavLink[] = [
  {
    name: 'contact',
    text: 'Contact',
    to: '/docs/contact',
  },
  {
    name: 'troubleshooting',
    text: 'Troubleshooting',
    to: '/docs/troubleshooting',
  },
];

const navButtons: NavButton[] = [
  {
    name: 'overview',
    text: 'Overview',
    icon: 'style',
    links: overviewLinks,
  },
  {
    name: 'components',
    text: 'Components',
    icon: 'add-clip',
    links: componentLinks,
  },
  {
    name: 'resources',
    text: 'Resources',
    icon: 'style',
    links: resourcesLinks,
  },
];

function DocsNav() {
  let navigate = useNavigate();
  let current = window.location.pathname;

  useEffect((): void => {
    navButtons.forEach((button): void => {
      let active = false;

      button.links.forEach((link): void => {
        if (link.to === current) {
          active = true;
          let currentLink = document.getElementById(link.name + '_link');
          currentLink?.setAttribute('link-active', '');
        } else {
          let el = document.getElementById(link.name + '_link');
          el?.removeAttribute('link-active');
        }
      });

      if (active) {
        let currentMenu = document.getElementById(button.name + '_menu');
        currentMenu?.setAttribute('menu-active', '');
      } else {
        let menu = document.getElementById(button.name + '_menu');
        menu?.removeAttribute('menu-active');
      }
    });
  }, [current]);

  function clickFirstLink(button: NavButton): void {
    navigate(button.links[0].to);
  }

  return (
    <div className='docs--nav'>
      {navButtons.map((button, i) => {
        return (
          <div className='nav--group' key={i}>
            <button
              id={button.name}
              className={'nav--button'}
              onClick={() => clickFirstLink(button)}
            >
              <Icon icon={button.icon} />
              <span className={'nav--button--text'}>{button.text}</span>
            </button>
            <div id={button.name + '_menu'} className='nav--menu'>
              {button.links.map((link, k) => {
                return (
                  <Link key={k} id={link.name + '_link'} to={link.to} className={'nav--link'}>
                    {link.text}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function DocsNavMobile() {
  let current = window.location.pathname;

  useEffect((): void => {
    navButtons.forEach((button): void => {
      let active = false;

      button.links.forEach((link): void => {
        if (link.to === current) {
          active = true;
          let currentLink = document.getElementById(link.name + '_link--mobile');
          currentLink?.setAttribute('link-active', '');
        } else {
          let el = document.getElementById(link.name + '_link--mobile');
          el?.removeAttribute('link-active');
        }
      });

      if (active) {
        let currentMenu = document.getElementById(button.name + '_menu--mobile');
        currentMenu?.setAttribute('menu-active', '');
      } else {
        let menu = document.getElementById(button.name + '_menu--mobile');
        menu?.removeAttribute('menu-active');
      }
    });
  }, [current]);

  function activateButton(activeButton: NavButton) {
    navButtons.forEach((button): void => {
      if (button.name === activeButton.name) {
        let currentMenu = document.getElementById(button.name + '_menu--mobile');
        currentMenu?.setAttribute('menu-active', '');
      } else {
        let menu = document.getElementById(button.name + '_menu--mobile');
        menu?.removeAttribute('menu-active');
      }
    });
  }

  return (
    <div className='docs--nav'>
      {navButtons.map((button, i) => {
        return (
          <div className='nav--group' key={i}>
            <button
              id={button.name}
              className={'nav--button'}
              onClick={() => activateButton(button)}
            >
              <Icon icon={button.icon} />
              <span className={'nav--button--text'}>{button.text}</span>
            </button>
            <div id={button.name + '_menu--mobile'} className='nav--menu'>
              {button.links.map((link, k) => {
                return (
                  <Link
                    key={k}
                    id={link.name + '_link--mobile'}
                    to={link.to}
                    className={'nav--link'}
                  >
                    {link.text}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DocsNav;
