import React from "react"

const Population = props => {
    return (
        <div>
            <input
                className="form-input"
                id="txt-input"
                name="username"
                type="text"
                placeholder="Email"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
    )
}
export default Population