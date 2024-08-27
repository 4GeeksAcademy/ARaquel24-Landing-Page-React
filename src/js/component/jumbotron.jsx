import React from "react";

const Jumbotron = () => {
    return (
        <div className="conteiner ">
            <div className=" bg-body border border-dashed rounded-5 p-5">
                <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
                <svg className="bi mt-5 mb-3" width="48" height="48"><use xlinkHref="#check2-circle"></use></svg>
                <h1 className="text-body-emphasis">A Warm Welcome</h1>
                <p className=" mx-auto mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas amet ratione eligendi officia eos maxime quis rem vero quidem reiciendis maiores illum in obcaecati deserunt, odit sed, nostrum, debitis molestiae.
                </p>
                <button className="btn btn-primary px-5 mb-5" type="button">
                Call to action!
                </button>
            </div>

        </div>
    )
}

export default Jumbotron