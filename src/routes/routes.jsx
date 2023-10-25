import { Route } from "react-router-dom"

import { Questions } from "../pages/Questions";
import { Summary } from "../pages/Summary";

import React from 'react'

export const routes = (
    <>
     <Route path="/" element={<Questions />}></Route>
     <Route path="/summary" element={<Summary />}></Route>
    </>
)

