/*
 * Stimulus-Calendly
 *
 * Copyright (C) 2019 Boris Raicheff
 * All rights reserved
 */


import { Controller } from "stimulus";


export default class extends Controller {

  show(event) {

    event.preventDefault();

    Calendly.showPopupWidget(event.target.getAttribute("href"));

  }

}


/* EOF */
