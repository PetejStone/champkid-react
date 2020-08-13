import React from 'react'
import booklet from '../images/3mistakes.png'
const Popup = () => {
    return (
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <img src={booklet} className="popup-img" />
                <form>
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputName" placeholder="Name" />
                    </div>
                    </form>
                    <button type="submit" class="btn btn-primary popup-accept">ACCESS NOW - FREE</button>
                    <button type="button" class="btn btn-secondary popup-decline" data-dismiss="modal">No Thanks</button>
                </div>
            </div>
         </div>
  
    )
}

export default Popup