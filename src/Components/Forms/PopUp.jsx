const Popup = ({ message }) => {
    return (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 px-6 py-3 bg-green-500 text-white text-center rounded-lg shadow-lg animate-pulse">
        <p>{message}</p>
      </div>
    );
  };
  
  export default Popup;
  