import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiulIu_qpXlAhWCdN8KHWRxAeoQjRx6BAgBEAQ&url=http%3A%2F%2Frebustech.co%2Fes%2Finicio%2F&psig=AOvVaw1axh1Km1KPy9K5w44YeKyC&ust=1570921962957034'

export const Demo = ({ src = DEFAULT_IMAGE, categoryId }) => (
  <Link to={`/url-ejemplol/${categoryId}`}>
    <Image src={src} />
  </Link>
)
