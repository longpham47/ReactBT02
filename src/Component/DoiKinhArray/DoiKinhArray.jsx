import React, { Component } from 'react'
import dataGlasses from '../../data/dataGlasses.json'

export default class DoiKinhArray extends Component {
  state = {
    glassList: {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./img/glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }


  changeGlasses = (newGlass) => {
    this.setState({
      glassList: newGlass

    })
  }

  rederGlassList = () => {
    return dataGlasses.map((glass) => {
      return <img onClick={() => { this.changeGlasses(glass) }} src={glass.url} alt="" 
      className="col-2" style={{ width: '110px', backgroundColor: 'yellowgreen', padding: '10px' }} 
      key={`glass-${glass.id}`} />
    })
  }



  render() {
    return (
      <div className='container' style={{ backgroundImage: "url(./img/glassesImage/background.jpg)", backgroundSize: "cover", height: "100%" }}>
        <h3>TRY GLASSES APP ONLINE</h3>

        <div>
          <div className="row container-fluid ">
            <div className="col-3 left">
              <img src="./img/glassesImage/model.jpg" alt="left" />
            </div>

            <div className="col-3 right">
              <div className='mode'>
                <img src="./img/glassesImage/model.jpg" alt="right" />
              </div>
              <img className='kinh' src={this.state.glassList.url} alt="" />
              <div className='info'>
                <span className='name'>{this.state.glassList.name}</span><br />
                <span className='price'>{this.state.glassList.price}$</span><br />
                <span className='desc'>{this.state.glassList.desc}</span>
              </div>
            </div>

          </div>

        </div>

        <div className='rederList container'>
          {this.rederGlassList()}
        </div>

      </div>
    )
  }
}
