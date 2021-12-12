import React, { useState } from "react";
import axios from "axios";

import { valid } from "../../validator";
import { message } from "../../message";
import { Styled } from "./style";
function ModalVisited() {
  return (
    <>
      <Styled.FormContainer>
        <div className="form-title">아는 동네</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-nickname">
            <label htmlFor="nickname">Nickname</label>
          </div>
          <div className="form-email">
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-password">
            <label htmlFor="password">Password</label>
          </div>
          <div className="form-password-confirm">
            <label htmlFor="password-confirm">Password Confirm</label>
          </div>
        </form>
      </Styled.FormContainer>
    </>
  );
}

export default ModalVisited;
