import Footer from "../components/Footer";
import NavList from "./NavList";
import blog from "../img/blog_bg.png";
import one from "../img/two.png";

function Blog() {
    return (
        <main>
            <NavList />
            <img src={blog} />

            <section id="blog">

                <div className="row">
                    <div className="col-lg-8 ">

                        <div className="column shadow">
                            <div className="card">
                                <img src={one} alt="comp" style={{ width: '100%' }} />
                                <div className="container">
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to </p>

                                </div>
                            </div>
                        </div>

                        <div className="signupFrm">
                            <div className="wrapper">
                                <form action className="form">
                                    <h4 className="title text-center">Comment</h4>
                                    <div className="inputContainer">
                                        <input type="text" className="input" placeholder="a" />
                                        <label htmlFor className="label">Full Name</label>
                                    </div>
                                    <div className="inputContainer">
                                        <input type="text" className="input" placeholder="a" />
                                        <label htmlFor className="label">Email</label>
                                    </div>
                                    <div className="inputContainer area">
                                        <textarea className="" />
                                        <label htmlFor className="label">Type-Comment</label>
                                    </div>
                                    <button type="submit">submit</button>
                                </form>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4">
                        <div className="latest">
                            <h3>latest post</h3>
                            <div class="list-group">
                                <button type="button" class="list-group-item list-group-item-action ">
                                    Everything You Need to Know About Design System
                                </button>
                                <button type="button" class="list-group-item list-group-item-action">Everything You Need to Know About Design System</button>
                                <button type="button" class="list-group-item list-group-item-action">Everything You Need to Know About Design System</button>
                                <button type="button" class="list-group-item list-group-item-action">Everything You Need to Know About Design System</button>
                                <button type="button" class="list-group-item list-group-item-action">Everything You Need to Know About Design System</button>
                            </div>

                            <h3>Previous post</h3>
                            <div class="list-group">
                                <button type="button" class="list-group-item list-group-item-action ">
                                    Everything You Need to Know About Design System
                                </button>
                                <button type="button" class="list-group-item list-group-item-action">Everything You Need to Know About Design System</button>
                                <button type="button" class="list-group-item list-group-item-action">Everything You Need to Know About Design System</button>
                                <button type="button" class="list-group-item list-group-item-action">Everything You Need to Know About Design System</button>
                                <button type="button" class="list-group-item list-group-item-action">Everything You Need to Know About Design System</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Blog