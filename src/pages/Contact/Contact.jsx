

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Contact Us</h1>
                        <p className="py-6">
                            Feel free to contact us via email or phone for any inquiries, support, or collaborations. Our team is dedicated to assisting you promptly. We look forward to hearing from you soon.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <textarea className="border w-full h-24 p-2" placeholder='write your message'>

                            </textarea>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;