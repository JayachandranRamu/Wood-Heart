
// Here we have used react-icons package for the icons
import { FaGithub, FaDev, FaLinkedin, FaQuora, FaTwitter } from 'react-icons/fa';
export const siteConfig = {
  author: {
    name: '',
    accounts: [
      {
        url: '',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: '',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />
      },
      {
        url: '',
        label: 'Dev Account',
        type: 'gray',
        icon: <FaDev />
      },
      {
        url: '',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      {
        url: '',
        label: 'Quora Account',
        type: 'red',
        icon: <FaQuora />
      }
    ]
  }
};