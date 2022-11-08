import {
  ContactsSectionLink,
  ContactsSectionType,
} from './ContactsItem.styled';

export const ContactsItem = ({ icon, atribute }) => (
  <div>
    <ContactsSectionType className="contacts_section_type"></ContactsSectionType>
    {icon}
    <ContactsSectionLink className="contacts_section_link" href={atribute}>
      {atribute}
    </ContactsSectionLink>
  </div>
);
