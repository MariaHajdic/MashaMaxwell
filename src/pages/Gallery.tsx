import { ImageGallery } from "react-image-grid-gallery"
// import ScrollToTop from "../ui/ScrollToTop"
import "../styles/Gallery.css"

const imageModules = import.meta.glob("/src/assets/gallery/*.{jpg,png,jpeg,webp}", { eager: true })

const images = Object.entries(imageModules).map(([path, module], index) => {
    const fileName = path.split("/").pop()?.split(".")[0] || `Artwork ${index + 1}`
  
    return {
      id: `image-${index + 1}`,
      src: (module as any).default,
      alt: fileName,
      caption: fileName,
    }
  })

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <ImageGallery imagesInfoArray={images} />
      {/* <ScrollToTop /> */}
    </div>
  )
}

export default Gallery
