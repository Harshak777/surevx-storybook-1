import React from 'react';
import './Sidemenu.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const Sidemenu = () => (
  <div class="sidebar">
    <ul class="list-unstyled components">
      <li>
        <a href="#menu1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Top Item</a>
        <ul class="collapse show" id="menu1">
          <li>
            <a href="/">
              Sub-menu item
            </a>
          </li>
          <li>
            <a href="/another">
              Another sub-menu item
            </a>
          </li>
          <li>
            <a href="#art-3">
              A third sub-menu item
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#menu2" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Another Top Item</a>
        <ul class="collapse show" id="menu2">
          <li>
            <a href="#">
              enter text
            </a>
          </li>
          <li>
            <a href="#">
              enter text
            </a>
          </li>
          <li>
            <a href="#">
              enter text
            </a>
          </li>
          <li>
            <a href="#">
              enter text
            </a>
          </li>
          <li>
            <a href="#">
              enter text
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#menu3" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Final Top Item</a>
        <ul class="collapse show" id="menu3">
          <li>
            <a href="#">
              enter text
            </a>
          </li>
          <li>
            <a href="#">
              enter text
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Sidemenu;
