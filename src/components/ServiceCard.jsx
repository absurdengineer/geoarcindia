const ServiceCard = ({ title }) => {
  return (
    <div className="group bg-white rounded-lg shadow-xl border p-5 w-3xl wow fadeInUp">
      <div className="flex items-center">
        <i className="fas fa-check text-blue-900 bg-blue-100 p-2 rounded group-hover:text-white group-hover:bg-blue-700 transition duration-300 ease-in-out  "></i>
        <div className="text-blue-900 font-bold inline ml-4">{title}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
