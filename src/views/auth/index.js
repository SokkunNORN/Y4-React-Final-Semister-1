
function Login () {
    return (
        <>
            <div class="page-wrap d-flex flex-row align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-12 col-md-6 col-lg-4 text-center">
                            <div class="card p-3">
                                <div class="card-body">
                                    <h2 class="mb-5 mt-2">Login</h2>
                                    <form action="/">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Username" />
                                        </div>
                                        
                                        <br />

                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password" />
                                        </div>

                                        <br />
                                        
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-block btn-danger">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login