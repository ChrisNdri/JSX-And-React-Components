function Image({ product }) {
  return <img src={`/img/${product.img}`} alt={product.nom} />;
}

export default Image;