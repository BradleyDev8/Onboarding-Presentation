import React from 'react'

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a href='/home' className="btn btn-ghost normal-case text-xl">Onboarding Presentation</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 mr-10">
      <li>
        <details>
          <summary className=''>
            Slides
          </summary>
          <ul className="p-2">
            <li><a href="#mac-setup">Mac Setup</a></li>
            <li><a href="#git-github">Git/Github</a></li>
            <li><a href="#unit-testing">Testing</a></li>
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="#react-setup">React</a></li>
            
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}
