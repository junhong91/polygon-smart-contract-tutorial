import React from "react";

import "./Deployment.css";

const Deployment = ({ deployment, onSubmit }) => {
  return (
    <div className="background">
      <div className="deployment__wrapper">
        <div className="deployment__header">
          <h1 className="deployment__header__title">{deployment.header.title}</h1>
        </div>
        <form className="deployment__form" ref={deployment.formRef} onSubmit={onSubmit}>
          {deployment.inputItems &&
            deployment.inputItems.map((item) => (
              <p key={item.name}>
                <label className="deployment__label">
                  {item.name}
                  <br />
                  <input
                    className="deployment__input"
                    type="text"
                    ref={item.inputRef}
                    defaultValue={item?.defaultValue}
                  />
                </label>
              </p>
            ))}
          <button className="deployment__sign-up__btn">{deployment.btnName}</button>
        </form>
      </div>
    </div>
  );
};

export default Deployment;
