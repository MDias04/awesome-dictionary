import React from "react";
import "./styles/Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        <div className="row">
          <h4>Check out some amazing photos</h4>
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-6" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                  className="photo-zoom"
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.src.photographer}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
