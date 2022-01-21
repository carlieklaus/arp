const GoogleMapsBookshops = () => {
  return (
    <>
      <div
        style={{
          marginTop: "3rem",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>List of Physical Bookstores</h4>
      </div>

      <iframe
        src="https://www.google.com/maps/d/embed?mid=1mLwScOwmmHF0xznFzsuwW1AQjGZoATwS&ehbc=2E312F"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </>
  );
};

export default GoogleMapsBookshops;
