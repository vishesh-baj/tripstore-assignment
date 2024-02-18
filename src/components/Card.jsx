import PropTypes from "prop-types";

const Card = ({ item, detailsHandler }) => {
  return (
    <div key={item.id} className="card  bg-base-100 shadow-xl">
      <figure className="w-full h-64 overflow-hidden">
        <img
          src={item.volumeInfo.imageLinks?.thumbnail}
          alt="Shoes"
          className="object-cover w-full h-full"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{item.volumeInfo.title}</h2>
        <p>{item.volumeInfo.subtitle}</p>
        <div className="card-actions">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item.volumeInfo.previewLink}
            className="btn btn-primary"
          >
            Preview
          </a>
          <button onClick={() => detailsHandler(item)} className="btn btn-info">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      previewLink: PropTypes.string,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
    }).isRequired,
    saleInfo: PropTypes.shape({
      buyLink: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  detailsHandler: PropTypes.func.isRequired,
};

export default Card;
