import React from 'react'
import BannerSlider from './BannerSlider'
import BgAttachment from './BgAttahment'
import SliderProducts from '../../Components/Slider'

export default function Home({ theme }) {
  return (
    <>
      {/* banner slider */}
      <BannerSlider />
      {/* popular slider */}
      <SliderProducts title={'Popular'} theme={theme} route={'/products/all-products/all-categories'} model={'products'} field={'popular'} operator={'$eq'} value={true} />
      {/* bg attachment */}
      <BgAttachment />
    </>
  )
}
