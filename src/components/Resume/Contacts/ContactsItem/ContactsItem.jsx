export const ContactsItem = ({ icon, atribute }) => (
  <div>
    <span className="contacts_section_type"></span>
    {icon}
    <a className="contacts_section_link" href={atribute}>
      {atribute}
    </a>
  </div>
);
