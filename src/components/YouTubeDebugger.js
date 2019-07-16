// Code YouTubeDebugger Component Here
import React, {Component} from 'react'
export default class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    handleClickBitrate = (cb)=>{
      // this.setState({})
        this.setState({
          // settings.bitrate: 12
          settings:{
            bitrate: 13,
              video: {
                resolution: this.state.settings.resolution
              }
          }

        })
        console.log('this state after bitrate', this.state)
        // console.log('I am clicked')
    }

    handleClickResolution = (cb)=>{
      // this.setState({})
        this.setState({
          // settings.bitrate: 12
          settings:{
            bitrate: this.state.settings.bitrate,
              video: {
                resolution: '720p'
              }
          }

        })
        console.log('this state after bitrate', this.state)
        // console.log('I am clicked')
    }





    render(){
        return(
          <div>
            <button className="bitrate" onClick={this.handleClickBitrate}>butoonYouTube</button>
            <button className="resolution" onClick={this.handleClickResolution}>buttonResoltion</button>
          </div>
        )
    }
}
