import React from "react"
import { Link } from "gatsby"
import '../css/index.css';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi';

const IndexPage = () => (
  <div className='container mx-auto'>
    <SEO title="Home" />
    <div className='h-35 pl-5 pt-5 border-b-2 border-gray-400'>
      <div className='text-4xl font-bold subpixel-antialiased'>
        Aakash Raina
      </div>
      <div className='pt-5 pb-3 space-x-4'>
        <span><FaTwitter color='#5f6c80' /></span>
        <span><FaLinkedin color='#5f6c80' /></span>
        <span><FiMail color='#5f6c80' /></span>
      </div>
    </div>

  </div>
)

export default IndexPage
