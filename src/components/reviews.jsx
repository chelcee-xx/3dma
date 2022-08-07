import React from "react"

function Reviews(){
    return(
    <section id="reviews">
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <h3 className="text-center">what our happy clients say</h3>
            <div className="card col-md-3 col-11 first">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile mb-4 mt-3"> <img src="./img/rev1.png" alt="a" /> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                  <div className="card-subtitle">
                    <p> <small className="text-muted"> <i className="fas fa-quote-left" />Being back with 3DMA just gives me peace of mind knowing that my technology is functioning seamlessly behind operations. <i className="fas fa-quote-left fa-flip-horizontal" />
                    </small> </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 col-11 second">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile mb-4 mt-3"> <img src="./img/rev2.png" alt="a" /> </div>
                  <div className="card-subtitle">
                    <p> <small className="text-muted"> <i className="fas fa-quote-left " /> Very late in the day, I received a request from our director to obtain a quote for software and laptops. We needed them by noon the next day. <i className="fas fa-quote-left fa-flip-horizontal" />
                    </small> </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 col-11 third">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile mb-4 mt-3"> <img src="./img/rev3.png" alt="a" /> </div>
                  <div className="card-subtitle">
                    <p> <small className="text-muted"> <i className="fas fa-quote-left" /> Very late in the day, I received a request from our director to obtain a quote for software and laptops. We needed them by noon the next day. <i className="fas fa-quote-left fa-flip-horizontal" />
                    </small> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Reviews;