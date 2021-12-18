import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            if (index < 9) {
              return (
                <div className="col-4" key={index}>
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  ></img>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
