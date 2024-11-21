import './Tale.css'

const Tale = ({ tale, image }) => {
  return (
    <div className="Tale">
      <h4>{tale}</h4>

      <img src={image} alt="" />
    </div>
  )
}

export default Tale
