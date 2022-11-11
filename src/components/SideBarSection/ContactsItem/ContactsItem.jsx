import { ContactsSectionLink } from './ContactsItem.styled';

export const ContactsItem = ({ icon, atribute }) => (
  <div>
    {icon}
    <ContactsSectionLink className="contacts_section_link" href={atribute}>
      {atribute}
    </ContactsSectionLink>
  </div>
);
