import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useRecoilState } from "recoil";
import { nowlocation } from "../recoil.js/recoil";

function Homepage() {
  const [location, setlocation] = useRecoilState(nowlocation);
  return <>{(location.lat, location.lon)}</>;
}

export default Homepage;
