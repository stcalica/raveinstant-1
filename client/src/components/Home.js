import React from 'react';
import {Link} from 'react-router';

export let Home = function (props) {
  return (
    <div>

      <div className="text-center">

        <div>
          <div>
            <h1>Rave Instant</h1>
            <p>Never wait again.</p>
          </div>
        </div>

        <p>
          <Link to="Store"><button className="btn-success btn-lg">Click here to see our products</button></Link>
        </p>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-sm-4">
            <h3 className="text-center"><span className="glyphicon glyphicon-ok" aria-hidden="true"></span><br></br>Why wait?</h3>
            <div>Rather than anxiously wondering whether the package will arrive on time for the show, we deliver it directly to you at the venue or the festival.
            </div>
          </div>

          <div className="col-sm-4">
            <h3 className="text-center customGreen"><span className="glyphicon glyphicon-send" aria-hidden="true"></span><br></br>We ship</h3>
            <div>If you would like the package to be delivered to another location, we also do dropshipping. Doesn't matter where, we'll get you your gear.
            </div>
          </div>

          <div className="col-sm-4">
            <h3 className="text-center customGreen"><span className="glyphicon glyphicon-wrench" aria-hidden="true"></span><br></br>Issues?</h3>
            <div>Run into problems with our site? We're still under construction. Just bug us and we'll fix it (someday).
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}