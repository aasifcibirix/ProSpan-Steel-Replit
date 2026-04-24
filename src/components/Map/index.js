import React from "react"

const Map = () => {
  return (
    <div className="embed-responsive embed-responsive-16by9 map-box">

      <iframe
        className="embed-responsive-item"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.279330492938!2d-82.67481801303205!3d30.172013747706348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ef3a3875527cfb%3A0x29467e5b66bf1970!2s792%20SW%20Bascom%20Norris%20Dr%2C%20Lake%20City%2C%20FL%2032025%2C%20USA!5e0!3m2!1sen!2sin!4v1754554228811!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        title="map"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default Map