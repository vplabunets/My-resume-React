import { HiMail, HiLink, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { ContactsItem } from '../../ContactsItem/ContactsItem.jsx';
import { ContactsSection, ContactsTitle } from './Contacts.styled.jsx';
export const Contacts = ({ contacts }) => {
  return (
    <>
      <img
        src="	https://avatars.githubusercontent.com/u/91912993?v=4"
        width="370"
        alt={contacts.user.name}
      />
      <ContactsSection>
        <ContactsTitle className="sidebar_title">Contacts</ContactsTitle>
        <ContactsItem
          icon={<HiPhone fill="white" />}
          atribute={contacts.user.tel}
        />
        <ContactsItem
          icon={<HiMail fill="white" />}
          atribute={contacts.user.mailto}
        />
        <ContactsItem
          icon={<HiLocationMarker fill="white" />}
          atribute={contacts.user.location}
        />
        <ContactsItem
          icon={<HiLink fill="white" />}
          atribute={contacts.user.link}
        />
      </ContactsSection>
    </>
  );
};
