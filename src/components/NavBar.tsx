import React from 'react'

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Onboarding Presentation</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary className=''>
            Slides
          </summary>
          <ul className="p-2 ">
            <li><a href="#mac-setup">Slide 1</a></li>
            <li><a href="#git-github">Slide 2</a></li>
            <li><a href="#unit-testing">Slide 3</a></li>
            <li><a href="#react-setup">Slide 4</a></li>
            
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}
