import React, { Component } from 'react';
import PageTitle from './../../components/PageTitle/PageTitle';

class Video extends Component {
  render() {
    return (
      <div className="bw">
        <div className="brv">
            <PageTitle subtitle="DASHBOARD" title="Live Video" />
        </div>
        <hr className="afc agn" />

        <div className="qt">
          <div role="tabpanel" className="qu active" id="support" aria-expanded="true">
            <div className="bvf agn">
              <iframe className="chartjs-hidden-iframe" tabIndex="-1" style={{display: 'block', overflow: 'hidden', border: '0px', margin: '0px', top: '0px', left: '0px', bottom: '0px', right: '0px', height: '100%', width: '100%', position: 'absolute', pointerEvents: 'none', zIndex: '-1',}}></iframe>
              <img className="rounded img-fluid" style={{width: '100%'}} src={process.env.VIDEO_URL} />
              {/* http://69.245.219.195:8080/stream/video.mjpeg */}
            </div>
          </div>
        </div>
        <hr className="agj" />
      </div>
    );
  }
}

export default Video;