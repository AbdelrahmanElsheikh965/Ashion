export default function CategoriesSection() {
  return (
    <>
      <section className="categories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="categories__item categories__large__item set-bg"
                style={{'background-image': "url('img/categories/category-3.jpg')"}}
              >
                <div className="categories__text" >
                  <h1>Women’s fashion</h1>
                  <p>
                    Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                    incidid-unt labore edolore magna aliquapendisse ultrices
                    gravida.
                  </p>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{'background-image': "url('img/categories/category-2.jpg')"}}
                  >
                    <div className="categories__text">
                      <h4>Men’s fashion</h4>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{'background-image': "url('img/categories/category-3.jpg')"}}>
                    <div className="categories__text">
                      <h4>Kid’s fashion</h4>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{'background-image': "url('img/categories/category-3.jpg')"}}
                  >
                    <div className="categories__text">
                      <h4>Cosmetics</h4>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{'background-image': "url('img/product/product-8.jpg')"}}
                  >
                    <div className="categories__text">
                      <h4>Accessories</h4>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
