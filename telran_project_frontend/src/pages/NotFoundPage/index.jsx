import React from 'react'
import s from './index.module.css'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className={s.section}>
      <div className={s.container}>
        <div>
        <img src="/media/number.png" alt="Number" />
        <img src="/media/cactus.png" alt="Cactus" />
        <img src="/media/number.png" alt="Number" />
        </div>

        <div className={s.error_message}>
          <h2>Page Not Found</h2>
          <p>
            We're sorry, the page you requested could not be found.
            <br />
            Please go back to the homepage.
          </p>
       
          <Link to='/'>Go Home</Link>
                 
        </div>
      </div>
      <Footer />
    </div>

  )
}

