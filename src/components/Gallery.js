
import GalleryItem from './GalleryItem'

const Gallery = (props) => {
    const newData = props.data.result.read()

    const display = newData.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
