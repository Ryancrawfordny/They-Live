import React, {Component} from 'react'
import './Home.css'
import Footer from '../Footer/Footer'

class Home extends Component {
    render() {
        const text = `Often known as the "missing link" bigfoot is a big, hairy, ape man thing that rooms the forests.
        \n Its diet is very much like any primate.\n Witnesses say that it ranges from 6-11 feet tall. Obiviously 
        there is a more than one of them if the thing really does exist,
        seeing as how there is a different variation of the beast ranging from state to state, country to country, continent to continent.`;
        return (
            <div>
            <h1 className='home-h1'>Bigfoot Walks!</h1>
            <h3 className='home-h3'>Who is Bigfoot?</h3>
           <div className='display-linebreak'>
            {text}
          </div>
          </div>
        )
    }
}

export default Home;