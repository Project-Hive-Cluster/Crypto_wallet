import React from 'react'
import { Link } from 'react-router-dom'


export default function Error404() {
    return (
        <div class="px-4 py-5 my-5 text-center">

            <h1 class="display-5 fw-bold ">404</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">OOPS! PAGE NOT BE FOUND</p>
                <p class="mb-4">Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link type="button" to={'/'} class="btn btn-primary btn-lg px-4 gap-3">Back to Home</Link>

                </div>
            </div>
        </div>
    )
}




