function getProducts(req, res) {
  res.render('admin/products/all-products');
}

function getNewProduct(req, res) {
  res.render('admin/products/new-product');
}

function createNewProduct(req, res) {
  console.log(req.body);
  console.log(req.file);

  res.redirect('/admin/products');
}

module.exports = {
  getProducts: getProducts,
  getNewProduct: getNewProduct,
  createNewProduct: createNewProduct
};