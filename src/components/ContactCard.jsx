const ContactCard = ({ title, icon, children }) => {
  return (
    <div className="group bg-gray-100 shadow-xl border p-8 w-3xl text-gray-900 wow fadeInUp">
      <i class={`${icon}  text-4xl text-green-700`}></i>
      <p className="text-xl font-semibold mt-2">{title}</p>
      {children}
    </div>
  );
};

export default ContactCard;
